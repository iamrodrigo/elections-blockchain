pragma solidity 0.4.24;

contract Election {

    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }

    // mapping Like a hash table
    // uint is the key
    // Candidate is the value
    mapping(uint => Candidate) public candidates;

    /* to keep track of how many candidates
    are stored in the map, because if the
    map has 2 values and we search for number
    99, the map will return a blank candidate 
    */
    uint public candidatesCount;

    constructor() public {
        addCandidate("Andres Manuel Lopez Obrador");
        addCandidate("Jose Antonio Meade");
        addCandidate("Ricardo Anaya");        
    }

    function addCandidate (string _name) private {
        candidatesCount++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    }
}