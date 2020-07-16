fetch('https://api.scratch.mit.edu/users/you/messages/count', {
  method: 'GET',
  
 
})
.then(response => response.json())
                                  
.then(data => {
  console.log(data);
                     
});
