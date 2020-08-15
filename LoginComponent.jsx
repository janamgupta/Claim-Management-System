import React from 'react';

class Login extends React.Component{

    render(){
        let myStyle = {
            maxWidth: "20rem", 
            marginBottom: "3%",
        }
        return(
            <div className="container">
                <div className="card border-dark logincard mx-auto" style={myStyle}>
                    <div className="card-body text-dark">
                        <form className="loginform text-center" name="loginform" id="loginform" action="index.html" onsubmit="return validateloginform()">
                            <p className="h4 mb-4">Sign in</p>
                            
                            <input type="text" id="Username" name="Username" className="form-control mb-4" placeholder="Username"/>
          
                            <input type="password" id="Password" name="Password" className="form-control mb-4" placeholder="Password"/>
          
                            <div className="d-flex justify-content-around">
                                <div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="defaultLoginFormRemember"/>
                                        <label className="custom-control-label">Remember me</label>
                                    </div>
                                </div>
                            </div>
          
                            <button className="btn btn-outline-primary my-4" type="submit">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;