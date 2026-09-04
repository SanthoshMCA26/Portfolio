document.addEventListener('DOMContentLoaded', function () {

  // Close the mobile navbar after clicking a link
  const navMenu = document.getElementById('navMenu');
  document.querySelectorAll('#navMenu .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('show')) {
        bootstrap.Collapse.getOrCreateInstance(navMenu).hide();
      }
    });
  });

  // Contact form: this is a static site with no backend to actually send the
  // message, so we run standard validation and then show a failure message.
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      e.stopPropagation();

      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
      }

      status.textContent = 'Failed to send message. Please try again.';
      status.classList.remove('text-success');
      status.classList.add('text-danger');
    });
  }

});
