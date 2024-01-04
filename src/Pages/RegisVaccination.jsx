import { useEffect, useState } from "react";
import client from "../Utils/client";
import { useNavigate, useParams } from "react-router-dom";
import { routeDashboard } from "../Constant/routeName";

export const RegistrasiVaccination = () => {
    const [RegistrasiVaccion , setRegistrasiVaccination] = useState({})
    const [date , setDate] = useState('')
    
    const {id} = useParams();
    const nav = useNavigate();

    function getData(event){
        const date_ = event ? event.target.value : ''
        setDate(date_)
        client.get(`/spots/${id}?date=${date_}`)
        .then((response)=>{
            const data = response.data.data
            console.log(data)
        setRegistrasiVaccination(data)
        });
    }

    function register() {
        const regis = RegistrasiVaccion.spots.id
        client.post('/Vaccination',{
            date: date,
            spot_id: regis
        })
            .then((response)=>{
                console.log(response)
                nav(routeDashboard);
            })
            .catch((response) => {
                alert(response.response.data.message)
              
            })
    }

    useEffect(function() {
        getData()
    }, [])

    

    return (
        <main>
              <header className="jumbotron">
        <div className="container d-flex justify-content-between align-items-center">
            <div>
                <h1 className="display-4">{RegistrasiVaccion.name}</h1>
                <span className="text-muted">{RegistrasiVaccion.address}</span>
            </div>
            <button className="btn btn-primary" onClick={register}>Register vaccination</button>
        </div>
    </header>
  

    <div className="container">

        <div className="row mb-3">
            <div className="col-md-3">
                <div className="form-group">
                    <label htmlFor="vaccination-date">Select vaccination date</label>
                    <input type="date" className="form-control" id="vaccination-date" onChange={getData} />
                </div>
            </div>
        </div>

        <div className="row mb-5">

          
            <div className="col-md-4">
                <div className="card card-default">
                    <div className="card-body">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <h4>Session 1</h4>
                            <span className="text-muted">09:00 - 11:00</span>
                        </div>
                        <div>
                            <div className="row">
                               {
                                [1, 2, 3, 4, 5].map((number)=>(
                                    <div className="col-4 mb-4" key={number}>
                                        <div
                                            className={`slot ${number<= RegistrasiVaccion.vaccination_count 
                                            ?
                                            'filled'
                                            :
                                            `${RegistrasiVaccion.vaccination_count + 1 ==number ? 'bg-primary text-white': ""}`
                                            }`}
                                        >
                                            {number}
                                        </div>
                                    </div>
                                ))
                               }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="col-md-4">
                <div className="card card-default">
                    <div className="card-body">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <h4>Session 2</h4>
                            <span className="text-muted">13:00 - 15:00</span>
                        </div>
                        <div>
                            <div className="row">
                            {
                                [6, 7, 8, 9, 10].map((number)=>(
                                    <div className="col-4 mb-4" key={number}>
                                        <div
                                            className={`slot ${number<= RegistrasiVaccion.vaccination_count 
                                            ?
                                            'filled'
                                            :
                                            `${RegistrasiVaccion.vaccination_count + 1 ==number ? 'bg-primary text-white': ""}`
                                            }`}
                                        >
                                            {number}
                                        </div>
                                    </div>
                                ))
                               }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         
            <div className="col-md-4">
                <div className="card card-default">
                    <div className="card-body">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <h4>Session 3</h4>
                            <span className="text-muted">15:00 - 17:00</span>
                        </div>
                        <div>
                            <div className="row">
                            {
                                [11, 12, 13, 14, 15].map((number)=>(
                                    <div className="col-4 mb-4" key={number}>
                                        <div
                                            className={`slot ${number<= RegistrasiVaccion.vaccination_count 
                                            ?
                                            'filled'
                                            :
                                            `${RegistrasiVaccion.vaccination_count + 1 ==number ? 'bg-primary text-white': ""}`
                                            }`}
                                        >
                                            {number}
                                        </div>
                                    </div>
                                ))
                               }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          

        </div>

    </div>

        </main>
    )
}