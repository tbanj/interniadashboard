import React, { Component } from 'react';
class Sidebar extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                {/* <div className="container-fluid">
                    <div className="row">
                        <div className="col-2 collapse d-md-flex bg-light pt-2 min-vh-100" id="sidebar">
                            
                        </div>
                        
                    </div>
                </div> */}
                <ul className="nav flex-column flex-nowrap">
                                <li className="nav-item"><a className="nav-link" href="#">Overview</a></li>
                                <li className="nav-item">
                                    <a className="nav-link collapsed" href="#submenu1" data-toggle="collapse" data-target="#submenu1">Reports</a>
                                    <div className="collapse" id="submenu1" aria-expanded="false">
                                        <ul className="flex-column pl-2 nav">
                                            <li className="nav-item"><a className="nav-link py-0" href="#">Orders</a></li>
                                            <li className="nav-item">
                                                <a className="nav-link collapsed py-1" href="#submenu1sub1" data-toggle="collapse" data-target="#submenu1sub1">Customers</a>
                                                <div className="collapse" id="submenu1sub1" aria-expanded="false">
                                                    <ul className="flex-column nav pl-4">
                                                        <li className="nav-item">
                                                            <a className="nav-link p-1" href="#">
                                                                <i className="fa fa-fw fa-clock-o"></i> Daily
                                                            </a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link p-1" href="#">
                                                                <i className="fa fa-fw fa-dashboard"></i> Dashboard
                                                            </a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link p-1" href="#">
                                                                <i className="fa fa-fw fa-bar-chart"></i> Charts
                                                            </a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link p-1" href="#">
                                                                <i className="fa fa-fw fa-compass"></i> Areas
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item"><a className="nav-link" href="#">Analytics</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Export</a></li>
                            </ul>
            </React.Fragment> );
    }
}
 
export default Sidebar;