import addScore from './addScore.js';

const nameField = document.getElementById('userName');
const scoreField = document.getElementById('userScore');
const submitScore = document.getElementById('submitScore');

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