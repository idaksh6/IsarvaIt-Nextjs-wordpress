import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      
      <div className="max-w-4xl mx-auto px-6 pt-44 lg:pb-20 pb-10 text-center">
        <div className="mb-8">
          <div className="text-9xl font-black text-gray-200 mb-4">404</div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 uppercase tracking-tight">
            Article Not Found
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Sorry, we couldn't find the blog post you're looking for. It may have been moved or deleted.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-full transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            <span>Browse All Articles</span>
          </Link>
          
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold rounded-full transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>Go Home</span>
          </Link>
        </div>

        <div className="mt-16 bg-gray-50 rounded-2xl p-8 border border-gray-100">
          <h2 className="text-2xl text-gray-900 mb-4 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter uppercase">Popular Articles</h2>
          <p className="text-gray-600 mb-4">
            Check out some of our most popular content while you're here:
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link href="/blog?category=ai-ml" className="px-4 py-2 bg-white hover:bg-emerald-50 border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">
              AI & ML
            </Link>
            <Link href="/blog?category=development" className="px-4 py-2 bg-white hover:bg-emerald-50 border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">
              Development
            </Link>
            <Link href="/blog?category=product-updates" className="px-4 py-2 bg-white hover:bg-emerald-50 border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">
              Product Updates
            </Link>
            <Link href="/blog?category=cybersecurity" className="px-4 py-2 bg-white hover:bg-emerald-50 border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">
              Cybersecurity
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
