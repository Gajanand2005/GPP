import { Product, Service, Testimonial, TeamMember } from "../types";

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Business Cards",
    category: "Visiting Cards",
    images: ["visting card.jpg"],
    description:
      "High-quality business cards with premium matte or glossy finish. Perfect for making a lasting first impression.",
    materials: [
      "300 GSM Art Card",
      "350 GSM Linen Card",
      "400 GSM Velvet Card",
    ],
    sizes: ["Standard 3.5 x 2 inch", "Square 3 x 3 inch", "Mini 3 x 1.5 inch"],
    priceRange: "",
    featured: true,
  },
  {
    id: "2",
    name: "Corporate ID Cards",
    category: "ID Cards",
    images: ["id-card-design-company-identity-card-vector.jpg"],
    description:
      "Professional ID cards with lanyard options and employee access features.",
    materials: ["PVC Plastic", "Polycarbonate", "RFID Smart Card"],
    sizes: ["Standard CR80 (85.6 x 54mm)"],
    priceRange: "",
    featured: true,
  },
  {
    id: "3",
    name: "Outdoor Flex Banner",
    category: "Flex Banners",
    images: ["Custom-Flex-Printed-Banner.jpg"],
    description:
      "Weather-resistant outdoor banners for advertising and events.",
    materials: ["Frontlit Flex", "Backlit Flex", "Star Flex", "Vinyl"],
    sizes: ["4 x 2 ft", "6 x 3 ft", "8 x 4 ft", "Custom Sizes"],
    priceRange: "",
    featured: true,
  },
  {
    id: "4",
    name: "Luxury Wedding Cards",
    category: "Wedding Cards",
    images: ["card3.jpg"],
    description:
      "Elegant wedding invitations with premium paper and gold foil stamping.",
    materials: ["Art Paper", "Handmade Paper", "Shimmer Paper", "Matte Paper"],
    sizes: ["5 x 7 inch", "6 x 8 inch", "Square 6 x 6 inch"],
    priceRange: "",
    featured: true,
  },
  {
    id: "21",
    name: "Luxury Wedding Cards",
    category: "Wedding Cards",
    images: ["card.jpg"],
    description:
      "Elegant wedding invitations with premium paper and gold foil stamping.",
    materials: ["Art Paper", "Handmade Paper", "Shimmer Paper", "Matte Paper"],
    sizes: ["5 x 7 inch", "6 x 8 inch", "Square 6 x 6 inch"],
    priceRange: "",
    featured: true,
  },
  {
    id: "22",
    name: "Luxury Wedding Cards",
    category: "Wedding Cards",
    images: ["card2.jpg"],
    description:
      "Elegant wedding invitations with premium paper and gold foil stamping.",
    materials: ["Art Paper", "Handmade Paper", "Shimmer Paper", "Matte Paper"],
    sizes: ["5 x 7 inch", "6 x 8 inch", "Square 6 x 6 inch"],
    priceRange: "",
    featured: true,
  },
  {
    id: "23",
    name: "Luxury Wedding Cards",
    category: "Wedding Cards",
    images: ["card1.jpg"],
    description:
      "Elegant wedding invitations with premium paper and gold foil stamping.",
    materials: ["Art Paper", "Handmade Paper", "Shimmer Paper", "Matte Paper"],
    sizes: ["5 x 7 inch", "6 x 8 inch", "Square 6 x 6 inch"],
    priceRange: "",
    featured: true,
  },
  {
    id: "25",
    name: "Rubber Stamp",
    category: "Stamp",
    images: ["stamp1.jpg"],
    description:
      "High-quality custom rubber stamps for offices, businesses, and personal use. Available in self-inking, pocket, and traditional stamp options with clear and durable impressions.",
    materials: [
      "Rubber Die",
      "Self-Inking Plastic Body",
      "Wooden Handle",
      "Premium Ink Pad",
    ],
    sizes: [
      "20 x 20 mm",
      "38 x 14 mm",
      "47 x 18 mm",
      "58 x 22 mm",
      "Custom Size",
    ],
    priceRange: "",
  },
 
   {
    id: "24",
    name: "Rubber Stamp",
    category: "Stamp",
    images: ["stmap2.jpg"],
    description:
      "High-quality custom rubber stamps for offices, businesses, and personal use. Available in self-inking, pocket, and traditional stamp options with clear and durable impressions.",
    materials: [
      "Rubber Die",
      "Self-Inking Plastic Body",
      "Wooden Handle",
      "Premium Ink Pad",
    ],
    sizes: [
      "20 x 20 mm",
      "38 x 14 mm",
      "47 x 18 mm",
      "58 x 22 mm",
      "Custom Size",
    ],
    priceRange: "",
  },
   {
    id: "5",
    name: "Rubber Stamp",
    category: "Stamp",
    images: ["stamp.jpg"],
    description:
      "High-quality custom rubber stamps for offices, businesses, and personal use. Available in self-inking, pocket, and traditional stamp options with clear and durable impressions.",
    materials: [
      "Rubber Die",
      "Self-Inking Plastic Body",
      "Wooden Handle",
      "Premium Ink Pad",
    ],
    sizes: [
      "20 x 20 mm",
      "38 x 14 mm",
      "47 x 18 mm",
      "58 x 22 mm",
      "Custom Size",
    ],
    priceRange: "",
  },
  {
    id: "6",
    name: "ID Card Strap",
    category: "ID Card Strap",
    images: ["strap.jpg"],
    description:
      "Custom printed ID card straps (lanyards) designed for offices, schools, colleges, events, and corporate branding. Durable, comfortable, and available with custom logo and text printing.",
    materials: [
      "Polyester Fabric",
      "Satin Fabric",
      "Nylon Strap",
      "Metal Hook",
      "Plastic Buckle",
    ],
    sizes: ["15 mm Width", "20 mm Width", "25 mm Width", "Custom Length"],
    priceRange: "",
  },

  {
    id: "7",
    name: "Custom Bill Books",
    category: "Bill Books",
    images: ["bill book.jpg"],
    description:
      "Numbered bill books with carbonless paper for duplicate copies.",
    materials: ["Carbonless Paper", "Bond Paper", "Thermal Paper"],
    sizes: ["A5", "A6", "Custom"],
    priceRange: "",
  },

  {
    id: "10",
    name: "Event Flex Banner",
    category: "Flex Banners",
    images: ["flex-banner-digital-printing--892.jpg"],
    description: "Indoor and outdoor event banners with eye-catching designs.",
    materials: ["Star Flex", "Black Back Flex", "Mesh Banner"],
    sizes: ["6 x 3 ft", "8 x 4 ft", "10 x 5 ft", "Custom"],
    priceRange: "",
  },
  {
    id: "11",
    name: "Premium ID Cards",
    category: "ID Cards",
    images: [
      "modern-id-card-design-featuring-a-circular-photo-frame-clean-layout-with-simple-details-for-name-position-and-contact-information-vector.jpg",
    ],
    description:
      "Premium ID cards with holographic overlays and smart chip options.",
    materials: ["PVC Plastic", "Polycarbonate", "RFID Smart Card"],
    sizes: ["Standard CR80 (85.6 x 54mm)"],
    priceRange: "",
  },
  {
    id: "12",
    name: "Luxury Visiting Cards",
    category: "Visiting Cards",
    images: ["lawyer-advocate-visiting-cards-79143684383208.png"],
    description: "Luxury visiting cards with gold foil and embossing.",
    materials: ["400 GSM Velvet Card", "Linen Card", "Metallic Card"],
    sizes: ["Standard 3.5 x 2 inch", "Square 3 x 3 inch"],
    priceRange: "",
  },
  {
    id: "13",
    name: "ID Card Strap",
    category: "ID Card Strap",
    images: ["strap1.jpg"],
    description:
      "Vibrant single-page flyers for quick and effective promotion.",
   materials: [
      "Polyester Fabric",
      "Satin Fabric",
      "Nylon Strap",
      "Metal Hook",
      "Plastic Buckle",
    ],
    sizes: ["15 mm Width", "20 mm Width", "25 mm Width", "Custom Length"],
    priceRange: "",
  },
  {
    id: "14",
    name: "ID Card Strap",
    category: "ID Card Strap",
    images: ["strap2.jpg"],
    description:
      "Vibrant single-page flyers for quick and effective promotion.",
   materials: [
      "Polyester Fabric",
      "Satin Fabric",
      "Nylon Strap",
      "Metal Hook",
      "Plastic Buckle",
    ],
    sizes: ["15 mm Width", "20 mm Width", "25 mm Width", "Custom Length"],
    priceRange: "",
  },
  {
    id: "15",
    name: "ID Card Strap",
    category: "ID Card Strap",
    images: ["strap3.jpg"],
    description:
      "Vibrant single-page flyers for quick and effective promotion.",
    materials: [
      "Polyester Fabric",
      "Satin Fabric",
      "Nylon Strap",
      "Metal Hook",
      "Plastic Buckle",
    ],
    sizes: ["15 mm Width", "20 mm Width", "25 mm Width", "Custom Length"],
    priceRange: "",
  },
  {
    id: "16",
    name: "Custom Bill Books",
    category: "Bill Books",
    images: ["bill book1.jpg"],
    description:
      "Numbered bill books with carbonless paper for duplicate copies.",
    materials: ["Carbonless Paper", "Bond Paper", "Thermal Paper"],
    sizes: ["A5", "A6", "Custom"],
    priceRange: "",
  },
  {
    id: "17",
    name: "Custom Bill Books",
    category: "Bill Books",
    images: ["bill book2.jpg"],
    description:
      "Numbered bill books with carbonless paper for duplicate copies.",
    materials: ["Carbonless Paper", "Bond Paper", "Thermal Paper"],
    sizes: ["A5", "A6", "Custom"],
    priceRange: "",
  },
   {
    id: "18",
    name: "Luxury Visiting Cards",
    category: "Visiting Cards",
    images: ["Business_Card_on_Cutting_Mat_1-1.jpg"],
    description: "Luxury visiting cards with gold foil and embossing.",
    materials: ["400 GSM Velvet Card", "Linen Card", "Metallic Card"],
    sizes: ["Standard 3.5 x 2 inch", "Square 3 x 3 inch"],
    priceRange: "",
  },
  {
    id: "19",
    name: "Premium ID Cards",
    category: "ID Cards",
    images: [
      "360_F_1542196140_882wv514Nenw0W2fmCvp8iwYB79NQjNB.jpg",
    ],
    description:
      "Premium ID cards with holographic overlays and smart chip options.",
    materials: ["PVC Plastic", "Polycarbonate", "RFID Smart Card"],
    sizes: ["Standard CR80 (85.6 x 54mm)"],
    priceRange: "",
  },
    {
    id: "20",
    name: "Premium ID Cards",
    category: "ID Cards",
    images: [
      "id-card-design-company-identity-card-vector (1).jpg",
    ],
    description:
      "Premium ID cards with holographic overlays and smart chip options.",
    materials: ["PVC Plastic", "Polycarbonate", "RFID Smart Card"],
    sizes: ["Standard CR80 (85.6 x 54mm)"],
    priceRange: "",
  },
];

