<?php
class Db {
    private $connection;

    public function __construct($config_file) {
        $configs = include($config_file);
        $dbhost = $configs['host'];
        $dbName = $configs['database'];
        $userName = $configs['username'];
        $userPassword = $configs['password'];

        $this->connection = new PDO("mysql:host=$dbhost;dbname=$dbName", $userName, $userPassword,
            [
                PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8",
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            ]);
        
    }

    public function getConnection() {
        return $this->connection;
    }

    public function tableExists($table) {
        $query = "SHOW TABLES LIKE '$table'";
        $result = $this->connection->query($query);
        return $result->rowCount() !== 0;
    }

    public function createTable($table, $columns, $options) {
        // $connection = $db->getConnection();
        // $query = "SELECT * FROM users WHERE id = :id";
        // $statement = $connection->prepare($query);
        // $statement->bindParam(':id', $id, PDO::PARAM_INT);
        // $statement->execute();
        // $user = $statement->fetch();
        // $statement->closeCursor();
        
        if ($this->tableExists($table) === false) {
            $columnsString = implode(", ", array_map(function ($columnName, $columnType) {
                return "$columnName $columnType";
            }, array_keys($columns), $columns));

            $optionsString = implode(", ", array_map(function ($option) {
                return "$option";
            }, $options));

            if(count($options) >= 1) {
                $optionsString = ", $optionsString";
            }

            $createTableQuery = "CREATE TABLE $table ($columnsString$optionsString);";
            $statement = $this->connection->prepare($createTableQuery);
            
            try {
                $statement->execute();
            } catch (Exception $e) {
                echo $e->getMessage();
                return false;
            }
            finally {
                $statement->closeCursor();
            }
        }

        return true;
    }
}

//     CREATE TABLE `music_teacher`.`notes` (
//   `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
//   `name` VARCHAR(45) NOT NULL,
//   `path` VARCHAR(70) NOT NULL,
//   PRIMARY KEY (`id`));