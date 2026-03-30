document.getElementById('contact-form')?.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name')?.value?.trim() || '';
  const email = document.getElementById('email')?.value?.trim() || '';
  const service = document.getElementById('service')?.value || '';
  const message = document.getElementById('message')?.value?.trim() || '';

  const subject = encodeURIComponent(`Demande site web Cyclerie Bieloff${service ? ' — ' + service : ''}`);
  const body = encodeURIComponent(
    `Nom : ${name}\nEmail : ${email}\nService : ${service}\n\nMessage :\n${message}`
  );

  window.location.href = `mailto:cyclerie.bieloff@gmail.com?subject=${subject}&body=${body}`;
});
