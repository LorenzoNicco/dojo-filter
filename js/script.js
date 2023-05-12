let image = 'upload-file.png';

let imgUrl = 'img/'+ image;

const imgTag = document.getElementById('imgTag');

imgTag.src = imgUrl;

const inputButton = document.getElementById('myInputImg');

inputButton.addEventListener('click', 
    function() {
        let imageChange = inputButton.value;
        console.log('imageChange', imageChange);
    }
);