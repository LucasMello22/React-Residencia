import React from "react";

const AdmTurma = () => {
    return (
      <div>        
        <center className={style.table}>
        <Table  responsive>
      <thead>
        <tr>
            <th>Turno</th>
            <th>Segunda</th>
            <th>Terça</th>
            <th>Quarta</th>
            <th>Quinta</th>
	    <th>Sexta</th>
        </tr>
      </thead>
      <tbody>
        <tr >
            <td>Manhã</td>
            <th>  </th>
            <th>  </th>
            <th>  </th>
            <th>  </th>
	    <th>  </th>  
        </tr>
        <tr>
           <th>Tarde</th>
            <th>  </th>
            <th>  </th>
            <th>  </th>
            <th>  </th>
	    <th>  </th>
        </tr>
        <tr>
            <th>Noite</th>
            <th>  </th>
            <th>  </th>
            <th>  </th>
            <th>  </th>
	    <th>  </th>
        </tr>
      </tbody>
    </Table>
        </center>
      </div>
    )
  }