import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { userState } from "../Recoil/userState";
import { useRecoilState } from "recoil";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router-dom";

function AdminLogin({ ...props }) {


  const [user, setUser] = useRecoilState(userState);
  const [password, setPassword] = useState("");
  const history = useHistory();


  const check = (e) => {
    e.preventDefault();
    if(password.toLowerCase() === "admin123"){
        history.push('admin')
    }else{
        alert("Incorrect Password")
    }
  };
  return (
    <Modal
      animation="true"
      {...props}
      // size="lg"
      aria-labelledby="contained"
      centered
      className="p-5"
    >
      <Modal.Body className=" py-5">
        <h2 className="text-center mb-3 text-info">Admin Account</h2>
        <Form onSubmit={(e) => check(e)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              required
              placeholder="Enter Password"
              value={password}
              type="password"
              max-length={16}
              autocomplete="off"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Text className="text-muted">use correct password</Form.Text>
          </Form.Group>

          <button className="shadow-sm btn btn-info" type="submit">
            {" "}
            Confirm
          </button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default AdminLogin;
