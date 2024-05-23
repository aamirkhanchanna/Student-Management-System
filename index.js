import inquirer from "inquirer";
class student {
    id;
    name;
    courseEnrolled;
    feesAmount;
    constructor(id, name, courseEnrolled, feesAmount) {
        this.id = id;
        this.name = name;
        this.courseEnrolled = courseEnrolled;
        this.feesAmount = feesAmount;
    }
}
let baseId = 10000;
let studentId = "";
let continueEnrollment = true;
let students = [];
do {
    let action = await inquirer.prompt({
        type: "list",
        name: "ans",
        message: "Please select an option:\n",
        choices: ["Enroll a student", "Show student status"]
    });
    if (action.ans === "Enroll a student") {
        let studentName = await inquirer.prompt({
            type: "input",
            name: "ans",
            message: "Please enter your name:"
        });
        let trimmedStudentName = (studentName.ans).trim().toLowerCase();
        let studentNameCheck = students.map(obj => obj.name);
        if (studentNameCheck.includes(trimmedStudentName) === false) {
            if (trimmedStudentName !== "") {
                baseId++;
                studentId = "STID" + baseId;
                console.log("\nYour account has been created");
                console.log(`Welcome, ${trimmedStudentName}!`);
                let cource = await inquirer.prompt({
                    type: "list",
                    name: "ans",
                    message: "Please select a course",
                    choices: ["IT", "English", "Cooking"]
                });
                let courceFees = 0;
                switch (cource.ans) {
                    case "IT":
                        courceFees = 5000;
                        break;
                    case "English":
                        courceFees = 500;
                        break;
                    case "Cooking":
                        courceFees = 200;
                        break;
                }
                let courceConfirm = await inquirer.prompt({
                    type: "confirm",
                    name: "ans",
                    message: 'Do you want to enroll in this course'
                });
                if (courceConfirm.ans === true) {
                    let Student = new student(studentId, trimmedStudentName, [cource.ans], courceFees);
                    students.push(Student);
                    console.log("You have enrolled in this course");
                }
            }
            else {
                console.log(" Invalid Name ");
            }
        }
        else {
            console.log("this name is already exists");
        }
    }
    else if (action.ans === "Show student status") {
        if (students.length !== 0) {
            let studentNameCheck = students.map(e => e.name);
            let selectedStudent = await inquirer.prompt({
                type: "list",
                name: "ans",
                message: "please select name",
                choices: studentNameCheck
            });
        }
    }
} while (true);
