import { Phone, Mail, MapPin } from 'lucide-react';

const contactInfo = [
  { icon: <Phone className="w-6 h-6" />, text: "+1 (555) 123-4567" },
  { icon: <Mail className="w-6 h-6" />, text: "contact@medinotes.com" },
  { icon: <MapPin className="w-6 h-6" />, text: "123 Healthcare Ave, Medical District" }
];

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#07404b] mb-12 text-center">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-4 text-[#07404b]">
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              ))}
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
      </div>
    </section>
  );
}