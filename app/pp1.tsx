// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import Head from "next/head";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowRight, Twitter, Linkedin, Github } from "lucide-react";

// // --- Navigation Items ---
// const navItems = [
//   { name: "Products", href: "#products" },
//   { name: "Community", href: "#community" },
//   { name: "Ecosystem", href: "#ecosystem" },
//   { name: "About", href: "#about" },
// ];

// // --- SVG Icon Components for Visual Flair ---
// const CircleIcon = ({ className }: { className?: string }) => (
//   <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
//     <circle cx="50" cy="50" r="50" fill="currentColor" />
//   </svg>
// );

// // --- Main Home Component ---
// function Home() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("");
//   const [hasScrolled, setHasScrolled] = useState(false);

//   // --- Effect for Navbar style change on scroll ---
//   useEffect(() => {
//     const handleScroll = () => {
//       setHasScrolled(window.scrollY > 20);

//       const sections = navItems.map((item) => item.href.slice(1));
//       let currentSection = "";
//       for (const sectionId of sections) {
//         const section = document.getElementById(sectionId);
//         if (section && window.scrollY >= section.offsetTop - 150) {
//           currentSection = sectionId;
//         }
//       }
//       setActiveSection(currentSection);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   // --- Animation Variants ---
//   const FADE_IN = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
//   };

//   const STAGGER_CONTAINER = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   return (
//     <>
//       <Head>
//         <title>Pijina Poojary | Innovative Tech Solutions</title>
//         <meta name="description" content="Pijina Poojary Solutions - Driving innovation and scale with cutting-edge technology." />
//         <link rel="icon" href="/favicon.ico" />
//         <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" />
//       </Head>

//       {/* --- Main Container --- */}
//       <div className="bg-[#0A192F] font-inter">
//         {/* --- Navbar --- */}
//         <motion.nav
//           className={`fixed w-full z-50 transition-all duration-300 ${
//             hasScrolled ? "bg-[#112B9D] shadow-lg" : "bg-transparent"
//           }`}
//         >
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex justify-between h-20 items-center">
//               <Link href="#" className="flex items-center gap-2">
//                 <Image
//                   src="/ppbg.png"
//                   alt="Pijina Poojary Logo"
//                   width={60}
//                   height={60}
//                   className="rounded-full"
//                 />
//                 <span className="text-xl font-bold text-white tracking-wide">Pijina Poojary</span>
//               </Link>
//               <div className="hidden lg:flex items-center space-x-8">
//                 {navItems.map((item) => (
//                   <Link
//                     key={item.name}
//                     href={item.href}
//                     className={`relative text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${
//                       activeSection === item.href.slice(1)
//                         ? "text-[#C04000]"
//                         : "text-gray-300 hover:text-white"
//                     }`}
//                   >
//                     {item.name}
//                     {activeSection === item.href.slice(1) && (
//                       <motion.div
//                         className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#C04000]"
//                         layoutId="underline"
//                       />
//                     )}
//                   </Link>
//                 ))}
//               </div>
//               <div className="hidden lg:flex">
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="bg-[#C04000] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-opacity-90 transition-all duration-300 shadow-md"
//                 >
//                   Get Started
//                 </motion.button>
//               </div>
//               <div className="lg:hidden">
//                 <button onClick={toggleMenu} className="text-white">
//                   <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}/>
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>
//           <AnimatePresence>
//             {isMenuOpen && (
//               <motion.div
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: "auto" }}
//                 exit={{ opacity: 0, height: 0 }}
//                 className="lg:hidden bg-[#112B9D]"
//               >
//                 <div className="px-8 pt-2 pb-8 space-y-4">
//                   {navItems.map((item) => (
//                     <Link key={item.name} href={item.href} onClick={toggleMenu} className="block text-gray-300 hover:text-[#C04000] text-lg font-medium">
//                       {item.name}
//                     </Link>
//                   ))}
//                    <button className="mt-4 bg-[#C04000] text-white px-6 py-3 rounded-full font-semibold w-full">Get Started</button>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </motion.nav>

