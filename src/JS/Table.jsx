import '../CSS/Table.css'

const Table = (props) => {


  return (
    <>
      <table>
        <thead>
          <th>Sr.no</th>
          <th>Name</th>
          <th>Contact</th>
          <th>Email</th>
          <th>Weekday</th>
          <th>Gender</th>
          <th>DOB</th>
          <th>Action</th>
        </thead>

        <tbody>
          {
          
          props.data ?

          props.data.map((i, index) => (
            <tr key={index}>
           
              <td>{index + 1}</td>

              <td>{ i.name}</td>
              <td>{ i.contact}</td>
              <td>{ i.email}</td>
              <td>{ i.weekdays}</td>
              <td>{ i.gender}</td>
              <td>{ i.dob}</td>
              <td>
                <button className='tabBtn' onClick={()=>props.edit(i,true)}>Edit</button>
                <button className='tabBtn' onClick={()=>props.delete(i)}>Delete</button>
              </td>
            </tr>
          )):null
          }
        </tbody>
      </table>

    </>
  );
}

export default Table;