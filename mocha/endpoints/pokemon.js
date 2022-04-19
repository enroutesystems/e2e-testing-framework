let chai = require('chai');
const http = require('chai-http');
const expect = require('chai').expect;

// This is a middleware
chai.use(http);

const url = 'https://pokeapi.co/api/v2';

function getPokemon(nameOrId, data) {
    chai.request(url)
        .get(`/pokemon/${nameOrId}`)
        .end((err, res) => {
            const pokemon = res.body;
            expect(pokemon.name).to.eql(data.name);
            expect(pokemon.id).to.eql(data.id);
            expect(pokemon.weight).to.eql(data.weight);
            expect(pokemon.height).to.eql(data.height);
        });
}

module.exports = { getPokemon };