$(document).ready(function (){

    var valRules =
        {
            mass:
                {
                    required: true,
                    min: 88,
                    max: 353
                },
            height:
                {
                    required: true,
                    min: 59,
                    max: 79
                }
        };

    // Object containing the error messages
    var valMessages =
        {
            mass:
                {
                    required: "Please enter a weight in pounds.",
                    min: "Please enter a value that's between 88 and 353.",
                    max: "Please enter a value that's between 88 and 353."
                },
            height:
                {
                    required: "Please enter a height in inches between 59 and 79.",
                    min: "Only students between grades 5 and 8 are allowed.",
                    max: "Only students between grades 5 and 8 are allowed."
                }
        };

    // Pass the configuration to the form's validate() method
    // Needs submitHandler, rules, and messages properties
    $("#BMIform").validate(
        {
            submitHandler: calculateBMI,
            rules: valRules,
            messages: valMessages
        }
    );

    function calculateBMI()
    {
        var mass = $("#mass").val();

        var height = $("#height").val();

        var BMI = (mass / Math.pow(height, 2) * 703);

        var catBMI = "";

        if (BMI < 15)
        {
            catBMI = "Very Severely Underweight";
        }
        else if (BMI === 15 || BMI === 16)
        {
            catBMI = "Severely Underweight";
        }
        else if (BMI >= 16 && BMI <= 18.5)
        {
            catBMI = "Underweight";
        }
        else if (BMI >= 18.5 && BMI <= 24.9)
        {
            catBMI = "Normal (Healthy Weight)";
        }
        else if (BMI >= 25 && BMI <= 29.9)
        {
            catBMI = "Overweight";
        }
        else if (BMI >= 30 && BMI <= 34.9)
        {
            catBMI = "Obese Class I (Moderately Obese)";
        }
        else if (BMI >= 35 && BMI <= 40)
        {
            catBMI = "Obese Class II (Severely Obese)";
        }
        else if (BMI > 40)
        {
            catBMI = "Obese Class III (Very Severely Obese)";
        }

        $("#output").append(`Your BMI value is: ${BMI.toFixed(2)}\n`);
        $("#output").append(`Your BMI catagory is: ${catBMI}\n`);
    }

});