"use client";

const teamMembers = [
  {
    name: "Kamal Arora",
    role: "Co-Founder",
    description: "Passionate about building innovative solutions and driving digital transformation for businesses.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    name: "Ritesh Kumar",
    role: "Co-Founder",
    description: "Expert in building scalable systems and delivering high-quality software solutions.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    name: "Karan Chugh",
    role: "Co-Founder",
    description: "Dedicated to creating seamless user experiences and robust technology platforms.",
    color: "from-orange-500 to-amber-500",
  },
  {
    name: "Karan Kharana",
    role: "Co-Founder",
    description: "Focused on building strong client relationships and driving business growth.",
    color: "from-pink-500 to-rose-500",
  },
];

const Team = () => {
  return (
    <section id="team" className="section bg-[#0a1120]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-indigo-400 mb-4">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet the <span className="gradient-text">Experts</span> Behind Aikya Labs
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A dedicated team of professionals committed to delivering excellence
            and driving your business success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="card text-center group">
              <div className="relative mb-6">
                <div className={`w-32 h-32 mx-auto rounded-full bg-gradient-to-br ${member.color} p-1`}>
                  <div className="w-full h-full rounded-full bg-[#1e293b] flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                </div>
                <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity`}></div>
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-indigo-400 text-sm font-medium mb-3">{member.role}</p>
              <p className="text-gray-400 text-sm">{member.description}</p>
              <div className="flex justify-center gap-4 mt-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
