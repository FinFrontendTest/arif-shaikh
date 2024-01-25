import { useState } from 'react';
import '../CSS/Modal.css';
const Modal = (props) => {

    // console.log("From Modal",props.edit)


 

    let [edituser,setEditUser]=useState({
        name: props.edit.name,
        email: props.edit.email,
        contact: props.edit.contact,
        gender: props.edit.gender,
        weekdays: JSON.parse(props.edit.weekdays),
        dob: props.edit.dob
    })

    const onSubmitForm = (e) => {
        e.preventDefault();

        if(edituser.contact.length!==10){
            alert("Enter a valid 10 digit mobile number !!! ")
        }

        else{
            const data = {
       
                name: edituser.name,
                email: edituser.email,
                contact: edituser.contact,
                gender: edituser.gender,
                weekdays: JSON.stringify(edituser.weekdays),
                dob: edituser.dob
    
            }
        
            props.fun(data, false);
        }

        
       
       
    }
  

    
    const handleEditCheckboxChange = (event) => {
        const checkboxValue = event.target.value;

        if (edituser.weekdays.includes(checkboxValue)) {
            // If checkbox is already in the array, remove it
            setEditUser({
                ...edituser,
                weekdays: edituser.weekdays.filter((day) => day !== checkboxValue),
            });
        } else {
            // If checkbox is not in the array, add it
            setEditUser({
                ...edituser,
                weekdays: [...edituser.weekdays, checkboxValue],
            });
        }

    }
    
    return (
        <div className='mainModalContainer' id='modalId' >
             
            <form className="formContainer modal" onSubmit={(e) => onSubmitForm(e)} >
                <h2>Edit Info</h2>
                <section className="flex">
                    <label htmlFor="editname" className="heading">Name</label>
                    <input type="text" id="editname" value={edituser.name} 
                    onChange={(e) => setEditUser({...edituser, name: e.target.value })}
                       disabled />
                </section>

                <section className="flex">
                    <label htmlFor="editemail" className="heading">Email</label>
                    <input type="email" id="editemail" value={edituser.email} 
                    onChange={(e) => setEditUser({ ...edituser, email: e.target.value })}
                       required />
                </section>
                <section className="flex">
                    <label htmlFor="editcontact" className="heading">Contact</label>
                    <input type="number" id="editcontact" value={edituser.contact} 
                    onChange={(e) => setEditUser({ ...edituser, contact: e.target.value })}
                       required />
                </section>
                <section>
                    <label htmlFor="" className="heading">
                        Weekdays
                    </label>
                    <div>
                        <input
                            type="checkbox"
                            id="mon"
                            value="Monday"
                        checked={edituser.weekdays.includes('Monday')}
                        onChange={handleEditCheckboxChange}
                        />
                        <label htmlFor="mon">Monday</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="tues"
                            value="Tuesday"
                        checked={edituser.weekdays.includes('Tuesday')}
                        onChange={handleEditCheckboxChange}
                        />
                        <label htmlFor="tues">Tuesday</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="wed"
                            value="Wednesday"
                        checked={edituser.weekdays.includes('Wednesday')}
                        onChange={handleEditCheckboxChange}
                        />
                        <label htmlFor="wed">Wednesday</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="thurs"
                            value="Thursday"
                        checked={edituser.weekdays.includes('Thursday')}
                        onChange={handleEditCheckboxChange}
                        />
                        <label htmlFor="thurs">Thursday</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="fri"
                            value="Friday"
                        checked={edituser.weekdays.includes('Friday')}
                        onChange={handleEditCheckboxChange}
                        />
                        <label htmlFor="fri">Friday</label>
                    </div>
                </section>

                <section className="flex genc" >
                    <label htmlFor="" className="heading">Gender</label>
                    <div><input type="radio" name="gen" id="editmale" value="Male" onChange={(e) => setEditUser({ ...edituser, gender: e.target.value })} /><label htmlFor="editmale">Male</label></div>
                    <div><input type="radio" name="gen" id="editfemale" value="Female" onChange={(e) => setEditUser({ ...edituser, gender: e.target.value })} /><label htmlFor="editfemale">Female</label></div>
                </section>
                <section className="flex">
                    <div><label htmlFor="editdob" className="heading">Date of Birth :</label>
                        <input type="date" id="editdob" value={edituser.dob}
                        onChange={(e) => setEditUser({ ...edituser, dob: e.target.value })}
                        /></div>
                </section>

                <input className='Btn' type="submit" value="Submit" />
                
            </form>
            <button className='Btn' onClick={()=>props.fun(props.edit, false)}>X</button>
        </div>
    );


}

export default Modal;