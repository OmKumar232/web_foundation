/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Heart, 
  Users, 
  Calendar, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  ChevronUp,
  Facebook,
  Instagram,
  Linkedin
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Logo Component ---
const Logo = ({ className = "", invert = false }: { className?: string, invert?: boolean }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <div className="relative w-16 h-16 flex items-center justify-center">
      {/* Central Star with 'IAF' */}
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* People figures in a circle */}
        <g transform="translate(50, 50)">
          {/* Orange */}
          <path d="M0 -35 L10 -15 L-10 -15 Z" fill="#f97316" transform="rotate(0)" />
          <circle cx="0" cy="-42" r="6" fill="#f97316" />
          {/* Blue */}
          <path d="M0 -35 L10 -15 L-10 -15 Z" fill="#3b82f6" transform="rotate(72)" />
          <circle cx="33" cy="-24" r="6" fill="#3b82f6" />
          {/* Cyan/Light Blue */}
          <path d="M0 -35 L10 -15 L-10 -15 Z" fill="#06b6d4" transform="rotate(144)" />
          <circle cx="21" cy="15" r="6" fill="#06b6d4" />
          {/* Purple */}
          <path d="M0 -35 L10 -15 L-10 -15 Z" fill="#a855f7" transform="rotate(216)" />
          <circle cx="-21" cy="15" r="6" fill="#a855f7" />
          {/* Green */}
          <path d="M0 -35 L10 -15 L-10 -15 Z" fill="#22c55e" transform="rotate(288)" />
          <circle cx="-33" cy="-24" r="6" fill="#22c55e" />
        </g>
        {/* White Center Star Area */}
        <circle cx="50" cy="50" r="18" fill="white" />
        <text x="50" y="54" textAnchor="middle" fontSize="10" fontWeight="bold" fill="black">IAF</text>
      </svg>
    </div>
    <div className="flex flex-col">
      <span className={`font-bold leading-none text-xl tracking-tight transition-colors ${invert ? 'text-white' : 'text-slate-800'}`}>InAmigos®</span>
      <span className={`text-[10px] font-bold uppercase tracking-[0.2em] mt-0.5 transition-colors ${invert ? 'text-slate-300' : 'text-slate-500'}`}>Foundation</span>
      <span className={`text-[8px] italic transition-colors ${invert ? 'text-slate-400' : 'text-slate-400'}`}>Uniting Minds for Change</span>
    </div>
  </div>
);

