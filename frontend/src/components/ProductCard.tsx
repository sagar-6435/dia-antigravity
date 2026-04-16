import type { FC } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star } from 'lucide-react';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    description: string;
    price: string;
    image: string;
    tag?: string;
  };
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="card-premium group overflow-hidden"
    >
      <div className="relative h-64 overflow-hidden bg-gray-50">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
        />
        {product.tag && (
          <span className="absolute top-4 left-4 bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
            {product.tag}
          </span>
        )}
        <button className="absolute bottom-4 right-4 p-3 bg-white text-brand-primary rounded-2xl shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-brand-primary hover:text-white">
          <ShoppingCart size={20} />
        </button>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-1 mb-2">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} size={14} className="fill-yellow-400 text-yellow-400" />
          ))}
          <span className="text-xs text-gray-400 ml-1">(4.9)</span>
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-brand-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-brand-dark">{product.price}</span>
          <button className="text-brand-primary font-bold hover:underline text-sm">
            Quick View
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
