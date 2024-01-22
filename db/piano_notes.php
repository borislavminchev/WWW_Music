<?php
require_once("db.php");

function createNotesTable() {
    $db = new Db("db_config.php");
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
    $db = new Db("db_config.php");

    $options = [
        "note_name='$note'",
        "instument_type='piano'"
    ];

    $resultPath = $db->readValues("notes", ["path"], $options);
    
    $path = $resultPath[0]['path'];

    return $path;
}

// echo getNotePath("C4");