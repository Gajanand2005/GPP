import { Link } from 'react-router-dom';
import { Printer, Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-9 h-9 bg-accent-500 rounded-lg flex items-center justify-center">
                <Printer className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                GPP <span className="text-accent-400">Printing</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Your trusted partner for premium printing solutions since 2005. Quality, precision, and customer satisfaction.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'Gallery', 'About Us', 'Contact'].map((label) => (
                <li key={label}>
                  <Link
                    to={label === 'Home' ? '/' : `/${label.toLowerCase().replace(' ', '-')}`}
                    className="text-sm text-slate-400 hover:text-accent-400 transition-colors flex items-center gap-1"
                  >
                    <ArrowUpRight className="w-3 h-3" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {['Visiting Cards', 'Flex Banners', 'Wedding Cards', 'Brochures', 'Stickers'].map((label) => (
                <li key={label}>
                  <Link
                    to="/services"
                    className="text-sm text-slate-400 hover:text-accent-400 transition-colors flex items-center gap-1"
                  >
                    <ArrowUpRight className="w-3 h-3" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-slate-400">
                <Phone className="w-4 h-4 mt-0.5 text-accent-400" />
                <span>+91 9468006213</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-400">
                <Mail className="w-4 h-4 mt-0.5 text-accent-400" />
                <span>info@gppprinting.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-400">
                <MapPin className="w-4 h-4 mt-0.5 text-accent-400" />
                <span>Kund Haryana 123102, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} GPP Printing Press. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
