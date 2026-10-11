let students = [];

function addStudent() {

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;

    let sub1 = document.getElementById("sub1").value;
    let sub2 = document.getElementById("sub2").value;
    let sub3 = document.getElementById("sub3").value;
    let sub4 = document.getElementById("sub4").value;

    // Check empty input
    if (
        name === "" ||
        roll === "" ||
        sub1 === "" ||
        sub2 === "" ||
        sub3 === "" ||
        sub4 === ""
    ) {
        alert("Please enter all details!");
        return;
    }

    // Convert marks into numbers
    sub1 = Number(sub1);
    sub2 = Number(sub2);
    sub3 = Number(sub3);
    sub4 = Number(sub4);

    // Check marks
    if (
        sub1 < 0 || sub1 > 100 ||
        sub2 < 0 || sub2 > 100 ||
        sub3 < 0 || sub3 > 100 ||
        sub4 < 0 || sub4 > 100
    ) {
        alert("Marks should be between 0 and 100!");
        return;
    }

    // Calculate total
    let total = sub1 + sub2 + sub3 + sub4;

    // Calculate percentage
    let percentage = (total / 400) * 100;

    // Calculate result
    let result;

    if (
        sub1 >= 40 &&
        sub2 >= 40 &&
        sub3 >= 40 &&
        sub4 >= 40
    ) {
        result = "PASS";
    } else {
        result = "FAIL";
    }

    // Create student object
    let student = {
        name: name,
        roll: roll,
        sub1: sub1,
        sub2: sub2,
        sub3: sub3,
        sub4: sub4,
        total: total,
        percentage: percentage,
        result: result
    };

    // Add student
    students.push(student);

    // Display student
    displayStudents();

    // Clear input fields
    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("sub1").value = "";
    document.getElementById("sub2").value = "";
    document.getElementById("sub3").value = "";
    document.getElementById("sub4").value = "";
}


function displayStudents() {

    let table = document.getElementById("studentTable");

    table.innerHTML = "";

    students.forEach(function(student) {

        let row = `
            <tr>
                <td>${student.name}</td>
                <td>${student.roll}</td>
                <td>${student.sub1}</td>
                <td>${student.sub2}</td>
                <td>${student.sub3}</td>
                <td>${student.sub4}</td>
                <td>${student.total}</td>
                <td>${student.percentage.toFixed(2)}%</td>
                <td>${student.result}</td>
            </tr>
        `;

        table.innerHTML += row;
    });
}


function showTopper() {

    if (students.length === 0) {
        alert("No student records available!");
        return;
    }

    let topper = students[0];

    students.forEach(function(student) {

        if (student.percentage > topper.percentage) {
            topper = student;
        }

    });

    document.getElementById("topper").innerHTML =
        "🏆 Topper: " +
        topper.name +
        " | Roll No: " +
        topper.roll +
        " | Percentage: " +
        topper.percentage.toFixed(2) +
        "%";
}