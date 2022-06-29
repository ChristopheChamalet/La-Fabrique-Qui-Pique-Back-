const NotesModel = require("../models/notes_model");
const ObjectID = require("mongoose").Types.ObjectId;

module.exports.readNote = (req, res, next) => {
  NotesModel.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log("error to get data" + err);
    }
  });
};

module.exports.createNote = async (req, res, next) => {
  const newNotes = new NotesModel({
    user_id: req.body.user_id,
    numRuche: req.body.numRuche,
    date: req.body.date,
    reine: req.body.reine,
    cr: req.body.cr,
    oeufs: req.body.oeufs,
    couvains: req.body.couvains,
    force: req.body.force,
    traitement: req.body.traitement,
    nourissement: req.body.nourissement,
    nbhausse: req.body.nbhausse,
    description: req.body.description,
  });
  try {
    const post = await newNotes.save();
    return res.status(201).json(post);
  } catch (e) {
    return res.status(400).send(e);
  }
};

module.exports.updateNote = (req, res, next) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send("ID inconnue" + req.params.id);
  } else {
    const updateRecord = {
      description: req.body.description,
    };
    NotesModel.findByIdAndUpdate(
      req.params.id,
      { $set: updateRecord },
      { new: true },
      (err, docs) => {
        if (!err) {
          res.send(docs);
        } else {
          console.log("Error with updating " + err);
        }
      }
    );
  }
};

module.exports.deleteNote = (req, res, next) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send("ID inconnue" + req.params.id);
  } else {
    NotesModel.findByIdAndRemove(req.params.id, (err, docs) => {
      if (!err) {
        res.send(docs);
      } else {
        console.log("Remove Error" + err);
      }
    });
  }
};
