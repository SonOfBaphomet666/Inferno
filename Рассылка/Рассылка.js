
function sendEmail(e) {
    e.preventDefault();
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    fetch('http://localhost:3000/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subject, message }),
    })
    .then((res) => res.json())
    .then((data) => alert(data.message));
}