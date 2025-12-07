let students = [
    { name: "Gangadhar", pass: "123", age: "20", id: "001", college: "ABC", section: "A", grade: "A", attendance: 0, marks: 0 },
    { name: "Sharuf", pass: "123", age: "20", id: "002", college: "ABC", section: "A", grade: "B", attendance: 0, marks: 0 },
    { name: "Vegesh", pass: "123", age: "21", id: "003", college: "ABC", section: "B", grade: "A", attendance: 0, marks: 0 },
    { name: "Kamran", pass: "123", age: "20", id: "004", college: "ABC", section: "B", grade: "B", attendance: 0, marks: 0 },
    { name: "Poorna", pass: "123", age: "21", id: "005", college: "ABC", section: "A", grade: "A", attendance: 0, marks: 0 }
];

// ----------- Navigation -----------
function showAdminLogin() { hideAll(); document.getElementById("adminLogin").classList.remove("hidden"); clearAdminLoginForm(); }
function showStudentLogin() { hideAll(); document.getElementById("studentLogin").classList.remove("hidden"); clearStudentLoginForm(); }
function adminMenu() { hideAll(); document.getElementById("adminPanel").classList.remove("hidden"); }
function showAddForm() { hideAll(); document.getElementById("addForm").classList.remove("hidden"); clearAddForm(); }
function showDeleteForm() { hideAll(); document.getElementById("deleteForm").classList.remove("hidden"); clearDeleteForm(); }
function showSearchForm() { hideAll(); document.getElementById("searchForm").classList.remove("hidden"); clearSearchForm(); }
function showViewAllPage() { hideAll(); document.getElementById("viewAllPage").classList.remove("hidden"); populateAllStudentsTable(); }
function showSearchResultPage() { hideAll(); document.getElementById("searchResultPage").classList.remove("hidden"); }
function showAttendanceForm() { hideAll(); document.getElementById("attendancePage").classList.remove("hidden"); populateAttendanceList(); }
function showMarksForm() { hideAll(); document.getElementById("marksPage").classList.remove("hidden"); populateMarksList(); }

function goHome() { hideAll(); document.getElementById("mainMenu").classList.remove("hidden"); }

function hideAll() {
    document.querySelectorAll(".container").forEach(c => c.classList.add("hidden"));
}

// ----------- ADMIN LOGIN -----------
function adminLogin() {
    let u = document.getElementById("adminUser").value;
    let p = document.getElementById("adminPass").value;

    if (u === "prakash" && p === "1234") {
        adminMenu();
    } else {
        alert("Incorrect admin login!");
    }
}

// ----------- ADD STUDENT -----------
function addStudent() {
    let name = document.getElementById("addName").value;
    let pass = document.getElementById("addPass").value;
    let age = document.getElementById("addAge").value;
    let id = document.getElementById("addID").value;
    let college = document.getElementById("addCollege").value;
    let section = document.getElementById("addSection").value;
    let grade = document.getElementById("addGrade").value;

    students.push({ name, pass, age, id, college, section, grade, attendance: 0, marks: 0 });

    alert("Student added successfully!");
    adminMenu();
}

// ----------- DELETE STUDENT -----------
function deleteStudent() {
    let name = document.getElementById("deleteName").value;

    students = students.filter(s => s.name !== name);

    alert("Deleted (if existed)");
    adminMenu();
}

