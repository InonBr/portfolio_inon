const noRobot = document.querySelectorAll('.g-recaptcha')
const submitBtn = document.querySelectorAll('#submit')

const onAnswerClicked = (event) => {
  noRobot.addEventListener('click', (event) => {
    submitBtn.style.display = 'block';
  });
};

onAnswerClicked();
