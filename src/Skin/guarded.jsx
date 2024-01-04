import { Navigate, Outlet } from "react-router-dom";
import { sessionName, sessionToken } from "../Constant/localStorage";
import { routeSignin } from "../Constant/routeName";
import { sessionSuccess } from "../Constant/Constant";

export default function GuardedSkin() {
    if(localStorage.getItem(sessionToken) == null){
        return <Navigate to = {routeSignin}/>
    }

    const name = localStorage.getItem(sessionName)


    const logout = () => {
        localStorage.clear()
        window.location.reload()
        localStorage.setItem(sessionSuccess, 'Berhasil Logout')
    }

    return(
       
             <div>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
    <div className="container">
        <a className="navbar-brand" href="#">Vaccination Platform</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#">{name}</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href=""  onClick={() => logout()}>Logout</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
            <Outlet/>

            <footer>
    <div className="container">
        <div className="text-center py-4 text-muted">
            Copyright &copy; 2021 - Web Tech ID
        </div>
    </div>
</footer>
        </div>
    )
}