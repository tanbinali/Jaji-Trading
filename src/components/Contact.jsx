import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import {
  HiOutlinePhone,
  HiOutlineArrowRight,
  HiOutlineMapPin,
  HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";

// Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  name: "Jaji Car Battery Replacement & Auto Spare Parts Trading",
  serviceType: "24/7 Mobile Car Battery Replacement",
  areaServed: "Abu Dhabi, UAE",
  telephone: "+971547676536",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+971547676536",
    contactType: "customer service",
    availableLanguage: ["English", "Arabic"],
  },
  url: "https://jajicarbatteryautospareparts.com",
};

const Contact = () => {
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section
      id="contact"
      className="py-24 bg-base-100 relative overflow-hidden"
      aria-label="Contact Jaji Car Battery Replacement in Abu Dhabi"
    >
      {/* Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-base-200/50 -skew-x-12 translate-x-20 pointer-events-none -z-10"></div>

      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[100px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left */}
          <motion.div
            className="lg:col-span-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeUp} className="mb-6 inline-flex">
              <div className="flex items-center gap-2 px-4 py-2 bg-error/10 text-error border border-error/20 rounded-full font-bold text-sm tracking-wide">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-error opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-error"></span>
                </span>

                Available 24/7
              </div>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-base-content leading-[1.1] tracking-tight mb-6"
            >
              Dead Battery?
              <br />

              <span className="text-primary mt-2 inline-block">
                We'll Be There Fast.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-lg text-base-content/70 leading-relaxed mb-8"
            >
              Contact <strong>Jaji Car Battery Replacement & Auto Spare Parts Trading</strong> for fast, reliable 24/7 mobile battery replacement anywhere in Abu Dhabi. Call us immediately or send your live location on WhatsApp, and our technicians will come directly to your vehicle.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex items-center gap-4 p-4 bg-base-200 rounded-2xl border border-base-300 w-fit"
            >
              <div className="p-3 bg-base-100 rounded-xl text-primary shadow-sm">
                <HiOutlineMapPin className="w-6 h-6" />
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-base-content mb-1">
                  Shop Location
                </p>

                <p className="font-medium text-base-content/70">
                  Yas Mall, Abu Dhabi
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            className="lg:col-span-7 flex flex-col gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Call */}
            <motion.a
              variants={fadeUp}
              href="tel:+971547676536"
              className="group relative bg-base-100 flex flex-col sm:flex-row items-start sm:items-center p-6 sm:p-8 rounded-[2rem] border border-base-300 shadow-sm hover:shadow-xl hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-4 sm:mb-0 group-hover:bg-primary group-hover:text-primary-content transition-colors duration-300">
                <HiOutlinePhone className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>

              <div className="sm:ml-6 flex-1">
                <h3 className="text-2xl font-bold text-base-content mb-1 group-hover:text-primary transition-colors">
                  Call Now
                </h3>

                <p className="text-base-content/70 text-lg mb-2">
                  Speak directly with our battery replacement specialists for immediate assistance.
                </p>

                <span className="inline-block font-mono font-bold text-lg text-primary bg-primary/5 px-3 py-1 rounded-lg border border-primary/10">
                  +971 54 767 6536
                </span>
              </div>

              <div className="absolute sm:static top-8 right-8 w-12 h-12 rounded-full bg-base-200 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-content transition-colors">
                <HiOutlineArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              variants={fadeUp}
              href="https://wa.me/971547676536"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-base-100 flex flex-col sm:flex-row items-start sm:items-center p-6 sm:p-8 rounded-[2rem] border border-base-300 shadow-sm hover:shadow-xl hover:border-success/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-success/10 text-success rounded-2xl flex items-center justify-center mb-4 sm:mb-0 group-hover:bg-success group-hover:text-success-content transition-colors duration-300">
                <FaWhatsapp className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>

              <div className="sm:ml-6 flex-1">
                <h3 className="text-2xl font-bold text-base-content mb-1 group-hover:text-success transition-colors">
                  WhatsApp Us
                </h3>

                <p className="text-base-content/70 text-lg mb-2">
                  Send your live location or ask about battery prices, availability, and emergency replacement.
                </p>

                <div className="flex items-center gap-2 text-success font-semibold">
                  <HiOutlineChatBubbleLeftRight className="w-5 h-5" />
                  <span>Start Chat at +971 54 767 6536</span>
                </div>
              </div>

              <div className="absolute sm:static top-8 right-8 w-12 h-12 rounded-full bg-base-200 flex items-center justify-center group-hover:bg-success group-hover:text-success-content transition-colors">
                <HiOutlineArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          </motion.div>

        </div>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </section>
  );
};

export default Contact;