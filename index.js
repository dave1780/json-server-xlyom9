const url = 'https://json-server--3000.local.webcontainer.io/comments';

fetch(url)
  .then(r => r.json())
  .then((json) => {
    document.write(JSON.stringify(json))
  });
