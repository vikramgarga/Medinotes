import { Stethoscope } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-[#07404b] text-white">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Stethoscope className="w-8 h-8" />
          <span className="text-2xl font-bold">MediNotes</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-[#bcdc49]">About</a>
          <a href="#users" className="hover:text-[#bcdc49]">Users</a>
          <a href="#benefits" className="hover:text-[#bcdc49]">Benefits</a>
          <a href="#testimonials" className="hover:text-[#bcdc49]">Testimonials</a>
          <a href="#contact" className="hover:text-[#bcdc49]">Contact</a>
        </div>
      </nav>
      
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">AI-Powered Healthcare Records Management</h1>
          <p className="text-xl mb-8">Transform patient care with our intelligent digital health platform, powered by advanced AI technology.</p>
          <button className="bg-[#bcdc49] text-[#07404b] px-8 py-3 rounded-full font-semibold hover:bg-[#c6e5de] transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}