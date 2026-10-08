function calculateAttendance(totalClasses, attendedClasses) {
  const total = Number(totalClasses);
  const attended = Number(attendedClasses);

  if (
    !Number.isFinite(total) ||
    !Number.isFinite(attended) ||
    total <= 0 ||
    attended < 0 ||
    attended > total
  ) {
    return { valid: false, message: "Invalid attendance data" };
  }

  const percentage = (attended / total) * 100;
  const status = percentage >= 75 ? "Eligible" : "Not Eligible";

  return { valid: true, percentage, status };
}

if (typeof document !== "undefined") {
  const form = document.getElementById("attendanceForm");
  const result = document.getElementById("result");
  const resetButton = document.getElementById("resetButton");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const studentName = document.getElementById("studentName").value.trim();
    const totalClasses = document.getElementById("totalClasses").value;
    const attendedClasses = document.getElementById("attendedClasses").value;

    if (studentName === "") {
      result.textContent = "Please enter the student name.";
      return;
    }

    const attendance = calculateAttendance(totalClasses, attendedClasses);

    if (!attendance.valid) {
      result.textContent = attendance.message;
      return;
    }

    result.innerHTML = `
    <strong>${studentName}'s Attendance: ${attendance.percentage.toFixed(2)}%</strong><br>
    Status: ${attendance.status}
  `;
  });

  resetButton.addEventListener("click", function () {
    form.reset();
    result.textContent = "";
  });
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { calculateAttendance };
}
