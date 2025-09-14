import { notFound } from "next/navigation";
import BackArrow from "../../../components/BackArrow";
import { getAllPosts } from "../../../lib/blogData";
import { mdToHtml, slugify, excerptFromMarkdown } from "../../../lib/md";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({
    slug: slugify(p.slug || p.title),
  }));
}

export function generateMetadata({ params }) {
  const post =
    getAllPosts().find((p) => slugify(p.slug || p.title) === params.slug) ||
    null;
  if (!post) return {};
  return {
    title: `${post.title} — Wonderful Cannabis`,
    description: excerptFromMarkdown(post.body, 140),
    openGraph: {
      title: post.title,
      images: post.image ? [{ url: post.image }] : [],
    },
  };
}

export default function BlogPostPage({ params }) {
  const post =
    getAllPosts().find((p) => slugify(p.slug || p.title) === params.slug) ||
    null;

  if (!post) return notFound();

  return (
    <main className="section tint-c">
      {/* Top-left back arrow (falls back to /blog if no history) */}
      <BackArrow fallback="/blog" />

      <div className="container">
        <article>
          <header className="mb-3">
            <div className="eyebrow">
              {new Date(post.date).toLocaleDateString()}
            </div>
            <h1 className="mb-2">{post.title}</h1>
          </header>

          {/* Cover image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.image}
            alt={post.title}
            className="w-full max-h-[440px] object-cover rounded-xl border border-white/10 shadow-soft"
          />

          {/* Markdown body rendered to HTML */}
          <div
            className="prose prose-invert max-w-none mt-4"
            dangerouslySetInnerHTML={{ __html: mdToHtml(post.body) }}
          />
        </article>
      </div>
    </main>
  );
}
