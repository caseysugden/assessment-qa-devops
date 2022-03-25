const {shuffleArray} = require('./utils')

// Dummy Array
let dummyArr = [1, 2, 3, 4]

describe('shuffleArray should', () => {
    // CODE HERE
    test('return an array of the same length', () => {
        let returnedArray = shuffleArray(dummyArr);
        expect(returnedArray.length).toEqual(dummyArr.length);
    });
    // test('description of second test', () => {
    //     let returnedArray = shuffleArray(dummyArr);
    //     expect(returnedArray.length).toEqual(dummyArr.length);
    // });
});