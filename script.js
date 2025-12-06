// Initialize credits
if (!localStorage.getItem("credits")) {
    localStorage.setItem("credits", 0);
}

function addCredits(amount) {
    let current = parseInt(localStorage.getItem("credits"));
    localStorage.setItem("credits", current + amount);
    alert("You earned " + amount + " credits!");
}

// ---- COURSE COMPLETION ----
function completeCourse(name, credits) {
    addCredits(credits);

    let courses = JSON.parse(localStorage.getItem("completedCourses") || "[]");
    if (!courses.includes(name)) {
        courses.push(name);
        localStorage.setItem("completedCourses", JSON.stringify(courses));
    }

    alert("Course Completed: " + name);
}

// ---- QUIZ LOGIC ----
const questions = [
    { text: "A bank email asks for OTP.", safe: false },
    { text: "A link shortener from a stranger.", safe: false },
    { text: "HTTPS website asking to login.", safe: true }
];

let index = 0;
document.getElementById("question") &&
(document.getElementById("question").innerText = questions[index].text);

function answer(choice) {
    if (choice === questions[index].safe) {
        addCredits(20);
        document.getElementById("result").innerText = "Correct! +20 Credits";
    } else {
        document.getElementById("result").innerText = "Incorrect!";
    }
}

// ---- SCENARIO LOGIC ----
function scenarioAnswer(correct) {
    if (correct) addCredits(10);
    alert(correct ? "Right Choice!" : "Wrong Choice!");
}

// ---- REDEEM FUNCTION ----
function redeem(cost) {
    let current = parseInt(localStorage.getItem("credits"));
    if (current >= cost) {
        localStorage.setItem("credits", current - cost);
        alert("Redeemed! Coupon Unlocked.");
    } else {
        alert("Not enough credits!");
    }
}

// ---- DASHBOARD ----
if (document.getElementById("credit-display")) {
    document.getElementById("credit-display").innerText = localStorage.getItem("credits");

    let list = JSON.parse(localStorage.getItem("completedCourses") || "[]");
    list.forEach(c => {
        let li = document.createElement("li");
        li.innerText = c;
        document.getElementById("course-list").appendChild(li);
    });
}