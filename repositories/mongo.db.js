import mongodb from "mongodb";

function getClient() {
  const uri = "mongodb+srv://vdalmoro:hunted@cluster0.xkokta8.mongodb.net/";
  return new mongodb.MongoClient(uri);
}

export { getClient };
