// "use client"
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import Head from 'next/head';
// import { motion, AnimatePresence } from 'framer-motion';

// const navItems = [
//   { name: 'Products', href: '#products' },
//   { name: 'Community', href: '#community' },
//   { name: 'Ecosystem', href: '#ecosystem' },
//   { name: 'Support', href: '#support' },
//   { name: 'Resources', href: '#resources' },
//   { name: 'About us', href: '#about' },
// ];

// function Home() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('');

//   // Handle scroll to detect active section
//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = navItems.map((item) => item.href.slice(1));
//       const scrollPosition = window.scrollY + 100; // Offset for navbar
//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
//           setActiveSection(section);
//           break;
//         }
//       }
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   const menuVariants = {
//     open: { opacity: 1, height: 'auto', transition: { duration: 0.4, ease: 'easeInOut' } },
//     closed: { opacity: 0, height: 0, transition: { duration: 0.4, ease: 'easeInOut' } },
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.2, duration: 0.6 } }),
//   };

//   return (
//     <>
//       <Head>
//         <title>Pijina Poojary Solutions</title>
//         <meta name="description" content="Innovative solutions built with Next.js" />
//         <link rel="icon" href="/favicon.ico" />
//         <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" />
//       </Head>

//       {/* Navbar */}
//       <motion.nav
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.6, ease: 'easeOut' }}
//         className="bg-[#112B9D] text-white fixed w-full z-20 shadow-lg"
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16 items-center">
//             <div className="flex items-center">
//               <Image
//                 src="/pp.jpeg"
//                 alt="Pijina Poojary Logo"
//                 width={40}
//                 height={40}
//                 className="rounded-full mr-3 border-2 border-[#C04000]"
//               />
//               <span className="text-2xl font-bold font-inter">Pijina Poojary</span>
//             </div>
//             <div className="hidden lg:flex items-center space-x-6">
//               {navItems.map((item) => (
//                 <motion.div
//                   key={item.name}
//                   whileHover={{ scale: 1.1, color: '#C04000' }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <Link
//                     href={item.href}
//                     scroll={true}
//                     className={`font-inter font-medium text-sm uppercase tracking-wide transition-colors duration-200 ${
//                       activeSection === item.href.slice(1) ? 'text-[#C04000] border-b-2 border-[#C04000]' : 'text-white hover:text-[#C04000]'
//                     }`}
//                   >
//                     {item.name}
//                   </Link>
//                 </motion.div>
//               ))}
//             </div>
//             <div className="hidden lg:flex items-center">
//               <motion.button
//                 whileHover={{ scale: 1.05, backgroundColor: '#C04000' }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-[#C04000] text-white px-6 py-2 rounded-full font-inter font-medium shadow-md"
//               >
//                 Get Started
//               </motion.button>
//             </div>
//             <div className="lg:hidden flex items-center">
//               <button onClick={toggleMenu} className="text-white focus:outline-none">
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//         <AnimatePresence>
//           {isMenuOpen && (
//             <motion.div
//               // variants={menuVariants}
//               initial="closed"
//               animate="open"
//               exit="closed"
//               className="lg:hidden bg-[#112B9D] shadow-md"
//             >
//               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//                 {navItems.map((item) => (
//                   <Link
//                     key={item.name}
//                     href={item.href}
//                     scroll={true}
//                     className={`block py-2 font-inter font-medium text-white hover:text-[#C04000] transition-colors duration-200 ${
//                       activeSection === item.href.slice(1) ? 'text-[#C04000]' : ''
//                     }`}
//                     onClick={toggleMenu}
//                   >
//                     {item.name}
//                   </Link>
//                 ))}
//                 <button
//                   className="mt-4 bg-[#C04000] text-white px-6 py-2 rounded-full font-inter font-medium w-full"
//                   onClick={toggleMenu}
//                 >
//                   Get Started
//                 </button>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.nav>

