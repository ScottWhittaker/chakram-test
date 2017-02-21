const chakram = require('chakram'),
    expect = chakram.expect;

describe("Chakram", function() {
    it("should provide HTTP specific assertions", function () {
        const response = chakram.get("http://httpbin.org/get");
        return expect(response).to.have.status(200);
    });
});

describe("Chakram", function() {
    it("should return a 200 response", function () {
        const response = chakram.get("http://google.com");
        return expect(response).to.have.status(200);
    });
});

const api = 'http://swapi.co/api/';
const peopleAPI = `${api}people/`;
const starshipsAPI = `${api}starships/`;

describe('SWAPI API', function() {

    it('should return a 200 response', function () {
        const response = chakram.get(api);
        return expect(response).to.have.status(200);
    });

    describe('People', () => {

        it('should return Darth Vader', function () {
            return chakram.get(`${peopleAPI}4/`)
                .then(response => {
                    expect(response.body.name).to.equal('Darth Vader')
                });
        });

        it('should return The Princess', function () {
            return chakram.get(`${peopleAPI}5/`)
                .then(response => {
                    expect(response.body.name).to.equal('Leia Organa')
                });
        });

    });

    describe('Starships', () => {

        const deathStartUrl = `${starshipsAPI}9/`;

        it('should return the Death Star', function () {
            return chakram.get(deathStartUrl)
                .then(response => {
                    expect(response.body.name).to.equal('Death Star');
                });
        });

        it('should return a hyperdrive rating of 4.0 for the Death Star', function () {
            return chakram.get(deathStartUrl)
                .then(response => {
                    expect(response.body.hyperdrive_rating).to.equal('4.0');
                });
        });

    });
});
