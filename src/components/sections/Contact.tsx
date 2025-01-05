import { Phone, Mail, MapPin } from 'lucide-react';
import { Section } from '../ui/Section';
import { SectionTitle } from '../ui/SectionTitle';
import { CONTACT_INFO } from '../../constants/content';

const ICONS = {
  phone: Phone,
  email: Mail,
  address: MapPin
};

export function Contact() {
  return (
    <Section id="contact">
      <SectionTitle>Contact Us</SectionTitle>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <div className="space-y-6">
            {CONTACT_INFO.map(({ type, text }) => {
              const Icon = ICONS[type as keyof typeof ICONS];
              return (
                <div key={type} className="flex items-center space-x-4 text-[#07404b]">
                  <Icon className="w-6 h-6" />
                  <span>{text}</span>
                </div>
              );
            })}
          </div>
        </div>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-[#07404b]"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-[#07404b]"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-[#07404b]"
          ></textarea>
          <button className="bg-[#07404b] text-white px-8 py-3 rounded-lg hover:bg-[#bcdc49] hover:text-[#07404b] transition duration-300">
            Send Message
          </button>
        </form>
      </div>
    </Section>
  );
}