/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              svgoConfig: {
                plugins: [
                  {
                    name: "removeViewBox",
                    active: false,
                  },
                ],
              },
            },
          },
        ],
      });
    return config;
  },
  images: {
    disableStaticImages: true,
    remotePatterns: [
      {
        protocol:'https',
        hostname:'avatars.githubusercontent.com'
      }
    ]
  },
};

export default nextConfig;
