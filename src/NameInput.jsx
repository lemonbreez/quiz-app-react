import React, { useState } from 'react';

function NameInput() {
  const [name, setName] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleNameChange = (event) => {
    const enteredName = event.target.value.trim(); // Remove leading and trailing whitespaces
    setName(enteredName);
    setIsValid(enteredName.toLowerCase() === '' || enteredName === '');
  };

  return (
    <div>
      <label htmlFor="nameInput">قم بأدخال اسمك </label>
      <input
        type="text"
        id="nameInput"
        value={name}
        onChange={handleNameChange}
      />
      {!isValid && <p>خطأ ! ): </p>}
      {isValid && <p>مرحبا, {name ? name : ''}!</p>}
    </div>
  );
}

export default NameInput;

