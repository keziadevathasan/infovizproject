function strategiesFrustration(clickedLabel, clickedData) {


    // create a pop-up box with the clicked point data and label
    const popUpBox = document.createElement('div');

    popUpBox.classList.add('pop-up-box');
    //popUpBox.textContent = `${clickedData} Students used these strategies to cope with ${clickedLabel}`;
    popUpBox.innerHTML = `Strategies to handle ${clickedLabel}<br> 
                                1. Set realistic goals<br>
                                2. Use positive self-talk<br>
                                3. Seek social support<br>
                                4. Focus on problem-solving<br>
                                5. Practice relaxation techniques`;

    popUpBox.style.backgroundColor = 'rgba(255, 99, 132, 0.24)';
    document.body.appendChild(popUpBox);
}


function strategiesSadness(clickedLabel, clickedData) {

    // create a pop-up box with the clicked point data and label
    const popUpBox = document.createElement('div');
    popUpBox.classList.add('pop-up-box');
    // popUpBox.textContent = `${clickedData}: Students used these strategies to cope with : ${clickedLabel}`;
    popUpBox.innerHTML = `Strategies to handle ${clickedLabel}<br> 
                                    1. Seek social support<br>
                                    2. Practice mindfulness<br>
                                    3. Reframe negative thoughts<br>
                                    4. PFocus on problem-solving<br>
                                    5. Self care`;

    popUpBox.style.backgroundColor = 'rgba(54, 162, 235, 0.2)';
    document.body.appendChild(popUpBox);
}

function strategiesHappiness(clickedLabel, clickedData) {

    // create a pop-up box with the clicked point data and label
    const popUpBox = document.createElement('div');
    popUpBox.classList.add('pop-up-box');
    // popUpBox.textContent = `${clickedData}: Students used these strategies to cope with : ${clickedLabel}`;
    popUpBox.innerHTML = `Strategies to increase ${clickedLabel}<br> 
                                    1. Practice gratitude<br>
                                    2. Foster positive relationships<br>
                                    3. Set achievable goals<br>
                                    4. Practice mindfulness<br>
                                    5. Engage in acts of kindness`;

    popUpBox.style.backgroundColor = 'rgba(255, 206, 86, 0.2)';
    document.body.appendChild(popUpBox);
}


function strategiesFear(clickedLabel, clickedData) {

    // create a pop-up box with the clicked point data and label
    const popUpBox = document.createElement('div');
    popUpBox.classList.add('pop-up-box');
    // popUpBox.textContent = `${clickedData}: Students used these strategies to cope with : ${clickedLabel}`;
    popUpBox.innerHTML = `Strategies to deal with ${clickedLabel}<br> 
                                    1. Focus on what you can control<br>
                                    2. Stay organized<br>
                                    3. Seek support<br>
                                    4. Practice relaxation techniques<br>
                                    5. Reframe your mindset`;

    popUpBox.style.backgroundColor = 'rgba(139, 211, 70, 0.1)';
    document.body.appendChild(popUpBox);
}

function strategiesExcitement(clickedLabel, clickedData) {

    // create a pop-up box with the clicked point data and label
    const popUpBox = document.createElement('div');
    popUpBox.classList.add('pop-up-box');
    // popUpBox.textContent = `${clickedData}: Students used these strategies to cope with : ${clickedLabel}`;
    popUpBox.innerHTML = `Strategies to handle ${clickedLabel}<br> 
                                    1. Practice mindfulness<br>
                                    2. Set clear goals and priorities<br>
                                    3. Take breaks<br>
                                    4. Stay organized<br>
                                    5. Communicate effectively`;


    popUpBox.style.backgroundColor = 'rgba(102, 52, 154, 0.35)';
    document.body.appendChild(popUpBox);
}

function strategiesDissapointment(clickedLabel, clickedData) {

    // create a pop-up box with the clicked point data and label
    const popUpBox = document.createElement('div');
    popUpBox.classList.add('pop-up-box');
    // popUpBox.textContent = `${clickedData}: Students used these strategies to cope with : ${clickedLabel}`;
    popUpBox.innerHTML = `Strategies to handle ${clickedLabel}<br> 
                                    1. Acknowledge and accept disappointment<br>
                                    2. Focus on learning opportunities<br>
                                    3. Seek social support<br>
                                    4. Reframe the situation<br>
                                    5. Stay motivated`;

    popUpBox.style.backgroundColor = 'rgba(71, 69, 68, 0.39)';
    document.body.appendChild(popUpBox);
}

function strategiesSurprise(clickedLabel, clickedData) {

    // create a pop-up box with the clicked point data and label
    const popUpBox = document.createElement('div');
    popUpBox.classList.add('pop-up-box');
    // popUpBox.textContent = `${clickedData}: Students used these strategies to cope with : ${clickedLabel}`;
    popUpBox.innerHTML = `Strategies to handle ${clickedLabel}<br> 
                                    1. Stay Calm and Focused<br>
                                    2. Maintain Open Communication<br>
                                    3. Embrace Flexibility<br>
                                    4. Focus on Solutions<br>
                                    5. Learn from the Experience`;

    popUpBox.style.backgroundColor = 'rgba(71, 69, 68, 0.39)';
    document.body.appendChild(popUpBox);
}