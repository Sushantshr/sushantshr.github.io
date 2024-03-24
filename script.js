
document.getElementById('submitForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const formDataJson = {};
    formData.forEach((value, key) => {
        formDataJson[key] = value;
    });

    fetch('https://script.google.com/macros/s/AKfycbxmllkRS4jgp9kN7g_hk3dfghXxOCZCxS9kW8-Pn3o1WM8520W_uipdMHeQUgC50_g65w/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formDataJson)
    })
    .then(response => {
        console.log('Form submission successful');
        // Handle success if needed
    })
    .catch(error => {
        console.error('Error submitting form:', error);
        // Handle error if needed
    });
});

