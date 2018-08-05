var Election = artifacts.require("./Election.sol");

contract("Election", function(accounts) {
    
    it("initializes with three candidates", function() {
        return Election.deployed().then(function(instance) {
            return instance.candidatesCount();
        }).then(function(count) {
            assert.equal(count, 3);
        });
    });

    it("Andres Manuel is the first candidate", function() {
        return Election.deployed().then(function(instance) {
            return instance.candidates(1);
        }).then(function(candidate) {
            assert.equal(candidate[1], 'Andres Manuel Lopez Obrador');
        });
    });

    it("All the candidates has 0 votes", function() {
        return Election.deployed().then(function(instance) {
            electionInstance = instance;
            return electionInstance.candidates(1);
        }).then(function(candidate) {
            assert.equal(candidate[2], 0, "contain the correct votes of Andres Manuel");
            return electionInstance.candidates(2);
        }).then(function(candidate) {
            assert.equal(candidate[2], 0, "contain the correct votes of Andres Manuel");
            return electionInstance.candidates(3);
        }).then(function(candidate) {
            assert.equal(candidate[2], 0, "contain the correct votes of Andres Manuel");
        });
    });
});