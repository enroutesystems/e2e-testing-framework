let chai = require('chai');
const http = require('chai-http');

// This is a middleware
chai.use(http);

const url = 'https://pokeapi.co/api/v2';

function getPokemon(nameOrId) {
    return chai.request(url)
        .get(`/pokemon/${nameOrId}`);
}

module.exports = { getPokemon };