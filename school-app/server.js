const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '.')));

let teachers = [];

// استقبال بيانات المعلم وحفظها
app.post('/api/teachers', (req, res) => {
    const { name, restDay, maxClasses } = req.body;
    teachers.push({ name, restDay, maxClasses, id: Date.now() });
    console.log("تمت إضافة معلم جديد:", { name, restDay, maxClasses });
    res.status(200).json({ success: true, teachers });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
