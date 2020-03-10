import axios from 'axios'
// axios.defaults.withCredentials = true
const CLIENT_ID = '6e3a5772c02b4661865df810bea63f38';
const CLIENT_SECRET = 'a7bea6a24323483291935a90753b3a65';
const SPOTIFYKEY = 'spotifyKey'; 
const qs = require('querystring') 
const config = {
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
  'Authorization': 'Basic ' + Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64') // client id and secret from env
  }
}
const configData = {
  headers: {
    'Accept':'application/json',
    'Content-Type': 'application/json', 
    'Authorization': ''//'Bearer' + token 
  }
}
const params = {
  'grant_type': 'client_credentials'
}
 
// const BASE_URL = (process.env.NODE_ENV !== 'development') ?
//         '/api/items' :
//         '//localhost:3000/api/items';

export default {
  getTracks,
  getArtist,
  getToken,
  saveToStorage,
  loadFromStorage
}

async function getToken(){
  return await axios.post('https://accounts.spotify.com/api/token',qs.stringify(params),config)
  .then(res => {
    //console.log('rrrrrrrrrrrrrrr',res.data.access_token);
    return res.data.access_token
  })
  .catch(err => {
    console.log(err);
  });

}

async function getTracks(searchBy){
    let token = loadFromStorage(SPOTIFYKEY)
    if (!token) {
      token = await getToken()
      saveToStorage(SPOTIFYKEY,token)
    }
    let tracks = await getData(token,searchBy,'track')
    if(!tracks.tracks.items){
      token = await getToken()
      saveToStorage(SPOTIFYKEY,token)
      return getTracks(searchBy)
    }
    return tracks.tracks.items
}

async function getArtist(searchBy){
    let token = loadFromStorage(SPOTIFYKEY)
    if (!token) {
      token = await getToken()
      saveToStorage(SPOTIFYKEY,token)
    }
    let artist = await getData(token,searchBy,'artist')
    if(!artist.artists.items[0]){
      token = await getToken()
      saveToStorage(SPOTIFYKEY,token)
      return getArtist(searchBy)
    }
    return artist.artists.items[0];
}

