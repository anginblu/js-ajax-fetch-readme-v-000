const app = "I don't do much.";

const token = 'YOUR_TOKEN_HERE'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${53b867317cbba365a67090e6e83598292e325726}`
  }
}).then(res => res.json()).then(json => console.log(json));
