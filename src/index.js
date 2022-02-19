import _ from 'lodash'; // eslint-disable-line
import displayScore from './js/inputData.js';
import { postScore, getByApi } from './js/postScores.js';

// const myApi = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/N08D8RBmZ6I1HYiYFCDT/scores';
const myApi = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/itAQRCB8H1z21PFkumFt/scores';
const scoresForm = document.getElementById('scoresForm');
const refreshBttn = document.getElementById('refreshBttn');

refreshBttn.addEventListener('click', () => {
  getByApi(myApi).then((response) => {
    displayScore(response.result);
  });
});

scoresForm.addEventListener('submit', (e) => {
  e.preventDefault();
  postScore();
  scoresForm.reset();
});

getByApi(myApi).then((res) => {
  displayScore(res.result);
});
