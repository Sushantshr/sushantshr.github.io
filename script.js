<script>
document.getElementById('submitForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const formDataJson = {};
    formData.forEach((value, key) => {
        formDataJson[key] = value;
    });

    fetch('https://script.google.com/macros/s/AKfycbzHfdOuBioHEv6p-NA145tIbBNJGd22_PPR_eT6kcXvvT3cjCPImXGRHmrOe5ELB6GorA/exec', {
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
</script>
