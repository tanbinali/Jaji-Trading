import { motion } from "framer-motion";
import {
  HiOutlineBolt,
  HiOutlineTruck,
  HiOutlinePhoneArrowUpRight,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
} from "react-icons/hi2";

const Cards = () => {
  const cardData = [
    {
      title: "Genuine Car Batteries",
      description:
        "We supply premium-quality batteries from trusted brands, backed by manufacturer warranty for dependable performance and long battery life.",
      icon: <HiOutlineBolt className="w-8 h-8" />,
      themeColor: "text-primary",
      themeBg: "bg-primary/10",
      themeBorder: "group-hover:border-primary/30",
    },
    {
      title: "Mobile Battery Replacement",
      description:
        "Our technicians come directly to your location anywhere in Abu Dhabi with the right battery and replace it on-site, saving you time and hassle.",
      icon: <HiOutlineTruck className="w-8 h-8" />,
      themeColor: "text-secondary",
      themeBg: "bg-secondary/10",
      themeBorder: "group-hover:border-secondary/30",
    },
    {
      title: "24/7 Emergency Assistance",
      description:
        "Whether you're at home, work, a parking lot, or stranded on the roadside, we're available day and night for fast emergency battery replacement.",
      icon: <HiOutlinePhoneArrowUpRight className="w-8 h-8" />,
      themeColor: "text-accent",
      themeBg: "bg-accent/10",
      themeBorder: "group-hover:border-accent/30",
    },
    {
      title: "Professional Battery Testing",
      description:
        "Before replacing your battery, our experts perform battery and charging system diagnostics to ensure you receive the right solution for your vehicle.",
      icon: <HiOutlineShieldCheck className="w-8 h-8" />,
      themeColor: "text-info",
      themeBg: "bg-info/10",
      themeBorder: "group-hover:border-info/30",
    },
  ];

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

  return (
    <section
      id="choose-us"
      className="py-24 bg-base-200 relative overflow-hidden"
      aria-label="Why choose Jaji Car Battery Replacement in Abu Dhabi"
    >
      {/* Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left */}
          <motion.div
            className="lg:col-span-5 lg:sticky lg:top-32"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeUp}
              className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-base-100 border border-base-300 text-sm font-semibold text-base-content/80 shadow-sm"
            >
              <HiOutlineSparkles className="w-4 h-4 text-primary" />
              <span>Why Choose Us</span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-base-content leading-[1.1] tracking-tight mb-6"
            >
              Your Trusted
              <span className="text-primary">
                {" "}Battery Experts
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-lg text-base-content/70 leading-relaxed mb-8"
            >
              At <strong>Jaji Car Battery Replacement & Auto Spare Parts Trading</strong>,
              we focus on delivering fast, reliable, and affordable car battery
              replacement services throughout Abu Dhabi. From emergency roadside
              assistance to professional battery installation, our team is
              committed to getting you back on the road quickly.
            </motion.p>

            <motion.div variants={fadeUp}>
              <div className="flex items-center gap-4 p-5 bg-base-100 rounded-2xl border border-base-300 shadow-sm">
                <div className="text-4xl font-black text-primary">
                  24/7
                </div>

                <div className="text-sm font-medium text-base-content/70 leading-snug">
                  Emergency battery
                  <br />
                  replacement service.
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            className="lg:col-span-7 grid sm:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {cardData.map((card, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className={`bg-base-100 rounded-[2rem] p-8 border border-base-300 shadow-sm hover:shadow-xl transition-all duration-300 group ${
                  index % 2 !== 0 ? "sm:mt-12" : ""
                } ${card.themeBorder}`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`p-4 rounded-2xl ${card.themeBg} ${card.themeColor} group-hover:scale-110 transition-transform duration-300`}
                  >
                    {card.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-base-content mb-3 group-hover:text-primary transition-colors duration-300">
                  {card.title}
                </h3>

                <p className="text-base-content/70 leading-relaxed">
                  {card.description}
                </p>

                <div className="mt-8 w-8 h-1 bg-base-300 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-primary -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Cards;