import React from 'react';

import axios from 'axios';
class ClaimList extends React.Component {
    constructor(props){
        
        super(props);
  this.state = {
    claims: []
  }
    }

  componentDidMount() {
    axios.get(`http://localhost:7000/claims`)
      .then(res => {
        const claims = res.data;
        this.setState({ claims });
      })
  }

  render() {
    return (
      <tbody>
        {this.state.claims.map(function(claim, index){
                    return (
                    <tr key={index}>
                    <th scope="row">{claim.Employee_Id}</th>
                    <td>{claim.Employee_Name}</td>
                    <td>{claim.Claim_Number}</td>
                    <td>{claim.Claim_Type}</td>
                    <td>{claim.Claim_Program}</td>
                    <td>{claim.Claim_Start_Date}</td>
                    <td>{claim.Claim_End_Date}</td>
                    <td><a href="">update</a></td>
                    </tr>
                    )
                })}
        {/* {this.state.claims.map(function(claim, index){
                    return (<td key={index}>{claim.first_name}</td>)
                })} */}

      </tbody>
    )
  }
}
export default ClaimList;