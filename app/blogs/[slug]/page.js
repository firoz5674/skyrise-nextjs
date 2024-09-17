
import { blogs } from '@/app/blogData';
import { components } from '../BlogComponent';

export default function BlogPostPage({ params }) {
  const { slug } = params;

  const BlogPostComponent = components[slug] || (() => <h1>404 - Blog Post Not Found</h1>);

  return (
    <div>
      <BlogPostComponent />
    </div>
  );
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.url,
  }));
}
