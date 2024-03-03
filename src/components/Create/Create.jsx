import React, { useState } from 'react';
import './Create.css'
import { FormField, Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';

const Create = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    // console.log(firstName, lastName, email);

    const sendDataAPI = () =>{
        axios.post(`https://65e3c45d88c4088649f606a7.mockapi.io/users`, {
            firstName, lastName, email
        })
    }
    return (
        <div>
            <Form>
                <FormField>
                    <label>First Name</label>
                    <input name="fName" placeholder='First Name' 
                    onChange={(i) => setFirstName(i.target.value)}
                    />
                </FormField>
                <FormField>
                    <label>Last Name</label>
                    <input name='lName' placeholder='Last Name'
                    onChange={(i) => setLastName(i.target.value)}
                    />
                </FormField>
                <FormField>
                    <label>Email</label>
                    <input type='email' name='email' placeholder='Drop Your Mail'
                    onChange={(i) => setEmail(i.target.value)}
                    required/>
                </FormField>
                <FormField>
                    <label>Contact</label>
                    <input type='number' name='number' placeholder='Drop Your Mail'
                    onChange={(i) => setEmail(i.target.value)}
                    required/>
                </FormField>
                <FormField>
                    <Checkbox label='I agree to the Terms and Conditions' required/>
                </FormField>
                <Button type='submit' onClick={sendDataAPI}>Submit</Button>
            </Form>

            {/* {

            } */}
        </div>
    );
};

export default Create;