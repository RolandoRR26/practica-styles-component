import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {LoginTitle , LoginForm , LoginButton , LoginInput} from "./styles";
//import "../../styles/login/styles-login.css"

const Login = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        username: '',
        password: '',
    });

    const [error, setError] = useState(null);

    const USERNAME = "usuario";
    const PASSWORD = "gatos";

    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, password } = form;

        if (username == USERNAME && password == PASSWORD) {
            navigate("/cats");
        } else {
            setError("El usuario o contraseña son incorrectos");
        };
    };

    const handleInputChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    };

    return (
        <section>
            <LoginTitle>L o g i n</LoginTitle>
            <LoginForm onSubmit={handleSubmit}>
                <div>
                    <label>Usuario:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>

                    <LoginInput
                        type="text"
                        name="username"
                        value={form.username}
                        onChange={(e) => handleInputChange(e)}
                    />

                </div>
                <div>
                    <label>Password : </label>

                    <LoginInput
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={(e) => handleInputChange(e)}
                    />

                </div>
                <LoginButton type="submit">Login</LoginButton>
            </LoginForm>
            <p>{error}</p>
        </section>
    )
}

export default Login;