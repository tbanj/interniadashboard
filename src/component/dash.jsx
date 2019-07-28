import React, { Component } from 'react';
class Dash extends Component {
    state = {  }
    render() { 
        return ( 
        <React.Fragment>
            <div className="preloader">
        <div className="lds-ripple">
            <div className="lds-pos"></div>
            <div className="lds-pos"></div>
        </div>
    </div>
        {/*  ==============================================================
                Main wrapper - style you can find in pages.scss
        ==============================================================
        */}
    <div id="main-wrapper">
        {/* ==============================================================
                    Topbar header - style you can find in pages.scss 
            ============================================================== */}
        <header className="topbar">
            <nav className="navbar top-navbar navbar-expand-md navbar-dark">
                <div className="navbar-header border-right">
                    {/* This is for the sidebar toggle which is visible on mobile only */}
                    <a className="nav-toggler waves-effect waves-light d-block d-md-none" href="#a"><i className="ti-menu ti-close"></i></a>
                    <a className="navbar-brand" href="../dashboard/ampleadmin/ampleadmin-sidebar/index.html">
                        {/* Logo icon */}
                        <b className="logo-icon">
                            {/* You can put here icon as well // <i className="wi wi-sunset"></i> // */}
                            {/* Dark Logo icon  */}
                            <img src="../dashboard_assets/assets/images/logos/logo-icon.png" alt="homepage" className="dark-logo" />
                            {/* Light Logo icon  */}
                            <img src="../dashboard_assets/assets/images/logos/logo-light-icon.png" alt="homepage" className="light-logo" />
                        </b>
                        {/* End Logo icon  */}
                        {/* Logo text  */}
                        <span className="logo-text">
                             {/* dark Logo text */}
                             <img src="../dashboard_assets/assets/images/logos/logo-text.png" alt="homepage" className="dark-logo" />
                             {/*Light Logo text  */}
                             <img src="../dashboard_assets/assets/images/logos/logo-light-text.png" className="light-logo" alt="homepage" />
                        </span>
                    </a>
                    {/* =============================================
                                End Logo 
                        =============================================
                        =============================================
                            Toggle which is visible on mobile only*/}
                    <a className="topbartoggler d-block d-md-none waves-effect waves-light" href="javascript:void(0)" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i className="ti-more"></i></a>
                </div>
                {/* ================================
                        End Logo 
                ================================ */}
                <div className="navbar-collapse collapse" id="navbarSupportedContent">
                    {/* ===================================
                            toggle and nav items 
                    =================================== */}
                    <ul className="navbar-nav float-left mr-auto">
                        <li className="nav-item d-none d-md-block"><a className="nav-link sidebartoggler waves-effect waves-light" href="javascript:void(0)" data-sidebartype="mini-sidebar"><i className="mdi mdi-menu font-18"></i></a></li>
                        {/* Messages */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle waves-effect waves-dark" href="javascript:void(0)" id="2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="font-18 mdi mdi-gmail"></i>
                                <div className="notify">
                                    <span className="heartbit"></span>
                                    <span className="point"></span>
                                </div>
                            </a>
                            <div className="dropdown-menu dropdown-menu-left mailbox animated bounceInDown" aria-labelledby="2">
                                <ul className="list-style-none">
                                    <li>
                                        <div className="drop-title border-bottom">You have 4 new messanges</div>
                                    </li>
                                    <li>
                                        <div className="message-center message-body">
                                            {/* Message */}
                                            <a href="javascript:void(0)" className="message-item">
                                                <span className="user-img"> <img src="../dashboard_assets/assets/images/users/1.jpg" alt="user" className="rounded-circle"/> <span className="profile-status online pull-right"></span></span> 
                                                <span className="mail-contnet">
                                                    <h5 className="message-title">Pavan kumar</h5> <span className="mail-desc">Just see the my admin!</span> <span className="time">9:30 AM</span> </span>
                                            </a>
                                            {/* Message */}
                                            <a href="javascript:void(0)" className="message-item">
                                                <span className="user-img"> <img src="../dashboard_assets/assets/images/users/2.jpg" alt="user" className="rounded-circle"/> <span className="profile-status busy pull-right"></span> </span>
                                                <span className="mail-contnet">
                                                    <h5 className="message-title">Sonu Nigam</h5> <span className="mail-desc">I've sung a song! See you at</span> <span className="time">9:10 AM</span> </span>
                                            </a>
                                            {/* Message */}
                                            <a href="javascript:void(0)" className="message-item">
                                                <span className="user-img"> <img src="../dashboard_assets/assets/images/users/3.jpg" alt="user" className="rounded-circle"/> <span className="profile-status away pull-right"></span> </span>
                                                <span className="mail-contnet">
                                                    <h5 className="message-title">Arijit Sinh</h5> <span className="mail-desc">I am a singer!</span> <span className="time">9:08 AM</span> </span>
                                            </a>
                                            {/* Message */}
                                            <a href="javascript:void(0)" className="message-item">
                                                <span className="user-img"> <img src="../dashboard_assets/assets/images/users/4.jpg" alt="user" className="rounded-circle"/> <span className="profile-status offline pull-right"></span> </span>
                                                <span className="mail-contnet">
                                                    <h5 className="message-title">Pavan kumar</h5> <span className="mail-desc">Just see the my admin!</span> <span className="time">9:02 AM</span> </span>
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <a className="nav-link text-center link text-dark" href="#a"> <b>See all Notifications</b> <i className="fa fa-angle-right"></i> </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        {/* Comment  */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle waves-effect waves-dark" href="javascript:void(0)" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="mdi mdi-check-circle font-18"></i>
                                <div className="notify">
                                    <span className="heartbit"></span>
                                    <span className="point"></span>
                                </div>
                            </a>
                            <div className="dropdown-menu dropdown-menu-left mailbox animated bounceInDown">
                                <span className="with-arrow"><span className="bg-primary"></span></span>
                                <ul className="list-style-none">
                                    <li>
                                        <div className="drop-title border-bottom">You have 3 new Tasks</div>
                                    </li>
                                    <li>
                                        <div className="message-center notifications">
                                            {/* Message */}
                                            <a href="javascript:void(0)" className="message-item">
                                                <span className="btn btn-danger btn-circle"><i className="fa fa-link"></i></span>
                                                <span className="mail-contnet">
                                                    <h5 className="message-title">Luanch Admin</h5> <span className="mail-desc">Just see the my new admin!</span> <span className="time">9:30 AM</span> </span>
                                            </a>
                                            {/* Message */}
                                            <a href="javascript:void(0)" className="message-item">
                                                <span className="btn btn-success btn-circle"><i className="ti-calendar"></i></span>
                                                <span className="mail-contnet">
                                                    <h5 className="message-title">Event today</h5> <span className="mail-desc">Just a reminder that you have event</span> <span className="time">9:10 AM</span> </span>
                                            </a>
                                            {/* Message */}
                                            <a href="javascript:void(0)" className="message-item">
                                                <span className="btn btn-info btn-circle"><i className="ti-settings"></i></span>
                                                <span className="mail-contnet">
                                                    <h5 className="message-title">Settings</h5> <span className="mail-desc">You can customize this template as you want</span> <span className="time">9:08 AM</span> </span>
                                            </a>
                                            {/* Message */}
                                            <a href="javascript:void(0)" className="message-item">
                                                <span className="btn btn-primary btn-circle"><i className="ti-user"></i></span>
                                                <span className="mail-contnet">
                                                    <h5 className="message-title">Pavan kumar</h5> <span className="mail-desc">Just see the my admin!</span> <span className="time">9:02 AM</span> </span>
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <a className="nav-link text-center mb-1 text-dark" href="#a"> <strong>See all Tasks</strong> <i className="fa fa-angle-right"></i> </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        {/* End Comment */}
                        {/* mega menu  */}
                        
                        <li className="nav-item dropdown mega-dropdown"><a className="nav-link dropdown-toggle waves-effect waves-dark" href="javascript:void(0)" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="d-none d-md-block">Mega <i className="icon-options-vertical"></i></span>
                             <span className="d-block d-md-none"><i className="mdi mdi-dialpad font-24"></i></span>
                            </a>
                            <div className="dropdown-menu animated bounceInDown">
                                <div className="mega-dropdown-menu row">
                                    <div className="col-lg-3 col-xlg-2 mb-4">
                                        <h5 className="mb-3">CAROUSEL</h5>
                                        {/* CAROUSEL  */}
                                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                            <div className="carousel-inner" role="listbox">
                                                <div className="carousel-item active">
                                                    <div className="container p-0"> <img className="d-block img-fluid" src="../dashboard_assets/assets/images/big/img1.jpg" alt="First slide"/></div>
                                                </div>
                                                <div className="carousel-item">
                                                    <div className="container p-0"><img className="d-block img-fluid" src="../dashboard_assets/assets/images/big/img2.jpg" alt="Second slide"/></div>
                                                </div>
                                                <div className="carousel-item">
                                                    <div className="container p-0"><img className="d-block img-fluid" src="../dashboard_assets/assets/images/big/img3.jpg" alt="Third slide"/></div>
                                                </div>
                                            </div>
                                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev"> <span className="carousel-control-prev-icon" aria-hidden="true"></span> <span className="sr-only">Previous</span> </a>
                                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next"> <span className="carousel-control-next-icon" aria-hidden="true"></span> <span className="sr-only">Next</span> </a>
                                        </div>
                                       {/* End CAROUSEL */}
                                    </div>
                                    <div className="col-lg-3 mb-4">
                                        <h5 className="mb-3">ACCORDION</h5>
                                        {/* Accordian */}
                                        <div id="accordion" className="accordion">
                                            <div className="card mb-1">
                                                <div className="card-header" id="headingOne">
                                                    <h5 className="mb-0">
                                                <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                  Collapsible Group Item #1
                                                </button>
                                              </h5>
                                                </div>
                                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                                    <div className="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card mb-1">
                                                <div className="card-header" id="headingTwo">
                                                    <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                  Collapsible Group Item #2
                                                </button>
                                              </h5>
                                                </div>
                                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                                    <div className="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card mb-1">
                                                <div className="card-header" id="headingThree">
                                                    <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                  Collapsible Group Item #3
                                                </button>
                                              </h5>
                                                </div>
                                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                                    <div className="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3  mb-4">
                                        <h5 className="mb-3">CONTACT US</h5>
                                       {/*  Contact */}
                                        <form>
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="exampleInputname1" placeholder="Enter Name"/> </div>
                                            <div className="form-group">
                                                <input type="email" className="form-control" placeholder="Enter email"/> </div>
                                            <div className="form-group">
                                                <textarea className="form-control" id="exampleTextarea" rows="3" placeholder="Message"></textarea>
                                            </div>
                                            <button type="submit" className="btn btn-info">Submit</button>
                                        </form>
                                    </div>
                                    <div className="col-lg-3 col-xlg-4 mb-4">
                                        <h5 className="mb-3">LIST STYLE</h5>
                                        {/* List style  */}
                                        <ul className="list-style-none">
                                            <li><a href="#a"><i className="fa fa-check text-success"></i> You can give link</a></li>
                                            <li><a href="#a"><i className="fa fa-check text-success"></i> Give link</a></li>
                                            <li><a href="#a"><i className="fa fa-check text-success"></i> Another Give link</a></li>
                                            <li><a href="#a"><i className="fa fa-check text-success"></i> Forth link</a></li>
                                            <li><a href="#a"><i className="fa fa-check text-success"></i> Another fifth link</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        {/* End mega menu */}
                        
                    </ul>
                   {/* Right side toggle and nav items */}
                    <ul className="navbar-nav float-right">
                        {/* Search  */}
                        
                        <li className="nav-item search-box"> 
                            <form className="app-search d-none d-lg-block">
                                <input type="text" className="form-control" placeholder="Search..."/>
                                <a href="javascript:void(0)" className="active"><i className="fa fa-search"></i></a>
                            </form>
                        </li>
                        {/* User profile and search */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle waves-effect waves-dark" href="javascript:void(0)" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src="../dashboard_assets/assets/images/users/1.jpg" alt="user" className="rounded-circle" width="36"/>
                                <span className="ml-2 font-medium">Steve</span><span className="fas fa-angle-down ml-2"></span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right user-dd animated flipInY">
                                <div className="d-flex no-block align-items-center p-3 mb-2 border-bottom">
                                    <div className=""><img src="../dashboard_assets/assets/images/users/1.jpg" alt="user" className="rounded" width="80"/></div>
                                    <div className="ml-2">
                                        <h4 className="mb-0">Steave Jobs</h4>
                                        <p className=" mb-0 text-muted">varun@gmail.com</p>
                                        <a href="javascript:void(0)" className="btn btn-sm btn-danger text-white mt-2 btn-rounded">View Profile</a>
                                    </div>
                                </div>
                                <a className="dropdown-item" href="#a"><i className="ti-user mr-1 ml-1"></i> My Profile</a>
                                <a className="dropdown-item" href="#a"><i className="ti-wallet mr-1 ml-1"></i> My Balance</a>
                                <a className="dropdown-item" href="#a"><i className="ti-email mr-1 ml-1"></i> Inbox</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#a"><i className="ti-settings mr-1 ml-1"></i> Account Setting</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#a"><i className="fa fa-power-off mr-1 ml-1"></i> Logout</a>
                            </div>
                        </li>
                        {/* User profile and search */}
                    </ul>
                </div>
            </nav>
        </header>
        {/* ============================================================== */}
        {/* End Topbar header */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* Left Sidebar - style you can find in sidebar.scss  */}
        {/* ============================================================== */}
        <aside className="left-sidebar">
            {/* Sidebar scroll */}
            <div className="scroll-sidebar">
                {/*  Sidebar navigation- */}
                <nav className="sidebar-nav">
                    <ul id="sidebarnav">
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow waves-effect waves-dark profile-dd" href="javascript:void(0)" aria-expanded="false">
                                <img src="../dashboard_assets/assets/images/users/1.jpg" className="rounded-circle ml-2" width="30"/>
                                <span className="hide-menu">Steve Jection </span>
                            </a>
                            <ul aria-expanded="false" className="collapse  first-level">
                                <li className="sidebar-item">
                                    <a href="javascript:void(0)" className="sidebar-link">
                                        <i className="ti-user"></i>
                                        <span className="hide-menu"> My Profile </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="javascript:void(0)" className="sidebar-link">
                                        <i className="ti-wallet"></i>
                                        <span className="hide-menu"> My Balance </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="javascript:void(0)" className="sidebar-link">
                                        <i className="ti-email"></i>
                                        <span className="hide-menu"> Inbox </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="javascript:void(0)" className="sidebar-link">
                                        <i className="ti-settings"></i>
                                        <span className="hide-menu"> Account Setting </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="javascript:void(0)" className="sidebar-link">
                                        <i className="fas fa-power-off"></i>
                                        <span className="hide-menu"> Logout </span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                                <i className="mdi mdi-av-timer"></i>
                                <span className="hide-menu">Dashboard</span> 
                                <span className="badge badge-inverse badge-pill ml-auto mr-3 font-medium px-2 py-1">6</span>
                            </a>
                            <ul aria-expanded="false" className="collapse  first-level">
                                <li className="sidebar-item">
                                    <a href="index.html" className="sidebar-link">
                                        <i className="mdi mdi-adjust"></i>
                                        <span className="hide-menu"> Dashboard 1 </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="index2.html" className="sidebar-link">
                                        <i className="mdi mdi-adjust"></i>
                                        <span className="hide-menu"> Dashboard 2 </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="index3.html" className="sidebar-link">
                                        <i className="mdi mdi-adjust"></i>
                                        <span className="hide-menu"> Dashboard 3 </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="index4.html" className="sidebar-link">
                                        <i className="mdi mdi-adjust"></i>
                                        <span className="hide-menu"> Dashboard 4 </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="index5.html" className="sidebar-link">
                                        <i className="mdi mdi-adjust"></i>
                                        <span className="hide-menu"> Dashboard 5 </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="index6.html" className="sidebar-link">
                                        <i className="mdi mdi-adjust"></i>
                                        <span className="hide-menu"> Dashboard 6 </span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                                <i className="mdi mdi-cart-outline"></i>
                                <span className="hide-menu">Ecommerce</span>
                            </a>
                            <ul aria-expanded="false" className="collapse first-level">
                                <li className="sidebar-item">
                                    <a href="eco-products.html" className="sidebar-link">
                                        <i className="mdi mdi-cards-variant"></i>
                                        <span className="hide-menu">Products</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="eco-products-cart.html" className="sidebar-link">
                                        <i className="mdi mdi-cart"></i>
                                        <span className="hide-menu">Products Cart</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="eco-products-edit.html" className="sidebar-link">
                                        <i className="mdi mdi-cart-plus"></i>
                                        <span className="hide-menu">Products Edit</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="eco-products-detail.html" className="sidebar-link">
                                        <i className="mdi mdi-camera-burst"></i>
                                        <span className="hide-menu">Product Details</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="eco-products-orders.html" className="sidebar-link">
                                        <i className="mdi mdi-chart-pie"></i>
                                        <span className="hide-menu">Product Orders</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="eco-products-checkout.html" className="sidebar-link">
                                        <i className="mdi mdi-clipboard-check"></i>
                                        <span className="hide-menu">Products Checkout</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                                <i className="mdi mdi-format-color-fill"></i>
                                <span className="hide-menu">Ui Elements </span>
                                <span className="badge badge-info badge-pill ml-auto mr-3 font-medium px-2 py-1">12</span>
                            </a>
                            <ul aria-expanded="false" className="collapse first-level">
                                <li className="sidebar-item">
                                    <a href="ui-buttons.html" className="sidebar-link">
                                        <i className="mdi mdi-toggle-switch"></i>
                                        <span className="hide-menu"> Buttons</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="ui-modals.html" className="sidebar-link">
                                        <i className="mdi mdi-tablet"></i>
                                        <span className="hide-menu"> Modals</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="ui-tab.html" className="sidebar-link">
                                        <i className="mdi mdi-sort-variant"></i>
                                        <span className="hide-menu"> Tab</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="ui-tooltip-popover.html" className="sidebar-link">
                                        <i className="mdi mdi-image-filter-vintage"></i>
                                        <span className="hide-menu"> Tooltip &amp; Popover</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="ui-notification.html" className="sidebar-link">
                                        <i className="mdi mdi-message-bulleted"></i>
                                        <span className="hide-menu"> Notification</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="ui-progressbar.html" className="sidebar-link">
                                        <i className="mdi mdi-poll"></i>
                                        <span className="hide-menu"> Progressbar</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="ui-typography.html" className="sidebar-link">
                                        <i className="mdi mdi-format-line-spacing"></i>
                                        <span className="hide-menu"> Typography</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="ui-bootstrap.html" className="sidebar-link">
                                        <i className="mdi mdi-bootstrap"></i>
                                        <span className="hide-menu"> Bootstrap Ui</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="ui-breadcrumb.html" className="sidebar-link">
                                        <i className="mdi mdi-equal"></i>
                                        <span className="hide-menu"> Breadcrumb</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="ui-list-media.html" className="sidebar-link">
                                        <i className="mdi mdi-file-video"></i>
                                        <span className="hide-menu"> List Media</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="ui-grid.html" className="sidebar-link">
                                        <i className="mdi mdi-view-module"></i>
                                        <span className="hide-menu"> Grid</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="ui-carousel.html" className="sidebar-link">
                                        <i className="mdi mdi-view-carousel"></i>
                                        <span className="hide-menu"> Carousel</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="ui-scrollspy.html" className="sidebar-link">
                                        <i className="mdi mdi-crop-free"></i>
                                        <span className="hide-menu"> Scrollspy</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="ui-spinner.html" className="sidebar-link">
                                        <i className="mdi mdi-application"></i>
                                        <span className="hide-menu"> Spinner</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="ui-toasts.html" className="sidebar-link">
                                        <i className="mdi mdi-apple-safari"></i>
                                        <span className="hide-menu"> Toasts</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                                <i className="mdi mdi-content-copy"></i>
                                <span className="hide-menu">Sample Pages</span>
                                <span className="badge badge-warning text-white badge-pill ml-auto mr-3 font-medium px-2 py-1">25</span>
                            </a>
                            <ul aria-expanded="false" className="collapse first-level">
                                <li className="sidebar-item">
                                    <a href="starter-kit.html" className="sidebar-link">
                                        <i className="mdi mdi-crop-free"></i>
                                        <span className="hide-menu">Starter Kit</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a className="has-arrow sidebar-link" href="javascript:void(0)" aria-expanded="false">
                                        <i className="mdi mdi-email-open-outline"></i>
                                        <span className="hide-menu">Email Templates</span>
                                    </a>
                                    <ul aria-expanded="false" className="collapse second-level">
                                        <li className="sidebar-item">
                                            <a href="email-templete-alert.html" className="sidebar-link">
                                                <i className="mdi mdi-message-alert"></i>
                                                <span className="hide-menu"> Alert </span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="email-templete-basic.html" className="sidebar-link">
                                                <i className="mdi mdi-message-bulleted"></i>
                                                <span className="hide-menu"> Basic</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="email-templete-billing.html" className="sidebar-link">
                                                <i className="mdi mdi-message-draw"></i>
                                                <span className="hide-menu"> Billing</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="email-templete-password-reset.html" className="sidebar-link">
                                                <i className="mdi mdi-message-bulleted-off"></i>
                                                <span className="hide-menu"> Password-Reset</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sidebar-item">
                                    <a className="has-arrow sidebar-link" href="javascript:void(0)" aria-expanded="false">
                                        <i className="mdi mdi-account-circle"></i>
                                        <span className="hide-menu">Authentication</span>
                                    </a>
                                    <ul aria-expanded="false" className="collapse second-level">
                                        <li className="sidebar-item">
                                            <a href="authentication-login1.html" className="sidebar-link">
                                                <i className="mdi mdi-account-key"></i>
                                                <span className="hide-menu"> Login </span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="authentication-login2.html" className="sidebar-link">
                                                <i className="mdi mdi-account-key"></i>
                                                <span className="hide-menu"> Login 2 </span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="authentication-register1.html" className="sidebar-link">
                                                <i className="mdi mdi-account-plus"></i>
                                                <span className="hide-menu"> Register</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="authentication-register2.html" className="sidebar-link">
                                                <i className="mdi mdi-account-plus"></i>
                                                <span className="hide-menu"> Register 2</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="authentication-lockscreen.html" className="sidebar-link">
                                                <i className="mdi mdi-account-off"></i>
                                                <span className="hide-menu"> Lockscreen</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="authentication-recover-password.html" className="sidebar-link">
                                                <i className="mdi mdi-account-convert"></i>
                                                <span className="hide-menu"> Recover password</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sidebar-item">
                                    <a className="has-arrow sidebar-link" href="javascript:void(0)" aria-expanded="false">
                                        <i className="mdi mdi-alert-box"></i>
                                        <span className="hide-menu">Error Pages</span>
                                    </a>
                                    <ul aria-expanded="false" className="collapse second-level">
                                        <li className="sidebar-item">
                                            <a href="error-400.html" className="sidebar-link">
                                                <i className="mdi mdi-alert-outline"></i>
                                                <span className="hide-menu"> Error 400 </span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="error-403.html" className="sidebar-link">
                                                <i className="mdi mdi-alert-outline"></i>
                                                <span className="hide-menu"> Error 403</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="error-404.html" className="sidebar-link">
                                                <i className="mdi mdi-alert-outline"></i>
                                                <span className="hide-menu"> Error 404</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="error-500.html" className="sidebar-link">
                                                <i className="mdi mdi-alert-outline"></i>
                                                <span className="hide-menu"> Error 500</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="error-503.html" className="sidebar-link">
                                                <i className="mdi mdi-alert-outline"></i>
                                                <span className="hide-menu"> Error 503</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sidebar-item">
                                    <a href="pages-animation.html" className="sidebar-link">
                                        <i className="mdi mdi-debug-step-over"></i>
                                        <span className="hide-menu">Animation</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="pages-search-result.html" className="sidebar-link">
                                        <i className="mdi mdi-search-web"></i>
                                        <span className="hide-menu">Search Result</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="pages-gallery.html" className="sidebar-link">
                                        <i className="mdi mdi-camera-iris"></i>
                                        <span className="hide-menu">Gallery</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="pages-treeview.html" className="sidebar-link">
                                        <i className="mdi mdi-file-tree"></i>
                                        <span className="hide-menu">Treeview</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="pages-block-ui.html" className="sidebar-link">
                                        <i className="mdi mdi-codepen"></i>
                                        <span className="hide-menu">Block UI</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="pages-session-timeout.html" className="sidebar-link">
                                        <i className="mdi mdi-timer-off"></i>
                                        <span className="hide-menu">Session Timeout</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="pages-session-idle-timeout.html" className="sidebar-link">
                                        <i className="mdi mdi-timer-sand-empty"></i>
                                        <span className="hide-menu">Session Idle Timeout</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="pages-utility-classes.html" className="sidebar-link">
                                        <i className="mdi mdi-tune"></i>
                                        <span className="hide-menu">Helper Classes</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="pages-maintenance.html" className="sidebar-link">
                                        <i className="mdi mdi-camera-iris"></i>
                                        <span className="hide-menu">Maintenance Page</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                                <i className="mdi mdi-apps"></i>
                                <span className="hide-menu">Apps</span>
                            </a>
                            <ul aria-expanded="false" className="collapse first-level">
                                <li className="sidebar-item">
                                    <a href="app-chats.html" className="sidebar-link">
                                        <i className="mdi mdi-comment-processing-outline"></i>
                                        <span className="hide-menu">Chat Message</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a className="has-arrow sidebar-link" href="javascript:void(0)" aria-expanded="false">
                                        <i className="mdi mdi-inbox-arrow-down"></i>
                                        <span className="hide-menu">Inbox</span>
                                    </a>
                                    <ul aria-expanded="false" className="collapse second-level">
                                        <li className="sidebar-item">
                                            <a href="inbox-email.html" className="sidebar-link">
                                                <i className="mdi mdi-email"></i>
                                                <span className="hide-menu"> Email </span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="inbox-email-detail.html" className="sidebar-link">
                                                <i className="mdi mdi-email-alert"></i>
                                                <span className="hide-menu"> Email Detail </span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="inbox-email-compose.html" className="sidebar-link">
                                                <i className="mdi mdi-email-secure"></i>
                                                <span className="hide-menu"> Email Compose </span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sidebar-item">
                                    <a className="has-arrow sidebar-link" href="javascript:void(0)" aria-expanded="false">
                                        <i className="ti-user"></i>
                                        <span className="hide-menu">Contacts</span>
                                    </a>
                                    <ul aria-expanded="false" className="collapse second-level">
                                        <li className="sidebar-item">
                                            <a href="contact-list.html" className="sidebar-link">
                                                <i className="icon-people"></i>
                                                <span className="hide-menu"> Contact List </span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="contact-grid.html" className="sidebar-link">
                                                <i className="icon-user-follow"></i>
                                                <span className="hide-menu"> Contacts Grid </span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sidebar-item">
                                    <a className="has-arrow sidebar-link" href="javascript:void(0)" aria-expanded="false">
                                        <i className="mdi mdi-bookmark-plus-outline"></i>
                                        <span className="hide-menu">Tickets</span>
                                    </a>
                                    <ul aria-expanded="false" className="collapse second-level">
                                        <li className="sidebar-item">
                                            <a href="ticket-list.html" className="sidebar-link">
                                                <i className="mdi mdi-book-multiple"></i>
                                                <span className="hide-menu"> Ticket List </span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="ticket-detail.html" className="sidebar-link">
                                                <i className="mdi mdi-book-plus"></i>
                                                <span className="hide-menu"> Ticket Detail </span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sidebar-item">
                                    <a href="app-taskboard.html" className="sidebar-link">
                                        <i className="mdi mdi-bulletin-board"></i>
                                        <span className="hide-menu"> Taskboard </span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <div className="devider"></div>
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                                <i className="mdi mdi-tune-vertical"></i>
                                <span className="hide-menu">Sidebar Type </span>
                            </a>
                            <ul aria-expanded="false" className="collapse  first-level">
                                <li className="sidebar-item">
                                    <a href="sidebar-type-minisidebar.html" className="sidebar-link">
                                        <i className="mdi mdi-view-quilt"></i>
                                        <span className="hide-menu"> Minisidebar </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="sidebar-type-iconsidebar.html" className="sidebar-link">
                                        <i className="mdi mdi-view-parallel"></i>
                                        <span className="hide-menu"> Icon Sidebar </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="sidebar-type-overlaysidebar.html" className="sidebar-link">
                                        <i className="mdi mdi-view-day"></i>
                                        <span className="hide-menu"> Overlay Sidebar </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="sidebar-type-fullsidebar.html" className="sidebar-link">
                                        <i className="mdi mdi-view-array"></i>
                                        <span className="hide-menu"> Full Sidebar </span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                                <i className="mdi mdi-content-copy"></i>
                                <span className="hide-menu">Page Layouts </span>
                            </a>
                            <ul aria-expanded="false" className="collapse  first-level">
                                <li className="sidebar-item">
                                    <a href="layout-inner-fixed-left-sidebar.html" className="sidebar-link">
                                        <i className="mdi mdi-format-align-left"></i>
                                        <span className="hide-menu"> Inner Fixed Left Sidebar </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="layout-inner-fixed-right-sidebar.html" className="sidebar-link">
                                        <i className="mdi mdi-format-align-right"></i>
                                        <span className="hide-menu"> Inner Fixed Right Sidebar </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="layout-inner-left-sidebar.html" className="sidebar-link">
                                        <i className="mdi mdi-format-float-left"></i>
                                        <span className="hide-menu"> Inner Left Sidebar </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="layout-inner-right-sidebar.html" className="sidebar-link">
                                        <i className="mdi mdi-format-float-right"></i>
                                        <span className="hide-menu"> Inner Right Sidebar </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="page-layout-fixed-header.html" className="sidebar-link">
                                        <i className="mdi mdi-view-quilt"></i>
                                        <span className="hide-menu"> Fixed Header </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="page-layout-fixed-sidebar.html" className="sidebar-link">
                                        <i className="mdi mdi-view-parallel"></i>
                                        <span className="hide-menu"> Fixed Sidebar </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="page-layout-fixed-header-sidebar.html" className="sidebar-link">
                                        <i className="mdi mdi-view-column"></i>
                                        <span className="hide-menu"> Fixed Header &amp; Sidebar </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="page-layout-boxed-layout.html" className="sidebar-link">
                                        <i className="mdi mdi-view-carousel"></i>
                                        <span className="hide-menu"> Box Layout </span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <div className="devider"></div>
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                                <i className="mdi mdi-clipboard-text"></i>
                                <span className="hide-menu">Forms</span>
                            </a>
                            <ul aria-expanded="false" className="collapse first-level">
                                <li className="sidebar-item">
                                    <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                                        <i className="mdi mdi-collage"></i>
                                        <span className="hide-menu">Form Elements</span>
                                    </a>
                                    <ul aria-expanded="false" className="collapse first-level">
                                        <li className="sidebar-item">
                                            <a href="form-inputs.html" className="sidebar-link">
                                                <i className="mdi mdi-priority-low"></i>
                                                <span className="hide-menu"> Forms Input</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="form-input-groups.html" className="sidebar-link">
                                                <i className="mdi mdi-rounded-corner"></i>
                                                <span className="hide-menu"> Input Groups</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="form-input-grid.html" className="sidebar-link">
                                                <i className="mdi mdi-select-all"></i>
                                                <span className="hide-menu"> Input Grid</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="form-checkbox-radio.html" className="sidebar-link">
                                                <i className="mdi mdi-shape-plus"></i>
                                                <span className="hide-menu"> Checkboxes &amp; Radios</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="form-bootstrap-touchspin.html" className="sidebar-link">
                                                <i className="mdi mdi-switch"></i>
                                                <span className="hide-menu"> Bootstrap Touchspin</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="form-bootstrap-switch.html" className="sidebar-link">
                                                <i className="mdi mdi-toggle-switch-off"></i>
                                                <span className="hide-menu"> Bootstrap Switch</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="form-select2.html" className="sidebar-link">
                                                <i className="mdi mdi-relative-scale"></i>
                                                <span className="hide-menu"> Select2</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="form-dual-listbox.html" className="sidebar-link">
                                                <i className="mdi mdi-tab-unselected"></i>
                                                <span className="hide-menu"> Dual Listbox</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="form-xditable.html" className="sidebar-link">
                                                <i className="mdi mdi-loop"></i>
                                                <span className="hide-menu"> X-editable</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sidebar-item">
                                    <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                                        <i className="mdi mdi-receipt"></i>
                                        <span className="hide-menu">Form Layouts</span>
                                    </a>
                                    <ul aria-expanded="false" className="collapse first-level">
                                        <li className="sidebar-item">
                                            <a href="form-basic.html" className="sidebar-link">
                                                <i className="mdi mdi-vector-difference-ba"></i>
                                                <span className="hide-menu"> Basic Forms</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="form-horizontal.html" className="sidebar-link">
                                                <i className="mdi mdi-file-document-box"></i>
                                                <span className="hide-menu"> Form Horizontal</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="form-actions.html" className="sidebar-link">
                                                <i className="mdi mdi-code-greater-than"></i>
                                                <span className="hide-menu"> Form Actions</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="form-row-separator.html" className="sidebar-link">
                                                <i className="mdi mdi-code-equal"></i>
                                                <span className="hide-menu"> Row Separator</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="form-bordered.html" className="sidebar-link">
                                                <i className="mdi mdi-flip-to-front"></i>
                                                <span className="hide-menu"> Form Bordered</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="form-striped-row.html" className="sidebar-link">
                                                <i className="mdi mdi-content-duplicate"></i>
                                                <span className="hide-menu"> Striped Rows</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="form-detail.html" className="sidebar-link">
                                                <i className="mdi mdi-cards-outline"></i>
                                                <span className="hide-menu"> Form Detail</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="form-material.html" className="sidebar-link">
                                                <i className="mdi mdi-content-duplicate"></i>
                                                <span className="hide-menu"> Form Material</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="form-float-input.html" className="sidebar-link">
                                                <i className="mdi mdi-logout"></i>
                                                <span className="hide-menu"> Form Float Input</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sidebar-item">
                                    <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                                        <i className="mdi mdi-code-equal"></i>
                                        <span className="hide-menu">Form Addons</span>
                                    </a>
                                    <ul aria-expanded="false" className="collapse first-level">
                                        <li className="sidebar-item">
                                            <a href="form-paginator.html" className="sidebar-link">
                                                <i className="mdi mdi-export"></i>
                                                <span className="hide-menu"> Paginator</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="form-img-cropper.html" className="sidebar-link">
                                                <i className="mdi mdi-crop"></i>
                                                <span className="hide-menu"> Image Cropper</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="form-dropzone.html" className="sidebar-link">
                                                <i className="mdi mdi-crosshairs-gps"></i>
                                                <span className="hide-menu"> Dropzone</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="form-mask.html" className="sidebar-link">
                                                <i className="mdi mdi-box-shadow"></i>
                                                <span className="hide-menu"> Form Mask</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="form-typeahead.html" className="sidebar-link">
                                                <i className="mdi mdi-cards-variant"></i>
                                                <span className="hide-menu"> Form Typehead</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sidebar-item">
                                    <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                                        <i className="mdi mdi-alert-box"></i>
                                        <span className="hide-menu">Form Validation</span>
                                    </a>
                                    <ul aria-expanded="false" className="collapse first-level">
                                        <li className="sidebar-item">
                                            <a href="form-bootstrap-validation.html" className="sidebar-link">
                                                <i className="mdi mdi-credit-card-scan"></i>
                                                <span className="hide-menu"> Bootstrap Validation</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="form-custom-validation.html" className="sidebar-link">
                                                <i className="mdi mdi-credit-card-plus"></i>
                                                <span className="hide-menu"> Custom Validation</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sidebar-item">
                                    <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                                        <i className="mdi mdi-pencil-box-outline"></i>
                                        <span className="hide-menu">Form Pickers</span>
                                    </a>
                                    <ul aria-expanded="false" className="collapse first-level">
                                        <li className="sidebar-item">
                                            <a href="form-picker-colorpicker.html" className="sidebar-link">
                                                <i className="mdi mdi-calendar-plus"></i>
                                                <span className="hide-menu"> Form Colorpicker</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="form-picker-datetimepicker.html" className="sidebar-link">
                                                <i className="mdi mdi-calendar-clock"></i>
                                                <span className="hide-menu"> Form Datetimepicker</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="form-picker-bootstrap-rangepicker.html" className="sidebar-link">
                                                <i className="mdi mdi-calendar-range"></i>
                                                <span className="hide-menu"> Form Bootstrap Rangepicker</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="form-picker-bootstrap-datepicker.html" className="sidebar-link">
                                                <i className="mdi mdi-calendar-check"></i>
                                                <span className="hide-menu"> Form Bootstrap Datepicker</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="form-picker-material-datepicker.html" className="sidebar-link">
                                                <i className="mdi mdi-calendar-text"></i>
                                                <span className="hide-menu"> Form Material Datepicker</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sidebar-item">
                                    <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                                        <i className="mdi mdi-dns"></i>
                                        <span className="hide-menu">Form Editor</span>
                                    </a>
                                    <ul aria-expanded="false" className="collapse first-level">
                                        <li className="sidebar-item">
                                            <a href="form-editor-ckeditor.html" className="sidebar-link">
                                                <i className="mdi mdi-drawing"></i>
                                                <span className="hide-menu">Ck Editor</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="form-editor-quill.html" className="sidebar-link">
                                                <i className="mdi mdi-drupal"></i>
                                                <span className="hide-menu">Quill Editor</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="form-editor-summernote.html" className="sidebar-link">
                                                <i className="mdi mdi-brightness-6"></i>
                                                <span className="hide-menu">Summernote Editor</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="form-editor-tinymce.html" className="sidebar-link">
                                                <i className="mdi mdi-bowling"></i>
                                                <span className="hide-menu">Tinymce Edtor</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sidebar-item">
                                    <a href="form-wizard.html" className="sidebar-link">
                                        <i className="mdi mdi-cube-send"></i>
                                        <span className="hide-menu">Form Wizard</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="form-repeater.html" className="sidebar-link">
                                        <i className="mdi mdi-creation"></i>
                                        <span className="hide-menu">Form Repeater</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                                <i className="mdi mdi-table"></i>
                                <span className="hide-menu">Tables</span>
                                <span className="badge badge-danger text-white badge-pill ml-auto mr-3 font-medium px-2 py-1">11</span>
                            </a>
                            <ul aria-expanded="false" className="collapse first-level">
                                <li className="sidebar-item">
                                    <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                                        <i className="mdi mdi-border-none"></i>
                                        <span className="hide-menu">Bootstrap Tables</span>
                                    </a>
                                    <ul aria-expanded="false" className="collapse first-level">
                                        <li className="sidebar-item">
                                            <a href="table-basic.html" className="sidebar-link">
                                                <i className="mdi mdi-border-all"></i>
                                                <span className="hide-menu">Basic Table </span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="table-dark-basic.html" className="sidebar-link">
                                                <i className="mdi mdi-border-left"></i>
                                                <span className="hide-menu">Dark Basic Table </span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="table-sizing.html" className="sidebar-link">
                                                <i className="mdi mdi-border-outside"></i>
                                                <span className="hide-menu">Sizing Table </span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="table-layout-coloured.html" className="sidebar-link">
                                                <i className="mdi mdi-border-bottom"></i>
                                                <span className="hide-menu">Coloured Table Layout</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sidebar-item">
                                    <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                                        <i className="mdi mdi-border-inside"></i>
                                        <span className="hide-menu">Datatables</span>
                                    </a>
                                    <ul aria-expanded="false" className="collapse first-level">
                                        <li className="sidebar-item">
                                            <a href="table-datatable-basic.html" className="sidebar-link">
                                                <i className="mdi mdi-border-vertical"></i>
                                                <span className="hide-menu"> Basic Initialisation</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="table-datatable-api.html" className="sidebar-link">
                                                <i className="mdi mdi-blur-linear"></i>
                                                <span className="hide-menu"> API</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="table-datatable-advanced.html" className="sidebar-link">
                                                <i className="mdi mdi-border-style"></i>
                                                <span className="hide-menu"> Advanced Initialisation</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sidebar-item">
                                    <a href="table-bootstrap.html" className="sidebar-link">
                                        <i className="mdi mdi-border-horizontal"></i>
                                        <span className="hide-menu">Table Bootstrap</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="table-jsgrid.html" className="sidebar-link">
                                        <i className="mdi mdi-border-top"></i>
                                        <span className="hide-menu">Table Jsgrid</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="table-responsive.html" className="sidebar-link">
                                        <i className="mdi mdi-border-style"></i>
                                        <span className="hide-menu">Table Responsive</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="table-footable.html" className="sidebar-link">
                                        <i className="mdi mdi-tab-unselected"></i>
                                        <span className="hide-menu">Table Footable</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                                <i className="mdi mdi-chart-bar"></i>
                                <span className="hide-menu">Charts</span>
                            </a>
                            <ul aria-expanded="false" className="collapse first-level">
                                <li className="sidebar-item">
                                    <a href="chart-morris.html" className="sidebar-link">
                                        <i className="mdi mdi-image-filter-tilt-shift"></i>
                                        <span className="hide-menu">Morris Chart</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="chart-chart-js.html" className="sidebar-link">
                                        <i className="mdi mdi-svg"></i>
                                        <span className="hide-menu">Chartjs</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="chart-sparkline.html" className="sidebar-link">
                                        <i className="mdi mdi-chart-histogram"></i>
                                        <span className="hide-menu">Sparkline Chart</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="chart-chartist.html" className="sidebar-link">
                                        <i className="mdi mdi-blur"></i>
                                        <span className="hide-menu">Chartist Chart</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                                        <i className="mdi mdi-chemical-weapon"></i>
                                        <span className="hide-menu">C3 Charts</span>
                                    </a>
                                    <ul aria-expanded="false" className="collapse first-level">
                                        <li className="sidebar-item">
                                            <a href="chart-c3-axis.html" className="sidebar-link">
                                                <i className="mdi mdi-arrange-bring-to-front"></i>
                                                <span className="hide-menu">Axis Chart</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="chart-c3-bar.html" className="sidebar-link">
                                                <i className="mdi mdi-arrange-send-to-back"></i>
                                                <span className="hide-menu">Bar Chart</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="chart-c3-data.html" className="sidebar-link">
                                                <i className="mdi mdi-backup-restore"></i>
                                                <span className="hide-menu">Data Chart</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="chart-c3-line.html" className="sidebar-link">
                                                <i className="mdi mdi-backburger"></i>
                                                <span className="hide-menu">Line Chart</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sidebar-item">
                                    <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                                        <i className="mdi mdi-chart-areaspline"></i>
                                        <span className="hide-menu">Echarts</span>
                                    </a>
                                    <ul aria-expanded="false" className="collapse first-level">
                                        <li className="sidebar-item">
                                            <a href="chart-echart-basic.html" className="sidebar-link">
                                                <i className="mdi mdi-chart-line"></i>
                                                <span className="hide-menu">Basic Charts</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="chart-echart-bar.html" className="sidebar-link">
                                                <i className="mdi mdi-chart-scatterplot-hexbin"></i>
                                                <span className="hide-menu">Bar Chart</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="chart-echart-pie-doughnut.html" className="sidebar-link">
                                                <i className="mdi mdi-chart-pie"></i>
                                                <span className="hide-menu">Pie &amp; Doughnut Chart</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <div className="devider"></div>
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                                <i className="mdi mdi-credit-card-multiple"></i>
                                <span className="hide-menu">Cards</span>
                            </a>
                            <ul aria-expanded="false" className="collapse  first-level">
                                <li className="sidebar-item">
                                    <a href="ui-cards.html" className="sidebar-link">
                                        <i className="mdi mdi-layers"></i>
                                        <span className="hide-menu"> Basic Cards</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="ui-card-customs.html" className="sidebar-link">
                                        <i className="mdi mdi-credit-card-scan"></i>
                                        <span className="hide-menu">Custom Cards</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="ui-card-weather.html" className="sidebar-link">
                                        <i className="mdi mdi-weather-fog"></i>
                                        <span className="hide-menu">Weather Cards</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="ui-card-draggable.html" className="sidebar-link">
                                        <i className="mdi mdi-bandcamp"></i>
                                        <span className="hide-menu">Draggable Cards</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                                <i className="mdi mdi-credit-card-multiple"></i>
                                <span className="hide-menu">Components</span>
                            </a>
                            <ul aria-expanded="false" className="collapse  first-level">
                                <li className="sidebar-item">
                                    <a href="component-sweetalert.html" className="sidebar-link">
                                        <i className="mdi mdi-layers"></i>
                                        <span className="hide-menu"> Sweet Alert</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="component-nestable.html" className="sidebar-link">
                                        <i className="mdi mdi-credit-card-scan"></i>
                                        <span className="hide-menu">Nestable</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="component-noui-slider.html" className="sidebar-link">
                                        <i className="mdi mdi-weather-fog"></i>
                                        <span className="hide-menu">Noui slider</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="component-rating.html" className="sidebar-link">
                                        <i className="mdi mdi-bandcamp"></i>
                                        <span className="hide-menu">Rating</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="component-toastr.html" className="sidebar-link">
                                        <i className="mdi mdi-poll"></i>
                                        <span className="hide-menu">Toastr</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <div className="devider"></div>
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                                <i className="mdi mdi-settings"></i>
                                <span className="hide-menu">Widgets </span>
                            </a>
                            <ul aria-expanded="false" className="collapse  first-level">
                                <li className="sidebar-item">
                                    <a href="widgets-apps.html" className="sidebar-link">
                                        <i className="mdi mdi-comment-processing-outline"></i>
                                        <span className="hide-menu"> Apps Widgets </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="widgets-data.html" className="sidebar-link">
                                        <i className="mdi mdi-calendar"></i>
                                        <span className="hide-menu"> Data Widgets </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="widgets-charts.html" className="sidebar-link">
                                        <i className="mdi mdi-bulletin-board"></i>
                                        <span className="hide-menu"> Charts Widgets</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                                <i className="mdi mdi-face"></i>
                                <span className="hide-menu">Icons</span>
                            </a>
                            <ul aria-expanded="false" className="collapse first-level">
                                <li className="sidebar-item">
                                    <a href="icon-material.html" className="sidebar-link">
                                        <i className="mdi mdi-emoticon"></i>
                                        <span className="hide-menu"> Material Icons </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="icon-fontawesome.html" className="sidebar-link">
                                        <i className="mdi mdi-emoticon-cool"></i>
                                        <span className="hide-menu"> Fontawesome Icons</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="icon-themify.html" className="sidebar-link">
                                        <i className="mdi mdi-chart-bubble"></i>
                                        <span className="hide-menu"> Themify Icons</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="icon-weather.html" className="sidebar-link">
                                        <i className="mdi mdi-weather-cloudy"></i>
                                        <span className="hide-menu"> Weather Icons</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="icon-simple-lineicon.html" className="sidebar-link">
                                        <i className="mdi mdi mdi-image-broken-variant"></i>
                                        <span className="hide-menu"> Simple Line icons</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="icon-flag.html" className="sidebar-link">
                                        <i className="mdi mdi-flag-triangle"></i>
                                        <span className="hide-menu"> Flag Icons</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link waves-effect waves-dark sidebar-link" href="map-google.html" aria-expanded="false">
                                <i className="mdi mdi-google-maps"></i>
                                <span className="hide-menu">Google Map</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link waves-effect waves-dark sidebar-link" href="map-vector.html" aria-expanded="false">
                                <i className="mdi mdi-map-marker-radius"></i>
                                <span className="hide-menu">Vector Map</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                                <i className="mdi mdi-account-multiple"></i>
                                <span className="hide-menu">Users</span>
                            </a>
                            <ul aria-expanded="false" className="collapse first-level">
                                <li className="sidebar-item">
                                    <a href="ui-user-card.html" className="sidebar-link">
                                        <i className="mdi mdi-account-box"></i>
                                        <span className="hide-menu"> User Card </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="pages-profile.html" className="sidebar-link">
                                        <i className="mdi mdi-account-network"></i>
                                        <span className="hide-menu"> User Profile</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="ui-user-contacts.html" className="sidebar-link">
                                        <i className="mdi mdi-account-star-variant"></i>
                                        <span className="hide-menu"> User Contact</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                                <i className="mdi mdi-ungroup"></i>
                                <span className="hide-menu">Invoice</span>
                            </a>
                            <ul aria-expanded="false" className="collapse first-level">
                                <li className="sidebar-item">
                                    <a href="pages-invoice.html" className="sidebar-link">
                                        <i className="mdi mdi-vector-triangle"></i>
                                        <span className="hide-menu"> Invoice Layout </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="pages-invoice-list.html" className="sidebar-link">
                                        <i className="mdi mdi-vector-rectangle"></i>
                                        <span className="hide-menu"> Invoice List</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                                <i className="mdi mdi-apple-safari"></i>
                                <span className="hide-menu">Timeline</span>
                            </a>
                            <ul aria-expanded="false" className="collapse first-level">
                                <li className="sidebar-item">
                                    <a href="timeline-center.html" className="sidebar-link">
                                        <i className="mdi mdi-clock-fast"></i>
                                        <span className="hide-menu"> Center Timeline </span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="timeline-horizontal.html" className="sidebar-link">
                                        <i className="mdi mdi-clock-end"></i>
                                        <span className="hide-menu"> Horizontal Timeline</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="timeline-left.html" className="sidebar-link">
                                        <i className="mdi mdi-clock-in"></i>
                                        <span className="hide-menu"> Left Timeline</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="timeline-right.html" className="sidebar-link">
                                        <i className="mdi mdi-clock-start"></i>
                                        <span className="hide-menu"> Right Timeline</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link waves-effect waves-dark sidebar-link" href="app-calendar.html" aria-expanded="false">
                                <i className="mdi mdi-calendar-check"></i>
                                <span className="hide-menu">Calendar</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                                <i className="mdi mdi-notification-clear-all"></i>
                                <span className="hide-menu">Multi level dd</span>
                            </a>
                            <ul aria-expanded="false" className="collapse first-level">
                                <li className="sidebar-item">
                                    <a href="javascript:void(0)" className="sidebar-link">
                                        <i className="mdi mdi-octagram"></i>
                                        <span className="hide-menu"> item 1.1</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="javascript:void(0)" className="sidebar-link">
                                        <i className="mdi mdi-octagram"></i>
                                        <span className="hide-menu"> item 1.2</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a className="has-arrow sidebar-link" href="javascript:void(0)" aria-expanded="false">
                                        <i className="mdi mdi-playlist-plus"></i>
                                        <span className="hide-menu">Menu 1.3</span>
                                    </a>
                                    <ul aria-expanded="false" className="collapse second-level">
                                        <li className="sidebar-item">
                                            <a href="javascript:void(0)" className="sidebar-link">
                                                <i className="mdi mdi-octagram"></i>
                                                <span className="hide-menu"> item 1.3.1</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="javascript:void(0)" className="sidebar-link">
                                                <i className="mdi mdi-octagram"></i>
                                                <span className="hide-menu"> item 1.3.2</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="javascript:void(0)" className="sidebar-link">
                                                <i className="mdi mdi-octagram"></i>
                                                <span className="hide-menu"> item 1.3.3</span>
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="javascript:void(0)" className="sidebar-link">
                                                <i className="mdi mdi-octagram"></i>
                                                <span className="hide-menu"> item 1.3.4</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sidebar-item">
                                    <a href="javascript:void(0)" className="sidebar-link">
                                        <i className="mdi mdi-playlist-check"></i>
                                        <span className="hide-menu"> item 1.4</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <div className="devider"></div>
                        <li className="sidebar-item">
                            <a className="sidebar-link waves-effect waves-dark sidebar-link" href="https://wrappixel.com/ampleadmin/docs/documentation.html" aria-expanded="false">
                                <i className="mdi mdi-adjust text-danger"></i>
                                <span className="hide-menu">Documentation</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link waves-effect waves-dark sidebar-link" href="authentication-login1.html" aria-expanded="false">
                                <i className="mdi mdi-adjust text-info"></i>
                                <span className="hide-menu">Log Out</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link waves-effect waves-dark sidebar-link" href="pages-faq.html" aria-expanded="false">
                                <i className="mdi mdi-adjust text-success"></i>
                                <span className="hide-menu">FAQs</span>
                            </a>
                        </li>
                    </ul>
                </nav>
               {/* End Sidebar navigation */}
            </div>
           {/* End Sidebar scroll */}
        </aside>
    {/* ============================================================== */}
        {/* End Left Sidebar - style you can find in sidebar.scss  */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* Page wrapper  */}
        {/* ============================================================== */}
        <div className="page-wrapper">
            {/* ============================================================== */}
            {/* Bread crumb and right sidebar toggle */}
            {/* ============================================================== */}
            <div className="page-breadcrumb border-bottom">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-xs-12 align-self-center">
                        <h5 className="font-medium text-uppercase mb-0">Dashboard 2</h5>
                    </div>
                    <div className="col-lg-9 col-md-8 col-xs-12 align-self-center">
                        <button className="btn btn-danger text-white float-right ml-3 d-none d-md-block">Buy Ample Admin</button>
                        <nav aria-label="breadcrumb" className="mt-2 float-md-right float-left">
                            <ol className="breadcrumb mb-0 justify-content-end p-0">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Dashboard 2</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            {/* ============================================================== */}
            {/* End Bread crumb and right sidebar toggle */}
            {/* ============================================================== */}
            {/* ============================================================== */}
            {/* Container fluid  */}
            {/* ============================================================== */}
            <div className="page-content container-fluid">
                {/* ============================================================== */}
                {/* Sales, Expance & Finance Charts Row  */}
                {/* ============================================================== */}
                <div className="row">
                    <div className="col-md-12 col-lg-8">
                        <div className="card">
                            <div className="p-3 bg-danger">
                                <h5 className="card-title text-uppercase mb-0 text-white">Expance</h5>
                                <div className="demo-container mt-4" style={{height:'140px'}}>
                                    <div id="placeholder" className="demo-placeholder"></div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center p-4 border-bottom">
                                <div>
                                    <h2 className="font-medium">$458.90</h2>
                                    <h5 className="text-muted mb-0">Expence for December 1 to 10</h5>
                                </div>
                                <div className="ml-auto">
                                    <button className="btn btn-info btn-circle btn-lg">
                                        <i className="ti-plus"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="row no-gutters">
                                <div className="col-md-6 border-right border-bottom">
                                    <div className="d-flex align-items-center px-4 py-3">
                                        <h2 className="mb-0 text-info display-7">
                                            <i className="ti-headphone-alt"></i>
                                        </h2>
                                        <div className="ml-4">
                                            <h2 className="font-normal">$250</h2>
                                            <h4>Entertainment</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 border-bottom">
                                    <div className="d-flex align-items-center px-4 py-3">
                                        <h2 className="mb-0 text-info display-7">
                                            <i className="ti-home"></i>
                                        </h2>
                                        <div className="ml-4">
                                            <h2 className="font-normal">$60.50</h2>
                                            <h4>House Rent</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 border-right">
                                    <div className="d-flex align-items-center px-4 py-3">
                                        <h2 className="mb-0 text-info display-7">
                                            <i className="far fa-paper-plane"></i>
                                        </h2>
                                        <div className="ml-4">
                                            <h2 className="font-normal">$28</h2>
                                            <h4>Travel</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 border-sm-top">
                                    <div className="d-flex align-items-center px-4 py-3">
                                        <h2 className="mb-0 text-info display-7">
                                            <i className="ti-shopping-cart"></i>
                                        </h2>
                                        <div className="ml-4">
                                            <h2 className="font-normal">$70</h2>
                                            <h4>Shopping</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-uppercase">Sales</h5>
                                <div className="mt-3">
                                    <div id="morris-donut-chart" style={{height:'350px', paddingTop: '50px'}}></div>
                                </div>
                                <div className="d-flex align-items-center mt-4">
                                    <div>
                                        <h3 className="font-medium text-uppercase">Total Sales</h3>
                                        <h5 className="text-muted">160 sales monthly</h5>
                                    </div>
                                    <div className="ml-auto">
                                        <button className="btn btn-info btn-circle btn-lg text-white">
                                            <i className="ti-shopping-cart"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ============================================================== */}
                {/* Chart && Calendar App Row  */}
                {/* ============================================================== */}
                <div className="row">
                    <div className="col-lg-5">
                        <div className="card">
                            <div className="p-3">
                                <h5 className="card-title text-uppercase">Finance</h5>
                                <div className="">
                                    <div id="diagram" className="pt-0" style={{height: '320px'}}></div>
                                    <div className="get">
                                        <div className="arc"> <span className="text">Aug</span>
                                            <input type="hidden" className="percent" value="95" />
                                            <input type="hidden" className="color" value="#53e69d" /> </div>
                                        <div className="arc"> <span className="text">Sep</span>
                                            <input type="hidden" className="percent" value="90" />
                                            <input type="hidden" className="color" value="#ff7676" /> </div>
                                        <div className="arc"> <span className="text">Oct</span>
                                            <input type="hidden" className="percent" value="80" />
                                            <input type="hidden" className="color" value="#88B8E6" /> </div>
                                        <div className="arc"> <span className="text">Nov</span>
                                            <input type="hidden" className="percent" value="53" />
                                            <input type="hidden" className="color" value="#BEDBE9" /> </div>
                                        <div className="arc"> <span className="text">Dec</span>
                                            <input type="hidden" className="percent" value="45" />
                                            <input type="hidden" className="color" value="#EDEBEE" /> </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mt-1">
                                    <div>
                                        <h3 className="display-7"><span className="font-medium">56%</span></h3>
                                        <h5 className="text-muted mb-0">Increase in Nov</h5>
                                    </div>
                                    <div className="ml-auto">
                                        <button className="btn btn-success btn-circle btn-lg text-white">
                                            <i className="ti-stats-up"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="card">
                            <div className="row no-gutters">
                                <div className="col-md-4 position-relative">
                                    <div className="card-body">
                                        <span className="display-6"><span className="font-normal">23</span></span>
                                        <h4 className="pb-2 mb-0">Thursday</h4> 
                                        <span className="weight-border"></span>
                                        <h5 className="pt-3">March 2017</h5>
                                        <div className="bottom-text">
                                            <a href="#" className="text-info text-uppercase">3 Tasks</a>
                                            <h5 className="mb-0 mt-2">Prepare Project</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="bg-primary text-white">
                                        <div className="table-responsive">
                                            <table className="calendar-schedule-table">
                                                <tbody>
                                                    <tr>
                                                        <td colSpan="5">
                                                            <h1 className="month-option">March</h1>
                                                        </td>
                                                        <td></td>
                                                        <td><a href="#" className="text-white font-24"><i className="ti-plus"></i></a></td>
                                                    </tr>
                                                    <tr className="text-uppercase">
                                                        <td>Sun</td>
                                                        <td>Mon</td>
                                                        <td>Tue</td>
                                                        <td>Wed</td>
                                                        <td>Thu</td>
                                                        <td>Fri</td>
                                                        <td>Sat</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td>1</td>
                                                        <td>2</td>
                                                        <td>3</td>
                                                        <td>4</td>
                                                        <td>5</td>
                                                        <td>6</td>
                                                    </tr>
                                                    <tr>
                                                        <td>7</td>
                                                        <td>8</td>
                                                        <td>9</td>
                                                        <td>10</td>
                                                        <td>11</td>
                                                        <td>12</td>
                                                        <td>13</td>
                                                    </tr>
                                                    <tr>
                                                        <td>14</td>
                                                        <td>15</td>
                                                        <td>16</td>
                                                        <td>17</td>
                                                        <td>18</td>
                                                        <td>19</td>
                                                        <td>20</td>
                                                    </tr>
                                                    <tr>
                                                        <td>21</td>
                                                        <td>22</td>
                                                        <td className="cal-active">23</td>
                                                        <td>24</td>
                                                        <td>25</td>
                                                        <td>26</td>
                                                        <td>27</td>
                                                    </tr>
                                                    <tr>
                                                        <td>28</td>
                                                        <td>29</td>
                                                        <td>30</td>
                                                        <td>31</td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan="7"></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ============================================================== */}
                {/* Yearly Sales Charts Row  */}
                {/* ============================================================== */}
                <div className="row">
                    <div className="col-md-12 col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div>
                                        <h2 className="mb-0 font-medium">$354.50</h2>
                                        <h5 className="text-muted mb-0">Total Income</h5>
                                    </div>
                                    <div className="ml-auto">
                                        <div className="" id="ravenue"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-6">
                                        <h2 className="font-medium mb-0">3456</h2>
                                        <h5 className="text-muted mb-0">Yearly Sales</h5>
                                    </div>
                                    <div className="col-6">
                                        <div id="ct-main-bal" style={{height: '57px'}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-6">
                                        <h2 className="mb-0 font-medium">356</h2>
                                        <h5 className="text-muted mb-0">Monthly Sales</h5>
                                    </div>
                                    <div className="col-6">
                                        <div id="ct-extra" style={{height: '57px'}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ============================================================== */}
                {/* Yearly Sales Charts  Row  */}
                {/* ============================================================== */}
                <div className="row">
                    <div className="col-md-12 col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-uppercase">Weekly Usage</h5>
                                <h2 className="font-medium">$58.80</h2>
                                <div className="">
                                    <div id="weeksales-bar" className="position-relative" style={{height: '314px'}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <div className="card">
                            <div className="card-body border-bottom">
                                <h5 className="card-title text-uppercase">Mothly Usage</h5>
                                <h2 className="font-medium">$60.80</h2>
                                <div className="gaugejs-box d-flex justify-content-center mt-5 mb-4">
                                    <canvas id="foo" className="gaugejs">guage</canvas>
                                </div>
                            </div>
                            <div className="d-flex align-items-center p-3">
                                <div>
                                    <span className="mb-0 display-7"><span className="font-medium">26.30</span></span>
                                    <h4 className="mb-0 font-light">AMps Used</h4>
                                </div>
                                <div className="ml-auto">
                                    <button className="btn btn-info btn-circle btn-lg text-white">
                                        <i className="icon-speedometer"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ============================================================== */}
                {/* Recent Comment & Sales Chart Row  */}
                {/* ============================================================== */}
                <div className="row">
                    <div className="col-md-12 col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-uppercase">Recent Comments</h5>
                            </div>
                            <div className="comment-widgets scrollable" style={{height:'531px'}}>
                                {/* Comment Row */}
                                <div className="d-flex flex-row comment-row mt-0 mb-0">
                                    <div className="p-2">
                                        <img src="../dashboard_assets/assets/images/users/1.jpg" alt="user" width="40" className="rounded-circle"/>
                                    </div>
                                    <div className="comment-text w-100">
                                        <h5 className="font-normal mb-1">Pavan kumar</h5>
                                        <span className="text-muted mr-2 font-12">10:20 AM 20 may 2016</span>
                                        <span className="badge badge-info badge-rounded text-uppercase font-medium">Pending</span>
                                        <span className="mb-2 d-block font-14 text-muted font-light mt-3">Donec ac condimentum massa. Etiam pellentesque pretium lacus. Phasellus ultricies dictum suscipit. Aenean commodo </span>
                                        <div className="mt-3">
                                            <a href="javacript:void(0)" className="btn btn btn-rounded btn-outline-success mr-2 btn-sm"><i className="ti-check mr-1"></i>Approve</a>
                                            <a href="javacript:void(0)" className="btn-rounded btn btn-outline-danger btn-sm"><i className="ti-close mr-1"></i> Reject</a>
                                        </div>
                                    </div>
                                </div>
                                {/* Comment Row */}
                                <div className="d-flex flex-row comment-row mt-0 mb-0">
                                    <div className="p-2">
                                        <img src="../dashboard_assets/assets/images/users/2.jpg" alt="user" width="40" className="rounded-circle"/>
                                    </div>
                                    <div className="comment-text w-100">
                                        <h5 className="font-normal mb-1">Sonu Nigam</h5>
                                        <span className="text-muted mr-2 font-12">10:20 AM 20 may 2016</span>
                                        <span className="badge badge-success badge-rounded text-uppercase font-medium text-white">Approved</span>
                                        <span className="mb-2 d-block font-14 text-muted font-light mt-3">Donec ac condimentum massa. Etiam pellentesque pretium lacus. Phasellus ultricies dictum suscipit. Aenean commodo </span>
                                    </div>
                                </div>
                                {/* Comment Row */}
                                <div className="d-flex flex-row comment-row mt-0 mb-0">
                                    <div className="p-2">
                                        <img src="../dashboard_assets/assets/images/users/3.jpg" alt="user" width="40" className="rounded-circle"/>
                                    </div>
                                    <div className="comment-text w-100">
                                        <h5 className="font-normal mb-1">Sonu Nigam</h5>
                                        <span className="text-muted mr-2 font-12">10:20 AM 20 may 2016</span>
                                        <span className="badge badge-danger badge-rounded text-uppercase font-medium text-white">Rejected</span>
                                        <span className="mb-2 d-block font-14 text-muted font-light mt-3">Donec ac condimentum massa. Etiam pellentesque pretium lacus. Phasellus ultricies dictum suscipit. Aenean commodo </span>
                                    </div>
                                </div>
                                {/* Comment Row */}
                                <div className="d-flex flex-row comment-row mt-0 mb-0">
                                    <div className="p-2">
                                        <img src="../dashboard_assets/assets/images/users/1.jpg" alt="user" width="40" className="rounded-circle"/>
                                    </div>
                                    <div className="comment-text w-100">
                                        <h5 className="font-normal mb-1">Pavan kumar</h5>
                                        <span className="text-muted mr-2 font-12">10:20 AM 20 may 2016</span>
                                        <span className="badge badge-info badge-rounded text-uppercase font-medium">Pending</span>
                                        <span className="mb-2 d-block font-14 text-muted font-light mt-3">Donec ac condimentum massa. Etiam pellentesque pretium lacus. Phasellus ultricies dictum suscipit. Aenean commodo </span>
                                        <div className="mt-3">
                                            <a href="javacript:void(0)" className="btn btn btn-rounded btn-outline-success mr-2 btn-sm"><i className="ti-check mr-1"></i>Approve</a>
                                            <a href="javacript:void(0)" className="btn-rounded btn btn-outline-danger btn-sm"><i className="ti-close mr-1"></i> Reject</a>
                                        </div>
                                    </div>
                                </div>
                                {/* Comment Row */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <div className="card">
                            <div className="d-flex align-items-center p-3">
                                <h5 className="card-title mb-0 text-uppercase">Recent Sales</h5>
                                <div className="ml-auto">
                                    <select className="form-control">
                                        <option>March</option>
                                        <option>April</option>
                                        <option>May</option>
                                        <option>June</option>
                                        <option>July</option>
                                    </select>
                                </div>
                            </div>
                            <div className="p-3 bg-light">
                                <div className="d-flex align-items-center">
                                    <div>
                                        <h2 className="font-normal">March 2017</h2>
                                        <p className="mb-2 text-uppercase font-14 font-light">Sales Report</p>
                                    </div>
                                    <div className="ml-auto">
                                        <h1 className="text-info mb-0 font-light">$3,690</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3">
                                <div className="table-responsive">
                                    <table className="table text-muted mb-0 no-wrap recent-table font-light">
                                        <thead>
                                            <tr className="text-uppercase">
                                                <th className="border-0">#</th>
                                                <th className="border-0">Name</th>
                                                <th className="border-0">Status</th>
                                                <th className="border-0">Date</th>
                                                <th className="border-0">Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td className="txt-oflo">Elite admin</td>
                                                <td><span className="badge badge-pill text-uppercase text-white font-medium badge-success label-rouded">SALE</span> </td>
                                                <td className="txt-oflo">April 18, 2017</td>
                                                <td><span className="text-success">$24</span></td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td className="txt-oflo">Real Homes WP Theme</td>
                                                <td><span className="badge badge-pill text-uppercase text-white font-medium badge-info label-rouded">EXTENDED</span></td>
                                                <td className="txt-oflo">April 19, 2017</td>
                                                <td><span className="text-info">$1250</span></td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td className="txt-oflo">Ample Admin</td>
                                                <td><span className="badge badge-pill text-uppercase text-white font-medium badge-info label-rouded">EXTENDED</span></td>
                                                <td className="txt-oflo">April 19, 2017</td>
                                                <td><span className="text-info">$1250</span></td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td className="txt-oflo">Medical Pro WP Theme</td>
                                                <td><span className="badge badge-pill text-uppercase text-white font-medium badge-danger label-rouded">TAX</span></td>
                                                <td className="txt-oflo">April 20, 2017</td>
                                                <td><span className="text-danger">-$24</span></td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td className="txt-oflo">Hosting press html</td>
                                                <td><span className="badge badge-pill text-uppercase text-white font-medium badge-warning label-rouded">SALE</span></td>
                                                <td className="txt-oflo">April 21, 2017</td>
                                                <td><span className="text-success">$24</span></td>
                                            </tr>
                                            <tr>
                                                <td>6</td>
                                                <td className="txt-oflo">Digital Agency PSD</td>
                                                <td><span className="badge badge-pill text-uppercase text-white font-medium badge-success label-rouded">SALE</span> </td>
                                                <td className="txt-oflo">April 23, 2017</td>
                                                <td><span className="text-danger">-$14</span></td>
                                            </tr>
                                            <tr>
                                                <td>7</td>
                                                <td className="txt-oflo">Helping Hands WP Theme</td>
                                                <td><span className="badge badge-pill text-uppercase text-white font-medium badge-warning label-rouded">member</span></td>
                                                <td className="txt-oflo">April 22, 2017</td>
                                                <td><span className="text-success">$64</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ============================================================== */}
                {/* Profile Card & Email App Row  */}
                {/* ============================================================== */}
                <div className="row">
                    <div className="col-md-12 col-lg-4">
                        <div className="card">
                            <div className="p-4">
                                <div className="d-flex flex-row">
                                    <div className=""><img src="../dashboard_assets/assets/images/users/1.jpg" alt="user" className="rounded-circle" width="100" /></div>
                                    <div className="pl-4">
                                        <h3>Daniel Kristeen</h3>
                                        <h4>UIUX Designer</h4>
                                        <button className="btn btn-success btn-rounded text-white text-uppercase font-14"><i className="ti-plus mr-2"></i> Follow</button>
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col border-right text-center">
                                        <h2 className="font-light">14</h2>
                                        <h4 className="text-uppercase">Photos</h4></div>
                                    <div className="col border-right text-center">
                                        <h2 className="font-light">54</h2>
                                        <h4 className="text-uppercase">Videos</h4></div>
                                    <div className="col text-center">
                                        <h2 className="font-light">145</h2>
                                        <h4 className="text-uppercase">Tasks</h4></div>
                                </div>
                            </div>
                            <div className="card-body border-top">
                                <p className="text-center aboutscroll">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                </p>
                                <hr/>
                                <h4 className="font-medium text-center mt-4">Followers</h4>
                                <ul className="list-style-none list-icons d-flex flex-item text-center pt-2">
                                    <li className="col px-2">
                                        <a href="javascript:void(0)" data-toggle="tooltip" title="Shaina Chhatraliya">
                                            <img src="../dashboard_assets/assets/images/users/1.jpg" alt="user" className="rounded-circle" width="50" />
                                        </a>
                                    </li>
                                    <li className="col px-2">
                                        <a href="javascript:void(0)" data-toggle="tooltip" title="Nirav Joshi">
                                            <img src="../dashboard_assets/assets/images/users/2.jpg" alt="user" className="rounded-circle" width="50" />
                                        </a>
                                    </li>
                                    <li className="col px-2">
                                        <a href="javascript:void(0)" data-toggle="tooltip" title="Vishal Bhatt">
                                            <img src="../dashboard_assets/assets/images/users/3.jpg" alt="user" className="rounded-circle" width="50" />
                                        </a>
                                    </li>
                                    <li className="col px-2">
                                        <a href="javascript:void(0)" data-toggle="tooltip" title="More">
                                            <button className="btn btn-circle btn-info text-white btn-lg" href="#a">
                                                5 +
                                            </button>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-body border-top">
                                <ul className="list-style-none list-icons d-flex flex-item text-center">
                                    <li className="col"><a href="javascript:void(0)" className="text-muted" data-toggle="tooltip" title="Website"><i className="fa fa-globe font-20"></i></a></li>
                                    <li className="col"><a href="javascript:void(0)" className="text-muted" data-toggle="tooltip" title="twitter"><i className="fab fa-twitter font-20"></i></a></li>
                                    <li className="col"><a href="javascript:void(0)" className="text-muted" data-toggle="tooltip" title="Facebook"><i className="fab fa-facebook-square font-20"></i></a></li>
                                    <li className="col"><a href="javascript:void(0)" className="text-muted" data-toggle="tooltip" title="Youtube"><i className="fab fa-youtube font-20"></i></a></li>
                                    <li className="col"><a href="javascript:void(0)" className="text-muted" data-toggle="tooltip" title="Linkdin"><i className="fab fa-linkedin font-20"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-8">
                        <div className="card">
                            <div className="card-body bg-primary text-white mailbox-widget pb-0">
                                <h2 className="text-white pb-3">Your Mailbox</h2>
                                <ul className="nav nav-tabs custom-tab border-bottom-0 mt-4" id="myTab" role="tablist">
                                  <li className="nav-item">
                                    <a className="nav-link active" id="inbox-tab" data-toggle="tab" aria-controls="inbox" href="#inbox" role="tab" aria-selected="true">
                                        <span className="d-block d-md-none"><i className="ti-email"></i></span>
                                        <span className="d-none d-md-block"> INBOX</span>
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" id="sent-tab" data-toggle="tab" aria-controls="sent" href="#sent" role="tab" aria-selected="false">
                                        <span className="d-block d-md-none"><i className="ti-export"></i></span> 
                                        <span className="d-none d-md-block">SENT</span>
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" id="spam-tab" data-toggle="tab" aria-controls="spam" href="#spam" role="tab" aria-selected="false">
                                        <span className="d-block d-md-none"><i className="ti-panel"></i></span> 
                                        <span className="d-none d-md-block">SPAM</span>
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" id="delete-tab" data-toggle="tab" aria-controls="delete" href="#delete" role="tab" aria-selected="false">
                                        <span className="d-block d-md-none"><i className="ti-trash"></i></span> 
                                        <span className="d-none d-md-block">DELETED</span>
                                    </a>
                                  </li>
                                </ul>
                            </div>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="inbox" aria-labelledby="inbox-tab" role="tabpanel">
                                    <div>
                                        <div className="row p-4 no-gutters align-items-center">
                                            <div className="col-sm-12 col-md-6">
                                                <h3 className="font-light mb-0"><i className="ti-email mr-2"></i>350 Unread emails</h3>
                                            </div>
                                            <div className="col-sm-12 col-md-6">
                                                <ul className="list-inline dl mb-0 float-left float-md-right">
                                                    <li className="list-inline-item text-info mr-3">
                                                        <a href="#">
                                                            <button className="btn btn-circle btn-success text-white" href="#a">
                                                                <i className="ti-plus"></i>
                                                            </button>
                                                            <span className="ml-2 font-normal text-dark">Compose</span>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item text-danger">
                                                        <a href="#">
                                                            <button className="btn btn-circle btn-danger text-white" href="#a">
                                                                <i className="ti-trash"></i>
                                                            </button>
                                                            <span className="ml-2 font-normal text-dark">Delete</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* Mail list*/}
                                        <div className="table-responsive">
                                            <table className="table email-table no-wrap table-hover v-middle mb-0 font-14">
                                                <tbody>
                                                    {/* row */}
                                                    <tr>
                                                        {/* label */}
                                                        <td className="pl-3">
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="cst1"/>
                                                                <label className="custom-control-label" htmlFor="cst1">&nbsp;</label>
                                                            </div>
                                                        </td>
                                                        {/* star */}
                                                        <td><i className="fas fa-star text-warning"></i></td>
                                                        <td>
                                                            <span className="mb-0 text-muted">Hritik Roshan</span>
                                                        </td>
                                                        {/* Message */}
                                                        <td> 
                                                            <a className="link" href="javascript: void(0)">
                                                                <span className="badge badge-pill text-white font-medium badge-danger mr-2">Work</span> 
                                                                <span className="text-dark">Lorem ipsum perspiciatis-</span>
                                                            </a>
                                                        </td>
                                                        {/* Attachment */}
                                                        <td><i className="fa fa-paperclip text-muted"></i></td>
                                                        {/* Time */}
                                                        <td className="text-muted">  May 13  </td>
                                                    </tr>
                                                    {/* row */}
                                                    <tr>
                                                        {/* label */}
                                                        <td className="pl-3">
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="cst2"/>
                                                                <label className="custom-control-label" htmlFor="cst2">&nbsp;</label>
                                                            </div>
                                                        </td>
                                                        {/* star */}
                                                        <td><i className="far fa-star"></i></td>
                                                        {/* User */}
                                                        <td>
                                                            <span className="mb-0 text-muted">Genelia Roshan</span>
                                                        </td>
                                                        {/* Message */}
                                                        <td> 
                                                            <a className="link" href="javascript: void(0)">
                                                                <span className="badge badge-pill text-white font-medium badge-info mr-2">Business</span> 
                                                                <span className="text-dark">Inquiry about license for Admin </span> 
                                                            </a>
                                                        </td>
                                                        {/* Attachment */}
                                                        <td><i className="fa fa-paperclip text-muted"></i></td>
                                                        {/* Time */}
                                                        <td className="text-muted">  May 13  </td>
                                                    </tr>
                                                    {/* row */}
                                                    <tr>
                                                        {/* label */}
                                                        <td className="pl-3">
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="cst3"/>
                                                                <label className="custom-control-label" htmlFor="cst3">&nbsp;</label>
                                                            </div>
                                                        </td>
                                                        {/* star */}
                                                        <td><i className="fas fa-star text-warning"></i></td>
                                                        {/* User */}
                                                        <td className="user-name max-texts">
                                                            <span className="mb-0 text-muted font-light">Ritesh Deshmukh</span>
                                                        </td>
                                                        {/* Message */}
                                                        <td> 
                                                            <a className="link" href="javascript: void(0)">
                                                                <span className="badge badge-pill text-white font-medium badge-warning  mr-2">Friend</span> 
                                                                <span className="font-light text-dark">Bitbucket (commit Pushed) by Ritesh</span>
                                                            </a>
                                                        </td>
                                                        {/* Attachment */}
                                                        <td><i className="fa fa-paperclip text-muted"></i></td>
                                                        {/* Time */}
                                                        <td className="text-muted font-light">  May 13  </td>
                                                    </tr>
                                                    {/* row */}
                                                    <tr className="">
                                                        {/* label */}
                                                        <td className="pl-3">
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="cst4"/>
                                                                <label className="custom-control-label" htmlFor="cst4">&nbsp;</label>
                                                            </div>
                                                        </td>
                                                        {/* star */}
                                                        <td><i className="far fa-star"></i></td>
                                                        {/* User */}
                                                        <td>
                                                            <span className="mb-0 text-muted font-light">Akshay Kumar</span>
                                                        </td>
                                                        {/* Message */}
                                                        <td> 
                                                            <a className="link" href="javascript: void(0)">
                                                                <span className="badge badge-pill text-white font-medium badge-info mr-2">Work</span><span className="font-light text-dark">Perspiciatis unde omnis- iste Lorem ipsum</span>
                                                            </a>
                                                        </td>
                                                        {/* Attachment */}
                                                        <td><i className="fa fa-paperclip text-muted"></i></td>
                                                        {/* Time */}
                                                        <td className="text-muted font-light">  May 9  </td>
                                                    </tr>
                                                    {/* row */}
                                                    <tr className="">
                                                        {/* label */}
                                                        <td className="pl-3">
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="cst5"/>
                                                                <label className="custom-control-label" htmlFor="cst5">&nbsp;</label>
                                                            </div>
                                                        </td>
                                                        {/* star */}
                                                        <td><i className="far fa-star"></i></td>
                                                        {/* User */}
                                                        <td>
                                                            <span className="mb-0 text-muted font-light">John Abraham</span>
                                                        </td>
                                                        {/* Message */}
                                                        <td> 
                                                            <a className="link" href="javascript: void(0)">
                                                                <span className="badge badge-pill text-white font-medium badge-success mr-2">Work</span> <span className="font-light text-dark">Lorem ipsum perspiciatis- unde omnis</span>
                                                            </a>
                                                        </td>
                                                        {/* Attachment */}
                                                        <td><i className="fa fa-paperclip text-muted"></i></td>
                                                        {/* Time */}
                                                        <td className="text-muted font-light"> Mar 10 </td>
                                                    </tr>
                                                    {/* row */}
                                                    <tr className="">
                                                        {/* label */}
                                                        <td className="pl-3">
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="cst6"/>
                                                                <label className="custom-control-label" htmlFor="cst6">&nbsp;</label>
                                                            </div>
                                                        </td>
                                                        {/* star */}
                                                        <td><i className="fas fa-star text-warning"></i></td>
                                                        {/* User */}
                                                        <td>
                                                            <span className="mb-0 text-muted font-light">Akshay Kumar</span>
                                                        </td>
                                                        {/* Message */}
                                                        <td> 
                                                            <a className="link" href="javascript: void(0)">
                                                                <span className="badge badge-pill text-white font-medium badge-success mr-2">Work</span> <span className="font-light text-dark">Lorem ipsum perspiciatis - unde</span>
                                                            </a>
                                                        </td>
                                                        {/* Attachment */}
                                                        <td><i className="fa fa-paperclip text-muted"></i></td>
                                                        {/* Time */}
                                                        <td className="text-muted font-light"> Mar 09 </td>
                                                    </tr>
                                                   {/* row */}
                                                    <tr className="">
                                                        {/* label  */}
                                                        <td className="pl-3">
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="cst7"/>
                                                                <label className="custom-control-label" htmlFor="cst7">&nbsp;</label>
                                                            </div>
                                                        </td>
                                                        {/* star  */}
                                                        <td><i className="fas fa-star text-warning"></i></td>
                                                        {/* User  */}
                                                        <td>
                                                            <span className="mb-0 text-muted font-light">Hanna Gover</span>
                                                        </td>
                                                        {/* Message */}
                                                        <td> 
                                                            <a className="link" href="javascript: void(0)">
                                                                <span className="badge badge-pill text-white font-medium badge-danger mr-2">Work</span><span className="font-light text-dark"> Unde omnis Lorem ipsum perspiciatis</span>
                                                            </a>
                                                        </td>
                                                        {/* Attachment */}
                                                        <td><i className="fa fa-paperclip text-muted"></i></td>
                                                        {/* Time */}
                                                        <td className="text-muted font-light"> Mar 09 </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="sent" aria-labelledby="sent-tab" role="tabpanel">
                                    <div className="row p-3 text-dark">
                                        <div className="col-md-6">
                                            <h3 className="font-light">Lets check profile</h3>
                                            <h4 className="font-light">you can use it with the small code</h4>
                                        </div>
                                        <div className="col-md-6 text-right">
                                            <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="spam" aria-labelledby="spam-tab" role="tabpanel">
                                    <div className="row p-3 text-dark">
                                        <div className="col-md-6">
                                            <h3 className="font-light">Come on you have a lot message</h3>
                                            <h4 className="font-light">you can use it with the small code</h4>
                                        </div>
                                        <div className="col-md-6 text-right">
                                            <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="delete" aria-labelledby="delete-tab" role="tabpanel">
                                    <div className="row p-3 text-dark">
                                        <div className="col-md-6">
                                            <h3 className="font-light">Just do Settings</h3>
                                            <h4 className="font-light">you can use it with the small code</h4>
                                        </div>
                                        <div className="col-md-6 text-right">
                                            <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ============================================================== */}
                {/* Earnings & Feed Row  */}
                {/* ============================================================== */}
                <div className="row">
                    <div className="col-md-12 col-lg-6">
                        <div className="card">
                            <div className="p-4 border-bottom">
                                <div className="d-flex align-items-center">
                                    <div>
                                        <h4 className="mb-0 font-light">Total Earnings</h4>
                                        <h2 className="mb-0 font-medium">$580.50</h2>
                                    </div>
                                    <div className="ml-auto">
                                        <select className="form-control">
                                            <option>January 2018</option>
                                            <option>February 2018</option>
                                            <option>March 2018</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body bg-light">
                                <div className="d-flex align-items-center py-3">
                                    <img src="../dashboard_assets/assets/images/users/1.jpg" className="rounded-circle" width="60"/>
                                    <div className="ml-3">
                                        <h4 className="font-normal mb-0">Andrew Simon</h4>
                                        <span className="text-muted">10-11-2016</span>
                                    </div>
                                    <div className="ml-auto">
                                        <h2 className="mb-0 text-info font-medium">$46</h2>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center py-3">
                                    <img src="../dashboard_assets/assets/images/users/2.jpg" className="rounded-circle" width="60"/>
                                    <div className="ml-3">
                                        <h4 className="font-normal mb-0">John Deo</h4>
                                        <span className="text-muted">01-11-2018</span>
                                    </div>
                                    <div className="ml-auto">
                                        <h2 className="mb-0 text-info font-medium">$56</h2>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center py-3">
                                    <img src="../dashboard_assets/assets/images/users/3.jpg" className="rounded-circle" width="60"/>
                                    <div className="ml-3">
                                        <h4 className="font-normal mb-0">Shaina Nehwal</h4>
                                        <span className="text-muted">26-03-2018</span>
                                    </div>
                                    <div className="ml-auto">
                                        <h2 className="mb-0 text-info font-medium">$78</h2>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center py-3">
                                    <img src="../dashboard_assets/assets/images/users/1.jpg" className="rounded-circle" width="60"/>
                                    <div className="ml-3">
                                        <h4 className="font-normal mb-0">Emily Sion</h4>
                                        <span className="text-muted">14-04-2018</span>
                                    </div>
                                    <div className="ml-auto">
                                        <h2 className="mb-0 text-info font-medium">$12</h2>
                                    </div>
                                </div>
                                <div className="pt-3">
                                    <button type="button" className="btn btn-danger text-white btn-rounded btn-block">Withdrow Money</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-uppercase mb-1">Feeds</h5>
                                <div className="feed-widget">
                                    <ul className="feed-body list-style-none">
                                        <li className="feed-item d-flex align-items-center py-2">
                                            <button className="btn btn-info btn-circle">
                                                <i className="far fa-bell text-white"></i>
                                            </button>
                                            <span className="ml-3 font-light">You have 4 pending tasks.</span>
                                            <div className="ml-auto">
                                                <span className="text-muted font-light">Just Now</span>
                                            </div>
                                        </li>
                                        <li className="feed-item d-flex align-items-center py-2">
                                            <button className="btn btn-success btn-circle">
                                                <i className="ti-server text-white"></i>
                                            </button>
                                            <span className="ml-3 font-light">Server #1 overloaded.</span>
                                            <div className="ml-auto">
                                                <span className="text-muted font-light">2 Hours ago</span>
                                            </div>
                                        </li>
                                        <li className="feed-item d-flex align-items-center py-2">
                                            <button className="btn btn-warning btn-circle">
                                                <i className="ti-shopping-cart text-white"></i>
                                            </button>
                                            <span className="ml-3 font-light">New order received.</span>
                                            <div className="ml-auto">
                                                <span className="text-muted font-light">31 May</span>
                                            </div>
                                        </li>
                                        <li className="feed-item d-flex align-items-center py-2">
                                            <button className="btn btn-danger btn-circle">
                                                <i className="ti-user text-white"></i>
                                            </button>
                                            <span className="ml-3 font-light">New user registered.</span>
                                            <div className="ml-auto">
                                                <span className="text-muted font-light">30 May</span>
                                            </div>
                                        </li>
                                        <li className="feed-item d-flex align-items-center py-2">
                                            <button className="btn btn-inverse btn-circle">
                                                <i className="ti-user text-white"></i>
                                            </button>
                                            <span className="ml-3 font-light">New Version just arrived.</span>
                                            <div className="ml-auto">
                                                <span className="text-muted font-light">27 May</span>
                                            </div>
                                        </li>
                                        <li className="feed-item d-flex align-items-center py-2">
                                            <button className="btn btn-info btn-circle">
                                                <i className="far fa-bell text-white"></i>
                                            </button>
                                            <span className="ml-3 font-light">You have 4 pending tasks.</span>
                                            <div className="ml-auto">
                                                <span className="text-muted font-light">Just Now</span>
                                            </div>
                                        </li>
                                        <li className="feed-item d-flex align-items-center py-2">
                                            <button className="btn btn-danger btn-circle">
                                                <i className="ti-user text-white"></i>
                                            </button>
                                            <span className="ml-3 font-light">New user registered.</span>
                                            <div className="ml-auto">
                                                <span className="text-muted font-light">30 May</span>
                                            </div>
                                        </li>
                                        <li className="feed-item d-flex align-items-center py-2">
                                            <button className="btn btn-inverse btn-circle">
                                                <i className="far fa-bell text-white"></i>
                                            </button>
                                            <span className="ml-3 font-light">New Version just arrived.</span>
                                            <div className="ml-auto">
                                                <span className="text-muted font-light">27 May</span>
                                            </div>
                                        </li>
                                        <li className="feed-item d-flex align-items-center py-2">
                                            <button className="btn btn-primary btn-circle">
                                                <i className="far fa-bell text-white"></i>
                                            </button>
                                            <span className="ml-3 font-light">You have 4 pending tasks.</span>
                                            <div className="ml-auto">
                                                <span className="text-muted font-light">27 May</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ============================================================== */}
            {/* End Container fluid  */}
            {/* ============================================================== */}
            {/* ============================================================== */}
            {/* footer */}
            {/* ============================================================== */}
            <footer className="footer text-center">
                All Rights Reserved by Ample admin. Designed and Developed by
                <a href="https://wrappixel.com/">WrapPixel</a>.
            </footer>
            {/* ============================================================== */}
            {/* End footer */}
            {/* ============================================================== */}
        </div>
        {/* ============================================================== */}
        {/* End Page wrapper  */}
        {/* ============================================================== */}
    </div>
    {/* ============================================================== */}
    {/* End Wrapper */}
    {/* ============================================================== */}
    {/* ============================================================== */}
    {/* customizer Panel */}
    {/* ============================================================== */}
    <aside className="customizer">
        <a href="javascript:void(0)" className="service-panel-toggle">
            <i className="fa fa-spin fa-cog"></i>
        </a>
        <div className="customizer-body">
            <ul className="nav customizer-tab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home"
                        aria-selected="true">
                        <i className="mdi mdi-wrench font-20"></i>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#chat" role="tab" aria-controls="chat" aria-selected="false">
                        <i className="mdi mdi-message-reply font-20"></i>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact"
                        aria-selected="false">
                        <i className="mdi mdi-star-circle font-20"></i>
                    </a>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                {/* Tab 1 */}
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <div className="p-3 border-bottom">
                        {/* Sidebar */}
                        <h5 className="font-medium mb-2 mt-2">Layout Settings</h5>
                        
                        <div className="custom-control custom-checkbox mt-2">
                            <input type="checkbox" className="custom-control-input sidebartoggler" name="collapssidebar" id="collapssidebar"/>
                            <label className="custom-control-label" htmlFor="collapssidebar">Collapse Sidebar</label>
                        </div>
                        <div className="custom-control custom-checkbox mt-2">
                            <input type="checkbox" className="custom-control-input" name="sidebar-position" id="sidebar-position"/>
                            <label className="custom-control-label" htmlFor="sidebar-position">Fixed Sidebar</label>
                        </div>
                        <div className="custom-control custom-checkbox mt-2">
                            <input type="checkbox" className="custom-control-input" name="header-position" id="header-position"/>
                            <label className="custom-control-label" htmlFor="header-position">Fixed Header</label>
                        </div>
                        <div className="custom-control custom-checkbox mt-2">
                            <input type="checkbox" className="custom-control-input" name="boxed-layout" id="boxed-layout"/>>
                            <label className="custom-control-label" htmlFor="boxed-layout">Boxed Layout</label>
                        </div>
                    </div>
                    <div className="p-3 border-bottom">
                        {/* Logo BG */}
                        <h5 className="font-medium mb-2 mt-2">Logo Backgrounds</h5>
                        <ul className="theme-color">
                            <li className="theme-item">
                                <a href="javascript:void(0)" className="theme-link" data-logobg="skin1"></a>
                            </li>
                            <li className="theme-item">
                                <a href="javascript:void(0)" className="theme-link" data-logobg="skin2"></a>
                            </li>
                            <li className="theme-item">
                                <a href="javascript:void(0)" className="theme-link" data-logobg="skin3"></a>
                            </li>
                            <li className="theme-item">
                                <a href="javascript:void(0)" className="theme-link" data-logobg="skin4"></a>
                            </li>
                            <li className="theme-item">
                                <a href="javascript:void(0)" className="theme-link" data-logobg="skin5"></a>
                            </li>
                            <li className="theme-item">
                                <a href="javascript:void(0)" className="theme-link" data-logobg="skin6"></a>
                            </li>
                        </ul>
                        {/* Logo BG */}
                    </div>
                    <div className="p-3 border-bottom">
                        {/* Navbar BG */}
                        <h5 className="font-medium mb-2 mt-2">Navbar Backgrounds</h5>
                        <ul className="theme-color">
                            <li className="theme-item">
                                <a href="javascript:void(0)" className="theme-link" data-navbarbg="skin1"></a>
                            </li>
                            <li className="theme-item">
                                <a href="javascript:void(0)" className="theme-link" data-navbarbg="skin2"></a>
                            </li>
                            <li className="theme-item">
                                <a href="javascript:void(0)" className="theme-link" data-navbarbg="skin3"></a>
                            </li>
                            <li className="theme-item">
                                <a href="javascript:void(0)" className="theme-link" data-navbarbg="skin4"></a>
                            </li>
                            <li className="theme-item">
                                <a href="javascript:void(0)" className="theme-link" data-navbarbg="skin5"></a>
                            </li>
                            <li className="theme-item">
                                <a href="javascript:void(0)" className="theme-link" data-navbarbg="skin6"></a>
                            </li>
                        </ul>
                        {/* Navbar BG */}
                    </div>
                    <div className="p-3 border-bottom">
                        {/* Logo BG */}
                        <h5 className="font-medium mb-2 mt-2">Sidebar Backgrounds</h5>
                        <ul className="theme-color">
                            <li className="theme-item">
                                <a href="javascript:void(0)" className="theme-link" data-sidebarbg="skin1"></a>
                            </li>
                            <li className="theme-item">
                                <a href="javascript:void(0)" className="theme-link" data-sidebarbg="skin2"></a>
                            </li>
                            <li className="theme-item">
                                <a href="javascript:void(0)" className="theme-link" data-sidebarbg="skin3"></a>
                            </li>
                            <li className="theme-item">
                                <a href="javascript:void(0)" className="theme-link" data-sidebarbg="skin4"></a>
                            </li>
                            <li className="theme-item">
                                <a href="javascript:void(0)" className="theme-link" data-sidebarbg="skin5"></a>
                            </li>
                            <li className="theme-item">
                                <a href="javascript:void(0)" className="theme-link" data-sidebarbg="skin6"></a>
                            </li>
                        </ul>
                        {/* Logo BG */}
                    </div>
                </div>
                {/* End Tab 1 */}
                {/* Tab 2 */}
                <div className="tab-pane fade" id="chat" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <ul className="mailbox list-style-none mt-3">
                        <li>
                            <div className="message-center chat-scroll">
                                <a href="javascript:void(0)" className="message-item" id='chat_user_1' data-user-id='1'>
                                    <span className="user-img">
                                        <img src="../dashboard_assets/assets/images/users/1.jpg" alt="user" className="rounded-circle"/>
                                        <span className="profile-status online pull-right"></span>
                                    </span>
                                    <div className="mail-contnet">
                                        <h5 className="message-title">Pavan kumar</h5>
                                        <span className="mail-desc">Just see the my admin!</span>
                                        <span className="time">9:30 AM</span>
                                    </div>
                                </a>
                                {/* Message */}
                                <a href="javascript:void(0)" className="message-item" id='chat_user_2' data-user-id='2'>
                                    <span className="user-img">
                                        <img src="../dashboard_assets/assets/images/users/2.jpg" alt="user" className="rounded-circle"/>
                                        <span className="profile-status busy pull-right"></span>
                                    </span>
                                    <div className="mail-contnet">
                                        <h5 className="message-title">Sonu Nigam</h5>
                                        <span className="mail-desc">I've sung a song! See you at</span>
                                        <span className="time">9:10 AM</span>
                                    </div>
                                </a>
                                {/* Message */}
                                <a href="javascript:void(0)" className="message-item" id='chat_user_3' data-user-id='3'>
                                    <span className="user-img">
                                        <img src="../dashboard_assets/assets/images/users/3.jpg" alt="user" className="rounded-circle"/>
                                        <span className="profile-status away pull-right"></span>
                                    </span>
                                    <div className="mail-contnet">
                                        <h5 className="message-title">Arijit Sinh</h5>
                                        <span className="mail-desc">I am a singer!</span>
                                        <span className="time">9:08 AM</span>
                                    </div>
                                </a>
                                {/* Message */}
                                <a href="javascript:void(0)" className="message-item" id='chat_user_4' data-user-id='4'>
                                    <span className="user-img">
                                        <img src="../dashboard_assets/assets/images/users/4.jpg" alt="user" className="rounded-circle"/>
                                        <span className="profile-status offline pull-right"></span>
                                    </span>
                                    <div className="mail-contnet">
                                        <h5 className="message-title">Nirav Joshi</h5>
                                        <span className="mail-desc">Just see the my admin!</span>
                                        <span className="time">9:02 AM</span>
                                    </div>
                                </a>
                                {/* Message */}
                                {/* Message */}
                                <a href="javascript:void(0)" className="message-item" id='chat_user_5' data-user-id='5'>
                                    <span className="user-img">
                                        <img src="../dashboard_assets/assets/images/users/5.jpg" alt="user" className="rounded-circle"/>
                                        <span className="profile-status offline pull-right"></span>
                                    </span>
                                    <div className="mail-contnet">
                                        <h5 className="message-title">Sunil Joshi</h5>
                                        <span className="mail-desc">Just see the my admin!</span>
                                        <span className="time">9:02 AM</span>
                                    </div>
                                </a>
                                {/* Message */}
                                {/* Message */}
                                <a href="javascript:void(0)" className="message-item" id='chat_user_6' data-user-id='6'>
                                    <span className="user-img">
                                        <img src="../dashboard_assets/assets/images/users/6.jpg" alt="user" className="rounded-circle"/>
                                        <span className="profile-status offline pull-right"></span>
                                    </span>
                                    <div className="mail-contnet">
                                        <h5 className="message-title">Akshay Kumar</h5>
                                        <span className="mail-desc">Just see the my admin!</span>
                                        <span className="time">9:02 AM</span>
                                    </div>
                                </a>
                                {/* Message */}
                                {/* Message */}
                                <a href="javascript:void(0)" className="message-item" id='chat_user_7' data-user-id='7'>
                                    <span className="user-img">
                                        <img src="../dashboard_assets/assets/images/users/7.jpg" alt="user" className="rounded-circle"/>
                                        <span className="profile-status offline pull-right"></span>
                                    </span>
                                    <div className="mail-contnet">
                                        <h5 className="message-title">Pavan kumar</h5>
                                        <span className="mail-desc">Just see the my admin!</span>
                                        <span className="time">9:02 AM</span>
                                    </div>
                                </a>
                                {/* Message */}
                                {/* Message */}
                                <a href="javascript:void(0)" className="message-item" id='chat_user_8' data-user-id='8'>
                                    <span className="user-img">
                                        <img src="../dashboard_assets/assets/images/users/8.jpg" alt="user" className="rounded-circle"/>
                                        <span className="profile-status offline pull-right"></span>
                                    </span>
                                    <div className="mail-contnet">
                                        <h5 className="message-title">Varun Dhavan</h5>
                                        <span className="mail-desc">Just see the my admin!</span>
                                        <span className="time">9:02 AM</span>
                                    </div>
                                </a>
                                {/* Message */}
                            </div>
                        </li>
                    </ul>
                </div>
                {/* End Tab 2 */}
                {/* Tab 3 */}
                <div className="tab-pane fade p-3" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                    <h6 className="mt-3 mb-3">Activity Timeline</h6>
                    <div className="steamline">
                        <div className="sl-item">
                            <div className="sl-left bg-success">
                                <i className="ti-user"></i>
                            </div>
                            <div className="sl-right">
                                <div className="font-medium">Meeting today
                                    <span className="sl-date"> 5pm</span>
                                </div>
                                <div className="desc">you can write anything </div>
                            </div>
                        </div>
                        <div className="sl-item">
                            <div className="sl-left bg-info">
                                <i className="fas fa-image"></i>
                            </div>
                            <div className="sl-right">
                                <div className="font-medium">Send documents to Clark</div>
                                <div className="desc">Lorem Ipsum is simply </div>
                            </div>
                        </div>
                        <div className="sl-item">
                            <div className="sl-left">
                                <img className="rounded-circle" alt="user" src="../dashboard_assets/assets/images/users/2.jpg"/> </div>
                            <div className="sl-right">
                                <div className="font-medium">Go to the Doctor
                                    <span className="sl-date">5 minutes ago</span>
                                </div>
                                <div className="desc">Contrary to popular belief</div>
                            </div>
                        </div>
                        <div className="sl-item">
                            <div className="sl-left">
                                <img className="rounded-circle" alt="user" src="../dashboard_assets/assets/images/users/1.jpg"/> </div>
                            <div className="sl-right">
                                <div>
                                    <a href="#a">Stephen</a>
                                    <span className="sl-date">5 minutes ago</span>
                                </div>
                                <div className="desc">Approve meeting with tiger</div>
                            </div>
                        </div>
                        <div className="sl-item">
                            <div className="sl-left bg-primary">
                                <i className="ti-user"></i>
                            </div>
                            <div className="sl-right">
                                <div className="font-medium">Meeting today
                                    <span className="sl-date"> 5pm</span>
                                </div>
                                <div className="desc">you can write anything </div>
                            </div>
                        </div>
                        <div className="sl-item">
                            <div className="sl-left bg-info">
                                <i className="fas fa-image"></i>
                            </div>
                            <div className="sl-right">
                                <div className="font-medium">Send documents to Clark</div>
                                <div className="desc">Lorem Ipsum is simply </div>
                            </div>
                        </div>
                        <div className="sl-item">
                            <div className="sl-left">
                                <img className="rounded-circle" alt="user" src="../dashboard_assets/assets/images/users/4.jpg"/> </div>
                            <div className="sl-right">
                                <div className="font-medium">Go to the Doctor
                                    <span className="sl-date">5 minutes ago</span>
                                </div>
                                <div className="desc">Contrary to popular belief</div>
                            </div>
                        </div>
                        <div className="sl-item">
                            <div className="sl-left">
                                <img className="rounded-circle" alt="user" src="../dashboard_assets/assets/images/users/6.jpg"/> </div>
                            <div className="sl-right">
                                <div>
                                    <a href="#a">Stephen</a>
                                    <span className="sl-date">5 minutes ago</span>
                                </div>
                                <div className="desc">Approve meeting with tiger</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tab 3  */}
            </div>
        </div>
    </aside>
    <div className="chat-windows"></div>
        </React.Fragment> );
    }
}
 
export default Dash;