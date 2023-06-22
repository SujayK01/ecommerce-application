import style from "./login.module.css"
import Input from '../common/input'
const Login=()=>{


    return(
        <div className={style.container}>
            <form action="post">
                <Input title="Email" placeholder="EMAIL" type="text"/>
                <Input title="Password" placeholder="PASSWORD" type="password"/>
                <Input type="submit" value="Login" />
            </form>
        </div>
    )
}
export default Login;