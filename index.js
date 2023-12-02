const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

const Product = require("./models/product");

mongoose.connect('mongodb://127.0.0.1:27017/farmStand', {useNewUrlParser: true, useUnifiedTopology: true}) //IPv6(://localhost:27017)ではなく、IPv4を使用（://127.0.0.1:27017）
  .then(() => {
    console.log("MongoDBコネクションOK!!!");
  })
  .catch(err => {
    console.log("MongoDBコネクションエラー!");
    console.log(err);
  }
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/products", async (req, res) => {
  const products = await Product.find({});
  res.render("products/index", { products });
});

app.listen(3000, () => {
  console.log("ポート3000でリクエスト受付中...");
});