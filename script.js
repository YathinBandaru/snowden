// Initialize credits
if (!localStorage.getItem("credits")) {
    localStorage.setItem("credits", 0);
}

// Add credits
function addCredits(amount) {
    let c = parseInt(localStorage.getItem("credits"));
    localStorage.setItem("credits", c + amount);
    alert("You earned " + amount + " credits!");
}

// Complete course
function completeCourse(name, credits) {
    addCredits(credits);
    let courses = JSON.parse(localStorage.getItem("completedCourses") || "[]");

    if (!courses.includes(name)) {
        courses.push(name);
        localStorage.setItem("completedCourses", JSON.stringify(courses));
    }

    alert("Course Completed: " + name);
}

// Quiz logic
const questions = [
    { text: "A bank asks for OTP.", safe: false },
    { text: "A message with unknown shortened link.", safe: false },
    { text: "A secure HTTPS page.", safe: true }
];

let index = 0;

if (document.getElementById("question")) {
    document.getElementById("question").innerText = questions[index].text;
}

function answer(choice) {
    if (choice === questions[index].safe) {
        addCredits(20);
        document.getElementById("result").innerText = "Correct!";
    } else {
        document.getElementById("result").innerText = "Incorrect!";
    }
}

// Scenarios
function scenarioAnswer(correct) {
    if (correct) addCredits(10);
    alert(correct ? "Correct!" : "Wrong!");
}

// Redeem
function redeem(cost) {
    let credits = parseInt(localStorage.getItem("credits"));
    if (credits >= cost) {
        localStorage.setItem("credits", credits - cost);
        alert("Reward Redeemed!");
    } else {
        alert("Not enough credits.");
    }
}

// Dashboard
if (document.getElementById("credit-display")) {
    document.getElementById("credit-display").innerText = localStorage.getItem("credits");
    let list = JSON.parse(localStorage.getItem("completedCourses") || "[]");

    list.forEach(c => {
        let li = document.createElement("li");
        li.innerText = c;
        document.getElementById("course-list").appendChild(li);
    });
}