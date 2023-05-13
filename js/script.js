let image = 'upload-file.png';

const imgTag = document.getElementById('imgTag');

imgTag.src = 'img/' + image;

const inputButton = document.getElementById('myInputImg');

inputButton.onchange = () => {
    const selectedFile = inputButton.files[0];
    imgTag.src = 'img/' + selectedFile.name;
}

// parte input----------------------------
// grayscale
const inputGrayscale = document.getElementById('grayscale');

inputGrayscale.onchange = () => {
    imgTag.style.filter = "grayscale("+inputGrayscale.value+")";
}