"use client";

const erpClients = [
  {
    name: "Saraswati Eye Care",
    location: "Jind, Haryana",
    doctor: "Dr. Rajesh Garg",
    type: "Eye Hospital",
    description: "Complete Hospital ERP solution managing patient records, appointments, OPD/IPD, billing, inventory, and detailed reporting.",
    erpLink: "https://erp.saraswatieyecarecentre.com",
    status: "Live",
  },
  {
    name: "Prem Eye & Maternity Hospital",
    location: "Barnala, Punjab",
    doctor: "Dr. Rupesh Singla",
    type: "Multi-Specialty Hospital",
    description: "Integrated Hospital ERP handling eye care and maternity services with complete digital operations management.",
    erpLink: "https://erp.premeyeandmaternityhospital.com",
    status: "Live",
  },
];

const projects = [
  {
    name: "ZivoDoc",
    description: "Healthcare platform connecting patients with doctors for seamless medical consultations.",
    link: "https://zivodoc.com/",
    category: "Healthcare",
    status: "Live",
  },
  {
    name: "Lynth",
    description: "Innovative digital solutions platform empowering businesses with cutting-edge technology.",
    link: "https://lynth.co/in",
    category: "Technology",
    status: "Live",
  },
  {
    name: "FloCRM",
    description: "Powerful CRM solution helping businesses manage customer relationships effectively.",
    link: "https://flocrm.co/",
    category: "CRM",
    status: "Live",
  },
  {
    name: "Capilus",
    description: "Advanced hair restoration technology platform with modern digital presence.",
    link: "https://capilus.in/",
    category: "Healthcare",
    status: "Live",
  },
  {
    name: "Complete Grow",
    description: "Australian business growth platform offering comprehensive digital marketing solutions.",
    link: "https://completegrow.com.au/",
    category: "Marketing",
    status: "Live",
  },
];

const testimonials = [
  {
    quote: "Choosing Aikya Labs was the best decision for our hospital. Their ERP system has revolutionized how we operate - from patient registration to final billing, everything is now streamlined and error-free. Our daily patient handling capacity increased by 40% and staff productivity improved significantly. The team's dedication, 24/7 support, and deep understanding of healthcare workflows is truly exceptional. I strongly recommend Aikya Labs to every hospital looking for digital transformation!",
    author: "Dr. Rajesh Garg",
    designation: "Director",
    company: "Saraswati Eye Care, Jind",
    rating: 5,
  },
  {
    quote: "Outstanding work by the Aikya Labs team! Managing both our eye care and maternity departments from a single integrated system has been a game-changer. Their support is exceptional and they truly understand healthcare needs. Best technology investment we've made for our hospital.",
    author: "Dr. Rupesh Singla",
    designation: "Director",
    company: "Prem Eye & Maternity Hospital, Barnala",
    rating: 5,
  },
];

const Clients = () => {
  return (
    <section id="clients" className="section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-indigo-400 mb-4">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by <span className="gradient-text">Leading Businesses</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From Hospital ERPs to websites and CRM solutions, we deliver excellence across industries.
          </p>
        </div>

        {/* Live ERP Systems */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-8">
            Live <span className="gradient-text">Hospital ERP Systems</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {erpClients.map((client, index) => (
              <div key={index} className="card relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    {client.status}
                  </span>
                </div>

                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm text-indigo-400 font-medium">{client.type}</span>
                    <h3 className="text-xl font-bold mt-1">{client.name}</h3>
                    <div className="flex items-center gap-2 mt-1 text-gray-400 text-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {client.location}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-4 p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold">{client.doctor}</p>
                    <p className="text-indigo-400 text-sm">Hospital Director</p>
                  </div>
                </div>

                <p className="text-gray-400 mb-4">{client.description}</p>

                <a
                  href={client.erpLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Visit ERP Portal
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Portfolio */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-8">
            Our <span className="gradient-text">Live Projects</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card group hover:border-indigo-500 transition-all relative"
              >
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    {project.status}
                  </span>
                </div>
                <div className="flex items-center justify-between mb-4 pr-16">
                  <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-medium">
                    {project.category}
                  </span>
                </div>
                <h4 className="text-lg font-bold mb-2 group-hover:text-indigo-400 transition-colors flex items-center gap-2">
                  {project.name}
                  <svg className="w-4 h-4 text-gray-500 group-hover:text-indigo-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </h4>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">7+</div>
            <p className="text-gray-400">Projects Delivered</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">2</div>
            <p className="text-gray-400">Live ERPs</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">100%</div>
            <p className="text-gray-400">Client Satisfaction</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
            <p className="text-gray-400">Support</p>
          </div>
        </div>
      </div>

      {/* Testimonials - Separate Section with Different Background */}
      <div className="bg-gradient-to-b from-[#0a1120] to-[#0f172a] py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full glass text-sm text-yellow-400 mb-4">
              Testimonials
            </span>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              What Our <span className="gradient-text">Clients Say</span>
            </h3>
            <p className="text-gray-400 max-w-xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-2 text-6xl text-indigo-500/20 font-serif">"</div>

                <div className="card bg-gradient-to-br from-[#1e293b] to-[#0f172a] border-indigo-500/20 relative overflow-hidden">
                  {/* Glow Effect */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>

                  <div className="relative">
                    {/* Rating Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-gray-300 text-base leading-relaxed mb-6 italic">
                      "{testimonial.quote}"
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-4 pt-4 border-t border-gray-700/50">
                      <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-indigo-500/20">
                        {testimonial.author.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <p className="font-bold text-white text-lg">{testimonial.author}</p>
                        <p className="text-indigo-400 text-sm font-medium">{testimonial.designation}</p>
                        <p className="text-gray-500 text-xs">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
