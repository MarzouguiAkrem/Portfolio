const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch(err => console.error(err));

// Importer et utiliser les routes d'admin, de projet, d'éducation, d'expérience et de compétence
const adminRoutes = require('./routes/adminRoutes');
const projectRoutes = require('./routes/projectRoutes');


app.use('/api/admin', adminRoutes);
app.use('/api/projects', projectRoutes);

