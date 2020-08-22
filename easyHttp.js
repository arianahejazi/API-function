// AJAX
class restApi{
    constructor(){
        this.http = new XMLHttpRequest;
    }

    // get
    getPosts(url , callback){
        this.http.open('GET' , url , true);
        this.http.onload = () => {
            if(this.http.status === 200){
                // console.log("okkkkkk");
              
                callback(this.http.responseText)
            }
        }
        this.http.send();

    }
    // post
    // put
    // delete
}






// FETCH 
class fetch{
    get(url){
        return new Promise((resolve,reject)=>{
            fetch(url).then((res) =>{ return res.json()})
            .then((data) => {console.log(data)})
            .catch((err) =>{console.log(err)})
        })
    }

    post(url,data){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method:'POST',
               headers:{
                    'content-type':'application/json'
               },
               body:JSON.stringify(data)
            }).then((res) =>{ return res.json()})
            .then((data) => {resolve(data)})
            .catch((err) =>{reject(err)})
        })
    }
}






// ***async and await
class async{
    // async khode function dar asl y promis return mkone 
    async get(url){
        // *** await : yni await fetch(url); sabr kon ta kamel ejara bshe bad brx toye reponse
        let response = await fetch(url);
        let users = await response.json();
        return users;
    }

    async post(url,data){
            let response = await fetch(url,{
                method:'POST',
               headers:{
                    'content-type':'application/json'
               },
               body:JSON.stringify(data)
            })

            let users = await response.json();
            return users;s
    }
}
