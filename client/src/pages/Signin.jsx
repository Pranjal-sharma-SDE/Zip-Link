import FormSignIn from "../components/Forms/FormSignIn";

const Signin = () => {
	return <div class='flex justify-center items-center h-[100vh] mt-8'>
	<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-52 w-full object-cover md:h-full md:w-48" src="https://res.cloudinary.com/dqhyudo4x/image/upload/v1706454923/717d076b-8688-40f9-93f0-350e63fbdc16_ppszd6.png" alt="Modern building architecture"/>
    </div>
    <div class="p-8">
      <FormSignIn/>
    </div>
  </div>
</div>
	</div>;
};

export default Signin;
