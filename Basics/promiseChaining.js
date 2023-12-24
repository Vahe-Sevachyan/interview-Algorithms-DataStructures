fakePromiseRequest("yelp.com/api/tech/page1")
  .then((data) => {
    console.log("Successful, full filled status");
    console.log(data);
  })
  .then((data) => {
    console.log("Successful2, full filled status");
    console.log(data);
  })
  .catch((err) => {
    console.log("Error, request rejected");
  });
