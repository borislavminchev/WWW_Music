<?php
require_once("db.php");

$columns = array(
    'id' => 'INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY',
    'name' => 'VARCHAR(30) NOT NULL',
    'path' => 'VARCHAR(50) NOT NULL',
);