//         {/* --- Hero Section --- */}
//         <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-[#112B9D] to-[#0A192F]">
//             <div className="absolute inset-0 opacity-5">
//                 <Image src="/ppbg.png" alt="background pattern" layout="fill" objectFit="cover" className="scale-150 blur-lg"/>
//             </div>
//           <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
//             <div className="grid lg:grid-cols-2 gap-12 items-center">
//               <motion.div
//                 initial={{ opacity: 0, x: -50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8, ease: "easeOut" }}
//                 className="text-center lg:text-left"
//               >
//                 <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight tracking-tighter">
//                   Innovate. <span className="text-[#C04000]">Scale.</span> Succeed.
//                 </h1>
//                 <p className="mt-6 text-lg text-gray-300 max-w-lg mx-auto lg:mx-0">
//                   We deliver cutting-edge technology solutions designed for unparalleled performance, scalability, and business growth.
//                 </p>
//                 <motion.div className="mt-10" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                   <Link href="#products" className="inline-flex items-center gap-3 bg-[#C04000] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all duration-300">
//                     Explore Solutions <ArrowRight size={20} />
//                   </Link>
//                 </motion.div>
//               </motion.div>
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
//                 className="relative"
//               >
//                 <div className="aspect-w-4 aspect-h-3">
//                     <Image
//                       src="/pp1.jpg"
//                       alt="Tech Innovation"
//                       width={600}
//                       height={450}
//                       className="rounded-2xl shadow-2xl object-cover"
//                     />
//                 </div>
//                 <CircleIcon className="absolute -top-10 -left-10 w-24 h-24 text-[#C04000] opacity-30 -z-10" />
//                 <CircleIcon className="absolute -bottom-12 -right-12 w-32 h-32 text-white opacity-10 -z-10" />
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         {/* --- Products Section --- */}
//         <section id="products" className="py-24 bg-[#F9FAFB]">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <motion.div variants={FADE_IN} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
//               <h2 className="text-4xl font-extrabold text-[#112B9D] tracking-tight">Core Product Offerings</h2>
//               <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
//                 Discover our suite of products designed to empower your digital transformation.
//               </p>
//             </motion.div>
//             <motion.div variants={STAGGER_CONTAINER} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {[
//                 { title: "Scalable Apps", description: "Build lightning-fast, responsive web applications that grow with your business.", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085", icon: "🚀" },
//                 { title: "AI Integration", description: "Harness the power of AI to create intelligent, predictive, and user-centric experiences.", image: "/pp2.png", icon: "🧠" },
//                 { title: "E-Commerce", description: "Craft seamless, high-converting online stores that deliver exceptional customer journeys.", image: "https://images.unsplash.com/photo-1557821552-17105176677c", icon: "🛒" },
//               ].map((product, i) => (
//                 <motion.div
//                   key={i}
//                   variants={FADE_IN}
//                   className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 group"
//                 >
//                   <div className="relative h-56">
//                     <Image src={product.image} alt={product.title} layout="fill" objectFit="cover" className="group-hover:scale-105 transition-transform duration-300" />
//                   </div>
//                   <div className="p-8">
//                     <h3 className="text-2xl font-bold text-[#112B9D] mb-3">{product.icon} {product.title}</h3>
//                     <p className="text-gray-600 leading-relaxed">{product.description}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </section>

//         {/* --- Testimonials Section --- */}
//         <section id="community" className="py-24 bg-[#112B9D] text-white bg-cover bg-center" style={{backgroundImage: "linear-gradient(rgba(17, 43, 157, 0.95), rgba(17, 43, 157, 0.95)), url('/ppbg.png')"}}>
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <motion.div variants={FADE_IN} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
//                     <h2 className="text-4xl font-extrabold tracking-tight">What Our Community Says</h2>
//                     <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">We're proud to have earned the trust of industry leaders.</p>
//                 </motion.div>
//                 <motion.div variants={STAGGER_CONTAINER} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//                     {[
//                         { name: "Alex Smith", role: "Lead Developer, InnovateCo", quote: "Pijina Poojary transformed our app development. The speed and reliability are unmatched. It's the robust core our tech stack needed.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" },
//                         { name: "Sarah Johnson", role: "Product Manager, ScaleUp", quote: "The AI integration tools are a complete game-changer. Our user engagement metrics have never been better. Truly remarkable.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330" },
//                         { name: "Michael Chen", role: "E-Commerce Owner, ShopFast", quote: "Our sales and conversion rates skyrocketed after migrating to their e-commerce platform. It’s seamless, fast, and incredibly powerful.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" },
//                     ].map((testimonial, i) => (
//                         <motion.div key={i} variants={FADE_IN} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 shadow-lg">
//                             <p className="text-gray-200 text-lg italic mb-6">"{testimonial.quote}"</p>
//                             <div className="flex items-center gap-4">
//                                 <Image src={testimonial.image} alt={testimonial.name} width={50} height={50} className="rounded-full"/>
//                                 <div>
//                                     <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
//                                     <p className="text-[#C04000] font-medium">{testimonial.role}</p>
//                                 </div>
//                             </div>
//                         </motion.div>
//                     ))}
//                 </motion.div>
//             </div>
//         </section>

