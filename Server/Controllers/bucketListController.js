const Express = require("express");
const router = Express.Router();
const validateJWT = require("../middleware/validate-jwt");
const {BucketListModel} = require("../models");

router.get('/practice', (req, res) => {
    res.send('Hey! This is the practice route!  Good job!') 
});

//* Create List Item
router.post('/create', /*validateSession*/ async(req, res) => {
    const {nameOfPlace, locationOfPlace, eventInPlace, whyAdded} = req.body;

    try{ 
        const BucketList = await BucketListModel.create({
            nameOfPlace, 
            locationOfPlace, 
            eventInPlace, 
            whyAdded,
            owner: id       
        });
        res.status(201).json({
            message: `The list item has successfully been added yo your bucket!`,
            BucketList
        });
    } catch(err) {
        res.status(500).json({
            message: `The list item failed to enter the bucket: ${err}`
        });
    }
});


//* Update List Item



//* Delete List Item


//* Get One List Item


//* Get Whole Bucket List of Items

module.exports = router;