import axios from 'axios'
// axios.defaults.withCredentials = true
const CLIENT_ID = '6e3a5772c02b4661865df810bea63f38';
const CLIENT_SECRET = 'a7bea6a24323483291935a90753b3a65';
const SPOTIFYKEY = 'spotifyKey';  
    
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
//
async function getToken(){

 axios({
    method: 'POST',
    url: 'https://accounts.spotify.com/api/token',
    params: { // in axios data is the body request
      'grant_type': 'client_credentials',
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64') // client id and secret from env
    }
  }).then(body => {
    console.log(body);
  })
  .catch(e => {
    console.log(e);
  });
  /*
  const token = await axios({
    method: 'post',
    url: 'https://accounts.spotify.com/api/token',
    params: { // in axios data is the body request
      grant_type: 'authorization_code',
      code: 'AQC4NzuRuq4Pduu1cqWkw4CSUB83aWp58CdmEKgkmNmAdpBSkkLpn5YY8psUqnpWEfiRwWF8YXO47G8CeqhA6ZpQdtLbZUQc-G33EMRNh8BR3e-ibPNgYrdgStxJpXLQ8NsDyR8HSeONbg4GoJ0BusDxYIq_52RP0PKSqdv-0aIbDKbo4Vuqrb9s4qy3w94K7gGSx-0a0-H8D5PvtQM5vUAA-c8Yh7MsNltcHL2gxeDu5ImS', // req.query.code, code I'm receiving from https://accounts.spotify.com/authorize
      redirect_uri: 'http://localhost:8080/done' 
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64') // client id and secret from env
    }
  });

  
  saveToStorage(SPOTIFYKEY,token)
  return token
  */
}




async function getTracks(searchBy){
    console.log('b3',tracks.tracks,searchBy)
    let token = loadFromStorage(SPOTIFYKEY)
    if (!token) {
      token = getToken()
    }
    console.log('a1',token)
    // const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchBy}&key=${API_KEY}`)
    // return res.data.items
    return tracks.tracks
}

async function getArtist(searchBy){
    console.log(searchBy)
    let token = loadFromStorage(SPOTIFYKEY)
    if (!token) {
      token = getToken()
    }
    console.log('a1',token)
    return artist
}


// axios({
//   url: ' https://api.spotify.com/v1/search',
//   method: 'get',
//   params: {
//     q: 'What you are want to search',
//   'type':'artist' 
//   },
//   headers: {
//     'Accept':'application/json',
//     'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': 'Bearer' + {Your token} 
//   }
//   }).then(function(response) {
//       console.log(response);
//   }).catch(function(error) {
// });

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
function loadFromStorage(key) {
  var str = localStorage.getItem(key);
  var value = JSON.parse(str)
  return value;
}







let artist = {
  "external_urls": {
    "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
  },
  "followers": {
    "href": null,
    "total": 7593238
  },
  "genres": [
    "dance pop",
    "latin",
    "miami hip hop",
    "pop",
    "pop rap"
  ],
  "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
  "id": "0TnOYISbd1XYRBk9myaseg",
  "images": [
    {
      "height": 640,
      "url": "https://i.scdn.co/image/1353990534aef10c946cf3a47865ac22471be5c4",
      "width": 640
    },
    {
      "height": 320,
      "url": "https://i.scdn.co/image/f3a0aca9f85c6cdad37ebcc51a01879bf8c50af9",
      "width": 320
    },
    {
      "height": 160,
      "url": "https://i.scdn.co/image/5ede30313c461d7ed0f5c4f3dea484fd349d49a9",
      "width": 160
    }
  ],
  "name": "Pitbull",
  "popularity": 86,
  "type": "artist",
  "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
}









