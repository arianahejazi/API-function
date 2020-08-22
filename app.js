let http = new restApi();

let posts = http.getPosts("https://jsonplaceholder.typicode.com/posts/1/comments" , function (posts){
    console.log(posts)
});


let http = new fetch();
http.get("link -  url");


// fetch async and await

let user = {name:'john' , username :'johndo'}

http.posts = http.post("https://jsonplaceholder.typicode.com/posts/1/comments" , user)
.then(user => console.log(user))
.catch(err => console.log(err))

