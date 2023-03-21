
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
    onClick: function(event, elements) {
        if (elements.length > 0) {
            // fetching clicked data point clicked 
            const clickedIndex = elements[0].index;
            const clickedData = chartData.datasets[0].data[clickedIndex];

            // pop-up box with clicked point data
            const popUpBox = document.createElement('div');
            popUpBox.classList.add('pop-up-box');
            // popUpBox.textContent = `Data point clicked: ${clickedData}`;
			popUpBox.textContent = `Strategies and Causes for point:  ${clickedData}`
            document.body.appendChild(popUpBox);
        }
    },
    plugins: {
        legend: {
            display: true
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
    }
};

//1c: context for main graph
var ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: chartData,
    options: chartOptions
});

/*-----------------------------------------------------------------------------*/
//2a: setup for frustration bar

const fruData = {
    labels: ['Causes of Frustration'],
		datasets: [
			{
				label: 'Perceived Deliverable Failure', //red
				backgroundColor: 'rgba(255, 99, 132, 0.24)',
				borderColor: 'rgba(255, 99, 132, 1)',
				borderWidth: 1,
				data: [10],
				fill: 'origin'
			},
			{
				label: 'Perceived Lack of Necessary Skill', //blue
				backgroundColor: 'rgba(54, 162, 235, 0.2)',
				borderColor: 'rgba(54, 162, 235, 1)',
				borderWidth: 1,
				data: [4],
				fill: 'origin'
			}


		]
};

//2b: options for frustration bar

const fruOptions = { 
	 
		plugins: {
			title: {
				display: true,
				text: 'Causes of Student Frustration'
			}
		
	}

   };

//2c: context for frustration bar

var ctx = document.getElementById('fruBar').getContext('2d');
const fruBar = new Chart(ctx, {
    type: 'bar',
    data: fruData,
    options: fruOptions
});
  
/*-----------------------------------------------------------------------------*/

//3a: setup for sadness bar

const sadData = {
    labels: ['Causes of Sadness'],
		datasets: [
			{
				label: 'Perceived Deliverable Failure', //red
				backgroundColor: 'rgba(255, 99, 132, 0.24)',
				borderColor: 'rgba(255, 99, 132, 1)',
				borderWidth: 1,
				data: [7],
				fill: 'origin'
			},
			{
				label: 'Perceived Lack of Necessary Skill', //blue
				backgroundColor: 'rgba(54, 162, 235, 0.2)',
				borderColor: 'rgba(54, 162, 235, 1)',
				borderWidth: 1,
				data: [14],
				fill: 'origin'
			}


		]
};

//3b: options for sadness bar

const sadOptions = { 
	 
	plugins: {
		title: {
			display: true,
			text: 'Causes of Student Sadness'
			
		}
	
}

};

//3c: context for sadness bar

var ctx = document.getElementById('sadBar').getContext('2d');
const sadBar = new Chart(ctx, {
    type: 'bar',
    data: sadData,
    options: sadOptions
});
  

/*-----------------------------------------------------------------------------*/

//4a: setup for happiness bar

const hapData = {
    labels: ['Causes of Happiness'],
		datasets: [
			{
				label: 'Perceived Deliverable Failure', //red
				backgroundColor: 'rgba(255, 99, 132, 0.24)',
				borderColor: 'rgba(255, 99, 132, 1)',
				borderWidth: 1,
				data: [7],
				fill: 'origin'
			},
			{
				label: 'Perceived Lack of Necessary Skill', //blue
				backgroundColor: 'rgba(54, 162, 235, 0.2)',
				borderColor: 'rgba(54, 162, 235, 1)',
				borderWidth: 1,
				data: [14],
				fill: 'origin'
			}


		]
};

//4b: options for sadness bar

const hapOptions = { 
	 
	plugins: {
		title: {
			display: true,
			text: 'Causes of Student Happiness'
		}
	
}

};

//4c: context for sadness bar

var ctx = document.getElementById('hapBar').getContext('2d');
const hapBar = new Chart(ctx, {
    type: 'bar',
    data: hapData,
    options: hapOptions
});
  

/*-----------------------------------------------------------------------------*/

//5a: setup for excitement bar

