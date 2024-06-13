document.addEventListener('mousemove', function(e) {
    const blurCircle = document.getElementById('blurCircle');
    blurCircle.style.left = `${e.pageX}px`;
    blurCircle.style.top = `${e.pageY}px`;
    blurCircle.style.opacity = 1;
});

document.addEventListener('mouseleave', function() {
    const blurCircle = document.getElementById('blurCircle');
    blurCircle.style.opacity = 0;
});

document.addEventListener('mouseenter', function() {
    const blurCircle = document.getElementById('blurCircle');
    blurCircle.style.opacity = 1;
});
document.addEventListener('mousemove', function(e) {
    // Get the specific image element or background element
    const backimg = document.getElementById('img1'); // Replace 'your-backimg-id' with the actual ID of your image or background element
    
    // Check if the element exists
    if (backimg) {
        // Calculate the rotation angles based on mouse position
        const rotateX = -(e.clientY / window.innerHeight - 0.5) * 50; // Adjust 10 for tilt sensitivity
        const rotateY = (e.clientX / window.innerWidth - 0.5) * 50; // Adjust 10 for tilt sensitivity
        
        // Apply the rotation using CSS transform property
        backimg.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
});

document.addEventListener('mouseleave', function() {
    // Reset the rotation when the mouse leaves the document
    const backimg = document.getElementById('your-backimg-id'); // Replace 'your-backimg-id' with the actual ID of your image or background element
    
    // Check if the element exists
    if (backimg) {
        backimg.style.transform = 'none';
    }
});
