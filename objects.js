var playlist = new Object({"Rolling Stones": "Tumbling Dice"});


function updatePlaylist(playlist, artistname, songtitle) {
  playlist[artistname] = songtitle
  return playlist
}

<<<<<<< HEAD
function removeFromPlaylist(playlist, artistname) {
 delete playlist[artistname]
  return playlist
=======
function removeFromPlaylist(playlist, aritistname) {
 delete playlist.artistname
 
 return playlist
>>>>>>> 91294b3b70c3dcb3eea2fba7eb1000f085820b62
}