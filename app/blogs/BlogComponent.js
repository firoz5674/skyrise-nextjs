import dynamic from 'next/dynamic';

export const components = {
  'prefabricated-modular-houses-urban-living-sustainable-cost-effective-homes': dynamic(() => import('../components/blogs/blog-post/PrefabricatedModularHousesUrbanLivingSustainableCostEffectiveHomes')),
  'architectural-services-for-modern-homes': dynamic(() => import('../components/blogs/blog-post/ArchitecturalServicesForModernHomes')),
  'interior-design-trends': dynamic(() => import('../components/blogs/blog-post/InteriorDesignTrends')),
  'trending-interior-design-styles': dynamic(() => import('../components/blogs/blog-post/TrendingInteriorDesignStyles')),
  'home-construction-guide': dynamic(() => import('../components/blogs/blog-post/HomeConstructionGuide')),
  'how-to-choose-best-construction-company-delhi-ncr': dynamic(() => import('../components/blogs/blog-post/HowToChooseBestConstructionCompanyDelhiNcr')),
  'interior-design-and-construction-services': dynamic(() => import('../components/blogs/blog-post/interiorDesignAndConstructionServices')),
  'second-blog': dynamic(() => import('../components/blogs/blog-post/SecondBlog.js')),
};
