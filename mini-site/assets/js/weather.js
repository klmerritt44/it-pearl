 //weather api stuff //
 function getTemperature() {
    fetch("https://geocoding-api.open-meteo.com/v1/search?name=Eureka+Springs&count=10&language=en&format=json")
    .then(response => response.json())
    .then(json => {
        let latitude = json.results[0].latitude;
        let longitude = json.results[0].longitude;
        fetch("https://api.open-meteo.com/v1/forecast?latitude="+latitude+"&longitude="+longitude+"&hourly=temperature_2m&temperature_unit=fahrenheit&timezone=auto")
        .then(weatherResponse => weatherResponse.json())
        .then(weatherJson => {
            console.log(weatherJson)
        // // Convert date to unix milliseconds
        // let unixmillsec = Date.parse(weatherJson.hourly.time[i]);
        // // Create temporary date variable 
        // let tmpdate = new Date(unixmillsec);
        // // Extract the date/time string for a more friendly format
        // tempdate[i] = tmpdate.toLocaleString();
        })
        //alert(latitude);
    });
    
 }