import addScore from './addScore.js';
import getScores from './getScores.js';
import postScore from './postScore.js';

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
        user: arr.user,
        score: arr.score,
      });
    });
  }
  return 'Added scores';
});

submitScore.addEventListener('click', (e) => {
  e.preventDefault();
  const user = nameField.value;
  const score = scoreField.value;
  if (user && score) {
    addScore({
      user,
      score,
    });
    postScore({
      user,
      score,
    });
    scoreField.value = '';
    nameField.value = '';
  }
});