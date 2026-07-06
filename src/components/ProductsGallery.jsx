import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineMagnifyingGlassPlus,
  HiOutlineXMark,
  HiOutlineCube
} from "react-icons/hi2";

import amaron from "../assets/Batteries/Amaron-din661.webp";
import fiamm from "../assets/Batteries/FIAMM-Titanium-Pro-L2X-64P_enl.webp";
import platinum from "../assets/Batteries/PLATINUM 55530.webp";
import sebang from "../assets/Batteries/SEBANG.webp";
import tuflong from "../assets/Batteries/tuflong-battery-_1_.webp";
import vartaAGM from "../assets/Batteries/VARTA AGM.webp";
import vartaBlue from "../assets/Batteries/VARTA Blue.webp";
import vartaDynamic from "../assets/Batteries/VARTA Dynamic SLI.webp";

const productImages = [
  { src: amaron, alt: "Amaron DIN661", caption: "Amaron DIN661" },
  { src: fiamm, alt: "FIAMM Titanium Pro L2X-64P", caption: "FIAMM Titanium Pro" },
  { src: platinum, alt: "Platinum 55530", caption: "Platinum 55530" },
  { src: sebang, alt: "Sebang Battery", caption: "Sebang Battery" },
  { src: tuflong, alt: "Tuflong Battery", caption: "Tuflong Battery" },
  { src: vartaAGM, alt: "VARTA AGM", caption: "VARTA AGM" },
  { src: vartaBlue, alt: "VARTA Blue", caption: "VARTA Blue" },
  { src: vartaDynamic, alt: "VARTA Dynamic SLI", caption: "VARTA Dynamic SLI" },
];

const ProductsGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 80, damping: 20 } 
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  return (
    <section id="products" className="py-24 bg-base-200 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeUp} className="mb-4 flex justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-100 border border-base-300 text-primary font-bold text-sm tracking-wide uppercase shadow-sm">
              <HiOutlineCube className="w-5 h-5" />
              Premium Inventory
            </span>
          </motion.div>

          <motion.h2 
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-base-content leading-tight mb-6 tracking-tight"
          >
            Car Batteries in Stock
          </motion.h2>

          <motion.p 
            variants={fadeUp}
            className="text-lg text-base-content/70 leading-relaxed"
          >
            We supply high-performance, genuine car batteries from the world’s most trusted manufacturers. Browse our selection available for immediate on-site delivery and installation in Abu Dhabi.
          </motion.p>
        </motion.div>

        {/* Masonry Gallery Grid */}
        <motion.div
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {productImages.map((img, index) => (
            <motion.figure
              key={index}
              variants={fadeUp}
              className="break-inside-avoid relative bg-base-100 p-6 rounded-[2rem] border border-base-300 shadow-sm hover:shadow-xl transition-all duration-500 group cursor-pointer overflow-hidden"
              onClick={() => setSelectedImage(img)}
            >
              {/* Image Container */}
              <div className="relative w-full flex items-center justify-center overflow-hidden rounded-xl mb-4 bg-base-100">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto object-contain transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Hover Glass Overlay */}
                <div className="absolute inset-0 bg-base-100/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-primary text-primary-content rounded-full flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                    <HiOutlineMagnifyingGlassPlus className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="text-center">
                <p className="font-bold text-base-content group-hover:text-primary transition-colors duration-300">
                  {img.caption}
                </p>
                <p className="text-sm font-medium text-base-content/50 uppercase tracking-widest mt-1">
                  Available Now
                </p>
              </div>
            </motion.figure>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal with AnimatePresence for smooth exit */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Modal Backdrop */}
            <div 
              className="absolute inset-0 bg-neutral/90 backdrop-blur-xl cursor-pointer"
              onClick={() => setSelectedImage(null)}
            ></div>

            {/* Modal Content */}
            <motion.div
              className="relative w-full max-w-5xl max-h-[90vh] bg-base-100 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 z-10 w-12 h-12 bg-base-200/80 hover:bg-error hover:text-error-content backdrop-blur-md text-base-content rounded-full flex items-center justify-center transition-colors duration-300"
                onClick={() => setSelectedImage(null)}
                aria-label="Close image preview"
              >
                <HiOutlineXMark className="w-6 h-6" />
              </button>

              <div className="p-8 sm:p-12 flex-1 overflow-hidden flex items-center justify-center bg-base-100">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  loading="lazy"
                  className="max-w-full max-h-[60vh] object-contain drop-shadow-2xl"
                />
              </div>

              {/* Modal Footer */}
              <div className="bg-base-200 p-6 sm:p-8 text-center border-t border-base-300">
                <h3 className="text-2xl font-bold text-base-content mb-2">
                  {selectedImage.caption}
                </h3>
                <p className="text-base-content/70">
                  Contact us for pricing, compatibility checks, and immediate dispatch.
                </p>
                <a
                  href="https://wa.me/+971556939668"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-8 py-3 bg-primary text-primary-content font-bold rounded-xl shadow-md hover:bg-primary/90 transition-colors"
                >
                  Request This Battery
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProductsGallery;