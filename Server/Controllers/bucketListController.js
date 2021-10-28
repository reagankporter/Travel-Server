const Express = require("express");
const router = Express.Router();
const validateJWT = require("../Middleware/validate-jwt");
const {BucketListModel} = require("../models");

router.get('/practice', validateJWT, (req, res) => {
    res.send('Hey! This is the practice route!  Good job!') 
});


//* Create List Item
router.post('/create', validateJWT, async(req, res) => {
    const {nameOfPlace, locationOfPlace, eventInPlace, entry} = req.body;
    const {id} = req.user;
    const bucketListEntry = {
        nameOfPlace, 
        locationOfPlace, 
        eventInPlace, 
        entry,
        owner: id  
    }

    try{
        const newBucketList = await BucketListModel.create(bucketListEntry);          
        res.status(200).json(newBucketList, {
            message: `The list item has successfully been added yo your bucket!`})
    } catch(err) {
        res.status(500).json({
            message: `The list item failed to enter the bucket: ${err}`});
    }
    BucketListModel.create(bucketListEntry)
});
            

//* Update List Item
router.put("/update/:entryId", validateJWT, async (req, res) => {
    const {nameOfPlace, locationOfPlace, eventInPlace, entry} = req.body.bucketList;
    const bucketListId = req.params.entryId;
    const userId = req.user.id;

    const query = {
        where: {
            id: bucketListId,
            owner: userId
        }
    };
    const updatedBucketList = {
        nameOfPlace: nameOfPlace,
        locationOfPlace: locationOfPlace,
        eventInPlace: eventInPlace,
        entry: entry
    };

    try {
        const update = await BucketListModel.update(updatedBucketList, query);
        res.status(200).json(update);
    } catch(err) {
        res.status(500).json({error: err});
    }

});


//* Delete List Item
router.delete('/delete/:id', validateJWT, async (req, res) => {
    const ownerId = req.user.id;
    const bucketListId = req.params.id;

    try {
        const query = {
            where: {
                id: journalId,
                owner: ownerId
            }
        };
        await BucketListModel.destroy(query);
        res.status(200).json({message: "Item Removed"});
    } catch(err) {
        res.status(500).json({error: err});
    }
});


//* Get Whole Bucket List by User
router.get('/mine', validateJWT, async (req, res) => {
    let {id} = req.user;
    
    try {
        const userBucketList = await BucketListModel.findAll({
            where: {
                owner: id
            }
        });
        res.status(200).json(userBucketList);
    } catch (err) {
        res.status(500).json({error: err});
    }
});

module.exports = router;