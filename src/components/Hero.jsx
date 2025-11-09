import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-indigo-700 bg-indigo-50 rounded-full px-3 py-1 text-xs font-medium mb-4">
              <Sparkles className="h-4 w-4" />
              <span>Welcome</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              A clean personal site to share who I am and what I build
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Simple, fast, and beautiful. Built with React and Tailwind.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-md hover:bg-gray-800 transition">
                View my projects <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 border border-gray-300 px-5 py-3 rounded-md text-gray-900 hover:bg-gray-50 transition">
                Get in touch
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 shadow-sm" />
          </div>
        </div>
      </div>
    </section>
  );
}