//       {/* Hero Section */}
//       <section className="pt-32 pb-24 bg-gradient-to-br from-[#112B9D] to-[#C04000] text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, ease: 'easeOut' }}
//             className="lg:w-1/2 text-center lg:text-left"
//           >
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-inter leading-tight mb-6">
//               Innovate Scale Succeed.
//             </h1>
//             <p className="text-lg font-inter mb-8 max-w-lg mx-auto lg:mx-0">
//               Pijina Poojary Solutions delivers cutting-edge technology for unparalleled performance and growth.
//             </p>
//             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <Link
//                 href="#products"
//                 scroll={true}
//                 className="bg-[#C04000] text-white px-8 py-3 rounded-full font-inter font-medium shadow-lg hover:bg-[#112B9D] transition-all duration-300"
//               >
//                 Discover Now
//               </Link>
//             </motion.div>
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="lg:w-1/2 mt-12 lg:mt-0"
//           >
//             <Image
//               // src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
//               src="/pp1.jpg"
//               alt="Tech Innovation"
//               width={600}
//               height={400}
//               className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
//             />
//           </motion.div>
//         </div>
//       </section>

//       {/* Products Section */}
//       <section id="products" className="py-24 bg-[#F9FAFB]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.h2
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-4xl font-extrabold text-[#112B9D] text-center font-inter mb-16"
//           >
//             Our Products
//           </motion.h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 title: 'Scalable Apps',
//                 description: 'Build lightning-fast, responsive web applications effortlessly.',
//                 image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
//               },
//               {
//                 title: 'AI Integration',
//                 description: 'Harness AI to create intelligent, user-centric experiences.',
//                 image: '/pp2.png',
//               },
//               {
//                 title: 'E-Commerce',
//                 description: 'Craft seamless, high-converting online stores.',
//                 image: 'https://images.unsplash.com/photo-1557821552-17105176677c',
//               },
//             ].map((x, i) => (
//               <motion.div
//                 key={i}
//                 custom={i}
//                 variants={cardVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(17,43,157,0.2)' }}
//                 className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-300"
//               >
//                 <Image
//                   src={x.image}
//                   alt={x.title}
//                   width={300}
//                   height={200}
//                   className="rounded-xl mb-4 object-cover"
//                 />
//                 <h3 className="text-xl font-semibold text-[#112B9D] mb-2 font-inter">{x.title}</h3>
//                 <p className="text-gray-600 font-inter">{x.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section id="community" className="py-24 bg-[#112B9D] text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.h2
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-4xl font-extrabold text-center font-inter mb-16"
//           >
//             What Our Community Says
//           </motion.h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 name: 'Alex Smith',
//                 role: 'Developer',
//                 quote: 'Pijina Poojary transformed our app development process with its speed and reliability.',
//                 image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
//               },
//               {
//                 name: 'Sarah Johnson',
//                 role: 'Product Manager',
//                 quote: 'The AI integration tools are a game-changer for user engagement.',
//                 image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
//               },
//               {
//                 name: 'Michael Chen',
//                 role: 'E-Commerce Owner',
//                 quote: 'Our sales skyrocketed after switching to Pijina Poojary’s e-commerce platform.',
//                 image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
//               },
//             ].map((x, i) => (
//               <motion.div
//                 key={i}
//                 custom={i}
//                 variants={cardVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(192,64,0,0.2)' }}
//                 className="bg-[#1F2937] p-6 rounded-2xl shadow-lg"
//               >
//                 <Image
//                   src={x.image}
//                   alt={x.name}
//                   width={80}
//                   height={80}
//                   className="rounded-full mb-4 mx-auto"
//                 />
//                 <p className="text-gray-200 font-inter mb-4 italic">"{x.quote}"</p>
//                 <h4 className="text-lg font-semibold text-[#C04000] font-inter">{x.name}</h4>
//                 <p className="text-gray-400 font-inter">{x.role}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Banner */}
//       <section id="ecosystem" className="py-20 bg-gradient-to-r from-[#C04000] to-[#112B9D]">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.7 }}
//           className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
//         >
//           <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-inter mb-6">
//             Join the Pijina Poojary Ecosystem
//           </h2>
//           <p className="text-lg text-gray-200 font-inter mb-8 max-w-2xl mx-auto">
//             Be part of a thriving community of innovators and unlock exclusive tools and resources.
//           </p>
//           <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//             <Link
//               href="#support"
//               scroll={true}
//               className="bg-white text-[#112B9D] px-8 py-3 rounded-full font-inter font-medium shadow-lg hover:bg-gray-100 transition-all duration-300"
//             >
//               Join Now
//             </Link>
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* Footer */}
//       <footer id="about" className="bg-[#1F2937] text-white py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             <div>
//               <div className="flex items-center mb-4">
//                 <Image
//                   src="/pp.jpeg"
//                   alt="Pijina Poojary Logo"
//                   width={40}
//                   height={40}
//                   className="rounded-full mr-3 border-2 border-[#C04000]"
//                 />
//                 <span className="text-xl font-bold font-inter">Pijina Poojary</span>
//               </div>
//               <p className="text-gray-400 font-inter">Empowering innovation with Next.js.</p>
//             </div>
//             <div>
//               <h4 className="text-lg font-semibold text-[#C04000] mb-4 font-inter">Quick Links</h4>
//               <ul className="space-y-2">
//                 {navItems.map((item) => (
//                   <motion.li
//                     key={item.name}
//                     whileHover={{ x: 5, color: '#C04000' }}
//                     className="text-gray-400 font-inter"
//                   >
//                     <Link href={item.href} scroll={true}>
//                       {item.name}
//                     </Link>
//                   </motion.li>
//                 ))}
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-lg font-semibold text-[#C04000] mb-4 font-inter">Contact Us</h4>
//               <p className="text-gray-400 font-inter">Email: support@Pijina Poojary.com</p>
//               <p className="text-gray-400 font-inter">Phone: (123) 456-7890</p>
//             </div>
//             <div>
//               <h4 className="text-lg font-semibold text-[#C04000] mb-4 font-inter">Follow Us</h4>
//               <div className="flex space-x-4">
//                 {['Twitter', 'LinkedIn', 'GitHub'].map((platform) => (
//                   <motion.a
//                     key={platform}
//                     href="#"
//                     whileHover={{ scale: 1.2, color: '#C04000' }}
//                     className="text-gray-400 font-inter"
//                   >
//                     {platform}
//                   </motion.a>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <p className="text-center text-gray-400 mt-12 font-inter">© 2025 Pijina Poojary Solutions. All rights reserved.</p>
//         </div>
//       </footer>
//     </>
//   );
// }

// export default Home;

// pages/index.tsx


// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import Head from "next/head";
// import { motion, AnimatePresence } from "framer-motion";

// const navItems = [
//   { name: "Products", href: "#products" },
//   { name: "Community", href: "#community" },
//   { name: "Ecosystem", href: "#ecosystem" },
//   { name: "Support", href: "#support" },
//   { name: "Resources", href: "#resources" },
//   { name: "About us", href: "#about" },
// ];

// function Home() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("");

//   // Handle scroll to detect active section
//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = navItems.map((item) => item.href.slice(1));
//       const scrollPosition = window.scrollY + 100;
//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (
//           element &&
//           scrollPosition >= element.offsetTop &&
//           scrollPosition < element.offsetTop + element.offsetHeight
//         ) {
//           setActiveSection(section);
//           break;
//         }
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   const menuVariants = {
//     open: { opacity: 1, height: "auto", transition: { duration: 0.3, ease: "easeInOut" } },
//     closed: { opacity: 0, height: 0, transition: { duration: 0.3, ease: "easeInOut" } },
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: (i: number) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
//     }),
//   };

//   return (
//     <>
//       <Head>
//         <title>Pijina Poojary Solutions</title>
//         <meta name="description" content="Innovative solutions built with Next.js" />
//         <link rel="icon" href="/favicon.ico" />
//         <link
//           rel="stylesheet"
//           href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
//         />
//       </Head>

//       {/* Navbar */}
//       <motion.nav
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.5, ease: "easeOut" }}
//         className="bg-[#112B9D] text-white fixed w-full z-20 shadow-md"
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16 items-center">
//             <div className="flex items-center">
//               <Image
//                 src="/ppbg.png"
//                 alt="Pijina Poojary Logo"
//                 width={80}
//                 height={80}
//                 className=" mr-0 "
//                 // className="mr-3"
//               />
//               <span className="text-xl font-semibold font-inter">Pijina Poojary</span>
//             </div>
//             <div className="hidden lg:flex items-center space-x-8">
//               {navItems.map((item) => (
//                 <motion.div key={item.name} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                   <Link
//                     href={item.href}
//                     scroll={true}
//                     className={`font-inter font-medium text-sm uppercase tracking-wider transition-colors duration-200 ${
//                       activeSection === item.href.slice(1)
//                         ? "text-[#C04000] border-b-2 border-[#C04000]"
//                         : "text-white hover:text-[#C04000]"
//                     }`}
//                   >
//                     {item.name}
//                   </Link>
//                 </motion.div>
//               ))}
//             </div>
//             <div className="hidden lg:flex items-center">
//               <motion.button
//                 whileHover={{ scale: 1.05, backgroundColor: "#C04000" }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-transparent border-2 border-[#C04000] text-[#C04000] px-6 py-2 rounded-md font-inter font-medium hover:text-white transition-all duration-200"
//               >
//                 Get Started
//               </motion.button>
//             </div>
//             <div className="lg:hidden flex items-center">
//               <button onClick={toggleMenu} className="text-white focus:outline-none">
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//         <AnimatePresence>
//           {isMenuOpen && (
//             <motion.div
//               variants={menuVariants}
//               initial="closed"
//               animate="open"
//               exit="closed"
//               className="lg:hidden bg-[#112B9D] shadow-md"
//             >
//               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-2">
//                 {navItems.map((item) => (
//                   <Link
//                     key={item.name}
//                     href={item.href}
//                     scroll={true}
//                     className={`block py-2 font-inter font-medium text-white hover:text-[#C04000] transition-colors duration-200 ${
//                       activeSection === item.href.slice(1) ? "text-[#C04000]" : ""
//                     }`}
//                     onClick={toggleMenu}
//                   >
//                     {item.name}
//                   </Link>
//                 ))}
//                 <button
//                   className="mt-4 bg-[#C04000] text-white px-6 py-2 rounded-md font-inter font-medium w-full hover:bg-[#a03600] transition-all duration-200"
//                   onClick={toggleMenu}
//                 >
//                   Get Started
//                 </button>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.nav>

