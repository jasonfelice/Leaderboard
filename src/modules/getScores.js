export default async () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/2E64OsG4g1JjcstMkAMd/scores';
  return (await fetch(url)).json();
};