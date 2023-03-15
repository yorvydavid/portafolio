import React from "react";
// icon
import { BsArrowBarRight, BsArrowUpRight } from "react-icons/bs";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

// services data
const services = [
  {
    name: "UI/UX Design",
    description:
      "Diseño de interfaces que generen una experiencia intuitica con el usuario final",
    link: "Leer más",
  },
  {
    name: "Aplicaciones WEb",
    description: "Implementación de sistemas en entorno web y mobile",
    link: "Leer más",
  },
  {
    name: "Comercio Electrónico",
    description: "Desarrollo de tiendas online para todas las necesidades",
    link: "Leer más",
  },
  {
    name: "Landing pages",
    description:
      "Diseños de landiing page para crear una experiencia única para un cliente y un productoo concreto",
    link: "Leer más",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & images */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">Lo que hago</h2>
            <h3 className="h3 max-w-[455px] mb-6">
              Soy un desarrollador Freenlace
            </h3>
            <button className="btn btn-sm">Ver mi trabajo</button>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* services list */}
            <div>
              {services.map((service, index) => {
                // destructure service
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
