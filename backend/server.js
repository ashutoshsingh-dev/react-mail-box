const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const allMails = require("./mail-constants.js");

const ACCESS_EXPIRATION_TIME =
  process.env.ACCESS_TOEKN_EXPIRATION_TIME || "10min";
const REFRESH_EXPIRATION_TIME =
  process.env.REFRESH_TOEKN_EXPIRATION_TIME || "10d";

dotenv.config();
const app = express();
const secretKey = process.env.SECRET_KEY || "secret";
const PORT = process.env.PORT || 7000;

app.use(express.json());

app.use(cors({ credentials: true, origin: true }));
app.use(cookieParser());

app.post("/login", (req, res) => {
  console.log(req.body);
  const user = {
    id: 1,
    username: "john.doe",
  };

  const accessToken = jwt.sign({ user }, secretKey, {
    expiresIn: ACCESS_EXPIRATION_TIME,
  });
  const refreshToken = jwt.sign({ user }, secretKey, {
    expiresIn: REFRESH_EXPIRATION_TIME,
  });

  res
    .cookie("refreshToken", refreshToken, {
      maxAge: 24 * 60 * 60 * 1000,
    })
    .send({ user, token: accessToken });
});

app.post("/refresh-token", (req, res) => {
  const refreshToken = req.cookies?.["refreshToken"];

  try {
    const decoded = jwt.verify(refreshToken, secretKey);
    const accessToken = jwt.sign({ user: decoded.user }, secretKey, {
      expiresIn: ACCESS_EXPIRATION_TIME,
    });

    res.send({ user: decoded.user, token: accessToken });
  } catch (error) {
    return res.sendStatus(401);
  }
});

app.get("/mail/all", (res) => {
  res.send({ allMails });
});

app.listen(PORT, () => {
  console.log(`Server active on http://localhost:${PORT}!`);
});
