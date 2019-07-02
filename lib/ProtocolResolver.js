const Core = require('../protocols/core');

class ProtocolResolver {
    /**
     * @returns Core
     */
    create(protocolId) {
        const protocol = require(`../protocols/${protocolId}.js`);
        return new protocol();
    }
}

module.exports = ProtocolResolver;
