const express = require('express');
const path = require('path');
const app = express();
<<<<<<< HEAD
const PORT = process.env.PORT || 3000;

=======
const PORT = 3000;

app.use(express.json());
>>>>>>> e98a30036d1028505d9da57f8a0c324093e81f53
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 السيرفر يعمل على: http://localhost:${PORT}`);
});