// ----------- SEARCH STUDENT -----------
function searchStudent() {
    let name = document.getElementById("searchName").value;
    let s = students.find(st => st.name === name);

    let resultContainer = document.getElementById("searchResult");

    if (s) {
        resultContainer.innerHTML = `
            <div style="background: #f8f9ff; padding: 20px; border-radius: 10px; border: 2px solid #667eea;">
                <h3 style="color: #667eea; margin-bottom: 15px;">✓ Student Found</h3>
                <table style="width: 100%;">
                    <tr>
                        <td style="font-weight: 600; padding: 8px 0; color: #555;">Name:</td>
                        <td style="padding: 8px 0; color: #333;">${s.name}</td>
                    </tr>
                    <tr>
                        <td style="font-weight: 600; padding: 8px 0; color: #555;">Student ID:</td>
                        <td style="padding: 8px 0; color: #333;">${s.id}</td>
                    </tr>
                    <tr>
                        <td style="font-weight: 600; padding: 8px 0; color: #555;">Age:</td>
                        <td style="padding: 8px 0; color: #333;">${s.age}</td>
                    </tr>
                    <tr>
                        <td style="font-weight: 600; padding: 8px 0; color: #555;">College:</td>
                        <td style="padding: 8px 0; color: #333;">${s.college}</td>
                    </tr>
                    <tr>
                        <td style="font-weight: 600; padding: 8px 0; color: #555;">Section:</td>
                        <td style="padding: 8px 0; color: #333;">${s.section}</td>
                    </tr>
                    <tr>
                        <td style="font-weight: 600; padding: 8px 0; color: #555;">Grade:</td>
                        <td style="padding: 8px 0; color: #333;">${s.grade}</td>
                    </tr>
                    <tr>
                        <td style="font-weight: 600; padding: 8px 0; color: #555;">Attendance:</td>
                        <td style="padding: 8px 0; color: #333;"><span style="background: #667eea; color: white; padding: 4px 8px; border-radius: 4px;">${s.attendance}%</span></td>
                    </tr>
                    <tr>
                        <td style="font-weight: 600; padding: 8px 0; color: #555;">Marks:</td>
                        <td style="padding: 8px 0; color: #333;"><span style="background: #764ba2; color: white; padding: 4px 8px; border-radius: 4px;">${s.marks}/100</span></td>
                    </tr>
                </table>
            </div>
        `;
    } else {
        resultContainer.innerHTML = `
            <div style="background: #ffe0e0; padding: 20px; border-radius: 10px; border: 2px solid #ff6b6b; text-align: center;">
                <h3 style="color: #ff6b6b;">✗ Student Not Found</h3>
                <p style="color: #555;">No student found with the name "<strong>${name}</strong>"</p>
            </div>
        `;
    }
    showSearchResultPage();
}

// ----------- VIEW ALL -----------
function populateAllStudentsTable() {
    let container = document.getElementById("allStudentsTable");

    if (students.length === 0) {
        container.innerHTML = "<p style='text-align: center; color: #999;'>No students added yet!</p>";
        return;
    }

    let table = `
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Student ID</th>
                    <th>Age</th>
                    <th>College</th>
                    <th>Section</th>
                    <th>Grade</th>
                    <th>Attendance</th>
                    <th>Marks</th>
                </tr>
            </thead>
            <tbody>
    `;

    students.forEach(s => {
        table += `
            <tr>
                <td>${s.name}</td>
                <td>${s.id}</td>
                <td>${s.age}</td>
                <td>${s.college}</td>
                <td>${s.section}</td>
                <td>${s.grade}</td>
                <td><span style="background: #667eea; color: white; padding: 4px 8px; border-radius: 4px;">${s.attendance}%</span></td>
                <td><span style="background: #764ba2; color: white; padding: 4px 8px; border-radius: 4px;">${s.marks}/100</span></td>
            </tr>
        `;
    });

    table += `
            </tbody>
        </table>
    `;

    container.innerHTML = table;
}

// ----------- STUDENT LOGIN -----------
function studentLogin() {
    let name = document.getElementById("stuName").value;
    let pass = document.getElementById("stuPass").value;

    let s = students.find(st => st.name === name && st.pass === pass);

    if (!s) {
        alert("Invalid student login!");
        return;
    }

    hideAll();
    document.getElementById("studentPanel").classList.remove("hidden");

    document.getElementById("studentDetails").innerHTML = `
        <b>Name:</b> ${s.name}<br>
        <b>Age:</b> ${s.age}<br>
        <b>Student ID:</b> ${s.id}<br>
        <b>College:</b> ${s.college}<br>
        <b>Section:</b> ${s.section}<br>
        <b>Grade:</b> ${s.grade}<br>
        <b>Attendance:</b> <span style="background: #667eea; color: white; padding: 4px 8px; border-radius: 4px;">${s.attendance}%</span><br>
        <b>Marks:</b> <span style="background: #764ba2; color: white; padding: 4px 8px; border-radius: 4px; margin-top: 8px; display: inline-block;">${s.marks}/100</span>
    `;
}

