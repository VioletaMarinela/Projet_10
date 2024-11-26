import React, { useEffect, useState } from 'react';
import '../../Assets/css/Sign-in.css';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        // This runs once when the component mounts  
        const handleForgotPassword = () => {
            alert("Mot de passe oublié? Veuillez contacter l'administrateur du site.");
        };

        const forgotPasswordButton = document.querySelector("#mdpoublie");
        if (forgotPasswordButton) {
            forgotPasswordButton.addEventListener("click", handleForgotPassword);
        }

        // Cleanup the event listener on unmount  
        return () => {
            if (forgotPasswordButton) {
                forgotPasswordButton.removeEventListener("click", handleForgotPassword);
            }
        };
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await authenticateUser();
    };

    const authenticateUser = async () => {
        const formData = {
            email,
            password,
        };

        const resultpost = await postinfo(formData);

        if (resultpost.status === 200) {
            await stockTokeninlocalstorage(resultpost);
            setMessage("Connexion réussie");

            setTimeout(() => {
                window.location.href = "./user.html";
            }, 1000);
        } else {
            setMessage("Identifiants incorrects.");
        }
    };

    const postinfo = async (formData) => {
        return fetch("http://localhost:3001/api-docs", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response)
            .catch((error) => {
                console.error('Il y a eu une erreur:', error);
            });
    };

    const stockTokeninlocalstorage = async (resultpost) => {
        const token = await resultpost.json();
        window.localStorage.setItem("token", token.token);
    };

    return (
        <div>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="sign-in-button">Sign In</button>
                <p className="message">{message}</p>
                <div class="input-remember">
                    <input type="checkbox" id="remember-me" /><label for="remember-me">Remember me</label>
                </div>
            </form>
        </div>
    );
};

export default SignIn;