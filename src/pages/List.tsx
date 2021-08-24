import { 
  deleted, 
  findAll, 
} from '../services/ContatosService'
import { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { ContatosTypes } from './types/types'
import { ToastContainer, toast } from 'react-toastify'
import '../styles/contatos.css'

export function List() {

  const history = useHistory()
  
  const [contatos, setContatos] = useState<ContatosTypes[]>([])

  
  const updateTable = () => {
    findAll().then(response => {
      setContatos(response.data)
    })
  }

  useEffect(() => {
    updateTable()
  }, [])

  const handleEdit = (id: Object) => {
    history.push(`/registration/${id}`)
  }

  const handleDeleteContact = (id: number) => {
    deleted(id).then(() => {
      updateTable()
      toast.success(`Contado deletado com sucesso!🔥`, {
        position: 'top-right',
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        autoClose: 5000,
      })
    })
  }
  
  return (
    <>
    
      <ToastContainer 
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    
      <div className="container">
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">
              Contatos API
            </a>

            <ul
              id="nav-mobile"
              className="right hide-on-med-and-down"
            >
              <li>
                <Link to="/registration">Novo Contato</Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="content">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Telefone</th>
                <th>Email</th>
                <th>Opções</th>
              </tr>
            </thead>
    
            <tbody>

              {contatos.map((value, index) => (
                <tr key={index}>
                  <td>{value.nome}</td>
                  <td>{value.telefone}</td>
                  <td>{value.email}</td>
                  <td>
                    <button onClick={() => handleEdit(value.id)} type='button' id='btn-edit'>
                      <i className="material-icons">edit</i>
                    </button>
                    <button 
                      type='button'
                      className='button-delete' 
                      onClick={() => handleDeleteContact(value.id)}
                    >
                      <i className="material-icons">delete</i>
                    </button>
                  </td>
                </tr>
              ))}
              
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
