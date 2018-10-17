db.product.drop();

db.product.insert({
  name: "Batman Lego Set",
  qty: 1,
  price: 9.99,
  company: "LEGO",
  category: "Toys"
});

db.product.insert({
  name: "32 Piece Ratchet Set",
  qty: 2,
  price: 29.99,
  company: "Stanley",
  category: "Tools"
});

db.product.insert({
  name: "hot-wheels car",
  qty: 10,
  price: 10
});

db.product.find({
  catagory: 1,
  company: 1,
});

db.product.find({
  name: 1,
  catagory: 1,
  company: 1,
});

db.products.update(
  {name: "Stanley"},
  {
    $rename: {name: "Stanley Black and Decker"}
  }
);

db.product.find({ price: {$gt: 10.00 } });

db.product.remove({
  name: {$eq: "Crest"},
}, true);# MONGO_Q
