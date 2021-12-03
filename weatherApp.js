// https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
// This code will check if a user presses enter in the searchbox and will press the search button.
var onEnterInput = document.getElementById("inputBox");//the input city

//Checks if user presses enter in the insert box and presses the search button instead.
onEnterInput.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("myButton").click();
    }
});

// Most of the code has been inspired from a class example on moodle and interpreted to fit the needs of the app.
// The complete URL which I will break into parts in the app: https://api.openweathermap.org/data/2.5/weather?q=dublin&appid=7fc871e9565b76eaa7d276ffc44ebf27
async function loadData(url) {
    var table = "<tr><th scope=\"col\">Region</th><th scope=\"col\">Weather</th><th scope=\"col\">Temperature</th><th scope=\"col\">Feels like</th></tr>"; //the deffault table
    var input = document.getElementById("inputBox").value;
    var finalURL = url + input + "&appid=7fc871e9565b76eaa7d276ffc44ebf27";//putting the url together
    var response = await fetch(finalURL);
    var data = await response.json();

    table += "<tr><td>" + data["name"] + "</td><td>" +
        data["weather"][0]["description"] +
        "</td><td>" +
        ((data["main"]["temp"]) - 273.15).toFixed(2) + "°" +
        "</td><td>" +
        ((data["main"]["feels_like"]) - 273.15).toFixed(2) + "°" +
        "</td></tr>";

    document.getElementById("weatherResults").innerHTML = table;
}