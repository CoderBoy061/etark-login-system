import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import "../styles/navbar.css";

import { Avatar } from "@material-ui/core";
import axios from "axios";

function Navbar(props) {
  console.warn(props.data);
  const [userdata, setUserdata] = useState("");
  const [name, setName] = useState("");
  const checkUser = async () => {
    axios
      .get("/user/getData", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      })
      .then((response) => {
        setName(response.data.name);
        setUserdata(true);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    checkUser();
  }, []);
  return (
    <div className="navbar">
      <div className="nav_list">
        <NavLink style={{ textDecoration: "none", color: "black" }} to="/">
          <p className="link_para">Home</p>
        </NavLink>
        {userdata ? (
          <div className="successfull_login">
            <div className="Avatar">
              <Avatar src={name} alt={name} />
              <p className="useremail">{name}</p>
            </div>
            <NavLink
              style={{ textDecoration: "none", color: "black" }}
              to="/logout"
            >
              <p className="link_para">Logout</p>
            </NavLink>
          </div>
        ) : (
          <div className="signin_signup">
            <NavLink
              style={{ textDecoration: "none", color: "black" }}
              to="/signup"
            >
              <p className="link_para">Signup</p>
            </NavLink>

            <NavLink
              style={{ textDecoration: "none", color: "black" }}
              to="/signin"
            >
              <p className="link_para">Login</p>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
