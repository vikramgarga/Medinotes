export function About() {
  return (
    <section id="about" className="py-20 bg-[#c6e5de]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#07404b] mb-12 text-center">About MediNotes</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
              alt="Digital Healthcare"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <p className="text-lg mb-6">
              MediNotes is an AI-powered digital health records platform revolutionizing how healthcare 
              providers manage patient information. Our intelligent system uses machine learning to enable 
              seamless collaboration while maintaining the highest standards of data security.
            </p>
            <p className="text-lg">
              Through AI-driven analytics and automation, we're making healthcare more efficient, 
              reducing human errors, and improving patient outcomes across the healthcare ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}