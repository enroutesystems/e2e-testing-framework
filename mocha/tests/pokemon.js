const { getPokemon } = require('../endpoints/pokemon');

describe('Search Pokemon by name and id', () => {
    it('GET /pokemon/charmander', (done) => {
        const { charmander } = require('../data-mocks/pokemons')
        getPokemon('charmander', charmander);
        done();
    });

    it('GET /pokemon/4', (done) => {
        const { charmander } = require('../data-mocks/pokemons')
        getPokemon('4', charmander);
        done();
    })
});