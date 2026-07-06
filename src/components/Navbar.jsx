import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";
import {
  HiOutlineInformationCircle,
  HiOutlineCube,
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiOutlineBars3,
  HiOutlineXMark,
} from "react-icons/hi2";

const menuItems = [
  {
    id: "about",
    label: "About",
    icon: <HiOutlineInformationCircle className="w-5 h-5" />,
  },
  {
    id: "products",
    label: "Batteries",
    icon: <HiOutlineCube className="w-5 h-5" />,
  },
  {
    id: "contact",
    label: "Contact",
    icon: <HiOutlineEnvelope className="w-5 h-5" />,
  },
  {
    id: "map",
    label: "Visit Us",
    icon: <HiOutlineMapPin className="w-5 h-5" />,
  },
];

const navVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 80, damping: 20 },
  },
};

const mobileMenuVariants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.4, ease: "easeOut", staggerChildren: 0.1 },
  },
};

const mobileItemVariants = {
  closed: { opacity: 0, x: -20 },
  open: { opacity: 1, x: 0 },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [pendingScrollId, setPendingScrollId] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const performScroll = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const navEl = navRef.current;
    const navHeight = navEl
      ? Math.ceil(navEl.getBoundingClientRect().height)
      : 0;

    const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
    const offset = 24; // Extra breathing room
    const target = Math.max(0, sectionTop - navHeight - offset);

    window.scrollTo({ top: target, behavior: "smooth" });

    // Fallback adjustment
    setTimeout(() => {
      const stillHidden = section.getBoundingClientRect().top < navHeight + 4;
      if (stillHidden) {
        window.scrollTo({ top: target + 2, behavior: "smooth" });
      }
    }, 650);
  };

  const handleDesktopClick = (id) => {
    performScroll(id);
    setIsOpen(false);
  };

  const handleMobileClick = (id) => {
    setPendingScrollId(id);
    setIsOpen(false); // Triggers exit animation, which then calls scroll
  };

  return (
    <motion.nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled
          ? "bg-base-100/85 backdrop-blur-xl border-base-200 shadow-sm py-3"
          : "bg-base-100 border-transparent py-5"
      }`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8">
        {/* Brand Logo & Name */}
        <motion.div
          onClick={() => performScroll("hero")}
          className="cursor-pointer flex items-center gap-3 group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="relative p-2 bg-base-200 rounded-xl group-hover:bg-primary/10 transition-colors duration-300">
            <img
              src={logo}
              alt="Mohammad Khan Auto Parts Logo"
              className="h-8 w-auto relative z-10"
            />
            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 bg-primary/20 blur-md rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <span className="text-xl sm:text-2xl font-extrabold text-base-content tracking-tight">
            Jaji Car Battery
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleDesktopClick(item.id)}
              className="relative px-4 py-2 rounded-lg text-base-content/80 font-medium flex items-center gap-2 hover:text-primary hover:bg-base-200/50 transition-all duration-300 group overflow-hidden"
            >
              <span className="text-primary group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </span>
              <span>{item.label}</span>
              
              {/* Bottom active line hover effect */}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
            </button>
          ))}
          
          {/* Call to action button */}
          <button 
            onClick={() => handleDesktopClick("contact")}
            className="ml-4 px-6 py-2.5 bg-primary text-primary-content font-semibold rounded-xl hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-300 active:scale-95"
          >
            Get Help Now
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="p-2.5 bg-base-200 text-base-content rounded-xl hover:bg-primary/10 hover:text-primary transition-colors duration-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            <motion.div
              initial={false}
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? (
                <HiOutlineXMark className="w-6 h-6" />
              ) : (
                <HiOutlineBars3 className="w-6 h-6" />
              )}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence
        onExitComplete={() => {
          if (pendingScrollId) {
            setTimeout(() => {
              performScroll(pendingScrollId);
              setPendingScrollId(null);
            }, 10);
          }
        }}
      >
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 w-full bg-base-100/95 backdrop-blur-xl border-b border-base-200 shadow-xl overflow-hidden"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {menuItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleMobileClick(item.id)}
                  variants={mobileItemVariants}
                  className="w-full flex items-center gap-4 px-4 py-4 rounded-xl text-base-content font-medium text-lg hover:bg-base-200 hover:text-primary transition-colors duration-200 group"
                >
                  <div className="p-2 bg-base-200 group-hover:bg-primary/10 rounded-lg text-primary transition-colors duration-200">
                    {item.icon}
                  </div>
                  {item.label}
                </motion.button>
              ))}
              
              <motion.button
                variants={mobileItemVariants}
                onClick={() => handleMobileClick("contact")}
                className="w-full mt-4 py-4 bg-primary text-primary-content text-lg font-semibold rounded-xl shadow-md active:scale-95 transition-all duration-200"
              >
                Get Emergency Assistance
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;