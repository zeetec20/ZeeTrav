<?php

class Controller extends Database{
    public function view($view, $params=null){
        $path = 'app/views/'.$view.'.php';
        if (file_exists($path)) {
            require_once($path);
        } else {
            
        }
    }
}

?>