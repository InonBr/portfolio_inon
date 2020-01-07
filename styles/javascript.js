const noRobot = document.querySelector('.g-recaptcha');
const submitBtn = document.getElementById('submit');

const onNoRobotClick = () => {
  console.log('hello world!')
  submitBtn.addEventListener('click', (event) => {
    console.log('hello world one more time!')
    event.preventDefault();
    noRobot.style.display = "block";
  });
};

onNoRobotClick();
