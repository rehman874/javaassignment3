let Celsius = prompt("Enter the current tempertaure in Celsius.");

if (Celsius >= 30) {
  alert("It's a hot day!");
} else {
  alert("The weather is moderate");
}

function calculateGrade(percentage) {
    if (percentage >= 90) {
      return "A";
    } else if (percentage >= 80) {
      return "B";
    } else if (percentage >= 70) {
      return "C";
    } else if (percentage >= 60) {
      return "D";
    } else {
      return "F";
    }
  }
  
  function generatemarksheet() {
    var subject1Marks = Number(prompt("Enter marks for Subject 1:"));
    var subject2Marks = Number(prompt("Enter marks for Subject 2:"));
    var subject3Marks = Number(prompt("Enter marks for Subject 3:"));
  
    var totalMarks = subject1Marks + subject2Marks + subject3Marks;
    var percentage = (totalMarks / 300) * 100;
  
    var grade = calculateGrade(percentage);
  
    alert(
        "Subject 1: " + subject1Marks +
        "\nSubject 2: " + subject2Marks +
        "\nSubject 3: " + subject3Marks +
        "\n\nTotal Marks: " + totalMarks +
        "\nPercentage: " + percentage.toFixed(2) + "%" +
        "\nGrade: " + grade
    );
  }