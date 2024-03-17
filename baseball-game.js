/**
 * Check https://leetcode.com/problems/baseball-game/description/ for details
 * getScore(["5","2","C","D","+"]) => 30
 * getScore(["5","-2","4","C","D","9","+","+"]) => 27
 * getScore(["1","C"]) => 0
 *
 */

const getScore = (inputOps) => {
  const scoreStack = [],
    finalScore = 0;
  inputOps.forEach((e) => {
    let score = 0;
    const idx = scoreStack.length;
    if (e === '+') {
      score = (scoreStack[idx - 1] || 0) + (scoreStack[idx - 2] || 0);
    } else if (e === 'D') {
      score = (scoreStack[idx - 1] || 0) * 2;
    } else if (e === 'C') {
      scoreStack.pop();
    } else {
      score = Number(e);
    }
    if (score !== 0) {
      scoreStack.push(score);
    }
  });

  if (scoreStack.length) {
    return scoreStack.reduce((sum, score) => score + sum, 0);
  }

  return finalScore;
};

[
  ['5', '2', 'C', 'D', '+'],
  ['5', '-2', '4', 'C', 'D', '9', '+', '+'],
  ['1', 'C'],
  ['C', 'D', '+'],
  ['1', '2', 'C'],
].forEach((e) => console.log(`getScore(${e}) => ${getScore(e)}`));
