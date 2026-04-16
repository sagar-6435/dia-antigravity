import { useState } from 'react';
import { reviews } from '../data';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Reviews = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % reviews.length);
  const prev = () => setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section className="py-24 bg-brand-cream relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Customers Say</h2>
            <p className="text-gray-600 text-lg mb-8">
              Don't just take our word for it. Hear from thousands of people who have made DIA Pickles a part of their daily meals.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <button 
                onClick={prev}
                className="p-3 rounded-full bg-white border border-gray-100 shadow-md hover:bg-brand-primary hover:text-white transition-all"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={next}
                className="p-3 rounded-full bg-white border border-gray-100 shadow-md hover:bg-brand-primary hover:text-white transition-all"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="lg:w-2/3 w-full relative h-[400px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={reviews[current].id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-2xl bg-white p-12 rounded-[2rem] shadow-xl border border-gray-50 relative"
              >
                <Quote size={80} className="absolute top-6 right-12 text-brand-primary/10" />
                
                <div className="flex text-yellow-400 mb-6">
                  {Array.from({ length: reviews[current].rating }).map((_, i) => (
                    <span key={i} className="text-2xl">★</span>
                  ))}
                </div>
                
                <p className="text-2xl font-medium text-gray-800 italic mb-8 leading-relaxed">
                  "{reviews[current].comment}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-brand-secondary/20 rounded-full flex items-center justify-center text-brand-secondary font-bold text-xl">
                    {reviews[current].name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-xl">{reviews[current].name}</h4>
                    <p className="text-brand-primary font-semibold text-sm">{reviews[current].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
