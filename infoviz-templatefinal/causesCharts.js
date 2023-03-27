//Using variable to store which graph is clicked, getting the chart string
let currentMiniGraph = null;

function showFrustrationChart() {
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

    currentMiniGraph = 'fruBar';
    
}

function showSadnessChart() {
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
            },
            {
                label: 'Overwhelming Workload', //green
                backgroundColor: 'rgba(139, 211, 70, 0.1)',
                borderColor: 'rgba(139, 211, 70, 1)',
                borderWidth: 1,
                data: [17],
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

    currentMiniGraph = 'sadBar';
}


function showHappinessChart() {
    // create another chart based on the clicked point
    //4a: setup for happiness bar

    const hapData = {
        labels: ['Causes of Happiness'],
        datasets: [
            {
                label: 'Sense of Achievement', //red
                backgroundColor: 'rgba(255, 99, 132, 0.24)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                data: [7],
                fill: 'origin'
            },
            {
                label: 'Overcoming Adversitiy', //blue
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                data: [14],
                fill: 'origin'
            },
            {
                label: 'Learning Relevant Skills', //green
                backgroundColor: 'rgba(139, 211, 70, 0.1)',
                borderColor: 'rgba(139, 211, 70, 1)',
                borderWidth: 1,
                data: [7],
                fill: 'origin'
            },
            {
                label: 'Creating Team Friendships', //purple
                backgroundColor: 'rgba(102, 52, 154, 0.35)',
			    borderColor: 'rgba(155, 95, 224, 1)',
                borderWidth: 1,
                data: [14],
                fill: 'origin'
            }


        ]
    };

    //4b: options for Happiness bar

    const hapOptions = {

        plugins: {
            title: {
                display: true,
                text: 'Causes of Student Happiness'
            }

        }

    };

    //4c: context for Happiness bar

    var ctx = document.getElementById('hapBar').getContext('2d');
    const hapBar = new Chart(ctx, {
        type: 'bar',
        data: hapData,
        options: hapOptions
    });

    currentMiniGraph = 'hapBar';
}


function showFearChart() {
    //6a: setup for fear bar

    const feaData = {
        labels: ['Causes of Fear'],
        datasets: [
            {
                label: 'Fear of Failure', //red
                backgroundColor: 'rgba(255, 99, 132, 0.24)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                data: [17],
                fill: 'origin'
            },
            {
                label: 'Fear of Dissapointing Client', //blue
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                data: [11],
                fill: 'origin'
            },
            {
                label: 'Fear of Not Being Able to Learn Relevant Skills', //green
                backgroundColor: 'rgba(139, 211, 70, 0.1)',
                borderColor: 'rgba(139, 211, 70, 1)',
                borderWidth: 1,
                data: [8],
                fill: 'origin'
            }


        ]
    };

    //6b: options for fear bar

    const feaOptions = {

        plugins: {
            title: {
                display: true,
                text: 'Causes of Fear'
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

   currentMiniGraph = 'feaBar';

}

/*-----------------------------------------------------------------------------*/
//5a: setup for excitement bar
function showExcitementChart() {
    const excData = {
        labels: ['Causes of Excitement'],
        datasets: [
            {
                label: 'Opportunity to Work with Real Clients', //red
                backgroundColor: 'rgba(255, 99, 132, 0.24)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                data: [17],
                fill: 'origin'
            },
            {
                label: 'Chance to Demonstrate Strengths', //blue
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                data: [4],
                fill: 'origin'
            },
            {
                label: 'Preparation for Futures', //green
                backgroundColor: 'rgba(139, 211, 70, 0.1)',
                borderColor: 'rgba(139, 211, 70, 1)',
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

    currentMiniGraph = 'excBar';
}

/*-----------------------------------------------------------------------------*/

function showDissapointmentChart() {
    //7a: setup for dissapointment bar

    const disData = {
        labels: ['Causes of Dissapointment'],
        datasets: [
            {
                label: 'Group Dynamics', //red
                backgroundColor: 'rgba(255, 99, 132, 0.24)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                data: [7],
                fill: 'origin'
            },
            {
                label: 'Time Management', //blue
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                data: [14],
                fill: 'origin'
            },
            {
                label: 'Project Topic', //green
                backgroundColor: 'rgba(139, 211, 70, 0.1)',
                borderColor: 'rgba(139, 211, 70, 1)',
                borderWidth: 1,
                data: [3],
                fill: 'origin'
            },
            {
                label: 'Lack of Guidance', //purple
                backgroundColor: 'rgba(102, 52, 154, 0.35)',
			    borderColor: 'rgba(155, 95, 224, 1)',
                borderWidth: 1,
                data: [6],
                fill: 'origin'
            },
            {
                label: 'Unrealistic Project Expectations', //yellow
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
			    borderColor: 'rgba(255, 206, 86, 1)',
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

    currentMiniGraph = 'disBar';

}

function showSurpriseChart() {
    //8a: setup for surprise bar

    const surData = {
        labels: ['Causes of Surprise'],
        datasets: [
            {
                label: 'Unexpected Feedback', //red
                backgroundColor: 'rgba(255, 99, 132, 0.24)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                data: [19],
                fill: 'origin'
            },
            {
                label: 'New Skills', //blue
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                data: [14],
                fill: 'origin'
            },
            {
                label: 'Self-Discovery', //green
                backgroundColor: 'rgba(139, 211, 70, 0.1)',
                borderColor: 'rgba(139, 211, 70, 1)',
                borderWidth: 1,
                data: [3],
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

    currentMiniGraph = 'surBar';

}