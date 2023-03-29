const canvas = document.getElementById("phasesCanvas");
const ctx2 = canvas.getContext("2d");

const circleRadius = 70;
const circlePadding = 100;
const lineLength = 30; // 1 inch = 72 pixels

const icons = ["😰", "🤔", "🤨", "😐", "🙂", "😀", "😁", "🤩"];
const gradient = ctx2.createLinearGradient(0, 0, canvas.width, 0);
gradient.addColorStop(0, "red");
gradient.addColorStop(0.5, "yellow");
gradient.addColorStop(1, "green");

const colors = [gradient, gradient, gradient, gradient, gradient, gradient, gradient, gradient];
const tooltipTexts = ["Problem Definition: Students interview end-users needs and define the problem statement.",
    "Problem Planning and Framing: Students analyze the problem and develop a preliminary plan to address the problem.",
    "Problem Validation and Early Prototyping: Student return to end users to validate their plan and start prototyping.",
    "Midterm Presentation: Students present their proposed solution and receive feedback from teaching team.",
    "Validation of Prototype: Students return to the end users with their initial prototype for validation.",
    "Solution Development: Students start the developement of the solution.",
    "Continued Solution Development: Students reiterate the solution to end users and continue developement based on feedback.",
    "Finalizing Solution: Students complete developement and present the final solution/product the end users and teaching team."];

const circles = [];

const tooltip2 = document.createElement("div");
tooltip2.style.position = "absolute";
tooltip2.style.display = "none";
tooltip2.style.padding = "10px";
tooltip2.style.backgroundImage = "linear-gradient(to right, #d5d5d5, #ffffff);";
tooltip2.style.border = "5px solid black";
tooltip2.style.fontFamily = "Arial, sans-serif";
tooltip2.style.fontSize = "20px";

document.body.appendChild(tooltip2);

// add scroll event listener to start the setTimeout function when the phasesCanvas element is scrolled into view
window.addEventListener('scroll', function () {
    const elementTop = canvas.getBoundingClientRect().top;
    const elementBottom = canvas.getBoundingClientRect().bottom;
    const viewportTop = window.innerHeight || document.documentElement.clientHeight;

    if (elementTop <= viewportTop && elementBottom >= 0) {
        let opacity = 0;
        canvas.style.opacity = opacity;

        const fadeEffect = setInterval(() => {
            if (opacity < 1) {
                opacity += 0.1;
                canvas.style.opacity = opacity;
            } else {
                clearInterval(fadeEffect);
            }
        }, 50);

        for (let i = 0; i < icons.length; i++) {
            setTimeout(() => {
                const x = circleRadius + i * (circleRadius * 2 + circlePadding);
                const y = canvas.height / 2;
                circles.push({ x: x, y: y });

                // draw circle
                ctx2.beginPath();
                ctx2.arc(x, y, circleRadius, 0, 2 * Math.PI);
                ctx2.fillStyle = colors[i];
                ctx2.fill();
                ctx2.closePath();

                // draw icon
                ctx2.font = "60px Arial";
                ctx2.fillStyle = "white";
                ctx2.textAlign = "center";
                ctx2.fillText(icons[i], x, y + 20);

                // draw lines
                if (i > 0) {
                    ctx2.beginPath();
                    ctx2.moveTo(circles[i - 1].x + circleRadius, circles[i - 1].y);
                    ctx2.lineTo(circles[i - 1].x + circleRadius + lineLength, circles[i - 1].y);
                    ctx2.lineTo(x - circleRadius, y);
                    ctx2.strokeStyle = colors[i - 1];
                    ctx2.stroke();
                    ctx2.closePath();
                }
            }, i * 500);
        }

        // remove the scroll event listener once the setTimeout function has started
        window.removeEventListener('scroll', arguments.callee);
    }
});

canvas.addEventListener("mousemove", (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    for (let i = 0; i < circles.length; i++) {
        const distance = Math.sqrt(Math.pow(x - circles[i].x, 2) + Math.pow(y - circles[i].y, 2));
        if (distance <= circleRadius) {
            tooltip2.innerHTML = tooltipTexts[i];
            tooltip2.style.display = "block";
            tooltip2.style.background = "linear-gradient(to bottom right, white, white)";
            tooltip2.style.color = "black";
            tooltip2.style.border = "2px solid black";
            tooltip2.style.borderRadius = "5px";
            tooltip2.style.padding = "5px";
            tooltip2.style.maxWidth = "200px";
            tooltip2.style.maxHeight = "1000px";
            tooltip2.style.wordWrap = "break-word";
            tooltip2.style.left = event.pageX + "px";
            tooltip2.style.top = event.pageY + "px";
            return;
        }
    }

    tooltip2.style.display = "none";
});

