/** @type {import('next').NextConfig} */
const nextConfig = {
  // todo: interesting?
  // env: {
  //   rawJsFromFile: fs.readFileSync('./theme-initializer.js').toString()
  // }
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
