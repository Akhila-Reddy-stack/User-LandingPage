import React, { Fragment, PureComponent } from 'react'
import { Container, Button } from 'react-bootstrap';
import { Col, Row } from 'reactstrap';
import _ from 'lodash';
import { withSnackbar } from 'notistack';
import { Loader } from '../../Components/Loading/Loader';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import '../../styles/addcart.scss'
import DeleteIcon from '@material-ui/icons/Delete';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import NavBar from '../../Components/NavBar/Navbar'
import RadioButton from '../../Components/Forms/Radiobtn'
import Modal from 'react-responsive-modal';
import SignUp from '../../Components/Auth/SignUp'

class AddtoCart extends PureComponent {
    constructor(props) {
        super(props)
        this.slider = React.createRef();
        this.state = {
            data: [],
            loading: true,
            bannerImgs: [],
            autoplay: true,
            checked: '',
            Selected: 'C',
            item1: "1",
            item2: "1",
            item3: "1",
            open: false,
            islogged: false,
            size1:"No Size",
            size2:"No Size",
            size3:"No Size",
        }
    }

    componentDidMount = async () => {
        setTimeout(function () { this.setState({ loading: false }); }.bind(this), 600);

    }
    handleChange = async (e) => {
        console.log(e)
    }
    onChangeRadio = async (e) => {
        console.log("radiooooooo")
        this.setState({ Selected: e.target.value })
        this.setState({
            checked: e.target.checked
        });
        console.log(this.state)
    }
    plusbtn = async (value) => {
        console.log("plus",value,typeof(value))
        if(value == "1"){
            console.log("gggg")
            let incitems1 = parseInt(this.state.item1) + 1
            await this.setState({ item1: incitems1, size1:incitems1 })
        }
         else if(value =="2"){
                let incitems2 = parseInt(this.state.item2) + 1
                await this.setState({ item2: incitems2, size2:incitems2 })
            
        }
        else if(value == "3"){
            let incitems3 = parseInt(this.state.item3) + 1
            await this.setState({ item3: incitems3, size3:incitems3 })
        }
    }
    minusbtn = async (value) => {
        console.log("plus",value)
        if( this.state.item1 >"1" && value == "1"){
            let decitems1 = parseInt(this.state.item1) - 1
            await this.setState({ item1: decitems1, size1:decitems1 })
        }
         else if(this.state.item2 > 1 && value == "2"){
                let decitems2 = parseInt(this.state.item2) - 1
                await this.setState({ item2: decitems2, size2:decitems2 })
            
        }
        else if(this.state.item3 > 1 && value == "3"){
            let decitems3 = parseInt(this.state.item3) - 1
            await this.setState({ item3: decitems3, size3:decitems3 })
        }
    }
    
   
    onOpenModal = () => {
        this.setState({ open: true });
    };
    userSignIn = async () => {
        await this.setState({
            islogged: true
        })
    }

