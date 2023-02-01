import { useState } from 'react';
import { Button } from '../components';
import { postData } from '../Api';
import { useNavigate } from 'react-router-dom';
const AddContact = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    type: '',
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleAddContact = async () => {
    const newCobject = {
      party: {
        type: values.type,
        firstName: values.firstName,
        lastName: values.lastName,
        emailAddresses: [
          {
            address: values.email,
          },
        ],
      },
    };
    console.log(JSON.stringify(newCobject));
    const sendData = await postData(newCobject);
    navigate('/');
  };
  return (
    <div className='mt-8 mb-6 max-w-xl items-center h-screen mx-auto'>
      <TextField
        label='First Name'
        value={values.firstName}
        onChange={(e) => setValues({ ...values, firstName: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'First Name' }}
      />
      <br />
      <TextField
        label='Last Name'
        value={values.lastName}
        onChange={(e) => setValues({ ...values, lastName: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Last Name' }}
      />
      <br />
      <TextField
        label='Email Address'
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Email Address' }}
      />
      <br />
      <div className='relative w-full lg:max-w-sm space-x-4'>
        <select
          value={values.type}
          onChange={(e) => setValues({ ...values, type: e.target.value })}
        >
          <option value='select Type'>Select Type</option>
          <option value='person'>Person</option>
          <option value='organisation'>Organisation</option>
        </select>
        <Button onClick={() => handleAddContact()}>Submit</Button>
      </div>
    </div>
  );
};

const TextField = ({ label, inputProps, onChange, value }) => {
  return (
    <div className='flex flex-col'>
      <label className='mb-2 text-base text-gray-800'>{label}</label>
      <input
        className='py-2 px-3 border-2 outline-none'
        {...inputProps}
        onChange={onChange}
        defaultValue={value}
      />
    </div>
  );
};
export default AddContact;
