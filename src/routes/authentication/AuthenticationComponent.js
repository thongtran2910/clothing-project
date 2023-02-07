import React from "react";
import SignInFormComponent from "../../components/sign-in-form/SignInFormComponent";
import SignUpFormComponent from "../../components/sign-up-form/SignUpFormComponent";
import "./authentication.scss";

export default function AuthenticationComponent() {
  return (
    <div className="authentication-container">
      <SignInFormComponent />
      <SignUpFormComponent />
    </div>
  );
}
