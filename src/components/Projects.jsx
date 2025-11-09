import { Code2, Globe, Smartphone } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A sleek, responsive portfolio with smooth interactions and a modern aesthetic.",
    icon: Globe,
    badge: "Featured",
  },
  {
    title: "Mobile App UI",
    description: "A cross-platform interface focused on clarity, speed, and accessibility.",
    icon: Smartphone,
  },
  {
    title: "Open Source Tools",
    description: "Small utilities that make everyday development a little easier.",
    icon: Code2,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Projects</h2>
            <p className="text-gray-600 mt-1">A few things I’ve been working on lately.</p>
          </div>
          <a href="#contact" className="text-sm text-indigo-700 hover:text-indigo-800">Work together →</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div key={idx} className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-700 grid place-items-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-gray-900">{p.title}</h3>
                      {p.badge && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200">{p.badge}</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{p.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
