const router = require("express").Router();

const activities = [];

// Route for saving activity
router.post("/activities", (req, res) => {
    const { mileage, duration, date } = req.body;
    if (!mileage) {
        return res.status(400).json({
            success: false,
            message: "Mileage is required"
        })
    }
    if (!duration) {
        return res.status(400).json({
            success: false,
            message: "duration is required"
        })
    }
    if (!date) {
        return res.status(400).json({
            success: false,
            message: "Date is required"
        })
    }
    activities.push(req.body);
    res.json({
        activities: activities,
        success: true
    });

})
// Route for getting activity data by duration

// route for getting activity data by mileage


module.exports = router;