/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(pdf|docx)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next',
          name: 'static/media/[name].[hash].[ext]',
        },
      },
    });

    return config;
  },
  env: {
    LOCALHOST: 'http://localhost:3000',
    DEPLOY: 'https://ijopt.co.in/',
  },
};

export default nextConfig;
