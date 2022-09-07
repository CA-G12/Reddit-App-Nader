fetch("/posts")
  .then((data) => data.json())
  .then((res) => {
    console.log(res);
  });