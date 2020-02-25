<?php

class Api extends Controller{
    public function index(){

    }

    public function login(){
        $table = 'user';
        if ($_POST != null) {
            function checkEmail($email) {
                $find1 = strpos($email, '@');
                $find2 = strpos($email, '.');
                return ($find1 and $find2);
            }
            
            $username_email = $_POST['username_email'];
            $password = strval( $_POST['password']);
            if (checkEmail($username_email)) {
                $result = $this->table($method = 'get', $table = $table, $where = 'email = \''.$username_email.'\'');
            } else {
                $result = $this->table($method = 'get', $table = $table, $where = 'username = \''.$username_email.'\'');
            }
            $password_match = $result[0]['password'];

            if ($password === $password_match) {
                echo(json_encode(['success' => true, 'email' => $result[0]['email'], 'username' => $result[0]['username']]));
            } else {
                echo(json_encode(['success' => false]));
            }
        }
    }

    public function token($params = bull){
        if ($_POST != null) {
            
        } else if ($params != null) {
            $where = null;
            if (isset($params[1])) {
                $where = 'id_token = '.$params[1];
            }
            echo(json_encode($this->table($method = 'get', $table = 'token', $where = $where)));
        }
    }

    public function option_tour($params = null){
        if ($params != null) {
            $params = explode(" ", $params);
        }

        $table = 'option_tour';
        if ($_POST != null) {
            if ($params[0] == 'delete') {
                $where = 'id_option_tour = '.$_POST['key'];
                $execute = $this->table($method = 'delete', $table = $table, $where = $where);
                if ($execute) {
                    echo(json_encode(['success' => true]));
                } else {
                    echo(json_encode(['success' => false]));
                }
            } elseif ($params[0] == 'update') {
                if (isset($_POST['name']) && isset($_POST['slugify']) && isset($_POST['id_option_tour'])) {
                    $query = "UPDATE `".$table."` SET `name` = '".$_POST['name']."', `slugify` = '".$_POST['slugify']."' WHERE `id_option_tour` = '".$_POST['id_option_tour']."'";
    
                    $execute = $this->table($method = 'post', $table = $query);
                    if ($execute[0]) {
                        echo(json_encode(['success'=> true]));
                    } else {
                        echo(json_encode(['success'=> $execute[1]]));
                    }
                }
            } else {
                if (isset($_POST['name']) && isset($_POST['slugify'])) {
                    $query = "INSERT INTO `".$table."`(`name`, `slugify`) VALUES ('".$_POST['name']."', '".$_POST['slugify']."')";
                    
                    $execute = $this->table($method = 'post', $table = $query);
                    if ($execute[0]) {
                        echo(json_encode(['success'=> true]));
                    } else {
                        echo(json_encode(['success'=> $execute[1]]));
                    }
                }
            }
        } else if ($params != null) {
            $where = null;
            if ($params[0] == 'get_only') {
                $result = $this->table($method = 'get_only', $table = $table, $where = $params[1]);
            } else {
                if (isset($params[1])) {
                    $where = 'id_option_tour = '.$params[1];
                    $result = $this->table($method = 'get', $table = $table, $where = $where);
                } else{
                    $result = $this->table($method = 'get', $table = $table, $where = $where);
                }
            }
            echo(json_encode($result));
        }
    }

