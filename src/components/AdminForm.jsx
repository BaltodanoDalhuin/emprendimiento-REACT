import { Button, Table, Container, Row, Col, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const AdminForm = () => {
  return (
    <div>
      <h1 className="text-center my-4">Products</h1>

      {/* Buttons Section */}
      <Row className="mb-4">
        <Col>
          <Button variant="primary">Create Product</Button>
        </Col>
        <Col className="text-end">
          <Button variant="outline-primary">Refresh</Button>
        </Col>
      </Row>

      {/* Search Bar */}
      <Row className="mb-4 justify-content-end">
        <Col md={6} className="d-flex">
          <Form.Control type="text" placeholder="Search" />
          <Button variant="light" className="ms-2">Search</Button>
        </Col>
      </Row>

      {/* Product Table */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID <i className="fas fa-arrow-down"></i></th>
            <th>Name</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Price</th>
            <th>Image</th>
            <th>Created At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>30</td>
            <td>OnePlus Nord N20</td>
            <td>OnePlus</td>
            <td>Phones</td>
            <td>899$</td>
            <td>
              <img
                src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-Hh5RPsKhtBPsWCFSiEKnUJ6x/user-8qgiVpCV0U0b7zDjfFInHgjl/img-w4i54wLN1ZNkynHSKx6Z7xKG.png"
                alt="OnePlus Nord N20"
                width="50"
              />
            </td>
            <td>2023-07-13</td>
            <td>
              <Button variant="primary" size="sm" className="me-2">Edit</Button>
              <Button variant="danger" size="sm">Delete</Button>
            </td>
          </tr>
          <tr>
            <td>29</td>
            <td>Nokia G10</td>
            <td>Nokia</td>
            <td>Phones</td>
            <td>689$</td>
            <td>
              <img
                src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-Hh5RPsKhtBPsWCFSiEKnUJ6x/user-8qgiVpCV0U0b7zDjfFInHgjl/img-nZrEwQkOFbYnTN3zaMTzhjxB.png"
                alt="Nokia G10"
                width="50"
              />
            </td>
            <td>2023-07-13</td>
            <td>
              <Button variant="primary" size="sm" className="me-2">Edit</Button>
              <Button variant="danger" size="sm">Delete</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default AdminForm;
