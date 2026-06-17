import { useEffect } from 'react';
import { useTitle } from '../hooks/useTitle';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, Printer, Shield, Truck, Zap } from 'lucide-react';
import { teamMembers } from '../data/products';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function About() {
  useTitle('About Us');
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
              About <span className="text-primary-700 dark:text-accent-400">GPP Printing Press</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Two decades of excellence in printing. We have grown from a small family business to a trusted printing partner for hundreds of businesses and individuals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our printing facility"
                className="rounded-xl shadow-lg w-full h-96 object-cover"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                Our <span className="text-primary-700 dark:text-accent-400">Story</span>
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  GPP Printing Press was founded in 2005 by Gopal Prasad, a passionate print technician with a dream of providing high-quality printing services to businesses and individuals in the region.
                </p>
                <p>
                  Starting with a single offset printing machine, we have expanded our operations to include digital printing, large-format printing, and specialized finishing services. Today, our facility houses state-of-the-art equipment from leading manufacturers.
                </p>
                <p>
                  Over the years, we have printed millions of business cards, thousands of banners, and countless wedding invitations. Each project receives the same attention to detail and commitment to quality that has defined our brand since day one.
                </p>
                <p>
                  Our growth has been driven by one simple principle: put the customer first. We believe that every print job is a reflection of our craft, and we take pride in delivering results that exceed expectations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-slate-900 rounded-xl p-8"
            >
              <div className="w-12 h-12 bg-primary-50 dark:bg-slate-800 rounded-lg flex items-center justify-center mb-4 text-primary-700 dark:text-accent-400">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Our Mission</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                To deliver exceptional printing solutions that empower businesses and individuals to communicate effectively. We strive to combine innovation with craftsmanship to produce prints that make a lasting impression.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-slate-900 rounded-xl p-8"
            >
              <div className="w-12 h-12 bg-primary-50 dark:bg-slate-800 rounded-lg flex items-center justify-center mb-4 text-primary-700 dark:text-accent-400">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Our Vision</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                To be the most trusted and innovative printing partner in the region. We envision a future where every print we produce represents the pinnacle of quality and creativity, setting the standard for the industry.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
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
              Our <span className="text-primary-700 dark:text-accent-400">Values</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              The principles that guide every decision we make and every print we produce.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: 'Quality', description: 'We never compromise on quality. Every print is inspected to ensure it meets our high standards.' },
              { icon: Users, title: 'Customer Focus', description: 'Our customers are at the heart of everything we do. We listen, adapt, and deliver.' },
              { icon: Shield, title: 'Integrity', description: 'We operate with honesty and transparency in all our business dealings.' },
              { icon: Zap, title: 'Innovation', description: 'We embrace new technologies and techniques to stay ahead of the curve.' },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-primary-50 dark:bg-slate-700 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary-700 dark:text-accent-400">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{value.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                Why Choose <span className="text-primary-700 dark:text-accent-400">GPP Printing?</span>
              </h2>
              <div className="space-y-6">
                {[
                  { icon: Printer, title: 'State-of-the-Art Equipment', description: 'We invest in the latest printing technology to ensure precision and vibrancy in every print.' },
                  { icon: Shield, title: 'Quality Assurance', description: 'Every project undergoes rigorous quality checks before delivery.' },
                  { icon: Truck, title: 'Timely Delivery', description: 'We understand deadlines. Our efficient processes ensure on-time delivery every time.' },
                  { icon: Award, title: 'Experienced Team', description: 'Our team brings decades of combined experience in printing and design.' },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-10 h-10 bg-primary-50 dark:bg-slate-700 rounded-lg flex items-center justify-center flex-shrink-0 text-primary-700 dark:text-accent-400">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-1">{item.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Why choose us"
                className="rounded-xl shadow-lg w-full h-96 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
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
              Meet Our <span className="text-primary-700 dark:text-accent-400">Team</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              The dedicated professionals behind every print we produce.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-slate-50 dark:bg-slate-800 rounded-xl overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white">{member.name}</h3>
                  <p className="text-sm text-primary-700 dark:text-accent-400 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
