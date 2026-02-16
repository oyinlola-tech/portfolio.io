export {
  blogPosts,
  getAllBlogPosts,
  getBlogPostBySlug,
  getBlogPostsByCategory,
  getRecentBlogPosts,
} from './blogPosts';

import { blogPosts } from './blogPosts';

export function getAllCategories(): string[] {
  return Array.from(new Set(blogPosts.map((post) => post.category)));
}

export function getAllTags(): string[] {
  return Array.from(new Set(blogPosts.flatMap((post) => post.tags)));
}
