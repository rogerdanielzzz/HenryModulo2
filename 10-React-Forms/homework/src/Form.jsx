import React, { useState } from 'react';

export  function validate(e) {
  let errors = {};
  if (!e.username) {
    errors.username = 'Username is required'
  } else if (!/\S+@\S+\.\S+/.test(e.username)) {
    errors.username = 'Username is invalid';
  }
  if (!e.password) {
    errors.password = 'Password is required'
  } else if (!/(?=.*[0-9])/.test(e.password)) {
    errors.password = 'Password is invalid';
  }
  return errors;
}



export default function Form() {
  const handleSumit = function (e) {
    e.preventDefault();
    console.log(errors)
    console.log(inputUser)
   ;
  }
  const [inputUser, setInputUser] = useState({
    username: "",
    password: "",
  })
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  })
  const handleInputChange = function (e) {
     setInputUser({
      ...inputUser,
      [e.target.name]: e.target.value
      

    })
    setErrors(validate({  ...inputUser, [e.target.name]: e.target.value }))
    ;
  }

 





  return (
    <form onSubmit={handleSumit} >
      <div>
        <label>Username:</label>
        <input type="text" className={errors.username && 'danger'} name="username" onChange={handleInputChange} value={inputUser.username} />
        {errors.username && (
          <p className="danger">{errors.username}</p>
        )}
        <label>Password:</label>
        <input type="password" className={errors.password && 'danger'} name="password" onChange={handleInputChange} value={inputUser.password} />
        {errors.password && (
          <p className="danger">{errors.password}</p>
        )}
        <input type="submit" value="Enviar" />
      </div>
    </form>
  )
}
