import { motion } from "framer-motion";
import {
  HiOutlineClock,
  HiOutlineCurrencyDollar,
  HiOutlinePhone,
  HiOutlineShieldCheck,
  HiOutlineTruck,
  HiOutlineMapPin,
} from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";

import videoMp4 from "../assets/hero-video.mp4";
import videoWebm from "../assets/hero-video.webm";
import poster from "../assets/hero-poster.webp";
import mobposter from "../assets/hero-poster-mobile.webp";

const Hero = () => {
  const scrollToMap = () => {
    const el = document.getElementById("map");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] w-full flex items-center pt-24 pb-12 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={mobposter}
          alt="Jaji Car Battery Replacement Abu Dhabi"
          className="w-full h-full object-cover md:hidden"
        />

        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={poster}
          className="hidden md:block w-full h-full object-cover"
        >
          <source src={videoWebm} type="video/webm" />
          <source src={videoMp4} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-neutral/35"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="w-full lg:w-[620px] bg-base-100/85 backdrop-blur-xl border border-base-200/50 p-8 sm:p-10 rounded-[2.5rem] shadow-2xl"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Status */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 mb-6"
          >
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
            </div>

            <span className="text-sm font-bold uppercase tracking-wider text-base-content/80">
              24/7 Emergency Battery Service
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-base-content leading-tight tracking-tight mb-6"
          >
            Car Battery
            <br />
            <span className="text-primary">
              Replacement in Abu Dhabi
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="text-lg text-base-content/80 leading-relaxed mb-8"
          >
            <strong>Jaji Car Battery Replacement & Auto Spare Parts Trading</strong>
            {" "}provides fast and reliable 24/7 mobile car battery replacement
            across Abu Dhabi. Whether your battery has died at home, work, the
            roadside, or a parking area, our experienced technicians arrive
            quickly with genuine batteries and professional installation.
          </motion.p>

          {/* Features */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 gap-4 mb-10"
          >
            {[
              {
                icon: <HiOutlineClock className="w-5 h-5 text-primary" />,
                text: "24/7 Service",
              },
              {
                icon: <HiOutlineShieldCheck className="w-5 h-5 text-primary" />,
                text: "Warranty Included",
              },
              {
                icon: <HiOutlineTruck className="w-5 h-5 text-primary" />,
                text: "Fast Mobile Service",
              },
              {
                icon: (
                  <HiOutlineCurrencyDollar className="w-5 h-5 text-primary" />
                ),
                text: "Competitive Prices",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-base-content font-medium"
              >
                <div className="p-2 bg-primary/10 rounded-lg">
                  {item.icon}
                </div>

                <span className="text-sm sm:text-base">{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 mb-6"
          >
            <a
              href="https://wa.me/971547676536"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success flex-1 h-auto py-3 px-4 rounded-2xl shadow-md hover:-translate-y-1 transition-transform flex items-center justify-center gap-3 border-none"
            >
              <FaWhatsapp className="w-7 h-7 text-success-content" />
              <div className="flex flex-col items-start text-left">
                <span className="text-base font-bold leading-none text-success-content">WhatsApp Us</span>
                <span className="text-sm font-semibold tracking-wider text-success-content/90 mt-1">+971 54 767 6536</span>
              </div>
            </a>

            <a
              href="tel:+971547676536"
              className="btn btn-primary flex-1 h-auto py-3 px-4 rounded-2xl shadow-md hover:-translate-y-1 transition-transform flex items-center justify-center gap-3 border-none"
            >
              <HiOutlinePhone className="w-7 h-7 text-primary-content" />
              <div className="flex flex-col items-start text-left">
                <span className="text-base font-bold leading-none text-primary-content">Call Now</span>
                <span className="text-sm font-semibold tracking-wider text-primary-content/90 mt-1">+971 54 767 6536</span>
              </div>
            </a>
          </motion.div>

          {/* Location */}
          <motion.button
            variants={fadeUp}
            onClick={scrollToMap}
            className="flex items-center justify-center gap-2 w-full py-3 text-base-content/70 hover:text-primary font-medium transition-colors group"
          >
            <HiOutlineMapPin className="w-5 h-5 text-primary group-hover:animate-bounce" />
            Visit our shop at Yas Mall, Abu Dhabi
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;