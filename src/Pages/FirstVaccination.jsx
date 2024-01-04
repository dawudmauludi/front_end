import { useState, useEffect } from "react"
import client from "../Utils/client"
import First from "../Components/First"

export const FirstVaccination=() => {
    const [firstVaccination , setFirsVaccination] = useState()

    useEffect(function() {

        client.get('/spots')
        .then((response)=>{
            const data = response.data.data
            console.log(data)
        setFirsVaccination(data)
        });
}, [])


    

   

    return(
        <main>
              {/* <header className="jumbotron">
        <div className="container">
            <h1 className="display-4">First Vaccination</h1>
        </div>
    </header>


    <div className="container mb-5">

        <div className="section-header mb-4">
            <h4 className="section-title text-muted font-weight-normal">List Vaccination Spots in Central Jakarta</h4>
        </div>

        <div className="section-body">

        

           

            <article className="spot">
                <div className="row">
                    <div className="col-5">
                        <h5 className="text-primary">Napitupulu Hospital</h5>
                        <span className="text-muted">Jln. Laswi No. 228, DKI Jakarta</span>
                    </div>
                    <div className="col-4">
                        <h5>Available vaccines</h5>
                        <span className="text-muted">Sinovac, AstraZeneca, Sinnopharm.</span>
                    </div>
                    <div className="col-3">
                        <h5>Serve</h5>
                        <span className="text-muted">
                        Both vaccination
                    </span>
                    </div>
                </div>
            </article>

            <article className="spot">
                <div className="row">
                    <div className="col-5">
                        <h5 className="text-primary">Nugroho Hospital</h5>
                        <span className="text-muted">Ki. Bagis Utama No. 325, DKI Jakarta</span>
                    </div>
                    <div className="col-4">
                        <h5>Available vaccines</h5>
                        <span className="text-muted">Sinovac, AstraZeneca, Sinnopharm.</span>
                    </div>
                    <div className="col-3">
                        <h5>Serve</h5>
                        <span className="text-muted">
                        Only first vaccination
                    </span>
                    </div>
                </div>
            </article>

            <article className="spot">
                <div className="row">
                    <div className="col-5">
                        <h5 className="text-primary">Megantara Hospital</h5>
                        <span className="text-muted">Gg. Sam Ratulangi No. 503, DKI Jakarta</span>
                    </div>
                    <div className="col-4">
                        <h5>Available vaccines</h5>
                        <span className="text-muted">Sinovac, AstraZeneca, Sinnopharm.</span>
                    </div>
                    <div className="col-3">
                        <h5>Serve</h5>
                        <span className="text-muted">
                        Only first vaccination
                    </span>
                    </div>
                </div>
            </article>

        </div>

    </div> */
    }

    {
        firstVaccination && firstVaccination.map((firstVaccination, key)=> <First key={key} firstVaccination={firstVaccination}/>)
    }



        </main>
    )
}