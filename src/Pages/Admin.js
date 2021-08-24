import React, { useState, useEffect } from "react";
import Box from "../Components/Box";
import "./admin.css";
import { db } from "../Configs/firebase";
import { useHistory } from "react-router-dom";
// import PersonIcon from '@material-ui/icons/Person';

function Admin() {
  const [list, setList] = useState([]);
  const history = useHistory();
  useEffect(() => {
    let unsubscribe;

    unsubscribe = db.collection("PaymentList").onSnapshot((snapshot) => {
      setList(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  });
  return (
    <div className="admin__main_div">
      <div className="admin__header shadow-sm">
        <h3>Admin Panel</h3>
        <button className="btn btn-warning" onClick={()=>history.push('/')}>Log Out</button>
      </div>
      <div className="container">
        <h4 className="text-muted">Successful Payments</h4>
        <div className="list__payments">
          {list.map(({ data, id }) => (
            <Box key={id} id={id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Admin;
