import React, { Component } from 'react'
import axios from 'axios'

 class FetchDataWithoutFiltter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             fetchDataList:[],
             t:false
        }
    }
    getUsersData(launch) {
        if(launch!=undefined){
        this.launchValue=launch
        var url="https://api.spaceXdata.com/v3/launches?limit=100&launch_success="+launch
        }
        else
        var url="https://api.spaceXdata.com/v3/launches?limit=100"

         axios
            .get(url)
            .then(res => {
                const data = res.data
                this.setState({
                    fetchDataList:data,
                    t:true
                })

            })
            .catch((error) => {
                console.log(error)
            })

    }



    componentDidMount(){
        this.getUsersData();
    }

    launchLand(land){
        if(this.launchValue==undefined)
        return;
        this.landValue=land;
        axios
        .get("https://api.spaceXdata.com/v3/launches?limit=100&launch_success="+this.launchValue+"&land_success="+land)
        .then(res => {
            const data = res.data
            this.setState({
                fetchDataList:data,
                t:true
            })

        })
        .catch((error) => {
            console.log(error)
        })
    }
    allFillter(year){
        if(this.launchValue==undefined|| this.landValue==undefined)
        return;
        axios
        .get("https://api.spaceXdata.com/v3/launches?limit=100&launch_success="+this.launchValue+"&land_success="+ this.landValue+"&launch_year="+year)
        .then(res => {
            const data = res.data
            this.setState({
                fetchDataList:data,
                t:true
            })

        })
        .catch((error) => {
            console.log(error)
        })
    }
   
    render() {
        console.log('sss'+this.state.t)

        return (
            <div>
              <div className="container-fluid bck-color" >
              <div className='row'>SpaceX Launch Programs</div>
                 <div className="row ">
                    <div className="yearCard">
                        <div className="card">
                           <div className="card-body"> 
                                <h5 className="card-title">Fillter</h5>
                                <div className="ag-centre">Launch Year</div>
                                <hr/>   
                        
                              <div className="padding-arround" >
                                     <a className="btn btn-success" onClick={()=>this.allFillter(2006)}>2006</a> 
                                     <a className="btn btn-success mag-around"  onClick={()=>this.allFillter(2007)}>2007</a>  
                                </div>
                                <div className="padding-arround" >
                                     <a className="btn btn-success" onClick={()=>this.allFillter(2008)}>2008</a> 
                                     <a className="btn btn-success mag-around"  onClick={()=>this.allFillter(2009)}>2009</a>  
                                </div>
                                <div className="padding-arround" >
                                     <a className="btn btn-success" onClick={()=>this.allFillter(2010)}>2010</a> 
                                     <a className="btn btn-success mag-around"  onClick={()=>this.allFillter(2011)}>2011</a>  
                                </div>
                                <div className="padding-arround" >
                                     <a className="btn btn-success" onClick={()=>this.allFillter(2012)}>2012</a> 
                                     <a className=" btn btn-success mag-around"  onClick={()=>this.allFillter(2013)}>2013</a>  
                                </div>
                                <div className="padding-arround" >
                                     <a className="btn btn-success" onClick={()=>this.allFillter(2014)}>2014</a> 
                                     <a className="btn btn-success mag-around"  onClick={()=>this.allFillter(2015)}>2015</a>  
                                </div>
                                <div className="padding-arround" >
                                     <a className="btn btn-success" onClick={()=>this.allFillter(2016)}>2016</a> 
                                     <a className="btn btn-success mag-around"  onClick={()=>this.allFillter(2017)}>2017</a>  
                                </div>
                                <div className="padding-arround" >
                                     <a className="btn btn-success" onClick={()=>this.allFillter(2019)}>2018</a> 
                                     <a className="btn btn-success mag-around"  onClick={()=>this.allFillter(2018)}>2019</a>  
                                </div>
                                <div className="padding-arround" >
                                     <a className="btn btn-success" onClick={()=>this.allFillter(2019)}>2019</a> 
                                     
                                </div>
                               

                                <div className="ag-centre">SuccessFul Lunch</div>
                                <hr/>
                             <div className="padding-arround">
                                 <a className="btn btn-success" onClick={()=>this.getUsersData(true)}>True</a>  
                                 <a className="btn btn-success mag-around" onClick={()=>this.getUsersData(false)}>False</a>
                            </div>
                            <div className="ag-centre">SuccessFul Landing</div>
                                <hr/>
                              <div className="padding-arround">
                                <span className="btn btn-success" onClick={()=>this.launchLand(true)}>True</span>  
                                <span className="btn btn-success mag-around" onClick={()=>this.launchLand(false)}>False</span>
                             </div>
                              
                        </div>
                    </div>
                </div>
                        
                            {this.state.fetchDataList.map((ftData, index) => (

                             <div className="space" key={index}>
                             <div className="card">
                                <img className=" img-boundry" src={ftData.links.mission_patch_small} alt="Card image cap" />
                                <div className="card-body"> 
                                <h5 className="card-title">#{ftData.mission_name + ftData.flight_number}</h5>

                                    <p className="card-text"></p>
                                </div>
                                {/* <ul className="list-group list-group-flush">Missin Id
                                {ftData.mission_id.map((mison, index) => (
                                    <li className="list-group-item">{mison.id}</li>
                                    ))}
                                    
                                </ul> */}
                                
                                <div className="card-body">
                                <div>
                                <span>Launch Year:</span><span>{ftData.launch_year}</span></div>
                                <div>
                                <span>Successful Launch:</span><span>{JSON.stringify(ftData.launch_success)}</span></div>
                                <div>
                                <span>Successful Landing:</span><span>{ftData.launch_success}</span></div>

                                </div>
                                </div>
                             
                             </div>
                              ))}
                              
                              
                       

                </div>              
            </div>  
          </div>
        )
    }
}

export default FetchDataWithoutFiltter
