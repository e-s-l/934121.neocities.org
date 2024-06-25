const container = document.querySelector('.container');
const cuboid = document.querySelector('.cuboid');
let isDragging = false;
let startX, startY;
let startRotateY = 0;
let startRotateX = 0;

// Event listeners for mouse down, move, and up
document.addEventListener('mousedown', onMouseDown);
document.addEventListener('mousemove', onMouseMove);
document.addEventListener('mouseup', onMouseUp);

// Function to handle mouse down event
function onMouseDown(event) {
    isDragging = true;
    startX = event.clientX;
    startY = event.clientY;
    startRotateY = getYRotation(cuboid.style.transform);
    startRotateX = getXRotation(cuboid.style.transform);

    cuboid.style.transition = 'none';
}

// Function to handle mouse move event
function onMouseMove(event) {
    if (!isDragging) return;

    const deltaX = event.clientX - startX;
    const deltaY = event.clientY - startY;
    const speed = 0.1;

    // Invert deltaY for natural mouse movement
    const rotateY = startRotateY + deltaX*speed;
    const rotateX = startRotateX + deltaY*speed;

    cuboid.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
}

// Function to handle mouse up event
function onMouseUp(event) {
    isDragging = false;
    cuboid.style.transition = 'transform 0.5s ease';
}

// Helper function to get current Y rotation from transform
function getYRotation(transform) {
    if (!transform) return 0;
    const match = transform.match(/rotateY\(([^)]+)\)/);
    return match ? parseFloat(match[1]) : 0;
}

// Helper function to get current X rotation from transform
function getXRotation(transform) {
    if (!transform) return 0;
    const match = transform.match(/rotateX\(([^)]+)\)/);
    return match ? parseFloat(match[1]) : 0;
}

////////////////////////

const mattressColorPicker = document.getElementById('mattressColorPicker');
const pillowcaseColorPicker = document.getElementById('pillowcaseColorPicker');
const mattress = document.querySelector('.top');
const pillowcaseLeft = document.querySelector('.front');
const pillowcaseRight = document.querySelector('.right');

mattressColorPicker.addEventListener('input', function() {
    mattress.style.backgroundColor = mattressColorPicker.value;
});

pillowcaseColorPicker.addEventListener('input', function() {
    pillowcaseLeft.style.backgroundColor = pillowcaseColorPicker.value;
    pillowcaseRight.style.backgroundColor = pillowcaseColorPicker.value;
});


///////////////////////////////////////////////


