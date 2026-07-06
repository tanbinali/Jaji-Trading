import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { 
  HiOutlinePhone, 
  HiOutlineXMark,
  HiOutlineLifebuoy
} from "react-icons/hi2";

const FAB = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close the FAB if the user scrolls (optional, but good for mobile UX)
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  // Animation variants
  const actionVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    },
    exit: { 
      opacity: 0, 
      y: 10, 
      scale: 0.8,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-[100] flex flex-col items-end gap-4">
      
      {/* Expanded Action Buttons */}
      <AnimatePresence>
        {isOpen && (
          <div className="flex flex-col items-end gap-4 mb-2">
            
            {/* WhatsApp Action */}
            <motion.div 
              variants={actionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex items-center gap-3 group"
            >
              <span className="px-3 py-1.5 bg-base-100 border border-base-300 text-base-content text-sm font-bold rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                WhatsApp Us
              </span>
              <a
                href="https://wa.me/+971547676536"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-success text-success-content rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-success/40 transition-all duration-300"
                aria-label="Contact on WhatsApp"
              >
                <FaWhatsapp className="w-7 h-7" />
              </a>
            </motion.div>

            {/* Phone Action */}
            <motion.div 
              variants={actionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ delay: 0.05 }} // Slight stagger
              className="flex items-center gap-3 group"
            >
              <span className="px-3 py-1.5 bg-base-100 border border-base-300 text-base-content text-sm font-bold rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Call Dispatch
              </span>
              <a
                href="tel:+971547676536"
                className="w-14 h-14 bg-primary text-primary-content rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-primary/40 transition-all duration-300"
                aria-label="Call Now"
              >
                <HiOutlinePhone className="w-7 h-7" />
              </a>
            </motion.div>

          </div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-16 h-16 bg-neutral text-neutral-content rounded-full flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 z-10 border-2 border-base-100"
        aria-label="Toggle contact menu"
      >
        {/* Pulsing ring effect when closed */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full border-2 border-neutral animate-ping opacity-30"></span>
        )}

        {/* Animated Icon Swap */}
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {isOpen ? (
            <HiOutlineXMark className="w-8 h-8" />
          ) : (
            <HiOutlineLifebuoy className="w-8 h-8" />
          )}
        </motion.div>
      </button>
      
    </div>
  );
};

export default FAB;