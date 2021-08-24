import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import google from "../assets/google.png";
import "./userModal.css";
import { auth, provider, db } from "../Configs/firebase";
import { userState } from "../Recoil/userState";
import { useRecoilState } from "recoil";
import { useHistory } from "react-router-dom";

function UserModal({ ...props }) {
  const history = useHistory();
  const [user, setUser] = useRecoilState(userState);

  const login = async () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        var user = result.user;
        const userData = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        };
        // Save user data to firebase
        db.collection("reciept")
          .doc(userData.name)
          .set(userData, { merge: true })
          .then(() => {
            // user data to state management
            setUser(userData);
            // history.push("/");
            console.log("Success");
          });
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
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
      <Modal.Body className="userModal">
        <img src={google} />

        <button className="shadow-sm" onClick={()=>login()} > Sign In with Google</button>
      </Modal.Body>
    </Modal>
  );
}

export default UserModal;
