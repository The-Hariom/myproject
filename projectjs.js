console.log("hello");
const inputs = document.querySelectorAll("#form input");

inputs.forEach((input, index) => {
    input.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            e.preventDefault(); // form submit hone se roke

            let next = inputs[index + 1];
            if (next) {
                next.focus(); // next input me jump
            }
        }
    });
});





const courses = {
    "basic": { duration: "3 Years", fees: "50000", reg: "500" },
    "tally": { duration: "3 Years", fees: "45000", reg: "500" },
    "dtp": { duration: "3 Years", fees: "40000", reg: "500" },
    "html": { duration: "3 Years", fees: "48000", reg: "500" }
};

const courseSelect = document.getElementById('course');
const durationInput = document.getElementById('duration');
const feesInput = document.getElementById('fees');
const regInput = document.getElementById('reg');

courseSelect.addEventListener('change', function () {
    const selectedCourse = this.value;
    if (courses[selectedCourse]) {
        durationInput.value = courses[selectedCourse].duration;
        feesInput.value = courses[selectedCourse].fees;
        regInput.value = courses[selectedCourse].reg;
    } else {
        durationInput.value = "";
        feesInput.value = "";
        regInput.value = "";
    }
});
function showName() {
document.querySelector(".Box").style.display = "block";
    var inputname = document.getElementById("nm").value;
    document.getElementById("name").innerText = inputname;


    var inputroll = document.getElementById("inputroll").value;
    document.getElementById("roll").innerText = inputroll;


    var fatherinput = document.getElementById("fatherinput").value;
    document.getElementById("father").innerText = fatherinput;

    var addinput = document.getElementById("addinput").value;
    document.getElementById("add").innerText = addinput;

    var course = document.getElementById("course").value;
    document.getElementById("cour").innerText = course;

    var amount = document.getElementById("fees").value;
    document.getElementById("amount").innerText = amount;

    var fees = document.getElementById("fees").value;
    document.getElementById("tfee").innerText = fees;

    var reg = document.getElementById("reg").value;
    document.getElementById("rfee").innerText = reg;


    var amount = Number(fees) + Number(reg);
    document.getElementById("amount").innerText = amount;

    var duration = document.getElementById("duration").value;
    document.getElementById("dur").innerText = duration;

    var date = document.getElementById("date").value;
    document.getElementById("dt").innerText = date;

    var num = Math.floor(1000 + Math.random() * 9000);
    document.getElementById("reciptnum").innerText = num;

    document.querySelector(".inputbox").style.display = "none";

    var mobile = document.getElementById("mob").value;
    document.getElementById("mobnum").innerText = mobile;





}
function printPage() {

    document.querySelector(".hidebtn").style.display = "none";

    print
    window.print();

    //  show 
    document.querySelector(".hidebtn").style.display = "block";
}
