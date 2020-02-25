<?php
class Home extends Controller {
    public function index($params=null){
        if ($params != null) {
            $params = explode(" ", $params);
        }
        $this->template($params);
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
                '.$this->view('home/head', $params).'
            </head>
            <body>
                '.$this->view('component/navbar', $params).'
                '.$this->view('home/body', $params).'
                '.$this->view('component/footer', $params).'
                '.$this->view('component/scriptDefault', $params).'
                '.$this->view('home/script', $params).'
            </body>
            </html>
        ');
    }
}
?>