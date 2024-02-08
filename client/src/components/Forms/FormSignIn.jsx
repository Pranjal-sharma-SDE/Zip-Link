import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import apiHandler from "../../api/apiHandler";
import useAuth from "../../auth/useAuth";
import { useNavigate, Link } from "react-router-dom";

const FormSignIn = () => {
    const [{ email, password }, handleChange] = useForm({
        email: "",
        password: "",
    });
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { storeToken, authenticateUser } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        apiHandler
            .signin({ email, password })
            .then((res) => {
                console.log(res);
                storeToken(res.authToken);
                authenticateUser();
                navigate("/");
            })
            .catch((e) => {
                setError(e.response.data);
            });
    };

    return (
        <>
            {error && <h3 className="error">{error.message}</h3>}
            <div className="flex justify-center items-center ">
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
                    <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            onChange={handleChange}
                            value={email}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            onChange={handleChange}
                            value={password}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Sign In
                        </button>
                        <Link to="/signup" className="text-blue-500 hover:underline">
                          <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                          Sign Up
                          </button>
                          </Link>
                    </div>
                </form>
            </div>
        </>
    );
};

export default FormSignIn;
