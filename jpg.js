document.getElementById('convertButton').addEventListener('click', function() {
    let inputFile = document.getElementById('inputFile').files[0];
    
    if (!inputFile) {
        alert('Please select a JPG image to convert.');
        return;
    }
    
    let reader = new FileReader();
    
    reader.onload = function(event) {
        let img = new Image();
        
        img.onload = function() {
            let canvas = document.getElementById('canvas');
            let ctx = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            
            canvas.toBlob(function(blob) {
                let url = URL.createObjectURL(blob);
                let downloadLink = document.getElementById('downloadLink');
                downloadLink.href = url;
                downloadLink.download = 'converted.png';
                downloadLink.style.display = 'block';
                downloadLink.textContent = 'Download PNG';
            }, 'image/png');
        };
        
        img.src = event.target.result;
    };
    
    reader.readAsDataURL(inputFile);
});
