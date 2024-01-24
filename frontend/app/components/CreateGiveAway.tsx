"use client"

import React, { useState } from 'react';

interface ModalProps {
  onClose: () => void;
  onOptionSelect: (option: string) => void;
}

const Modal: React.FC<ModalProps> = ({ onClose, onOptionSelect }) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleOptionSelectInternal = (option: string) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    onOptionSelect(selectedOption);
    onClose();
  };

  return (
    <div className="">
    
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name="gender"
                  value="Boy"
                  onChange={() => handleOptionSelectInternal('Boy')}
                />
                <span className="ml-2">Boy</span>
              </label>
              <label className="ml-4 inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name="gender"
                  value="Girl"
                  onChange={() => handleOptionSelectInternal('Girl')}
                />
                <span className="ml-2">Girl</span>
              </label>

            <button onClick={handleSubmit}>Submit</button>

    </div>
  );
};

export default Modal;
