function createSong(songName, songArtist, fav = false) {
  var song = {
    name: songName,
    artist: songArtist,
    favorite: fav,
    hasBeenPlayed: false,
  };
  return song;
}

function playSong(song) {
  song.hasBeenPlayed = true;
  return song;
}

function makePlaylist(playlistName, songsArr) {
  var playlist = {
    name: playlistName,
    songs: songsArr,
  };
  return playlist;
}

function addSongToPlaylist(playlist, songAdd) {
  playlist.songs.push(songAdd);
  // console.log(playlist);
  return playlist;
}

function playSongs(playlist, favoriteOnly) {
  // check first if favorites on
  // if on -> iterate through
  // each item check if favorite -> if yes
  // change has been played // no else statement needed
  // if favorites not on -> iterate through and play each
  if (favoriteOnly === "favorites only") {
    for (let i = 0; i < playlist.songs.length; i++) {
      if (playlist.songs[i].favorite === true) {
        playlist.songs[i].hasBeenPlayed = true;
      }
    }
  } else {
    for (let i = 0; i < playlist.songs.length; i++) {
      playlist.songs[i].hasBeenPlayed = true;
    }
  }
  // console.log(playlist);
  return playlist;
}

module.exports = {
  createSong,
  playSong,
  makePlaylist,
  addSongToPlaylist,
  playSongs,
};
