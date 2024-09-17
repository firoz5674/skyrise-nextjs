import dynamic from 'next/dynamic';

export const components = {
  'prefabricated-modular-houses-urban-living-sustainable-cost-effective-homes': dynamic(() => import('../components/blogs/blog-post/PrefabricatedModularHousesUrbanLivingSustainableCostEffectiveHomes')),
  'second-blog': dynamic(() => import('../components/blogs/blog-post/SecondBlog.js')),
};
