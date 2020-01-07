const noRobot = document.querySelectorAll('.recaptcha-checkbox-border')
const submitBtn = document.querySelectorAll('#submit')
const doNotShow = document.querySelectorAll('.do-not-show');

const onNoRobotClick = () => {
  noRobot.addEventListener('click', (event) => {
    event.preventDefault();
    submitBtn.classList.remove(doNotShow);
  });
};

onNoRobotClick();