    public function subscribe($params = null){
        if ($params != null) {
            $params = explode(" ", $params);
        }

        $table = 'subscribe';
        if ($_POST != null) {
            if ($params[0] == 'delete') {
                $where = 'id_subscribe = '.$_POST['key'];
                $execute = $this->table($method = 'delete', $table = $table, $where = $where);
                if ($execute) {
                    echo(json_encode(['success' => true]));
                } else {
                    echo(json_encode(['success' => false]));
                }
            } else {
                $value = [`email`, [$_POST['email']]];
                $query = "INSERT INTO `subscribe`(`email`) VALUES ('".$_POST['email']."')";
                $listEmail = $this->table($method = 'get_only', $table = $table, $where = 'email');
                $newListEmail = [];
                foreach ($listEmail as $key => $value) {
                    array_push($newListEmail, $value['email']);
                }
                if (!in_array($_POST['email'], $newListEmail)) {
                    $execute = $this->table($method = 'post', $table = $query);
                    if ($execute[0]) {
                        echo(json_encode(['success'=> true]));
                    } else {
                        echo(json_encode(['success'=> false]));
                    }
                } else {
                    echo(json_encode(['message' => 'Already Subscribed']));
                }
            }
        } else if ($params != null) {
            $where = null;
            if ($params[0] == 'get_only') {
                $result = $this->table($method = 'get_only', $table = $table, $where = $params[1]);
            } else {
                if (isset($params[1])) {
                    $where = 'id_subscribe = '.$params[1];
                    $result = $this->table($method = 'get', $table = $table, $where = $where);
                } else{
                    $result = $this->table($method = 'get', $table = $table, $where = $where);
                }
            }

            echo(json_encode($result));
        }
        
    }

    public function testi($params = null) {
        if ($params != null) {
            $params = explode(" ", $params);
        }

        $table = 'testi';
        if ($_POST != null) {
            if ($params[0] == 'delete') {
                $where = 'id_testi = '.$_POST['key'];
                $execute = $this->table($method = 'delete', $table = $table, $where = $where);
                if ($execute) {
                    echo(json_encode(['success' => true]));
                } else {
                    echo(json_encode(['success' => false]));
                }
            } elseif ($params[0] == 'update') {
                if (isset($_POST['name']) && isset($_POST['text']) && isset($_POST['job']) && isset($_POST['id_testi'])) {
                    $query = "UPDATE `".$table."` SET `name` = '".$_POST['name']."', `text` = '".$_POST['text']."', `job` = '".$_POST['job']."' WHERE `id_testi` = '".$_POST['id_testi']."'";
    
                    $execute = $this->table($method = 'post', $table = $query);
                    if ($execute[0]) {
                        echo(json_encode(['success'=> true]));
                    } else {
                        echo(json_encode(['success'=> $execute[1]]));
                    }
                }
            } else {
                if (isset($_POST['name']) && isset($_POST['text']) && isset($_POST['job'])) {
                    $query = "INSERT INTO `".$table."`(`name`, `text`, `job`) VALUES ('".$_POST['name']."', '".$_POST['text']."', '".$_POST['job']."')";
    
                    $execute = $this->table($method = 'post', $table = $query);
                    if ($execute[0]) {
                        echo(json_encode(['success'=> true]));
                    } else {
                        echo(json_encode(['success'=> $execute[1]]));
                    }
                }
            }
        } else if ($params != null) {
            $where = null;
            if ($params[0] == 'get_only') {
                $result = $this->table($method = 'get_only', $table = $table, $where = $params[1]);
            } else {
                if (isset($params[1])) {
                    $where = 'id_testi = '.$params[1];
                    $result = $this->table($method = 'get', $table = $table, $where = $where);
                } else{
                    $result = $this->table($method = 'get', $table = $table, $where = $where);
                }
            }

            echo(json_encode($result));
        }
    }

    public function scrape_tag_insta($params = null) {
        if ($params != null) {
            $params = explode(" ", $params);

            $insta_source = file_get_contents('https://www.instagram.com/explore/tags/'.$params[0].'?__a=1');
            echo(json_encode($insta_source));
        }
    }

