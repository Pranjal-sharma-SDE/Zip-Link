import React, { useState, useEffect } from "react";
import apiHandler from "../../api/apiHandler";
import { useNavigate } from "react-router-dom";

const AllUrl = () => {
  const navigate = useNavigate();
  const [urls, setUrls] = useState(null);
  const [error, setError] = useState(null);
  const [copiedUrl, setCopiedUrl] = useState(null);

  useEffect(() => {
    apiHandler
      .getAllUrl()
      .then((data) => {
        setUrls(data.urls);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  const handleCopyToClipboard = (shortUrl) => {
    navigator.clipboard
      .writeText(shortUrl)
      .then(() => {
        setCopiedUrl(shortUrl);
        setTimeout(() => {
          setCopiedUrl(null);
        }, 1500); // Clear copied URL message after 1.5 seconds
      })
      .catch((error) => {
        console.error("Error copying to clipboard:", error);
      });
  };

  const handleNavigateToAnalytics = (shortUrl) => {
    navigate(`/${shortUrl}`);
  };

  return (
    <div className="container mx-auto p-6">
      <p className="text-lg font-bold mb-4">List of URLs</p>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Original URL</th>
              <th className="py-2 px-4 border-b">Short URL</th>
              <th className="py-2 px-4 border-b">No of Views</th>
            </tr>
          </thead>
          <tbody>
            {urls &&
              urls.map((url, index) => (
                <tr
                  key={url._id}
                  className="hover:bg-gray-100 cursor-pointer"
                 
                >
                  <td className="py-2 px-4 border-b">{index + 1}</td>
                  <td className="py-2 px-4 border-b">{url.originalUrl}</td>
                  <td className="py-2 px-4 border-b">
                    <span
                      title="Click to copy to clipboard"
                      onClick={() =>
                        handleCopyToClipboard(
                          `${import.meta.env.VITE_BACKEND_URL}/${url.shortUrl}`
                        )
                      }
                    >
                      {url.shortUrl}
                    </span>
                  </td>
                  <td className="py-2 px-4 border-b"  onClick={() =>
                    handleNavigateToAnalytics(`${url.shortUrl}`)
                  }>{url.visitedHistory.length}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {copiedUrl && (
        <div className=" bg-green-500 text-white p-2  rounded m-2">
          Copied to clipboard: {copiedUrl}
        </div>
      )}
    </div>
  );
};

export default AllUrl;
