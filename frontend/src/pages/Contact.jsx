import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { assets } from '../assets/assets';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    event.target.reset();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e752adea-b557-436b-9bed-e8254e05a4f1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult(data.message);
    }
  };

  return (
    <div className="w-full py-20 lg:px-32" id="Contact">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact <span className="underline underline-offset-4 decoration-1 font-light text-primary">With Us</span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim re quo nostrum!
      </p>

      <div className="flex flex-col w-full md:flex-row items-center gap-10 ">
        
        <div className="md:w-1/2">
          <img src={assets.header_sidelogo} alt="Contact Us" className="w-full h-auto rounded-lg" />
        </div>

        
        <div className="md:w-1/2 text-gray-600 pt-8">
          <form onSubmit={onSubmit}>
            <div className="flex flex-wrap gap-4">
              <div className="w-full md:w-1/2 text-left">
                <label>Your Name</label>
                <input
                  className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
                  type="text"
                  name="Name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 text-left">
                <label>Your Email</label>
                <input
                  className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
                  type="email"
                  name="Email"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>

            <div className="my-6 text-left">
              <label>Message</label>
              <textarea
                className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
                name="Message"
                placeholder="Message"
                required
              ></textarea>
            </div>

            <button className="bg-primary text-white py-2 px-12 mb-10 rounded hover:bg-black hover:text-white transition-all duration-500">
              {result ? result : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
