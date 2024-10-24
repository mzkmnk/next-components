/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   ppr: 'incremental',
  // },
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
  },
};

export default nextConfig;
