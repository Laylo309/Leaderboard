const leaderboardApi = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

const leaderboard = () => {
  fetch(leaderboardApi, {
    method: 'POST',
    body: JSON.stringify({
      name: 'My new Game',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => json)
    .catch((err) => err);
};
export default leaderboard;
