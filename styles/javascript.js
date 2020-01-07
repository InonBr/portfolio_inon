const noRobot = document.querySelector('.g-recaptcha');
const submitBtn = document.getElementById('submit');
const resetBtn = document.getElementById('reset');

const onNoRobotClick = () => {
  console.log('hello world!')
  submitBtn.addEventListener('click', (event) => {
    console.log('hello world one more time!')
    event.preventDefault();
    resetBtn.style.display = "none";
    submitBtn.style.display = "none";
    noRobot.style.display = "block";
  });
};

onNoRobotClick();
