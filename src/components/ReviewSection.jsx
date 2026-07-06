import { motion } from "framer-motion";
import { 
  HiStar, 
  HiOutlineChatBubbleLeftEllipsis,
  HiOutlineArrowTurnDownRight
} from "react-icons/hi2";

// Helper: Convert ISO date → "x time ago"
const timeAgo = (dateString) => {
  const now = new Date();
  const past = new Date(dateString);
  const diff = now - past;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years > 0) return `${years} year${years > 1 ? "s" : ""} ago`;
  if (months > 0) return `${months} month${months > 1 ? "s" : ""} ago`;
  if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
  if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  return "Just now";
};

const reviews = [
  {
    id: 1,
    name: "Sarah Jenkins",
    rating: 5,
    date: "2024-02-10",
    text: "My car wouldn't start in the Yas Mall parking lot. Called Jaji Car Battery and they were there in 15 minutes! Fantastic and quick service to save my afternoon.",
    response: "Hi Sarah, happy we could get you back on the road so quickly. Thank you for choosing us!",
    avatar: "SJ",
  },
  {
    id: 2,
    name: "Tariq Al Hammadi",
    rating: 5,
    date: "2023-11-25",
    text: "Very professional team. They diagnosed my battery issue right away and gave me a great price on a genuine replacement. Highly recommended in Abu Dhabi.",
    response: "Thank you, Tariq! Providing genuine parts at fair prices is our priority.",
    avatar: "TA",
  },
  {
    id: 3,
    name: "Elena R.",
    rating: 4,
    date: "2024-01-05",
    text: "Good service and they arrived at my location near Yas Island incredibly fast. The technician was polite and efficient with the installation.",
    response: null,
    avatar: "ER",
  },
  {
    id: 4,
    name: "Ahmed Kamal",
    rating: 5,
    date: "2023-12-12",
    text: "Best battery replacement service I've used. They handled my Nissan Patrol's battery installation flawlessly and even checked the alternator to be safe.",
    response: "Thanks Ahmed! We always make sure your car's complete charging system is running perfectly before we leave.",
    avatar: "AK",
  },
];

const ReviewsSection = () => {
  const averageRating = (
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
  ).toFixed(1);

  // Build JSON-LD structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AutoPartsStore",
    name: "Jaji Car Battery Replacement & Auto Spare Parts Trading",
    url: "https://yourdomain.com",
    description: "Professional on-site car battery replacement and delivery service in Abu Dhabi & Yas Mall. Fast, affordable, and reliable.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: averageRating,
      reviewCount: reviews.length,
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: "5",
        worstRating: "1",
      },
      reviewBody: r.text,
      datePublished: r.date,
      itemReviewed: {
        "@type": "AutoPartsStore",
        name: "Jaji Car Battery Replacement & Auto Spare Parts Trading",
        url: "https://yourdomain.com",
      },
    })),
  };

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
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  return (
    <section
      id="reviews"
      className="py-24 bg-base-200 relative overflow-hidden"
      aria-label="Customer Reviews for Car Battery Replacement Abu Dhabi"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header & Aggregate Badge */}
        <motion.div
          className="flex flex-col items-center text-center mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeUp} className="mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-100 border border-base-300 text-primary font-bold text-sm tracking-wide uppercase shadow-sm">
              <HiOutlineChatBubbleLeftEllipsis className="w-5 h-5" />
              Client Feedback
            </span>
          </motion.div>

          <motion.h2 
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-base-content leading-tight mb-8 tracking-tight"
          >
            Don't Just Take Our <span className="text-primary">Word For It</span>
          </motion.h2>

          {/* Aggregate Rating Block */}
          <motion.div 
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center gap-6 p-6 sm:p-8 bg-base-100 rounded-3xl border border-base-300 shadow-md"
          >
            <div className="text-5xl font-black text-base-content">{averageRating}</div>
            <div className="flex flex-col items-center sm:items-start border-t sm:border-t-0 sm:border-l border-base-300 pt-4 sm:pt-0 sm:pl-6">
              <div className="flex text-warning mb-1">
                {[...Array(5)].map((_, i) => (
                  <HiStar key={i} className="w-6 h-6" />
                ))}
              </div>
              <p className="text-base-content/70 font-medium">
                Based on verified customer reviews
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Masonry Grid for Reviews */}
        <motion.div
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {reviews.map((review) => (
            <motion.blockquote
              key={review.id}
              variants={fadeUp}
              className="break-inside-avoid bg-base-100 border border-base-300 shadow-sm rounded-[2rem] p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              itemScope
              itemType="https://schema.org/Review"
            >
              {/* Header: Avatar, Name, Date */}
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center font-black text-primary text-xl shrink-0">
                  {review.avatar}
                </div>
                <div>
                  <p className="font-bold text-lg text-base-content leading-snug" itemProp="author">
                    {review.name}
                  </p>
                  <p className="text-sm font-medium text-base-content/50 uppercase tracking-wider mt-0.5">
                    {timeAgo(review.date)}
                  </p>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex text-warning mb-4" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                {[...Array(5)].map((_, i) => (
                  <HiStar
                    key={i}
                    className={`w-5 h-5 ${i < review.rating ? "text-warning" : "text-base-300"}`}
                  />
                ))}
                <meta itemProp="ratingValue" content={review.rating} />
                <meta itemProp="bestRating" content="5" />
              </div>

              {/* Review Text */}
              <p className="text-base-content/80 text-lg leading-relaxed mb-6" itemProp="reviewBody">
                "{review.text}"
              </p>

              {/* Owner's Response (Nested Bubble) */}
              {review.response && (
                <div className="relative mt-6 pt-6 border-t border-base-200">
                  <div className="absolute top-6 left-0 text-base-300">
                    <HiOutlineArrowTurnDownRight className="w-6 h-6" />
                  </div>
                  <div className="ml-8 bg-base-200/50 rounded-2xl p-4 border border-base-300/50">
                    <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">
                      Response from Owner
                    </p>
                    <p className="text-sm text-base-content/70 leading-relaxed">
                      {review.response}
                    </p>
                  </div>
                </div>
              )}
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;