<?php
class Packet extends Controller {
    public function index($params=null){
        if ($params != null) {
            $params = explode(" ", $params);
        }
        
        if ($params[0] == 'item'){
            $this->template_item($params);
        } else {
            $this->template($params);
        }
    }

    public function template($params){
        echo('
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                '.$this->view('component/headDefault', $params).'
                '.$this->view('packet/head', $params).'
            </head>
            <body>
                '.$this->view('component/navbar', $params).'
                '.$this->view('packet/body', $params).'
                '.$this->view('component/footer', $params).'
                '.$this->view('component/scriptDefault', $params).'
                '.$this->view('packet/script', $params).'
            </body>
            </html>
        ');
    }

    public function template_item($params=null){
        echo('
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                '.$this->view('component/headDefault', $params).'
                '.$this->view('packet/head', $params).'
            </head>
            <body>
                '.$this->view('component/navbar', $params).'
                '.$this->view('packet/body_item', $params).'
                '.$this->view('component/footer', $params).'
                '.$this->view('component/scriptDefault', $params).'
                '.$this->view('packet/script_item', $params).'
            </body>
            </html>
        ');
    }
}
?>