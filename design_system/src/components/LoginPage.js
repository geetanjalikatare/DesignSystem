import react from 'react';
import './style.css';
import HomePage from './HomePage'
import { useHistory } from 'react-router';
import axios from 'axios'
import React, { useEffect, useState } from 'react';
function LoginPage() {

    var history = useHistory();
    if (sessionStorage.token) {
        history.push('/home')
    }

    function ValidateEmail(mail) {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.emailAddr.value)) {
            return (true)
        }
        alert("You have entered an invalid email address!")
        return (false)
    }
    function Login() {
        let email = document.getElementById("email").value;
        if (ValidateEmail(email)) {
            let password = document.getElementById("password").value;
            if (email == 'admin' && password == 'admin') {
                sessionStorage.setItem("token", email);
                history.push('/home')

            }
        }

    }
    return (
        <div className="loginContainer">
            <header>
                <div class="container-fluid p-3 ">
                    <a href="#">
                        <img class="px-2" src="https://infobeans-design-system.web.app/images/logo-infobeans-white.svg"
                            height="40px" />
                    </a>
                    <span class="headerText"> Intranet Portal</span>
                    <span class="menuIcon"><img src="menu1.png" /></span>
                </div>
            </header>
            <content>
                <div class="container mt-5">
                    <div class="row">
                        <div class="col">
                        </div>
                        <div class="col">
                            <div class="bodyContent p-4 pt-5 mb-5">
                                <div class="logo">
                                    <img src="https://infobeans-design-system.web.app/images/logo-infobeans-black.svg" />
                                </div>
                                <div class="mt-5">
                                    <label for="exampleInputEmail1" class="form-label">Email</label>
                                    <input type="text" class="form-control" id="email"
                                        placeholder="Your InfoBeans email address" />

                                </div>
                                <div class="mt-3">
                                    <label for="exampleInputEmail2" class="form-label">Password
                                <a class="forgotPassword" href="#">Forgot?</a></label>
                                    <input type="text" class="form-control" id="password" placeholder="Your Password" />

                                </div>
                                <div class="mt-3">
                                    <button type="submit" class="btn btn-danger" href="HomePage.js" onClick={Login}>Login to Intranet Portal</button>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                        </div>
                    </div>
                </div>
            </content>
            <footer class="" >
                &copy; Copyright 2020 InfoBeans. All Rights Reserved.
    </footer>
        </div>
    )
}
export default LoginPage;