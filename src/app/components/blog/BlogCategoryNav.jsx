"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getBlogCategories } from "../../lib/services/blog-service";

export default function BlogCategoryNav() {
  const [categories, setCategories] = useState([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";

  useEffect(() => {
    async function fetch() {
      const cats = await getBlogCategories();
      setCategories(cats);
    }
    fetch();
  }, []);

  const handleCategoryClick = (catSlug) => {
    const params = new URLSearchParams(searchParams.toString());
    if (catSlug === "all") {
      params.delete("category");
    } else {
      params.set("category", catSlug);
    }
    router.push(`/blog?${params.toString()}`);
  };

  return (
    <nav className="bg-gray-50 border-b border-gray-100 py-4 sticky top-[72px] z-40 backdrop-blur-md bg-white/80">
      <div className="max-w-7xl mx-auto px-6 overflow-x-auto scrollbar-hide">
        <ul className="flex items-center gap-8 whitespace-nowrap min-w-max">
          <li>
            <button 
              onClick={() => handleCategoryClick("all")}
              className={`font-bold text-sm tracking-wider uppercase transition-colors px-4 py-2 rounded-full ${
                activeCategory === "all" ? "text-emerald-600 bg-emerald-50" : "text-gray-500 hover:text-emerald-600"
              }`}
            >
              All Posts
            </button>
          </li>
          {categories.map((cat) => (
            <li key={cat.id}>
              <button 
                onClick={() => handleCategoryClick(cat.slug)}
                className={`font-bold text-sm tracking-wider uppercase transition-colors px-4 py-2 rounded-full ${
                  activeCategory === cat.slug ? "text-emerald-600 bg-emerald-50" : "text-gray-500 hover:text-emerald-600"
                }`}
              >
                {cat.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
