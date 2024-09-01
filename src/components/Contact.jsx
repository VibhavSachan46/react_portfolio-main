import React from "react";

const Contact = () => {
  const contact_info = [
    { logo: "mail", text: "vibhavsachan743@gmail.com" },
    { logo: "logo-whatsapp", text: "+91 8858228783" },
    {
      logo: "location",
      text: "Lucknow, India",
    },
  ];
  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg hover:text-gray-700">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form
            className="flex flex-col flex-1 gap-5"
            action="https://getform.io/f/bcbb9138-9afc-4306-a8eb-3e0741f38f3f"
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-4 bg-transparent border-2 rounded-md text-white focus:outline-none tracking-widest"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-4 bg-transparent border-2 rounded-md text-white focus:outline-none tracking-widest"
            />
            <textarea
              name="message"
              placeholder="Enter your message ...."
              rows="7"
              className="p-4 bg-transparent border-2 rounded-md text-white focus:outline-none tracking-widest	"
            ></textarea>
            <button className="btn-primary w-fit bg-transparent transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110">Send Message</button>
          </form>
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center hover:bg-gray-700 transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110 hover:rounded-full"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm tracking-widest">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
