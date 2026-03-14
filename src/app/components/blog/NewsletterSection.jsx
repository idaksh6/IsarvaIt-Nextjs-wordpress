"use client";

export default function NewsletterSection() {
  return (
    <section className="bg-[#E9F3FF] py-24 relative overflow-hidden">
      {/* Decorative SVG/Elements from the image */}
      <div className="absolute top-10 right-20 opacity-20 hidden lg:block">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
            <circle cx="100" cy="100" r="100" fill="#3b82f6" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-emerald-400 rounded-2xl flex items-center justify-center text-3xl shadow-lg rotate-12 z-20">
                📣
            </div>
            <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800" 
                alt="Newsletter"
                className="rounded-[3rem] shadow-2xl relative z-10 aspect-[4/3] object-cover"
            />
        </div>

        <div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Sign Up For More Awesome Content!
            </h2>
            <p className="text-lg text-gray-600 mb-10">
                Sign up for our newsletter with the latest content and offer updates. You can unsubscribe at any time.
            </p>

            <form className="space-y-4 max-w-md" onSubmit={(e) => e.preventDefault()}>
                <div>
                    <input 
                        type="text" 
                        placeholder="Your Name" 
                        className="w-full bg-white rounded-xl py-4 px-6 border-none shadow-sm focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all"
                    />
                </div>
                <div>
                    <input 
                        type="email" 
                        placeholder="Email Address" 
                        className="w-full bg-white rounded-xl py-4 px-6 border-none shadow-sm focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all"
                    />
                </div>
                <div className="flex items-center gap-3">
                    <input type="checkbox" id="consent" className="w-5 h-5 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500" />
                    <label htmlFor="consent" className="text-sm text-gray-500">
                        I agree to subscribe and I accept Isarva's <span className="underline cursor-pointer">Privacy Policy</span>.
                    </label>
                </div>
                <button className="w-full py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-black uppercase tracking-[0.2em] rounded-xl transition-all shadow-xl shadow-emerald-200 mt-4 active:scale-[0.98]">
                    SUBSCRIBE NOW
                </button>
            </form>
        </div>
      </div>
    </section>
  );
}
