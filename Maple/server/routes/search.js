import { Router } from "express";
const router = Router();

import { Op } from "sequelize";
import db from "../models/index.js";

router.post("/mainSearch", async (req, res) => {
  try {
    console.log("req.body.searchType : ", req.body.searchType);
    console.log("req.body.searchData : ", req.body.searchData);
    switch (req.body.searchType) {
      case "제목": {
        //let searchData = req.params.searchData;
        //searchData = searchData.replace(" ", "%");

        const searchResult = await db.Board.findAll({
          where: {
            title: {
              [Op.like]: `%${req.body.searchData}%`,
            },
          },
        });
        console.log(searchResult);
        res.send({ searchResult: searchResult });
        break;
      }
      case "writer": {
        const searchResult = await db.Board.findAll({
          where: {
            userName: {
              [Op.like]: `%${req.body.searchData}%`,
            },
          },
        });
        console.log(searchResult);
        res.send({ searchResult: searchResult });
        break;
      }
      case "tag":
        const searchResult = await db.Board.findAll({
          where: {
            title: {
              [Op.like]: `%${req.body.searchData}%`,
            },
          },
        });
        console.log(searchResult);
        res.send({ searchResult: searchResult });
    }
  } catch (error) {
    console.error(error);
    res.send({ status: 400 });
  }
});

export default router;
