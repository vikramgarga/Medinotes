import { Logo } from '../ui/Logo';

export function Footer() {
  return (
    <footer className="bg-[#07404b] text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <Logo className="justify-center mb-4" />
        <p>&copy; {new Date().getFullYear()} MediNotes. All rights reserved.</p>
      </div>
    </footer>
  );
}