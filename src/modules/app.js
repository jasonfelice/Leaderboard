import addScore from './addScore.js';
import getScores from './getScores.js';
import postScore from './postScore.js';

const nameField = document.getElementById('userName');
const scoreField = document.getElementById('userScore');
const submitScore = document.getElementById('submitScore');
const refreshButton = document.getElementById('refresh');
const clearList = () => {
  const allScores = document.querySelectorAll('.score');
  allScores.forEach((each) => each.remove());
};

refreshButton.addEventListener('click', async () => {
  const promptMessage = document.getElementById('prompt');
  clearList();
  let userScores = [];
  try {
    userScores = await getScores();
    promptMessage.classList.toggle('success');
    promptMessage.textContent = 'List has been updated successfully';
  } catch (e) {
    promptMessage.classList.toggle('fail');
    promptMessage.textContent = 'Something went wrong while updating the list';
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
    postScore({
      user,
      score,
    });
    scoreField.value = '';
    nameField.value = '';
  }
});