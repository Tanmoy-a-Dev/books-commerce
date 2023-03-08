const SignIn = () => {
  return (
    <>
      <h3>SignIn</h3>
      <form action="">
        <div className="formGroup">
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" id="email" />
        </div>
        <div className="formGroup">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" />
        </div>

        <button type="submit">SignIn</button>
      </form>
    </>
  );
};

export default SignIn;
