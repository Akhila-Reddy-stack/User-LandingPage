import React, { Fragment, PureComponent } from 'react'
import { Container, Button } from 'react-bootstrap';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { withSnackbar } from 'notistack';
import { Loader } from '../../Components/Loading/Loader';
import QrReader from 'react-qr-reader'

class Scan extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            loading: true,
            result: 'No result'
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

    render() {
        const { data, loading } = this.state;
        return (
            <Fragment>
                <>
                    <div className="" >
                        <Loader fullPage loading={loading} />
                        <div class="qr-reader">
                            <QrReader
                                delay={300}
                                onError={this.handleError}
                                onScan={this.handleScan}
                                style={{ width: '100%' }}
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
                </>
            </Fragment >
        );
    }
}

export default withSnackbar(Scan)




