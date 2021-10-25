import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Triangle from "../images/bg-triangle.svg";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Play = ({ setMyChoice }) => {
  const history = useHistory();
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, userInfo } = userDetails;
  const setChoice = (e) => {
    setMyChoice(e.target.dataset.id);
  };

  useEffect(() => {
    if (!userInfo?.name) {
      history.push("/signin");
    }
  }, [history, userInfo]);

  return (
    <div className="play">
      <img src={Triangle} alt="" className="triangle" />
      <div className="items">
        <Link to="/game">
          <div data-id="paper" onClick={setChoice} className="icon icon--paper"></div>
        </Link>
        <Link to="/game">
          <div data-id="scissors" onClick={setChoice} className="icon icon--scissors"></div>
        </Link>
        <Link to="/game">
          <div data-id="rock" onClick={setChoice} className="icon icon--rock"></div>
        </Link>
      </div>
    </div>
  );
};

export default Play;
