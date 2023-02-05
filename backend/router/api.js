const router = require("express").Router();
const Reg = require("../models/reg");
const Food = require("../models/food");
const Diary = require("../models/diary");
const MyDiary = require("../models/mydiary");
const Admin = require("../models/admin");
router.get("/", async (req, res) => {
  try {
    const userData = await Reg.find();
    res.json(userData);
  } catch (error) {
    res.json({ message: error.message });
  }
});
router.post("/", async (req, res) => {
  const { email, username, password } = req.body;
  const regData = await Reg.findOne({ username: username, email: email });
  if (regData == null) {
    const regRecord = new Reg({
      email: email,
      username: username,
      password: password
    });
    regRecord.save();
    res.status(201).json(regRecord);
  } else {
    res.status(400).json({ message: "Already Exit" });
  }
});
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const regRecord = await Reg.findOne({ username: username });
  if (regRecord !== null) {
    if (regRecord.password == password) {
      res.status(201).json(regRecord);
    } else {
      res.status(400).json({ message: "Wrong Credentials" });
    }
  } else {
    res.status(400).json({ message: "Wrong Credentials" });
  }
});
router.post("/food", async (req, res) => {
  const {
    foodname,
    protein,
    carbohydrate,
    fat,
    vitaminA,
    vitaminB12,
    vitaminC,
    calcium,
    iron,
    fiber,
    energy
  } = req.body;
  const food = new Food({
    foodname: foodname,
    protein: protein,
    carbohydrate: carbohydrate,
    fat: fat,
    vitaminA: vitaminA,
    vitaminB12: vitaminB12,
    vitaminC: vitaminC,
    calcium: calcium,
    iron: iron,
    fiber: fiber,
    energy: energy
  });
  try {
    await food.save();
    res.status(201).json(food);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.get("/food", async (req, res) => {
  try {
    // console.log(food)
    const food = await Food.find();
    res.status(200).json(food);
  } catch (error) {
    res.status(503).json({ message: error.message });
  }
});
router.delete("/food/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    await Food.findByIdAndDelete(id);
    res.status(200).json({ message: "successfully record delete" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// router.post('/foodsearch',async(req,res)=>{
//     const{foodname}=req.body;
//     // console.log(foodname);
//     const foodRecord=await Food.findOne({foodname:foodname})
//     if(foodRecord!==null){
//         res.status(200).json(foodRecord)
//             // res.json({message:"Food Found"})

//     }else{
//         res.status(200).json({message:"No Item found"})
//     }
// })

router.post("/foodsearch", async (req, res) => {
  const { formData } = req.body;
  console.log(req.body);
  // console.log(foodname);
  const foodRecord = await Food.findOne({ foodname: formData });

  try {
    if (foodRecord == null) {
      res.status(200).json({ message: "No data found" });
    } else {
      res.status(200).json(foodRecord);
    }
  } catch (error) {
    res.status(200).json(error);
  }
});

// router.get('/foodsearch',async(req,res)=>{
//     // const food=req.params.food;
//     try{
//         const foodRecord= await Food.find();
//         res.status(200).json(foodRecord);
//      }catch(error){
//          res.status(400).json({message:"Not Found"})
//      }
// })
router.post("/diaryData/:username", async (req, res) => {
  const username = req.params.username;
  const name = req.body.foodname;
  let serachData = new Date();
  const diaryData = new Diary({
    username: username,
    foodname: name,
    searchDate: serachData
  });
  await diaryData.save();
  let data = new MyDiary({
    username: username,
    foodname: name,
    searchDate: serachData
  });
  await data.save();
});
router.get("/mydiary/:username", async (req, res) => {
  const username = req.params.username;
  const record = await MyDiary.find({ username: username });
  res.json(record);
});
router.post("/trackdata", async (req, res) => {
  const records = await MyDiary.find({});
  const result = records.filter(function(data){
    const date = data.searchDate;
    return date >= new Date(req.body.initialDate) && date<=new Date(req.body.finalDate);
  })
  console.log(result)
});
router.post("/adminlogin", async (req, res) => {
  const { username, password } = req.body;

  const regRecord = await Admin.findOne({ username: username });
  if (regRecord !== null) {
    if (regRecord.password == password) {
      res.status(201).json(regRecord);
    } else {
      res.status(400).json({ message: "Wrong Credentials" });
    }
  } else {
    res.status(400).json({ message: "Wrong Credentials" });
  }
});
router.get("/adminlogin", async (req, res) => {
  try {
    const userData = await Admin.find();
    res.json(userData);
  } catch (error) {
    res.json({ message: error.message });
  }
});
router.get("/showsingleproduct/:id", async (req, res) => {
  const id = req.params.id;
  const record = await Food.findById(id);
  res.json(record);
});
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const {
    foodname,
    protein,
    carbogydrate,
    fat,
    calcium,
    iron,
    fiber,
    energy,
    vitaminA,
    vitaminB12,
    vitaminC
  } = req.body;
  await Food.findByIdAndUpdate(id, {
    foodname: foodname,
    protein: protein,
    carbohydrate: carbogydrate,
    fat: fat,
    vitaminA: vitaminA,
    vitaminB12: vitaminB12,
    vitaminC: vitaminC,
    calcium: calcium,
    iron: iron,
    fiber: fiber,
    energy: energy
  });
  res.json({ message: "Successfully Updated" });
});
module.exports = router;
