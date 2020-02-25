<!--================ Start banner section =================-->
<section class="home-banner-area common-banner relative">
    <div class="container-fluid">
        <div class="row d-flex align-items-center justify-content-center">
            <div class="header-right col-lg-6 col-md-6">
                <h1>
                    About ZeeTrav
                </h1>
                <p class="pt-20" id="about_text">
                    We all live in an age that belongs to the young at heart. Life that is becoming extremely fast, day to day also
                    asks us to remain physically young. Young at heart.
                </p>
                <div class="page-link-wrap">
                    <div class="page_link">
                        <a href="index.html">Home</a>
                        <a href="about-us.html">About</a>
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

<!--================ Start Testimonial Area =================-->
<section class="testimonial_area section_gap">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <div class="testi_img">
                    <img class="img-fluid" src="<?=BASE_URL?>/asset/img/testi-img.jpg" alt="">
                </div>
            </div>
            <div class="col-lg-5 offset-lg-1">
                <div class="owl-carousel active_testimonial" id="testi">
                    
                </div>
            </div>
        </div>
    </div>
</section>
<!--================ End Testimonial Area =================-->

<!--================ Start Package Search Area =================-->
<section class="package-search-area mb-5" style="margin-top: 2rem;">
    <div class="container">
        <div class="row align-items-center justify-content-center">
            <div class="col-lg-5">
                <div class="main_title">
                    <h1>Search <br>Suitable & Desired <br>Package for You</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.</p>
                </div>
            </div>
            <div class="col-lg-6 offset-lg-1">
                <div class="contact-form-section" style="min-height: 590px">
                    <h4>Package Search</h4>
                    <form class="contact-form-area contact-page-form contact-form text-right pt-3" id="myForm" action="mail.html" method="post">
                        <div class="form-group col-md-12">
                            <input type="text" class="form-control" id="name" name="name" placeholder="Name" onfocus="this.placeholder = ''"
                                onblur="this.placeholder = 'Name'">
                        </div>
                        <!-- <div class="form-group col-md-12">
                            <input type="text" class="form-control" id="datepicker" name="text" placeholder="Check in Date" onfocus="this.placeholder = ''"
                                onblur="this.placeholder = 'Check in Date'">
                        </div>
                        <div class="form-group col-md-12">
                            <input type="text" class="form-control" id="datepicker1" name="text" placeholder="Check Out Date" onfocus="this.placeholder = ''"
                                onblur="this.placeholder = 'Check Out Date'">
                        </div> -->
                        <div class="form-group col-md-12">
                            <div class="form-select">
                                <select>
                                    <option value="1">Number of people</option>
                                    <option value="1">Number of people</option>
                                    <option value="1">Number of people</option>
                                    <option value="1">Number of people</option>
                                    <option value="1">Number of people</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group col-md-12">
                            <div class="form-select">
                                <select>
                                    <option value="1">Select event</option>
                                    <option value="1">Select event Dhaka</option>
                                    <option value="1">Select event Dilli</option>
                                    <option value="1">Select event Newyork</option>
                                    <option value="1">Select event Islamabad</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-lg-12 text-center mt-3">
                            <button class="main_btn text-uppercase">
                                Browse all Packages
                                <img src="<?=BASE_URL?>/asset/img/next.png" alt="">
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
<!--================ End Package Search Area =================-->
