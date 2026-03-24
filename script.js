const button = document.getElementById('action-btn');
const statusText = document.getElementById('status');

button.addEventListener('click', function() {
    statusText.textContent = "System Online";
    statusText.className = "online";
   
    button.textContent = "System Active";
    button.style.backgroundColor = "#2ecc71";
    button.disabled = true;
    button.style.cursor = "default";
    
    console.log("Dashboard has been initialized successfully!");
});