function logout() {
    goHome();
}

// ----------- CLEAR FORMS -----------
function clearAddForm() {
    document.getElementById("addName").value = "";
    document.getElementById("addPass").value = "";
    document.getElementById("addAge").value = "";
    document.getElementById("addID").value = "";
    document.getElementById("addCollege").value = "";
    document.getElementById("addSection").value = "";
    document.getElementById("addGrade").value = "";
}

function clearDeleteForm() {
    document.getElementById("deleteName").value = "";
}

function clearSearchForm() {
    document.getElementById("searchName").value = "";
}

function clearAdminLoginForm() {
    document.getElementById("adminUser").value = "";
    document.getElementById("adminPass").value = "";
}

function clearStudentLoginForm() {
    document.getElementById("stuName").value = "";
    document.getElementById("stuPass").value = "";
}

// ----------- ATTENDANCE ENTRY -----------
function populateAttendanceList() {
    let container = document.getElementById("attendanceList");

    if (students.length === 0) {
        container.innerHTML = "<p style='text-align: center; color: #999;'>No students added yet!</p>";
        return;
    }

    let html = `<div style="display: grid; gap: 10px;">`;

    students.forEach((s, index) => {
        html += `
            <div style="background: #f8f9ff; padding: 15px; border-radius: 8px; display: flex; align-items: center; border: 2px solid #e0e0e0;">
                <input type="checkbox" id="attend_${index}" style="width: 20px; height: 20px; cursor: pointer;">
                <label for="attend_${index}" style="margin-left: 15px; cursor: pointer; flex: 1; color: #333; font-weight: 500;">
                    ${s.name} (ID: ${s.id}) - Current: ${s.attendance}%
                </label>
            </div>
        `;
    });

    html += `</div>`;
    container.innerHTML = html;
}

function saveAttendance() {
    let updated = false;
    students.forEach((s, index) => {
        let checkbox = document.getElementById(`attend_${index}`);
        if (checkbox && checkbox.checked) {
            s.attendance += 5;
            if (s.attendance > 100) s.attendance = 100;
            updated = true;
        }
    });

    if (updated) {
        alert("Attendance updated successfully!");
        adminMenu();
    } else {
        alert("Please select at least one student!");
    }
}

// ----------- MARKS ENTRY -----------
function populateMarksList() {
    let container = document.getElementById("marksList");

    if (students.length === 0) {
        container.innerHTML = "<p style='text-align: center; color: #999;'>No students added yet!</p>";
        return;
    }

    let html = `<div style="display: grid; gap: 15px;">`;

    students.forEach((s, index) => {
        html += `
            <div style="background: #f8f9ff; padding: 15px; border-radius: 8px; border: 2px solid #e0e0e0;">
                <label style="display: block; margin-bottom: 10px; color: #333; font-weight: 600;">
                    ${s.name} (ID: ${s.id})
                </label>
                <input type="number" id="marks_${index}" placeholder="Enter marks (0-100)" min="0" max="100" 
                       value="${s.marks}" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px; font-size: 14px;">
            </div>
        `;
    });

    html += `</div>`;
    container.innerHTML = html;
}

function saveMarks() {
    let updated = false;
    students.forEach((s, index) => {
        let marksInput = document.getElementById(`marks_${index}`);
        if (marksInput) {
            let marks = parseInt(marksInput.value) || 0;
            if (marks < 0) marks = 0;
            if (marks > 100) marks = 100;
            s.marks = marks;
            updated = true;
        }
    });

    if (updated) {
        alert("Marks updated successfully!");
        adminMenu();
    } else {
        alert("Please enter marks for at least one student!");
    }
}
