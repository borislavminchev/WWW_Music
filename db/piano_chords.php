<?php

require_once("db.php");

header('Content-Type: application/json');

function createChordTable() {
    $projectRootPath = null;
    if (PHP_SAPI !== 'cli') 
        $projectRootPath = $_SERVER["DOCUMENT_ROOT"];
    else 
        $projectRootPath = getcwd();

    $db = new Db("$projectRootPath/config/db_config.php");
    $columns = [
        'id' => 'INT UNSIGNED NOT NULL AUTO_INCREMENT',
        'chord_name' => 'VARCHAR(20) NOT NULL',
        'note' => 'VARCHAR(20) NOT NULL',
    ];
    
    $options = [ "PRIMARY KEY (id)" ];
    return $db->createTable("chords", $columns, $options);
}

function getChordNotes($chord) {
    $projectRootPath = null;
    if (PHP_SAPI !== 'cli') 
        $projectRootPath = $_SERVER["DOCUMENT_ROOT"];
    else 
        $projectRootPath = getcwd();

    $db = new Db("$projectRootPath/config/db_config.php");

    $options = [
        "chord_name='$chord'"
    ];

    $resultNotes = $db->readValues("chords", ["note"], $options);
    
    $notes = array_map(function ($queryResult) {
        return $queryResult["note"];
    }, $resultNotes);

    return $notes;
    
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $jsonData = file_get_contents('php://input');

    $requestData = json_decode($jsonData, true);
    if ($requestData !== null) {

        $result = getChordNotes($requestData["chord"]);
        
        echo json_encode($result);
    } else {
        
        echo json_encode([]);
    }
} else {
    echo json_encode([]);
}
