
import './App.css';
import React, { useState } from 'react';
import './index.css';
import Modal from './modal';

function App(){
  const [openModal,setOpenModal] = useState(false)
  return (
    <div>
      <button className='modalBtn' onClick={() => setOpenModal(true)}>Modal</button>
      <Modal open={openModal} onClose={()=>setOpenModal(false)}/>
    </div>
  )
}
export default App