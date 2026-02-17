import { useState } from 'react';
import { toast } from 'sonner';
import { site } from '../lib/site';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    website: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/sendmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const payload = await response.json();

      if (!response.ok || !payload.success) {
        throw new Error(payload.message || 'Failed to send message');
      }

      toast.success('Message sent successfully.');
      setFormData({ name: '', email: '', subject: '', message: '', website: '' });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to send message right now.';
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative px-4 md:px-8 lg:px-32 py-16 md:py-24">
      <div className="absolute left-0 bottom-1/4 w-32 h-32 border border-[#abb2bf] opacity-20 hidden lg:block" />
      <div className="absolute right-0 top-1/3 w-24 h-24 border border-[#abb2bf] opacity-20 hidden lg:block" />

      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-['Fira_Code'] font-medium text-3xl whitespace-nowrap">
            <span className="text-[#c778dd]">#</span>
            <span className="text-white">contact</span>
          </h2>
          <div className="h-px bg-[#c778dd] flex-1 max-w-xs" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-6">
            <p className="font-['Fira_Code'] text-[#abb2bf] leading-relaxed">
              Open to full-time opportunities, freelance projects, and collaboration on meaningful product work.
            </p>

            <div className="space-y-4">
              <div className="border border-[#abb2bf] p-4">
                <h3 className="font-['Fira_Code'] font-semibold text-white mb-3">Message me</h3>
                <div className="space-y-2 font-['Fira_Code'] text-[#abb2bf]">
                  <a href={`mailto:${site.email}`} className="block hover:text-white transition-colors">
                    {site.email}
                  </a>
                  <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">
                    LinkedIn
                  </a>
                  <a href={site.github} target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">
                    GitHub
                  </a>
                  <a href={site.twitter} target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">
                    X (Twitter)
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-[#abb2bf] p-6 md:p-8">
            <h3 className="font-['Fira_Code'] font-semibold text-white text-xl mb-6">Send a message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div>
                <label htmlFor="name" className="block font-['Fira_Code'] text-[#abb2bf] mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1e2128] border border-[#abb2bf] px-4 py-2 text-white font-['Fira_Code'] focus:outline-none focus:border-[#c778dd] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-['Fira_Code'] text-[#abb2bf] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1e2128] border border-[#abb2bf] px-4 py-2 text-white font-['Fira_Code'] focus:outline-none focus:border-[#c778dd] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block font-['Fira_Code'] text-[#abb2bf] mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1e2128] border border-[#abb2bf] px-4 py-2 text-white font-['Fira_Code'] focus:outline-none focus:border-[#c778dd] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-['Fira_Code'] text-[#abb2bf] mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-[#1e2128] border border-[#abb2bf] px-4 py-2 text-white font-['Fira_Code'] focus:outline-none focus:border-[#c778dd] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full font-['Fira_Code'] font-medium text-white bg-[#8f3db2] px-6 py-3 hover:bg-[#7c349b] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
