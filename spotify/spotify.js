function createCollection(playlistName, description) {
  var collection = {
    name: playlistName,
    description: description,
    tracks: [],
  };
  return collection;
}

function createTrack(title, artist, duration) {
  var track = {
    title: title || "unknown",
    artist: artist || "unknown",
    duration: duration || 0,
  };
  return track;
}

function reviewTrack(track) {
  if (track.artist === "Red Hot Chili Peppers") {
    return `The song ${track.title} rules!`;
  } else {
    return `I wish this was a Red Hot Chili Peppers song.`;
  }
}
function addTrack(collection, track) {
  collection.tracks.push(track);
  return collection;
}

module.exports = {
  createCollection,
  createTrack,
  reviewTrack,
  addTrack,
};
