import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import ClaimList from './fetch.jsx';
class ViewClaim extends React.Component {

    render() {
        let myStyle = {
            marginTop: "5rem",
            marginBottom: "5rem",
            marginLeft: "2rem"
        }
        return (
            <div>
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#Home" active>Home</Nav.Link>
                            <Nav.Link href="#features">View Claim</Nav.Link>
                            <Nav.Link href="#pricing">Update Claim</Nav.Link>
                        </Nav>
                        <Nav>
                            <li className="nav-item">
                                <p className="mr-5 pt-2 user">Welcome, Abc</p>
                            </li>
                            <li>
                                <a className="btn btn-outline-light mt-1" href="login.html">Logout</a>
                            </li>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Container>
                    <Row>
                        <Table bordered responsive="md" style={myStyle}>
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">Employee Id</th>
                                    <th scope="col">Employee Name</th>
                                    <th scope="col">Claim Number</th>
                                    <th scope="col">Claim Type</th>
                                    <th scope="col">Claim Program</th>
                                    <th scope="col">Claim Start Date</th>
                                    <th scope="col">Claim End Date</th>
                                    <th scope="col">Update Claim</th>
                                </tr>
                            </thead>
                            <ClaimList/>
                        </Table>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default ViewClaim;