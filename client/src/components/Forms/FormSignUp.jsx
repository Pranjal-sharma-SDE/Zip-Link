import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import { useNavigate, Link } from "react-router-dom";
import apiHandler from "../../api/apiHandler";

const FormSignUp = () => {
    const [values, handleChange] = useForm({ name: "", email: "", password: "" });
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        apiHandler
            .signup(values)
            .then(() => {
                navigate("/signin");
            })
            .catch((error) => {
                setError(error.response.data);
            });
    };

    return (
        <>
            {error && <h3 className="error">{error.message}</h3>}
            <div className="flex justify-center items-center ">
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
                    <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                        <input
                            onChange={handleChange}
                            value={values.name}
                            type="text"
                            id="name"
                            name="name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input
                            onChange={handleChange}
                            value={values.email}
                            type="email"
                            id="email"
                            name="email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input
                            onChange={handleChange}
                            value={values.password}
                            type="password"
                            id="password"
                            name="password"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Sign Up
                        </button>
                        <Link to="/signin" className="text-blue-500 hover:underline">
                          <button className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                          Sign In
                          </button>
                          </Link>
                    </div>
                </form>
            </div>
        </>
    );
};

export default FormSignUp;
