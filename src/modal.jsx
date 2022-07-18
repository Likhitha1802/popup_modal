import React from 'react';
import nft from './nft.jpg';

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <img src={nft} alt='/' />
        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}>
            X
          </p>
          <div className='content'>
            
            <h1>CAREERERA</h1>
            <p>Best Online Learning Expertise</p>
          </div>
          <div className='btnContainer'>
            <button className='btnPrimary'>
              <span className='bold'></span>,LETS JOIN
            </button>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;