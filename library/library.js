function issueCard(name, age) {
  var card = {
    name: name,
    age: age,
    numBooksCheckedOut: 0,
    isChild: false,
  };
  if (age < 13) {
    card.isChild = true;
  }
  return card;
}

function searchByAuthor(books, name) {
  // iterate through books
  // compare name to author property
  // push that to found array
  // return found
  var found = [];
  for (let i = 0; i < books.length; i++) {
    if (books[i].author === name) {
      found.push(books[i]);
    }
  }
  if (found.length === 0) {
    var notFound = `No book found for search criteria`;
    return notFound;
  }
  return found;
}

module.exports = { issueCard, searchByAuthor };
