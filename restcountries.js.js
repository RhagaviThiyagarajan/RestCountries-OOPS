//1.Get all the countries from Asia continent /region using Filter function
var request=XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all');
request.send();
request.onload=function()
{
    var countryData=JSON.parse(this.response);
    const asia=countryData.filter((element)=>
    {
        if(element.region==='Asia')
        {
            return element.name;
        }
    })
    console.log(asia);
}


// 2. Get all the countries with population of less than 2 lacs using Filter function
var request=XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all');
request.send();
request.onload=function()
{
    var countryData=JSON.parse(this.response);
    const population=countryData.filter((element)=>
    {
        if(element.population<200000);
    })
    console.log(population);
}
// 3. Print the following details
// name, capital, flag using forEach function.


var request=XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all');
request.send();
request.onload=function()
{
    var countryData=Json.parse(this.response);
    countryData.forEach((element)=>
    {
        console.log(element.name,
            element.capital,
            element.flag);
    })
}

//4)Print the total population of countries using reduce function

var request=XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all');
request.send();
request.onload=function()
    {
        var countryData=Json.parse(this.response);
        const population=countryData.reduce((acc,element)=>
            {
return acc+element.population;
            },0 )
            console.log(population);
        }
        
  //5)Print the country which uses US Dollars as currency.
  var request=XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all');
request.send();
request.onload=function()
{
    var countryData=Json.parse(this.response);
    var cur=[];
    for(i=0;i<countryData.length;i++)
    {
        if(countryData[i].currencies[0].code==='USD')
        {
            console.log(countryData[i].currencies[0].code);
        }
    }
}


