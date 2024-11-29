fetch('https://api.github.com/users/abhishek-7408')
.then((response) => {
    return response.json()
})

.then((data) => {
    console.log(data);
    
})

.catch((error)=> console.log(error))