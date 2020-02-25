<?php

class Database {
    protected $conn;

    public function __construct() {
        $this->conn = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);
        
        if (mysqli_connect_errno()) {
            echo "Failed to connect to MySQL: " . mysqli_connect_error();
            exit();
        }
    }

    public function table($method = null, $table = null, $where = null, $only = null) {
        if ($method == 'get') {
                if ($where == null and $only == null) {
                    $result = mysqli_query($this->conn, "SELECT * FROM `$table`");
                    if ($table == 'best_packet') {
                        $result = mysqli_query($this->conn, "SELECT * FROM `$table` ORDER BY `best_packet`.`id_best_packet` ASC");
                    }
                } else {
                    $result = mysqli_query($this->conn, "SELECT * FROM `$table` WHERE $where");
                }
                if (!$result) {
                    echo("Error description: " . mysqli_error($this->conn));
                } else {
                    return mysqli_fetch_all($result, MYSQLI_ASSOC);
                }
            return mysqli_fetch_all($result, MYSQLI_ASSOC);
        } else if ($method == 'get_only'){
            $result = mysqli_query($this->conn, "SELECT DISTINCT `$where` FROM `$table`");
            
            if (!$result) {
                echo("Error description: " . mysqli_error($this->conn));
            } else {
                return mysqli_fetch_all($result, MYSQLI_ASSOC);
            }
        }
        if ($method == 'post') {
            if (mysqli_query($this->conn, $table)) {
                return [true];
            } else {
                return [false, $this->conn];
            }
        }
        if ($method == 'delete') {
            if (mysqli_query($this->conn, "DELETE FROM `$table` WHERE $where")) {
                return true;
            } else {
                return false;
            }
        }
    }
}
?>