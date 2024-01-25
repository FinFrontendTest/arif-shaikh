import { useState } from 'react';
import './App.css';
import Form from './JS/Form';
import Table from './JS/Table';
import Modal from './JS/Modal';

function App() {

  let [users, setUsers] = useState([]);
  let [editUser, setEditUser] = useState({});

  let [modalFlag,setModalFlag]=useState();

  localStorage.setItem('flag', false);
  const addUser = (obj) => {
    setUsers([...users, obj])
  }

  const handleDeleteUser = (obj) => {
    const temp = users.filter((i) => i.name !== obj.name)
    setUsers(temp);



  }

  const handleEditUser = (obj, status) => {
    setEditUser(obj);
    setModalFlag(status);
    
  }

  const handleUpdateUser=( obj,status)=>{
    setModalFlag(status);
   

   let temp=users.map((i)=>
    i.name===obj.name ? obj: i
   )

   setUsers(temp)
  }



  return (
    <div className="App">

      <Form fun={addUser} />

      {
        JSON.stringify(users)!=='[]' ?
        <Table data={users} delete={handleDeleteUser} edit={handleEditUser} />
        :null
      }

      {
        modalFlag?
        <Modal edit={editUser} fun={handleUpdateUser} /> :
        null
      }
      
    </div>
  );
}

export default App;
