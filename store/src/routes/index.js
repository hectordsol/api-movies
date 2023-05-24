const {Router}=require("express");
const moviesDB = require("../database");

const router = Router();
router.get("/:model", async (req,res) => {
    const {model} = req.params;
    const response = await moviesDB[model].list();
    res.status(200).json(response);
});
router.get("/:model/:id", async (req,res) => {
    const {model, id} = req.params;
    const response = await moviesDB[model].get(id);
    res.status(200).json(response);
});
router.post("/:model", async (req, res) =>{
    const {model} = req.params;
    const value = req.body;
    console.log("POST: ", value);
    const response =await moviesDB[model].insert(value);
    res.status(200).json(response);
});
module.exports = router;