import React from "react"
import "../../styles/sidebar.scss"
import { Row } from 'reactstrap';
import user from '../../Images/user/userImg.jpg';
import scan from '../../Images/user/barcodebg.png';
import offer from '../../Images/user/offer.png';
import account from '../../Images/user/account.png';
import MenuIcon from '@material-ui/icons/Menu';
import headerIcon from '../../Images/user/morrisons.png'
import CancelIcon from '@material-ui/icons/Cancel';
import { Link } from 'react-router-dom';
class SideNav extends React.Component {
  state = {
    state: {
      showNav: false
    }
  }

  openNavClick = e => {
    e.preventDefault()
    this.openNav()

  }

  closeNavClick = e => {
    e.preventDefault()
    this.closeNav()
  }

  openNav = () => {
    this.setState({
      showNav: true
    })
    document.getElementById("overlay").style.display = "block";
    document.addEventListener("keydown", this.handleEscKey)
  }

  closeNav = () => {
    this.setState({
      showNav: false
    })
    document.getElementById("overlay").style.display = "none";
    document.removeEventListener("keydown", this.handleEscKey)
  }

  handleEscKey = e => {
    if (e.key === "Escape") {
      this.closeNav()
    }
  }

  render() {
    const { showNav } = this.state
    let navCoverStyle = { width: showNav ? "100%" : "0" }
    let sideNavStyle = { width: showNav ? "" : "0" }

    return (
      <React.Fragment >
        <div>
          <span onClick={this.openNavClick} class="open-nav">
            <MenuIcon className="menubar" />
            <img className="headerIcon" src={headerIcon} />
          </span>
        </div>
        <div
          onClick={this.navCoverClick}
          class="nav-cover"
          style={navCoverStyle}
        />
        <div name="side-nav" class="side-nav" style={sideNavStyle}>
          {/* <a href="#" onClick={this.closeNavClick} class="close-nav">
            &times;
          </a> */}
          <CancelIcon className="cancelicon close-nav " onClick={this.closeNavClick} />
          <div>
            <Row>
              <div class="card  card-header nav-item nav-icon" >
                <img src={user} class="navimg" /> <span class="nav-title user-head">Hello, User
               </span>
              </div>
            </Row>
            <Row>
              <div class="card card-list nav-item" >
                <img src={scan} class="navimg" /> <span class="nav-title" ><Link to="/scan" className="linkscan"> Scan</Link>
                  <i class="fa fa-arrow-circle-right"></i></span>
              </div>
            </Row>
            <Row>
              <div class="card  card-list nav-item">
                <img src={account} class="navimg" /> <span class="nav-title">Account  <i class="fa fa-arrow-circle-right"></i></span>
              </div>
            </Row>
            <Row>
              <div class="card  card-list nav-item">
                <img src={offer} class="navimg" /><span class="nav-title">Offer <i class="fa fa-arrow-circle-right"></i></span>
              </div>
            </Row>
            <div class="card sign-out" onClick={this.closeNavClick} >
              <span class="logout"> <i class="fa fa-sign-out" aria-hidden="true"> </i> <span class="nav-title">Logout </span></span>
            </div>
          </div>
        </div>
        <div id="overlay" onClick={this.closeNavClick}></div>
      </React.Fragment>
    )
  }
}

export default SideNav
