import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";

const Header = ({ score }) => {
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, userInfo } = userDetails;
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="header">
      <div className="text">
        <span>Rock</span>
        <span>Paper</span>
        <span>Scissors</span>
      </div>
      <div className="score-box">
        <span>{userInfo?.name}'s </span>
        <span>Score</span>
        <div className="score-box__score">{score}</div>
        <div>
          <button>
            <button onClick={handleLogout} className="logout_btn">
              Logout
            </button>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