    onCloseModal = () => {
        this.setState({ open: false });
    };

  
 
 
    render() {
        const { data, loading, islogged, Selected, item1, open ,size1,item2,item3,size2,size3} = this.state;
        return (
            <Fragment>
                <>
                    <Loader fullPage loading={loading} />
                    

                    <div>
                        <div className="shopping-header">
                            <NavBar />
                        </div>
                        <br/> 

                        <div>
                            <Row>
                                <Col md={7} className="cart-details">

                   
                                    <div class="cartt"><i class="fas fa-arrow-circle-left"></i>
                                        <span class="youcart"> YOUR CART</span>
                                    </div>
                                  <div className='row mb-3 px-2'>
                                        <div className='col pt-3'>
                                            <RadioButton type="radio" onChange={(e) => this.onChangeRadio(e)}
                                                field="Cart" name="Cart" value="C"
                                                checked={Selected === "C" ? true : false}
                                                label="Cart" />
                                        </div>
                                        <div className='col pt-3'>
                                            <RadioButton type="radio"
                                                onChange={(e) => this.onChangeRadio(e)}
                                                field="Payment" name="Payment"
                                                value="P" label="Payment"
                                                checked={Selected === "P" ? true : false} />
                                        </div>
                                        <div className='col pt-3'>
                                            <RadioButton type="radio"
                                                onChange={(e) => this.onChangeRadio(e)}
                                                field="Confirm" name="Confirm"
                                                value="CM" label="Confirm"
                                                checked={Selected === "CM" ? true : false} />
                                        </div>
                                        <div className='col pt-3'>
                                            <RadioButton type="radio"
                                                onChange={(e) => this.onChangeRadio(e)}
                                                field="Checkout" name="Checkout"
                                                value="CO" label="Checkout"
                                                checked={Selected === "CO" ? true : false} />
                                        </div>
                                    </div> 
                                    <div className='row mb-3 px-2 confirm'>
                                        <i class="fas fa-info-circle"></i>
                                        <span class="pdt">
                                            Confirm your scanned Product before proceeding checkout</span>
                                    </div>

                                    <div className='row mb-3 px-2 item-details'>
                                        <div>
                                            <Row>
                                                <Col md={2} className="fileicon" >
                                                    <InsertDriveFileIcon className="drive" />
                                                </Col>
                                                <Col md={10} className="item">
                                                    <div className=''>
                                                        Bottle 0.8L Tritan Screw Top Hiking Flask:Blue
                                                </div>
                                                    <div className='rating'>
                                                        <Row className="rating-div">
                                                            <Col md={6} className="ratingstar">
                                                                4/5<i class="fas fa-star"></i>
                                                            </Col>
                                                            <Col md={6}>
                                                            Size: {size1}
                                                     </Col>
                                                        </Row>
                                                        <div className=''>
                                                            Qty
                                                    <Button className="minusbtn" onClick={()=>this.minusbtn(1)}>-</Button>
                                                            <span className="btn inc-dec-num" >{item1}</span>
                                                            <Button className="plusbtn" onClick={()=>this.plusbtn(1)}> +</Button>
                                                        </div>
                                                    </div>

                                                </Col>
                                            </Row>

                                        </div>
                                        <Row>
                                            <div className='row mb-3 px-2 status '>
                                                <span className="bg mar" ><DeleteIcon title="Delete" className="deleteicon" onClick={this.onOpenModal} /></span>
                                                <span className="bg mar" >Edit</span>
                                                <span className="price mar" >$75.00</span>
                                                <span className="mar" >$80.00</span>
                                                <span className="mar off" >(15% OFF)</span>
                                            </div>
                                        </Row>
                                    </div>
                                    <div className='row mb-3 px-2 item-details'>
                                        <div>
                                            <Row>
                                                <Col md={2} className="fileicon" >
                                                    <InsertDriveFileIcon className="drive" />
                                                </Col>
                                                <Col md={10} className="item">
                                                    <div className=''>
                                                        Bottle 0.8L Tritan Screw Top Hiking Flask:Pink
                                                </div>
                                                    <div className='rating'>
                                                        <Row className="rating-div">
                                                            <Col md={6} className="ratingstar">
                                                                3/5<i class="fas fa-star"></i>
                                                            </Col>
                                                            <Col md={6}>
                                                                Size: {size2}
                                                     </Col>
                                                        </Row>
                                                        <div className=''>
                                                            Qty
                                                    <Button className="minusbtn" onClick={()=>this.minusbtn(2)}>-</Button>
                                                            <span className="btn inc-dec-num" >{item2}</span>
                                                            <Button className="plusbtn" onClick={()=>this.plusbtn(2)}> +</Button>
                                                        </div>
                                                    </div>

                                                </Col>
                                            </Row>

                                        </div>
                                        <Row>
                                            <div className='row mb-3 px-2 status '>
                                                <span className="bg mar" ><DeleteIcon title="Delete" className="deleteicon" onClick={this.onOpenModal} /></span>
                                                <span className="bg mar" >Edit</span>
                                                <span className="price mar" >$100.00</span>
                                                <span className="mar" >$120.00</span>
                                                <span className="mar off" >(20% OFF)</span>
                                            </div>
                                        </Row>
                                    </div>
                                    <div className='row mb-3 px-2 item-details'>
                                        <div>
                                            <Row>
                                                <Col md={2} className="fileicon" >
                                                    <InsertDriveFileIcon className="drive" />
                                                </Col>
                                                <Col md={10} className="item">
                                                    <div className=''>
                                                        Bottle  2L Tritan Screw Top Hiking Flask:Green
                                                </div>
                                                    <div className='rating'>
                                                        <Row className="rating-div">
                                                            <Col md={6} className="ratingstar">
                                                                4/5<i class="fas fa-star"></i>
                                                            </Col>
                                                            <Col md={6}>
                                                            Size: {size3}
                                                     </Col>
                                                        </Row>
                                                        <div className=''>
                                                            Qty
                                                    <Button className="minusbtn" onClick={()=>this.minusbtn(3)} >-</Button>
                                                            <span className="btn inc-dec-num" >{item3}</span>
                                                            <Button className="plusbtn" onClick={()=>this.plusbtn(3)}> +</Button>
                                                        </div>
                                                    </div>

                                                </Col>
                                            </Row>

                                        </div>
                                        <Row>
                                            <div className='row mb-3 px-2 status '>
                                                <span className="bg mar" ><DeleteIcon title="Delete" className="deleteicon" onClick={this.onOpenModal} /></span>
                                                <span className="bg mar" >Edit</span>
                                                <span className="price mar" >$175.00</span>
                                                <span className="mar" >$180.00</span>
                                                <span className="mar off" >(35% OFF)</span>
                                            </div>
                                        </Row>
                                    </div>

                                </Col>
                                <Col md={5} className="summary">
                                    <div>
                                        <div class="vocher"> <i class="fas fa-percentage"></i>
                                 APPLY VOCHER CODE <i class="fas fa-arrow-circle-right nexticon"></i>
                                        </div>
                                        <div class="order">
                                            <div class="order-sum">Order Summary</div>
                                            <Row className="orderbt">
                                                <Col md={6}>
                                                    <div class="mb">Total Price(Inc Tax)</div>
                                                    <div class="mb">Discount</div>
                                                    <div class="mb">Total</div>
                                                </Col>
                                                <Col md={6} className="pricelist">
                                                    <div class="mb">$80.00</div>
                                                    <div class="mb">$75.00</div>
                                                    <div class="mb">$75.00</div>
                                                </Col>
                                            </Row>
                                        </div>
                                        <Row className="save">
                                            You Save $5.00 in this order
                                    </Row>
                                    </div>
                                    <div>
                                        <Row>
                                            <Col md={6} className="saved-details">
                                                <div class="pp"> $75.00 </div>
                                                <div class="view"> View Details</div>
                                            </Col>
                                            <Col md={6}>
                                                <Button className="checkout" onClick={this.userSignIn}> Proceed to Checkout
                                    <i class="fas fa-arrow-circle-right checkicon"></i></Button>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>

                        </div>
                    </div>
                    <Modal className="del-modal" open={open} onClose={this.onCloseModal} center className="del-modal">
                        <div className="deletemodal">
                            <div className="">
                                <div class="mod-item-name" id=""> Bottle 0.8L Tritan Screw Top Hiking Flask:Blue
                          </div>
                                <div class="remove">  Remove</div>
                                <div class="remove-item">
                                    Are You Sure You Want To Remove this Item From Your Cart ?
                            </div>
                                <div>
                                    <Row className="removebtns">
                                        <Row md={6} className="btn-btn">
                                            <Col md={6}>
                                                <Button type="submit" className="del-cancel-btn" onClick={this.onCloseModal}>
                                                    CANCEL
                                        </Button>
                                            </Col>
                                            <Col md={6}>
                                                <Button type="submit" className="btn-primary remove-btn"> REMOVE </Button>
                                            </Col>
                                        </Row>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </Modal>

                    {
                        islogged === true &&
                        <SignUp />
                    }
                      <div class="overlay"></div>
                </>

            </Fragment >
        );
    }
}

export default withSnackbar(AddtoCart)


// function openNav() {
//     document.getElementById("myNav").style.width = "100%";
//   }
  
//   function closeNav() {
//     document.getElementById("myNav").style.width = "0%";
//   }

