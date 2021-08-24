import { save, update } from '../services/ContatosService'
import { useState, FormEvent, useEffect } from 'react'
import { findById } from '../services/ContatosService'
import { useHistory, useParams } from 'react-router-dom' 
import InputMask from 'react-input-mask'
import { ToastContainer, toast } from 'react-toastify'

export const ContactRegistration = () => {
  
  let { id }: { id: string } = useParams()
  
  const history = useHistory()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [born, setBorn] = useState('')

  const values = {
    name,
    email,
    phone,
    born
  }
  
  useEffect(() => {

    if(id) {
      findById(Number(id))
      .then(response => {
        try{
          if(!response.data) {
            throw new Error(`O contado solicitado, com o id ${id}, não existe`)
          }

          let labelElements = document.querySelectorAll('label')          

          labelElements.forEach(labelElement => {
            labelElement.classList.add('active')
          })
          
          setPhone(response.data.telefone)
          setEmail(response.data.email)
          setName(response.data.nome)
          setBorn(response.data.dataNascimento)
          
          toast.success('Contado encontrado com sucesso!🚀', {
            autoClose: 5000,
            closeOnClick: true,
            position: 'top-right',
            hideProgressBar: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
          })
          
        }catch(error) {
          toast.error(`${error.message}`, {
            autoClose: 5000,
            closeOnClick: true,
            position: 'top-right',
            hideProgressBar: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
          })
          console.error(error.message)
        }
      })
    }
      
  }, [])
  
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    if(id) {
      console.log('Salvando')
    }else{
      save({...values}).then(() =>{
        history.push('/')
        toast.success('Contado salvo com sucesso!🚀', {
          autoClose: 5000,
          closeOnClick: true,
          position: 'top-right',
          hideProgressBar: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
      }).catch(error => {
        toast.error(`${error.message}`, {
          autoClose: 5000,
          closeOnClick: true,
          position: 'top-right',
          hideProgressBar: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
      })
    }
  }

  const handleBack = () => {
    history.goBack()
  }

  const handleCancel = () => {
    history.push('/')
  }

  return (
    <>
      <ToastContainer 
        position='top-right'
        autoClose={5000} 
        closeOnClick
        hideProgressBar={false}
        pauseOnHover
        draggable
        pauseOnFocusLoss
        newestOnTop={false}
        rtl={false}
      />
    
      <div className="container">
        <nav>
          <div className="nav-wrapper">
            <span
              className="brand-logo cursor-pointer"
              onClick={handleBack}
            >
              Contatos API
            </span>
          </div>
        </nav>

        <div className="row">
          <h5 className="header">Cadastro de Contatos</h5>
        </div>
        
        <div className="content">

          <form onSubmit={handleSubmit}>

            <div className="row">
              
              <div className="input-field col s6">
                <input
                  autoComplete='off'
                  onChange={event => setName(event.target.value)} 
                  value={name} 
                  id="nome" 
                  type="text" 
                  placeholder='Nome'
                  className="validate" 
                />
                {/* <label htmlFor="nome">Nome</label> */}
              </div>
              
              <div className="input-field col s6">
                <input 
                  autoComplete='off'
                  onChange={event => setEmail(event.target.value)} 
                  placeholder='Email'
                  value={email} 
                  id="email" 
                  type="email" 
                  className="validate" 
                />
                {/* <label htmlFor="email">Email</label> */}
              </div>
              
            </div>

            <div className="row">
              <div className="input-field col s6">
                <InputMask
                  autoComplete='off'
                  mask='(99)99999-9999' 
                  placeholder='Telefone'
                  onChange={event => setPhone(event.target.value)}
                  value={phone} 
                  id="telefone" 
                  type="tel" 
                  className="validate" 
                />
                {/* <label htmlFor="telefone">Telefone</label> */}
              </div>
              <div className="input-field col s6">
                <input 
                  autoComplete='off'
                  onChange={event => setBorn(event.target.value)}
                  value={born}
                  id="nascimento" 
                  type="date" 
                  className="validate" 
                />
                {/* <label  htmlFor="nascimento">nascimento</label> */}
              </div>
            </div>
            <div className="row">
              <div className="col s4"></div>
              <div className="col s4"></div>
              <div className="col s4" id='box'>
                <button 
                  className="waves-effect waves-light btn"
                  id='btn-flexbox'
                  type='submit' 
                >
                  <i className="material-icons">save</i>  
                  Salvar
                </button>
                <button 
                  className="waves-effect waves-light btn red lighten-2"
                  onClick={handleCancel} 
                  type='button' 
                  id='btn-cancel'
                >
                  <i className="material-icons">cancel</i>  
                  Cancelar
                </button>
              </div>
                
            </div>

          </form>
        </div>

      </div>
    </>
  )
}