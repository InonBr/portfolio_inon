const noRobot = document.querySelector('.no-robot');
const submitBtn = document.getElementById('submit');
const resetBtn = document.getElementById('reset');

const onNoRobotClick = () => {
  submitBtn.addEventListener('click', (event) => {
    console.log('I am pickle Rick!')
    event.preventDefault();
    resetBtn.style.display = "none";
    submitBtn.style.display = "none";
    noRobot.style.display = "block";
  });
};

onNoRobotClick();
