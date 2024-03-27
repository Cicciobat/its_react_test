import {useState} from "react";

const Login = () => {
    const [user, setUser] = useState<string>('')

    const login = (event: any) => {
        event.preventDefault();
        console.log(event.target);
        localStorage.setItem('isLogged', 'true');
        localStorage.setItem('user', user);
    }


    return <div>
        <form onSubmit={login}>
        <input name="username" type="text" onChange={event => setUser(event.target.value)}/>
        <input type="submit" value="Login"/>
        </form>
    </div>
}


export default Login;