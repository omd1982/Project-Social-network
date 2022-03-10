import React from "react";
import LoginForm from "./LoginForm";
import { login } from "../../Redux/auth-reducer";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
//import {captchaUrl} from "../../Redux/auth-reducer";

const LoginPage = (props) => {
  return (
    <div>
      {props.isAuth ? (
        <Redirect to={"/profile/" + props.id} />
      ) : (
        <LoginForm login={props.login} serverErrors={props.serverErrors} captchaUrl={props.captchaUrl}/>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
 
  return {
    isAuth: state.auth.isAuth,
    id: state.auth.id,
    serverErrors: state.auth.error,
    capthaUrl: state.auth.captchaUrl 
    
  };
};

export default connect(mapStateToProps, { login })(LoginPage);