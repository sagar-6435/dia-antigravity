import { motion } from 'framer-motion';

const CTABanner = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl">
          <img 
            src="/meal.png" 
            alt="Traditional Andhra Meal" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 to-transparent flex items-center p-12 md:p-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-xl text-white"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6">Taste the Tradition Today</h2>
              <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
                Bring home the same warmth and authentic flavors of homemade pickles that have defined South Indian kitchens for centuries.
              </p>
              <button className="btn-primary !px-10 !py-4 !text-xl shadow-brand-primary/40 hover:scale-105 transition-transform">
                Order Now
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