//         {/* --- CTA Banner --- */}
//         <section id="ecosystem" className="py-24 bg-[#F9FAFB]">
//           <motion.div
//             variants={FADE_IN}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
//           >
//             <h2 className="text-4xl font-extrabold text-[#112B9D] tracking-tight">Join the Pijina Poojary Ecosystem</h2>
//             <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
//               Become part of a thriving community of innovators. Unlock exclusive tools, resources, and support to accelerate your next big idea.
//             </p>
//             <motion.div className="mt-10" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <Link href="#" className="inline-block bg-gradient-to-r from-[#C04000] to-[#e05a20] text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
//                 Join the Movement
//               </Link>
//             </motion.div>
//           </motion.div>
//         </section>

//         {/* --- Footer --- */}
//         <footer id="about" className="bg-[#0A192F] text-gray-400 py-16">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//               <div className="md:col-span-1 mb-6 md:mb-0">
//                   <div className="flex items-center gap-3 mb-4">
//                       <Image src="/ppbg.png" alt="Pijina Poojary Logo" width={50} height={50} className="rounded-full" />
//                       <span className="text-lg font-bold text-white">Pijina Poojary</span>
//                   </div>
//                   <p className="text-sm leading-relaxed">Empowering the next wave of digital innovation.</p>
//               </div>
//               <div>
//                   <h4 className="text-md font-semibold text-white tracking-wider uppercase mb-4">Quick Links</h4>
//                   <ul className="space-y-3">
//                       {navItems.map(item => (
//                           <li key={item.name}>
//                               <Link href={item.href} className="hover:text-[#C04000] transition-colors duration-300 text-sm">{item.name}</Link>
//                           </li>
//                       ))}
//                   </ul>
//               </div>
//               <div>
//                   <h4 className="text-md font-semibold text-white tracking-wider uppercase mb-4">Contact</h4>
//                   <ul className="space-y-3 text-sm">
//                       <li><a href="mailto:support@pijinapoojary.com" className="hover:text-[#C04000] transition-colors duration-300">support@pijinapoojary.com</a></li>
//                       <li><a href="tel:+11234567890" className="hover:text-[#C04000] transition-colors duration-300">(123) 456-7890</a></li>
//                   </ul>
//               </div>
//               <div>
//                   <h4 className="text-md font-semibold text-white tracking-wider uppercase mb-4">Follow Us</h4>
//                   <div className="flex space-x-4">
//                       <a href="#" className="hover:text-[#C04000] transition-colors duration-300"><Twitter size={20} /></a>
//                       <a href="#" className="hover:text-[#C04000] transition-colors duration-300"><Linkedin size={20} /></a>
//                       <a href="#" className="hover:text-[#C04000] transition-colors duration-300"><Github size={20} /></a>
//                   </div>
//               </div>
//             </div>
//             <div className="mt-12 border-t border-gray-800 pt-8 text-center">
//               <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Pijina Poojary Solutions. All Rights Reserved.</p>
//             </div>
//           </div>
//         </footer>
//       </div>
//     </>
//   );
// }

// export default Home;



"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Twitter, Linkedin, Github, ChevronDown, CheckCircle2, Cloud, Zap, BarChart2, ShieldCheck, LifeBuoy } from "lucide-react";

