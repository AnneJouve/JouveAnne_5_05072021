const objectId = "5be9cc611c9d440000c1421e";
let url = `http://localhost:3000/api/furniture/${objectId}`;
fetch(url)
    .then( response => response.json())
    .then( data => {
        console.log(data);
    });