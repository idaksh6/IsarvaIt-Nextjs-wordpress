"use client";

export default function AuthorCard({ author }) {
  if (!author) return null;

  return (
    <div className="bg-gray-50 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-8 mt-16 border border-gray-100">
      <img 
        src={author.avatar} 
        alt={author.name}
        className="w-24 h-24 rounded-full border-4 border-white shadow-xl"
      />
      <div className="flex-1 text-center md:text-left">
        <h3 className="mb-2 uppercase">
          About {author.name}
        </h3>
        <p className="text-emerald-600 font-bold text-sm uppercase tracking-widest mb-4">
          {author.role}
        </p>
        <p className="text-gray-600 leading-relaxed max-w-2xl">
          {author.name} is a seasoned professional at Isarva, dedicated to helping businesses grow through innovative technology solutions and world-class infrastructure. With years of experience in the industry, they bring deep insights into the digital landscape.
        </p>
        <div className="mt-6 flex justify-center md:justify-start gap-4">
            <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-400 hover:text-emerald-600 cursor-pointer transition-colors shadow-sm">𝕏</span>
            <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-400 hover:text-emerald-600 cursor-pointer transition-colors shadow-sm">in</span>
        </div>
      </div>
    </div>
  );
}
