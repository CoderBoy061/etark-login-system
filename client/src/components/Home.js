import React, { useEffect, useState } from "react";
// import { NavLink, useHistory } from "react-router-dom";
import "../styles/home.css";
import axios from "axios";
// import { Button } from "@material-ui/core";

function Home() {
  // const history = useHistory();
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);
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
        // console.log(response.data);
        setName(response.data.name);
        setShow(true);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    checkUser();
  });
  return (
    <div className="home">
      <div className="home_section">
        <h1 className="home_haeding">Welcome to MERN-REGISTRATION</h1>
        <h2 className="user_name_heading">
          Welcome : <span className="username">{name}</span>
        </h2>
        <p className="home_para">
          {show ? (
            <div className="sucessFull_login">
              <p className="home_para">Happy to see you back</p>
            </div>
          ) : (
            "Please Login or Signup to Search Movies"
          )}
        </p>
      </div>
    </div>
  );
}

export default Home;
