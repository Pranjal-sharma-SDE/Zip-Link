import React from "react";
import FormCreateUrl from "../components/Forms/FormCreateUrl";

const Home = () => {
	return (
		<div className="relative h-screen">
  <div className="absolute top-0 left-0 w-full h-full">
    <img
      src="https://res.cloudinary.com/dqhyudo4x/image/upload/v1692001500/Portfolio/WhatsApp_Image_2023-08-14_at_13.54.49_ghqne7.jpg"
      alt=""
      className="object-cover w-full h-full"
    />
  </div>

  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
    <div className="bg-yellow-50 p-8 rounded-md shadow-lg">
      <h1 className="text-4xl font-bold mb-6">Welcome 🏡</h1>
      <FormCreateUrl />
    </div>
  </div>
</div>

		
	);
};

export default Home;
