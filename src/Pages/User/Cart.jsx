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
import banner1 from '../../Images/user/bannerImg1.jpg'
import banner2 from '../../Images/user/bannerImg2.jpg'
import banner3 from '../../Images/user/bannerImg3.jpg'
import banner4 from '../../Images/user/bannerImg4.jpg'
import headerIcon from '../../Images/user/morrisons.png'
import RBCarousel from "react-bootstrap-carousel";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { TextInput } from '../../Components/Forms/Input'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import RoomIcon from '@material-ui/icons/Room';
import cart from '../../Images/user/shopping-cart.png'
import EmptyCart from '../../Images/user/emptycart.png'
import '../../styles/cart.scss'
class Cart extends PureComponent {
    constructor(props) {
        super(props)
        this.slider = React.createRef();
        this.state = {
            data: [],
            loading: true,
            bannerImgs: [],
            autoplay: true,
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
                        <div className="shopping-head">
                            <div className="shopping-lefticon">
                                <img className="headercartIcon" src={headerIcon} />
                            </div>
                            <div className="cart-righticon">
                                <img className="yourcartIcon" src={cart} />
                                <br />
                                <div><div class="yourcart">YOUR CART</div></div>
                            </div>
                        </div>
                    </div>
                    <div class="shopping">
                    <div class="shopping-main">
                      
                            <div class="shop-cart">
                                YOUR SHOPPING CART IS EMPTY
                            </div>
                            <img className="emptycart" src={EmptyCart} />
                            <div class="">
                                <Button type="submit" className="continue-btn" >
                                   <Link to="/scan" className="addcartlink"> Continue Shopping </Link>
                                    </Button>
                            </div>

                            </div>
                    </div>
                    <div class="">

                    </div>
                </>
            </Fragment >
        );
    }
}

export default withSnackbar(Cart)




