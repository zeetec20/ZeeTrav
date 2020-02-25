<?php

class App {
    protected $controller = 'NotFound';
    protected $method = 'index';
    protected $params = [];

    public function __construct() {
        $path = $this->path();
        
        if( file_exists('app/controllers/'.ucfirst($path[0]).'.php') ) {
            $this->controller = ucfirst($path[0]);
            if ($path[0] == 'home') {
                $this->controller = 'NotFound';
            }
            if ($path[0] != 'packet') {
                unset($path[0]);
            }
        } else if ($path == NULL) {
            $this->controller = 'Home';
        } else {
            $this->controller = 'NotFound';
        }

        require_once 'app/controllers/' . $this->controller . '.php';
        $this->controller = new $this->controller;

        if( isset($path[1]) ) {
            if ($path[0] == 'packet' and ($path[1] == 'option' or $path[1] == 'item') and isset($path[2])) {
                unset($path[0]);
                $this->method = 'index';
                array_unshift($path, $path[1]);
                unset($path[1]);
            } else {
                if( method_exists($this->controller, $path[1]) ) {
                    $this->method = $path[1];
                    unset($path[1]);
                } else {
                    $this->controller = 'NotFound';
                    require_once 'app/controllers/' . $this->controller . '.php';
                    $this->controller = new $this->controller;
                }
            }
        }

        if( !empty($path) ) {
            $this->params = [implode(" ", $path)];
        }
        
        call_user_func_array([$this->controller, $this->method], $this->params);
    }

    public function path(){
        if (isset($_GET['path'])) {
            $path = rtrim($_GET['path'], '/');
            $path = filter_var($path, FILTER_SANITIZE_URL);
            $path = explode('/', $path);
            
            return $path;
        }
    }
}
?>