    public function dbjson($params = null) {
        if ($params != null) {
            $params = explode(" ", $params);
        }

        if ($_POST != null or $_FILES != null) {
            $file_json = "app/core/db.json";
            $text = $_POST['text'];
            $json = json_decode(file_get_contents($file_json), true);
            // $prevJson = [[null, $json]];
            
            if ($params == ['about']) {
                $json['about'] = $text;
            }
            
            if ($params == ['contact', 'address', 'text']) {
                $json['contact']['address']['text'] = $text;
            }

            if ($params == ['contact', 'address', 'descript']) {
                $json['contact']['address']['descript'] = $text;
            }

            if ($params == ['contact', 'number_phone', 'text']) {
                $json['contact']['number_phone']['text'] = $text;
            }

            if ($params == ['contact', 'number_phone', 'descript']) {
                $json['contact']['number_phone']['descript'] = $text;
            }

            if ($params == ['contact', 'email', 'text']) {
                $json['contact']['email']['text'] = $text;
            }

            if ($params == ['contact', 'email', 'descript']) {
                $json['contact']['email']['descript'] = $text;
            }

            if ($params == ['facilities', '0', 'name']) {
                $json['facilities'][0]['name'] = $text;
            }

            if ($params == ['facilities', '0', 'descript']) {
                $json['facilities'][0]['descript'] = $text;
            }

            if ($params == ['facilities', '0', 'image']) {
                $name = 'facilities1';
                $upload = $this->uploadImage('facilities/image/', $_FILES['image'], $name);
                if ($upload) {
                    $image = "/media/facilities/image/".$name.substr($_FILES['image']['name'], stripos($_FILES['image']['name'], '.'));
                    $json['facilities'][0]['image'] = $image;
                }
            }

            if ($params == ['facilities', '1', 'name']) {
                $json['facilities'][1]['name'] = $text;
            }

            if ($params == ['facilities', '1', 'descript']) {
                $json['facilities'][1]['descript'] = $text;
            }

            if ($params == ['facilities', '1', 'image']) {
                $name = 'facilities2';
                $upload = $this->uploadImage('facilities/image/', $_FILES['image'], $name);
                if ($upload) {
                    $image = "/media/facilities/image/".$name.substr($_FILES['image']['name'], stripos($_FILES['image']['name'], '.'));
                    $json['facilities'][1]['image'] = $image;
                }
            }

            if ($params == ['facilities', '2', 'name']) {
                $json['facilities'][2]['name'] = $text;
            }

            if ($params == ['facilities', '2', 'descript']) {
                $json['facilities'][2]['descript'] = $text;
            }

            if ($params == ['facilities', '2', 'image']) {
                $name = 'facilities3';
                $upload = $this->uploadImage('facilities/image/', $_FILES['image'], $name);
                if ($upload) {
                    $image = "/media/facilities/image/".$name.substr($_FILES['image']['name'], stripos($_FILES['image']['name'], '.'));
                    $json['facilities'][2]['image'] = $image;
                }
            }

            $update = file_put_contents($file_json, json_encode($json));
            // echo(json_encode([$update, $json]));
        } else if ($params != null) {
            $json = json_decode(file_get_contents("app/core/db.json"), true);
            foreach ($params as $key => $value) {
                if (isset($json["$params[$key]"])) {
                    $json = $json["$params[$key]"];

                    if (count($params) == ($key + 1)) {
                        echo(json_encode($json));
                    }
                }
            }
        } else {
            $json = json_decode(file_get_contents("app/core/db.json"), true);
            echo(json_encode($json));
        }
    }

    public function message($params=null){
        if ($params != null) {
            $params = explode(" ", $params);
        }

        $table = 'message';
        if ($_POST != null and isset($_POST['name']) and isset($_POST['email']) and isset($_POST['subject']) and isset($_POST['message'])) {
            $query = "INSERT INTO `".$table."`(`name`, `email`, `subject`, `message`) VALUES ('".$_POST['name']."','".$_POST['email']."','".$_POST['subject']."','".$_POST['message']."')";

            $execute = $this->table($method = 'post', $table = $query);
            if ($execute[0]) {
                echo(json_encode(['success'=> true]));
            } else {
                echo(json_encode(['success'=> $execute[1]]));
            }
        } else if ($params != null) {
            $where = null;
            if ($params[0] == 'get_only') {
                $result = $this->table($method = 'get_only', $table = $table, $where = $params[1]);
            } else {
                if (isset($params[1])) {
                    $where = 'id_message = '.$params[1];
                    $result = $this->table($method = 'get', $table = $table, $where = $where);
                } else{
                    $result = $this->table($method = 'get', $table = $table, $where = $where);
                }
            }

            echo(json_encode($result));
        }
    }

