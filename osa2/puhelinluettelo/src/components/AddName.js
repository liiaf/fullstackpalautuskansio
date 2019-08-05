import React from 'react'

const AddName  = ({ addName, newName, handleNamesChange, newPhone, handlePhoneChange }) => {
  return (
    <div>

<form onSubmit={addName}>
        <div>
          name: <input
            value={newName}
            onChange={handleNamesChange}
          />
        </div>
        <div>number: <input
          value={newPhone}
          onChange={handlePhoneChange}
        />

        </div>
        <button type="submit">add</button>
      </form>
    </div>
  )
}

export default AddName