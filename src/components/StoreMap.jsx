import { useState } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineMapPin,
  HiOutlineClock,
  HiOutlineMap,
  HiOutlineArrowTopRightOnSquare,
} from "react-icons/hi2";

const StoreMap = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const businessInfo = [
    {
      icon: <HiOutlineMapPin className="w-6 h-6" />,
      title: "Shop Location",
      content: "Yas Mall, Abu Dhabi, United Arab Emirates",
    },
    {
      icon: <HiOutlineClock className="w-6 h-6" />,
      title: "Availability",
      content:
        "24 Hours a Day\n7 Days a Week\nEmergency Battery Replacement",
    },
    {
      icon: <HiOutlineMap className="w-6 h-6" />,
      title: "Service Area",
      content:
        "Mobile car battery replacement across Abu Dhabi and nearby areas.",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
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

  // Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: "Jaji Car Battery Replacement & Auto Spare Parts Trading",
    image: "https://jajicarbatteryautospareparts.com/logo.png", 
    address: {
      "@type": "PostalAddress",
      streetAddress: "Yas Mall",
      addressLocality: "Abu Dhabi",
      addressCountry: "AE",
    },
    telephone: "+971547676536",
    url: "https://jajicarbatteryautospareparts.com", 
    openingHours: "Mo-Su 00:00-23:59",
    areaServed: "Abu Dhabi",
    sameAs: [
      "https://maps.google.com/?q=Yas+Mall+Abu+Dhabi", 
    ],
  };

  return (
    <section
      id="map"
      className="py-24 bg-base-200 relative overflow-hidden"
      aria-label="Jaji Car Battery Replacement Shop Location"
    >
      {/* Background */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeUp} className="mb-4 flex justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-100 border border-base-300 text-primary font-bold text-sm tracking-wide uppercase shadow-sm">
              <HiOutlineMapPin className="w-5 h-5" />
              Visit Our Shop
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-base-content mb-4 tracking-tight"
          >
            Find Us at
            <span className="text-primary"> Yas Mall</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg text-base-content/70"
          >
            Visit Jaji Car Battery Replacement & Auto Spare Parts Trading for
            genuine car batteries, professional installation, and expert
            battery testing. We also provide 24/7 mobile battery replacement
            across Abu Dhabi.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left */}
          <motion.div
            className="lg:col-span-5 flex flex-col h-full"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="bg-base-100 rounded-[2rem] border border-base-300 shadow-sm p-8 h-full flex flex-col relative overflow-hidden group">

              <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500"></div>

              <div className="flex-1 flex flex-col gap-8">
                {businessInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    className="flex items-start gap-5"
                  >
                    <div className="p-3.5 bg-base-200 text-primary rounded-xl shrink-0 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                      {info.icon}
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-base-content mb-1">
                        {info.title}
                      </h3>

                      <p className="text-base-content/70 leading-relaxed whitespace-pre-line">
                        {info.content}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={fadeUp}
                className="mt-10 pt-8 border-t border-base-200"
              >
                <a
                  href="https://maps.google.com/?q=Yas+Mall+Abu+Dhabi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full h-14 rounded-xl text-lg font-bold shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <HiOutlineArrowTopRightOnSquare className="w-6 h-6 mr-2" />
                  Open in Google Maps
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            className="lg:col-span-7 h-[400px] lg:h-auto min-h-[400px] relative rounded-[2rem] overflow-hidden border border-base-300 shadow-lg bg-base-300"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
          >
            {!isLoaded && (
              <div className="absolute inset-0 bg-base-200 animate-pulse flex items-center justify-center z-10">
                <div className="flex flex-col items-center gap-3 text-base-content/50">
                  <HiOutlineMapPin className="w-10 h-10 animate-bounce" />
                  <span className="font-medium uppercase tracking-widest text-sm">
                    Loading Map...
                  </span>
                </div>
              </div>
            )}

            <iframe
              src="https://www.google.com/maps?q=Yas+Mall+Abu+Dhabi&output=embed"
              className={`absolute inset-0 w-full h-full border-0 transition-opacity duration-700 ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Jaji Car Battery Replacement & Auto Spare Parts Trading"
              onLoad={() => setIsLoaded(true)}
            />
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

export default StoreMap;