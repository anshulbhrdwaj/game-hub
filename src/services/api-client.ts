import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'd3866b6535fd47f4ae7c65ad5a1e8c4b'
  }
})