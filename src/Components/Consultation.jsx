export default function Consultation({consultation}){
    return(
        <>
           
           <div className="col-md-4">
                        <div className="card card-default">
                            <div className="card-header border-0">
                                <h5 className="mb-0">consultation</h5>
                            </div>
                            <div className="card-body p-0">
                                <table className="table table-striped mb-0">
                                    <tr>
                                        <th>Status</th>
                                        <td><span className="badge badge-info">{consultation.status}</span></td>
                                    </tr>
                                    <tr>
                                        <th>Disease History</th>
                                        <td className="text-muted">{consultation.disease_history}</td>
                                    </tr>
                                    <tr>
                                        <th>Current Symptoms</th>
                                        <td className="text-muted">{consultation.current_symptoms}</td>
                                    </tr>
                                    <tr>
                                        <th>Doctor Name</th>
                                        <td className="text-muted">{consultation.doctor_id}</td>
                                    </tr>
                                    <tr>
                                        <th>Doctor Notes</th>
                                        <td className="text-muted">{consultation.doctor_notes}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
        </>
    )
}