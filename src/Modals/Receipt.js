import React, { useState, useEffect, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import "./receipt.css";
import { useReactToPrint } from "react-to-print";

function Receipt({ data, ...props }) {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
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
        <div>
          <h3 className="text-dark my-5">Successful Payment</h3>
          <button className="btn btn-primary mb-5" onClick={handlePrint}>Print Reciept</button>
        </div>
        <div className="receipto" ref={componentRef}>
          <div className="receipto__header">
            <h2 className="mt-5">Reciepto</h2>
            <h5 className="pt-4 mb-3">
              National Association of Computer Science Department
            </h5>
          </div>
          <table className="my-5">
            <tr>
              <td>Tax ID</td>
              <td>24432</td>
            </tr>
            <tr>
              <td>Invoice</td>
              <td>SRN #545984</td>
            </tr>
            <tr>
              <td>Invoice Date</td>
              <td>{data?.date}</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>{data?.name}</td>
            </tr>
          </table>

          <h3 className="py-4 text-center">Amount: NGN 500</h3>

          <div className="paid">Paid</div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default Receipt;
