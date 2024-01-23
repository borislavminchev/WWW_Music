<?php
require_once("db.php");

function createNotesTable() {
    $projectRootPath = null;
    if (PHP_SAPI !== 'cli') 
        $projectRootPath = $_SERVER["DOCUMENT_ROOT"];
    else 
        $projectRootPath = getcwd();
    
    $db = new Db("$projectRootPath/config/db_config.php");

    $columns = [
        'id' => 'INT UNSIGNED NOT NULL AUTO_INCREMENT',
        'note_name' => 'VARCHAR(45) NOT NULL',
        'path' => 'VARCHAR(70) NOT NULL',
        'instument_type' => 'VARCHAR(20) NOT NULL'
    ];
    
    $options = [ "PRIMARY KEY (id)" ];
    return $db->createTable("notes", $columns, $options);
}

function getNotePath($note) {
    $projectRootPath = null;
    if (PHP_SAPI !== 'cli') 
        $projectRootPath = $_SERVER["DOCUMENT_ROOT"];
    else 
        $projectRootPath = getcwd();
    $db = new Db("$projectRootPath/config/db_config.php");

    $options = [
        "note_name='$note'",
        
        "instument_type='piano'"
    ];

    $resultPath = $db->readValues("notes", ["path"], $options);
    
    $path = $resultPath[0]['path'];

    // $soundConfig = include("$projectRootPath/config/sound_config.php");
    // $soundRootPath = $soundConfig['sound_path_root'];

    return $path;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $jsonData = file_get_contents('php://input');

    $requestData = json_decode($jsonData, true);
    if ($requestData !== null) {

        $result = getNotePath($requestData["note"]);
        
        echo json_encode($result);
    } else {
        
        echo json_encode("");
    }
} else {
    echo json_encode("");
}
// createNotesTable();
// echo json_encode(getNotePath("C4"));