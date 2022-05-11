export default ({ user, score }) => {
  const mainWrapper = document.querySelector('.recent-scores');
  const scoreWrapper = document.createElement('div');
  scoreWrapper.classList.add('score');
  const text = document.createElement('span');
  text.innerText = `${user}: ${score}`;
  scoreWrapper.appendChild(text);
  mainWrapper.appendChild(scoreWrapper);
};