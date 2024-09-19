/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`,
  generateRobotsTxt: true,
};
