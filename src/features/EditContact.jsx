import { useState, useEffect } from 'react';
import { Button } from '../components';
import { postData, customerByIdData, catchErrors } from '../Api';
import { useNavigate, useParams } from 'react-router-dom';

const EditContact = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [party, setParty] = useState(null);
  const [values, setValues] = useState({
    type: '',
    firstName: '',
    lastName: '',
    email: '',
  });
  useEffect(() => {
    const fetchData = async () => {
      const response = await customerByIdData(id);
      const data = response.data;
      setParty(data.party);
    };
    catchErrors(fetchData());
  }, []);

  const handleEditContact = async (id) => {
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
    const sendData = await postData(newCobject, id);
    navigate('/');
  };
  const email = party && party.emailAddresses[0].address;
  return (
    <div className='mt-8 mb-6 max-w-xl items-center h-screen mx-auto'>
      {party && (
        <div>
          <TextField
            label='First Name'
            value={party.firstName}
            onChange={(e) =>
              setValues({ ...values, firstName: e.target.value })
            }
            inputProps={{ type: 'text', placeholder: party.firstName }}
          />
          <br />
          <TextField
            label='Last Name'
            value={party.lastName}
            onChange={(e) => setValues({ ...values, lastName: e.target.value })}
            inputProps={{ type: 'text', placeholder: party.lastName }}
          />
          <br />
          <TextField
            label='Email Address'
            value={email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            inputProps={{
              type: 'text',
              placeholder: email,
            }}
          />
        </div>
      )}
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
        <Button onClick={() => handleEditContact()}>Submit</Button>
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
export default EditContact;