//       {/* Hero Section */}
//       <section className="pt-24 pb-16 bg-gradient-to-br from-[#112B9D] to-[#C04000] text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7, ease: "easeOut" }}
//             className="lg:w-1/2 text-center lg:text-left"
//           >
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-inter leading-tight mb-6 tracking-tight">
//               Innovate. Scale. Succeed.
//             </h1>
//             <p className="text-lg font-inter mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed">
//               Pijina Poojary Solutions delivers cutting-edge technology for unparalleled performance and
//               growth.
//             </p>
//             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <Link
//                 href="#products"
//                 scroll={true}
//                 className="bg-[#C04000] text-white px-8 py-3 rounded-md font-inter font-medium shadow-md hover:bg-[#a03600] transition-all duration-200"
//               >
//                 Discover Now
//               </Link>
//             </motion.div>
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
//             className="lg:w-1/2 mt-8 lg:mt-0"
//           >
//             <Image
//               src="/pp1.jpg"
//               alt="Tech Innovation"
//               width={600}
//               height={400}
//               className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 object-cover"
//             />
//           </motion.div>
//         </div>
//       </section>

//       {/* Products Section */}
//       <section id="products" className="py-20 bg-[#F9FAFB]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, ease: "easeOut" }}
//             className="text-4xl font-bold text-[#112B9D] text-center font-inter mb-12 tracking-tight"
//           >
//             Our Products
//           </motion.h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "Scalable Apps",
//                 description: "Build lightning-fast, responsive web applications effortlessly.",
//                 image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
//               },
//               {
//                 title: "AI Integration",
//                 description: "Harness AI to create intelligent, user-centric experiences.",
//                 image: "/pp2.png",
//               },
//               {
//                 title: "E-Commerce",
//                 description: "Craft seamless, high-converting online stores.",
//                 image: "https://images.unsplash.com/photo-1557821552-17105176677c",
//               },
//             ].map((x, i) => (
//               <motion.div
//                 key={i}
//                 custom={i}
//                 variants={cardVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(17,43,157,0.15)" }}
//                 className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 border border-gray-100"
//               >
//                 <Image
//                   src={x.image}
//                   alt={x.title}
//                   width={300}
//                   height={200}
//                   className="rounded-md mb-4 object-cover"
//                 />
//                 <h3 className="text-xl font-semibold text-[#112B9D] mb-2 font-inter">{x.title}</h3>
//                 <p className="text-gray-600 font-inter leading-relaxed">{x.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section id="community" className="py-20 bg-[#112B9D] text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, ease: "easeOut" }}
//             className="text-4xl font-bold text-center font-inter mb-12 tracking-tight"
//           >
//             What Our Community Says
//           </motion.h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 name: "Alex Smith",
//                 role: "Developer",
//                 quote: "Pijina Poojary transformed our app development process with its speed and reliability.",
//                 image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
//               },
//               {
//                 name: "Sarah Johnson",
//                 role: "Product Manager",
//                 quote: "The AI integration tools are a game-changer for user engagement.",
//                 image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
//               },
//               {
//                 name: "Michael Chen",
//                 role: "E-Commerce Owner",
//                 quote: "Our sales skyrocketed after switching to Pijina Poojary’s e-commerce platform.",
//                 image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
//               },
//             ].map((x, i) => (
//               <motion.div
//                 key={i}
//                 custom={i}
//                 variants={cardVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(192,64,0,0.15)" }}
//                 className="bg-[#1F2937] p-6 rounded-lg shadow-md border border-gray-700"
//               >
//                 <Image
//                   src={x.image}
//                   alt={x.name}
//                   width={60}
//                   height={60}
//                   className="rounded-md mb-4 mx-auto"
//                 />
//                 <p className="text-gray-200 font-inter text-sm leading-relaxed mb-4 italic">"{x.quote}"</p>
//                 <h4 className="text-lg font-semibold text-[#C04000] font-inter text-center">{x.name}</h4>
//                 <p className="text-center text-[#C04000] font-inter">{x.role}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Banner */}
//       <section id="ecosystem" className="py-16 bg-gradient-to-r from-[#C04000] to-[#112B9D]">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
//         >
//           <h2 className="text-3xl sm:text-4xl font-bold text-white font-inter mb-6 tracking-tight">
//             Join the Pijina Poojary Ecosystem
//           </h2>
//           <p className="text-lg text-gray-200 font-inter mb-8 max-w-2xl mx-auto leading-relaxed">
//             Be part of a thriving community of innovators and unlock exclusive tools and resources.
//           </p>
//           <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//             <Link
//               href="#support"
//               scroll={true}
//               className="bg-white text-[#112B9D] px-8 py-3 rounded-md font-inter font-medium shadow-md hover:bg-gray-50 transition-colors duration-200"
//             >
//               Join Now
//             </Link>
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* Footer */}
//       <footer id="about" className="bg-[#1F2937] text-gray-400 py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             <div>
//               <div className="flex items-center mb-6">
//                 <Image
//                   src="/ppbg.png"
//                   alt="Pijina Poojary Logo"
//                   width={80}
//                   height={80}
//                   // className="mr-3 border-2 border-[#C04000]"
//                   className="mr-0"
//                 />
//                 <span className="text-lg font-semibold text-white font-inter">Pijina Poojary</span>
//               </div>
//               <p className="text-gray-400 font-inter text-sm leading-relaxed">
//                 Empowering innovation with Next.js.
//               </p>
//             </div>
//             <div>
//               <h4 className="text-lg font-semibold text-[#C04000] mb-4 font-inter">Quick Links</h4>
//               <ul className="space-y-2">
//                 {navItems.map((item) => (
//                   <li key={item.name}>
//                     <motion.a
//                       whileHover={{ x: 3, color: "#C04000" }}
//                       href={item.href}
//                       className="text-gray-400 font-inter text-sm"
//                     >
//                       {item.name}
//                     </motion.a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-lg font-semibold text-[#C04000] mb-4 font-inter">Contact Us</h4>
//               <p className="text-gray-400 font-inter text-sm">Email: support@pijinapoojary.com</p>
//               <p className="text-gray-400 font-inter text-sm">Phone: (123) 456-7890</p>
//             </div>
//             <div>
//               <h4 className="text-lg font-semibold text-[#C04000] mb-4 font-inter">Follow Us</h4>
//               <div className="flex space-x-4">
//                 {["Twitter", "LinkedIn", "GitHub"].map((platform) => (
//                   <motion.a
//                     key={platform}
//                     href="#"
//                     whileHover={{ scale: 1.1, color: "#C04000" }}
//                     className="text-gray-400 font-inter text-sm"
//                   >
//                     {platform}
//                   </motion.a>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <p className="text-center text-gray-500 mt-12 font-inter text-sm">
//             © 2025 Pijina Poojary Solutions. All rights reserved.
//           </p>
//         </div>
//       </footer>
//     </>
//   );
// }

