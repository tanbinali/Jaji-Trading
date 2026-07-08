import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { 
  HiOutlinePhone, 
  HiOutlineMapPin,
  HiOutlineArrowUpRight
} from "react-icons/hi2";
import logo from "../assets/logo.png";

const Footer = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { name: "About Us", id: "about" },
    { name: "Our Batteries", id: "products" },
    { name: "Why Choose Us", id: "choose-us" },
    { name: "Customer Reviews", id: "reviews" },
    { name: "Visit Shop", id: "map" },
  ];

  return (
    <footer 
      className="bg-neutral text-neutral-content relative overflow-hidden pt-24 pb-8"
      aria-label="Jaji Car Battery Replacement Footer"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10 translate-x-1/3 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Bio (5 columns) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-6 bg-neutral-content/5 p-3 rounded-2xl border border-neutral-content/10">
              <img
                src={logo}
                alt="Jaji Car Battery Replacement Logo"
                className="w-12 h-12 object-contain bg-base-100 rounded-xl p-1"
                loading="lazy"
              />
              <span className="text-xl font-extrabold tracking-tight text-neutral-content">
                Jaji Car Battery
              </span>
            </div>
            <p className="text-neutral-content/70 text-lg leading-relaxed max-w-sm mb-8">
              We provide fast, reliable, and authentic car battery replacement across Abu Dhabi and Yas Mall. We bring the garage to you.
            </p>
            <div className="flex items-center gap-3 text-neutral-content/80 font-medium">
              <HiOutlineMapPin className="w-6 h-6 text-primary" />
              <span>Yas Mall, Abu Dhabi, UAE</span>
            </div>
          </div>

          {/* Column 2: Quick Links (3 columns) */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold text-neutral-content uppercase tracking-wider mb-6">
              Navigation
            </h3>
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-neutral-content/70 hover:text-primary transition-colors duration-300 font-medium flex items-center group"
                  >
                    <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300">
                      <HiOutlineArrowUpRight className="w-4 h-4 mr-1 text-primary" />
                    </span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Emergency Contacts (4 columns) */}
          <div className="lg:col-span-4">
            <h3 className="text-lg font-bold text-neutral-content uppercase tracking-wider mb-6">
              24/7 Dispatch
            </h3>
            
            <div className="flex flex-col gap-4">
              <a
                href="tel:+971547676536"
                className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-content/5 border border-neutral-content/10 hover:bg-primary hover:border-primary transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-neutral text-neutral-content rounded-xl flex items-center justify-center group-hover:text-primary-content transition-colors duration-300">
                  <HiOutlinePhone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-neutral-content/50 uppercase tracking-wider group-hover:text-primary-content/70">Call Us Now</p>
                  <p className="text-lg font-bold text-neutral-content group-hover:text-primary-content">+971 54 767 6536</p>
                </div>
              </a>

              <a
                href="https://wa.me/+971547676536"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-content/5 border border-neutral-content/10 hover:bg-success hover:border-success transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-neutral text-neutral-content rounded-xl flex items-center justify-center group-hover:text-success-content transition-colors duration-300">
                  <FaWhatsapp className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-neutral-content/50 uppercase tracking-wider group-hover:text-success-content/70">Chat on WhatsApp</p>
                  <p className="text-lg font-bold text-neutral-content group-hover:text-success-content">+971 54 767 6536</p>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 border-t border-neutral-content/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-content/50 text-sm font-medium text-center md:text-left">
            Copyright © {new Date().getFullYear()} Jaji Car Battery Replacement & Auto Spare Parts Trading. All rights reserved.
          </p>
          <div className="text-neutral-content/50 text-sm font-medium">
            Designed for Speed & Reliability
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;