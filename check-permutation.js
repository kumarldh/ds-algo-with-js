/**
 * Given two strings, write a method to decide if one is a permutation of the other.
 * checkPermutation('aeiou', 'eioua') => true
 * checkPermutation('chetan', 'sharma') => false
 */

const checkPermutation = (str, perm) => {
  if (str.length !== perm.length) return false;
  return str.split('').sort().join('') === perm.split('').sort().join('');
};

[
  ['aeiou', 'eioua'],
  ['chetan', 'sharma'],
  ['dog', 'god'],
].forEach((e) =>
  console.log(
    `checkPermutation('${e[0]}', '${e[1]}') => ${checkPermutation(e[0], e[1])}`
  )
);
