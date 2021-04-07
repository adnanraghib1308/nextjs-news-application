import { Toolbar } from '../components/toolbar';

export const EOM = () => {
    return (   
        <div className="page-container">
            <Toolbar/>
            <div className = "card" style = {{background: "#f5f2f2", width: "500px", height: "600px", display: "flex", alignItems: "center", padding: "10px", marginTop: "50px" }}>
                <h1 className="card-title">Developed by</h1>
                <div className = "card-body" style = {{display:"flex", alignItems:"center", flexDirection: "column"}}>
                    <h2>Adnan Raghib</h2>
                    <h6>Software Engineer</h6>
                    <img src = {'/img.png'} style= {{padding:"10px"}}/>
                    <p> Cool tech guy who likes to build interesting stuffs </p>
                </div>
            </div>
            
        </div>
    )
}

export default EOM;