let tracks =  {
  "tracks": [
    {
      "album": {
        "album_type": "album",
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/12Chz98pHFMPJEknJQMWvI"
            },
            "href": "https://api.spotify.com/v1/artists/12Chz98pHFMPJEknJQMWvI",
            "id": "12Chz98pHFMPJEknJQMWvI",
            "name": "Muse",
            "type": "artist",
            "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI"
          }
        ],
        "external_urls": {
          "spotify": "https://open.spotify.com/album/0lw68yx3MhKflWFqCsGkIs"
        },
        "href": "https://api.spotify.com/v1/albums/0lw68yx3MhKflWFqCsGkIs",
        "id": "0lw68yx3MhKflWFqCsGkIs",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27328933b808bfb4cbbd0385400",
            "width": 640
          },
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0228933b808bfb4cbbd0385400",
            "width": 300
          },
          {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485128933b808bfb4cbbd0385400",
            "width": 64
          }
        ],
        "name": "Black Holes and Revelations",
        "release_date": "2006-06-19",
        "release_date_precision": "day",
        "total_tracks": 12,
        "type": "album",
        "uri": "spotify:album:0lw68yx3MhKflWFqCsGkIs"
      },
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/12Chz98pHFMPJEknJQMWvI"
          },
          "href": "https://api.spotify.com/v1/artists/12Chz98pHFMPJEknJQMWvI",
          "id": "12Chz98pHFMPJEknJQMWvI",
          "name": "Muse",
          "type": "artist",
          "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI"
        }
      ],
      "disc_number": 1,
      "duration_ms": 366213,
      "explicit": false,
      "external_ids": {
        "isrc": "GBAHT0500600"
      },
      "external_urls": {
        "spotify": "https://open.spotify.com/track/7ouMYWpwJ422jRcDASZB7P"
      },
      "href": "https://api.spotify.com/v1/tracks/7ouMYWpwJ422jRcDASZB7P",
      "id": "7ouMYWpwJ422jRcDASZB7P",
      "is_local": false,
      "is_playable": true,
      "name": "Knights of Cydonia",
      "popularity": 68,
      "preview_url": "https://p.scdn.co/mp3-preview/d7624ec5f93b6d92c1836a95c40ecce463584f6e?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number": 11,
      "type": "track",
      "uri": "spotify:track:7ouMYWpwJ422jRcDASZB7P"
    },
    {
      "album": {
        "album_type": "album",
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/12Chz98pHFMPJEknJQMWvI"
            },
            "href": "https://api.spotify.com/v1/artists/12Chz98pHFMPJEknJQMWvI",
            "id": "12Chz98pHFMPJEknJQMWvI",
            "name": "Muse",
            "type": "artist",
            "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI"
          }
        ],
        "external_urls": {
          "spotify": "https://open.spotify.com/album/0eFHYz8NmK75zSplL5qlfM"
        },
        "href": "https://api.spotify.com/v1/albums/0eFHYz8NmK75zSplL5qlfM",
        "id": "0eFHYz8NmK75zSplL5qlfM",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273b6d4566db0d12894a1a3b7a2",
            "width": 640
          },
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02b6d4566db0d12894a1a3b7a2",
            "width": 300
          },
          {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851b6d4566db0d12894a1a3b7a2",
            "width": 64
          }
        ],
        "name": "The Resistance",
        "release_date": "2009-09-10",
        "release_date_precision": "day",
        "total_tracks": 11,
        "type": "album",
        "uri": "spotify:album:0eFHYz8NmK75zSplL5qlfM"
      },
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/12Chz98pHFMPJEknJQMWvI"
          },
          "href": "https://api.spotify.com/v1/artists/12Chz98pHFMPJEknJQMWvI",
          "id": "12Chz98pHFMPJEknJQMWvI",
          "name": "Muse",
          "type": "artist",
          "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI"
        }
      ],
      "disc_number": 1,
      "duration_ms": 304840,
      "explicit": false,
      "external_ids": {
        "isrc": "GBAHT0900320"
      },
      "external_urls": {
        "spotify": "https://open.spotify.com/track/4VqPOruhp5EdPBeR92t6lQ"
      },
      "href": "https://api.spotify.com/v1/tracks/4VqPOruhp5EdPBeR92t6lQ",
      "id": "4VqPOruhp5EdPBeR92t6lQ",
      "is_local": false,
      "is_playable": true,
      "name": "Uprising",
      "popularity": 74,
      "preview_url": "https://p.scdn.co/mp3-preview/104ad0ea32356b9f3b2e95a8610f504c90b0026b?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number": 1,
      "type": "track",
      "uri": "spotify:track:4VqPOruhp5EdPBeR92t6lQ"
    },
    {
      "album": {
        "album_type": "album",
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/12Chz98pHFMPJEknJQMWvI"
            },
            "href": "https://api.spotify.com/v1/artists/12Chz98pHFMPJEknJQMWvI",
            "id": "12Chz98pHFMPJEknJQMWvI",
            "name": "Muse",
            "type": "artist",
            "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI"
          }
        ],
        "external_urls": {
          "spotify": "https://open.spotify.com/album/0HcHPBu9aaF1MxOiZmUQTl"
        },
        "href": "https://api.spotify.com/v1/albums/0HcHPBu9aaF1MxOiZmUQTl",
        "id": "0HcHPBu9aaF1MxOiZmUQTl",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2738cb690f962092fd44bbe2bf4",
            "width": 640
          },
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e028cb690f962092fd44bbe2bf4",
            "width": 300
          },
          {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048518cb690f962092fd44bbe2bf4",
            "width": 64
          }
        ],
        "name": "Absolution",
        "release_date": "2004-03-23",
        "release_date_precision": "day",
        "total_tracks": 15,
        "type": "album",
        "uri": "spotify:album:0HcHPBu9aaF1MxOiZmUQTl"
      },
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/12Chz98pHFMPJEknJQMWvI"
          },
          "href": "https://api.spotify.com/v1/artists/12Chz98pHFMPJEknJQMWvI",
          "id": "12Chz98pHFMPJEknJQMWvI",
          "name": "Muse",
          "type": "artist",
          "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI"
        }
      ],
      "disc_number": 1,
      "duration_ms": 237039,
      "explicit": false,
      "external_ids": {
        "isrc": "GBCVT0300078"
      },
      "external_urls": {
        "spotify": "https://open.spotify.com/track/2takcwOaAZWiXQijPHIx7B"
      },
      "href": "https://api.spotify.com/v1/tracks/2takcwOaAZWiXQijPHIx7B",
      "id": "2takcwOaAZWiXQijPHIx7B",
      "is_local": false,
      "is_playable": true,
      "name": "Time Is Running Out",
      "popularity": 67,
      "preview_url": "https://p.scdn.co/mp3-preview/b326e03624cb098d8387e17aa46669edac0d025a?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number": 3,
      "type": "track",
      "uri": "spotify:track:2takcwOaAZWiXQijPHIx7B"
    }
  ]
}