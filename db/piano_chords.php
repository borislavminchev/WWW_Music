<?php

require_once("db.php");
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
// createChordTable();
// echo json_encode(getChordNotes("Cmaj"));