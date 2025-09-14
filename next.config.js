/** @type {import('next').NextConfig} */
module.exports = {
  output: "export",          // builds static files in /out
  images: { unoptimized: true },
  trailingSlash: true        // gives /blog -> /blog/index.html (nice for static hosts)
};


module.exports = nextConfig;


