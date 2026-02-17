import { Link } from 'react-router-dom';
import { getAllBlogPosts } from '../data/blogPosts';

export function BlogPage() {
  const posts = getAllBlogPosts().sort((a, b) => (a.date > b.date ? -1 : 1));

  return (
    <main className="px-4 md:px-8 lg:px-32 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h1 className="font-['Fira_Code'] font-medium text-3xl whitespace-nowrap">
            <span className="text-[#c778dd]">#</span>
            <span className="text-white">blog</span>
          </h1>
          <div className="h-px bg-[#c778dd] flex-1" />
        </div>

        <div className="space-y-4">
          {posts.map((post) => (
            <article key={post.id} className="border border-[#abb2bf] p-5">
              <p className="font-['Fira_Code'] text-xs text-[#c778dd] mb-2">{post.category} | {post.readTime}</p>
              <h2 className="font-['Fira_Code'] text-white text-2xl mb-3">{post.title}</h2>
              <p className="font-['Fira_Code'] text-[#abb2bf] text-sm mb-4">{post.excerpt}</p>
              <div className="font-['Fira_Code'] text-[#abb2bf] text-xs flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => <span key={tag}>#{tag}</span>)}
              </div>
              <Link
                to={`/blog/${post.slug}`}
                className="inline-block font-['Fira_Code'] font-medium text-white border border-[#c778dd] px-4 py-2 hover:bg-[#c778dd] hover:bg-opacity-10 transition-all text-sm"
              >
                Read article
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
