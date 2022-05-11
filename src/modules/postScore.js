export default ({ user, score }) => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/2E64OsG4g1JjcstMkAMd/scores';
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