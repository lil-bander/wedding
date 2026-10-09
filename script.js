const rsvpForm = document.getElementById("rsvpForm");

const confirmation = document.getElementById("confirmation");


rsvpForm.addEventListener("submit", function(event) {

    // Prevent the page from refreshing
    event.preventDefault();


    const name =
        document.getElementById("name").value;

    const attendance =
        document.getElementById("attendance").value;

    const guests =
        document.getElementById("guests").value;

    const message =
        document.getElementById("message").value;


    const rsvp = {

        name: name,

        attending: attendance,

        guests: guests,

        message: message

    };


    console.log(rsvp);


    confirmation.textContent =
        "Thank you, " + name + "! Your RSVP has been received.";


    rsvpForm.reset();

});