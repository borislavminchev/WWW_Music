<?php
require_once("db.php");

function createNotesTable() {
    $db = new Db("db_config.php");
    $columns = [
        'id' => 'INT UNSIGNED NOT NULL AUTO_INCREMENT',
        'name' => 'VARCHAR(45) NOT NULL',
        'path' => 'VARCHAR(70) NOT NULL',
    ];
    
    $options = [ "PRIMARY KEY (id)" ];
    return $db->createTable("notes", $columns, $options);
}

