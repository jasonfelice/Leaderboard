export default ({ user, score }) => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/t49nM0xxQMcedjKnsxRS/scores';
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user,
      score,
    }),
  });
};