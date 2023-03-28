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

// Get the talk time element
var talkTime = document.getElementById("talk-time");

// Get the current date and time in UTC
var currentDateUTC = new Date();

// Get the local date and time (adjusted for UTC offset)
var currentDateLocal = new Date(currentDateUTC.getTime() - (currentDateUTC.getTimezoneOffset() * 60000));

// Get the start and end times from the talk time element
var [startTimeString, endTimeString] = talkTime.textContent.split(' - ');

// Create Intl.DateTimeFormat objects for the date and time to ensure the format matches the local format
var dateFormatter = new Intl.DateTimeFormat('en-US', { month: 'numeric', day: 'numeric', year: 'numeric', timeZone: 'Asia/Kolkata' });
var timeFormatter = new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: 'numeric', hour12: true, timeZone: 'Asia/Kolkata' });

// Parse the start and end times as local time strings using the DateTimeFormat objects
var [startDateString, startTimeStringLocal] = (dateFormatter.format(currentDateLocal) + " " + startTimeString).split(", ");
var [endDateString, endTimeStringLocal] = (dateFormatter.format(currentDateLocal) + " " + endTimeString).split(", ");

// Create Date objects for the start and end times in local time zone
var startDateLocal = new Date(Date.parse(startDateString + " " + startTimeStringLocal));
var endDateLocal = new Date(Date.parse(endDateString + " " + endTimeStringLocal));

// Format the start and end times as local time zone strings
var formattedStartTime = timeFormatter.format(startDateLocal);
var formattedEndTime = timeFormatter.format(endDateLocal);

// Update the talk time element with the formatted start and end times
talkTime.textContent = formattedStartTime + ' - ' + formattedEndTime;
