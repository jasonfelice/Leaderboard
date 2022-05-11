export default async () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/t49nM0xxQMcedjKnsxRS/scores';
  return (await fetch(url)).json();
};