"use client";
import Link from 'next/link';
import { blogs } from '../blogData';
import Image from 'next/image';

import PageTopSection from '../components/page-top-section';
import React, { useState } from 'react';

// export const metadata = {
//   title: 'Blogs by Skyrise Construction & Interiors',
//   description: 'Explore Skyrise Construction & Interiors blogs here. Explore the latest construction and interior design trends here.',
  
// }

export default function BlogList() {
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ["All", ...new Set(blogs.map((blog) => blog.category))];

  const filterBlogs = (category) => {
    if(category === 'All') {
      setFilteredBlogs(blogs);
    } else {
      const filtered = blogs.filter((blog) => blog.category === category);
      setFilteredBlogs(filtered);
    }
    setActiveCategory(category);
  }

  return (
    <>
      <head>
        <link rel="canonical" href="https://www.skyriseconstruction.in/blogs" />
      </head>
      <PageTopSection title="Latest Blogs by Skyrise" subTitle="Explore the latest construction and interior news and trends" />
      <section>
        <div className='container mx-auto px-4'>
          <div className="mb-10">
            {categories.map((catg, index) => (
              <button className={activeCategory === catg ? 'btn btn-primary' : 'mr-6 ml-6 font-semibold text-[18px]'} key={index} onClick={() => filterBlogs(catg)}>{catg}</button>
            ))}
          </div>
          <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
            {filteredBlogs.map((blog) => (
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
                    <h4 className='mb-4 text-[20px] lg:text-[24px] leading-9'>{blog.title}</h4>
                    <p className='text-base leading-7 lg:leading-8 lg:text-[18px]'>{blog.description}</p>
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
