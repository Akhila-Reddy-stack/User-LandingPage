import React, { Fragment, PureComponent } from 'react'
import { Container, Button } from 'react-bootstrap';
import { Col, Row } from 'reactstrap';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { withSnackbar } from 'notistack';
import { Loader } from '../../Components/Loading/Loader';
import OnlineShopping from '../../Images/user/shopping.png'
import SideNav from '../../Components/NavBar/Sidebar'
import scan from '../../Images/user/barcode.png';

class UserHone extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            loading: true,
        }
    }

    componentDidMount = async () => {
        setTimeout(function () { this.setState({ loading: false }); }.bind(this), 600);
    }

    render() {
        const { data, loading } = this.state;
        return (
            <Fragment>
                <>
                    <Loader fullPage loading={loading} />
                    <div className="shopping-cart">
                        <div className="icon">
                            <SideNav />
                        </div>
                        <br />
                        <div className="search">
                            <div class="topnav">
                                <div class="search-container searchBar">
                                    <button type="submit"><i class="fa fa-search"></i></button>
                                    <input type="text" placeholder="Search" name="search" />
                                </div>
                            </div>
                            <div class="marker">
                                <i class="fa fa-map-marker" aria-hidden="true"></i>
                                <div class="place">Chennai</div>
                                <div class="place-center">DMart</div>
                            </div>
                        </div>
                    </div>
                    <div class="shoppingCart">
                        <img src={OnlineShopping} class="OnlineShopping" />
                        <div class="shoptxt">Welcome To  In Mobile CheckOut</div>
                    </div>
                    <div class="reader">
                        <div >
                            <img src={scan} class="scanimg" />
                        </div>
                        <div >
                            <Button type="submit" className="Scan-QR" >
                                <Link className="link" to="/scan" > Scan </Link>
                            </Button>
                        </div>
                    </div>
                </>
            </Fragment >
        );
    }
}

export default withSnackbar(UserHone)




