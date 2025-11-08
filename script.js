 // 🔒 Block if not logged in
    if (sessionStorage.getItem("loggedIn") !== "true") {
      window.location.href = "login.html";
    } 

    // ⏱️  Auto logout after 1 minute
    let inactivityTimeout;
    function resetTimer() {
      clearTimeout(inactivityTimeout);
      inactivityTimeout = setTimeout(() => {
        alert("Session expired due to inactivity.");
        logout();
      }, 10 * 60 * 1000); // 1 minute
    }
    ['click', 'mousemove', 'keydown'].forEach(evt =>
      document.addEventListener(evt, resetTimer)
    );
    resetTimer();
    function logout() {
      sessionStorage.removeItem("loggedIn");
      window.location.href = "logout.html";
    }
 function openWebsite(url) {
      window.open(url, '_blank');
    }
function updateClock() {
      const now = new Date();

      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const date = now.toLocaleDateString('en-GB', options);

      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');

      const time = `${hours}:${minutes}:${seconds}`;
      document.getElementById('clock').innerHTML = `${date}<br>${time}`;
    }
   setInterval(updateClock, 1000);
    updateClock(); // Initial call
   


