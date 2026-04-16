import { Camera, Share2, Send, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-gray-400 py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">D</div>
              <span className="text-2xl font-serif font-bold text-white">DIA <span className="text-brand-primary">Pickles</span></span>
            </div>
            <p className="leading-relaxed">
              Preserving the authentic, homemade taste of Andhra pickles since 1995. Fresh ingredients, traditional recipes, and zero preservatives.
            </p>
            <div className="flex space-x-4">
              {[Camera, Share2, Send].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all text-white">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-xl mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-brand-primary transition-colors">Home</a></li>
              <li><a href="#shop" className="hover:text-brand-primary transition-colors">Shop All</a></li>
              <li><a href="#about" className="hover:text-brand-primary transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Sustainability</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold text-xl mb-6">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-brand-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold text-xl mb-6">Newsletter</h4>
            <p className="mb-6">Stay updated with new releases and spicy offers.</p>
            <div className="flex flex-col gap-3">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full bg-gray-800 border border-gray-700 rounded-2xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
              </div>
              <button className="btn-primary w-full">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2024 DIA Pickles. All rights reserved.</p>
          <div className="flex items-center space-x-6 text-sm">
            <span className="flex items-center gap-2"><Phone size={14} /> +91 98765 43210</span>
            <span className="flex items-center gap-2"><MapPin size={14} /> Guntur, Andhra Pradesh</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
