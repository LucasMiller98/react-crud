import { api } from './api'


const findAll = () => api.get('api/contatos')

const findById = (id: number) => api.get(`api/contatos/${id}`)

const deleted = (id: number) => api.delete(`api/contatos/${id}`)
  
const save = (contato: {}) => api.post('api/contatos', contato)

const update = (id: number, contato: {}) => api.put(`api/contatos/${id}`, contato)



export {
  findAll,
  findById,
  deleted,
  save,
  update
}