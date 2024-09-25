// /app/blog/page.js

import Link from 'next/link';
import { blogs } from '../blogData';
import Image from 'next/image';
import blogBg from "../assets/images/blog-bg.png";

export const metadata = {
  title: 'Blogs by Skyrise Construction & Interiors',
  description: 'Explore Skyrise Construction & Interiors blogs here. Explore the latest construction and interior design trends here.',
  canonical: 'https://www.skyriseconstruction.in/blogs'
}

export default function BlogList() {
  return (
    <>
      <head>
        <link rel="canonical" href="https://www.skyriseconstruction.in/blogs" />
      </head>
      <section className='relative'>
        <Image
          src={blogBg}
          className="w-full z-[-1] h-full absolute top-[50%] object-cover translate-y-[-50%]"
          priority
          alt=""
        />
        <div className='container text-center mx-auto px-4'>
          <ul className='flex justify-center'>
            <li><Link href="/" className='inline-block mr-3'>Home</Link> <span className='inline-block mr-4'>&gt;</span> </li>
            <li><Link href="/blog" className='opa opacity-75'>Blog</Link></li>
          </ul>
          <h1 className='mb-4'>Latest Blogs by Skyrise</h1>
          <p>Explore the latest construction and interior news and trends</p>
        </div>
      </section>
      <section>
        <div className='container mx-auto px-4'>
          <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
            {blogs.map((blog) => (
              <li key={blog.url} className='shadow-main-shadow rounded-xl mb-4'>
                <Link href={`/blogs/${blog.url}`}>
                  <Image
                    src={blog.thumbnail}
                    className="w-full h-[260px] object-cover rounded-tl-xl rounded-tr-xl"
                    priority
                    alt={blog.title}
                  />
                  <div className='px-6 pt-6 pb-10'>
                    <div className='flex justify-between mb-[12px]'>
                      <p className='font-semibold text-primary-color text-base italic'>Posted: {blog.postDate}</p>
                      <p className='font-semibold text-primary-color text-base italic'>{blog.author}</p>
                    </div>
                    <h4 className='mb-4'>{blog.title}</h4>
                    <p className='text-[18px]'>{blog.description}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
