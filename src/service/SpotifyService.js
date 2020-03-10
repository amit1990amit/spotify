import axios from 'axios'
const CLIENT_ID = '6e3a5772c02b4661865df810bea63f38';
const CLIENT_SECRET = 'a7bea6a24323483291935a90753b3a65';
const SPOTIFYKEY = 'spotifyKey'; 
const qs = require('querystring');
const config = {
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
  'Authorization': 'Basic ' + Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64') // client id and secret from env
  }
};
const configData = {
  headers: {
    'Accept':'application/json',
    'Content-Type': 'application/json', 
    'Authorization': ''//'Bearer' + token 
  }
};
const params = {
  'grant_type': 'client_credentials'
};

export default {
  getTracks,
  getArtist,
  getToken,
  saveToken
}

async function getToken(){
  return await axios.post('https://accounts.spotify.com/api/token',qs.stringify(params),config)
  .then(res => {
    return res.data.access_token
  })
  .catch(err => {
    console.log(err);
  });

}

async function getTracks(searchBy){
  let tracks = await getData(searchBy,'track')
  return tracks.tracks.items
}

async function getArtist(searchBy){
  let artist = await getData(searchBy,'artist')
  return artist.artists.items[0];
}

async function getData(name,type){
  let token = loadFromStorage(SPOTIFYKEY)
  configData.headers.Authorization = 'Bearer ' + token 
  let data = await  axios.get(`https://api.spotify.com/v1/search?q=${name}&type=${type}`,configData)
    .then(res => {
       return res.data
    }).catch(err => {
      console.log(err)
    })
  if(!data) {
    await saveToken()
    return getData(name,type)
  } 
  return data
}
async function saveToken(){
  let token = await getToken()
  saveToStorage(SPOTIFYKEY,token)
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
function loadFromStorage(key) {
  var str = localStorage.getItem(key);
  var value = JSON.parse(str)
  return value;
}
