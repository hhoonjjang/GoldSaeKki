import express from "express";
import session from "express-session";
import dotenv from "dotenv";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import routes from "./routes/index.js";
import multer from "multer";
import db from "./models/index.js";

dotenv.config();

const app = express();

// CKEditor 이미지 업로드를 위한 multer 기본 세팅
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/");
  },
  filename: function (req, file, cb) {
    let ext = file.originalname.split(".");
    ext = ext[ext.length - 1];
    cb(null, `${Date.now()}.${ext}`);
  },
});
const upload = multer({ storage: storage });
let corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true,
};
app.use([
  express.static("public"),
  express.json(),
  cors(corsOptions),
  upload.array("files"),
]);
app.post("/upload_files", (req, res) => {
  // console.log(req.body);
  if (req.files.length > 0) {
    res.json(req.files[0]);
  }
});

app.set("port", process.env.PORT || 8080);

app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
  else morgan("dev")(req, res, next);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: "session",
  })
);

db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("디비 연결!");
  })
  .catch((error) => {
    console.error(error);
  });

app.use("/api", routes);

app.listen(app.get("port"), () => {
  console.log(`${app.get("port")}` + "포트열어따리");
});
