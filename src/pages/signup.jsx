import { useEffect, useState } from 'react';

const SignUp = () => {
  const [errorMsg, setErrorMsg] = useState({
    email: '',
    username: '',
    password: '',
  });
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
  });

  useEffect(() => {
    // regular expression for validating email
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!emailRegex.test(formData.email)) {
      setErrorMsg((prevState) => ({ ...prevState, email: 'Invalid Email' }));
    } else {
      setErrorMsg((prevState) => ({ ...prevState, email: 'Good Email' }));
    }
  }, [formData]);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <h3>SignUp</h3>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            id="email"
          />
        </div>
        {formData.email && errorMsg.email && <p>{errorMsg.email}</p>}
        <div className="formGroup">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            id="username"
          />
        </div>
        <div className="formGroup">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            id="password"
          />
        </div>

        <button type="submit">SignUp</button>
      </form>
    </>
  );
};

export default SignUp;
