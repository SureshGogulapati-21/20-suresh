//import React from 'react'

export default function EmpSal() {
  const empData = [
      {
      Name:"Lamborghini"
      Location:"USA"
      URL:"https://pixabay.com/illustrations/ai-generated-lamborghini-car-8237688/"
      }
  ];

  // () => ()

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Location</th>
            <th scope="col">URL</th>
          </tr>
        </thead>
        <tbody>
          {empData.map(
              (x)=>( 
              <tr>
                  <td>{x.Name}</td>
                  <td>{x.Location}</td>
                  <td>{x.URL}</td>
                </tr>
               )
          )}
         
        </tbody>
      </table>
    </div>
  );
}