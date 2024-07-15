const form = document.querySelector('.feedback-form');

const formData = {
  email: '',
  message: '',
};

window.addEventListener('load', () => {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    form.email.value = parsedData.email;
    form.message.value = parsedData.message;
  }
});

form.addEventListener('input', evt => {
  formData.email = form.email.value.trim();
  formData.message = form.message.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Please fill all fields');
  } else {
    console.log(form.message.value);
    localStorage.removeItem('feedback-form-state');
    form.reset();
  }
});
