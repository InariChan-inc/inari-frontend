module.exports = {
    env: {
        ...require('./env'),
    },
    webpack: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@mui/styled-engine': '@mui/styled-engine-sc',
        };
        return config;
    }
}