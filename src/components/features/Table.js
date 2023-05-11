import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const Table = ({ status, id }) => {

  const tableStatus = status;

  return (
        <Row>
          <Row className="align-items-end mb-3">
            <Col className="col-2 d-flex align-items-end justify-content-between">
              <h2 className="mb-0">Table {id}</h2>
            </Col>
            <Col className="col-4">
              <strong>Status:</strong> {status} {""}
              {tableStatus === "Busy" }
            </Col>
            <Col className="col-6 d-flex justify-content-end">
              <Link to={"/edittable/" + id}>
                <Button variant="primary" size="sm">
                  Show more
                </Button>
              </Link>
            </Col>
          </Row>
          <hr />
        </Row>
 
  );
}

export default Table;