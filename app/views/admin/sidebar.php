
<!-- ============================================================== -->
<!-- left sidebar -->
<!-- ============================================================== -->
<div class="nav-left-sidebar sidebar-dark">
    <div class="menu-list">
        <nav class="navbar navbar-expand-lg navbar-light">
            <button class="navbar-toggler" style="margin-top: 4rem !important;" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav flex-column">
                    <li class="nav-divider">
                        Menu
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link <?php if ($data == 'zeetrav') echo('active'); ?>" href="<?=MAIN_URL?>/admin/" ><i class="fa fa-fw fa-user-circle"></i>ZeeTrav</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-4" aria-controls="submenu-4"><i class="fab fa-fw fa-wpforms"></i>Forms</a>
                        <div id="submenu-4" class="collapse submenu" style="">
                            <ul class="nav flex-column">
                                <li class="nav-item">
                                    <a class="nav-link" href="<?=MAIN_URL?>/admin/form/purpose">Purpose</a>
                                    <a class="nav-link" href="<?=MAIN_URL?>/admin/form/packet">Packet</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link <?php if ($data == 'tables') echo('active');?>" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-5" aria-controls="submenu-5"><i class="fas fa-fw fa-table"></i>Tables</a>
                        <div id="submenu-5" class="collapse submenu" style="">
                            <ul class="nav flex-column">
                                <li class="nav-item">
                                    <a class="nav-link" href="<?=MAIN_URL?>/admin/tables/subscribe">Subscribe</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="<?=MAIN_URL?>/admin/tables/packet">Packet</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="<?=MAIN_URL?>/admin/tables/purpose">Destination</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="<?=MAIN_URL?>/admin/tables/message">Message</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="<?=MAIN_URL?>/admin/tables/region">Region</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="<?=MAIN_URL?>/admin/tables/option_tour">Option Tour</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="<?=MAIN_URL?>/admin/tables/testi">Testi</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="<?=MAIN_URL?>/admin/tables/best_packet">Best Packet</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</div>
<!-- ============================================================== -->
<!-- end left sidebar -->
<!-- ============================================================== -->