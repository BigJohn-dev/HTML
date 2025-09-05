// Variable declarations

const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const modelContainer = document.getElementById('model-container');

// Event Listeners

openBtn.addEventListener('click', function() {
    modelContainer.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    modelContainer.style.display = 'none';
});

// Optional: Close the modal when clicking outside of it
window.addEventListener('click', function(event) {
    if (event.target === modelContainer) {
        modelContainer.style.display = 'none';
    }
});