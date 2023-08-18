import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function Despesa() {









  return (
    <div className='container'>
      <div className='row mt-5'>
        <div className='col-9'>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Descrição</th>
                <th scope="col">Valor</th>
                <th scope="col">Vencimento</th>
                <th scope="col">Situação</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td><div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Paga
                  </label>
                </div></td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td><div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Paga
                  </label>
                </div></td>

              </tr>
              <tr>
                <th scope="row">3</th>
                <td colSpan="2">Larry the Bird</td>
                <td><div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Paga
                  </label>
                </div></td>

              </tr>

            </tbody>
          </table>
        </div>
        <div className="col-3">
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Receitas do mês</Card.Title>
              <Card.Text>
                R$ 5000,00
              </Card.Text>
              <Button variant="primary">+</Button>
            </Card.Body>
          </Card>

        </div>

      </div>

    </div>

  )
}

export default Despesa