    public function purpose($params=null){
        if ($params != null) {
            $params = explode(" ", $params);
        }

        $table = 'purpose';
        if ($_POST != null) {
            if ($params[0] == 'delete') {
                $where = 'id_purpose = '.$_POST['key'];
                $execute = $this->table($method = 'delete', $table = $table, $where = $where);
                if ($execute) {
                    echo(json_encode(['success' => true]));
                } else {
                    echo(json_encode(['success' => false]));
                }
            } elseif ($params[0] == 'update') {
                if (isset($_POST['name']) && isset($_POST['region']) && isset($_POST['id_purpose'])) {
                    $query = "UPDATE `".$table."` SET `name` = '".$_POST['name']."', `region` = '".$_POST['region']."' WHERE `id_purpose` = '".$_POST['id_purpose']."'";
    
                    $execute = $this->table($method = 'post', $table = $query);
                    if ($execute[0]) {
                        echo(json_encode(['success'=> true]));
                    } else {
                        echo(json_encode(['success'=> $execute[1]]));
                    }
                }
            } else {
                if (isset($_POST['name']) && isset($_POST['region'])) {
                    $query = "INSERT INTO `".$table."`(`name`, `region`) VALUES ('".$_POST['name']."', '".$_POST['region']."')";
    
                    $execute = $this->table($method = 'post', $table = $query);
                    if ($execute[0]) {
                        echo(json_encode(['success'=> true]));
                    } else {
                        echo(json_encode(['success'=> $execute[1]]));
                    }
                }
            }
        } else if ($params != null) {
            $where = null;
            if ($params[0] == 'get_only') {
                $result = $this->table($method = 'get_only', $table = $table, $where = $params[1]);
            } else {
                if (isset($params[1])) {
                    $where = 'id_purpose = '.$params[1];
                    $result = $this->table($method = 'get', $table = $table, $where = $where);
                } else{
                    $result = $this->table($method = 'get', $table = $table, $where = $where);
                }
            }

            echo(json_encode($result));
        }
    }

    public function region($params=null){
        if ($params != null) {
            $params = explode(" ", $params);
        }

        $table = 'region';
        if ($_POST != null) {
            if ($params[0] == 'delete') {
                $where = 'id_region = '.$_POST['key'];
                $execute = $this->table($method = 'delete', $table = $table, $where = $where);
                if ($execute) {
                    echo(json_encode(['success' => true]));
                } else {
                    echo(json_encode(['success' => false]));
                }
            } elseif ($params[0] == 'update') {
                if (isset($_POST['name']) && isset($_POST['id_region'])) {
                    $query = "UPDATE `".$table."` SET `name` = '".$_POST['name']."' WHERE `id_region` = '".$_POST['id_region']."'";
    
                    $execute = $this->table($method = 'post', $table = $query);
                    if ($execute[0]) {
                        echo(json_encode(['success'=> true]));
                    } else {
                        echo(json_encode(['success'=> $execute[1]]));
                    }
                }
            } else {
                if (isset($_POST['name'])) {
                    $query = "INSERT INTO `".$table."`(`name`) VALUES ('".$_POST['name']."')";
                    
                    $execute = $this->table($method = 'post', $table = $query);
                    if ($execute[0]) {
                        echo(json_encode(['success'=> true]));
                    } else {
                        echo(json_encode(['success'=> $execute[1]]));
                    }
                }
            }
        } else if ($params != null) {
            $where = null;
            if ($params[0] == 'get_only') {
                $result = $this->table($method = 'get_only', $table = $table, $where = $params[1]);
            } else {
                if (isset($params[1])) {
                    $where = 'id_region = '.$params[1];
                    $result = $this->table($method = 'get', $table = $table, $where = $where);
                } else{
                    $result = $this->table($method = 'get', $table = $table, $where = $where);
                }
            }

            echo(json_encode($result));
        }
    }

