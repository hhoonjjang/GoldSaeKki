import { Router } from "express";
import db from "../models/index.js";
const router = Router();

router.post("/displaycategory", async (req, res) => {
  const tempCategory = await db.Category.findAll({
    include: [
      {
        model: db.Helptext,
        as: "Help",
        include: [
          {
            model: db.Helptextchild,

            as: "Child",
          },
        ],

        // order: [
        //   ["id", "ASC"],
        //   //   [{ model: db.Helptext, as: "Help" }, "createdAt", "ASC"],
        // ],
      },
    ],

    order: [
      ["id", "ASC"],
      [{ model: db.Helptext, as: "Help" }, "id", "ASC"],
      [
        { model: db.Helptext, as: "Help" },
        { model: db.Helptextchild, as: "Child" },
        "id",
        "ASC",
      ],
    ],
    // order: [
    //   ["id", "ASC"],
    //   [{ model: db.Helptext, as: "Help" }, "id", "ASC"],
    // ],
  });

  console.log("하이");

  console.log(tempCategory[0].Help);
  console.log("하이");

  res.send(tempCategory);
});

export default router;
