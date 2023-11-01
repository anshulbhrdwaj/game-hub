import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '48163a95cb014b5394f0d0cceffacb2f'
  }
})