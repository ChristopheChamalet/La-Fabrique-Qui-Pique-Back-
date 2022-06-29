const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notesSchema = Schema({
  user_id: String,
  numRuche: String,
  date: String,
  reine: String,
  cr: String,
  oeufs: String,
  couvains: String,
  force: String,
  traitement: String,
  nourissement: String,
  nbhausse: String,
  description: String,
});

const Notes = mongoose.model("notes", notesSchema);

module.exports = Notes;
