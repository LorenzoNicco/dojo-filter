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

// saturate
const inputSaturate = document.getElementById('saturate');

inputSaturate.onchange = () => {
    imgTag.style.filter = "saturate("+inputSaturate.value+")";
}

// sepia
const inputSepia = document.getElementById('sepia');

inputSepia.onchange = () => {
    imgTag.style.filter = "sepia("+inputSepia.value+")";
}

// invert
const inputInvert = document.getElementById('invert');

inputInvert.onchange = () => {
    imgTag.style.filter = "invert("+inputInvert.value+")";
}

// contrast
const inputContrast = document.getElementById('contrast');

inputContrast.onchange = () => {
    imgTag.style.filter = "contrast("+inputContrast.value+")";
}

// brightness
const inputBrightness = document.getElementById('brightness');

inputBrightness.onchange = () => {
    imgTag.style.filter = "brightness("+inputBrightness.value+")";
}

// blur
const inputBlur = document.getElementById('blur');

inputBlur.onchange = () => {
    imgTag.style.filter = "blur("+inputBlur.value+"px)";
}

// hue-rotate
const inputHueRotate = document.getElementById('hue-rotate');

inputHueRotate.onchange = () => {
    imgTag.style.filter = "hue-rotate("+inputHueRotate.value+"deg)";
}