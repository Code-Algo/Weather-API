


 api = '41b84da564f429fb07ddd990f0a632d2'

 document.getElementById("search").onclick = function (event){
    // stops the click event from bubbling
    event.stopPropagation();
    // prevent page reloads on click
    event.preventDefault();
    console.log("Form was submitted")
    const city=document.getElementsByName("city")[0].value
    console.log(city)
    doAPICall(city);
}

const tableData = document.getElementsByClassName("table-data")
console.log(tableData)

async function doAPICall(city){
    let result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`)
    console.log(result)
    result=result.data
 
    tableData[0].innerText=((result['main'].temp_max - 273.15) * 9/5 + 32).toFixed(1) + 'F'

    tableData[1].innerText=((result['main'].temp_min - 273.15) * 9/5 + 32).toFixed(1) + 'F'

    tableData[2].innerText=result.weather['0'].description

    tableData[3].innerText=result['main'].humidity
}