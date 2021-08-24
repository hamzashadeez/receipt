import React, { useState, useEffect } from "react";
import "./payment.css";
import Form from "react-bootstrap/Form";
import { userState } from "../Recoil/userState";
import { useRecoilState } from "recoil";
import { db, auth } from "../Configs/firebase";
import { v4 as uuidv4 } from "uuid";
import moment from 'moment'
import { useHistory } from "react-router-dom";

function Payment() {

  const history = useHistory();
  const [user, setUser] = useRecoilState(userState);
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");

  const logmeout = async () => {
    await auth.signOut().then(() => {
      setUser(null);
      alert("Signed Out");
    });
  };

  useEffect(()=>{
    if(user === null){
      history.push("/")
    }
  },[])


  const payit = async (e) => {
    e.preventDefault()
    let data = {
      name: user.name,
      email: user.email,
      amount: 500,
      cardNumber,
      cardName,
      date: moment().format("DD/MM/YYYY"),
    };
    await db
      .collection("PaymentList")
      .doc(uuidv4())
      .set(data)
      .then(() => {
        alert("successful");
        setCardNumber("")
        setCardName("")
      }).catch((e)=>{
        alert("Check Internet Connection")
      })
  };

  return (
    <div className="payment__main_div">
      <div className="payment__header shadow-sm">
        <h3>Make Payment</h3>
        <h6>{user?.name}</h6>
        <button className="btn btn-warning" onClick={()=>logmeout()}>Log Out</button>
      </div>

      <div className="container main___did">
        <div className="checkout shadow-sm">
          <div className="checkout__header">
            <h3>Use your credit card to complete the payment</h3>
          </div>
          <div className="checkout__body">
            <Form onSubmit={(e) => payit(e)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  required
                  placeholder="card number: eg. 1234 5678 9102 3456"
                  value={cardNumber}
                  type='number'
                  max-length= {16}
                  autocomplete="off"
                  onChange={(e) => setCardNumber(e.target.value)}
                />
                <Form.Text className="text-muted">
                  Just use a dummy card data
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                {/* <Form.Label></Form.Label> */}
                <Form.Control
                  required
                  placeholder="Account Holder's Name "
                  value={cardName}
                  autocomplete="off"
                  onChange={(e) => setCardName(e.target.value)}
                />
                <Form.Select className="mt-4">
                  <option>Pay For Departmental Fee</option>
                </Form.Select>
              </Form.Group>
              <button className="btn btn-primary">Pay N500</button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
