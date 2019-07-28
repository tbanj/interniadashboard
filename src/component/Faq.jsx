import React, { Component } from 'react';
import './faq.css';
import Navbar from './template/Navbar';
import NavbarMobile from './template/NavbarMobile';
import Footer from './template/Footer';
class Faq extends Component {
    state = {  }
    render() { 
        return (  <div>
            {/* sign in */}
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
                            <a href="index.html"><img src="../storage.googleapis.com/piggybankservice.appspot.com/statics/logo-main-web-shifted-min.png" class="logo" alt="PiggyVest Logo"/></a>
                            <h2>Login to your Account</h2>
                        </div>
                        <form action="https://www.piggyvest.com/login" method="post" class="_margin-100 signin-form">
                                                <label for="email" class="_left">Email or Phone Number</label>
                            <input type="text" name="email" value="" class="_left _margin-10"/>
                            <label for="password" class="_margin-20 _left">Password</label>
                            <input type="password" name="password" class="_left _margin-10"/>
                            <div class="clearboth"></div>
                                <div class="actionholder">
                                <input type="hidden" name="loginacc" value="1"/>
                                <input type="hidden" name="goto" value="https://www.piggyvest.com/faq"/>
                                <input type="submit" class="btn _margin-20" value="Log In"/>
        
                                <div class="_margin-20">
                                    <a href="onboarding/register.html" class="_margin-20">Create an Account Instead</a> <br/>
                                    <a href="forgot.html" class="_margin-20">Forgot Password?</a>
                                </div>
                            </div>
                        </form>
                    </div>
        </div>
        {/* mobile menu icon  */}
        <div class="nav-icon blue-nav-icon _margin-10">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div> 
        
        {/* mobile menu icon End */}
        {/* mobile menu */}
        <NavbarMobile/>
        {/* mobile menu End */}
        {/* Navbar */}
        <Navbar/>
           {/* Nav End  */}
        
            <header class="header page-header">
                <section class="intro-text">
                    <div class="container">
                        <h1 class="_middle">FAQs &amp; Answers</h1>
                        
                </div>
            </section>
        </header>
        
        <div class="content page-content page-content-colored"> 
            <div class="container">
                <div class="card"> 
                    <section class="cd-faq">
                        <ul class="cd-faq-categories">
                                                        <li></li>
                                                                <li><a class="selected" href="#61d523ef41">What is PiggyVest</a></li>
                                                                <li><a class="selected" href="#3d44e02101">Safety & Security</a></li>
                                                                <li><a class="selected" href="#1fc35755d6">Piggybank™ Savings</a></li>
                                                                <li><a class="selected" href="#9876e80b50">Investify</a></li>
                                                                <li><a class="selected" href="#99aa0aac0c">SafeLock</a></li>
                                                                <li><a class="selected" href="#581a95b516">Target Savings</a></li>
                                                                <li><a class="selected" href="#3b0a53ce00">Interests</a></li>
                                                                <li><a class="selected" href="#7af9275be5">Flex Account</a></li>
                                                                <li><a class="selected" href="#5333b5617c">Withdrawals</a></li>
                                                                <li><a class="selected" href="#2012f909f1">Piggy Points</a></li>
                                                                <li><a class="selected" href="#4cefa60c73">Referral Program (Stories)</a></li>
                                                                <li><a class="selected" href="#49ae1ac2de">Mobile App</a></li>
                                                        <li><a class="selected" href="#morefaq">More Questions?</a></li>
                        </ul> 
                        {/* cd-faq-categories */}
                        <div class="cd-faq-items">
                                                        <ul id="832184150f" class="cd-faq-group">
                                        <li class="cd-faq-title"></li>
                                                                    </ul>
                                                                <ul id="61d523ef41" class="cd-faq-group">
                                        <li class="cd-faq-title"><h2>What is PiggyVest</h2></li>
                                                                            <li>
                                                <a class="cd-faq-trigger" href="#0">What is PiggVest?</a>
                                                <div class="cd-faq-content">
                                                    <p>PiggyVest (formerly piggybank.ng) is a simple app that helps you save and invest with ease.<div><br/>
                                                    </div><div>You can choose to save little amounts of money periodically (Daily, Weekly or Monthly)&nbsp;towards a specific savings target OR lock away funds for a specified period of time.&nbsp;</div><div><br/></div>
                                                    <div>PiggyVest helps you stop excessive spending by letting you easily keep funds away that you will not like to touch.</div>
                                                    <div><br/></div><div>We&nbsp;take&nbsp;away the stress by <b>combining simplicity, discipline, convenience, and flexibility</b> to enable you to manage your finances better and achieve financial freedom.<br/></div></p>
                                                </div> 
                                            </li>
                                                                                <li>
                                                <a class="cd-faq-trigger" href="#0">How do I start saving on PiggyVest?</a>
                                                <div class="cd-faq-content">
                                                    <p>To start saving on PiggyVest:&nbsp;<br/><ul><li>Visit the website or Download the app to create an account.</li><li>Set your&nbsp;withdrawal account</li><li>Activate your account by making your first savings deposit. (<b>Use a MasterCard, Visa or Verve from any bank in Nigeria</b>).&nbsp;</li><li>Then set up your savings plan.</li></ul></p>
                                                </div> 
                                            </li>
                                                                                <li>
                                                <a class="cd-faq-trigger" href="#0">Are there Bank Charges when you deduct from my account?</a>
                                                <div class="cd-faq-content">
                                                    <p>No! it's completely FREE. There are no bank charges for transferring money to your PiggyVest account.</p>
                                                </div> 
                                            </li>
                                                                                <li>
                                                <a class="cd-faq-trigger" href="#0">How much can I Start with?</a>
                                                <div class="cd-faq-content">
                                                    <p>You can ONLY save between:<br/>N50 - N25,000 daily,<br/>N1000 - N100,000 weekly,&nbsp;<br/>or N3,000 - N500,000 monthly<br/><br/>When using the Quicksave option which allows you to add more funds to your savings at any time, you can add up to N500,000&nbsp;per time.</p>
                                                </div> 
                                            </li>
                                                                        </ul>
                                                                <ul id="3d44e02101" class="cd-faq-group">
                                        <li class="cd-faq-title"><h2>Safety & Security</h2></li>
                                                                            <li>
                                                <a class="cd-faq-trigger" href="#0">How safe is PiggyVest?</a>
                                                <div class="cd-faq-content">
                                                    <p>All financial information is encrypted and stored to PCI DSS Level 1 compliant standards. PCI DSS Level 1 compliance is a set of rules stated by credit card companies and audited by an independent third party. <br/><br/>It is the highest possible rating one can get in the electronic payment processing industry. Additionally, all transmission to our banking partner and on our site is via an encrypted 256-bit HTTPS SSL connection.</p>
                                                </div> 
                                            </li>
                                                                                <li>
                                                <a class="cd-faq-trigger" href="#0">Does PiggyVest have an Office?</a>
                                                <div class="cd-faq-content">
                                                    <p>Yes! We are located at No 16 Boyle Street, Onikan, Lagos Island, Lagos, Nigeria.<br/>Contact Number: 0700 933 933 933<div>Email: <a href="cdn-cgi/l/email-protection.html" class="__cf_email__" data-cfemail="9dfef2f3e9fcfee9ddedf4fafae4ebf8eee9b3fef2f0">[email&#160;protected]</a></div></p>
                                                </div> 
                                            </li>
                                                                                <li>
                                                <a class="cd-faq-trigger" href="#0">Are my Card details Safe?</a>
                                                <div class="cd-faq-content">
                                                    <p>Your security is our only priority.&nbsp;Your card details are extremely safe as they are never stored on PiggyVest. We work with a PCIDSS-compliant payment processor, <a href="https://paystack.com/">Paystack</a> to handle your card details.</p>
                                                </div> 
                                            </li>
                                                                                <li>
                                                <a class="cd-faq-trigger" href="#0">How Secure Is My Money?</a>
                                                <div class="cd-faq-content">
                                                    <p><div></div><div><b></b>Initially, we operated in partnership with 2 Microfinance banks, and used their licenses. And in early 2018, we acquired a Microfinance bank and its license. We are also a registered cooperative Piggytech Cooperative Multipurpose Society Limited (Registration number, 16555).&nbsp;</div><div><br/></div><div>All saved funds are warehoused with and managed by AIICO Capital, the leading asset management company in Nigeria, registered and licensed by the Securities and Exchange Commission (SEC).<br/></div></p>
                                                </div> 
                                            </li>
                                                                        </ul>
                                                                <ul id="1fc35755d6" class="cd-faq-group">
                                        <li class="cd-faq-title"><h2>Piggybank™ Savings</h2></li>
                                                                            <li>
                                                <a class="cd-faq-trigger" href="#0">Do I have to login every time I want to save?</a>
                                                <div class="cd-faq-content">
                                                    <p>No, everything is done&nbsp;<b>automatically </b>except you want to use the QuickSave option. All transactions on your debit card will be visible in your dashboard.<div><br/></div><div>We will send an email receipt to you every single time you save with your debit card and your bank will also send you an alert. It's 100% secure.</div></p>
                                                </div> 
                                            </li>
                                                                                <li>
                                                <a class="cd-faq-trigger" href="#0">What happens when I finally have money and I missed some days, weeks or months?</a>
                                                <div class="cd-faq-content">
                                                    <p>We WON'T automatically debit your account if you missed any day, week or month and we WON'T charge you either. The QuickSave option is always available for you to manually make up for any lost day, week or month.</p>
                                                </div> 
                                            </li>
                                                                                <li>
                                                <a class="cd-faq-trigger" href="#0">Can I pause and continue saving anytime?</a>
                                                <div class="cd-faq-content">
                                                    <p>Yes, you can, it is up to you to pause or continue the automatic saving any time for free. Just log in and click on "Autosave" on your core savings then click on "Turn off Autosave".</p>
                                                </div> 
                                            </li>
                                                                                <li>
                                                <a class="cd-faq-trigger" href="#0">Can I increase my savings at anytime?</a>
                                                <div class="cd-faq-content">
                                                    <p>Yes, you can increase the amount you're saving at anytime. Simply login and click 'modify AutoSave instruction', then edit the amount. You can also edit your frequency to either daily, weekly or monthly.</p>
                                                </div> 
                                            </li>
                                                                                <li>
                                                <a class="cd-faq-trigger" href="#0">What if I don't have funds in my account or debit card?</a>
                                                <div class="cd-faq-content">
                                                    <p><span>Simple, we will not be able to debit you for that day, week or month. We will only be able to save for you when you have funds in your debit card. However, you have the option to use the "<b>Quick </b><b>save"</b> option once you have loaded your account.</span></p>
                                                </div> 
                                            </li>
                                                                                <li>
                                                <a class="cd-faq-trigger" href="#0">What is Quick save and how does it work?</a>
                                                <div class="cd-faq-content">
                                                    <p>This option basically enables you to add more funds to your savings. For example, if you set N1,000 daily and you miss a day or two, you can use the quick save option to deposit N2,000 or N3,000 at once. This is to ensure you meet up with your savings target.<br/><br/>You can add up to N500,000 at once with this option. However, you can add this multiple times in a single day. For instance, if you want to add N1,000,000, you need to add N500,000 twice.</p>
                                                </div> 
                                            </li>
                                                                        </ul>
                                                                <ul id="9876e80b50" class="cd-faq-group">
                                        <li class="cd-faq-title"><h2>Investify</h2></li>
                                                                            <li>
                                                <a class="cd-faq-trigger" href="#0">What is investify?</a>
                                                <div class="cd-faq-content">
                                                    <p><p>Investify is a PiggyVest feature that allows users invest in pre-vetted low-medium risk primary and secondary investment opportunities.<br/></p></p>
                                                </div> 
                                            </li>
                                                                                <li>
                                                <a class="cd-faq-trigger" href="#0">Is my investment insured?</a>
                                                <div class="cd-faq-content">
                                                    <p><p>Each investment listing comes with its own protection and coverage.<br/></p></p>
                                                </div> 
                                            </li>
                                                                                <li>
                                                <a class="cd-faq-trigger" href="#0">What is the minimum amount I can invest with?</a>
                                                <div class="cd-faq-content">
                                                    <p><p>Investment minimums vary by investment opportunities.<br/></p></p>
                                                </div> 
                                            </li>
                                                                                <li>
                                                <a class="cd-faq-trigger" href="#0">What is the investment coverage on the investment?</a>
                                                <div class="cd-faq-content">
                                                    <p><p>Insurance coverage varies by investment opportunities. <br/></p></p>
                                                </div> 
                                            </li>
                                                                                <li>
                                                <a class="cd-faq-trigger" href="#0">How can I fund my investment?</a>
                                                <div class="cd-faq-content">
                                                    <p><p>You can fund your investment using your debit card, PiggyFlex and Piggybank savings.<br/></p></p>
                                                </div> 
                                            </li>
                                                                                <li>
                                                <a class="cd-faq-trigger" href="#0">How safe is my money?</a>
                                                <div class="cd-faq-content">
                                                    <p><p>All investment opportunities listed on PiggyVest are pre-vetted for maximum safety. We carry out due diligence on all investment partners<br/></p></p>
                                                </div> 
                                            </li>
                                                                                <li>
                                                <a class="cd-faq-trigger" href="#0">What happens to my capital in case of disasters?</a>
                                                <div class="cd-faq-content">
                                                    <p><p>All investment options aggregated on Piggyvest Investify have been properly vetted for insurance against loss. However, PiggyVest Extra Protection can be added to your investment for maximum capital safety.<br/></p></p>
                                                </div> 
                                            </li>
                                                                                <li>
                                                <a class="cd-faq-trigger" href="#0">How is my interest paid?</a>
                                                <div class="cd-faq-content">
                                                    <p><p>It varies on the opportunity you're choosing to invest in. Your interest could be paid daily, monthly, quarterly OR at the end of the investment period into your PiggyFlex account.<br/></p></p>
                                                </div> 
                                            </li>
                                                                                <li>
                                                <a class="cd-faq-trigger" href="#0">Can i pull my investment before maturity?</a>
                                                <div class="cd-faq-content">
                                                    <p><p>No. You can however trade your shares <br/></p></p>
                                                </div> 
                                            </li>
                                                                                <li>
                                                <a class="cd-faq-trigger" href="#0">Does Extra Capital Protection cover both Capital and Profit?</a>
                                                <div class="cd-faq-content">
                                                    <p><p>PiggyVest Extra Protection is an added layer of security provided by PiggyVest that ensures your capital is protected.<br/></p></p>
                                                </div> 
                                            </li>
                                                                                <li>
                                                <a class="cd-faq-trigger" href="#0">Is the investment taxed?</a>
                                                <div class="cd-faq-content">
                                                    <p><p>We don't handle taxation. You however, are liable to disclose your earnings, and pay your taxes as stipulated by the government.<br/></p></p>
                                                </div> 
                                            </li>
                                                                        </ul>
                                                                <ul id="99aa0aac0c" class="cd-faq-group">
                                        <li class="cd-faq-title"><h2>SafeLock</h2></li>
                                                                            <li>
                                                <a class="cd-faq-trigger" href="#0">What is SafeLock?</a>
                                                <div class="cd-faq-content">
                                                    <p><p>SafeLock is fixed savings that allows you to earn up to 13% per annum paid upfront.</p><p>This acts as <b></b>your sub account<b></b> which allows you to transfer funds&nbsp;<b>from your Piggybank balance or your debit card</b> for at least 10 days and above&nbsp;without having any access until maturity.</p><p>The SafeLock feature is one step further in curbing the temptation to touch money that you have put aside as your savings.</p></p>
                                                </div> 
                                            </li>
                                                                                <li>
                                                <a class="cd-faq-trigger" href="#0">How much interest do I get on my SafeLock savings?</a>
                                                <div class="cd-faq-content">
                                                    <p><p>The interest you get on your SafeLock is 13% per annum prorated according to the duration you set. You can set a duration between 10 and 1000 days. However, we encourage you to lock for at least 90 days.</p><p><b>PS:</b> the minimum amount you can SafeLock is&nbsp;N1000.<br/></p></p>
                                                </div> 
                                            </li>
                                                                                <li>
                                                <a class="cd-faq-trigger" href="#0">Can I have more than one SafeLock?</a>
                                                <div class="cd-faq-content">
                                                    <p><p>Yes, you can have more than one SafeLock; and you can give them different names (purposes) too.</p><p>E.g. You can have a SafeLock for your Fees, Wedding;&nbsp;Birthday; Vacation etc.</p></p>
                                                </div> 
                                            </li>
                                                                                <li>
                                                <a class="cd-faq-trigger" href="#0">Is the SafeLock different from the normal savings plan?</a>
                                                <div class="cd-faq-content">
                                                    <p><p>Yes, your SafeLock is different from your normal savings plan. After initiating a SafeLock for a particular amount of money, your savings plan continues as normal.</p><p>It is completely under your control. You set the pace, duration and everything else concerning your SafeLock.</p></p>
                                                </div> 
                                            </li>
                                                                                <li>
                                                <a class="cd-faq-trigger" href="#0">Can I add more funds to my SafeLock?</a>
                                                <div class="cd-faq-content">
                                                    <p><p>Yes, you can. Simply select the particular SafeLock you want to add, enter the amount you want to add and then click 'add funds'.</p><p><b></b><b>PS: You don't earn additional interest on funds added to an existing SafeLock.</b><b></b></p></p>
                                                </div> 
                                            </li>
                                                                                <li>
                                                <a class="cd-faq-trigger" href="#0">How do I get my SafeLock paid back when time is up?</a>
                                                <div class="cd-faq-content">
                                                    <p>If you SafeLocked for <b>more than 3 months, funds will automatically be sent to your PiggyFlex account </b>on the exact date of maturity and will be available for withdrawal instantly for FREE.&nbsp;<div><br/></div><div>However, if the duration is <b>less than 3 months, funds will be automatically&nbsp;paid back into your Piggybank account</b> on the exact date of maturity which is bound by the quarterly withdrawal date (You can also set your own convenient date for withdrawal).</div></p>
                                                </div> 
                                            </li>
                                                                                <li>
                                                <a class="cd-faq-trigger" href="#0">Can I SafeLock directly from my Bank Account?</a>
                                                <div class="cd-faq-content">
                                                    <p><p>Yes, you can.</p></p>
                                                </div> 
                                            </li>
                                                                        </ul>
                                                                <ul id="581a95b516" class="cd-faq-group">
                                        <li class="cd-faq-title"><h2>Target Savings</h2></li>
                                                                            <li>
                                                <a class="cd-faq-trigger" href="#0">What is Target Savings?</a>
                                                <div class="cd-faq-content">
                                                    <p><p>You can create a personal target or group savings challenge. Once you meet at least 70% your target on the set end/withdrawal date, you can withdraw to your PiggyFlex account and access it for free any day, anytime.</p><p>The minimum duration you can set is 30days. This is suitable for short-term savings.</p><p>Interest is 10% per annum and it is paid daily to your PiggyFlex account.</p></p>
                                                </div> 
                                            </li>
                                                                                <li>
                                                <a class="cd-faq-trigger" href="#0">How Do I Activate/Create a Target Savings</a>
                                                <div class="cd-faq-content">
                                                    <p><p>Log in to your dashboard and click on the '+' sign that says 'Enable New Features' then enable 'Target Savings'</p><p>Click on the 'Go back to dashboard' option below and then by now, you'll have a section on your dashboard called 'Target Savings'</p><p>Click on 'Create' to get started.</p></p>
                                                </div> 
                                            </li>
                                                                                <li>
                                                <a class="cd-faq-trigger" href="#0">Can I break my Target Savings at anytime?</a>
                                                <div class="cd-faq-content">
                                                    <p><p>Yes, you can.</p><p>On the website, log in to your dashboard and click on 'General Activities' then click 'Settings' and then click 'I Give Up'</p><p>On the app, click on the challenge and then scroll down till you see "break"</p><p>Funds will then be sent to your core savings (now known as Piggybank) which you can only access on your set withdrawal date.</p><p>However, If you have met at least 70% of your target on the withdrawal date, you can withdraw to your PiggyFlex account for free.</p></p>
                                                </div> 
                                            </li>
                                                                        </ul>
                                                                <ul id="3b0a53ce00" class="cd-faq-group">
                                        <li class="cd-faq-title"><h2>Interests</h2></li>
                                                                            <li>
                                                <a class="cd-faq-trigger" href="#0">Do I get Interests on PiggyVest?</a>
                                                <div class="cd-faq-content">
                                                    <p>Yes, you get up to 10% per annum on Core Savings(Piggybank Savings), over 13% per annum on SafeLock (Fixed Income Investment) and 10% per annum on both Target &amp; Group Savings.</p>
                                                </div> 
                                            </li>
                                                                                <li>
                                                <a class="cd-faq-trigger" href="#0">How Is My Interest Paid?</a>
                                                <div class="cd-faq-content">
                                                    <p><p></p><div><ul><li><b>Core Savings (Piggybank)</b>- Interests are accrued daily on your balance, and paid monthly (available from the 1st of every month).<br/></li><li><b>SafeLock</b>- Interests are paid upfront into your Flex account and you can access it immediately for free.<br/></li><li><b>Target Savings</b>- Interests are paid daily into your Flex account and you can access it immediately for free.<br/></li></ul></div><br/><p></p></p>
                                                </div> 
                                            </li>
                                                                                <li>
                                                <a class="cd-faq-trigger" href="#0">What If I don't want Interest?</a>
                                                <div class="cd-faq-content">
                                                    <p>Valid. Simply visit 'account settings', scroll down and check the box that says 'Disable Interest...'</p>
                                                </div> 
                                            </li>
                                                                                <li>
                                                <a class="cd-faq-trigger" href="#0">How is PiggyVest able to afford higher returns?</a>
                                                <div class="cd-faq-content">
                                                    <p>Our operational costs are relatively low - we do not operate multiple branches or hire a lot of staff to manage operations. We are also able to negotiate&nbsp;premium rates due to volumes.&nbsp;<div><br/></div><div><b></b>All saved funds are warehoused with and managed by<b> AIICO Capital, </b>the leading asset management company in Nigeria, registered and licensed by the Securities and Exchange Commission (SEC)<b></b>&nbsp;which is extremely safe and guaranteed. A portion of the proceeds is then passed on to users&nbsp;as interests on their savings.</div></p>
                                                </div> 
                                            </li>
                                                                        </ul>
                                                                <ul id="7af9275be5" class="cd-faq-group">
                                        <li class="cd-faq-title"><h2>Flex Account</h2></li>
                                                                            <li>
                                                <a class="cd-faq-trigger" href="#0">What is A Flex Account</a>
                                                <div class="cd-faq-content">
                                                    <p><p>A Flex Account is a sub-account where all interests earned on PiggyVest are paid. You can withdraw from it at anytime, without any charges.</p><p>Additionally, on withdrawal days, you can withdraw to your Flex Account and spend from it freely.</p></p>
                                                </div> 
                                            </li>
                                                                                <li>
                                                <a class="cd-faq-trigger" href="#0">Can I withdraw from my Flex Account?</a>
                                                <div class="cd-faq-content">
                                                    <p><p>Yes! you can! And it's absolutely FREE.</p></p>
                                                </div> 
                                            </li>
                                                                                <li>
                                                <a class="cd-faq-trigger" href="#0">Can I transfer from my Flex Account to my Core Savings?</a>
                                                <div class="cd-faq-content">
                                                    <p><p>Yes, you can! Simply click on "Use Funds" and then select the option to transfer back to core savings.</p></p>
                                                </div> 
                                            </li>
                                                                        </ul>
                                                                <ul id="5333b5617c" class="cd-faq-group">
                                        <li class="cd-faq-title"><h2>Withdrawals</h2></li>
                                                                            <li>
                                                <a class="cd-faq-trigger" href="#0">When do I withdraw my Savings?</a>
                                                <div class="cd-faq-content">
                                                    <p>You can withdraw for FREE only on&nbsp;set Withdrawal dates. You can set your own FREE withdrawal day&nbsp;OR you can&nbsp;use Piggybank's 4 fixed&nbsp;FREE withdrawal dates every year.<br/><br/>After the request has been made, funds will be sent back to your Flex Account instantly and then you can withdraw to your set bank account anytime.<br/><br/><b>PS: If you decide to set your own convenient FREE withdrawal date, the next available FREE date will be&nbsp;exactly 3 months from the last time you withdrew.</b></p>
                                                </div> 
                                            </li>
                                                                                <li>
                                                <a class="cd-faq-trigger" href="#0">What are Piggybank's free withdrawal dates?</a>
                                                <div class="cd-faq-content">
                                                    <p>You can&nbsp;<b>choose your own FREE withdrawal dates</b>&nbsp;on your dashboard.<br/><br/>OR You can use Piggybank's FREE withdrawal days which are:<br/><br/><ul><li><b>31st March</b><br/></li><li><b>30th June</b><br/></li><li><b>30th September</b><br/></li><li><b>31st December</b><br/></li></ul><div><br/></div></p>
                                                </div> 
                                            </li>
                                                                                <li>
                                                <a class="cd-faq-trigger" href="#0">What if I withdraw outside the free withdrawal dates?</a>
                                                <div class="cd-faq-content">
                                                    <p>Any day outside the Withdrawal days will attract a&nbsp;<b>5% penalty fee</b>.<br/></p>
                                                </div> 
                                            </li>
                                                                                <li>
                                                <a class="cd-faq-trigger" href="#0">Can I choose any amount to withdraw per time?</a>
                                                <div class="cd-faq-content">
                                                    <p>Yes, you can, just go to the withdraw page and enter how much you want to withdraw.<br/></p>
                                                </div> 
                                            </li>
                                                                                <li>
                                                <a class="cd-faq-trigger" href="#0">How do I withdraw my savings?</a>
                                                <div class="cd-faq-content">
                                                    <p>You need to have filled your bank details in your withdrawal settings then, click on the "withdraw" option on your dashboard, enter the amount you want to withdraw&nbsp;and your funds will be transferred to your set bank account within the stipulated time <b>(not more than 3 working hours)</b><br/><br/><br/></p>
                                                </div> 
                                            </li>
                                                                                <li>
                                                <a class="cd-faq-trigger" href="#0">What is the Minimum/Maximum amount I can withdraw?</a>
                                                <div class="cd-faq-content">
                                                    <p>The minimum amount you can withdraw from your Piggybank account is <b>N3000 </b>and <b>there is NO maximum. </b>You can withdraw all of your funds whenever. However, fixed free withdrawal dates still apply.<div><br/></div><div><b>PS: You can ONLY withdraw once in 24hours.</b></div></p>
                                                </div> 
                                            </li>
                                                                        </ul>
                                                                <ul id="2012f909f1" class="cd-faq-group">
                                        <li class="cd-faq-title"><h2>Piggy Points</h2></li>
                                                                            <li>
                                                <a class="cd-faq-trigger" href="#0">What is a PiggyPoint?</a>
                                                <div class="cd-faq-content">
                                                    <p><p>This is our own way of rewarding our users. The more you save in your Piggybank account, the more you earn. You must save at least N2000 at once to earn points.</p></p>
                                                </div> 
                                            </li>
                                                                                <li>
                                                <a class="cd-faq-trigger" href="#0">How Do I Earn Piggy Points?</a>
                                                <div class="cd-faq-content">
                                                    <p><p>N2000 - N4999 = 1 point<br/>N5000 - N9999 = 2 points<br/>N10000 - N49999 = 10 points<br/>N50000 - N99999 = 25 points<br/>N100000 and above = 55 points<br/></p></p>
                                                </div> 
                                            </li>
                                                                                <li>
                                                <a class="cd-faq-trigger" href="#0">What can I use my Piggy Points for?</a>
                                                <div class="cd-faq-content">
                                                    <p><p><p>You can now convert your Piggy Points to cash in your Flex Account</p><p><b>1 Piggy Point = N10.</b></p><p></p><br/></p></p>
                                                </div> 
                                                {/* cd-faq-content */}
                                            </li>
                                                                        </ul>
                                                                <ul id="4cefa60c73" class="cd-faq-group">
                                        <li class="cd-faq-title"><h2>Referral Program (Stories)</h2></li>
                                                                            <li>
                                                <a class="cd-faq-trigger" href="#0">Do you have a Referral Program?</a>
                                                <div class="cd-faq-content">
                                                    <p>Yes! it's called Piggybank Stories. Once you login to your dashboard, you can add your own story of how Piggybank has/is helping you save.&nbsp;<br/><br/>Once your story is approved, you will receive your unique link. You automatically&nbsp;earn N1000 on every valid user, paid every Friday.<div><br/></div><div>You can also get your link directly by following these steps:</div><div>Click&nbsp;<b>"My account"&nbsp;</b>and then<b></b>&nbsp;<b>"Earn N1000 per invite"</b></div><div><b><br/></b></div><div>To see stories from other customers, visit <a  rel="nofollow" href="https://www.piggybank.ng/stories"><b>piggybank.ng/stories</b></a><b>&nbsp;</b></div></p>
                                                </div> 
                                               {/* cd-faq-content */}
                                            </li>
                                                                                <li>
                                                <a class="cd-faq-trigger" href="#0">Who is an Valid User?</a>
                                                <div class="cd-faq-content">
                                                    <p>A valid user is one who has successfully added their debit card details and has saved at least N5000 cumulatively on savings/investments</p>
                                                </div> 
                                                {/*  cd-faq-content */}
                                            </li>
                                                                        </ul>
                                                                <ul id="49ae1ac2de" class="cd-faq-group">
                                        <li class="cd-faq-title"><h2>Mobile App</h2></li>
                                                                            <li>
                                                <a class="cd-faq-trigger" href="#0">Do you have a Mobile App?</a>
                                                <div class="cd-faq-content">
                                                    <p>Yes! The mobile app is available ONLY on Android and iOS.&nbsp;<div><br/><b><a  rel="nofollow" href="https://itunes.apple.com/us/app/piggybank-ng-online-savings-app/id1263117994?mt=8" title="Link: https://www.piggybank.ng/appstorelink/ios">CLICK HERE </a></b>to download on iOS</div><div><br/><b><a  rel="nofollow" href="https://play.google.com/store/apps/details?id=com.piggybankng.piggy" title="Link: https://www.piggybank.ng/appstorelink/android">CLICK HERE </a></b>to download on Android</div></p>
                                                </div> 
                                                {/* cd-faq-content */}
                                            </li>
                                                                        </ul>
                                    
        
                            <ul id="morefaq" class="cd-faq-group">
                                <li class="cd-faq-title"><h2>More Questions?</h2></li>
                                <li>
                                    <a class="cd-faq-trigger" href="#0">More Questions?</a>
                                    <div class="cd-faq-content">
                                        <p>You can reach out to us via our <a href="cdn-cgi/l/email-protection.html" class="__cf_email__" data-cfemail="aecdc1c0dacfcddaeedec7c9c9d7d8cbddda80cdc1c3">[email&#160;protected]</a> or call 0700 933 933 933 <b>(Mon-Fri from 9am-5pm)</b>, we’ll be glad to hear from you.</p>
                                        <br />
                                        <p>
                                            <div class="alert alert-info"><button type="button" class="close" data-dismiss="alert">&times;</button>You can choose to only save between;<br />₦50 - ₦50,000 daily,<br />₦800 - ₦200,000 weekly, <br />or ₦3,000 - ₦2,000,000 monthly<br />with PiggyVest</div>									<a href="onboarding/register.html" class="btn btn-large btn-success">Start Saving Today</a>
                                        </p>
                                    </div> 
                                    {/* cd-faq-content */}
                                </li>
                            </ul>
                        </div>
                        {/* cd-faq-items */}
                        <a href="#0" class="cd-close-panel">Close</a>
                    </section> 
                </div>
            </div>
        </div>
        
        
            <Footer/>
            
        </div>);
    }
}
 
export default Faq;