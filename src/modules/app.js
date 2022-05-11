import addScore from './addScore.js';
import getScores from './getScores.js';

const nameField = document.getElementById('userName');
const scoreField = document.getElementById('userScore');
const submitScore = document.getElementById('submitScore');
const refreshButton = document.getElementById('refresh');

refreshButton.addEventListener('click', async () => {
  let userScores = [];
  try {
    userScores = await getScores();
  } catch (e) {
    return `Error! ${e}`;
  }
  if (userScores.result.length > 0) {
    userScores.result.forEach((arr) => {
      addScore({
        name: arr.user,
        score: arr.score,
      });
    });
  }
  return 'Added scores';
});

submitScore.addEventListener('click', (e) => {
  e.preventDefault();
  const name = nameField.value;
  const score = scoreField.value;
  if (name && score) {
    addScore({
      name,
      score,
    });
    scoreField.value = '';
    nameField.value = '';
  }
});