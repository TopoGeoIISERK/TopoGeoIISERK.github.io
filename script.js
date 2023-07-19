// Get all the links with the deactivate-after-date class
const links = document.querySelectorAll('.deactivate-after-date');

// Loop through the links and check their custom date
links.forEach(link => {
  // Get the custom date from the data-date attribute
  const customDate = new Date(link.dataset.date);

  // Get the current date
  const currentDate = new Date();

  // If the custom date has passed, deactivate the link
  if (currentDate.getTime() > customDate.getTime()) {
    link.classList.add('deactivated');
    link.removeAttribute('href');
    link.setAttribute('title', 'This link has expired.');
  }
});

