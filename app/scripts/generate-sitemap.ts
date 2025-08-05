// app/scripts/generate-sitemap.ts

import fs from "fs";
import path from "path";

const domain = "https://diorsolutions.site";

const pages = [
  "", // root page
  "about",
  "projects",
  "contact",
  // Qo'shimcha sahifalaringni shu yerga yoz
];

const generateSitemap = () => {
  const urls = pages.map((page) => {
    return `
  <url>
    <loc>${domain}/${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.join("\n")}
  </urlset>`;

  const filePath = path.join(process.cwd(), "public", "sitemap.xml");

  fs.writeFileSync(filePath, sitemap.trim());

  console.log("✅ sitemap.xml created in /public");
};

generateSitemap();
