import { Github, Linkedin, Mail } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-gray-900 text-lg">My Site</a>
        <nav className="flex items-center gap-5 text-sm">
          <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          <div className="w-px h-5 bg-gray-200" />
          <a href="https://github.com" aria-label="GitHub" className="text-gray-600 hover:text-gray-900"><Github className="h-5 w-5" /></a>
          <a href="https://linkedin.com" aria-label="LinkedIn" className="text-gray-600 hover:text-gray-900"><Linkedin className="h-5 w-5" /></a>
          <a href="mailto:me@example.com" aria-label="Email" className="text-gray-600 hover:text-gray-900"><Mail className="h-5 w-5" /></a>
        </nav>
      </div>
    </header>
  );
}
