import BlogList from "../../components/BlogList";
import { getAllPosts } from "../../lib/blogData";
import BackArrow from "../../components/BackArrow";

export const metadata = {
  title: "Blog — Wonderful Cannabis",
  description: "News, guides, and tips from Wonderful Cannabis.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  return (
    <main className="section tint-b">
      {/* Top-left back arrow (falls back to home if no history) */}
      <BackArrow fallback="/" />

      <div className="container">
        <header className="mb-4">
          <div className="eyebrow">Our Blog</div>
          <h1>Insights, News & Guides</h1>
          <p className="lead">Search posts or tap a card to read.</p>
        </header>

        <BlogList posts={posts} />
      </div>
    </main>
  );
}
