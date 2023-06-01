import React from "react";
import "./payment-summary.css";
import "../Login/login.css";
import { Button, TextField } from "@mui/material";

const PaymentCheckoutPage = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "2.9em",
          width: "70%",
          margin: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div className="">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "6em",
                paddingBottom: "1em",
                fontFamily: "bold",
              }}
            >
              Not Login? &nbsp;Login First
            </div>
            <div
              className="input-fields"
              style={{
                paddingTop: "4em",
              }}
            >
              <form autoComplete="off">
                <TextField
                  id="standard-basic"
                  label="Email"
                  variant="standard"
                  InputProps={{
                    style: { width: "300px" },
                  }}
                />

                <TextField
                  id="standard-basic"
                  label="Password"
                  type="password"
                  variant="standard"
                  autoComplete="current-password"
                  InputProps={{
                    style: { width: "300px" },
                  }}
                />
                <br />
                <div className="forgot-password-1">
                  <div className="forgot-password">Forgot Password?</div>
                </div>
                <div className="signup-btn">
                  <button id="signup-button">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div>
          <div
            style={{
              height: "650px",
              width: "100%",
              paddingBottom: "4em",
            }}
          >
            <div class="container-receipt">
              <div class="receipt_box">
                <div class="head">
                  <div class="logo">
                    <h2
                      style={{
                        fontSize: "20px",
                        color: "#004961",
                      }}
                    >
                      DigiClark
                    </h2>
                  </div>
                  <div class="number">
                    <div class="date">2021/03/25</div>
                    <div class="ref">of-113</div>
                  </div>
                </div>
                <div class="body">
                  <div class="info">
                    <div class="welcome">
                      Hi, <span class="username">Username</span>
                    </div>
                    <p>You've purchased the free trial package</p>
                  </div>
                  <div class="cart">
                    <div class="title">Summary</div>
                    <div class="content">
                      <ul class="cart_list">
                        <li class="cart_item">
                          <span class="index">1</span>
                          <span class="name">Sub total</span>
                          <span class="price">$0.00</span>
                        </li>
                        <li class="cart_item">
                          <span class="index">2</span>
                          <span class="name">GST due</span>
                          <span class="price">$0.00</span>
                        </li>
                        <li class="cart_item">
                          <span class="index">3</span>
                          <span class="name">All Total</span>
                          <span class="price">$0.00</span>
                        </li>
                      </ul>
                      <div class="total">
                        <span>total</span>
                        <span class="total_price">$0.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="foot">
                  {/* <Button id=>Continue</Button> */}
                  <img
                    src="https://i.ibb.co/c8CQvBq/barcode.png"
                    alt="barcode"
                    class="barcode"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentCheckoutPage;
