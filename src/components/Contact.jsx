import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Contact</h2>
        <p className="mt-3 text-gray-600">Have an opportunity or just want to say hi? I’d love to hear from you.</p>
        <div className="mt-6 flex justify-center">
          <a
            href="mailto:me@example.com"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-md hover:bg-gray-800 transition"
          >
            <Mail className="h-4 w-4" />
            Email me
          </a>
        </div>
      </div>
    </section>
  );
}
