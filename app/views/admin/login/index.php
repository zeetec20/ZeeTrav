<?php

if (isset($_COOKIE['authenticated'])) {
    if ($_COOKIE['authenticated'] == 'true') {
        header( "Location: ".MAIN_URL."/admin/dashboard" );
    }
}
?>

<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Login</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="<?=BASE_URL?>/admin/assets/vendor/bootstrap/css/bootstrap.min.css">
    <link href="<?=BASE_URL?>/admin/assets/vendor/fonts/circular-std/style.css" rel="stylesheet">
    <link rel="stylesheet" href="<?=BASE_URL?>/admin/assets/libs/css/style.css">
    <link rel="stylesheet" href="<?=BASE_URL?>/admin/assets/vendor/fonts/fontawesome/css/fontawesome-all.css">
    <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>
    <style>
    html,
    body {
        height: 100%;
    }

    body {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        padding-top: 40px;
        padding-bottom: 40px;
    }
    </style>
    
    <script>
        const BASE_URL = '<?=BASE_URL?>'
        const MAIN_URL = '<?=MAIN_URL?>'
    </script>
</head>

<body>
    <!-- ============================================================== -->
    <!-- login page  -->
    <!-- ============================================================== -->
    <div class="splash-container">
        <div class="card ">
            <div class="card-header text-center">
                <a href="<?=MAIN_URL?>">
                    <h1>ZeeTrav</h1>
                </a>
                <span class="splash-description" id="form_info">Please enter your user information.</span>
            </div>
            <div class="card-body" id="wrap_form_login">
            </div>
        </div>
    </div>
  
    <!-- ============================================================== -->
    <!-- end login page  -->
    <!-- ============================================================== -->
    <!-- Optional JavaScript -->
    <script src="<?=BASE_URL?>/admin/assets/vendor/jquery/jquery-3.3.1.min.js"></script>
    <script src="<?=BASE_URL?>/admin/assets/vendor/bootstrap/js/bootstrap.bundle.js"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script data-plugins="transform-es2015-modules-umd" type="text/babel" src="<?=BASE_URL?>/components/admin/login/Login.jsx"></script>
</body>
 
</html>