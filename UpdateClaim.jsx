import React from 'react';

class UpdateClaim extends React.Component {

    render() {
        let myStyle = {
            maxWidth: "60rem",
        }
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark static-top">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav mr-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="index.html">Home
                                <span class="sr-only">(current)</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="viewclaim.html">View Claim</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="updateclaim.html">Update Claim</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <p class="mr-5 pt-2 user">Welcome, Abc</p>
                            </li>
                            <li>
                                <a class="btn btn-outline-light mt-1" href="login.html">Logout</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="container mt-5 mb-5">
                    <div className="card border-dark updateformCard mx-auto" style={myStyle}>
                        <div className="card-body text-dark">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <h5>
                                        UPDATE CALIM
                                    </h5>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <form name="updateForm">
                                        <div class="form-row">
                                            <div class="form-group col-md-12">
                                                <label>Employee ID *</label>
                                                <input type="text" class="form-control" value="1" disabled />
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-12">
                                                <label>Employee Name *</label>
                                                <input type="text" class="form-control" disabled value="ABC" />
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-12">
                                                <label>Claim Number *</label>
                                                <input type="text" name="claimNumber" class="form-control" value="123-456-789" />
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-12">
                                                <label>Claim Type *</label>
                                                <select class="form-control">
                                                    <option selected>Choose...</option>
                                                    <option>Submitted</option>
                                                    <option>Recieved</option>
                                                    <option>Pending</option>
                                                    <option>More Info Required</option>
                                                    <option>Rejected</option>
                                                    <option>Denied</option>
                                                    <option>Paid</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-12">
                                                <label>Claim Programs *</label>
                                                <input type="text" name="claimProgram" class="form-control" value="Demo" />
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-12">
                                                <label>Claim Start Date *</label>
                                                <input type="date" class="form-control" />
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-12">
                                                <label>Claim End Date *</label>
                                                <input type="date" class="form-control" />
                                            </div>
                                        </div>

                                    </form>
                                    <div class="mt-4 text-center">
                                        <a type="submit" class="btn btn-outline-primary mr-4 next" href="review.html" onclick="return validateUpdateForm()">Next</a>
                                        <a class="btn btn-outline-danger cancel" href="viewclaim.html">Cancel</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default UpdateClaim;