const excData = {
    labels: ['Causes of Excitement'],
		datasets: [
			{
				label: 'Perceived Deliverable Failure', //red
				backgroundColor: 'rgba(255, 99, 132, 0.24)',
				borderColor: 'rgba(255, 99, 132, 1)',
				borderWidth: 1,
				data: [17],
				fill: 'origin'
			},
			{
				label: 'Perceived Lack of Necessary Skill', //blue
				backgroundColor: 'rgba(54, 162, 235, 0.2)',
				borderColor: 'rgba(54, 162, 235, 1)',
				borderWidth: 1,
				data: [4],
				fill: 'origin'
			}


		]
};

//5b: options for excitement bar

const excOptions = { 
	 
	plugins: {
		title: {
			display: true,
			text: 'Causes of Student Excitement'
		}
	
}

};

//5c: context for excitement bar

var ctx = document.getElementById('excBar').getContext('2d');
const excBar = new Chart(ctx, {
    type: 'bar',
    data: excData,
    options: excOptions
});


/*-----------------------------------------------------------------------------*/

//6a: setup for fear bar

const feaData = {
    labels: ['Causes of Fear'],
		datasets: [
			{
				label: 'Perceived Deliverable Failure', //red
				backgroundColor: 'rgba(255, 99, 132, 0.24)',
				borderColor: 'rgba(255, 99, 132, 1)',
				borderWidth: 1,
				data: [17],
				fill: 'origin'
			},
			{
				label: 'Perceived Lack of Necessary Skill', //blue
				backgroundColor: 'rgba(54, 162, 235, 0.2)',
				borderColor: 'rgba(54, 162, 235, 1)',
				borderWidth: 1,
				data: [4],
				fill: 'origin'
			}


		]
};

//6b: options for fear bar

const feaOptions = { 
	 
	plugins: {
		title: {
			display: true,
			text: 'Excitement'
		}
	
}

};

//6c: context for fear bar

var ctx = document.getElementById('feaBar').getContext('2d');
const feaBar = new Chart(ctx, {
    type: 'bar',
    data: feaData,
    options: feaOptions
});


/*-----------------------------------------------------------------------------*/

//7a: setup for dissapointment bar

const disData = {
    labels: ['Causes of Dissapointment'],
		datasets: [
			{
				label: 'Perceived Deliverable Failure', //red
				backgroundColor: 'rgba(255, 99, 132, 0.24)',
				borderColor: 'rgba(255, 99, 132, 1)',
				borderWidth: 1,
				data: [17],
				fill: 'origin'
			},
			{
				label: 'Perceived Lack of Necessary Skill', //blue
				backgroundColor: 'rgba(54, 162, 235, 0.2)',
				borderColor: 'rgba(54, 162, 235, 1)',
				borderWidth: 1,
				data: [4],
				fill: 'origin'
			}


		]
};

//7b: options for dissapointment bar

const disOptions = { 
	 
	plugins: {
		title: {
			display: true,
			text: 'Causes of Student Dissapointment'
		}
	
}

};

//7c: context for dissapointment bar

var ctx = document.getElementById('disBar').getContext('2d');
const disBar = new Chart(ctx, {
    type: 'bar',
    data: disData,
    options: disOptions
});

/*-----------------------------------------------------------------------------*/

//8a: setup for surprise bar

const surData = {
    labels: ['Causes of Surprise'],
		datasets: [
			{
				label: 'Perceived Deliverable Failure', //red
				backgroundColor: 'rgba(255, 99, 132, 0.24)',
				borderColor: 'rgba(255, 99, 132, 1)',
				borderWidth: 1,
				data: [17],
				fill: 'origin'
			},
			{
				label: 'Perceived Lack of Necessary Skill', //blue
				backgroundColor: 'rgba(54, 162, 235, 0.2)',
				borderColor: 'rgba(54, 162, 235, 1)',
				borderWidth: 1,
				data: [4],
				fill: 'origin'
			}


		]
};

//8b: options for surprise bar

const surOptions = { 
	 
	plugins: {
		title: {
			display: true,
			text: 'Causes of Student Surprise'
		}
	
}

};

//8c: context for surprise bar

var ctx = document.getElementById('surBar').getContext('2d');
const surBar = new Chart(ctx, {
    type: 'bar',
    data: surData,
    options: surOptions
});