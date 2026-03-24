
const button = document.getElementById('action-btn');
const statusText = document.getElementById('status');

button.addEventListener('click', function() {
    
    statusText.innerHTML = "The status is currently: <b style='color:green;'>Online!</b>";
    
    button.textContent = "Task Complete";
    button.style.backgroundColor = "#4caf50";
});