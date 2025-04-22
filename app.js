const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');

const dogRoutes = require('./routes/dog');
const adminRoutes = require('./routes/admin');
const errorRoute = require('./controller/error-page');

const app = express();

//view engine
app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(bodyparser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/admin', adminRoutes);
app.use(dogRoutes);
app.use(errorRoute.getError);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});