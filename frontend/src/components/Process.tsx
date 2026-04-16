import { steps } from '../data';
import * as LucideIcons from 'lucide-react';
import { motion } from 'framer-motion';

const Process = () => {
  return (
    <section className="py-24 bg-brand-accent text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">From Farm to Jar</h2>
          <p className="text-emerald-100/70 text-lg max-w-2xl mx-auto">
            Witness the journey of our pickles as we follow age-old traditions to bring you the finest quality.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-emerald-800 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => {
              const Icon = (LucideIcons as any)[step.icon] || LucideIcons.HelpCircle;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-brand-secondary rounded-full flex items-center justify-center text-brand-dark shadow-xl ring-8 ring-emerald-950">
                      <Icon size={32} />
                    </div>
                    <div className="absolute -top-4 -right-4 w-10 h-10 bg-white text-brand-accent rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-emerald-100/60 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
