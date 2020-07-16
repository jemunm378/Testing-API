fetch('https://api.scratch.mit.edu/users/you/messages/count', {
  method: 'GET',
  body: 'hello, api' 
 
})
.then(response => response.json())
                                  
.then(data => {
  console.log(data);
                     
});
