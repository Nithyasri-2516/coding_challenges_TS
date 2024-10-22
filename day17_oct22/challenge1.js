function person(age, sex, marital_sts) {
    if (sex === "female") {
        console.log("She works in urban areas.");
    }
    else if (sex === "male" && age >= 20 && age <= 40) {
        console.log("He can work anywhere.");
    }
    else if (sex === "male" && age > 40 && age <= 60) {
        console.log("He works in urban areas only.");
    }
    else {
        console.log("Error: Invalid age or conditions.");
    }
}
person(40, "male", false);
person(18, "female", false);
person(56, "female", false);
