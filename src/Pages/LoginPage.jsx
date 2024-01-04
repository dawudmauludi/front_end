import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import client from "../Utils/client"
import { sessionId, sessionName, sessionToken } from "../Constant/localStorage"
import { routeDashboard } from "../Constant/routeName"
import { sessionError } from "../Constant/Constant"

export const LoginPage = () => {

    const inputUsername = useRef()
    const inputPassword = useRef()
    const nav = useNavigate()

    const submit  = (ev) => {
        ev.preventDefault()

        let body = {
            id_card_number : inputUsername.current.value,
            password : inputPassword.current.value,
        }

        client.post('auth/login', body).then(({data}) => {
            localStorage.setItem(sessionId, data.data.id_card_number)
            localStorage.setItem(sessionName, data.data.name)
            localStorage.setItem(sessionToken, data.data.login_tokens)

            nav(routeDashboard)
        }).catch(({ response }) => {
            localStorage.setItem(sessionError, response.data.message)
    })
}

    return(
        <main>
              <header className="jumbotron">
        <div className="container text-center">
            <h1 className="display-4">Vaccination Platform</h1>
        </div>
    </header>
  
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <form className="card card-default">
                    <div className="card-header">
                        <h4 className="mb-0">Login</h4>
                    </div>
                    <div className="card-body">
                        <div className="form-group row align-items-center">
                            <div className="col-4 text-right">ID Card Number</div>
                            <div className="col-8"><input ref={inputUsername} type="text" className="form-control" /></div>
                        </div>
                        <div className="form-group row align-items-center">
                            <div className="col-4 text-right">Password</div>
                            <div className="col-8"><input ref={inputPassword} type="password" className="form-control" /></div>
                        </div>
                        <div className="form-group row align-items-center mt-4">
                            <div className="col-4"></div>
                            <div className="col-8"><button onClick={submit} className="btn btn-primary">Login</button></div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
        </main>
    )
}