export const resolveImageUrl = (src: string) =>
  src.startsWith("/") ? src : `/${src}`;

export const services: Service[] = [
  {
    id: "1",
    title: "Visiting Cards",
    description:
      "Premium business cards in various finishes and paper types to make a lasting impression.",
    icon: "CreditCard",
    features: [
      "Matte & Glossy Finish",
      "Spot UV Coating",
      "Gold/Silver Foil",
      "Rounded Corners",
    ],
  },
  {
    id: "2",
    title: "ID Cards",
    description:
      "Professional ID cards with lanyards and smart card options for your organization.",
    icon: "IdCard",
    features: [
      "PVC Plastic",
      "RFID Smart Cards",
      "Holographic Overlays",
      "Lanyards Included",
    ],
  },
  {
    id: "3",
    title: "Flex Banners",
    description:
      "Weather-resistant outdoor banners and indoor banners for events and advertising.",
    icon: "Flag",
    features: [
      "Frontlit & Backlit",
      "Custom Sizes",
      "Eyelet & Rope",
      "Weather Resistant",
    ],
  },
  {
    id: "4",
    title: "Wedding Cards",
    description:
      "Elegant and luxurious wedding invitations with premium paper and decorative options.",
    icon: "Heart",
    features: [
      "Handmade Paper",
      "Gold Foil Stamping",
      "Embossing",
      "Custom Envelopes",
    ],
  },
  {
    id: "5",
    title: "Stamp",
    description:
      "Single and multi-fold pamphlets for effective marketing and promotions.",
    icon: "FileText",
    features: [
      "Rubber Die",
      "Self-inking Plastic Body",
      "Wooden Handle",
      "Premium ink Pad",
    ],
  },
  {
    id: "6",
    title: "ID Card Strap",
    description:
      "Custom printed ID card straps (lanyards) designed for offices, schools, colleges, events, and corporate branding. Durable, comfortable, and available with custom logo and text printing.",
    icon: "Paperclip",
    features: ["Polyester", "Satin ", "Nylon"],
  },
  {
    id: "7",
    title: "Bill Books",
    description:
      "Numbered bill books with carbonless paper for duplicate and triplicate copies.",
    icon: "BookOpen",
    features: [
      "Numbered Pages",
      "Carbonless Paper",
      "Duplicate/Triplicate",
      "Custom Layout",
    ],
  },

 
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rajesh Kumar",
    role: "",
    company: "",
    text: "GPP Printing Press delivered exceptional quality visiting cards for our company. The finish and paper quality exceeded our expectations.",
    avatar:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    id: "2",
    name: "Priya Sharma",
    role: "",
    company: "",
    text: "We ordered flex banners for our corporate event. The colors were vibrant and the banners were durable. Will definitely order again.",
    avatar:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    id: "3",
    name: "Amit Patel",
    role: "",
    company: "",
    text: "The wedding cards we ordered for our daughter's wedding were absolutely stunning. The gold foil work and handmade paper were exquisite.",
    avatar:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    id: "4",
    name: "Neha Gupta",
    role: "",
    company: "",
    text: "Their sticker printing quality is top-notch. The colors are accurate and the die-cut precision is perfect for our branding needs.",
    avatar:
      "https://images.pexels.com/photos/1181681/pexels-photo-1181681.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Gopal Prasad",
    role: "Founder & CEO",
    bio: "With over 20 years in the printing industry, Gopal founded GPP Printing Press with a vision to deliver premium quality printing solutions.",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: "2",
    name: "Anita Devi",
    role: "Design Head",
    bio: "Anita brings creative excellence with 15 years of experience in graphic design and print media.",
    image:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: "3",
    name: "Ravi Singh",
    role: "Production Manager",
    bio: "Ravi oversees all production operations ensuring every print meets our strict quality standards.",
    image:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: "4",
    name: "Meena Patel",
    role: "Client Relations",
    bio: "Meena ensures every client receives personalized attention and exceptional service.",
    image:
      "https://images.pexels.com/photos/1181681/pexels-photo-1181681.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

export const categories = [
  "All",
  "Visiting Cards",
  "ID Cards",
  "Flex Banners",
  "Wedding Cards",
  "Stamp",
  "ID Card Strap",
  "Bill Books",
];
