interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <a href={href} className="hover:text-[#bcdc49] transition-colors">
      {children}
    </a>
  );
}