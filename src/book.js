function createTitle(title) {
  return `The ${title}`;
};

function buildMainCharacter() {
  var ghoulCharacter = {
    name: "Vassya",
    age: 16,
    pronouns: "she/her"
  };
  return ghoulCharacter;
};

function saveReview(title, review) {
  if (!review.includes(title)) {
    return review.push(title);
  }
};

module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  // calculatePageCount: calculatePageCount,
  // writeBook: writeBook,
  // editBook: editBook
}
