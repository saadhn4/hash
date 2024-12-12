import express from "express";

const router = express.Router();

router.get("/getdelivery", (req, res) => {
  try {
    res.status(200).send("delivery");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

export default router;
