
export function ContactDetails() {
  return(
    <>
      <div className="container">
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">Contatos API</a>
          </div>
        </nav>

        <div className="row">
          <h5 className="header">Detalhe Contato #1</h5>
        </div>
        
        <div className="content">


          <div className="row">
            <span className="field-title">Nome: </span>
            <div className="field-value">José Antonio</div>
          </div>

          <div className="row">
            <span className="field-title">Telefone: </span>
            <div className="field-value"> (99) 99999-9999</div>
          </div>

          <div className="row">
            <span className="field-title">Email: </span>
            <div className="field-value">jose@gmail.com</div>
          </div>

          <div className="row">
            <span className="field-title">Data de Nascimento: </span>
            <div className="field-value">01/01/2000</div>
          </div>


          <div className="row"></div>

            <div className="row">
              <div className="col s4"></div>
              <div className="col s4"></div>
              <div className="col s4">
                <a className="waves-effect waves-light btn"><i className="material-icons">edit</i>  Editar</a>
                <a className="waves-effect waves-light btn red lighten-2"><i className="material-icons">cancel</i>  Cancelar</a>
              </div>
                
            </div>

        </div>
      </div>
    </>
  )
}