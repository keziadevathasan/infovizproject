
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

    document.body.appendChild(popUpBox);
}