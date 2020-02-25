<?php
Class Admin extends Controller{

    public function index($params=null){
        if ($params != null) {
            $params = explode(" ", $params);
        }

        if (isset($_COOKIE['authenticated'])) {
            if ($_COOKIE['authenticated'] == 'true') {
                header( "Location: ".MAIN_URL."/admin/dashboard" );
            } else {
                header( "Location: ".MAIN_URL);
            }
        } else {
            header( "Location: ".MAIN_URL);
        }
    }

    public function dashboard($params=null){
        if (isset($_COOKIE['authenticated'])) {
            if ($_COOKIE['authenticated'] == 'true') {

            } else {
                header( "Location: ".MAIN_URL);
            }
        } else {
            header( "Location: ".MAIN_URL);
        }

        echo('
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                '.$this->view('admin/head').'
                '.$this->view('admin/dashboard/head').'
            </head>
            <body>
                    '.$this->view('admin/navbar').'
                    '.$this->view('admin/sidebar', 'zeetrav').'
                    '.$this->view('admin/dashboard/body').'
                    '.$this->view('admin/script').'
                    '.$this->view('admin/dashboard/script').'
            </body>
            </html>
        ');
    }

    public function login($params=null){
        $this->view('admin/login/index', $params);
    }

    public function tables($params=null){
        if ($params != null) {
            $params = explode(" ", $params);
        } else {
            header("Location: ".MAIN_URL."/admin/tables/subscribe");
        }

        if ($params[0] == 'subscribe') {
            $this->table_subscribe();
        } elseif ($params[0] == 'message') {
            $this->table_message();
        } elseif ($params[0] == 'purpose') {
            $this->table_purpose();
        } elseif ($params[0] == 'packet') {
            $this->table_packet();
        } elseif ($params[0] == 'region') {
            $this->table_region();
        } elseif ($params[0] == 'option_tour') {
            $this->table_option_tour();
        } elseif ($params[0] == 'testi') {
            $this->table_testi();
        } elseif ($params[0] == 'best_packet') {
            $this->table_best_packet();
        }
    }

    public function table_subscribe($params=null){
        if ($params != null) {
            $params = explode(" ", $params);
        }

        echo('
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                '.$this->view('admin/tables/subscribe/head').'
            </head>
            <body>
                '.$this->view('admin/navbar').'
                '.$this->view('admin/sidebar', 'tables').'
                '.$this->view('admin/tables/subscribe/body').'
                '.$this->view('admin/tables/subscribe/script').'
            </body>
            </html>
        ');
    }

    public function table_message($params=null){
        if ($params != null) {
            $params = explode(" ", $params);
        }

        echo('
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                '.$this->view('admin/tables/message/head').'
            </head>
            <body>
                '.$this->view('admin/navbar').'
                '.$this->view('admin/sidebar', 'tables').'
                '.$this->view('admin/tables/message/body').'
                '.$this->view('admin/tables/message/script').'
            </body>
            </html>
        ');
    }

    public function table_purpose($params=null){
        if ($params != null) {
            $params = explode(" ", $params);
        }

        echo('
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                '.$this->view('admin/tables/purpose/head').'
            </head>
            <body>
                '.$this->view('admin/navbar').'
                '.$this->view('admin/sidebar', 'tables').'
                '.$this->view('admin/tables/purpose/body').'
                '.$this->view('admin/tables/purpose/script').'
            </body>
            </html>
        ');
    }

    public function table_region($params=null){
        if ($params != null) {
            $params = explode(" ", $params);
        }

        echo('
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                '.$this->view('admin/tables/region/head').'
            </head>
            <body>
                '.$this->view('admin/navbar').'
                '.$this->view('admin/sidebar', 'tables').'
                '.$this->view('admin/tables/region/body').'
                '.$this->view('admin/tables/region/script').'
            </body>
            </html>
        ');
    }

    public function table_option_tour($params=null){
        if ($params != null) {
            $params = explode(" ", $params);
        }

        echo('
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                '.$this->view('admin/tables/option_tour/head').'
            </head>
            <body>
                '.$this->view('admin/navbar').'
                '.$this->view('admin/sidebar', 'tables').'
                '.$this->view('admin/tables/option_tour/body').'
                '.$this->view('admin/tables/option_tour/script').'
            </body>
            </html>
        ');
    }

    public function table_packet($params=null){
        if ($params != null) {
            $params = explode(" ", $params);
        }

        echo('
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                '.$this->view('admin/tables/packet/head').'
            </head>
            <body>
                '.$this->view('admin/navbar').'
                '.$this->view('admin/sidebar', 'tables').'
                '.$this->view('admin/tables/packet/body').'
                '.$this->view('admin/tables/packet/script').'
            </body>
            </html>
        ');
    }

    public function table_testi($params=null){
        if ($params != null) {
            $params = explode(" ", $params);
        }

        echo('
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                '.$this->view('admin/tables/testi/head').'
            </head>
            <body>
                '.$this->view('admin/navbar').'
                '.$this->view('admin/sidebar', 'tables').'
                '.$this->view('admin/tables/testi/body').'
                '.$this->view('admin/tables/testi/script').'
            </body>
            </html>
        ');
    }

    public function table_best_packet($params=null){
        if ($params != null) {
            $params = explode(" ", $params);
        }

        echo('
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                '.$this->view('admin/tables/best_packet/head').'
            </head>
            <body>
                '.$this->view('admin/navbar').'
                '.$this->view('admin/sidebar', 'tables').'
                '.$this->view('admin/tables/best_packet/body').'
                '.$this->view('admin/tables/best_packet/script').'
            </body>
            </html>
        ');
    }
}
?>