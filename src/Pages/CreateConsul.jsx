import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import client from "../Utils/client"
import { routeDashboard } from "../Constant/routeName"

export const CreateConsul = () => {
   
   const inputHistory = useRef()
   const inputsymptoms = useRef()
   const nav =useNavigate()

   const send = (event)=> {
    event.preventDefault()

    let body = {
        disease_history : inputHistory.current.value,
        current_symptoms : inputsymptoms.current.value
    }

    client.post('/consultation', body)
        .then(() => {
            nav(routeDashboard)
        })

   }
   
    return (
        <main>
            <header className="jumbotron">
        <div className="container">
            <h1 className="display-4">Request Consultation</h1>
        </div>
    </header>


    <div className="container">

        <form action="">
            <div className="row mb-4">
                <div className="col-md-6">
                    <div className="form-group">
                        <div className="d-flex align-items-center mb-3">
                            <label for="disease-history" className="mr-3 mb-0">Do you have disease history ?</label>
                            <select className="form-control-sm">
                                <option value="yes">Yes, I have</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <textarea ref={inputHistory} id="disease-history" className="form-control" cols="30" rows="10" placeholder="Describe your disease history"></textarea>
                    </div>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-md-6">
                    <div className="form-group">
                        <div className="d-flex align-items-center mb-3">
                            <label for="current-symptoms" className="mr-3 mb-0">Do you have symptoms now ?</label>
                            <select className="form-control-sm">
                                <option value="yes">Yes, I have</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <textarea ref={inputsymptoms} id="current-symptoms" className="form-control" cols="30" rows="10" placeholder="Describe your current symptoms"></textarea>
                    </div>
                </div>
            </div>

            <button className="btn btn-primary" onClick={send}>Send Request</button>
        </form>

    </div>
        </main>
    )
}