
import { useRef, useState } from 'react';
import '../CSS/Form.css'

const Form = (props) => {


    const formRef = useRef();
    let [userData, setUserData] = useState({
        name: '',
        email: '',
        contact: '',
        gender: '',
        weekdays: '',
        dob: ''
    });
    const onSubmitForm = (e) => {
        e.preventDefault();


        if(userData.contact.length!==10){
            alert("Enter a valid 10 digit mobile number !!! ")
        }

        else{
            const data = {
                name: userData.name,
                email: userData.email,
                contact: userData.contact,
                gender: userData.gender,
                weekdays: JSON.stringify(userData.weekdays),
                dob: userData.dob
    
            }
            props.fun(data);
            setUserData({
                weekdays: [],
            })
            formRef.current.reset();
        }
        
    }
    const handleCheckboxChange = (event) => {
        const checkboxValue = event.target.id;

        if (userData.weekdays.includes(checkboxValue)) {
            // If checkbox is already in the array, remove it
            setUserData({
                ...userData,
                weekdays: userData.weekdays.filter((day) => day !== checkboxValue),
            });
        } else {
            // If checkbox is not in the array, add it
            setUserData({
                ...userData,
                weekdays: [...userData.weekdays, checkboxValue],
            });
        }

    }
    return (
        <>
            <form className="formContainer" ref={formRef} onSubmit={(e) => onSubmitForm(e)} >
                <h2>Form</h2>
                <section className="flex">
                    <label htmlFor="name" className="heading">Name</label>
                    <input type="text"  id="name" onChange={(e) => setUserData({ ...userData, name: e.target.value })} required />
                </section>

                <section className="flex">
                    <label htmlFor="email" className="heading">Email</label>
                    <input type="email"  id="email" onChange={(e) => setUserData({ ...userData, email: e.target.value })} required />
                </section>
                <section className="flex">
                    <label htmlFor="contact" className="heading">Contact</label>
                    <input type="number"  id="contact" onChange={(e) => setUserData({ ...userData, contact: e.target.value })} required />
                </section>
                <section>
                    <label htmlFor="" className="heading">
                        Weekdays
                    </label>
                    <div>
                        <input
                            type="checkbox"
                            id="Monday"
                            checked={userData.weekdays.includes('Monday')}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="Monday">Monday</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="Tuesday"
                            checked={userData.weekdays.includes('Tuesday')}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="Tuesday">Tuesday</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="Wednesday"
                            checked={userData.weekdays.includes('Wednesday')}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="Wednesday">Wednesday</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="Thursday"
                            checked={userData.weekdays.includes('Thursday')}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="Thursday">Thursday</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="Friday"
                            checked={userData.weekdays.includes('Friday')}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="Friday">Friday</label>
                    </div>
                </section>

                <section className="flex genc" >
                    <label htmlFor="" className="heading">Gender</label>
                    <div><input type="radio" name="gen" id="male" value="Male" onChange={(e) => setUserData({ ...userData, gender: e.target.value })} /><label htmlFor="male">Male</label></div>
                    <div><input type="radio" name="gen" id="female" value="Female" onChange={(e) => setUserData({ ...userData, gender: e.target.value })} /><label htmlFor="female">Female</label></div>
                </section>
                <section className="flex">
                    <div><label htmlFor="dob" className="heading">Date of Birth :</label>
                        <input type="date" id="dob" onChange={(e) => setUserData({ ...userData, dob: e.target.value })} required/></div>
                </section>

                <input className='Btn' type="submit" value="submit" />
            </form>

        </>
    )
}

export default Form;
