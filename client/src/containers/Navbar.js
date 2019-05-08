import React, {Component} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {logout} from "../store/actions/auth";
import Logo from "../images/logo-twitter.png";


class Navbar extends Component {
    logout = e => {
        e.preventDefault();
        this.props.logout();
    }
    render() {
        return(
            <nav className="navbar navbar-expand">
                <div className="container-fluid">
                <div className="navbar-header">
                    <Link to="/" className="navbar-brand">
                        <img src={Logo} alt="Twitter Home" />
                    </Link>
                </div>
                
                {this.props.currentUser.isAuthenticated ? (
                <ul className="nav navbar-nav navbar-right">
                 <li>
                    <Link to={`/users/${this.props.currentUser.user.id}/messages/new`}>New Message</Link>
                 </li>
                 <li>
                    <a onClick={this.logout}>Logout</a>
                 </li>
                </ul>
                )
                :
                (
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <Link to="/signup">SignUp</Link>
                    </li>
                    <li>
                        <Link to="/signin">SignIn</Link>
                    </li>
                </ul>
                )}
             </div>
            </nav>
        );
    }
}


function mapStateToProps(state) {
    return {
        currentUser: state.currentUser
    };
}

export default connect(mapStateToProps, { logout })(Navbar);