import { products } from '../data';
import ProductCard from './ProductCard';
import { motion } from 'framer-motion';

const BestSellers = () => {
  return (
    <section id="shop" className="py-24 bg-brand-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Best Sellers</h2>
            <p className="text-gray-600 max-w-xl text-lg">
              Explore our most loved traditional Andhra pickles, made with recipes passed down through generations.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <button className="px-6 py-2 rounded-full border border-brand-primary text-brand-primary font-semibold hover:bg-brand-primary hover:text-white transition-all">
              All Pickles
            </button>
            <button className="px-6 py-2 rounded-full border border-gray-200 text-gray-600 font-semibold hover:border-brand-primary hover:text-brand-primary transition-all">
              Seasonal Specials
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
