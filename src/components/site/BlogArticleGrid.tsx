"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { PostCard } from "@/components/site/Cards";
import type { Post } from "@/content/posts";

const ALL = "Todos";

/** Client-side category filtering keeps the article grid live without a page reload. */
export function BlogArticleGrid({ posts }: { posts: Post[] }) {
  const categories = useMemo(
    () => [ALL, ...Array.from(new Set(posts.map((post) => post.categoria)))],
    [posts],
  );
  const [activeCategory, setActiveCategory] = useState(ALL);
  const [visible, setVisible] = useState(true);
  const [renderedCategory, setRenderedCategory] = useState(ALL);
  const transitionRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (transitionRef.current !== null) window.clearTimeout(transitionRef.current);
    };
  }, []);

  const visiblePosts = posts.filter(
    (post) => renderedCategory === ALL || post.categoria === renderedCategory,
  );

  function filterBy(category: string) {
    if (category === activeCategory) return;
    setActiveCategory(category);
    setVisible(false);
    if (transitionRef.current !== null) window.clearTimeout(transitionRef.current);
    transitionRef.current = window.setTimeout(() => {
      setRenderedCategory(category);
      setVisible(true);
      transitionRef.current = null;
    }, 180);
  }

  return (
    <div className="flex w-full flex-col gap-8">
      <div className="flex flex-wrap items-center gap-2" aria-label="Filtrar artículos por categoría">
        {categories.map((category) => {
          const active = category === activeCategory;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={active}
              onClick={() => filterBy(category)}
              className={`rounded-full px-4 py-2 text-[14px] leading-[18px] tracking-[-0.14px] transition-colors duration-200 ${
                active
                  ? "bg-primary text-primary-foreground"
                  : "bg-primary/10 text-foreground hover:bg-primary/20"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div
        className={`grid w-full gap-8 transition-all duration-200 ease-out sm:grid-cols-2 lg:grid-cols-3 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
        }`}
        aria-live="polite"
      >
        {visiblePosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
