import DeleteButton from "../DeleteButton"
import "./style.css"

function ValidityCard() {
    return(
        <div className="card">
        <h2 className="sales-title">TABELA DE VALIDADES</h2>
        <p className="sales-title">Filtro:</p>
        <div>
          <div className="form-control-container">
            <input className="form-control" type="text"/>
          </div>
          <div className="form-control-container">
            <input className="form-control" type="text"/>
          </div>
        </div>

        <div>
          <table className="sales-table">
            <thead>
              <tr>
                <th className="show992">COD</th>
                <th className="show576">ENTRADA</th>
                <th>DESCRIÇÃO</th>
                <th className="show992">QUANTIDADE</th>
                <th className="show992">VALIDADE</th>
                <th>EXCLUIR</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="show992">1006</td>
                <td className="show576">08/07/2022</td>
                <td>CERV A BIERBAUM DUNKEL 600ML</td>
                <td className="show992">12</td>
                <td className="show992">08/07/2022</td>
                <td>
                  <div className="red-btn-container">
                    <div className="red-btn">
                      <DeleteButton />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="show992">1006</td>
                <td className="show576">08/07/2022</td>
                <td>CERV A BIERBAUM DUNKEL 600ML</td>
                <td className="show992">12</td>
                <td className="show992">08/07/2022</td>
                <td>
                  <div className="red-btn-container">
                    <div className="red-btn">
                      <DeleteButton />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="show992">1006</td>
                <td className="show576">08/07/2022</td>
                <td>CERV A BIERBAUM DUNKEL 600ML</td>
                <td className="show992">12</td>
                <td className="show992">08/07/2022</td>
                <td>
                  <div className="red-btn-container">
                    <div className="red-btn">
                      <DeleteButton />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>

          </table>
        </div>

      </div>
    )
}

export default ValidityCard