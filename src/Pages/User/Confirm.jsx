import React, { Fragment, PureComponent } from "react";

import { Row, Col, Container, Button } from "react-bootstrap";
import _ from "lodash";
import { Form } from "informed";
import { Link } from "react-router-dom";
import { withSnackbar } from "notistack";
import * as InoIcons from "react-icons/io";
import ReactNotification from "react-notifications-component";

// import Barcode from "../../Images/user/barcode.webp";
// import UPI from "../../Images/user/upi.jpg";
// import gpay from "../../Images/user/gpay.jpg";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import EditIcon from "@material-ui/icons/Edit";
import '../../styles/confirm.scss'
import HorizontalLabelPositionBelowStepper from '../User/AddtoCart/Stepper'
class BookingSummary extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount = async () => {
    setTimeout(
      function () {
        this.setState({ loading: false });
      }.bind(this),
      600
    );
  };

  render() {
    const { data, loading } = this.state;
    console.log(this.state);

    return (
      <Fragment>
        <div className="confrim">
          <div className="summary-head">
            <span >
              {" "}
              <i class="fas fa-arrow-circle-left lefticon"></i>{" "}
              &nbsp;&nbsp;CONFIRM
            </span>
          </div>
          <div className="">
          <HorizontalLabelPositionBelowStepper/>
          </div>
          <div className="order-total-list">
            <div className="corder-head">
              <br />
              <h6 class="h5fw h6fw">Order Summary</h6>
              <div className="order-list-head">
                <div className="corder-list">
                  <div>Total Price (Inc Tax)</div>
                  <div>Delivery</div>
                </div>
                <div className="order-sumry">
                  <div>01012102</div>
                  <div>FREE</div>
                </div>
              </div>

            </div>

            <hr />
            <div className="ctotal-head">
              <div className="">
                <div>Total</div>
              </div>
              <div className="total-sumry">
                <span>$ 75.00</span>
              </div>
            </div>
          </div>

          <div className="selpay">

          <div className="">
            <span class="sel-pr"><b>$ 75.00</b></span>
            <br />
            <div class="viewcol">View Details</div>
            </div>
            <div className="selpayment">
              <span>Select Payment  <i class="fas fa-arrow-circle-right selciricon"></i></span>
           
            </div>

          </div>
        </div>
      </Fragment>
    );
  }
}

export default withSnackbar(BookingSummary);

// background-color: #fff3cd;
//     border-color: #ffeeba;

// background-color: #e2e3e5;
// border-color: #d6d8db;



{/* <div class="place-desc-grid mt-5 pt-3">
<div class="place-desc-item">
    <img src="../../assets/images/doddabetta-peak-ooty.jpg" alt="place-item">
</div>
<div class="place-desc-item">
    <img src="../../assets/images/emerald-lake-ooty.jpg" alt="place-item">
</div>
<div class="place-desc-item">
    <img src="../../assets/images/forest-1.jpg" alt="place-item">
</div>
<div class="place-desc-item">
    <img src="../../assets/images/hillStation.jpg" alt="place-item">
</div>
<div class="place-desc-item">
    <img src="../../assets/images/Illikkal-kallu.jpg" alt="place-item">
</div>
<div class="place-desc-item">
    <img src="../../assets/images/kakkathuruth.jpg" alt="place-item">
</div>
<div class="place-desc-item">
    <img src="../../assets/images/Kodaikanal2.jpg" alt="place-item">
</div>
<div class="place-desc-item">
    <img src="../../assets/images/kollukkumallay.jpg" alt="place-item">
</div>
<div class="place-desc-item">
    <img src="../../assets/images/Kumarakom1.jpg" alt="place-item">
</div>
<div class="place-desc-item">
    <img src="../../assets/images/mudumalai-national-park-ooty.jpg" alt="place-item">
</div>
<div class="place-desc-item">
    <img src="../../assets/images/munreo-island.jpg" alt="place-item">
</div>
<div class="place-desc-item">
    <img src="../../assets/images/muttukadu3.jpg" alt="place-item">
</div>
<div class="place-desc-item">
    <img src="../../assets/images/Nature4.jpg" alt="place-item">
</div>
<div class="place-desc-item">
    <img src="../../assets/images/Nature6.jpg" alt="place-item">
</div>
<div class="place-desc-item">
    <img src="../../assets/images/ooty.jpg" alt="place-item">
</div>
<div class="place-desc-item">
    <img src="../../assets/images/ooty1.jpg" alt="place-item">
</div>
<div class="place-desc-item">
    <img src="../../assets/images/ootyBoatHouse.jpg" alt="place-item">
</div>
<div class="place-desc-item">
    <img src="../../assets/images/Periyar.jpg" alt="place-item">
</div>
<div class="place-desc-item">
    <img src="../../assets/images/Pookod-Lake.jpg" alt="place-item">
</div>
<div class="place-desc-item">
    <img src="../../assets/images/Nature6.jpg" alt="place-item">
</div>
</div> */}