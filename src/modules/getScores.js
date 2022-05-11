export default async () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/2E64OsG4g1JjcstMkAMd/scores';
  const response = await fetch(url);
  const users = await response.json();
  return users;
};