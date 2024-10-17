document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("userForm") as HTMLFormElement;

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Get form values
        const firstname = (document.getElementById("firstname") as HTMLInputElement).value;
        const lastname = (document.getElementById("lastname") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const phone = (document.getElementById("phone") as HTMLInputElement).value;

        // Log the values to the console
        console.log("First Name:", firstname);
        console.log("Last Name:", lastname);
        console.log("Email:", email);
        console.log("Phone:", phone);
       
    });
});
