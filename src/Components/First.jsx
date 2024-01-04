import { useNavigate } from "react-router-dom";




export default  function First({firstVaccination}){
    function getvaccine() {
        const Available_vaccine_name = Object.entries(firstVaccination.Available_vaccine)
        .filter(([_, isAvailable])=> isAvailable)
        .map(([vaccine])=> vaccine);

        return Available_vaccine_name.join(', ')
    }

    const nav = useNavigate();
    const onclick = (event) => {
        event.preventDefault();
        nav(`../registrasi/${firstVaccination.id}`);
    }   


    function getServe(){
        if(firstVaccination.serve == 1){
            return 'Only First Vaksinasi'
        }
        if(firstVaccination.serve == 2){
            return 'Only Second Vaksinasi'
        }
        if(firstVaccination.serve == 3){
            return 'Both Vaksinasi'
        }
    }
    return(
        <>
            <article className={`spot ${firstVaccination.Unavailable && 'unavailable'}`} onClick={onclick}>
                <div className="row">
                    <div className="col-5">
                        <h5 className="text-primary">{firstVaccination.name}</h5>
                        <span className="text-muted">{firstVaccination.address}</span>
                    </div>
                    <div className="col-4">             
                        <h5>Available vaccines</h5>
                        <span className="text-muted">{getvaccine()}</span>
                    </div>
                    <div className="col-3">
                        <h5>{firstVaccination.serve}</h5>
                        <span className="text-muted">
                       {getServe()}
                    </span>
                    </div>
                </div>
            </article>
        </>
    )
}