document.getElementById("dataEntryForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Retrieve form data
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;
    let education = document.getElementById("education").value;
    let city = document.getElementById("city").value;
    let country = document.getElementById("country").value;

    // Display entered data
    document.getElementById("result").innerHTML = `
        <h3>Entered Data:</h3>
        <p><strong>First Name:</strong> ${fname}</p>
        <p><strong>Last Name:</strong> ${lname}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Education Level:</strong> ${education}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Country:</strong> ${country}</p>
    `;
});

