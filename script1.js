fetch('http://example.com/api-endpoint', {
  method: 'POST',
  body: 'hello, api' 
 
})
.then(response => response.json())
                                  
.then(data => {
  console.log(data);
                     
});
