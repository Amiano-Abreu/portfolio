/** @type {import('next').NextConfig} */
const nextConfig = { 
    webpack(config) {
        config.module.rules.push({
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/i,
            use: [
                {
                loader: 'file-loader',
                options: {
                    publicPath: '/_next/static/media/',
                    outputPath: 'static/media/',
                    name: '[name].[hash].[ext]',
                },
                },
            ],
        });

        return config;
    },
    typescript: {
        ignoreBuildErrors: true,
    }
};

export default nextConfig;
