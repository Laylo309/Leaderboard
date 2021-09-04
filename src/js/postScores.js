const myApi = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/N08D8RBmZ6I1HYiYFCDT/scores';

const postScore = async () => {
  const inputName = document.getElementById('floating-name');
  const inputScore = document.getElementById('floating-score');

  await fetch(myApi, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      user: `${inputName.value}`,
      score: `${inputScore.value}`,
    }),
  });
};

const getByApi = async (url) => {
  const response = await fetch(url);

  const result = await response.json();

  return result;
};

export { postScore, getByApi };
