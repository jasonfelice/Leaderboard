import addScore from './addScore.js';

export default async ({ user, score }) => {
  const promptMessage = document.getElementById('prompt');
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/t49nM0xxQMcedjKnsxRS/scores';
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user,
      score,
    }),
  }).then(() => {
    addScore({
      user,
      score,
    });
    promptMessage.classList.toggle('success');
    promptMessage.textContent = 'You score has been posted successfully!';
  }).catch(() => {
    promptMessage.classList.toggle('fail');
    promptMessage.textContent = 'Can\'t post the score. Something went wrong';
  });
};