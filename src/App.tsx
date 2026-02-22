/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Hammer, Factory, Settings, Truck, HardHat, ChevronRight, Instagram, Facebook, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-industrial-blue p-2 rounded-lg">
            <Factory className="text-white w-6 h-6" />
          </div>
          <span className={`text-xl font-bold tracking-tighter ${scrolled ? 'text-industrial-blue' : 'text-white'}`}>
            JS ESTRUTURAS
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium hover:text-blue-500 transition-colors ${scrolled ? 'text-industrial-gray' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/554198881306"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-industrial-blue text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg"
          >
            Orçamento
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-industrial-blue" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className={scrolled ? 'text-industrial-gray' : 'text-white'} /> : <Menu className={scrolled ? 'text-industrial-gray' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl md:hidden py-6 px-6 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-industrial-gray border-b border-gray-100 pb-2"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/554198881306"
              className="bg-industrial-blue text-white text-center py-3 rounded-xl font-bold"
            >
              Falar no WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2000"
          alt="Industrial Structure"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative z-10 flex-grow flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full py-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
              Líder em Soluções Industriais
            </span>
            <h1 className="text-5xl md:text-7xl text-white mb-8 leading-tight tracking-tight">
              Força e Precisão em <br className="hidden md:block" />
              <span className="text-blue-400">Estruturas Metálicas</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed font-normal max-w-xl">
              Especialistas em montagem industrial, correias transportadoras e manutenção pesada para mineração e pedreiras.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="#servicos"
                className="bg-industrial-blue text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-3 shadow-xl"
              >
                Nossos Serviços <ChevronRight className="w-5 h-5" />
              </a>
              <a
                href="#contato"
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/20 transition-all text-center"
              >
                Solicitar Orçamento
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section - Now part of the flow to prevent overlap */}
      <div className="relative z-10 bg-industrial-blue/95 backdrop-blur-md py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { label: 'Anos de Experiência', value: '15+' },
            { label: 'Projetos Concluídos', value: '500+' },
            { label: 'Equipe Técnica', value: '50+' },
            { label: 'Segurança', value: '100%' },
          ].map((stat) => (
            <div key={stat.label} className="text-center lg:border-r lg:border-white/10 lg:last:border-0">
              <div className="text-4xl font-bold text-white mb-2 leading-tight">{stat.value}</div>
              <div className="text-blue-200 text-xs md:text-sm uppercase tracking-widest leading-relaxed">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="sobre" className="section-padding bg-industrial-light">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative order-2 md:order-1"
        >
          <div className="relative">
            <img
              src="https://lh3.googleusercontent.com/d/1A-eJKptujxYP8t573We4vh4fnQleHZE8"
              alt="JS Estruturas Metálicas - Obra"
              className="rounded-3xl shadow-2xl relative z-10 w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800";
              }}
            />
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-32 h-32 md:w-64 md:h-64 bg-industrial-blue rounded-3xl z-0"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl text-industrial-blue mb-6">Sobre a JS Estruturas Metálicas</h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Com sede em uma região estratégica para a mineração, a JS Estruturas Metálicas nasceu da necessidade de oferecer serviços de alta complexidade com agilidade e segurança. Somos especialistas em transformar projetos desafiadores em realidade.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="flex gap-4">
              <div className="bg-blue-100 p-3 rounded-xl h-fit">
                <HardHat className="text-industrial-blue w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-industrial-gray">Segurança</h4>
                <p className="text-sm text-gray-500">Protocolos rigorosos de segurança em campo.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-blue-100 p-3 rounded-xl h-fit">
                <Settings className="text-industrial-blue w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-industrial-gray">Qualidade</h4>
                <p className="text-sm text-gray-500">Materiais certificados e mão de obra qualificada.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <h4 className="font-bold text-industrial-blue mb-1">Missão</h4>
              <p className="text-sm text-gray-600">Prover soluções em engenharia metálica que impulsionem a produtividade de nossos clientes com sustentabilidade.</p>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <h4 className="font-bold text-industrial-blue mb-1">Visão</h4>
              <p className="text-sm text-gray-600">Ser referência nacional em montagem e manutenção industrial para o setor de mineração até 2030.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Estruturas Metálicas',
      desc: 'Fabricação e montagem de galpões, mezaninos e suportes industriais de grande porte.',
      icon: <Factory />,
    },
    {
      title: 'Montagem Industrial',
      desc: 'Instalação de plantas completas, silos e tanques com precisão milimétrica.',
      icon: <Hammer />,
    },
    {
      title: 'Correias Transportadoras',
      desc: 'Projeto, montagem e manutenção de sistemas de transporte de granéis sólidos.',
      icon: <Truck />,
    },
    {
      title: 'Britadores e Peneiras',
      desc: 'Manutenção especializada em equipamentos de britagem primária e secundária.',
      icon: <Settings />,
    },
    {
      title: 'Manutenção de Campo',
      desc: 'Equipes volantes para reparos emergenciais e preventivos em áreas remotas.',
      icon: <HardHat />,
    },
    {
      title: 'Projetos sob Medida',
      desc: 'Desenvolvimento de soluções específicas para gargalos operacionais na mineração.',
      icon: <ChevronRight />,
    },
  ];

  return (
    <section id="servicos" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl text-industrial-blue mb-4">Nossas Especialidades</h2>
          <p className="text-gray-600">Oferecemos um portfólio completo de serviços para atender as demandas mais exigentes da indústria pesada.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-industrial-light rounded-3xl border border-transparent hover:border-blue-200 hover:shadow-xl transition-all group"
            >
              <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-industrial-blue shadow-sm group-hover:bg-industrial-blue group-hover:text-white transition-colors">
                {s.icon}
              </div>
              <h3 className="text-xl mb-3 text-industrial-gray">{s.title}</h3>
              <p className="text-gray-500 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    'https://lh3.googleusercontent.com/d/1ISNF12iBpdr794qT6U-9D0aZVIO_ht0R',
    'https://lh3.googleusercontent.com/d/1CYu9Bn7WytKTqYSx2FROa-9VHCl-r7Ru',
    'https://lh3.googleusercontent.com/d/1xsUaJJIs35Q091eil4II-vbtuhxaBqeH',
    'https://lh3.googleusercontent.com/d/1V9dvLiN-WjVV2YjZlz0iEnzZdeHnjAew',
    'https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=800',
    'https://lh3.googleusercontent.com/d/1GiKh5WQv6SEazaydeNmaxYKvttzBdWDY',
  ];

  return (
    <section id="galeria" className="section-padding bg-industrial-gray text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl mb-4">Galeria de Obras</h2>
            <p className="text-gray-400 max-w-xl">Confira alguns dos nossos projetos realizados em campo, demonstrando nossa capacidade técnica e operacional.</p>
          </div>
          <button className="text-blue-400 font-bold hover:text-blue-300 transition-colors flex items-center gap-2">
            Ver Portfólio Completo <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img 
                src={img} 
                alt={`Project ${idx}`} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                referrerPolicy="no-referrer" 
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-sm font-bold uppercase tracking-widest">Projeto Industrial #{idx + 1}</p>
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
    <section id="contato" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl text-industrial-blue mb-8">Fale Conosco</h2>
            <p className="text-gray-600 mb-10">Estamos prontos para atender sua demanda. Entre em contato por um de nossos canais ou preencha o formulário.</p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="bg-industrial-light p-4 rounded-2xl text-industrial-blue">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-industrial-gray">Telefone / WhatsApp</h4>
                  <p className="text-gray-500">(41) 9888-1306</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-industrial-light p-4 rounded-2xl text-industrial-blue">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-industrial-gray">E-mail</h4>
                  <p className="text-gray-500">contato@jsestruturas.com.br</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-industrial-light p-4 rounded-2xl text-industrial-blue">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-industrial-gray">Localização</h4>
                  <p className="text-gray-500">Curitiba - PR</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-industrial-light rounded-3xl">
              <p className="text-sm font-bold text-industrial-blue mb-2">CNPJ: 62.916.954/0001-04</p>
              <p className="text-xs text-gray-400">JS Estruturas Metálicas LTDA. Todos os direitos reservados.</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Nome Completo</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-industrial-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">E-mail</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-industrial-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all" placeholder="seu@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Assunto</label>
                <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-industrial-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all">
                  <option>Orçamento de Estrutura</option>
                  <option>Manutenção de Equipamentos</option>
                  <option>Montagem Industrial</option>
                  <option>Outros</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Mensagem</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-industrial-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all" placeholder="Como podemos ajudar?"></textarea>
              </div>
              <button className="w-full bg-industrial-blue text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg">
                Enviar Mensagem
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
    <footer className="bg-industrial-gray text-white py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <Factory className="text-blue-400 w-6 h-6" />
          <span className="text-xl font-bold tracking-tighter">JS ESTRUTURAS</span>
        </div>
        
        <div className="flex gap-8 text-sm text-gray-400">
          <a href="#home" className="hover:text-white transition-colors">Início</a>
          <a href="#sobre" className="hover:text-white transition-colors">Sobre</a>
          <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
          <a href="#contato" className="hover:text-white transition-colors">Privacidade</a>
        </div>

        <div className="flex gap-4">
          <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"><Instagram className="w-5 h-5" /></a>
          <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"><Facebook className="w-5 h-5" /></a>
          <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"><Linkedin className="w-5 h-5" /></a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/5 text-center text-xs text-gray-500">
        © 2026 JS Estruturas Metálicas. Desenvolvido com foco em excelência industrial.
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/554198881306"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all group"
    >
      <Phone className="w-6 h-6" />
      <span className="absolute right-full mr-4 bg-white text-gray-800 px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Falar com Especialista
      </span>
    </a>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
