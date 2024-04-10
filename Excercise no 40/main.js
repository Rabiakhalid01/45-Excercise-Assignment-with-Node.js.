//Define the amke_album function
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.track = tracks;
    }
    return album;
}
// calling three functions with different avlues
var album1 = make_album("Artits no.1", "Album title 1");
var album2 = make_album("Rabia", "Album title 2");
var album3 = make_album(" khalid", "Album title 3", 5);
console.log(album1);
console.log(album2);
console.log(album3);
