/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  Heart, 
  ShieldCheck, 
  Users, 
  Clock, 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  ChevronRight,
  Star,
  CheckCircle2,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="relative w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm">
      <svg viewBox="0 0 100 100" className="w-8 h-8">
        <path 
          d="M50 85C50 85 20 65 20 40C20 25 35 15 50 30C65 15 80 25 80 40C80 65 50 85 50 85Z" 
          fill="#006837" 
        />
        <path 
          d="M35 45C35 45 40 35 50 35C60 35 65 45 65 45" 
          stroke="white" 
          strokeWidth="4" 
          fill="none" 
          strokeLinecap="round"
        />
        <circle cx="50" cy="45" r="3" fill="white" />
      </svg>
    </div>
    <span className="font-serif text-2xl font-bold tracking-tight text-serafina-green">Serafina</span>
  </div>
);

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#home" },
    { name: "Servicios", href: "#services" },
    { name: "Nosotros", href: "#about" },
    { name: "Testimonios", href: "#testimonials" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Logo />
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-600 hover:text-serafina-green transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-serafina-green text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-serafina-green-dark transition-all shadow-md hover:shadow-lg">
            Consulta Gratuita
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl p-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-medium text-slate-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-serafina-green text-white px-6 py-3 rounded-xl text-center font-semibold">
            Consulta Gratuita
          </button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-serafina-green/5 rounded-bl-[200px]" />
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-40 right-20 w-64 h-64 bg-serafina-peach/10 rounded-full blur-3xl" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 bg-serafina-green/10 text-serafina-green rounded-full text-xs font-bold tracking-wider uppercase mb-6">
            Cuidado con Corazón
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
            Calidad de vida <br />
            <span className="text-serafina-green italic">en la calidez</span> <br />
            de su hogar.
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
            Serafina ofrece servicios profesionales de asistencia y acompañamiento terapéutico, 
            diseñados para brindar tranquilidad a las familias y dignidad a quienes más amamos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-serafina-green text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-serafina-green-dark transition-all shadow-lg flex items-center justify-center gap-2 group">
              Nuestros Servicios
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-serafina-green text-serafina-green px-8 py-4 rounded-full font-bold text-lg hover:bg-serafina-green/5 transition-all flex items-center justify-center gap-2">
              Conócenos
            </button>
          </div>
          
          <div className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                  <img 
                    src={`https://picsum.photos/seed/person${i}/100/100`} 
                    alt="User" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
            <div className="text-sm">
              <div className="flex text-serafina-peach">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-slate-500 font-medium">+200 familias confían en nosotros</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl aspect-[4/5] md:aspect-auto">
            <img 
              src="https://picsum.photos/seed/elderlycare/800/1000" 
              alt="Elderly care" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-serafina-green/40 to-transparent" />
          </div>
          
          {/* Floating Card */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-[240px]"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-serafina-peach/20 rounded-full flex items-center justify-center text-serafina-peach">
                <Heart className="w-6 h-6 fill-current" />
              </div>
              <span className="font-bold text-slate-800">Cuidado 24/7</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Asistencia continua y personalizada para cada etapa y necesidad.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Cuidados Domiciliarios",
      desc: "Asistencia integral en el hogar, higiene, alimentación y control de medicación.",
      icon: <Users className="w-8 h-8" />,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Asistencia Hospitalaria",
      desc: "Acompañamiento profesional durante internaciones para mayor seguridad y confort.",
      icon: <ShieldCheck className="w-8 h-8" />,
      color: "bg-serafina-green/10 text-serafina-green"
    },
    {
      title: "Acompañamiento Terapéutico",
      desc: "Apoyo emocional y social para mejorar la autonomía y calidad de vida.",
      icon: <Heart className="w-8 h-8" />,
      color: "bg-serafina-peach/10 text-serafina-peach"
    },
    {
      title: "Guardias 24 Horas",
      desc: "Servicio de urgencias y cuidados nocturnos con personal altamente capacitado.",
      icon: <Clock className="w-8 h-8" />,
      color: "bg-purple-50 text-purple-600"
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Nuestros Servicios</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Brindamos soluciones integrales adaptadas a las necesidades específicas de cada paciente y su familia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${service.color}`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {service.desc}
              </p>
              <button className="text-serafina-green font-bold text-sm flex items-center gap-1 group">
                Saber más
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      role: "Hija de paciente",
      text: "La calidez humana de Serafina transformó la vida de mi padre. No solo son profesionales, son familia.",
      img: "https://picsum.photos/seed/t1/100/100"
    },
    {
      name: "Roberto Sosa",
      role: "Paciente",
      text: "Gracias al acompañamiento terapéutico he recuperado mi independencia y alegría de vivir.",
      img: "https://picsum.photos/seed/t2/100/100"
    },
    {
      name: "Elena Martínez",
      role: "Hija de paciente",
      text: "Excelente servicio hospitalario. Estuvieron con mi madre en cada momento difícil con una sonrisa.",
      img: "https://picsum.photos/seed/t3/100/100"
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-serafina-green text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Lo que dicen <br /> las familias</h2>
            <p className="text-serafina-cream/70 max-w-md">
              Nuestra mayor recompensa es la tranquilidad y el bienestar de quienes confían en nosotros.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="bg-white/10 p-4 rounded-2xl">
              <span className="block text-3xl font-bold">98%</span>
              <span className="text-xs uppercase tracking-widest opacity-60">Satisfacción</span>
            </div>
            <div className="bg-white/10 p-4 rounded-2xl">
              <span className="block text-3xl font-bold">+500</span>
              <span className="text-xs uppercase tracking-widest opacity-60">Vidas impactadas</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-[32px] border border-white/10"
            >
              <div className="flex text-serafina-peach mb-6">
                {[1, 2, 3, 4, 5].map((star) => <Star key={star} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-lg italic mb-8 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={t.img} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-serafina-peach"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <p className="text-xs opacity-60">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-serafina-cream">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-[48px] shadow-xl overflow-hidden grid lg:grid-cols-2">
          <div className="p-8 md:p-16 bg-serafina-green text-white">
            <h2 className="text-4xl font-bold mb-8">Hablemos de <br /> sus necesidades</h2>
            <p className="text-serafina-cream/70 mb-12 text-lg">
              Estamos aquí para escucharle y brindarle la mejor opción de cuidado para su ser querido.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm opacity-60 mb-1">Llámanos</p>
                  <p className="text-xl font-bold">+54 9 11 1234-5678</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm opacity-60 mb-1">Email</p>
                  <p className="text-xl font-bold">contacto@serafina.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm opacity-60 mb-1">Ubicación</p>
                  <p className="text-xl font-bold">Buenos Aires, Argentina</p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-white/10 flex gap-6">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="p-8 md:p-16">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Nombre</label>
                  <input 
                    type="text" 
                    placeholder="Tu nombre"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-serafina-green focus:ring-0 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Teléfono</label>
                  <input 
                    type="tel" 
                    placeholder="Tu teléfono"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-serafina-green focus:ring-0 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                <input 
                  type="email" 
                  placeholder="tu@email.com"
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-serafina-green focus:ring-0 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Servicio de interés</label>
                <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-serafina-green focus:ring-0 transition-all appearance-none">
                  <option>Selecciona un servicio</option>
                  <option>Cuidados Domiciliarios</option>
                  <option>Asistencia Hospitalaria</option>
                  <option>Acompañamiento Terapéutico</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Mensaje</label>
                <textarea 
                  rows={4} 
                  placeholder="¿En qué podemos ayudarte?"
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-serafina-green focus:ring-0 transition-all"
                ></textarea>
              </div>
              <button className="w-full bg-serafina-peach text-white py-5 rounded-2xl font-bold text-lg hover:bg-serafina-peach/90 transition-all shadow-lg shadow-serafina-peach/20">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <Logo className="invert brightness-0" />
        <div className="flex gap-8 text-sm text-slate-400">
          <a href="#" className="hover:text-white transition-colors">Términos</a>
          <a href="#" className="hover:text-white transition-colors">Privacidad</a>
          <a href="#" className="hover:text-white transition-colors">Cookies</a>
        </div>
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Serafina. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      
      {/* Trust Bar */}
      <div className="bg-serafina-cream py-12 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale">
          <div className="flex items-center gap-2 font-bold text-xl">
            <CheckCircle2 className="w-6 h-6" /> CERTIFICADOS
          </div>
          <div className="flex items-center gap-2 font-bold text-xl">
            <CheckCircle2 className="w-6 h-6" /> PROFESIONALES
          </div>
          <div className="flex items-center gap-2 font-bold text-xl">
            <CheckCircle2 className="w-6 h-6" /> CONFIANZA
          </div>
        </div>
      </div>

      <Services />
      
      {/* CTA Section */}
      <section className="section-padding bg-serafina-cream">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
            Brinde a su familia la <br />
            <span className="text-serafina-green">tranquilidad que merece.</span>
          </h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Nuestro equipo está listo para acompañarlos. Solicite una evaluación inicial sin cargo.
          </p>
          <button className="bg-serafina-green text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-serafina-green-dark transition-all shadow-xl">
            Solicitar Evaluación Gratuita
          </button>
        </div>
      </section>

      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
