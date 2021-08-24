import React, {useState} from "react";
import "./home.css";
import about from "../assets/about.jpg";
import { useHistory } from "react-router-dom";
import UserModal from "../Modals/UserModal";
import AdminLogin from "../Modals/AdminLogin";

function Home() {
  let history = useHistory()
  const [show, setShow] = useState(false)
  const [showAdmin, setShowAdmin] = useState(false)

  const hideShow = () =>{
    setShow(false)
  }
  const hideShowAdmin = () =>{
    setShowAdmin(false)
  }
  return (
    <div>
      <UserModal show={show} onHide={()=> hideShow()} />
      <AdminLogin show={showAdmin} onHide={()=> hideShowAdmin()} />
      <div className="hero__section p-3 mb-3">
        <div className="header_hero d-flex align-items-center justify-content-between">
          {/* header */}
          <h3 className="logo">Reciepto</h3>
          <button className="btn btn-primary" onClick={()=> setShow(true)}>Register</button>
        </div>
        <div className="text-container">
          <h1>Simple tool to make Payment, and print reciept </h1>
          <p>
            Sign up and start making successful transactions, we provide better
            options users
          </p>
          <button className="btn btn-primary"  onClick={()=> setShow(true)}>Join Now</button>
        </div>
      </div>
      {/* end of hero */}

      {/* about section */}
      <div className="about p-3">
        <h3>About</h3>
        <div className="about__div">
          <img alt="img" src={about} />
          <p>
            This is actually not a normal company but a final year project which
            I have dedicated to my parents for their financial support and to my
            great supervisor
          </p>
        </div>
      </div>

      {/* End of About */}

      {/* Admin Section */}
      <div className="about admin mt-5 mb-5">
        <h3>Admin</h3>
        <div className="admin__div">
          <p>
            Sign into Administrators Account here, make sure to use the right
            password
          </p>
          <button className="btn btn-warning" onClick={()=> setShowAdmin(true)}>Admin Account</button>
        </div>
      </div>

      <footer className="py-5 px-3 bg-info"></footer>
    </div>
  );
}

export default Home;