// export default Home;

"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

// Navigation items
const navItems = [
    { name: "Products", href: "#products" },
    { name: "Community", href: "#community" },
    { name: "Ecosystem", href: "#ecosystem" },
    { name: "Support", href: "#support" },
    { name: "Resources", href: "#resources" },
    { name: "About us", href: "#about" },
];

// Custom component for section in-view animation
function Section({ children, id, className = "" }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <section id={id} ref={ref} className={`py-20 ${className}`}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </section>
    );
}

// Main Home component
function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [hasScrolled, setHasScrolled] = useState(false);

    // Effect to handle scroll-based header changes and active section highlighting
    useEffect(() => {
        const handleScroll = () => {
            // Handle header style change on scroll
            setHasScrolled(window.scrollY > 20);
            
            // Handle active navigation link
            const sections = navItems.map((item) => document.getElementById(item.href.slice(1)));
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (const section of sections) {
                if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                    setActiveSection(section.id);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    // Toggle mobile menu
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Variants for Framer Motion animations
    const menuVariants = {
        open: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeInOut" } },
        closed: { opacity: 0, y: "-10%", transition: { duration: 0.3, ease: "easeInOut" } },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.15,
                duration: 0.6,
                ease: "easeOut"
            },
        }),
    };

    // Main render
    return (
        <>
            {/* The <Head> component from Next.js was removed as it's not supported in this environment.
              You would typically manage the <head> section of your HTML file directly.
            */}

            {/* Header and Navigation Bar */}
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`fixed w-full z-30 transition-all duration-300 ${hasScrolled ? "bg-[#112B9D]/90 backdrop-blur-sm shadow-xl" : "bg-transparent"}`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-20 items-center">
                        <a href="/" className="flex items-center gap-2">
                            <img src="https://img.icons8.com/plasticine/100/ffffff/rocket.png" alt="Pijina Poojary Logo" width={50} height={50} />
                            <span className="text-2xl font-bold text-white font-inter tracking-wide">Pijina Poojary</span>
                        </a>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <motion.div key={item.name} className="relative">
                                    <a href={item.href} className={`font-inter font-medium text-sm uppercase tracking-wider transition-colors duration-300 ${activeSection === item.href.slice(1) ? "text-[#C04000]" : "text-white hover:text-[#C04000]"}`}>
                                        {item.name}
                                    </a>
                                    {activeSection === item.href.slice(1) && (
                                        <motion.div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#C04000]" layoutId="underline" />
                                    )}
                                </motion.div>
                            ))}
                        </nav>

                        <div className="hidden lg:flex items-center">
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2, boxShadow: "0 10px 20px rgba(192, 64, 0, 0.2)" }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[#C04000] text-white px-7 py-3 rounded-full font-inter font-bold text-sm hover:bg-opacity-90 transition-all duration-300 shadow-lg"
                            >
                                Get Started
                            </motion.button>
                        </div>
                        
                        {/* Mobile Menu Button */}
                        <div className="lg:hidden flex items-center">
                            <button onClick={toggleMenu} className="text-white focus:outline-none z-40">
                                <div className="w-6 h-6 flex flex-col justify-around items-center">
                                    <motion.span animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 8 : 0 }} className="w-full h-0.5 bg-white rounded-full origin-center" />
                                    <motion.span animate={{ opacity: isMenuOpen ? 0 : 1 }} className="w-full h-0.5 bg-white rounded-full" />
                                    <motion.span animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -8 : 0 }} className="w-full h-0.5 bg-white rounded-full origin-center" />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            variants={menuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="lg:hidden fixed inset-0 w-full h-screen bg-[#112B9D] pt-24 z-20"
                        >
                            <div className="flex flex-col items-center justify-center h-full space-y-8">
                                {navItems.map((item) => (
                                    <a key={item.name} href={item.href} className={`text-2xl font-bold font-inter transition-colors duration-300 ${activeSection === item.href.slice(1) ? "text-[#C04000]" : "text-white hover:text-[#C04000]"}`} onClick={toggleMenu}>
                                        {item.name}
                                    </a>
                                ))}
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="mt-8 bg-[#C04000] text-white px-8 py-4 rounded-full font-inter font-bold text-lg"
                                    onClick={toggleMenu}
                                >
                                    Get Started
                                </motion.button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.header>

            <main className="font-inter bg-white">
                {/* Hero Section */}
                <div className="relative pt-40 pb-24 bg-gradient-to-b from-[#112B9D] via-[#112B9D] to-[#1a3a7a] text-white overflow-hidden">
                    <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(to_bottom,white_50%,transparent_100%)]"></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 relative z-10">
                        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="lg:w-1/2 text-center lg:text-left">
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold font-inter leading-tight mb-6 tracking-tighter">
                                Innovate. Scale. Succeed.
                            </h1>
                            <p className="text-lg text-gray-300 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                                Pijina Poojary Solutions delivers cutting-edge technology for unparalleled performance and exponential growth. We build the future, today.
                            </p>
                            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                                <a href="#products" className="bg-[#C04000] text-white px-10 py-4 rounded-full font-inter font-bold shadow-2xl hover:bg-opacity-90 transition-all duration-300 inline-block">
                                    Explore Our Solutions
                                </a>
                            </motion.div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="lg:w-1/2 mt-10 lg:mt-0">
                            <div className="relative">
                                 <img src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=2400&auto=format&fit=crop" alt="Tech Innovation" width={600} height={450} className="rounded-2xl shadow-2xl object-cover w-full" />
                                <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-[#C04000] rounded-2xl -z-10"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Products Section */}
                <Section id="products" className="bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-4xl lg:text-5xl font-bold text-[#112B9D] text-center font-inter mb-4 tracking-tight">Core Offerings</h2>
                        <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">We engineer robust, scalable, and intelligent solutions designed to propel your business forward.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { title: "Scalable Web Apps", description: "Build lightning-fast, responsive web applications effortlessly with modern architecture.", icon: "💻" },
                                { title: "AI Integration", description: "Harness the power of AI to create intelligent, predictive, and user-centric experiences.", icon: "🤖" },
                                { title: "E-Commerce Platforms", description: "Craft seamless, high-converting online stores that offer exceptional user journeys.", icon: "🛒" },
                            ].map((product, i) => (
                                <motion.div key={product.title} custom={i} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }} className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 border border-gray-100 flex flex-col items-start">
                                    <div className="text-5xl mb-4 bg-blue-100 p-3 rounded-xl">{product.icon}</div>
                                    <h3 className="text-2xl font-bold text-[#112B9D] mb-3 font-inter">{product.title}</h3>
                                    <p className="text-gray-600 font-inter leading-relaxed flex-grow">{product.description}</p>
                                    <a href="#" className="text-[#C04000] font-bold mt-6 inline-flex items-center group">
                                        Learn More
                                        <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </Section>
                
                 {/* Testimonials Section */}
                <Section id="community" className="bg-[#112B9D]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                        <h2 className="text-4xl lg:text-5xl font-bold text-center font-inter mb-4 tracking-tight">Loved by Innovators Worldwide</h2>
                         <p className="text-lg text-gray-300 text-center mb-16 max-w-3xl mx-auto">Don't just take our word for it. Here's what our community has to say about their experience.</p>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {[
                                { name: "Alexi Volkov", role: "Lead Developer, TechCorp", quote: "Pijina Poojary transformed our app development. The performance is simply outstanding.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop" },
                                { name: "Samantha Reed", role: "Product Chief, InnovateMe", quote: "The AI integration tools are a true game-changer for enhancing user engagement and personalization.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop" },
                                { name: "David Chen", role: "Founder, ShopSphere", quote: "Our sales and customer satisfaction skyrocketed after migrating to Pijina Poojary’s platform.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop" },
                            ].map((testimonial, i) => (
                                <motion.div key={i} custom={i} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} className="bg-[#1F2937]/50 p-8 rounded-2xl shadow-lg border border-blue-800/50 flex flex-col">
                                    <p className="text-gray-200 font-inter text-lg leading-relaxed mb-6 italic flex-grow">"{testimonial.quote}"</p>
                                    <div className="flex items-center">
                                        <img src={testimonial.image} alt={testimonial.name} width={50} height={50} className="rounded-full mr-4 border-2 border-[#C04000] object-cover" />
                                        <div>
                                            <h4 className="text-lg font-bold text-white font-inter">{testimonial.name}</h4>
                                            <p className="text-[#C04000] font-medium">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </Section>
                
                 {/* CTA Banner Section */}
                <Section id="ecosystem" className="bg-gradient-to-r from-[#C04000] to-[#e45a1b]">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
                    >
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-white font-inter mb-6 tracking-tight">
                            Ready to Build the Future?
                        </h2>
                        <p className="text-xl text-white/90 font-inter mb-10 max-w-2xl mx-auto leading-relaxed">
                            Join our thriving ecosystem of innovators. Get access to exclusive tools, a vibrant community, and dedicated support to bring your vision to life.
                        </p>
                        <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                            <a href="#support" className="bg-white text-[#C04000] px-10 py-4 rounded-full font-inter font-bold text-lg shadow-2xl hover:bg-gray-100 transition-colors duration-300 inline-block">
                                Join The Ecosystem
                            </a>
                        </motion.div>
                    </motion.div>
                </Section>
                
                 {/* Footer */}
                <footer id="about" className="bg-[#1F2937] text-gray-300 py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                            {/* Brand Info */}
                            <div className="md:col-span-2 lg:col-span-1">
                                <div className="flex items-center gap-2 mb-4">
                                    <img src="https://img.icons8.com/plasticine/100/ffffff/rocket.png" alt="Pijina Poojary Logo" width={50} height={50} />
                                    <span className="text-2xl font-bold text-white font-inter">Pijina Poojary</span>
                                </div>
                                <p className="text-gray-400 font-inter text-sm leading-relaxed">
                                    Empowering the next wave of innovation with robust and scalable solutions.
                                </p>
                            </div>

                            {/* Quick Links */}
                            <div>
                                <h4 className="text-lg font-bold text-[#C04000] mb-4 font-inter tracking-wider">Quick Links</h4>
                                <ul className="space-y-3">
                                    {navItems.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="hover:text-[#C04000] transition-colors duration-300 text-sm font-medium">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            {/* Contact Info */}
                            <div>
                                <h4 className="text-lg font-bold text-[#C04000] mb-4 font-inter tracking-wider">Contact</h4>
                                <ul className="space-y-3">
                                     <li><a href="mailto:support@pijinapoojary.com" className="hover:text-[#C04000] transition-colors duration-300 text-sm font-medium">support@pijinapoojary.com</a></li>
                                     <li><a href="tel:+1234567890" className="hover:text-[#C04000] transition-colors duration-300 text-sm font-medium">(123) 456-7890</a></li>
                                </ul>
                            </div>
                            
                            {/* Social Media */}
                            <div>
                                 <h4 className="text-lg font-bold text-[#C04000] mb-4 font-inter tracking-wider">Follow Us</h4>
                                 <div className="flex space-x-4">
                                     {["Twitter", "LinkedIn", "GitHub"].map((platform) => (
                                         <a key={platform} href="#" className="hover:text-[#C04000] hover:scale-110 transition-all duration-300 text-white font-medium">
                                             {platform}
                                         </a>
                                     ))}
                                 </div>
                            </div>
                        </div>

                        <div className="mt-16 border-t border-blue-800/50 pt-8 text-center text-gray-500">
                             <p className="font-inter text-sm">
                                 &copy; {new Date().getFullYear()} Pijina Poojary Solutions. All rights reserved.
                             </p>
                        </div>
                    </div>
                </footer>
            </main>
        </>
    );
}

export default App;
