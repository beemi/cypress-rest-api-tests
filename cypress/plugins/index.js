module.exports = (on, config) => {
    const options = {
        outputRoot: config.projectRoot + '/logs/',
        outputTarget: {
            'out.txt': 'txt',
            'out.json': 'json',
        }
    };

    require('cypress-terminal-report/src/installLogsPrinter')(on, options);
};
