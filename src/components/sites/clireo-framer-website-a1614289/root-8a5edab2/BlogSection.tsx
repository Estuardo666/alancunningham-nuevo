import { PrimaryButton } from "../shared/PrimaryButton";
import { SectionEyebrow } from "../shared/SectionEyebrow";
import { RevealText } from "../shared/RevealText";
import { PostCard } from "@/components/site/Cards";
import { POSTS_HOME } from "@/content/posts";

export function BlogSection() {
  return (
    <section
      id="blog"
      className="flex justify-center bg-background px-5 pt-20 pb-16 lg:px-8 lg:pt-[140px] lg:pb-[90px]"
    >
      <div className="flex w-full max-w-[1300px] flex-col items-start gap-10">
        <div className="flex w-full flex-col items-start justify-between gap-6 lg:flex-row lg:items-end lg:gap-1">
          <div className="flex flex-col items-start gap-2">
            <SectionEyebrow tone="coral">Blog</SectionEyebrow>
            <RevealText
              as="h2"
              text="Lo que conviene saber antes de decidir"
              blur={8}
              className="max-w-[520px] text-[34px] leading-[38px] tracking-[-1.8px] text-foreground lg:text-[46px] lg:leading-[49.68px] lg:tracking-[-2.53px]"
            />
          </div>
          <PrimaryButton
            label="Ver todos los artículos"
            href="/blog"
            variant="secondary"
          />
        </div>

        <div className="grid w-full justify-items-start gap-x-8 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
          {POSTS_HOME.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
