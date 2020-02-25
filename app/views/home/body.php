<!--================ Start banner section =================-->
<section class="home-banner-area relative">
	<div class="container-fluid">
		<div class="row d-flex align-items-center justify-content-center">
			<div class="header-right col-lg-6 col-md-6">
				<h1>
					ZeeTrav
				</h1>
				<p class="pt-20" id="about_text">
					
				</p>
				<a href="#" class="main_btn">
					Get Started
					<img src="<?=BASE_URL?>/asset/img/next.png" alt="">
				</a>
			</div>

			<div class="col-lg-6 col-md-6 header-left">
				<div class="">
					<img class="img-fluid w-100" src="<?=BASE_URL?>/asset/img/banner/banner-img.jpg" alt="">
				</div>
				<div class="video-popup d-flex align-items-center">
					<a class="play-video video-play-button" href="https://www.youtube.com/watch?v=3iXJ3t7QmeU" data-animate="zoomIn" data-duration="1.5s" data-delay="0.1s"><span></span></a>
					<div class="watch">
						<h5>Sekilas Travel Bersama ZeeTrav</h5>
						<p>You will love our execution</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<!--================ End banner section =================-->

<!--================ Start Amenities Area =================-->
<section class="amenities-area section_gap wrap-facilities">
	<div class="container">
		<div class="row align-items-end justify-content-left">
			<div class="col-lg-5">
				<div class="main_title">
					<h1>Fasilitas Yang <br>Anda Dapatkan</h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, reprehenderit tenetur, quasi rem officiis
						vero expedita enim fugiat reiciendis, at aliquid! Corrupti at dicta a quaerat id sint exercitationem ab.</p>
				</div>
			</div>
		</div>
		<div class="row justify-content-center" id="facilities">
			
		</div>
	</div>
</section>
<!--================ End Amenities Area =================-->

<!--================ Start Popular Place Area =================-->
<div class="popular-place-area section_gap">
	<div class="container">
		<div class="row align-items-center justify-content-center">
			<div class="col-lg-5 offset-lg-1">
				<div class="left-content">
					<img class="img1 img-fluid" src="<?=BASE_URL?>/asset/img/popular/img1.jpg" alt="">
					<img class="img2 img-fluid" src="<?=BASE_URL?>/asset/img/popular/img2.jpg" alt="">
					<img class="img3 img-fluid" src="<?=BASE_URL?>/asset/img/popular/img3.jpg" alt="">
				</div>
			</div>
			<div class="col-lg-5 offset-lg-1">
				<div class="right-content">
					<div class="main_title">
						<h1>Beberapa Pilihan <br>Waktu Packet<br> Travel ZeeTrav</h1>
						<p>ZeeTrav memiliki empat pilihan waktu dalam packet travel, dari empat pilihan tersebut semua sudah tersedia penginapan, kecuali untuk packet yang tidak memilik jam malam.</p>
					</div>
					<div class="counter_area" id="option_tour">
						
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<!--================ End Popular Place Area =================-->

<!--================ Start Blog Area =================-->
<section class="blog-area section_gap">
	<div class="container">
		<div class="row align-items-end justify-content-left">
			<div class="col-lg-5">
				<div class="main_title">
					<h1>Paket Travel <br>Terbaru</h1>
					<p>Packet Travel ZeeTrav selalu mengalami update untuk mengimbangi permintaan pelanggan dan banyak juga packet terbaru yang tidak kalah keren dan menawarkan sesuatu menarik.</p>
				</div>
			</div>
		</div>
		<div class="row justify-content-center" id="newest_packet">

		</div>
	</div>
</section>
<!--================ End Blog Area =================-->

<!--================ Start Package Search Area =================-->
<section class="package-search-area section_gap">
	<div class="container">
		<div class="row align-items-center justify-content-center">
			<div class="col-lg-5">
				<div class="main_title">
					<h1>Cari dan Dapatkan <br>Paket Travel</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.</p>
				</div>
			</div>
			<div class="col-lg-6 offset-lg-1">
				<div class="contact-form-section">
					<h4>Cari Paket Travel Anda</h4>
					<form class="contact-form-area contact-page-form contact-form text-right" id="myForm" action="mail.html" method="post">
						<div class="form-group col-md-12">
							<input type="text" class="form-control input_packet_search" id="name" name="name" placeholder="Destination" onfocus="this.placeholder = ''"
								onblur="this.placeholder = 'Destination'">
						</div>
						<div class="form-group col-md-12">
							<input type="text" class="form-control input_packet_search" id="datepicker" name="text" placeholder="Check in Date" disabled onfocus="this.placeholder = ''"
								onblur="this.placeholder = 'Check in Date'">
						</div>
						<div class="form-group col-md-12">
							<input type="text" class="form-control input_packet_search" id="datepicker1" name="text" placeholder="Check Out Date" disabled onfocus="this.placeholder = ''"
								onblur="this.placeholder = 'Check Out Date'">
						</div>
						<div class="form-group col-md-12">
							<div class="form-select">
								<select>
									<option value="">Adult</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
									<option value="6">6</option>
									<option value="custom">Custom</option>
								</select>
							</div>
						</div>
						<div class="form-group col-md-12">
							<div class="form-select">
								<select>
									<option value="">Child</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
									<option value="6">6</option>
									<option value="custom">Custom</option>
								</select>
							</div>
						</div>
						<div class="col-lg-12 text-center">
							<button class="main_btn text-uppercase">
								Find Packet
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

<!--================ Start Testimonial Area =================-->
<section class="testimonial_area">
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

<!--================ Start Newsletter Area =================-->
<section class="newsletter-area section_gap">
	<div class="container-fluid">
		<div class="row align-items-center justify-content-center">
			<div class="col-lg-5">
				<div class="main_title">
					<h1>Langganan <br>Untuk informasi <br>Dari ZeeTrav</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.</p>
					<div id="wrap_form_subscribe">
						
					</div>
				</div>
			</div>
			<div class="col-lg-6 offset-lg-1">
				<img class="img-fluid nw-img" src="<?=BASE_URL?>/asset/img/nwl-img.png" alt="">
			</div>
		</div>
</section>
<!--================ End Newsletter Area =================-->

<!--================Contact Success and Error message Area =================-->
<div id="success" class="modal modal-message fade" role="dialog">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <i class="fa fa-close"></i>
                </button>
                <h2>Thank you</h2>
                <p>Your Successfully Subscribe</p>
            </div>
        </div>
    </div>
</div>
<!-- Modals error -->

<div id="error" class="modal modal-message fade" role="dialog">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <i class="fa fa-close"></i>
                </button>
                <h2>Sorry !</h2>
                <p>Your Already Subscribe</p>
            </div>
        </div>
    </div>
</div>
<!--================End Contact Success and Error message Area =================-->
