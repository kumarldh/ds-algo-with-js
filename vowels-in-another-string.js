/**
 * Given 2 strings s1 and s2, remove all characters from s2 which are in not in s1 and then return the number of all vowels in s2 or -1
 * countVowels("ace", "aghhyce") => 1
 */

const countVowels = (s1, s2) => {
  const setFromS2 = new Set(s1);
  const vowelsArray = ['a', 'e', 'i', 'o', 'u'];
  const filteredArray = s2.split('').filter((e) => setFromS2.has(e));
  return filteredArray.filter((e) => vowelsArray.indexOf(e) > -1).length || -1;
};

[
  ['ace', 'aghhyce'],
  ['pace', 'space'],
  ['kill', 'bill'],
  ['elf', 'Hello World!'],
].forEach((e) =>
  console.log(`countVowels('${e[0]}', '${e[1]}') => ${countVowels(e[0], e[1])}`)
);
