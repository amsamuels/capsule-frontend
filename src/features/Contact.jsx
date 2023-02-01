import { useState } from 'react';
import { useEffect } from 'react';
import { customerData, catchErrors } from '../Api';
import { Button, Input, Card } from '../components';
import { Link } from 'react-router-dom';

const Contact = ({}) => {
  const [partyData, setPartyData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await customerData();
      const data = response.data;
      setPartyData(data);
      setLoading(false);
    };
    catchErrors(fetchData());
  }, []);
  return (
    <div className='flex flex-col w-full p-1 md:p-4 '>
      <div className=' flex flex-col md:flex-row p-4 justify-between items-center'>
        <Input
          label='Search'
          inputProps={{
            type: 'text',
            placeholder: 'Type to Filter Contacts',
          }}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div>
          <Link to='/add-contact'>
            <Button>Add Contact</Button>
          </Link>
        </div>
      </div>
      <div className='grid md:grid-cols-4 p-1 md:px-4 gap-4'>
        {loading ? (
          <div className='flex flex-col space-y-3 animate-pulse p-4 container mx-auto max-w-2xl'>
            <div className='h-6 bg-gray-300 mt-5 rounded-md'></div>
            <div className='h-40 bg-gray-300 mt-5 rounded-md'></div>
            <div className='h-8 bg-gray-300 mt-5 rounded-md'></div>
            <div className='h-40 bg-gray-300 mt-5 rounded-md'></div>
          </div>
        ) : partyData ? (
          <Card party={partyData.parties} query={query} />
        ) : (
          <h3 className='text-center mt-10 font-semibold text-gray-500'>
            Currently No Data Available 😥
          </h3>
        )}
      </div>
    </div>
  );
};

export default Contact;
