import { useState, useEffect } from "react"
import client from "../Utils/client"

import { useNavigate } from "react-router-dom"
import { routeCreate, routeFirst} from "../Constant/routeName"
import Consultation from "../Components/Consultation"

import { FirstVaccination } from "./FirstVaccination"


export const DashboardPage = () => {
    const  [consultation, setConsultation] = useState()     
    
    useEffect(function() {

            client.get('/consultation')
            .then((response)=>{
                const data = response.data.data
                console.log(data)
            setConsultation(data)
            });
    }, [])

    const nav = useNavigate();
    const create = (event) => {
        event.preventDefault();
        nav(routeCreate);
    }   

    const reg = useNavigate();
    const regis = (event)=>{
        event.preventDefault();
        reg(routeFirst)
    }
  
    return (
        <main>
              <header className="jumbotron">
        <div className="container">
            <h1 className="display-4">Dashboard</h1>
        </div>
    </header>
  

    <div className="container">

      
        <section className="consultation-section mb-5">
            <div className="section-header mb-3">
                <h4 className="section-title text-muted">My Consultation</h4>
            </div>
            <div className="row">
                {
                    !consultation
                    ?
                    <div className="col-md-4">
                    <div className="card card-default">
                        <div className="card-header">
                            <h5 className="mb-0">Consultation</h5>
                        </div>
                        <div className="card-body">
                            <a href="/" onClick={create}>+ Request consultation</a>
                        </div>
                    </div>
                </div>
                    :
                     <Consultation consultation={consultation}/>
                }

                <div className="col-md-4">
                    <div className="card card-default">
                        <div className="card-header border-0">
                            <h5 className="mb-0">Consultation</h5>
                        </div>
                        <div className="card-body p-0">
                            <table className="table table-striped mb-0">
                                <tr>
                                    <th>Status</th>
                                    <td><span className="badge badge-primary">Accepted</span></td>
                                </tr>
                                <tr>
                                    <th>Disease History</th>
                                    <td className="text-muted">diabetes</td>
                                </tr>
                                <tr>
                                    <th>Current Symptoms</th>
                                    <td className="text-muted">flu</td>
                                </tr>
                                <tr>
                                    <th>Doctor Name</th>
                                    <td className="text-muted">Dr. Ratna Pradipta</td>
                                </tr>
                                <tr>
                                    <th>Doctor Notes</th>
                                    <td className="text-muted">ok</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
     

            </div>
        </section>
      
        <section className="consultation-section mb-5">
            <div className="section-header mb-3">
                <h4 className="section-title text-muted">My Vaccinations</h4>
            </div>
            <div className="section-body">
                <div className="row mb-4">

                   
                    <div className="col-md-12">
                        <div className="alert alert-warning">
                            Your consultation must be approved by doctor to get the vaccine.
                        </div>
                    </div>
                
                    <div className="col-md-4">
                        <div className="card card-default">
                            <div className="card-header border-0">
                                <h5 className="mb-0">First Vaccination</h5>
                            </div>
                            
                            <div className="card-body">
                                <a href="" onClick={regis}>+ Register vaccination</a>
                            </div>
                        </div>
                    </div>
                   
                    <div className="col-md-4">
                        <div className="card card-default">
                            <div className="card-header border-0">
                                <h5 className="mb-0">First Vaccination</h5>
                            </div>
                            <div className="card-body p-0">
                                <table className="table table-striped mb-0">
                                    <tr>
                                        <th>Status</th>
                                        <td className="text-muted"><span className="badge badge-info">Registered</span></td>
                                    </tr>
                                    <tr>
                                        <th>Date</th>
                                        <td className="text-muted">October 27, 2021</td>
                                    </tr>
                                    <tr>
                                        <th>Spot</th>
                                        <td className="text-muted">Usamah Hospital</td>
                                    </tr>
                                    <tr>
                                        <th>Vaccine</th>
                                        <td className="text-muted">-</td>
                                    </tr>
                                    <tr>
                                        <th>Vaccinator</th>
                                        <td className="text-muted">-</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                   
                    <div className="col-md-4">
                        <div className="card card-default">
                            <div className="card-header border-0">
                                <h5 className="mb-0">First Vaccination</h5>
                            </div>
                            <div className="card-body p-0">
                                <table className="table table-striped mb-0">
                                    <tr>
                                        <th>Status</th>
                                        <td className="text-muted"><span className="badge badge-primary">Vaccinated</span></td>
                                    </tr>
                                    <tr>
                                        <th>Date</th>
                                        <td className="text-muted">October 27, 2021</td>
                                    </tr>
                                    <tr>
                                        <th>Spot</th>
                                        <td className="text-muted">Usamah Hospital</td>
                                    </tr>
                                    <tr>
                                        <th>Vaccine</th>
                                        <td className="text-muted">Sinovac</td>
                                    </tr>
                                    <tr>
                                        <th>Vaccinator</th>
                                        <td className="text-muted">Dr. Raina Pradipta</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                

                </div>

                <div className="row">


                
                    <div className="col-md-4">
                        <div className="card card-default">
                            <div className="card-header border-0">
                                <h5 className="mb-0">Second Vaccination</h5>
                            </div>
                            <div className="card-body">
                                <a href="">+ Register vaccination</a>
                            </div>
                        </div>
                    </div>
              
                    <div className="col-md-4">
                        <div className="card card-default">
                            <div className="card-header border-0">
                                <h5 className="mb-0">Second Vaccination</h5>
                            </div>
                            <div className="card-body p-0">
                                <table className="table table-striped mb-0">
                                    <tr>
                                        <th>Status</th>
                                        <td className="text-muted"><span className="badge badge-info">Registered</span></td>
                                    </tr>
                                    <tr>
                                        <th>Date</th>
                                        <td className="text-muted">October 27, 2021</td>
                                    </tr>
                                    <tr>
                                        <th>Spot</th>
                                        <td className="text-muted">Usamah Hospital</td>
                                    </tr>
                                    <tr>
                                        <th>Vaccine</th>
                                        <td className="text-muted">-</td>
                                    </tr>
                                    <tr>
                                        <th>Vaccinator</th>
                                        <td className="text-muted">-</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-4">
                        <div className="card card-default">
                            <div className="card-header border-0">
                                <h5 className="mb-0">Second Vaccination</h5>
                            </div>
                            <div className="card-body p-0">
                                <table className="table table-striped mb-0">
                                    <tr>
                                        <th>Status</th>
                                        <td className="text-muted"><span className="badge badge-primary">Vaccinated</span></td>
                                    </tr>
                                    <tr>
                                        <th>Date</th>
                                        <td className="text-muted">October 27, 2021</td>
                                    </tr>
                                    <tr>
                                        <th>Spot</th>
                                        <td className="text-muted">Usamah Hospital</td>
                                    </tr>
                                    <tr>
                                        <th>Vaccine</th>
                                        <td className="text-muted">Sinovac</td>
                                    </tr>
                                    <tr>
                                        <th>Vaccinator</th>
                                        <td className="text-muted">Dr. Raina Pradipta</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                

                </div>

            </div>
        </section>
      

    </div>

        </main>
    )
}