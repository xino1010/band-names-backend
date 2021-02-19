const { io } = require("../index");
const Band = require("../models/band");
const Bands = require("../models/bands");

const bands = new Bands();
bands.addBand(new Band("Queen"));
bands.addBand(new Band("Bon Jovi"));
bands.addBand(new Band("Heroes del Silencio"));
bands.addBand(new Band("Metallica"));

io.on("connection", (socket) => {
  console.log(`Connected socket ${socket.id}`);
  socket.emit("bands", bands.getBands());
  socket.on("disconnect", () => {
    console.log(`Socket ${socket.id} disconnected`);
  });
  socket.on("vote-band", (id) => {
    bands.voteBand(id);
    io.emit("bands", bands.getBands());
  });
  socket.on("add-band", (name) => {
    bands.addBand(new Band(name));
    io.emit("bands", bands.getBands());
  });
  socket.on("delete-band", (id) => {
    bands.deleteBand(id);
    io.emit("bands", bands.getBands());
  });
});
