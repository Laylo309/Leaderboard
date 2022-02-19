const scoreTable = document.getElementById('leaderboard-table');

const displayScore = (data) => {
  scoreTable.innerHTML = '';
  data.forEach((data, index) => {
    scoreTable.innerHTML += `<tr><td id="player-${index}">${data.user}: ${data.score}</td></tr>`;
  });
};

export default displayScore;
