<!--================ Start banner section =================-->
<section class="home-banner-area common-banner relative">
    <div class="container-fluid">
        <div class="row d-flex align-items-center justify-content-center">
            <div class="header-right col-lg-6 col-md-6">
                <h1>
                    Contact Us
                </h1>
                <p class="pt-20">
                    We all live in an age that belongs to the young at heart. Life that is becoming extremely fast,
                    day to day also
                    asks us to remain physically young. Young at heart.
                </p>
                <div class="page-link-wrap">
                    <div class="page_link">
                        <a href="index.html">Home</a>
                        <a href="contact.html">Contact</a>
                    </div>
                    <img src="<?=BASE_URL?>/asset/img/next.png" alt="">
                </div>
            </div>

            <div class="col-lg-6 col-md-6 header-left">
                <div class="">
                    <img class="img-fluid w-100" src="<?=BASE_URL?>/asset/img/banner/banner-img1.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</section>
<!--================ End banner section =================-->

<!--================Contact Area =================-->
<section class="contact_area section_gap">
    <div class="container">
        <div id="mapBox" class="mapBox" data-lat="40.701083" data-lon="-74.1522848" data-zoom="13" data-info="PO Box CT16122 Collins Street West, Victoria 8007, Australia."
            data-mlat="40.701083" data-mlon="-74.1522848">
        </div>
        <div class="row">
            <div class="col-lg-3">
                <div class="contact_info" id="contact_info">

                </div>
            </div>
            <div class="col-lg-9" id="wrap_form_message">

            </div>
        </div>
    </div>
</section>
<!--================Contact Area =================-->

<!--================Contact Success and Error message Area =================-->
<div id="success_message" class="modal modal-message fade" role="dialog">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <i class="fa fa-close"></i>
                </button>
                <h2>Thank you</h2>
                <p>Your message is successfully sent...</p>
            </div>
        </div>
    </div>
</div>

<!-- Modals error -->

<div id="error_message" class="modal modal-message fade" role="dialog">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <i class="fa fa-close"></i>
                </button>
                <h2>Sorry !</h2>
                <p> Something went wrong </p>
            </div>
        </div>
    </div>
</div>
<!--================End Contact Success and Error message Area =================-->
