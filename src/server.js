const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const { port } = require('./dbConfig');
const userRoutes = require('./routes/UserRoutes');
const SearchRoutes = require('./routes/SearchRoutes');



app.use(morgan('common'));
app.use(cors());
app.use(express.json());


app.use('/auth/', userRoutes);
app.use('/', SearchRoutes);



app.listen(port, () => console.log(`Server is running on port ${port}`));
