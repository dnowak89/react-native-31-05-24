import axios from 'axios'

export async function getGeolocation() {
  const data = await axios.get('https://geolocation-db.com/json/');

  return data;
}