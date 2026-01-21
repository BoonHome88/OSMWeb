// ตรวจสอบว่าผู้ใช้ล็อกอินหรือยัง
if (!localStorage.getItem("loggedIn") && !window.location.pathname.endsWith("admin.html")) {
    window.location.href = "admin.html"; // ถ้ายังไม่ล็อกอิน ให้กลับไปหน้า index.html
}

// ฟังก์ชัน Logout
function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "admin.html"; // กลับไปหน้า login
}

