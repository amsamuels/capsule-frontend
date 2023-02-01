import { Route, Routes } from 'react-router-dom';
import { Contact, AddContact, EditContact } from './features';

function App() {
  return (
    <div className='App'>
      <div className='flex w-full bg-slate-300 flex-col items-center justify-center'>
        <Routes>
          <Route path='/' element={<Contact />} />
          <Route path='add-contact' element={<AddContact />} />
          <Route path='edit-contact/:id' element={<EditContact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
