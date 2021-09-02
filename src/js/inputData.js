/* eslint-disable import/extensions */
import { allData } from './allData';

const scoreTable = document.getElementById('leaderboard-table');

const inputData = () => {
  scoreTable.innerHTML = 'Score';
  allData.forEach((data) => {
    scoreTable.innerHTML += `<tr><td>${data.Name}: ${data.Score}</td></tr>`;
  });
};

// eslint-disable-next-line import/prefer-default-export
export { inputData };