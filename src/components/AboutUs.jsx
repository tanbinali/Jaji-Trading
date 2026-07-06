import { motion } from "framer-motion";
import {
  HiOutlineBolt,
  HiOutlineTruck,
  HiOutlineShieldCheck,
  HiOutlineUsers,
  HiOutlineClock,
  HiOutlineMapPin,
  HiOutlineCheckCircle,
} from "react-icons/hi2";

import Banner500 from "../assets/Banner-500.webp";
import Banner768 from "../assets/Banner-768.webp";
import Banner1024 from "../assets/Banner-1024.webp";

// Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Jaji Car Battery Replacement & Auto Spare Parts Trading",
  serviceType: "24/7 On-Site Car Battery Replacement",
  image: "https://yourdomain.com/banner.png", // Replace with your actual image
  address: {
    "@type": "PostalAddress",
    addressLocality: "Yas Mall",
    addressCountry: "AE",
  },
  openingHours: "Mo-Su 00:00-23:59",
  telephone: "+971547676536",
  url: "https://yourdomain.com", // Replace with your actual website
};

const AboutUs = () => {
  // Animation Variants
  const fadeUp = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 20 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const imageReveal = {
    hidden: { opacity: 0, scale: 0.95, x: -30 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { type: "spring", stiffness: 60, damping: 20 },
    },
  };

  return (
    <section id="about" className="py-24 bg-base-100 overflow-hidden relative">
      {/* Background Decorative Ambient */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-secondary/5 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left: Image & Floating Badges (Takes up 5 cols) */}
          <motion.div
            variants={imageReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 relative order-2 lg:order-1"
          >
            {/* Main Image Container */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl z-10 border border-base-200 bg-base-200 group">
              <img
                srcSet={`
                  ${Banner500} 500w,
                  ${Banner768} 768w,
                  ${Banner1024} 1024w
                `}
                sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 1024px"
                src={Banner1024}
                alt="Jaji Car Battery Replacement roadside service in Abu Dhabi"
                loading="lazy"
                className="w-full h-auto object-cover aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Floating Experience Card */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -right-4 sm:-right-8 z-20 bg-base-100/90 backdrop-blur-xl p-6 rounded-3xl shadow-xl border border-base-200 max-w-[200px]"
            >
              <div className="flex items-center gap-4 mb-2">
                <span className="text-5xl font-black text-primary leading-none">10<span className="text-3xl">+</span></span>
              </div>
              <p className="text-sm font-bold text-base-content/80 uppercase tracking-widest">
                Years of <br /> Excellence
              </p>
            </motion.div>

            {/* Accent Pattern Block */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[radial-gradient(var(--color-primary)_1px,transparent_1px)] [background-size:12px_12px] opacity-20 z-0 rounded-full"></div>
          </motion.div>

          {/* Right: Typography & Stats (Takes up 7 cols) */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 lg:pl-10 order-1 lg:order-2"
          >
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-wide uppercase">
                <HiOutlineCheckCircle className="w-5 h-5" />
                Who We Are
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-base-content leading-[1.1] tracking-tight mb-8"
            >
              Abu Dhabi's Most Reliable <br />
              <span className="text-primary relative inline-block mt-2">
                Battery Replacement
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-lg text-base-content/70 mb-6 leading-relaxed"
            >
              At <strong className="text-base-content">Jaji Car Battery Replacement</strong>, we specialize in professional on-site car battery solutions. Whether your battery has suddenly died or your vehicle is struggling to start, our dispatch team brings the garage directly to you.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-lg text-base-content/70 mb-10 leading-relaxed"
            >
              We supply genuine, warranty-backed batteries from trusted brands. Operating 24/7, we are committed to rapid response times, transparent pricing, and professional roadside assistance whenever and wherever you need it.
            </motion.p>

            {/* Sleek Stats Grid */}
            <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-5 mb-8">
              <div className="flex items-center gap-4 p-5 bg-base-200 rounded-2xl border border-base-300">
                <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center text-success">
                  <HiOutlineUsers className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-base-content">Trusted</h4>
                  <p className="text-sm font-medium text-base-content/60">Expert Service</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 bg-base-200 rounded-2xl border border-base-300">
                <div className="w-12 h-12 rounded-xl bg-info/10 flex items-center justify-center text-info">
                  <HiOutlineClock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-base-content">24/7</h4>
                  <p className="text-sm font-medium text-base-content/60">Emergency Support</p>
                </div>
              </div>
            </motion.div>

            {/* Location Banner */}
            <motion.div variants={fadeUp} className="flex items-center gap-4 p-4 bg-primary/5 border border-primary/20 rounded-2xl">
              <div className="p-3 bg-base-100 rounded-xl shadow-sm text-primary">
                <HiOutlineMapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-primary uppercase tracking-wider mb-0.5">Coverage Area</p>
                <p className="text-base-content/80 font-medium">Yas Mall & Surrounding Abu Dhabi, UAE</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Services Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-32 pt-16 border-t border-base-200"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <h3 className="text-3xl md:text-4xl font-bold text-base-content mb-4 tracking-tight">
                Professional Services
              </h3>
              <p className="text-base-content/60 text-lg">
                Comprehensive roadside support delivered wherever you are.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <HiOutlineBolt className="w-7 h-7" />,
                title: "Battery Replacement",
                description: "Fast on-site battery replacement for all major car makes and models.",
              },
              {
                icon: <HiOutlineTruck className="w-7 h-7" />,
                title: "24/7 Roadside Assist",
                description: "Rapid emergency support whenever your vehicle won't start.",
              },
              {
                icon: <HiOutlineShieldCheck className="w-7 h-7" />,
                title: "Battery Testing",
                description: "Professional charging system diagnosis before replacing.",
              },
              {
                icon: <HiOutlineUsers className="w-7 h-7" />,
                title: "Genuine Parts",
                description: "Premium batteries backed by manufacturer warranty.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="bg-base-100 p-8 rounded-[2rem] border border-base-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-base-200 text-base-content rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-content group-hover:scale-110 transition-all duration-300">
                  {item.icon}
                </div>
                <h4 className="font-bold text-xl text-base-content mb-3 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-base-content/70 leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </section>
  );
};

export default AboutUs;