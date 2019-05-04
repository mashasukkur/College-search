function x() 
{

let request = new XMLHttpRequest();
let userinput = document.getElementById('userInput')

let url = `https://api.data.gov/ed/collegescorecard/v1/schools?school.city=${userinput.value}%20college&api_key=aqrQOOIPPcld3m6PIIVjOzOOmGPu5aeDpo0gHi0n`;



//console.log(userinput);


request.open("GET", url, true);
request.onload = function() {
    let data = JSON.parse(this.response);
    console.log(data);
    if(request.status >= 200 && request.status < 400)
    {
        console.log(data.results["0"]["2014"]);
        document.getElementById("collegename").innerHTML= "College:" + data.results[0].school.name;
    }
}
request.send();
}
