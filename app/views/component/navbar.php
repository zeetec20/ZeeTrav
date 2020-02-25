<!--================ Offcanvus Menu Area =================-->
<div class="side_menu" style="max-heigh: 100%; overflow: auto;">
	<div class="logo">
		<a href="<?=MAIN_URL?>">
			<h1 style="font-size: 5vh;">ZeeTrav</h1>
		</a>
	</div>
	<ul class="list menu-left">
		<li>
			<a href="<?=MAIN_URL?>">Home</a>
		</li>
		<li>
			<a href="<?=MAIN_URL?>/about">About</a>
		</li>
		<li>
			<div class="dropdown">
				<button type="button" class="dropdown-toggle" data-toggle="dropdown">
					Packet Travel &nbsp;->
				</button>
				<div class="dropdown-menu" id="menu_option_tour">
					<a class="dropdown-item" href="about-us.html">4 Day 3 Night</a>
					<a class="dropdown-item" href="amenities.html">3 Day 2 Night</a>
					<a class="dropdown-item" href="elements.html">2 Day 1 Night</a>
					<a class="dropdown-item" href="elements.html">1 Day</a>
					<a class="dropdown-item" href="elements.html">Custom</a>
					<a class="dropdown-item" href="elements.html">Only Travel</a>
				</div>
			</div>
		</li>
		<li>
			<a href="<?=MAIN_URL?>/contact">Contact</a>
		</li>
	</ul>
</div>
<!--================ End Offcanvus Menu Area =================-->

<!--================ Canvus Menu Area =================-->
<div class="canvus_menu">
	<div class="container">
		<div class="toggle_icon" title="Menu Bar">
			<span></span>
		</div>
	</div>
</div>
<!--================ End Canvus Menu Area =================-->

<section class="top-btn-area">
	<div class="container">
		<div class="row">
			<div class="col-lg-12">
				<a href="<?=MAIN_URL?>/packet/" class="main_btn">
					book a packet travel
					<img src="<?=BASE_URL?>/asset/img/next.png" alt="">
				</a>
			</div>
		</div>
	</div>
</section>

<script data-plugins="transform-es2015-modules-umd" type="text/babel" src="<?=BASE_URL?>/components/global/MenuPacket.jsx"></script>