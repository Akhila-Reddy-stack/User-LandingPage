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
import '../../styles/addtobag.scss'
import CheckBox from '../../Components/Forms/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import NavBar from '../../Components/NavBar/Navbar'
import success from '../../Images/user/success.jpg'
import * as InoIcons from 'react-icons/io';
class AddtoBag extends PureComponent {
    constructor(props) {
        super(props)
        this.slider = React.createRef();
        this.state = {
            data: [],
            loading: true,
            bannerImgs: [],
            autoplay: true,
            checked: '',
            Rating:4
        }
    }

    componentDidMount = async () => {
        setTimeout(function () { this.setState({ loading: false }); }.bind(this), 600);

    }
    handleChange = async (e) => {
        console.log(e)
    }

    framerating = () => {
        if (this.state.Rating === null) {

        }
        else {
            return _.fill(Array(this.state.Rating)).map((v, i) => <InoIcons.IoIosStar className="stars noofstars"
                style={{ color: "black" }} />);
        }

    }

    render() {
        const { data, loading, checked } = this.state;
        return (
            <Fragment>
                <>
                    <Loader fullPage loading={loading} />
                    <div className="">
                        <div className="shopping-header">
                            <NavBar />

                        </div>
                      
                        <div class="addbag">
                          
                                <div class="itemName">  Bottle 0.8L Tritan Screw Top Hiking Flask :Blue
                                </div>
                                <div class="itemid">ID: 8627234
                                </div>
                                <Row className="item-price">
                                    <Col md={4} className="totalprice"> $75.00</Col>
                                    <Col md={4} className="strike"><s>$80.00</s></Col>
                                    <Col md={4} className="offer">(15% OFF)</Col>
                                </Row>
                                <div>
                                    <Row className="feedback">
                                        <Col md={6} className="itemrating"> 4/5 {this.framerating()}</Col>
                                        <Col md={6} className="review">POST A REVIEW <InoIcons.IoIosStar className="stars"
                                            style={{ color: "black" }} /></Col>

                                    </Row>

                                </div>
                                <div class="item-pdt"> <img src={success} class="success" />
                                    <span>
                                        Product Added to you Cart !
                                    </span>
                                </div>
                                <div class="added-to-bag"> <Link to="/addcart" class="cartlink">ADD TO BAG</Link>
                                </div>

                            

                        </div>
                    </div>
                </>
            </Fragment >
        );
    }
}

export default withSnackbar(AddtoBag)




