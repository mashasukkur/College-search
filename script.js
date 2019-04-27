function x() 
{

let request = new XMLHttpRequest();
let userinput = document.getElementById('userInput')

let url = "https://api.data.gov/ed/collegescorecard/v1/schools?school.city=brooklyn%20college&api_key=aqrQOOIPPcld3m6PIIVjOzOOmGPu5aeDpo0gHi0n" + ${userinput};



//console.log(userinput);


request.open("GET", url, true);
request.onload = function() {
    let data = JSON.parse(this.response);
    console.log(data);
    if(request.status >= 200 && request.status < 400)
    {
        console.log(data);
        document.getElementById("collegename").innerHTML= "College:" + results[2014].completion;
    }
}
request.send();
}
