 //weather api stuff //
 let weatherChart;

 function getTemperature() {
    let locationValue = document.getElementById("weather-location").value;
    locationValue = encodeURIComponent(locationValue);
    let weatherURL = "https://geocoding-api.open-meteo.com/v1/search?name=" + locationValue + "&count=10&language=en&format=json";
    fetch(weatherURL)
    //fetch("https://geocoding-api.open-meteo.com/v1/search?name=Eureka+Springs&count=10&language=en&format=json")
    .then(response => response.json())
    .then(json => {
        let latitude = json.results[0].latitude;
        let longitude = json.results[0].longitude;
        fetch("https://api.open-meteo.com/v1/forecast?latitude="+latitude+"&longitude="+longitude+"&hourly=temperature_2m&temperature_unit=fahrenheit&timezone=auto")
        .then(weatherResponse => weatherResponse.json())
        .then(weatherJson => {
            console.log(weatherJson)

            let temperatures = weatherJson.hourly.temperature_2m;
            let times = weatherJson.hourly.time;

            if (temperatures.length > 0) {
                document.getElementById("location-info").innerHTML = json.results[0].name + ", " + json.results[0].admin1 + ", " + json.results[0].country + "<br/>Latitude = " + json.results[0].latitude + " - Longitude = " + json.results[0].longitude;

                let weatherTable = "";
                weatherTable = weatherTable + "<table><caption>7-Day Forecast: Hourly Temperature</caption><tr><th>Date</th><th>Temp</th></tr>";
                for (let i = 0; i < temperatures.length; i++) {
                    // // Convert date to unix milliseconds
                    let unixmillsec = Date.parse(times[i]);
                    // // Create temporary date variable
                    let tmpdate = new Date(unixmillsec);
                    // // Extract the date/time string for a more friendly format
                    times[i] = tmpdate.toLocaleString();
                    
                    weatherTable = weatherTable + "<tr><td>" + times[i] + "</td><td>" + temperatures[i] + "</td></tr>";
                }
                weatherTable = weatherTable + "</table>"
                document.getElementById("weather-table-container").innerHTML = weatherTable;
                
                const xValues = times;
                const yValues = temperatures;
                weatherChart = new Chart("weather-chart", {
                    type: "line",
                    data: {
                        labels: xValues,
                        datasets: [{
                            data: yValues,
                            fill: false,
                            backgroundColor: "#3f95ce",
                            label: "Temperatures",
                            borderColor: "#3f95ce",
                        }]
                    },
                    options: {
                        
                    }
                });

            }
        })
    });
    
 }

 function clearForm() {
    document.getElementById("weather-location").value = "";
    document.getElementById("location-info").innerHTML = "";
    document.getElementById("weather-table-container").innerHTML = "";
    if (weatherChart) {
        weatherChart.destroy();
    }
 }

 