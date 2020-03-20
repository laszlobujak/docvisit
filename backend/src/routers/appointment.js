var express = require('express')
var router = express.Router()
const Appointment = require('../models/Appointment')
const User = require('../models/User')

router.get('/appointment/:userid', async (req, res) => { //Get all appointments by UserId
    var userid = req.params.userid;
    User.find({ userId: userid }, function (err, tasks) {
        if (err)
            res.send(err);

        res.json(tasks);

    })
})

router.patch('appointment/:id', async (req, res, next) => { //Update an appiontment by id
    Appointment.update({ appointment: req.body.appointment }, { where: { id: req.params.id } })
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            console.error(err);
            next(err);
        });
});

router.delete('/appointment/:id', async (req, res) => { //Delete appointment by id
    Appointment.remove({
        id: req.params.id
      }), function (err, appointment) {
        if (err) {
          return res.send(err);
        }
  
        res.json({ message: 'Deleted' });
      }; 
});

router.delete('/:identifier', (req, res) => {
    
});

router.post('/appointment', async (req, res, next) => { //Add appointment
    try {
        const { description, doctor,patient,date } = req.body
        const appointment = new Appointment({ description,doctor,patient,date })
        const ret = await appointment.save()
        res.json(ret)
    } catch (error) {
        return next(error)
    }
})

module.exports = router