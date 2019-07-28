import React, { Component } from 'react';
import NavbarMobile from './template/NavbarMobile';
import Footer from './template/Footer';
import Navbar from './template/Navbar';
class Login extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div class="signin-modal">
					<div class="closeslide">
						<div class="line1"></div>
						<div class="line2"></div>
					</div>
					<div class="_half-width _left _padding-50 _no-show">
						<img src="sitestatics/img/piggy-signin.png" class="signin-img _margin-50" alt=""/>
						<h1 class="_margin-100">It's time to Save & Invest</h1>	
					</div>
					<div class="_right _padding-50 signin">
						<div class="_center">
							<a href="index.html">
								<img src="../storage.googleapis.com/piggybankservice.appspot.com/statics/logo-main-web-shifted-min.png"
								class="logo" alt="PiggyVest Logo"/></a>
							<h2>Login to your Account</h2>
						</div>
						<form class="_margin-100 signin-form">
												<label for="email" class="_left">Email or Phone Number</label>
							<input type="text" name="email" value="" class="_left _margin-10"/>
							<label for="password" class="_margin-20 _left">Password</label>
							<input type="password" name="password" class="_left _margin-10"/>
							<div class="clearboth"></div>
								<div class="actionholder">
								<input type="submit" class="btn _margin-20" value="Log In"/>

								<div class="_margin-20">
									<a href="onboarding/register.html" class="_margin-20">Create an Account Instead</a> <br/>
									<a href="forgot.html" class="_margin-20">Forgot Password?</a>
								</div>
							</div>
						</form>
					</div>
					</div>
					{/* mobile menu icon */}
					<div class="nav-icon blue-nav-icon _margin-10">
						<div class="line1"></div>
						<div class="line2"></div>
						<div class="line3"></div>
					</div> 

					{/* mobile menu icon End   mobile menu */}
					<NavbarMobile/>
					{/* mobile menu End Nav */}
					<Navbar/>
						{/* Nav End	 */}
						<header class="header">
							<section class="intro-text _margin-100">
								<div class="container">
									<div class="profileuser"> 
										<h1 class="_margin-50 _middle">Secure Login</h1>
										<p class="_margin-20 _margin-b-20 _middle">It's time to Save & Invest</p>
										<div align="center">
											<div align="left" class="mainactionbutton">
																			<form action="#" method="post" id="piggylinkform">
													<label class="form-label leftlabel"><b>Email or Phone Number</b></label>
													<input type="text" class="inputcontrol largetext largetextcenter" 
													name="email" id="email" value="" autocomplete="off" required=""/>
													<br />
													<br />
													<label class="form-label leftlabel"><b>Password</b></label>
													<input type="password" class="inputcontrol largetext largetextcenter" name="password" 
													id="password" required=""/>
													<hr class="thhr"/>
													<div class="form-group form-grouplast">
														
														<button type="submit" class="btn btn-block btn-large btn-success blue wide" id="login"><i class="fa fa-lock"></i> Secure Login</button>
													</div> 
												</form>
											</div>    
											<div class="_margin-20">
												<a href="onboarding/register.html" class="_margin-20">Create an Account Instead</a> <br/>
												<a href="forgot.html" class="_margin-20">Forgot Password?</a>
											</div>
										</div>
									</div>
								</div>
							</section>
						</header>
						{/* Header + Nav End */}
						<br />
						<br />
						<br />
						<Footer/>
            </React.Fragment>
         );
    }
}
 
export default Login;