    public function best_packet($params=null){
        if ($params != null) {
            $params = explode(" ", $params);
        }

        $table = 'best_packet';
        if ($_POST != null) {
            if ($params[0] == 'delete') {
                $where = 'id_best_packet = '.$_POST['key'];
                $execute = $this->table($method = 'delete', $table = $table, $where = $where);
                if ($execute) {
                    echo(json_encode(['success' => true]));
                } else {
                    echo(json_encode(['success' => false]));
                }
            } else {
                if (isset($_POST['packet'])) {
                    $query = "INSERT INTO `".$table."`(`packet`) VALUES ('".$_POST['packet']."')";
                    
                    $execute = $this->table($method = 'post', $table = $query);
                    if ($execute[0]) {
                        echo(json_encode(['success'=> true]));
                    } else {
                        echo(json_encode(['success'=> $execute[1]]));
                    }
                }
            }
        } else if ($params != null) {
            $where = null;
            if ($params[0] == 'get_only') {
                $result = $this->table($method = 'get_only', $table = $table, $where = $params[1]);
            } else {
                if (isset($params[1])) {
                    $where = 'id_region = '.$params[1];
                    $result = $this->table($method = 'get', $table = $table, $where = $where);
                } else{
                    $result = $this->table($method = 'get', $table = $table, $where = $where);
                }
            }

            echo(json_encode($result));
        }
    }

    public function packet($params=null){
        if ($params != null) {
            $params = explode(" ", $params);
        }

        $table = 'packet';
        if ($_POST != null) {
            if ($params[0] == 'delete') {
                $where = 'id_packet = '.$_POST['key'];
                $execute = $this->table($method = 'delete', $table = $table, $where = $where);
                if (file_exists('public/'.$_POST['path'])) {
                    chmod('public/'.$_POST['path'], 0777);
                    chmod('public/media/packet', 0777);
                    unlink('public/'.$_POST['path']);
                }
                if ($execute) {
                    echo(json_encode(['success' => true]));
                } else {
                    echo(json_encode(['success' => $_POST['key']]));
                }
            } elseif ($params[0] == 'update') {
                if (isset($_POST['name']) && isset($_POST['detail']) && isset($_POST['option_tour']) && isset($_POST['price']) && isset($_POST['start'])) {
                    $query = "UPDATE `".$table."` SET `name` = '".$_POST['name']."', `detail` = '".$_POST['detail']."', `option_tour` = '".$_POST['option_tour']."', `price` = '".$_POST['price']."', `start` = '".$_POST['start']."' WHERE `id_packet` = '".$_POST['id_packet']."'";
                    $name = str_replace(" ", "-", strtolower($_POST['name']));
                    $path = 'packet/';
                    if (isset($_FILES['cover'])) {
                        if ($this->uploadImage($path, $_FILES['cover'], $name)) {
                            $image = "/media"."/".$path.$name.substr($_FILES['cover']['name'], stripos($_FILES['cover']['name'], '.'));
                            $query = "UPDATE `".$table."` SET `name` = '".$_POST['name']."', `cover` = '".$image."', `detail` = '".$_POST['detail']."', `option_tour` = '".$_POST['option_tour']."', `price` = '".$_POST['price']."', `start` = '".$_POST['start']."' WHERE `id_packet` = '".$_POST['id_packet']."'";
                        }
                    }

                    $execute = $this->table($method = 'post', $table = $query);
                    if ($execute[0]) {
                        echo(json_encode(['success'=> true]));
                    } else {
                        echo(json_encode(['success'=> $query]));
                    }
                }
            } else {
                if (isset($_POST['name']) and isset($_POST['detail']) and isset($_POST['option_tour']) and isset($_POST['price']) and isset($_POST['start']) and isset($_POST['slugify'])) {
                    $name = str_replace(" ", "-", strtolower($_POST['name']));
                    $path = "packet/";
                    if ($this->uploadImage($path, $_FILES['cover'], $name)) {
                        $image = "/media"."/".$path.$name.substr($_FILES['cover']['name'], stripos($_FILES['cover']['name'], '.'));
                        $query = "INSERT INTO `".$table."`(`name`, `detail`, `cover`, `option_tour`, `price`, `slugify`, `start`) VALUES ('".$_POST['name']."', '".$_POST['detail']."', '".$image."', '".$_POST['option_tour']."', '".$_POST['price']."', '".$_POST['slugify']."', '".$_POST['start']."')";                            
                    }

                    $execute = $this->table($method = 'post', $table = $query);
                    if ($execute[0]) {
                        echo(json_encode(['success'=> true]));
                    } else {
                        echo(json_encode(['success'=> $execute[1]]));
                    }
                }
            }
        } else if ($params != null) {
            $where = null;
            if ($params[0] == 'get_only') {
                $result = $this->table($method = 'get_only', $table = $table, $where = $params[1]);
            } else {
                if (isset($params[1])) {
                    $where = 'id_packet = '.$params[1];
                    $result = $this->table($method = 'get', $table = $table, $where = $where);
                } else{
                    $result = $this->table($method = 'get', $table = $table, $where = $where);
                }
            }
            echo(json_encode($result));
        }
    }

