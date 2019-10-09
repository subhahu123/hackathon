// Select your input type file and store it in a variable
const input = document.getElementById('fileupload');
const image = document.querySelector('#image');

var formData = new FormData();



// This will upload the file after having read it
const upload = (file) => {

    formData.append("file", file);
    formData.append('mode', '1');

    console.log(input.files[0]);


    fetch('http://192.168.0.118:8080/set', { // Your POST endpoint
        method: 'POST',
        body: formData // This is your file object
    }).then(
        response => response.json() // if the response is a JSON object
    ).then(
        success => console.log(success) // Handle the success response object
    ).catch(
        error => console.log(error) // Handle the error response object
    );
};

// Event handler executed when a file is selected
const onSelectFile = () => {
    var reader = new FileReader;
    var reader = new FileReader();

    reader.onload = function (e) {
        $('#image')
            .attr('src', e.target.result)
    };

    reader.readAsDataURL(input.files[0]);

    upload(input.files[0]);
}


// Add a listener on your input
// It will be triggered when a file will be selected
input.addEventListener('change', onSelectFile, false);