// --- Navigation Items ---
const navItems = [
  { name: "Products", href: "#products" },
  { name: "Features", href: "#features" },
  { name: "Community", href: "#community" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
  { name: "About", href: "#about" },
];

// --- SVG Icon for Visual Flair ---
const CircleIcon = ({ className }: { className?: string }) => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="50" cy="50" r="50" fill="currentColor" />
  </svg>
);

// --- FAQ Item Component ---
const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <motion.div
            className="border-b border-gray-200/20 py-6"
            variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
            }}
        >
            <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center text-left">
                <span className="text-lg font-medium text-white">{question}</span>
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className={`w-6 h-6 transition-colors ${isOpen ? 'text-[#C04000]' : 'text-white'}`} />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="text-gray-300 leading-relaxed"
                    >
                        {answer}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};


// --- Main Home Component ---
function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [hasScrolled, setHasScrolled] = useState(false);

  // --- Effect for Navbar style change on scroll ---
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.slice(1));
      let currentSection = "";
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section && window.scrollY >= section.offsetTop - 150) {
          currentSection = sectionId;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // --- Animation Variants ---
  const FADE_IN = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const STAGGER_CONTAINER = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <>
      <Head>
        <title>Pijina Poojary | Innovative Tech Solutions</title>
        <meta name="description" content="Pijina Poojary Solutions - Driving innovation and scale with cutting-edge technology." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" />
      </Head>

      {/* --- Main Container --- */}
      <div className="bg-[#0A192F] font-inter">
        {/* --- Navbar --- */}
        <motion.nav
          className={`fixed w-full z-50 transition-all duration-300 ${
            hasScrolled ? "bg-[#112B9D] shadow-lg" : "bg-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">
              <Link href="#" className="flex items-center gap-2">
                <Image
                  src="/ppbg.png"
                  alt="Pijina Poojary Logo"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <span className="text-xl font-bold text-white tracking-wide">Pijina Poojary</span>
              </Link>
              <div className="hidden lg:flex items-center space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${
                      activeSection === item.href.slice(1)
                        ? "text-[#C04000]"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.name}
                    {activeSection === item.href.slice(1) && (
                      <motion.div
                        className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#C04000]"
                        layoutId="underline"
                      />
                    )}
                  </Link>
                ))}
              </div>
              <div className="hidden lg:flex">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#C04000] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-opacity-90 transition-all duration-300 shadow-md"
                >
                  Get Started
                </motion.button>
              </div>
              <div className="lg:hidden">
                <button onClick={toggleMenu} className="text-white">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden bg-[#112B9D]"
              >
                <div className="px-8 pt-2 pb-8 space-y-4">
                  {navItems.map((item) => (
                    <Link key={item.name} href={item.href} onClick={toggleMenu} className="block text-gray-300 hover:text-[#C04000] text-lg font-medium">
                      {item.name}
                    </Link>
                  ))}
                   <button className="mt-4 bg-[#C04000] text-white px-6 py-3 rounded-full font-semibold w-full">Get Started</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>

        {/* --- Hero Section --- */}
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-[#112B9D] to-[#0A192F]">
            <div className="absolute inset-0 opacity-5">
                <Image src="/ppbg.png" alt="background pattern" layout="fill" objectFit="cover" className="scale-150 blur-lg"/>
            </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center lg:text-left"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight tracking-tighter">
                  Innovate. <span className="text-[#C04000]">Scale.</span> Succeed.
                </h1>
                <p className="mt-6 text-lg text-gray-300 max-w-lg mx-auto lg:mx-0">
                  We deliver cutting-edge technology solutions designed for unparalleled performance, scalability, and business growth.
                </p>
                <motion.div className="mt-10" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="#products" className="inline-flex items-center gap-3 bg-[#C04000] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all duration-300">
                    Explore Solutions <ArrowRight size={20} />
                  </Link>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="relative"
              >
                <div className="aspect-w-4 aspect-h-3">
                    <Image
                      src="/pp1.jpg"
                      alt="Tech Innovation"
                      width={600}
                      height={450}
                      className="rounded-2xl shadow-2xl object-cover"
                    />
                </div>
                <CircleIcon className="absolute -top-10 -left-10 w-24 h-24 text-[#C04000] opacity-30 -z-10" />
                <CircleIcon className="absolute -bottom-12 -right-12 w-32 h-32 text-white opacity-10 -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- Technology Showcase --- */}
        <section className="py-16 bg-[#0A192F]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-gray-400 font-medium tracking-widest uppercase mb-8">Powered by World-Class Technology</p>
                <motion.div
                    variants={STAGGER_CONTAINER}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex justify-center items-center flex-wrap gap-x-12 gap-y-6"
                >
                    {["Next.js", "React", "Vercel", "AWS", "TailwindCSS", "Framer Motion"].map((tech) => (
                        <motion.p key={tech} variants={FADE_IN} className="text-gray-500 text-2xl font-semibold">{tech}</motion.p>
                    ))}
                </motion.div>
            </div>
        </section>


        {/* --- Products Section --- */}
        <section id="products" className="py-24 bg-[#F9FAFB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={FADE_IN} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-[#112B9D] tracking-tight">Core Product Offerings</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Discover our suite of products designed to empower your digital transformation.
              </p>
            </motion.div>
            <motion.div variants={STAGGER_CONTAINER} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Scalable Apps", description: "Build lightning-fast, responsive web applications that grow with your business.", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085", icon: "🚀" },
                { title: "AI Integration", description: "Harness the power of AI to create intelligent, predictive, and user-centric experiences.", image: "/pp2.png", icon: "🧠" },
                { title: "E-Commerce", description: "Craft seamless, high-converting online stores that deliver exceptional customer journeys.", image: "https://images.unsplash.com/photo-1557821552-17105176677c", icon: "🛒" },
              ].map((product, i) => (
                <motion.div
                  key={i}
                  variants={FADE_IN}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 group"
                >
                  <div className="relative h-56">
                    <Image src={product.image} alt={product.title} layout="fill" objectFit="cover" className="group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#112B9D] mb-3">{product.icon} {product.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{product.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- Features Section --- */}
        <section id="features" className="py-24 bg-[#0A192F] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div variants={FADE_IN} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold tracking-tight">Everything You Need to Succeed</h2>
                    <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                        Our platform is packed with features to help you build, deploy, and scale.
                    </p>
                </motion.div>
                <motion.div
                    variants={STAGGER_CONTAINER}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                    {[
                        { icon: <Zap className="w-8 h-8 text-[#C04000]" />, title: "Blazing Fast Speed", description: "Optimized for performance with global edge network deployment." },
                        { icon: <Cloud className="w-8 h-8 text-[#C04000]" />, title: "Auto-Scaling", description: "Infrastructure that scales automatically to handle any traffic spike." },
                        { icon: <BarChart2 className="w-8 h-8 text-[#C04000]" />, title: "Real-time Analytics", description: "Gain actionable insights into your application's performance and usage." },
                        { icon: <ShieldCheck className="w-8 h-8 text-[#C04000]" />, title: "Enterprise-Grade Security", description: "Protect your data with robust security measures and compliance." },
                        { icon: <LifeBuoy className="w-8 h-8 text-[#C04000]" />, title: "24/7 Expert Support", description: "Our dedicated team is here to help you around the clock." },
                        { icon: <CheckCircle2 className="w-8 h-8 text-[#C04000]" />, title: "Seamless Integrations", description: "Connect easily with your favorite tools and third-party services." },
                    ].map((feature, i) => (
                        <motion.div key={i} variants={FADE_IN} className="flex items-start space-x-4">
                            <div className="flex-shrink-0 bg-white/10 p-4 rounded-full">{feature.icon}</div>
                            <div>
                                <h3 className="text-xl font-bold">{feature.title}</h3>
                                <p className="mt-1 text-gray-400">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>

        {/* --- Testimonials Section --- */}
        <section id="community" className="py-24 bg-[#112B9D] text-white bg-cover bg-center" style={{backgroundImage: "linear-gradient(rgba(17, 43, 157, 0.95), rgba(17, 43, 157, 0.95)), url('/ppbg.png')"}}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div variants={FADE_IN} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold tracking-tight">Loved by Teams Worldwide</h2>
                    <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">We're proud to have earned the trust of industry leaders.</p>
                </motion.div>
                <motion.div variants={STAGGER_CONTAINER} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {[
                        { name: "Alex Smith", role: "Lead Developer, InnovateCo", quote: "Pijina Poojary transformed our app development. The speed and reliability are unmatched. It's the robust core our tech stack needed.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" },
                        { name: "Sarah Johnson", role: "Product Manager, ScaleUp", quote: "The AI integration tools are a complete game-changer. Our user engagement metrics have never been better. Truly remarkable.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330" },
                        { name: "Michael Chen", role: "E-Commerce Owner, ShopFast", quote: "Our sales and conversion rates skyrocketed after migrating to their e-commerce platform. It’s seamless, fast, and incredibly powerful.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" },
                    ].map((testimonial, i) => (
                        <motion.div key={i} variants={FADE_IN} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 shadow-lg flex flex-col">
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => <span key={i} className="text-[#C04000]">★</span>)}
                            </div>
                            <p className="text-gray-200 text-lg italic mb-6 flex-grow">"{testimonial.quote}"</p>
                            <div className="flex items-center gap-4 mt-auto">
                                <Image src={testimonial.image} alt={testimonial.name} width={50} height={50} className="rounded-full"/>
                                <div>
                                    <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                                    <p className="text-gray-300 font-medium">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>

        {/* --- Pricing Section --- */}
        <section id="pricing" className="py-24 bg-[#F9FAFB]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div variants={FADE_IN} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-[#112B9D] tracking-tight">Flexible Plans for Teams of All Sizes</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Choose a plan that fits your needs. All plans come with our core features.</p>
                </motion.div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                    {/* Starter Plan */}
                    <motion.div variants={FADE_IN} className="border border-gray-200 rounded-xl p-8 flex flex-col">
                        <h3 className="text-2xl font-bold text-[#112B9D]">Starter</h3>
                        <p className="text-gray-500 mt-2">For individuals and small projects.</p>
                        <p className="text-5xl font-extrabold text-[#112B9D] mt-6">$49<span className="text-lg font-medium text-gray-500">/mo</span></p>
                        <ul className="space-y-4 mt-8 text-gray-600 flex-grow">
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-500" />1 Project</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-500" />10 GB Storage</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-500" />Basic Analytics</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-500" />Community Support</li>
                        </ul>
                        <button className="w-full mt-8 py-3 px-6 border-2 border-[#112B9D] text-[#112B9D] rounded-full font-semibold hover:bg-[#112B9D] hover:text-white transition-all duration-300">Choose Plan</button>
                    </motion.div>
                    {/* Pro Plan - Highlighted */}
                    <motion.div
                        variants={FADE_IN}
                        className="border-2 border-[#C04000] rounded-xl p-8 flex flex-col relative shadow-2xl"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-[#C04000] text-white px-4 py-1 rounded-full text-sm font-bold">Most Popular</div>
                        <h3 className="text-2xl font-bold text-[#112B9D]">Pro</h3>
                        <p className="text-gray-500 mt-2">For growing businesses and professional teams.</p>
                        <p className="text-5xl font-extrabold text-[#112B9D] mt-6">$99<span className="text-lg font-medium text-gray-500">/mo</span></p>
                        <ul className="space-y-4 mt-8 text-gray-600 flex-grow">
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-500" />10 Projects</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-500" />100 GB Storage</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-500" />Advanced Analytics</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-500" />Priority Email Support</li>
                        </ul>
                        <button className="w-full mt-8 py-3 px-6 bg-[#C04000] text-white rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300">Choose Plan</button>
                    </motion.div>
                    {/* Enterprise Plan */}
                    <motion.div variants={FADE_IN} className="border border-gray-200 rounded-xl p-8 flex flex-col">
                        <h3 className="text-2xl font-bold text-[#112B9D]">Enterprise</h3>
                        <p className="text-gray-500 mt-2">For large-scale, mission-critical applications.</p>
                        <p className="text-5xl font-extrabold text-[#112B9D] mt-6">Custom</p>
                        <ul className="space-y-4 mt-8 text-gray-600 flex-grow">
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-500" />Unlimited Projects</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-500" />Custom Storage</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-500" />Full Enterprise Suite</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-500" />24/7 Dedicated Support</li>
                        </ul>
                        <button className="w-full mt-8 py-3 px-6 border-2 border-[#112B9D] text-[#112B9D] rounded-full font-semibold hover:bg-[#112B9D] hover:text-white transition-all duration-300">Contact Sales</button>
                    </motion.div>
                </div>
            </div>
        </section>

        {/* --- FAQ Section --- */}
        <section id="faq" className="py-24 bg-[#0A192F]">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div variants={FADE_IN} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-white tracking-tight">Frequently Asked Questions</h2>
                    <p className="mt-4 text-lg text-gray-300">Have questions? We've got answers.</p>
                </motion.div>
                <motion.div variants={STAGGER_CONTAINER} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <FaqItem
                        question="Can I upgrade or downgrade my plan later?"
                        answer="Absolutely! You can change your plan at any time. When you upgrade, you'll pay a prorated amount for the remainder of the month. If you downgrade, the new rate will be reflected in your next billing cycle."
                    />
                    <FaqItem
                        question="What kind of support is included?"
                        answer="All our plans come with access to our comprehensive documentation and community forums. The Pro plan includes priority email support, and the Enterprise plan features a dedicated account manager and 24/7 phone support."
                    />
                    <FaqItem
                        question="Is there a free trial available?"
                        answer="We don't offer a traditional free trial, but our Starter plan is a great way to test our platform's core features on a smaller project. We also offer a 14-day money-back guarantee on all plans."
                    />
                     <FaqItem
                        question="How is my data secured?"
                        answer="Data security is our highest priority. We use industry-standard encryption for data at rest and in transit. Our infrastructure is hosted on AWS and complies with major security standards like SOC 2."
                    />
                </motion.div>
            </div>
        </section>


        {/* --- CTA Banner --- */}
        <section id="ecosystem" className="py-24 bg-gradient-to-r from-[#C04000] to-[#e05a20]">
          <motion.div
            variants={FADE_IN}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            <h2 className="text-4xl font-extrabold text-white tracking-tight">Ready to Build Your Future?</h2>
            <p className="mt-5 text-lg text-white/90 max-w-3xl mx-auto">
              Join a thriving community of innovators. Unlock exclusive tools, resources, and support to accelerate your next big idea today.
            </p>
            <motion.div className="mt-10" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="#" className="inline-block bg-white text-[#112B9D] px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-100 transition-all duration-300">
                Start Your Project Now
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* --- Footer --- */}
        <footer id="about" className="bg-[#0A192F] text-gray-400 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-1 mb-6 md:mb-0">
                  <div className="flex items-center gap-3 mb-4">
                      <Image src="/ppbg.png" alt="Pijina Poojary Logo" width={50} height={50} className="rounded-full" />
                      <span className="text-lg font-bold text-white">Pijina Poojary</span>
                  </div>
                  <p className="text-sm leading-relaxed">Empowering the next wave of digital innovation.</p>
              </div>
              <div>
                  <h4 className="text-md font-semibold text-white tracking-wider uppercase mb-4">Quick Links</h4>
                  <ul className="space-y-3">
                      {navItems.map(item => (
                          <li key={item.name}>
                              <Link href={item.href} className="hover:text-[#C04000] transition-colors duration-300 text-sm">{item.name}</Link>
                          </li>
                      ))}
                  </ul>
              </div>
              <div>
                  <h4 className="text-md font-semibold text-white tracking-wider uppercase mb-4">Contact</h4>
                  <ul className="space-y-3 text-sm">
                      <li><a href="mailto:support@pijinapoojary.com" className="hover:text-[#C04000] transition-colors duration-300">support@pijinapoojary.com</a></li>
                      <li><a href="tel:+11234567890" className="hover:text-[#C04000] transition-colors duration-300">(123) 456-7890</a></li>
                  </ul>
              </div>
              <div>
                  <h4 className="text-md font-semibold text-white tracking-wider uppercase mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                      <a href="#" className="hover:text-[#C04000] transition-colors duration-300"><Twitter size={20} /></a>
                      <a href="#" className="hover:text-[#C04000] transition-colors duration-300"><Linkedin size={20} /></a>
                      <a href="#" className="hover:text-[#C04000] transition-colors duration-300"><Github size={20} /></a>
                  </div>
              </div>
            </div>
            <div className="mt-12 border-t border-gray-800 pt-8 text-center">
              <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Pijina Poojary Solutions. All Rights Reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Home;