const url = 'https://json-server--3000.local.webcontainer.io/comments';

fetch(url)
  .then(r => r.json())
  .then((json) => {
    console.log(JSON.stringify(json))
  });
