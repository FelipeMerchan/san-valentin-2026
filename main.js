const VALID_CODE = 'eres-mi-hogar';

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

const heart = confetti.shapeFromText({ text: '❤️', scalar: 2 });

window.onload = () => {
  const options = {
    particleCount: 200,
    spread: 90,
    origin: { y: 0.6 },
    shapes: [heart], 
  }
  confetti(options);

  setTimeout(() => {
    confetti(options);
  }, 2000);

  setTimeout(() => {
    confetti(options);
  }, 1000);
}

const $openModal = document.querySelector('#open-modal');
const $overlay = document.querySelector('#overlay');
const $modal = document.querySelector('#modal');
const $closeModal = document.querySelector('#close-modal');
const $form = document.querySelector('#form');

function hideModal(event) {
  event.stopPropagation();
  $modal.style.animation = 'modalOut .8s forwards';
  $overlay.classList.remove('active');
}

$openModal.addEventListener('click', () => {
  $overlay.classList.add('active');
  $modal.style.animation = "modalIn .8s forwards";
  document.querySelector('#modal-title').focus();
  document.body.style.height = '100vh';
  document.body.style.overflowY = 'hidden';
});
$closeModal.addEventListener('click', hideModal);
$overlay.addEventListener('click', hideModal);
$modal.addEventListener('click', function(event) {
  event.stopPropagation();
});

function validateSecretCode(event) {
  event.preventDefault();
  const formData = new FormData($form);
  const secretCode = formData.get('secret-code').toLocaleLowerCase();
  const $errorMessage = document.querySelector('#error');
  const $surpriseSection = document.querySelector('#surprise-section');

  if (secretCode === VALID_CODE) {
    document.getElementById('form-section').classList.add('hidden');
    $surpriseSection.classList.remove('hidden');
    $surpriseSection.classList.add('fade-in');
    $errorMessage.style.display = 'none';
  } else {
    $errorMessage.style.display = 'block';
  }
}
