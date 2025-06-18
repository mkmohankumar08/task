import { useState } from "react";
import { toast } from "react-toastify";

export default function Contactus() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  
  const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const result = await response.json();
    console.log("Form successfully submitted:", result);
    toast.success("Form submitted successfully!");
    setForm({ name: '', email: '', phone: '' });

  } catch (error) {
    console.error("Error submitting form:", error);
  }
};



  return (
    <section className="bg-[#10127b] text-white py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Text Section */}
        <div className="md:w-1/2">
          <h2 data-aos='fade-right' className="text-3xl font-bold mb-4">Request A Call Back</h2>
          <p className="text-gray-300">
            Ever find yourself staring at your computer screen a good consulting slogan to come to mind? Oftentimes.
          </p>
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4 w-full"
        >
          <input
            type="text"
            name="name"
            placeholder="Name *"
            value={form.name}
            onChange={handleChange}
            className="p-3 rounded-md text-gray-800 focus:outline-none bg-white"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail *"
            value={form.email}
            onChange={handleChange}
            className="p-3 rounded-md text-gray-800 focus:outline-none bg-white"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone *"
            value={form.phone}
            onChange={handleChange}
            className="p-3 rounded-md text-gray-800 focus:outline-none md:col-span-1 bg-white"
            required
          />
          <button
            type="submit"
            className="bg-[#fba600] hover:bg-[#e99c00] text-white font-bold p-3 rounded-md transition-all duration-300 md:col-span-1"
          >
            SEND NOW
          </button>
        </form>
      </div>
    </section>
  );
}
