const loadParser = async () => {
    const parser = await import('./parser.mjs');
    return parser;
};

module.exports = {
    loadParser
};