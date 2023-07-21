document.querySelector('#contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.elements.name.value = '';
  e.target.elements.email.value = '';
  e.target.elements.message.value = '';
});

// Social media icons event listeners
document.getElementById('github-icon').addEventListener('click', function() {
  window.open('https://www.linkedin.com/company/emientreprises/mycompany/', '_blank');
});

document.getElementById('codepen-icon').addEventListener('click', function() {
  window.open('https://www.facebook.com/emientreprises', '_blank');
});

document.getElementById('twitter-icon').addEventListener('click', function() {
  window.open('https://www.instagram.com/forumemientreprises/', '_blank');
});

document.getElementById('instagram-icon').addEventListener('click', function() {
  window.open('https://www.youtube.com/@ForumEMIEntreprises22/videos', '_blank');
});
