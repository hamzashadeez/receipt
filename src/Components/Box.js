import React from "react";
import "./box.css";
import person from '../assets/person.png'

function Box({data}) {
  return (
    <div className="box p-3 shadow-sm m-2">
      <div className="icon-container ">
          <img src={person} />
      </div>
      <div className="box_data mx-3">
        <h5>{data?.name}</h5>
        <p className='text-muted mb-1'>{data?.email}</p>
        {/* <div className='money_container'> */}
          <h3 className=" p-3">N500</h3>
        {/* </div> */}
      </div>
        <div className='date'>
          <p className='text-muted'>{data?.date}</p>
        </div>
    </div>
  );
}

export default Box;
