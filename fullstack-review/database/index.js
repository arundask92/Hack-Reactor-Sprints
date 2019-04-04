const mongoose = require("mongoose");
mongoose.connect(
  process.env.MONGODB_URI,
  { useMongoClient: true }
);

const db = mongoose.connection;
db.once("open", () => {
  console.log(`Connected to MongoDB on ${db.host}:${db.port}`);
});

let ownerSchema = new mongoose.Schema({
  login: String,
  avatar_url: String,
  html_url: String,
  reposs_url: String,
  gists_url: String
});

let repoSchema = new mongoose.Schema({
  id: Number,
  name: { type: String, unique: true },
  full_name: String,
  owner: ownerSchema,
  html_url: String,
  description: String,
  url: String,
  created_at: String,
  updated_at: String,
  stargazers_count: Number,
  watchers_count: Number,
  languages_url: String
});

let Repo = mongoose.model("Repo", repoSchema);

let save = repo => {
  // TODO: Your code here
  // This function should save a repo or repos to
  var repos = JSON.parse(repo.body);
  repos.forEach(elem => {
    Repo.create(elem, err => {
      if (err) return console.log(err);
      console.log("saved!");
    });
  });

  // the MongoDB
};

let find25 = callback => {
  Repo.find()
    .sort("created_at-")
    .limit(25)
    .exec((err, repos) => {
      if (err) return callback(err, null);
      callback(null, repos);
    });
};

module.exports = {
  save,
  find25
};
