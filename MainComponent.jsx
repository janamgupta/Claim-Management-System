import React from 'react';

class Main extends React.Component{

    render(){
        return(
           <div> 
            <nav className="navbar navbar-expand-md navbar-dark bg-dark static-top">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="index.html">Home
                                <span class="sr-only">(current)</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="viewclaim.html">View Claim</a>
                        </li>
                        <li class="nav-item">
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
              <div class="container mt-5 mb-5">
              <div class="row">
                <div class="col-lg-12 text-center">
                  <h1 class="mt-5">WELCOME</h1>
                  <p class="lead">View and Update Claim Summary</p>
                  <ul class="list-unstyled">
                    <li>View Claim</li>
                    <li>Update Claim</li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
        );
    }
}
export default Main;