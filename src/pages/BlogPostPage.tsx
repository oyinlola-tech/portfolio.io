import { Link, useParams } from 'react-router-dom';
import { getBlogPostBySlug } from '../data/blogPosts';

export function BlogPostPage() {
  const { slug = '' } = useParams();
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return (
      <main className="px-4 md:px-8 lg:px-32 py-16">
        <p className="font-['Fira_Code'] text-white mb-4">Post not found.</p>
        <Link to="/blog" className="font-['Fira_Code'] text-[#c778dd]">Back to blog</Link>
      </main>
    );
  }

  return (
    <main className="px-4 md:px-8 lg:px-32 py-16 md:py-24">
      <article className="max-w-4xl mx-auto border border-[#abb2bf] p-6 md:p-8">
        <p className="font-['Fira_Code'] text-[#c778dd] text-sm mb-2">{post.category} | {post.readTime}</p>
        <h1 className="font-['Fira_Code'] text-white text-3xl mb-4">{post.title}</h1>
        <p className="font-['Fira_Code'] text-[#abb2bf] text-sm mb-6">By {post.author}</p>

        {post.metrics && (
          <div className="grid md:grid-cols-3 gap-3 mb-6">
            {post.metrics.map((metric) => (
              <div key={metric.label} className="border border-[#1e2128] p-3">
                <p className="font-['Fira_Code'] text-[#abb2bf] text-xs">{metric.label}</p>
                <p className="font-['Fira_Code'] text-white text-base">{metric.value}</p>
              </div>
            ))}
          </div>
        )}

        <div className="font-['Fira_Code'] text-[#abb2bf] leading-relaxed whitespace-pre-wrap text-sm">
          {post.content}
        </div>
      </article>
    </main>
  );
}
