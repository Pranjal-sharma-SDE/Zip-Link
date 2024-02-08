import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import apiHandler from "../../api/apiHandler";
import useAuth from "../../auth/useAuth";
import { useNavigate } from "react-router-dom";

const FormCreateUrl = () => {
    const [{ originalUrl }, handleChange, reset] = useForm({
        originalUrl: "",
    });
    const [error, setError] = useState(null);
    const [copiedUrl, setCopiedUrl] = useState(null);
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if the user is logged in
        if (!isLoggedIn) {
            // If not logged in, redirect to the sign-in page
            navigate("/signin");
            return;
        }

        // Regular expression for URL validation
        const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

        // Check if the entered URL is valid
        if (!urlRegex.test(originalUrl)) {
            setError({ message: "Please enter a valid URL." });
            return;
        }

        apiHandler
            .shortenUrl({ originalUrl })
            .then((res) => {
                const shortUrl = `${import.meta.env.VITE_BACKEND_URL}/${res.shortUrl}`;

                navigator.clipboard.writeText(shortUrl)
                    .then(() => {
                        console.log("URL copied to clipboard");
                        setCopiedUrl(shortUrl);
                        reset();
                        // Handle navigation or display success message as needed
                        navigate("/");
                        setTimeout(() => {
                            setCopiedUrl(null);
                        }, 1500); // Clear copied URL message after 1.5 seconds
                    })
                    .catch((clipboardError) => {
                        console.error("Failed to copy to clipboard", clipboardError);
                    });
            })
            .catch((e) => {
                setError(e.response.data);
            });
    };

    return (
        <>
            {error && <h3 className="error">{error.message}</h3>}
            {copiedUrl && (
                <div className=" bg-green-500 text-white p-2 rounded m-2">
                    Copied to clipboard: {copiedUrl}
                </div>
            )}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
                <h2 className="text-2xl font-bold mb-4">Shorten URL</h2>
                <label htmlFor="originalUrl" className="block text-sm font-medium text-gray-600 mb-2">
                    Original URL
                </label>
                <div className="flex items-center border border-gray-300 rounded-md">
                    <input
                        type="url"
                        id="originalUrl"
                        name="originalUrl"
                        onChange={handleChange}
                        value={originalUrl}
                        required
                        className="w-full py-2 px-4 rounded-md focus:outline-none focus:border-blue-500"
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                    >
                        Shorten
                    </button>
                </div>
            </form>
        </>
    );
};

export default FormCreateUrl;
