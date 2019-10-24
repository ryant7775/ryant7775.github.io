const messageList = document.querySelector('.messages');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');


const setupUI = (user) => {
  if (user) {

    const html = `<div>Logged in as ${user.email}</div>`;
    accountDetails.innerHTML = html;

    loggedInLinks.forEach(item => item.style.display = '');
    loggedOutLinks.forEach(item => item.style.display = 'none');
  }else{
    accountDetails.innerHTML = '';

    loggedOutLinks.forEach(item => item.style.display = '');
    loggedInLinks.forEach(item => item.style.display = 'none');
  }
}

//setup the video links
const setupMessages = (data) => {

  if (data.length) {
    let html = '';
    data.forEach(doc => {
      const message = doc.data();
      const li = `
      <li>
        <div class="collapsible-header grey lighten-4">${message.title}</div>
        <div class="collapsible-body white">${message.content}<button class="btn red z-depth-2 right-align delete-btn" style="float: right;">Delete</button></div>
      </li>
      `;
      html += li;
    });

    messageList.innerHTML = html;
  }
  else{
    messageList.innerHTML = '<h1 class="center-align">-- Please Login --</h1>';
  }
  
}

// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");
  
function mobilenav_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
  } else {
    mySidebar.style.display = 'block';
  }
}

// Close the sidebar with the close button
function mobilenav_close() {
    mySidebar.style.display = "none";
}



// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  
    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  
  });