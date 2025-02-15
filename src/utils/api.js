import { TYPESENSE_URL, TYPESENSE_API_KEY } from '@/utils/constants'
import axios from 'redaxios'

const api = axios.create({
  baseURL: `${TYPESENSE_URL}/collections/levels/documents/`,
  headers: {
    'x-typesense-api-key': TYPESENSE_API_KEY
  }
})

export default api