const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");
const questionSwitcher = document.querySelectorAll(".question-switcher");

const answersOutput = [
    "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
];

answers[0].textContent = answersOutput[0];

questions.forEach((question, index) => {
  question.addEventListener("click", () => {
    answers[index].classList.toggle("hidden");
    answers[index].textContent = answersOutput[index];

    questionSwitcher[index].classList.toggle("active");
  });
});