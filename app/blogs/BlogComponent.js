import dynamic from 'next/dynamic';

export const components = {
  'prefabricated-modular-houses-urban-living-sustainable-cost-effective-homes': dynamic(() => import('../components/blogs/blog-post/PrefabricatedModularHousesUrbanLivingSustainableCostEffectiveHomes')),
  'architectural-services-for-modern-homes': dynamic(() => import('../components/blogs/blog-post/ArchitecturalServicesForModernHomes')),
  'interior-design-trends': dynamic(() => import('../components/blogs/blog-post/InteriorDesignTrends')),
  'second-blog': dynamic(() => import('../components/blogs/blog-post/SecondBlog.js')),
};
