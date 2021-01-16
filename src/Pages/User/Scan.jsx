import React, { Fragment, PureComponent } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { withSnackbar } from 'notistack';
import { Loader } from '../../Components/Loading/Loader';
import QrReader from 'react-qr-reader'
import { TextInput } from '../../Components/Forms/Input'
import Modal from 'react-responsive-modal';
import pin from '../../Images/user/pin.png';
import 'react-responsive-modal/styles.css';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
class Scan extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            loading: true,
            result: 'No result',
            open: false,
        }
    }

    componentDidMount = async () => {
        setTimeout(function () { this.setState({ loading: false }); }.bind(this), 600);
    }

    handleScan = data => {
        if (data) {
            this.setState({
                result: data
            })
        }
    }

    handleError = err => {
        console.error(err)
    }
    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };


    render() {
        const { data, loading, open } = this.state;

        return (
            <Fragment>
                <>
                    <div>
                        <div className="webresponsive" >
                            <Row className="secrow">
                                <QrReader className="wqr"
                                    delay={300}
                                    onError={this.handleError}
                                    onScan={this.handleScan}
                                    style={{ width: '100%' }}
                                />
                                <p class="blinking"> Scanned Result :{this.state.result}</p>
                            </Row>
                            <div class="txtcode">
                                SCAN A  BARCODE OR SIGNAGE QR CODE
                            </div>
                            <Row class="">
                                <span class="prblm">
                                    <Button type="submit" className="prblm-btn" onClick={this.onOpenModal}>
                                        Problem in Scanning? <ArrowForwardIcon />
                                    </Button>
                                </span>
                                <span class="changebtn">
                                    <Button type="submit" className="btn-primary changebtn-btn">
                                        Change
                                    </Button>
                                    <div class="location">Location is Wrong?</div>
                                </span>
                            </Row>
                        </div>
                        <div className="mobileresponsive" >
                            <Loader fullPage loading={loading} />
                            <div class="qr-reader">
                                <QrReader
                                    delay={300}
                                    onError={this.handleError}
                                    onScan={this.handleScan}
                                    style={{ width: '60%', margin: "0 auto" }}
                                />
                                <p class="blinking"> Scanned Result :{this.state.result}</p>
                                <div class="txtcode">
                                    SCAN A  BARCODE OR SIGNAGE QR CODE
                            </div>
                                <div class="info" id=""> Search for the 7-Digit item ID on your product tag
                                to continue with the purchase.
                          </div>
                                <div class="btns" >
                                    <Button type="submit" className="Cancel-btn">
                                        <Link className="cancellink" to="/user/home" > Cancel </Link>
                                    </Button>
                                    <Button type="submit" className="Proceed-btn"> Proceed </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <div className="marmodal">
                        <div className="codeimg">
                            <img src={pin} class="pin" />
                        </div>
                        <div className="codeimg">
                            <div class="info" id=""> Search for the 7-Digit item ID on your product tag
                            to continue with the purchase.
                          </div>
                            <div class="codeimg">
                                <TextInput field="id" label="" placeholder="Enter 6 Digit Id" className="digitpin"
                                    name="id" value="" />
                            </div>
                            <div>
                                <Row className="codeimg">
                                    <Row md={6} className="btn-btn">
                                        <Col md={6}>
                                            <Button type="submit" className="Cancel-btn" onClick={this.onCloseModal}>
                                                Cancel
                                        </Button>
                                        </Col>
                                        <Col md={6}>
                                            <Button type="submit" className="btn-primary Proceed-btn"> Proceed </Button>
                                        </Col>
                                    </Row>
                                </Row>
                            </div>
                        </div>
                    </div>
                </Modal>
            </Fragment >
        );
    }
}

export default withSnackbar(Scan)




