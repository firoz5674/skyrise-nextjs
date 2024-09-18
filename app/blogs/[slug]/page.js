
import { blogs } from '@/app/blogData';
import { components } from '../BlogComponent';


export async function generateMetadata({ params }) {
  const { slug } = params;
  if (typeof slug !== 'string') {
    throw new Error('Invalid blog slug.');
  }
  const blog = blogs.find((post) => post.url === slug);

  if (!blog) {
    return {
      title: 'Blog Not Found - Skyrise Construction',
      description: 'Blog post not found.',
      alternates: {
        canonical: 'https://www.skyriseconstruction.in/blogs/not-found',
      },
    };
  }

  return {
    title: blog.title,
    description: blog.description,
    alternates: {
      canonical: `https://www.skyriseconstruction.in/blogs/${slug}`,
    },
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: `https://www.skyriseconstruction.in/blogs/${slug}`,
      // images: [
      //   {
      //     url: blog.thumbnail || 'https://www.yourfallbackimageurl.com/default.jpg',
      //     width: 800,
      //     height: 600,
      //     alt: blog.title || 'Default image',
      //   },
      // ],
    },
  };
}

export default function BlogPostPage({ params }) {
  const { slug } = params;

  const BlogPostComponent = components[slug] || (() => <h1>404 - Blog Post Not Found</h1>);

  return (
    <>
    <div>
      <BlogPostComponent />
    </div>
    </>
    
  );
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.url,
  }));
}
