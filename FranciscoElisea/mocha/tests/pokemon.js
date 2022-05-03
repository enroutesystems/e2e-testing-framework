const { expect } = require('chai');
const { getPokemon } = require('../endpoints/pokemon');

describe('Search Pokemon by name and id', () => {
    it('GET /pokemon/charmander', (done) => {
        getPokemon('charmander')
            .end((err, res) => {
                const { charmander } = require('../data-mocks/pokemons')
                const { body } = res;

                expect(charmander.name).to.eql(body.name);
                expect(charmander.id).to.eql(body.id);
                expect(charmander.weight).to.eql(body.weight);
                expect(charmander.height).to.eql(body.height);
        
                done();
            });
    });

    it('GET /pokemon/4', (done) => {
        getPokemon(4)
            .end((err, res) => {
                const { charmander } = require('../data-mocks/pokemons')
                const { body } = res;

                expect(charmander.name).to.eql(body.name);
                expect(charmander.id).to.eql(body.id);
                expect(charmander.weight).to.eql(body.weight);
                expect(charmander.height).to.eql(body.height);
        
                done();
            });
    });
});

describe('Validate the pokemon endpoint status', () => {
    it('GET /pokemon/1 - status 200', (done) => {
        getPokemon(1)
            .end((err, res) => {
                expect(200).to.eql(res.status);
                done();
            });
    });

    it('GET /pokemon/wrong - status 404 not found', (done) => {
        getPokemon('wrong')
            .end((err, res) => {
                expect(404).to.eql(res.status);
                done();
            });
    });
});
