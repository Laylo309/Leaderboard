const myApi =
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/5YR6tabo7tvHObEZexNL/scores';

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
  // const res = await data.json();
  // return res;
};

const getByApi = async (url) => {
  const response = await fetch(url);

  const result = await response.json();

  return result;
};

export { postScore, getByApi };
