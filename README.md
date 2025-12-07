Student Management System
=========================
Live Demo: https://sprightly-pothos-08c6dd.netlify.app/

Overview
--------
A client-side Student Management System with admin and student portals. Admins can manage students, attendance, and marks. Students can log in to view their details, attendance, and marks. Built with vanilla HTML, CSS, and JavaScript—no backend required.

Key Features
------------
- Admin portal: add, delete, search, and view all students
- Attendance entry: +5% increments per selected student, capped at 100%
- Marks entry: per-student marks (0–100) with validation
- Student portal: login to view profile, attendance, and marks
- Preloaded demo users for quick testing
- Responsive UI

Default Credentials
-------------------
- Admin: username `prakash`, password `1234`
- Students (password `123` for all): `Gangadhar`, `Sharuf`, `Vegesh`, `Kamran`, `Poorna`

How to Use Locally
------------------
1) Clone or download the repo
2) Open `index.html` in a browser (no build step)
3) Use the credentials above to log in as admin or student

Project Structure
-----------------
- index.html  — markup for the app
- style.css   — styling and layout
- script.js   — app logic (navigation, CRUD, attendance, marks)

Netlify Deploy
--------------
- Live site: https://sprightly-pothos-08c6dd.netlify.app/
- To redeploy on Netlify: drag-and-drop the folder or connect the repo; site is static

Notes
-----
- Data is stored in memory (arrays) for demo purposes. Refresh clears changes.
- Attendance increments by 5% per save action; marks are bounded 0–100.
