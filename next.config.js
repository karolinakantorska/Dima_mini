/** @type {import('next').NextConfig} */
/*module.exports = {
  reactStrictMode: true,
}*/
const withTM = require('next-transpile-modules')([
    //'@mui/material',
    //'@mui/system',
    //'@mui/icons-material'
]); // pass the modules you would like to see transpiled

module.exports = withTM({
    images: {
        domains: ['firebasestorage.googleapis.com'],
    },
    reactStrictMode: true,
    /*
    webpack: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@mui/styled-engine': '@mui/styled-engine-sc',
        };
        return config;
    },
    */
});
