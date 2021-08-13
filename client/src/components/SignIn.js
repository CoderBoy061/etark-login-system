import React, { useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { NavLink } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import CircularProgress from "@material-ui/core/CircularProgress";
import "../styles/login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({ showSnackbar: false, message: "" });
  const [dialog,setDialoag] = useState(false);
  const submitLogin = async (e) => {
    e.preventDefault();
    if (email === "") {
      setAlert({
        showSnackbar: true,
        message: "Please enter your email",
      });
    } else if (password === "") {
      setAlert({
        showSnackbar: true,
        message: "Please enter your password",
      });
    }else{
      setDialoag(true);
      const res = await fetch("/user/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        credentials: "include",
        body:JSON.stringify({
          email,password
        })
      });
      const data = await res.json();
      console.log(data);
      if (res.status === 422 || !data){
        setDialoag(false);
        window.alert("Failed to login");
      }else{
        setDialoag(false);
        window.alert("User Login successfully");
        window.location.replace("/");
      }
    }
  };

  //dialouge fclosing function
  const closeDialog = () => {
    setDialoag(false);
  };
  const closeSnack = () =>{
    setAlert({
      showSnackbar:false
    })
  }
  return (
    <div className="login_form">
      <form onSubmit={submitLogin} className="signin_form">
        <input
          type="email"
          placeholder="Enter your Email"
          name={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login_input"
        />
        <input
          type="password"
          placeholder="Enter your Password"
          name={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login_input"
        />
        <input type="submit" value="Login" className="login_btn"  onClick={(e)=>submitLogin(e)}/>
      </form>
      <NavLink to="/signup" style={{ textDecoration: "none" }}>
        <p className="not_account">Don't Have an account</p>
      </NavLink>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={alert.showSnackbar}
        message={alert.message}
        autoHideDuration={3000}
        onClose={closeSnack}
      />
      <Dialog open={dialog} onClose={closeDialog}>
        <DialogContent color="black">
          <DialogContentText id="alert-dialog-description">
            <CircularProgress color="secondary" />
            <p style={{ fontFamily: "cursive", color: "blue" }}>Wait..</p>
          </DialogContentText>
        </DialogContent>
      </Dialog>
  
    </div>
  );
}

export default Login;
