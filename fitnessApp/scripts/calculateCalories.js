function calculateCalories(language) {
	var age = document.getElementById("fage").value;
	var height = document.getElementById("lheight").value;
	var weight = document.getElementById("lweight").value;
    if (age == "" || height == "" || weight == "") {
        if (language == "GR") {
            document.getElementById("result").innerHTML = "Δεν ηταν δυνατος ο υπολογισμος των θερμιδων... Ελλιπη στοιχεια!";
        } else {
            document.getElementById("result").innerHTML = "Could not calculate the calories because of missing elements... Please check that each field has a value!";
        }
        
    } else {
        var gender = "";
        if(document.getElementById("male").checked) {
            gender = document.getElementById("male").value;
        } else {
            gender = document.getElementById("female").value;
        }
        var activity = 1;
        if(document.getElementById("small").checked) {
            activity = 1.2;
        } else if(document.getElementById("medium").checked){
            activity = 1.375;
        } else {
            activity = 1.9;
        }
        var BMR = "";
        if(gender === "male") {
            BMR = 66.5 + (13.75 * weight) + (5.003 * height) - (6.75 * age);
        } else {
            BMR = 655.1 + (9.563 * weight) + (1.850 * weight) - (4.676 * age);
        }
        if (language == "GR") {
            document.getElementById("result").innerHTML = "<h3>Συντηρηση βαρους:</h3><h4>" +  Math.trunc(( BMR * activity )) + "</h4><h5> θερμιδες/μερα </h5><h5> Παρακαλω επικοινωνηστε με γιατρο σε περιπτωση επιθυμιας χασιμου βαρους. Διαφορετικα αυξηστε τη δραστηριοτητα σας και μειωστε ελαχιστα τις θερμιδες που καταναλωνεται. (100 θερμιδες κατω από τις θερμιδες συντηρησης) </h5>";
        } else {
            document.getElementById("result").innerHTML = "<h3>Maintain weight:</h3><h4>" +  Math.trunc(( BMR * activity )) + "</h4><h5> Calories/Day </h5><h5> Please consult with a doctor when considering weight loss. Alternatively, increase your activity/exercise level rather than decreasing Calorie intake in order to lose some weight.</h5>";
        }
        
    }                     
};
document.onreset = function() {
	document.getElementById("result").innerHTML = "";
};