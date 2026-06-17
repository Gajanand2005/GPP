import { useEffect } from 'react';
import { useTitle } from '../hooks/useTitle';
import { motion } from 'framer-motion';
import { CreditCard, Badge, Flag, Heart, FileText, Paperclip, BookOpen, Tag, Layout, ArrowRight } from 'lucide-react';
import { services } from '../data/products';
import { Link } from 'react-router-dom';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const iconMap: Record<string, React.ReactNode> = {
  CreditCard: <CreditCard className="w-6 h-6" />,
  IdCard: <Badge className="w-6 h-6" />,
  Flag: <Flag className="w-6 h-6" />,
  Heart: <Heart className="w-6 h-6" />,
  FileText: <FileText className="w-6 h-6" />,
  Paperclip: <Paperclip className="w-6 h-6" />,
  BookOpen: <BookOpen className="w-6 h-6" />,
  Tag: <Tag className="w-6 h-6" />,
  Layout: <Layout className="w-6 h-6" />,
};

export function Services() {
  useTitle('Services');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero */}
      <section className="bg-slate-50 dark:bg-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Our <span className="text-primary-700 dark:text-accent-400">Services</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              From business cards to large-format banners, we offer a comprehensive range of printing services to meet all your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="w-12 h-12 bg-primary-50 dark:bg-slate-700 rounded-lg flex items-center justify-center mb-4 text-primary-700 dark:text-accent-400 group-hover:bg-primary-700 dark:group-hover:bg-accent-500 group-hover:text-white dark:group-hover:text-slate-900 transition-colors">
                  {iconMap[service.icon]}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                      <span className="w-1.5 h-1.5 bg-accent-500 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/gallery"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary-700 dark:text-accent-400 hover:underline"
                >
                  View Products
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
