
//a:setup -> b:options -> c:context


//1a:Setup for main theme river 

const chartData = {
	labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'],
	datasets: [
		{
			label: 'Frustration', //red
			backgroundColor: 'rgba(255, 99, 132, 0.24)',
			borderColor: 'rgba(255, 99, 132, 1)',
			borderWidth: 1,
			data: [0, 10, 15, 21, 21, 30, 45, 37, 32, 18, 15, 15, 9, 5, 1, 1],
			fill: 'origin'
		},
		{
			label: 'Sadness', //blue
			backgroundColor: 'rgba(54, 162, 235, 0.2)',
			borderColor: 'rgba(54, 162, 235, 1)',
			borderWidth: 1,
			data: [0, 0, 0, 2, 13, 6, 12, 12, 12, 9, 5, 4, 1, 7, 8, 8],
			fill: 'origin'
		},
		{
			label: 'Happiness', //yellow
			backgroundColor: 'rgba(255, 206, 86, 0.2)',
			borderColor: 'rgba(255, 206, 86, 1)',
			borderWidth: 1,
			data: [10, 10, 15, 15, 15, 40, 55, 56, 56, 53, 45, 45, 32, 35, 33, 45],
			fill: 'origin'
		},
		{
			label: 'Excitement', //purple
			backgroundColor: 'rgba(155, 95, 224, 0.1)',
			borderColor: 'rgba(155, 95, 224, 1)',
			borderWidth: 1,
			data: [36, 30, 31, 27, 20, 10, 7, 7, 6, 5, 6, 5, 10, 9, 19, 22],
			fill: 'origin'
		},
		{
			label: 'Fear', //light green
			backgroundColor: 'rgba(139, 211, 70, 0.1)',
			borderColor: 'rgba(139, 211, 70, 1)',
			borderWidth: 1,
			data: [10, 7, 5, 2, 3, 4, 10, 11, 11, 12, 17, 4, 4, 1, 1, 0],
			fill: 'origin'
		},
		{
			label: 'Dissapointment', //light grey
			backgroundColor: 'rgba(90, 90, 90, 0.2)',
			borderColor: 'rgba(90, 90, 90, 1)',
			borderWidth: 1,
			data: [0, 0, 1, 2, 12, 3, 9, 5, 5, 13, 5, 4, 1, 2, 0, 0],
			fill: 'origin'
		},
		{
			label: 'Surprise', //weird blue colour
			backgroundColor: 'rgba(142, 146, 199, 0.5)',
			borderColor: 'rgba(142, 146, 199, 1)',
			borderWidth: 1,
			data: [0, 0, 3, 2, 11, 5, 7, 3, 5, 15, 6, 6, 0, 3, 1, 0],
			fill: 'origin'
		}


	]
};

// 1b: main chart options
const chartOptions = {
	responsive: true,
	onClick: function (event, elements) {
		if (elements.length > 0) {
			// get the index of the clicked point and its corresponding data and label
			const clickedIndex = elements[0].index;
			const clickedData = chartData.datasets[elements[0].datasetIndex].data[clickedIndex];
			const clickedLabel = chartData.datasets[elements[0].datasetIndex].label;

			// // create a pop-up box with the clicked point data and label
			// const popUpBox = document.createElement('div');
			// popUpBox.classList.add('pop-up-box');
			// //popUpBox.textContent = `${clickedLabel}: ${clickedData}`;
			// popUpBox.textContent = `${clickedData}: Students used these strategies to cope with : ${clickedLabel}`;

			// document.body.appendChild(popUpBox);

			// call a function to show another chart
			var index = elements[0]._index;
			showAnotherChart(index, clickedLabel, clickedData);
		}
	},
	responsive: true,
	maintainAspectRatio: true,
	scales: {
		xAxes: [{
			stacked: true,
			scaleLabel: {
				display: true,
				labelString: 'Number of Weeks into Program'
			}
		}],
		yAxes: [{
			stacked: true,
			scaleLabel: {
				display: true,
				labelString: 'Occurrences of Emotion'
			}
		}]
	},
	plugins: {
		legend: {
			display: true
		}
	}
};

//1c: context for main graph
var ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
	type: 'line',
	data: chartData,
	options: chartOptions
});

var currentChart = null;


function showAnotherChart(index, clickedLabel, clickedData) {

	//if condition to remove the previous chart
	if (document.getElementById(currentMiniGraph)) {

		document.getElementById(currentMiniGraph).remove();
		currentMiniGraph = null;
	}

	const popUpBox = document.querySelector('.pop-up-box');
	if (popUpBox) {
		popUpBox.remove(); // remove the existing pop-up box if it exists
	}


	// if else conditions to show the charts when click on a point
	if (clickedLabel === "Frustration") {

		showFrustrationChart();
		strategiesFrustration(clickedLabel, clickedData);

	}
	else if (clickedLabel === "Sadness") {

		showSadnessChart();
		strategiesSadness(clickedLabel, clickedData);

	}
	else if (clickedLabel === "Happiness") {
		showHappinessChart();
		strategiesHappiness(clickedLabel, clickedData);
	}
	else if (clickedLabel === "Fear") {
		showFearChart();
		strategiesFear(clickedLabel, clickedData);
	}
	else if (clickedLabel === "Excitement") {
		showExcitementChart();
		strategiesExcitement(clickedLabel, clickedData);
	}
	else if (clickedLabel === "Dissapointment") {
		showDissapointmentChart();
		strategiesDissapointment(clickedLabel, clickedData);
	}
	else if (clickedLabel === "Surprise") {
		showSurpriseChart();
		strategiesSurprise(clickedLabel, clickedData); 
	}

}
