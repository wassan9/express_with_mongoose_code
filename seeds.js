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

const seedProducts = [
  {
      name: 'ナス',
      price: 98,
      category: '野菜'
  },
  {
      name: 'カットメロン',
      price: 480,
      category: '果物'
  },
  {
      name: '種無しスイカのカット',
      price: 380,
      category: '果物'
  },
  {
      name: 'オーガニックセロリ',
      price: 198,
      category: '野菜'
  },
  {
      name: 'コーヒー牛乳',
      price: 298,
      category: '乳製品'
  },
];

// const p = new Product({
//   name: "ルビーグレープフルーツ",
//   price: 198,
//   category: "果物"
// });
// p.save().then(p => {
//   console.log(p);
// }).catch(e => {
//   console.log(e);
// });

Product.insertMany(seedProducts)
.then(res => {
  console.log(res);
}).catch(e => {
  console.log(e);
});