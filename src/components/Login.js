import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import logo from "../logo.png";
function Login() {
    const singIn = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    };
    return (
        <LoginContainer>
            <LoginInnerContent>
                <img src={logo} alt="Slack" />
                <h4>Anisur Rahman</h4>
                <p>anisur2805.com</p>
                <Button onClick={singIn}>Sing with Google</Button>
            </LoginInnerContent>
        </LoginContainer>
    );
}

export default Login;

const LoginContainer = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: #f8f8f8;
`;
const LoginInnerContent = styled.div`
    padding: 40px 100px;
    text-align: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

    > img {
        object-fit: contain;
        height: 100px;
        margin-bottom: 40px;
    }

    > button {
        margin-top: 20px;
        text-transform: inherit !important;
        background-color: #0a8d48 !important;
        color: white;
    }
`;
