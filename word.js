document.getElementById('select-files').addEventListener('click', function() {
    document.getElementById('file-input').click();
});

document.getElementById('file-input').addEventListener('change', function(event) {
    const files = event.target.files;
    console.log(files);
    // Handle file upload logic here
});

// Optional: Implement drag-and-drop functionality
document.body.addEventListener('dragover', function(event) {
    event.preventDefault();
    event.stopPropagation();
});

document.body.addEventListener('drop', function(event) {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer.files;
    console.log(files);
    // Handle file upload logic here
});