    public function packet_purpose_forloop($table=null, $value=null, $packet=null){
        $query = "INSERT INTO `".$table."`(`purpose`, `packet`) VALUES ('".$value."', '".$packet."')";
        $execute = $this->table($method = 'post', $table = $query);
        return $execute;
    }

    public function packet_purpose($params=null){
        if ($params != null) {
            $params = explode(" ", $params);
        }

        $table = 'packet_purpose';
        if ($_POST != null) {
            if ($params[0] == 'delete') {
                $where = 'id_packet_purpose = '.$_POST['key'];
                $execute = $this->table($method = 'delete', $table = $table, $where = $where);
                if ($execute) {
                    echo(json_encode(['success' => true]));
                } else {
                    echo(json_encode(['success' => false]));
                }
            } else {
                if (isset($_POST['purpose']) and isset($_POST['packet'])) {
                    $purpose = explode(",", $_POST['purpose']);
                    $packet = $_POST['packet'];
                    $success = true;
                    foreach ($purpose as $key => $value) {
                        $response = $this->packet_purpose_forloop($table=$table, $value=$value, $packet=$packet);
                        $success = ($success and $response);
                        if ($success and $key == (count($purpose) -1)) {
                            echo(json_encode(['success'=> true]));
                        } elseif ($key == (count($purpose) -1)) {
                            echo(json_encode(['success'=> false]));
                        }
                    }
                }
            }
        } else if ($params != null) {
            $where = null;
            if ($params[0] == 'get_only') {
                $result = $this->table($method = 'get_only', $table = $table, $where = $params[1]);
            } else {
                if (isset($params[1])) {
                    $where = 'id_packet_purpose = '.$params[1];
                    $result = $this->table($method = 'get', $table = $table, $where = $where);
                } else{
                    $result = $this->table($method = 'get', $table = $table, $where = $where);
                }
            }
            echo(json_encode($result));
        }
    }
    
    public function uploadImage($path, $image, $name) {
        $target_dir = "public/media/".$path;
        $file_ext = substr($image['name'], stripos($image['name'], '.'));
        $newName = $name.$file_ext;
        move_uploaded_file($image['tmp_name'], $target_dir.$newName);
        if (file_exists($target_dir.$newName)) {
            return true;
        } else {
            return false;
        }
    }
}
?>