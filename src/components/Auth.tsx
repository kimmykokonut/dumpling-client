import { useState } from "react";
import { signUp, signIn } from "../api-helper";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [message, setMessage] = useState('');
  const [userIn, setUserIn] = useState('');
  const [pwIn, setPwIn] = useState('');

  const navigate = useNavigate();

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userData = {
      username,
      password,
      email
    };

    const response = await signUp(userData);
    setToken(response.token)
    localStorage.setItem('token', response.token);
    console.log(token, username, response.token);
    setUsername('');
    setEmail('');
    setPassword('');

    setMessage('Account created, please sign in to continue.');
  }

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userSignInData = {
      username: userIn,
      password: pwIn
    };

    const response = await signIn(userSignInData);
    setToken(response.token)
    localStorage.setItem('token', response.token);
    console.log(token, username, response.token);
    setUserIn('');
    setPwIn('');

    navigate('/dumplings/');
  }
  // const handleSignOut = async (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   //apicall to delete token
  //   setToken('');
  //   localStorage.removeItem('token');
  // }

  return (
    <div>
      <div id="signUp">
        <form action="POST" onSubmit={handleSignUp}>
          <fieldset>
            <legend>Register</legend>
            <label htmlFor="userName"><input type="text" id="userName" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} /></label>
            <label htmlFor="userEmail"><input type="email" id="userEmail" placeholder="email@email.com" value={email} onChange={(e) => setEmail(e.target.value)} /></label>
            <label htmlFor="userPW"><input type="password" id="userPW" placeholder="password must have at least 8 characters" value={password} onChange={(e) => setPassword(e.target.value)} /></label>
          </fieldset>
          <button type="submit">Sign up</button>
        </form>
        {message && <p>{message}</p>}
        <hr />
      </div>
      <div id="signIn"></div>
      <form action="POST" onSubmit={handleSignIn}>
        <fieldset>
          <legend>Sign In</legend>
          <label htmlFor="userNameIn"><input type="text" id="userNameIn" placeholder="username" value={userIn} onChange={(e) => setUserIn(e.target.value)} /></label>
          <label htmlFor="userPWIn"><input type="password" id="userPWIn" placeholder="password" value={pwIn} onChange={(e) => setPwIn(e.target.value)} /></label>
        </fieldset>
        <button type="submit">Sign In</button>
      </form>
      <p>Don't have an account? <a href="">Sign up here</a></p>
      <hr />
      {/* <div id="signOut">
        <form action="POST" onSubmit={handleSignOut}>
          <button type="submit">Log Out</button>
        </form>
      </div> */}
    </div>
  );
}
export default Auth;