// --- Navbar Component ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Impact', href: '#impact' },
    { name: 'Projects', href: '#projects' },
    { name: 'Volunteers', href: '#volunteers' },
    { name: 'Events', href: '#events' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom flex justify-between items-center">
        <Logo className="scale-90 origin-left" />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-slate-600 hover:text-primary font-medium transition-colors">
              {link.name}
            </a>
          ))}
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary"
          >
            Donate Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-all"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white z-[70] p-8"
            >
              <div className="flex justify-end mb-8">
                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                  <X size={28} />
                </button>
              </div>
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-bold text-slate-800 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <button className="btn-primary mt-4 w-full">Donate Now</button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- Hero Section ---
const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
    <div className="container-custom grid lg:grid-cols-2 gap-12 items-center relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="section-heading">Welcome to InAmigos</span>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-8">
          Empowering communities through <span className="text-primary">unified action.</span>
        </h1>
        <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
          We dedicated our efforts to local initiatives that drive sustainable change and provide resources to those in need.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="#impact" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary flex items-center gap-2"
          >
            Get Involved <ArrowRight size={20} />
          </a>
          <a 
            href="#projects" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-8 py-3 rounded-2xl bg-white border border-slate-200 font-semibold hover:bg-slate-50 transition-all text-center"
          >
            See Our Work
          </a>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="aspect-square bg-slate-100 rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
          <img 
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1000" 
            alt="Foundation" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-900/10 rounded-full blur-3xl" />
        
        {/* Floating Stat Widget */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -right-4 bottom-10 bg-white p-4 rounded-2xl shadow-xl z-20 border border-slate-100 flex items-center gap-4"
        >
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
            <Heart fill="currentColor" size={24} />
          </div>
          <div>
            <p className="font-bold text-slate-800 text-lg">12k+</p>
            <p className="text-slate-500 text-xs">Lives Impacted</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// --- Impact Section ---
const Impact = () => {
  const stats = [
    { label: 'Volunteers', value: '500+', desc: 'working across local programs', icon: <Users size={24} /> },
    { label: 'Projects Completed', value: '45', desc: 'Community-centered progress', icon: <Calendar size={24} /> },
    { label: 'Lives Impacted', value: '12k', desc: 'through direct and partner support', icon: <Heart size={24} /> },
  ];

  return (
    <section className="py-24 bg-white" id="impact">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-heading">Our Impact</span>
            <h2 className="section-title">Measurable community progress</h2>
            <p className="text-lg text-slate-600 mb-8">
              Transparency and accountability drive every initiative we undertake. We focus on direct action and sustainable results that strengthen the fabric of our society.
            </p>
            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary">
                <Users size={24} />
              </div>
              <p className="font-medium text-slate-700 leading-tight">Join 500+ active volunteers making a daily difference.</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative h-[400px] rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=1000&auto=format&fit=crop" 
              alt="Community impact" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="card-modern"
            >
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 mb-6 uppercase text-xs font-bold tracking-widest bg-slate-50 border border-slate-100">
                {stat.label.split(' ')[0]}
              </div>
              <p className="text-5xl font-bold text-slate-900 mb-2">{stat.value}</p>
              <p className="text-slate-500">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Projects Section ---
const Projects = () => {
  const projects = [
    { title: 'Bright Minds Education', desc: 'Providing quality primary education and learning materials...', img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop' },
    { title: 'Community Health Outreach', desc: 'Mobile clinics providing essential healthcare services...', img: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=600&auto=format&fit=crop' },
    { title: 'Clean Water Initiative', desc: 'Installing sustainable water filtration systems...', img: 'https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?q=80&w=600&auto=format&fit=crop' },
  ];

  return (
    <section className="py-24 bg-slate-50/50" id="projects">
      <div className="container-custom">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl font-bold mb-6">Non-profit projects designed for practical, local impact</h2>
          <p className="text-slate-600 text-lg">
            Each project is built around needs identified with communities and delivered through close coordination, volunteer energy, and long-term follow-through.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm"
            >
              <img src={proj.img} alt={proj.title} className="w-full h-64 object-cover" referrerPolicy="no-referrer" />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{proj.title}</h3>
                <p className="text-slate-600 mb-8 line-clamp-2">{proj.desc}</p>
                <button className="bg-slate-100 hover:bg-slate-200 px-6 py-2 rounded-xl text-slate-800 font-bold transition-colors">
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Volunteers Section ---
const Volunteers = () => {
  const volunteers = [
    { name: 'Faiz Khan', role: 'Volunteer Supervisor Uttar pradesh', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop' },
    { name: 'Manavi Jaiswal', role: 'Junior Volunteer Associate', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop' },
    { name: 'Akash .', role: 'Volunteer Associate', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop' },
  ];

  return (
    <section className="py-24 bg-white" id="volunteers">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">OUR VOLUNTEERS</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {volunteers.map((v, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-2xl mb-6 shadow-sm border border-slate-100">
                <img 
                  src={v.img} 
                  alt={v.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">{v.name}</h3>
              <p className="text-slate-500 font-medium">{v.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Testimonials ---
const Testimonials = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="container-custom">
      <span className="section-heading">Impact Stories</span>
      <h2 className="section-title">Voices that reflect trust, care, and shared progress</h2>
      
      <div className="mt-12 max-w-2xl bg-slate-50 rounded-[3rem] p-12 relative">
        <div className="w-16 h-16 rounded-full overflow-hidden mb-6 border-4 border-white shadow-md">
          <img 
            src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop" 
            alt="Maria Rodriguez" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer" 
          />
        </div>
        <p className="text-2xl text-slate-700 italic leading-snug mb-8">
          "InAmigos didn't just give my children books; they gave them a future I never thought possible."
        </p>
        <div>
          <p className="font-bold text-slate-900 text-xl">Maria Rodriguez</p>
          <p className="text-slate-500">Beneficiary & Mother of three</p>
        </div>
      </div>
    </div>
  </section>
);

// --- Events Section ---
const Events = () => (
  <section className="py-24 bg-slate-50/50" id="events">
    <div className="container-custom">
      <div className="max-w-2xl mb-16">
        <h2 className="text-4xl font-bold mb-6">Join upcoming gatherings, fundraisers, and volunteer moments</h2>
        <p className="text-slate-600">Events create visibility, momentum, and new ways for supporters to take part in the foundation's mission.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {[1, 2].map(evt => (
          <div key={evt} className="card-modern overflow-hidden p-0 flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 h-48 md:h-auto overflow-hidden">
              <img 
                src={evt === 1 
                  ? 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=400&auto=format&fit=crop' 
                  : 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=400&auto=format&fit=crop'
                } 
                alt="Event" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-8 flex-1">
              <div className="flex items-center gap-3 text-slate-500 mb-4">
                <Calendar size={18} />
                <span className="font-semibold">{evt === 1 ? 'Oct 20, 2024' : 'Dec 15, 2024'}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">{evt === 1 ? 'Community Tree Planting Day' : 'Annual Charity Gala 2024'}</h3>
              <div className="flex items-center gap-2 text-slate-500 mb-4">
                <MapPin size={18} />
                <span>{evt === 1 ? 'Greenwood Community Park' : 'Grand Plaza Hotel & Online'}</span>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed line-clamp-2">
                {evt === 1 
                  ? 'A hands-on event for volunteers to help improve our local environment and promote sustainability.'
                  : 'Join us for an evening of inspiration and fundraising to support our 2025 education goals.'
                }
              </p>
              <button className="bg-slate-100 hover:bg-slate-200 px-6 py-2 rounded-xl text-slate-800 font-bold transition-colors">
                Register
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- Contact Section ---
const Contact = () => (
  <section className="py-24 bg-white" id="contact">
    <div className="container-custom">
      <div className="grid lg:grid-cols-2 gap-20">
        <div>
          <span className="section-heading">Contact</span>
          <h2 className="section-title">Reach out to the InAmigos Foundation team</h2>
          <p className="text-lg text-slate-600 mb-12">
            Contact us for volunteer opportunities, project partnerships, event details, or donation support. We aim to respond within 2 business days.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-primary shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <p className="font-bold text-slate-900">Email</p>
                <p className="text-slate-500">hello@inamigosfoundation.org</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-primary shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <p className="font-bold text-slate-900">Phone</p>
                <p className="text-slate-500">+1 (555) 240-1030</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-primary shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <p className="font-bold text-slate-900">Location</p>
                <p className="text-slate-500">Community services office, regional outreach coordination</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 rounded-[3rem] p-8 md:p-12">
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-4">Name</label>
              <input type="text" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-4">Email</label>
              <input type="email" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-4">Message</label>
              <textarea rows={4} className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary outline-none transition-all" />
            </div>
            <button className="btn-primary w-full py-5">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

// --- Footer ---
const Footer = () => (
  <footer className="bg-slate-900 text-white pt-24 pb-12">
    <div className="container-custom">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div className="col-span-2">
          <Logo invert={true} className="mb-8" />
          <p className="text-slate-400 max-w-sm leading-relaxed mb-8 text-lg">
            Community-centered support through volunteer action, local partnership, and practical projects that strengthen wellbeing.
          </p>
          <div className="flex gap-4">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-8">Quick Links</h4>
          <ul className="space-y-4 text-slate-400">
            {['Home', 'About Us', 'Our Projects', 'Donate', 'Gallery', 'Contact'].map(l => (
              <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-8">Contact Info</h4>
          <ul className="space-y-4 text-slate-400">
            <li>hello@inamigosfoundation.org</li>
            <li>+1 (555) 240-1030</li>
            <li>Regional outreach coordination office</li>
          </ul>
        </div>
      </div>
      
      <div className="pt-12 border-t border-white/10 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} InAmigos Foundation. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      setShowScroll(window.pageYOffset > 400);
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <Impact />
        <Projects />
        <Volunteers />
        <Testimonials />
        <Events />
        <Contact />
      </main>
      <Footer />

      {/* Back to Top */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-white text-slate-800 rounded-full flex items-center justify-center shadow-xl border border-slate-100 hover:bg-slate-50 transition-all active:scale-90"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
