import "./App.css";
import React, { useEffect } from "react";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import Payment from "./Pages/Payment";
import firebase from 'firebase'
import { Switch, Route } from "react-router-dom";
import { useRecoilState } from "recoil";
import { db } from "./Configs/firebase";
import { userState } from "./Recoil/userState";

function Application() {
  const [user, setUser] = useRecoilState(userState);
  useEffect(() => {
    console.log(userState);
    firebase.auth().onAuthStateChanged((userData) => {
      if (userData) {
        db.collection("reciept")
          .doc(userData.displayName)
          .get()
          .then((user1) => {
            setUser(user1.data());
            console.log(user1.data());
          });
        console.log("Found a user: " + user + "  " + userData.email);
      } else {
        console.log("No user here");
        setUser(null);
      }
    });
  }, []);
  return (
    <div>
      {/* <Router> */}
      {user === null ? (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/admin" component={Admin} />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/" component={Payment} />
          <Route exact path="/admin" component={Admin} />
        </Switch>
      )}
      {/* </Router> */}
    </div>
  );
}

export default Application;
