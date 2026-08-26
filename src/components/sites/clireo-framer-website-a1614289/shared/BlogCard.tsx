import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Post } from "@/content/posts";

/**
 * The blog tile shared by the home rail, the /blog index and the "related"
 * strip on an article: cover photo, date plus category chip, then the title.
 */
export function BlogCard({
  post,
  mediaClassName,
}: {
  post: Post;
  mediaClassName?: string;
}) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col gap-[18px]"
    >
      <div
        className={cn(
          "relative h-[240px] w-full overflow-hidden rounded-[14px] lg:h-[320px]",
          mediaClassName,
        )}
      >
        <Image
          src={post.imagen.src}
          alt={post.imagen.alt}
          fill
          sizes="(min-width: 1024px) 417px, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col gap-2 px-1 pb-[6px]">
        <div className="flex items-center gap-2">
          <p className="text-[16px] leading-[23.2px] tracking-[-0.24px] text-muted-foreground">
            {post.fechaTexto}
          </p>
          <span className="rounded-full bg-accent-yellow px-2 py-1 text-xs leading-none font-medium text-accent-foreground">
            {post.categoria}
          </span>
        </div>
        <h3 className="max-w-[380px] text-[26px] leading-[31.2px] tracking-[-0.91px] text-foreground sm:min-h-[62px]">
          {post.titulo}
        </h3>
      </div>
    </Link>
  );
}
