import axios from "axios";
import React, { useEffect } from "react";
import "../styles/logout.css";

function Logout() {
  const checkUser = () => {
    axios
      .get("/user/logout", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      })
      .then((res) => {
        window.location.replace("/signin");

        if (!res.status === 200) {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    checkUser();
  });
  return (
    <div className="logout">
      <h3>Logout successfully. Please login or signup fro upload post</h3>
    </div>
  );
}

export default Logout;