async function getData(token,name = 'u2',type='track'){
  configData.headers.Authorization = 'Bearer ' + token 
  return await  axios.get(`https://api.spotify.com/v1/search?q=${name}&type=${type}`,configData)
    .then(res => {
       return res.data
    }).catch(err => {
      console.log(err)
    })
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
function loadFromStorage(key) {
  var str = localStorage.getItem(key);
  var value = JSON.parse(str)
  return value;
}






























// let artist = {
//   "external_urls": {
//     "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
//   },
//   "followers": {
//     "href": null,
//     "total": 7593238
//   },
//   "genres": [
//     "dance pop",
//     "latin",
//     "miami hip hop",
//     "pop",
//     "pop rap"
//   ],
//   "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
//   "id": "0TnOYISbd1XYRBk9myaseg",
//   "images": [
//     {
//       "height": 640,
//       "url": "https://i.scdn.co/image/1353990534aef10c946cf3a47865ac22471be5c4",
//       "width": 640
//     },
//     {
//       "height": 320,
//       "url": "https://i.scdn.co/image/f3a0aca9f85c6cdad37ebcc51a01879bf8c50af9",
//       "width": 320
//     },
//     {
//       "height": 160,
//       "url": "https://i.scdn.co/image/5ede30313c461d7ed0f5c4f3dea484fd349d49a9",
//       "width": 160
//     }
//   ],
//   "name": "Pitbull",
//   "popularity": 86,
//   "type": "artist",
//   "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
// }









// let tracks =  {
//   "tracks": [
//     {
//       "album": {
//         "album_type": "album",
//         "artists": [
//           {
//             "external_urls": {
//               "spotify": "https://open.spotify.com/artist/12Chz98pHFMPJEknJQMWvI"
//             },
//             "href": "https://api.spotify.com/v1/artists/12Chz98pHFMPJEknJQMWvI",
//             "id": "12Chz98pHFMPJEknJQMWvI",
//             "name": "Muse",
//             "type": "artist",
//             "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI"
//           }
//         ],
//         "external_urls": {
//           "spotify": "https://open.spotify.com/album/0lw68yx3MhKflWFqCsGkIs"
//         },
//         "href": "https://api.spotify.com/v1/albums/0lw68yx3MhKflWFqCsGkIs",
//         "id": "0lw68yx3MhKflWFqCsGkIs",
//         "images": [
//           {
//             "height": 640,
//             "url": "https://i.scdn.co/image/ab67616d0000b27328933b808bfb4cbbd0385400",
//             "width": 640
//           },
//           {
//             "height": 300,
//             "url": "https://i.scdn.co/image/ab67616d00001e0228933b808bfb4cbbd0385400",
//             "width": 300
//           },
//           {
//             "height": 64,
//             "url": "https://i.scdn.co/image/ab67616d0000485128933b808bfb4cbbd0385400",
//             "width": 64
//           }
//         ],
//         "name": "Black Holes and Revelations",
//         "release_date": "2006-06-19",
//         "release_date_precision": "day",
//         "total_tracks": 12,
//         "type": "album",
//         "uri": "spotify:album:0lw68yx3MhKflWFqCsGkIs"
//       },
//       "artists": [
//         {
//           "external_urls": {
//             "spotify": "https://open.spotify.com/artist/12Chz98pHFMPJEknJQMWvI"
//           },
//           "href": "https://api.spotify.com/v1/artists/12Chz98pHFMPJEknJQMWvI",
//           "id": "12Chz98pHFMPJEknJQMWvI",
//           "name": "Muse",
//           "type": "artist",
//           "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI"
//         }
//       ],
//       "disc_number": 1,
//       "duration_ms": 366213,
//       "explicit": false,
//       "external_ids": {
//         "isrc": "GBAHT0500600"
//       },
//       "external_urls": {
//         "spotify": "https://open.spotify.com/track/7ouMYWpwJ422jRcDASZB7P"
//       },
//       "href": "https://api.spotify.com/v1/tracks/7ouMYWpwJ422jRcDASZB7P",
//       "id": "7ouMYWpwJ422jRcDASZB7P",
//       "is_local": false,
//       "is_playable": true,
//       "name": "Knights of Cydonia",
//       "popularity": 68,
//       "preview_url": "https://p.scdn.co/mp3-preview/d7624ec5f93b6d92c1836a95c40ecce463584f6e?cid=774b29d4f13844c495f206cafdad9c86",
//       "track_number": 11,
//       "type": "track",
//       "uri": "spotify:track:7ouMYWpwJ422jRcDASZB7P"
//     },
//     {
//       "album": {
//         "album_type": "album",
//         "artists": [
//           {
//             "external_urls": {
//               "spotify": "https://open.spotify.com/artist/12Chz98pHFMPJEknJQMWvI"
//             },
//             "href": "https://api.spotify.com/v1/artists/12Chz98pHFMPJEknJQMWvI",
//             "id": "12Chz98pHFMPJEknJQMWvI",
//             "name": "Muse",
//             "type": "artist",
//             "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI"
//           }
//         ],
//         "external_urls": {
//           "spotify": "https://open.spotify.com/album/0eFHYz8NmK75zSplL5qlfM"
//         },
//         "href": "https://api.spotify.com/v1/albums/0eFHYz8NmK75zSplL5qlfM",
//         "id": "0eFHYz8NmK75zSplL5qlfM",
//         "images": [
//           {
//             "height": 640,
//             "url": "https://i.scdn.co/image/ab67616d0000b273b6d4566db0d12894a1a3b7a2",
//             "width": 640
//           },
//           {
//             "height": 300,
//             "url": "https://i.scdn.co/image/ab67616d00001e02b6d4566db0d12894a1a3b7a2",
//             "width": 300
//           },
//           {
//             "height": 64,
//             "url": "https://i.scdn.co/image/ab67616d00004851b6d4566db0d12894a1a3b7a2",
//             "width": 64
//           }
//         ],
//         "name": "The Resistance",
//         "release_date": "2009-09-10",
//         "release_date_precision": "day",
//         "total_tracks": 11,
//         "type": "album",
//         "uri": "spotify:album:0eFHYz8NmK75zSplL5qlfM"
//       },
//       "artists": [
//         {
//           "external_urls": {
//             "spotify": "https://open.spotify.com/artist/12Chz98pHFMPJEknJQMWvI"
//           },
//           "href": "https://api.spotify.com/v1/artists/12Chz98pHFMPJEknJQMWvI",
//           "id": "12Chz98pHFMPJEknJQMWvI",
//           "name": "Muse",
//           "type": "artist",
//           "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI"
//         }
//       ],
//       "disc_number": 1,
//       "duration_ms": 304840,
//       "explicit": false,
//       "external_ids": {
//         "isrc": "GBAHT0900320"
//       },
//       "external_urls": {
//         "spotify": "https://open.spotify.com/track/4VqPOruhp5EdPBeR92t6lQ"
//       },
//       "href": "https://api.spotify.com/v1/tracks/4VqPOruhp5EdPBeR92t6lQ",
//       "id": "4VqPOruhp5EdPBeR92t6lQ",
//       "is_local": false,
//       "is_playable": true,
//       "name": "Uprising",
//       "popularity": 74,
//       "preview_url": "https://p.scdn.co/mp3-preview/104ad0ea32356b9f3b2e95a8610f504c90b0026b?cid=774b29d4f13844c495f206cafdad9c86",
//       "track_number": 1,
//       "type": "track",
//       "uri": "spotify:track:4VqPOruhp5EdPBeR92t6lQ"
//     },
//     {
//       "album": {
//         "album_type": "album",
//         "artists": [
//           {
//             "external_urls": {
//               "spotify": "https://open.spotify.com/artist/12Chz98pHFMPJEknJQMWvI"
//             },
//             "href": "https://api.spotify.com/v1/artists/12Chz98pHFMPJEknJQMWvI",
//             "id": "12Chz98pHFMPJEknJQMWvI",
//             "name": "Muse",
//             "type": "artist",
//             "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI"
//           }
//         ],
//         "external_urls": {
//           "spotify": "https://open.spotify.com/album/0HcHPBu9aaF1MxOiZmUQTl"
//         },
//         "href": "https://api.spotify.com/v1/albums/0HcHPBu9aaF1MxOiZmUQTl",
//         "id": "0HcHPBu9aaF1MxOiZmUQTl",
//         "images": [
//           {
//             "height": 640,
//             "url": "https://i.scdn.co/image/ab67616d0000b2738cb690f962092fd44bbe2bf4",
//             "width": 640
//           },
//           {
//             "height": 300,
//             "url": "https://i.scdn.co/image/ab67616d00001e028cb690f962092fd44bbe2bf4",
//             "width": 300
//           },
//           {
//             "height": 64,
//             "url": "https://i.scdn.co/image/ab67616d000048518cb690f962092fd44bbe2bf4",
//             "width": 64
//           }
//         ],
//         "name": "Absolution",
//         "release_date": "2004-03-23",
//         "release_date_precision": "day",
//         "total_tracks": 15,
//         "type": "album",
//         "uri": "spotify:album:0HcHPBu9aaF1MxOiZmUQTl"
//       },
//       "artists": [
//         {
//           "external_urls": {
//             "spotify": "https://open.spotify.com/artist/12Chz98pHFMPJEknJQMWvI"
//           },
//           "href": "https://api.spotify.com/v1/artists/12Chz98pHFMPJEknJQMWvI",
//           "id": "12Chz98pHFMPJEknJQMWvI",
//           "name": "Muse",
//           "type": "artist",
//           "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI"
//         }
//       ],
//       "disc_number": 1,
//       "duration_ms": 237039,
//       "explicit": false,
//       "external_ids": {
//         "isrc": "GBCVT0300078"
//       },
//       "external_urls": {
//         "spotify": "https://open.spotify.com/track/2takcwOaAZWiXQijPHIx7B"
//       },
//       "href": "https://api.spotify.com/v1/tracks/2takcwOaAZWiXQijPHIx7B",
//       "id": "2takcwOaAZWiXQijPHIx7B",
//       "is_local": false,
//       "is_playable": true,
//       "name": "Time Is Running Out",
//       "popularity": 67,
//       "preview_url": "https://p.scdn.co/mp3-preview/b326e03624cb098d8387e17aa46669edac0d025a?cid=774b29d4f13844c495f206cafdad9c86",
//       "track_number": 3,
//       "type": "track",
//       "uri": "spotify:track:2takcwOaAZWiXQijPHIx7B"
//     }
//   ]
// }