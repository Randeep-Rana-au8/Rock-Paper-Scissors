import React, { useState } from "react";
import Modal from "./Modal";
const Footer = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <>
      <footer className="footer">
        <div class="attribution">
          Made with <span style={{ color: "red" }}>❤</span> by{" "}
          <a
            target="_blank"
            style={{ color: "red" }}
            href="https://www.linkedin.com/in/randeep-rana-dev/"
          >
            Randeep Rana
          </a>
          .
        </div>
        <button className="rules" onClick={toggle}>
          Rules
        </button>
      </footer>
      {modal ? <Modal toggle={toggle} /> : null}
    </>
  );
};

export default Footer;
