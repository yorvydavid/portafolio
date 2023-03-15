import React, { useRef } from "react";
// emailJS
import emailjs from "@emailjs/browser";
//motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Contact = () => {
  /***********/
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7avypza",
        "template_uvfi18n",
        form.current,
        "7QQOWcOeuWnQyjNp-"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  /***********/
  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Ponerse en contacto
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Trabajemos <br /> Juntos
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <input
              name="user_name"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Tu nombre"
            />
            <input
              name="user_email"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Tu email"
            />
            <textarea
              name="message"
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Tu mensaje"
            ></textarea>
            <button className="btn btn-lg">Enviar</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
