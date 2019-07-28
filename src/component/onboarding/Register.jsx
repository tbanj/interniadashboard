import React, { Component } from 'react';
import './register.css';
import Footer from '../template/Footer';
import NavbarMobile from '../template/NavbarMobile';
import Navbar from '../template/Navbar';
class Register extends Component {
    state = {  }
    render() { 
        return (  
			<React.Fragment>
            
				{/* sign in  */}
			<div class="signin-modal">
				<div class="closeslide">
					<div class="line1"></div>
					<div class="line2"></div>
				</div>
							<div class="_half-width _left _padding-50 _no-show">
							<img src="../sitestatics/img/piggy-signin.png" class="signin-img _margin-50" alt=""/>
							<h1 class="_margin-100">It's time to Save & Invest</h1>	
						</div>
						<div class="_right _padding-50 signin">
							<div class="_center">
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
										<a href="register.html" class="_margin-20">Create an Account Instead</a> <br/>
										<a href="../forgot.html" class="_margin-20">Forgot Password?</a>
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

			{/* mobile menu icon End   mobile menu*/}
			<NavbarMobile/>
			{/* mobile menu End Nav */}
			<Navbar/>
				{/* Nav End */}
			<div class="progresscontainer">
				<div class="row bs-wizard" style={{borderBottom:'0'}}>
					<div class="col-xs-4 bs-wizard-step active">
						<div class="text-center bs-wizard-stepnum">&nbsp;</div>
						<div class="progress"><div class="progress-bar"></div></div>
						<a href="#" class="bs-wizard-dot"></a>
						<div class="bs-wizard-info text-center">Sign Up</div>
					</div>

					<div class="col-xs-4 bs-wizard-step disabled">
						<div class="text-center bs-wizard-stepnum">&nbsp;</div>
						<div class="progress"><div class="progress-bar"></div></div>
						<a href="#" class="bs-wizard-dot"></a>
						<div class="bs-wizard-info text-center">Set Withdrawal Bank</div>
					</div> 
					<div class="col-xs-4 bs-wizard-step disabled">
						<div class="text-center bs-wizard-stepnum">&nbsp;</div>
						<div class="progress"><div class="progress-bar"></div></div>
						<a href="#" class="bs-wizard-dot"></a>
						<div class="bs-wizard-info text-center">Activate</div>
					</div> 
				</div>
			</div>	
			<header class="header">
					<section class="intro-text fornheadertext">
						<div class="container">
							<div class="profileuser">
								<h1 class="_margin-50 _middle boldtext">Create a Secure Account</h1>
								<p class="_margin-20 _margin-b-20 _middle">Welcome to the future of Savings & Investments</p>
								<div align="center">
									<div align="left" class="mainactionbutton">
																	<form>
											<label class="form-label leftlabel"><b>First &amp; Last Name <i>(Should Match Your Bank)</i></b></label>
											<input type="text" class="inputcontrol largetext largetextcenter" name="fname" 
											id="fname" value="" required=""/>
											<br />
											<br />
											<label class="form-label leftlabel"><b>Valid Email</b></label>
											<input type="email" class="inputcontrol largetext largetextcenter" 
											name="email" id="email" value="" autocomplete="off" required=""/>
											<br />
											<br />
											<label class="form-label leftlabel"><b>Phone Number</b></label>
											<input type="tel" maxlength="11" name="phone" id="phone" class="inputcontrol largetext largetextcenter" 
											value="" autocomplete="off" required=""/>
											<br />
											<br />
											<label class="form-label leftlabel"><b>Create a Password</b></label>
											<input type="password" maxlength="20" name="password" id="password" 
											class="inputcontrol largetext largetextcenter" value="" autocomplete="off" required />
																			<br />
											<br />
											
											<label class="form-label leftlabel"><b>Referrer Phone or Promo Code (Optional)</b></label>
											<input type="text" class="inputcontrol largetext largetextcenter" name="promocode" 
											id="promocode" value="" placeholder="Referrer Phone Or Code"/>
																											<br />
											<br />
											<label class="form-label leftlabel"><b>How Did You Hear About Us? (Optional)</b></label>
											<select class="inputcontrol largetext largetextcenter" name="referralsource"><option value="" 
											selected >Click To Select</option><option value="facebook" >Facebook</option><option value="twitter" >Twitter</option>
											<option value="instagram" >Instagram</option><option value="referral" >Friend/Family/Coworker Referral</option>
											<option value="gsearch" >Google search</option><option value="gplaystore" >Google playstore</option>
											<option value="blog" >Online Blog</option><option value="newspaper" >Local Newspaper</option><option value="events" >
												At an event</option><option value="Other" >Other</option></select>													
											
												<hr class="thhr"/> 
											<div class="form-group form-grouplast">
												<button type="submit" class="btn btn-block btn-large btn-success blue wide" id="login">Create a Free Account</button>
											</div> 
										</form>
									</div>    
									<div class="_margin-20">
										<a href="../login.html" class="_margin-20">Already have an Account? Login</a>
									</div>
									<span class="_center _margin-20">By continuing, I agree to PiggyVest's <a href="../terms.html"
									target="_blank">Terms of Use</a> &amp; <a href="../privacy.html" target="_blank">Privacy</a>.</span>	
								</div>
							</div>
						</div>
					</section>
			</header>
			{/* Nav End */}
			<br />
			<br />
			<br />
					
			<Footer/>
	
        </React.Fragment>);
    }
}
 
export default Register;