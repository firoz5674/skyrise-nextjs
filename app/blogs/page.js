// /app/blog/page.js

import Link from 'next/link';
import { blogs } from '../blogData';
import Image from 'next/image';
import about from "../assets/images/about.png";

export default function BlogList() {
  return (
    <section>
      <div className='container mx-auto px-4'>
        <h1>Blog Posts</h1>
        <ul className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6'>
          {blogs.map((blog) => (
            <li key={blog.url} className='shadow-main-shadow rounded-xl mb-4'>
              <Link href={`/blogs/${blog.url}`}>
                <Image
                  src={about}
                  className="w-full h-[260px] object-cover"
                  priority
                  alt={blog.title}
                />
                <div className='px-6 pt-8 pb-10'>
                  <h4 className='mb-4'>{blog.title}</h4>
                  <p className='text-[18px]'>{blog.description}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
