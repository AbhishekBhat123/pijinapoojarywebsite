"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Search, Users, UploadCloud, Trophy, BookOpen, Heart, Download, Eye, Twitter, Github, Linkedin } from "lucide-react";

// --- REVISED Navigation Items for a Community Platform ---
const navItems = [
  { name: "Library", href: "#library" },
  { name: "Challenges", href: "#challenges" },
  { name: "Learn", href: "#learn" },
  { name: "Community", href: "#community" },
];

// --- Main Home Component ---
function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [hasScrolled, setHasScrolled] = useState(false);

  // --- Scroll Detection Effect ---
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
  const FADE_UP = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const STAGGER_CONTAINER = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  return (
    <>
      <Head>
        <title>Pijina Poojary | The Hub for Modern Creators</title>
        <meta name="description" content="A community platform for designers, engineers, and creators to share projects, compete in challenges, and learn together." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" />
      </Head>

      <div className="bg-[#0A192F] font-inter">
        {/* --- Navbar --- */}
        <motion.nav
          className={`fixed w-full z-50 transition-all duration-300 ${hasScrolled ? "bg-[#112B9D]/80 backdrop-blur-lg shadow-lg" : "bg-transparent"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">
              <Link href="#" className="flex items-center gap-2">
                <Image src="/ppbg.png" alt="Pijina Poojary Logo" width={50} height={50} className="rounded-full" />
                <span className="text-xl font-bold text-white tracking-wide">Pijina Poojary</span>
              </Link>
              <div className="hidden lg:flex items-center space-x-8">
                {navItems.map((item) => (
                  <Link key={item.name} href={item.href} className="relative text-sm font-medium uppercase tracking-wider text-gray-300 hover:text-white transition-colors duration-300">
                    {item.name}
                    {activeSection === item.href.slice(1) && (
                      <motion.div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#C04000]" layoutId="underline" />
                    )}
                  </Link>
                ))}
              </div>
              <div className="hidden lg:flex items-center gap-4">
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-white/10 text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-white/20 transition-all duration-300">
                    Log In
                  </motion.button>
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-[#C04000] text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-opacity-90 transition-all duration-300">
                    Join Free
                  </motion.button>
              </div>
               {/* Mobile Menu Button */}
              <div className="lg:hidden"><button onClick={toggleMenu} className="text-white"><svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}/></svg></button></div>
            </div>
          </div>
           {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="lg:hidden bg-[#112B9D]">
                <div className="px-8 pt-2 pb-8 space-y-4">
                  {navItems.map((item) => (<Link key={item.name} href={item.href} onClick={toggleMenu} className="block text-gray-300 hover:text-[#C04000] text-lg font-medium">{item.name}</Link>))}
                  <button className="mt-4 bg-[#C04000] text-white px-6 py-3 rounded-full font-semibold w-full">Join Free</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>

        {/* --- Hero Section --- */}
        <section className="relative h-screen flex flex-col justify-center items-center text-center pt-20 px-4 overflow-hidden bg-cover bg-center" style={{backgroundImage: "linear-gradient(to top, #0A192F, rgba(17, 43, 157, 0.7)), url('/pp1.jpg')"}}>
            <motion.div variants={FADE_UP} initial="hidden" animate="visible" className="relative z-10">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tighter">
                    The Hub for Modern Creators
                </h1>
                <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-200">
                    A community of millions of designers and engineers sharing projects, knowledge, and inspiration.
                </p>
                <div className="mt-10 max-w-2xl mx-auto">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search for projects, tutorials, or creators..."
                            className="w-full py-4 pl-6 pr-32 rounded-full bg-white/20 backdrop-blur-sm text-white placeholder-gray-300 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C04000]"
                        />
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#C04000] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
                            <Search className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </motion.div>
        </section>


        {/* --- Project Library Section --- */}
        <section id="library" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={FADE_UP} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-[#112B9D] tracking-tight">Featured Library Projects</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Explore the latest projects and models uploaded by our community.</p>
            </motion.div>
            <motion.div variants={STAGGER_CONTAINER} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Next-Gen Drone Chassis", author: "Sarah Johnson", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330", image: "https://images.unsplash.com/photo-1507086182333-e945c792150a", likes: 1200, downloads: 450 },
                { title: "AI-Powered Robotic Arm", author: "Alex Smith", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e", image: "/pp2.png", likes: 2500, downloads: 850 },
                { title: "Custom Mechanical Keyboard", author: "Michael Chen", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d", image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef", likes: 890, downloads: 150 },
              ].map((project, i) => (
                <motion.div key={i} variants={FADE_UP} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 group">
                    <div className="relative h-56">
                      <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" className="group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-[#112B9D] truncate">{project.title}</h3>
                        <div className="flex items-center gap-3 mt-3">
                            <Image src={project.avatar} alt={project.author} width={32} height={32} className="rounded-full"/>
                            <span className="text-sm font-medium text-gray-700">by {project.author}</span>
                        </div>
                        <div className="flex items-center gap-6 mt-4 pt-4 border-t border-gray-100 text-sm text-gray-500">
                           <div className="flex items-center gap-1.5"><Heart className="w-4 h-4 text-red-500"/> {project.likes}</div>
                           <div className="flex items-center gap-1.5"><Download className="w-4 h-4 text-blue-500"/> {project.downloads}</div>
                        </div>
                    </div>
                </motion.div>
              ))}
            </motion.div>
             <div className="text-center mt-12">
                 <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-[#112B9D] text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors duration-300">
                    Explore Full Library
                 </motion.button>
             </div>
          </div>
        </section>

        {/* --- How It Works Section --- */}
        <section id="learn" className="py-24 bg-[#0A192F] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div variants={FADE_UP} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold tracking-tight">A Platform for Innovators</h2>
                    <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">Everything you need to share, compete, and grow your skills.</p>
                </motion.div>
                <motion.div variants={STAGGER_CONTAINER} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {[
                        { icon: <UploadCloud className="w-12 h-12 text-[#C04000]" />, title: "Share Your Work", description: "Upload your projects and build a portfolio that gets noticed by a global community." },
                        { icon: <Trophy className="w-12 h-12 text-[#C04000]" />, title: "Compete in Challenges", description: "Test your skills against the best and win amazing prizes in our industry-sponsored challenges." },
                        { icon: <BookOpen className="w-12 h-12 text-[#C04000]" />, title: "Learn from Experts", description: "Access thousands of free tutorials and resources to master new skills and techniques." },
                    ].map((feature, i) => (
                        <motion.div key={i} variants={FADE_UP}>
                            <div className="bg-white/10 p-6 rounded-full inline-block mb-6">{feature.icon}</div>
                            <h3 className="text-2xl font-bold">{feature.title}</h3>
                            <p className="mt-2 text-gray-400">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
        
        {/* --- Challenges Section --- */}
        <section id="challenges" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div variants={FADE_UP} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-[#112B9D] tracking-tight">Live Design Challenges</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Ready to prove your skills? Join a challenge today and innovate for the future.</p>
                </motion.div>
                <motion.div variants={STAGGER_CONTAINER} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-8">
                    {[
                        { title: "Sustainable Mobility Challenge", sponsor: "Tesla", prize: "20,000", entries: 432 },
                        { title: "The Future of UI/UX Design", sponsor: "Google", prize: "15,000", entries: 819 },
                        { title: "Aerospace Innovation Project", sponsor: "SpaceX", prize: "50,000", entries: 215 },
                    ].map((challenge, i) => (
                         <motion.div key={i} variants={FADE_UP} className="bg-gray-50 border border-gray-200 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-lg hover:border-[#C04000] transition-all duration-300">
                             <div>
                                 <p className="font-semibold text-[#C04000]">Sponsored by {challenge.sponsor}</p>
                                 <h3 className="text-2xl font-bold text-[#112B9D] mt-1">{challenge.title}</h3>
                             </div>
                             <div className="flex-shrink-0 text-center md:text-right">
                                 <p className="text-3xl font-extrabold text-[#112B9D]">${challenge.prize.toLocaleString()}</p>
                                 <p className="text-gray-500 font-medium">in prizes</p>
                             </div>
                             <div className="w-full md:w-auto">
                                <button className="w-full bg-[#112B9D] text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors duration-300">View Challenge</button>
                             </div>
                         </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>


        {/* --- Community/Testimonials Section --- */}
        <section id="community" className="py-24 bg-[#112B9D] text-white bg-cover bg-center" style={{backgroundImage: "linear-gradient(rgba(17, 43, 157, 0.95), rgba(17, 43, 157, 0.95)), url('/ppbg.png')"}}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div variants={FADE_UP} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold tracking-tight">From Our Top Members</h2>
                    <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">See how the best in the industry use our platform to succeed.</p>
                </motion.div>
                <motion.div variants={STAGGER_CONTAINER} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                     {[
                        { name: "Alex Smith", role: "Lead Mechanical Engineer", quote: "This platform is indispensable. It's the first place I go for inspiration and the best place to showcase my portfolio.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" },
                        { name: "Sarah Johnson", role: "Industrial Designer", quote: "The challenges are incredible. They've pushed my skills and connected me with major companies in my field.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330" },
                        { name: "Michael Chen", role: "3D Print Specialist", quote: "The community is unbelievably supportive, and the Library is an endless source of high-quality models for my work.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" },
                    ].map((testimonial, i) => (
                        <motion.div key={i} variants={FADE_UP} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 shadow-lg">
                            <p className="text-gray-200 text-lg italic mb-6">"{testimonial.quote}"</p>
                            <div className="flex items-center gap-4">
                                <Image src={testimonial.image} alt={testimonial.name} width={50} height={50} className="rounded-full"/>
                                <div>
                                    <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                                    <p className="text-[#C04000] font-medium">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>

        {/* --- Final CTA --- */}
        <section className="bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                <motion.div variants={FADE_UP} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                    <h2 className="text-4xl font-extrabold text-[#112B9D] tracking-tight">Join Millions of Creators Today</h2>
                    <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
                       Create your free account to start uploading projects, joining challenges, and connecting with the world's most innovative community.
                    </p>
                    <motion.div className="mt-10" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link href="#" className="inline-flex items-center gap-3 bg-gradient-to-r from-[#C04000] to-[#e05a20] text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                        Sign Up for Free <ArrowRight size={20} />
                      </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
        
        {/* --- Footer --- */}
        <footer className="bg-[#0A192F] text-gray-400 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              <div className="col-span-2 md:col-span-2 mb-6 md:mb-0">
                  <div className="flex items-center gap-3 mb-4">
                      <Image src="/ppbg.png" alt="Pijina Poojary Logo" width={50} height={50} className="rounded-full" />
                      <span className="text-lg font-bold text-white">Pijina Poojary</span>
                  </div>
                  <p className="text-sm leading-relaxed max-w-xs">The world's leading community for designers, engineers, and manufacturers.</p>
              </div>
              <div>
                  <h4 className="text-md font-semibold text-white tracking-wider uppercase mb-4">Platform</h4>
                  <ul className="space-y-3">
                      {navItems.map(item => (
                          <li key={item.name}><Link href={item.href} className="hover:text-[#C04000] transition-colors duration-300 text-sm">{item.name}</Link></li>
                      ))}
                  </ul>
              </div>
              <div>
                  <h4 className="text-md font-semibold text-white tracking-wider uppercase mb-4">Company</h4>
                  <ul className="space-y-3 text-sm">
                      <li><a href="#" className="hover:text-[#C04000]">About Us</a></li>
                      <li><a href="#" className="hover:text-[#C04000]">Careers</a></li>
                      <li><a href="#" className="hover:text-[#C04000]">Contact</a></li>
                      <li><a href="#" className="hover:text-[#C04000]">Blog</a></li>
                  </ul>
              </div>
              <div>
                  <h4 className="text-md font-semibold text-white tracking-wider uppercase mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                      <a href="#" className="hover:text-[#C04000]"><Twitter size={20} /></a>
                      <a href="#" className="hover:text-[#C04000]"><Linkedin size={20} /></a>
                      <a href="#" className="hover:text-[#C04000]"><Github size={20} /></a>
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