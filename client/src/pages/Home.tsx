import { useEffect } from 'react';
import { useTitle } from '../hooks/useTitle';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Printer, Palette, Truck, CheckCircle, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { products, testimonials } from '../data/products';
import { WhatsAppButton } from '../components/WhatsAppButton';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Home() {
  useTitle('Home');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredProducts = products.filter((p) => p.featured);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 dark:bg-slate-800">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800/5 to-accent-500/5 dark:from-primary-800/20 dark:to-accent-500/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 rounded-full text-sm font-medium mb-6">
                <Printer className="w-4 h-4" />
                Premium Printing Solutions
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                Bringing Your Ideas to{' '}
                <span className="text-primary-700 dark:text-accent-400">Life</span>
              </h1>
              <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-lg leading-relaxed">
                GPP Printing Press delivers premium quality printing services for businesses and individuals. From visiting cards to flex banners, we print it all with precision.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/gallery"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-800 dark:bg-accent-500 text-white dark:text-slate-900 rounded-lg font-medium hover:bg-primary-700 dark:hover:bg-accent-400 transition-colors"
                >
                  Explore Products
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg font-medium hover:border-primary-700 dark:hover:border-accent-400 hover:text-primary-700 dark:hover:text-accent-400 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
              <div className="mt-10 flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>20+ Years Experience</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>1000+ Happy Clients</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Fast Delivery</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Printing press"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 rounded-xl shadow-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-accent-100 dark:bg-accent-900/30 rounded-lg flex items-center justify-center">
                  <Star className="w-5 h-5 text-accent-500" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">4.9/5 Rating</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Based on 500+ reviews</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Printing equipment"
                  className="rounded-xl shadow-lg w-full h-48 object-cover"
                />
                <img
                  src="https://images.pexels.com/photos/4491451/pexels-photo-4491451.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Business cards"
                  className="rounded-xl shadow-lg w-full h-48 object-cover mt-8"
                />
                <img
                  src="https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Banner printing"
                  className="rounded-xl shadow-lg w-full h-48 object-cover -mt-8"
                />
                <img
                  src="https://images.pexels.com/photos/1661905/pexels-photo-1661905.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Wedding cards"
                  className="rounded-xl shadow-lg w-full h-48 object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Your Trusted Partner in <span className="text-primary-700 dark:text-accent-400">Printing</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                Founded in 2005, GPP Printing Press has grown from a small local printer to a full-service printing company serving businesses across the region. We combine cutting-edge technology with skilled craftsmanship to deliver exceptional results.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                Our state-of-the-art facility houses the latest printing equipment, ensuring vibrant colors, sharp details, and consistent quality across every print job — whether it is a single business card or a thousand flyers.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-50 dark:bg-slate-800 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Printer className="w-6 h-6 text-primary-700 dark:text-accent-400" />
                  </div>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">20K+</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Prints Delivered</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-50 dark:bg-slate-800 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Palette className="w-6 h-6 text-primary-700 dark:text-accent-400" />
                  </div>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">50+</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Design Options</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-50 dark:bg-slate-800 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Truck className="w-6 h-6 text-primary-700 dark:text-accent-400" />
                  </div>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">24h</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Express Delivery</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Featured <span className="text-primary-700 dark:text-accent-400">Products</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Explore our most popular printing products, crafted with premium materials and precision.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  to={`/product/${product.id}`}
                  className="group block bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-accent-500 text-white text-xs font-medium px-2 py-1 rounded">
                      {product.category}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-primary-700 dark:group-hover:text-accent-400 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{product.priceRange}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-primary-700 dark:text-accent-400 font-medium hover:underline"
            >
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              What Our <span className="text-primary-700 dark:text-accent-400">Clients</span> Say
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Hear from businesses and individuals who trust GPP Printing Press for their printing needs.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">{testimonial.name}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-20 bg-primary-800 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-primary-100 dark:text-slate-300 max-w-2xl mx-auto mb-8">
              Have a printing project in mind? Chat with us on WhatsApp and get a quick quote for your order.
            </p>
            <a
              href="https://wa.me/919876543210?text=Hi, I would like to inquire about your printing services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Get in <span className="text-primary-700 dark:text-accent-400">Touch</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Visit us, call us, or send a message. We are here to help with all your printing needs.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-primary-50 dark:bg-slate-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-primary-700 dark:text-accent-400" />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Phone</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">+91 98765 43210</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-primary-50 dark:bg-slate-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary-700 dark:text-accent-400" />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Email</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">info@gppprinting.com</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 text-center sm:col-span-2 lg:col-span-1"
            >
              <div className="w-12 h-12 bg-primary-50 dark:bg-slate-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary-700 dark:text-accent-400" />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Address</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">123 Print Street, Industrial Area, City - 400001</p>
            </motion.div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
}
