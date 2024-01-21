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
        return $result->rowCount() != 0;
    }

    public function createTable($table, $columns) {
        // $connection = $db->getConnection();
        // $query = "SELECT * FROM users WHERE id = :id";
        // $statement = $connection->prepare($query);
        // $statement->bindParam(':id', $id, PDO::PARAM_INT);
        // $statement->execute();
        // $user = $statement->fetch();
        // $statement->closeCursor();

        if (!$this->tableExists($table)) {
            $columnsString = implode(", ", array_map(function ($columnName, $columnType) {
                return "$columnName $columnType";
            }, array_keys($columns), $columns));

            $createTableQuery = "CREATE TABLE :tableName (:columnsString)";
            $statement = $this->connection->prepare($createTableQuery);
            try {
                $statement->bindParam(':tableName', $table, PDO::PARAM_STR);
                $statement->bindParam(':columnsString', $columnsString, PDO::PARAM_STR);
                $statement->execute();
                $result = $statement->fetch();
                if (!$result) {
                    throw new Exception("Couldn't create table: $table");
                }
            } catch (Exception $e) {
                echo "Error creating table $table: " . $e->getMessage() . "\n";
                return false;
            } finally {
                $statement->closeCursor();
            }
        } 

        return true;
    }
}