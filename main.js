const apiKey = '41e44f5d31098d5ed0a2f1a5c6c9f482'; //API key from OpenWeatherMap.org
const my_location = 'Carmel, IN, Indiana';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${my_location}&APPID=${apiKey}`;
console.log(apiUrl);

function init() {
	$.getJSON(apiUrl, function(data) {
	const temp = Math.round(data.main.temp - 273.15); 
	const description = data.weather[0].description;
	
	$('#temp').text(`${temp}°C`);
	$('#description').text(description);
	});

	$('#weather-card').remove();
	const weatherCardHtml = `
	<div id="weather-card">
		<h2 id="location">${my_location}</h2>
		<p id="temp"></p>
		<p id="description"></p>
	</div>
	`;
	$('body').append(weatherCardHtml);
}

$(document).ready(init);
