const {initPlugin} = require('cypress-plugin-snapshots/plugin');

module.exports = (on, config) => {
    const options = {
        outputRoot: config.projectRoot + '/logs/',
        outputTarget: {
            'out.txt': 'txt',
            'out.json': 'json',
        }
    };

    initPlugin(on, config);
    require('cypress-terminal-report/src/installLogsPrinter')(on, options);
    return config;
};
