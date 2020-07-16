fetch('http://example.com/api-endpoint', {
  method: 'POST', // this can be GET, POST, PUT, DELETE, etc depending on the API's standards
  body: 'hello, api' // this can be any data you choose to transmit through a POST or PUT request
  // there are other options as well, check out the MDN article
})
.then(response => response.json()) // the response object has several properties
                                   // the most commonly used are .json() and .status()
.then(data => {
  console.log(data); // now you can do whatever you want with the data, which is the property of the
                     // response object you passed above.  You can also pass the entire response object
});