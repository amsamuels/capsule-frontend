import React from 'react';
import { deleteData } from '../Api';
import { Link } from 'react-router-dom';

const Card = ({ party, query }) => {
  const handleRemoveUser = async (id) => {
    // send a DELETE request to the server in json.
    console.log(id);
    const deleted = await deleteData(id);
    window.location.reload();
  };
  return (
    <>
      {party
        .filter(
          (user) =>
            (user.firstName || '').toLowerCase().includes(query) ||
            (user.lastName || '').toLowerCase().includes(query)
        )
        .map((items) => {
          const mail = items.emailAddresses.map((mail) => mail.address);
          return (
            <div
              className='p-2 items-center rounded-sm bg-white border-gray-400 border-2  justify-between'
              key={items.id}
            >
              <div className='text-center'>
                <div>
                  <img src={items.pictureURL} className='w-auto rounded-lg' />
                </div>
                <div className=' flex flex-col text-center'>
                  <span className='font-normal text-gray-600'>
                    {items.firstName} {items.lastName}
                  </span>
                </div>
                <div>
                  <span className='font-normal truncate text-gray-600'>
                    {mail}
                  </span>
                </div>
                <div className='items-center grid grid-rows-1'>
                  <button
                    className='py-2 px-6 my-3 rounded text-indigo-600 border-2  border-indigo-300 '
                    onClick={() => handleRemoveUser(items.id)}
                  >
                    Delete
                  </button>
                  <Link
                    className='py-2 px-6 my-3 rounded text-indigo-600 border-2  border-indigo-300 '
                    to={`/edit-contact/${items.id}`}
                  >
                    Edit
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Card;
