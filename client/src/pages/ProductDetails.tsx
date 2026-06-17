import { useState, useEffect } from 'react';
import { useTitle } from '../hooks/useTitle';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight, MessageCircle, Minus, Plus, Check } from 'lucide-react';
import { products } from '../data/products';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function ProductDetails() {
  useTitle('Product Details');
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);

  const [activeImage, setActiveImage] = useState(0);
  const [selectedMaterial, setSelectedMaterial] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);
  const [quantity, setQuantity] = useState(100);
  const [inquirySent, setInquirySent] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (product) {
      setActiveImage(0);
      setSelectedMaterial(0);
      setSelectedSize(0);
      setQuantity(100);
      setInquirySent(false);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Product Not Found</h2>
          <button
            onClick={() => navigate('/gallery')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-800 dark:bg-accent-500 text-white dark:text-slate-900 rounded-lg font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Gallery
          </button>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const handleWhatsAppInquiry = () => {
    const message = `Hi GPP Printing Press!\n\nI'm interested in ordering:\n\nProduct: ${product.name}\nCategory: ${product.category}\nMaterial: ${product.materials[selectedMaterial]}\nSize: ${product.sizes[selectedSize]}\nQuantity: ${quantity}\n\nPlease provide a quote. Thank you!`;
    const url = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setInquirySent(true);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-8"
        >
          <Link to="/" className="hover:text-primary-700 dark:hover:text-accent-400">Home</Link>
          <span>/</span>
          <Link to="/gallery" className="hover:text-primary-700 dark:hover:text-accent-400">Gallery</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white font-medium">{product.name}</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Images */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <div className="relative rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={product.images[activeImage]}
                  alt={product.name}
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </AnimatePresence>
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 dark:bg-slate-900/90 rounded-full flex items-center justify-center text-slate-900 dark:text-white hover:scale-110 transition-transform"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 dark:bg-slate-900/90 rounded-full flex items-center justify-center text-slate-900 dark:text-white hover:scale-110 transition-transform"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3 mt-4">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`relative rounded-lg overflow-hidden flex-1 max-w-24 transition-all ${
                      activeImage === i
                        ? 'ring-2 ring-primary-700 dark:ring-accent-400'
                        : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} ${i + 1}`}
                      className="w-full h-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Details */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="inline-flex items-center px-3 py-1 bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 rounded-full text-sm font-medium mb-4">
              {product.category}
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {product.name}
            </h1>
            <p className="text-2xl font-semibold text-accent-600 dark:text-accent-400 mb-6">
              {product.priceRange}
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Material */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">Material</h3>
              <div className="flex flex-wrap gap-2">
                {product.materials.map((material, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedMaterial(i)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors border ${
                      selectedMaterial === i
                        ? 'bg-primary-700 dark:bg-accent-500 text-white dark:text-slate-900 border-primary-700 dark:border-accent-500'
                        : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-primary-700 dark:hover:border-accent-400'
                    }`}
                  >
                    {material}
                  </button>
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">Size</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedSize(i)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors border ${
                      selectedSize === i
                        ? 'bg-primary-700 dark:bg-accent-500 text-white dark:text-slate-900 border-primary-700 dark:border-accent-500'
                        : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-primary-700 dark:hover:border-accent-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">Quantity</h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 10))}
                  className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-lg font-semibold text-slate-900 dark:text-white w-16 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 10)}
                  className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* WhatsApp Inquiry */}
            <div className="flex flex-col gap-4">
              <button
                onClick={handleWhatsAppInquiry}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Inquire on WhatsApp
              </button>
              {inquirySent && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-green-600 dark:text-green-400 flex items-center gap-1"
                >
                  <Check className="w-4 h-4" />
                  WhatsApp inquiry prepared!
                </motion.p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
