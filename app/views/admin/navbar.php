<!-- ============================================================== -->
<!-- navbar -->
<!-- ============================================================== -->
<div class="dashboard-header">
    <nav class="navbar navbar-expand-lg bg-white fixed-top">
        <a class="navbar-brand" href="<?=MAIN_URL?>">ZeeTrav</a>
        <button class="navbar-toggler m-1" style="z-index: 9999999999 !important; position: absolute; right: 2%;" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <h1 class="navbar-toggler-icon mt-2" style="color: #333; font-size: 13px !important;" >Menu</h1>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto navbar-right-top">
                <li class="nav-item">
                    <a href="<?=MAIN_URL?>" class="nav-link">View Site</a>
                </li>
                <li class="nav-item dropdown nav-user">
                    <a class="nav-link nav-user-img" href="#" id="navbarDropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="<?=BASE_URL?>/admin/assets/images/avatar-1.jpg" alt="" class="user-avatar-md rounded-circle"></a>
                    <div class="dropdown-menu dropdown-menu-right nav-user-dropdown" aria-labelledby="navbarDropdownMenuLink2" id="wrap_user_navbar">
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</div>
<!-- ============================================================== -->
<!-- end navbar -->
<!-- ============================================================== -->
<script data-plugins="transform-es2015-modules-umd" type="text/babel" src="<?=BASE_URL?>/components/admin/UserNavbar.jsx"></script>