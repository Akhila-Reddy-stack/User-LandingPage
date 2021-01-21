import { PureComponent, Fragment } from 'react';
import * as ReactDOM from 'react-dom';
import { Row, Col, Container, Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import $ from 'jquery';
import ReactNotification from 'react-notifications-component';
import { Form } from 'informed';
import Modal from 'react-responsive-modal';
import * as React from 'react';
import _ from 'lodash';
import * as InoIcons from 'react-icons/io';
import '../../styles/nav.scss'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import RoomIcon from '@material-ui/icons/Room';
import SideNav from '../NavBar/Sidebar'
import SignUp from '../Auth/SignUp'

class NavBar extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            loggedIn: false,
            open: false
        };
    }

    setFormApi = (formApi) => {
        this.formApi = formApi
    }


    componentDidMount = async () => {
    }



    userSignIn = async () => {
        await this.setState({
            open: true
        })
    }



    render() {

        const { loggedIn ,open} = this.state;


        return (
            <Fragment>
                <ReactNotification ref={this.notificationDOMRef} />
                <div class="navBar">
                    <div class="">
                        <Row>
                            <div class="container-fluid p-0 sticky-top" id="navigation">
                                <div class="navigation">
                                    <div class="navbar navbar-expand-lg navbar-light bg-light">
                                        <button class="navbar-toggler" type="button" data-toggle="collapse"
                                            data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                                            aria-label="Toggle navigation">
                                            <span class="navbar-toggle-icon"></span>
                                        </button>

                                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                                            <ul class="navbar-nav mx-auto">
                                                <li class="nav-item">
                                                    <SideNav className="nav-tog" />
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" >
                                                        <RoomIcon className="marRight" /></a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="#">
                                                        <PersonIcon className="marRight" /></a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="#">
                                                        <HeadsetMicIcon className="marRight" /></a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="hotel">
                                                        <ShoppingCartIcon className="marRight" />
                                                        <div><div class="place">Chennai</div></div>
                                                        <br /></a>
                                                </li>

                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Row>

                    </div>
                </div>


                 
              



            </Fragment>



        )
    }

}
export default (NavBar)









