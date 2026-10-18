import { useState } from 'react';
import { FileText, Linkedin, Send, Phone, ArrowUpRight } from 'lucide-react';

export default function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Portfolio message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );

    
    window.location.href = `mailto:yinkyi467@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-[#0b0e17] text-white font-sans relative pb-20">
      
      
      <div className="fixed top-10 left-5 w-72 h-72 bg-pink-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-10 right-5 w-96 h-96 bg-rose-600/10 rounded-full blur-[150px] pointer-events-none"></div>

     
      <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">
        <nav className="bg-[#121826]/90 backdrop-blur-md border border-pink-500/30 rounded-full px-6 py-2.5 flex items-center justify-between gap-8 shadow-[0_0_25px_rgba(255,42,133,0.25)]">
          <span className="font-bold text-lg tracking-widest text-pink-400 drop-shadow-[0_0_10px_rgba(255,42,133,0.8)] uppercase">
            Theint Nadi Soe
          </span>
          <div className="hidden md:flex items-center gap-6 text-xs font-semibold tracking-wider text-gray-300 uppercase">
            {['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="hover:text-pink-400 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
          <a 
            href="#contact" 
            className="bg-gradient-to-r from-[#ff2a85] to-[#ff539a] text-white px-5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase shadow-[0_0_15px_rgba(255,42,133,0.6)] hover:scale-105 transition-transform"
          >
           Get in Touch
          </a>
        </nav>
      </header>

      <div className="max-w-6xl mx-auto px-4 pt-28 space-y-12">
        
        <section id="home" className="bg-[#121826] border border-pink-500/25 rounded-3xl p-8 md:p-12 shadow-[0_0_30px_rgba(255,42,133,0.15)] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-lg space-y-5 z-10">
            <p className="text-xs font-bold text-gray-400 tracking-widest uppercase">My portfolio</p>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
               Hi, I'm <br />
              Theint Nadi Soe 
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-500">
                Web Developer
              </span>
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed font-normal">
              Motivated Software Developer at the start of my tech journey. Passionate about frontend development, modern UI/UX design, and solving complex problems through code.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a 
                href="/cv.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#ff2a85] to-[#ff539a] text-white px-6 py-2.5 rounded-full text-xs font-bold tracking-wider flex items-center gap-2 shadow-[0_0_20px_rgba(255,42,133,0.5)] hover:brightness-110 transition cursor-pointer"
              >
                <FileText size={16} /> Download CV
              </a>
              <div className="flex items-center gap-3">
                
                <a 
                  href="https://www.tiktok.com/@yinkyi762" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-9 h-9 rounded-full bg-[#1b2336] border border-pink-500/30 text-pink-400 flex items-center justify-center hover:bg-pink-500/20 transition shadow-[0_0_10px_rgba(255,42,133,0.2)]"
                >
                  <TikTokIcon size={16} />
                </a>
               
                <a 
                  href="https://www.instagram.com/nadi054677?cplk=bjVvdWMxdHM0YXlz"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-9 h-9 rounded-full bg-[#1b2336] border border-pink-500/30 text-pink-400 flex items-center justify-center hover:bg-pink-500/20 transition shadow-[0_0_10px_rgba(255,42,133,0.2)]"
                >
                  <InstagramIcon size={16} />
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/theintnadisoe054677"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-9 h-9 rounded-full bg-[#1b2336] border border-pink-500/30 text-pink-400 flex items-center justify-center hover:bg-pink-500/20 transition shadow-[0_0_10px_rgba(255,42,133,0.2)]"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          </div>

          
          <div className="relative z-10 w-full md:w-80 h-80 md:h-96 rounded-2xl overflow-hidden border border-pink-500/40 shadow-[0_0_40px_rgba(255,42,133,0.35)] flex items-center justify-center bg-[#182033]">
            <img 
              src="/profile.jpg" 
              alt="Theint Nadi Soe Profile" 
              className="w-full h-full object-cover filter brightness-105 contrast-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e17] via-transparent to-pink-500/20 opacity-80"></div>
            <div className="absolute bottom-4 left-4 right-4 bg-[#121826]/80 backdrop-blur-md border border-pink-500/30 p-3 rounded-xl text-center">
              <p className="text-xs font-bold text-pink-300">Theint Nadi Soe</p>
            </div>
          </div>

          
        </section>

       
        <div className="max-w-6xl mx-auto px-4 pt-8 space-y-12">
          
         
          <section id="about" className="bg-[#121826] border border-pink-500/25 rounded-3xl p-6 md:p-8 shadow-[0_0_25px_rgba(255,42,133,0.1)] flex flex-col justify-between">
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">GET TO KNOW ME</p>
              <h2 className="text-2xl font-bold flex items-center gap-2 text-white mt-1 mb-4">
                 About Me 
              </h2>
              <p className="text-xs text-gray-400 leading-relaxed mb-6">
               I am an aspiring Software Developer passionate about crafting responsive, visually engaging web applications. I love bridging creative design with clean, modern frontend technologies like React and Tailwind CSS.
              </p>

              
              <div className="flex flex-col sm:flex-row items-center gap-6 my-4">
                <div className="w-44 h-44 rounded-full overflow-hidden border-2 border-pink-500/40 p-1 shadow-[0_0_25px_rgba(255,42,133,0.3)] shrink-0 flex items-center justify-center bg-[#1b2336]">
                  <img 
                     src="/image.jpg" 
                     alt="Theint Nadi Soe Profile" 
                     className="w-full h-full object-cover filter brightness-105 contrast-110" 
                  />
                </div>
                
                <div className="space-y-3">
                  <div className="bg-[#182033] border border-pink-500/20 p-3 rounded-xl">
                    <h4 className="text-sm font-bold text-pink-400 mb-1">Core Values</h4>
                    <p className="text-[13px] text-gray-400 leading-tight">Blending traditional inspiration with modern frontend technologies to create unique web experiences.</p>
                  </div>
                  <div className="bg-[#182033] border border-pink-500/20 p-3 rounded-xl">
                    <h4 className="text-sm font-bold text-pink-400 mb-1">Core Objective</h4>
                    <p className="text-[13px] text-gray-400 leading-tight">Transforming complex ideas into clean, responsive interactive interfaces.</p>
                  </div>
                </div>
              </div>

             
              <div className="grid grid-cols-4 gap-2 pt-4 border-t border-pink-500/20 text-center">
                <div>
                  <h3 className="text-lg font-extrabold text-pink-400">100+</h3>
                  <p className="text-[9px] text-gray-400 uppercase">Commits Made</p>
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-pink-400">5+</h3>
                  <p className="text-[9px] text-gray-400 uppercase">Projects Built</p>
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-pink-400">4+</h3>
                  <p className="text-[9px] text-gray-400 uppercase">Tech Stack Tools(e.g.,React,Tailwind)</p>
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-pink-400">100%</h3>
                  <p className="text-[9px] text-gray-400 uppercase">Dedication to Learn</p>
                </div>
              </div>
            </div>
          </section>

        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          
          <section id="education" className="bg-[#121826] border border-pink-500/25 rounded-3xl p-6 md:p-8 shadow-[0_0_25px_rgba(255,42,133,0.1)] flex flex-col justify-between">
            <div>
              <div className="text-center mb-6">
                <h2 className="text-xl font-bold flex items-center justify-center gap-2 text-white">
                   Education 
                </h2>
                <p className="text-[11px] text-gray-400 mt-0.5">My academic journey</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6">
              
               

                <div className="space-y-3.5 flex-1 w-full">
                  {[
                    { degree: "Bachelor's in Computer Science", school: "University of Computer Studies(Mandalay)", period: "2022 - 2027", gpa: "GPA:" },
                    { degree: "Diploma in English.", school: "MUFL", period: "2017 - 2021", gpa: "GPA:" },
                   
                  ].map((edu, idx) => (
                    <div key={idx} className="bg-[#182033] border border-pink-500/20 rounded-xl p-3 text-xs">
                      <h3 className="font-bold text-white text-xs">{edu.degree}</h3>
                      <p className="text-[10px] text-gray-400">{edu.school}</p>
                      <div className="flex justify-between items-center mt-2 text-[10px] text-pink-400 font-mono">
                        <span>{edu.period}</span>
                        <span>{edu.gpa}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          
          <section id="projects" className="bg-[#121826] border border-pink-500/25 rounded-3xl p-6 md:p-8 shadow-[0_0_25px_rgba(255,42,133,0.1)] flex flex-col justify-between">
            <div>
              <div className="text-center mb-6">
                <h2 className="text-xl font-bold flex items-center justify-center gap-2 text-white">
                   Projects 
                </h2>
                <p className="text-[11px] text-gray-400 mt-0.5">My latest work & creative projects</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {
                    title: "Online Coffee Shop",
                    tags: ["HTML", "CSS"],
                    img: "Coffee.png",
                  },
                  {
                    title: "Predit Next Word using N-gram Model",
                    tags: ["Python"],
                    img: "/NLP.png",
                  },
                  {
                    title: "Portfolio Website",
                    tags: ["React","Tailwind CSS"],
                    img: "/pwebsite.png",
                  },
                  
                ].map((proj, idx) => (
                  <div key={idx} className="bg-[#182033] border border-pink-500/20 rounded-xl overflow-hidden group hover:border-pink-500/60 transition">
                    <div className="h-24 overflow-hidden relative">
                      <img src={proj.img} alt={proj.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
                      <div className="absolute inset-0 bg-pink-500/10 group-hover:bg-transparent transition"></div>
                    </div>
                    <div className="p-2.5">
                      <h4 className="font-bold text-[11px] text-white truncate">{proj.title}</h4>
                      <div className="flex flex-wrap gap-1 mt-1.5">
                        {proj.tags.map((t, i) => (
                          <span key={i} className="text-[8px] bg-pink-500/20 text-pink-300 px-1.5 py-0.5 rounded">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-pink-500/20 flex justify-between items-center text-[10px] text-gray-400">
                <span>LIGHT MODE / DARK MODE</span>
                <a href="#" className="text-pink-400 font-bold flex items-center gap-1 hover:underline">
                  View All Projects <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          </section>
        </div>



        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          
          <section id="skills" className="bg-[#121826] border border-pink-500/25 rounded-3xl p-6 md:p-8 shadow-[0_0_25px_rgba(255,42,133,0.1)] flex flex-col justify-between">
            <div>
              <div className="text-center mb-6">
                <h2 className="text-xl font-bold flex items-center justify-center gap-2 text-white">
                   My Skills 
                </h2>
                <p className="text-[11px] text-gray-400 mt-0.5">Technologies I work with</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="space-y-3.5 flex-1 w-full">
                  {[
                    { name: "PHP", level: "90%" },
                    { name: "C#", level: "85%" },
                    { name: "HTML & CSS", level: "95%" },
                    { name: "Javascript", level: "80%" },
                    { name: "React.js & Node.js", level: "75%" },

                  ].map((skill, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between text-[11px] font-semibold text-gray-300">
                        <span>{skill.name}</span>
                        <span className="text-pink-400 font-mono">{skill.level}</span>
                      </div>
                      <div className="w-full h-2 bg-[#182033] rounded-full overflow-hidden border border-pink-500/20">
                        <div 
                          className="h-full bg-gradient-to-r from-pink-500 to-rose-400 rounded-full shadow-[0_0_10px_rgba(255,42,133,0.8)]"
                          style={{ width: skill.level }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                
                
              </div>
            </div>
          </section>

          
          <section id="contact" className="bg-[#121826] border border-pink-500/25 rounded-3xl p-6 md:p-8 
          shadow-[0_0_25px_rgba(255,42,133,0.1)] flex flex-col justify-between">
            <div>
              <div className="text-center mb-6">
                <h2 className="text-xl font-bold flex items-center justify-center gap-2 text-white">
                   Contact Me 
                </h2>
                <p className="text-[11px] text-gray-400 mt-0.5">Get in touch with me</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6">
                
                <div className="w-28 h-36 rounded-2xl bg-gradient-to-b from-pink-500/20 to-pink-600/10 border border-pink-500/40
                 flex flex-col items-center justify-center p-4 shadow-[0_0_30px_rgba(255,42,133,0.4)] shrink-0">
                  <Phone size={42} className="text-pink-400 animate-pulse drop-shadow-[0_0_12px_rgba(255,42,133,0.9)]" />
                  <span className="text-[9px] font-bold text-pink-300 mt-2 uppercase tracking-wider">Let's Talk</span>
                </div>

                
                <form onSubmit={handleSubmit} className="space-y-3 flex-1 w-full">
                  <input 
                    type="text" 
                    required
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-[#182033] border border-pink-500/20 rounded-xl px-3.5 py-2 text-xs text-white
                     placeholder-gray-500 focus:outline-none focus:border-pink-500 transition"
                  />
                  <input 
                    type="email" 
                    required
                    placeholder="Your Email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-[#182033] border border-pink-500/20 rounded-xl px-3.5 py-2 text-xs
                     text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition"
                  />
                  <textarea 
                    rows={3}
                    required
                    placeholder="Your Message" 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-[#182033] border border-pink-500/20 rounded-xl px-3.5 py-2 text-xs text-white
                     placeholder-gray-500 focus:outline-none focus:border-pink-500 transition resize-none"
                  ></textarea>

                  
                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-[#ff2a85] to-[#ff539a] text-white py-2.5 rounded-xl text-xs font-bold tracking-wider 
                    uppercase flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,42,133,0.5)] hover:brightness-110 transition cursor-pointer"
                  >
                    <Send size={14} /> Send Message
                  </button>
                </form>
              </div>

              <div className="mt-4 pt-3 border-t border-pink-500/20 flex flex-wrap justify-between items-center text-[10px] text-gray-400">
                <span>📧 yinkyi467@gmail.com</span>
                <span>📱 +959 427 748 661</span>
              </div>
            </div>
          </section>

        </div>

      </div>

      
      <footer className="mt-16 text-center text-xs text-gray-500 border-t border-pink-500/20 pt-6">
        <p>© 2026 DD Portfolio • React & Vite</p>
      </footer>

    </div>
  );
}

function TikTokIcon(props) {
  return (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .56.04.83.1v-3.5a6.34 6.34 0 0 0-.83-.05A6.33 6.33 0 0 0 3 15.65a6.34 6.34 0 0 0 10.83 4.47V10.8a8.28 8.28 0 0 0 5.76 2.27V9.62a4.84 4.84 0 0 1-3.32-1.33v-1.6z"/>
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
  );
}