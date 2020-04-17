const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://user_employee:12345@employee-ns3zh.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true,useUnifiedTopology:true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./employee.model');

