const Band = require("./band");

class Bands {
  constructor() {
    this.bands = [];
  }
  addBand(band = new Band()) {
    this.bands.push(band);
  }
  getBands() {
    return this.bands;
  }
  deleteBand(id = "") {
    const index = this.bands.findIndex((b) => b.id === id);
    if (index > -1) {
      this.bands.splice(index, 1);
    }
  }
  voteBand(id = "") {
    const index = this.bands.findIndex((b) => b.id === id);
    if (index > -1) {
      this.bands[index].votes++;
    }
  }
}

module.exports = Bands;
