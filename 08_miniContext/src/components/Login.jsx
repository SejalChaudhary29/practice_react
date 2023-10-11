import React,{useContext , useState} from 'react'
import UserContext from '../Context/UserContext'
//Login component to send a data
function Login() {
    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')

     const {setUser} = useContext(UserContext)
    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username , password}) //sending data

    }
  return (
    <div>
        <h2>Login </h2>
        <input type="text"  value={username} 
         placeholder='username' 
         onChange={(e) => setUsername(e.target.value)} />
        <input type="text" 
        placeholder='password'
         value={password}  
         onChange={(e) => setPassword(e.target.value)} />
      
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login