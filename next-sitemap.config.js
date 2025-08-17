/** @type {import('next-sitemap').IConfig} */
const chapters = [
    { number: 1, name: "Real Numbers" },
    { number: 2, name: "Polynomials" },
    { number: 3, name: "Pair of Linear Equations in Two Variables" },
    { number: 4, name: "Quadratic Equations" },
    { number: 5, name: "Arithmetic Progressions" },
    { number: 6, name: "Triangles" },
    { number: 7, name: "Coordinate Geometry" },
    { number: 8, name: "Introduction to Trigonometry" },
    { number: 9, name: "Some Applications of Trigonometry" },
    { number: 10, name: "Circles" },
    { number: 11, name: "Constructions" },
    { number: 12, name: "Areas Related to Circles" },
    { number: 13, name: "Surface Areas and Volumes" },
    { number: 14, name: "Statistics" },
    { number: 15, name: "Probability" },
    { number: 'rd', name: "RD Sharma Solutions" }
  ];
  
  module.exports = {
    siteUrl: 'https://learncbse.vercel.app',
    generateRobotsTxt: true,
    changefreq: 'weekly',
    priority: 0.8,
    sitemapSize: 5000,
    exclude: ['/admin/*'],
  
    additionalPaths: async (config) => {
      const paths = chapters.map(chapter => {
        const slug = `/chapter-${chapter.number}-${chapter.name.toLowerCase().replace(/\s+/g, "-")}`;
        return {
          loc: `${config.siteUrl}${slug}`,
          changefreq: config.changefreq,
          priority: config.priority,
          lastmod: new Date().toISOString()
        };
      });
      return paths;
    }
  };
  