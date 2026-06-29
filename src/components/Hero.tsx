"use client";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative hero-pattern pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeInUp">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm text-gray-300">Trusted by Leading Healthcare Providers</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transform Your Business with{" "}
              <span className="gradient-text">Smart IT Solutions</span>
            </h1>

            <p className="text-lg text-gray-400 mb-8 max-w-lg">
              We build powerful ERP systems, CRM solutions, modern websites, and handle your
              social media presence. Your success is our mission.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary text-center">
                Get Free Consultation
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#services" className="btn-secondary text-center">
                Explore Services
              </a>
            </div>

            <div className="flex items-center gap-8 mt-12">
              <div>
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-sm text-gray-400">Projects Delivered</div>
              </div>
              <div className="w-px h-12 bg-gray-700"></div>
              <div>
                <div className="text-3xl font-bold gradient-text">100%</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div>
              <div className="w-px h-12 bg-gray-700"></div>
              <div>
                <div className="text-3xl font-bold gradient-text">24/7</div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 gradient-bg opacity-20 rounded-full blur-3xl"></div>
            <div className="relative animate-float">
              <div className="w-full aspect-square max-w-lg mx-auto">
                <svg viewBox="0 0 500 500" className="w-full h-full">
                  {/* Abstract tech illustration */}
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                  </defs>

                  {/* Central circle */}
                  <circle cx="250" cy="250" r="120" fill="none" stroke="url(#grad1)" strokeWidth="2" opacity="0.5" />
                  <circle cx="250" cy="250" r="80" fill="none" stroke="url(#grad1)" strokeWidth="2" opacity="0.7" />
                  <circle cx="250" cy="250" r="40" fill="url(#grad1)" opacity="0.8" />

                  {/* Orbiting elements */}
                  <g className="animate-spin" style={{ transformOrigin: '250px 250px', animationDuration: '20s' }}>
                    <circle cx="250" cy="100" r="15" fill="#6366f1" />
                    <circle cx="400" cy="250" r="12" fill="#10b981" />
                    <circle cx="250" cy="400" r="18" fill="#f59e0b" />
                    <circle cx="100" cy="250" r="10" fill="#6366f1" />
                  </g>

                  {/* Connection lines */}
                  <line x1="250" y1="130" x2="250" y2="210" stroke="url(#grad1)" strokeWidth="2" opacity="0.5" />
                  <line x1="290" y1="250" x2="370" y2="250" stroke="url(#grad1)" strokeWidth="2" opacity="0.5" />
                  <line x1="250" y1="290" x2="250" y2="370" stroke="url(#grad1)" strokeWidth="2" opacity="0.5" />
                  <line x1="210" y1="250" x2="130" y2="250" stroke="url(#grad1)" strokeWidth="2" opacity="0.5" />

                  {/* Data nodes */}
                  <rect x="180" y="150" width="40" height="40" rx="8" fill="#1e293b" stroke="url(#grad1)" strokeWidth="2" />
                  <rect x="280" y="150" width="40" height="40" rx="8" fill="#1e293b" stroke="url(#grad1)" strokeWidth="2" />
                  <rect x="180" y="310" width="40" height="40" rx="8" fill="#1e293b" stroke="url(#grad1)" strokeWidth="2" />
                  <rect x="280" y="310" width="40" height="40" rx="8" fill="#1e293b" stroke="url(#grad1)" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-gray-500 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
