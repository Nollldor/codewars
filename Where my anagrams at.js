/*Write a function that will find all the anagrams of a word from a list.
You will be given two inputs a word and an array with words.
You should return an array of all the anagrams or an empty array if there are none
 */

function anagrams(word, words) {
    //sortedWord is sorted array of word's char
    let sortedWord = word.split('').sort();

    function isAnagram(anagramWord){
        let sortedAnagramWord = anagramWord.split('').sort();

        /*
        compare of two arrays with array.every():
        const equals = (a, b) =>
          a.length === b.length &&
          a.every((v, i) => v === b[i]);
        */
        return (sortedWord.length === sortedAnagramWord.length &&
            sortedWord.every((v, i) => v === sortedAnagramWord[i]));
    }

    //create result array with array.filter
    let anagramArray = words.filter(isAnagram);

    return anagramArray;
}

let result = anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']);

console.log(result);
