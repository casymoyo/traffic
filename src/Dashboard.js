import React from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard({ userData }) {
  return (
    <div>
        <header className="d-flex justify-content-between align-items-center bg-dark  text-light px-2">
        <h3>Smart Traffic Light System (Harare)</h3>
        <div>
            <ul className='list-unstyled'>
                <li>{userData.split('@')[0]}</li>
                <li>
                    <Link to={'/logout'} className="btn btn-light" style={{'text-decoration': 'none'}}>Logout</Link>
                </li>
            </ul>
        </div>
    </header>

    <div className="container mt-3 d-flex justify-content-between ">
        <div id="map-container ">
            <div className="title">
                <h4>Real time data</h4>
            </div>
            <div className="realt-time-video shadow p-2">
                <video src="" width="100%" height="320" controls></video>
            </div>
            <div className="row border bg-dark text-light shadow py-2" style={{"borderRadius": '10px'}}>
                <div className="col col-4">
                    <div className="card bg-dark text-light">
                        <div className="card-body">
                            Average Speed
                            20km/hr
                        </div>
                    </div>
                </div>
                <div className="col col-4">
                    <div className="card bg-dark text-light">
                        <div className="card-body">
                            Average Speed
                            20km/hr
                        </div>
                    </div>
                </div>
                <div className="col col-4">
                    <div className="card bg-dark text-light">
                        <div className="card-body">
                            Average Speed
                            20km/hr
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="data-panels w-100">
            <div className="p-2 shadow border" style={{"borderRadius": '10px'}}>
                <h4>Streets Name</h4>
                <div className="search">
                    <input type="search" name="streets" placeholder="search street" className=" form-control"/>
                </div>
                <div className="p-2">
                    <p className="placeholder">
                        <span className="text-light px-2">Robert Mugabe and Fourth street(s)</span>
                        <button className="btn btn-primary btn-sm">View</button>
                    </p>
                </div>
            </div>

            <div className="p-2 bg-dark border shadow mt-4 text-light" style={{"borderRadius": '10px'}}>
                <h4>System Settings</h4>
                <ul>
                    <li className="d-flex justify-content-end">
                        <span>
                            <small className="px-2">Manage Users</small>
                        </span>
                        <span>
                            <small className="text-danger">Turn of system</small>
                        </span>
                    </li>
                </ul>
                    <div className="input-group align-items-center">
                        <small className="input-group-addon"><i>Channel id</i></small>
                        <input id="channel" type="text" className="form-control" name="wifi" placeholder="64e592476ed7619d04526f6360f150d4bce63046511dde3f8665e5aec6b51ffc0000000000000000:78829daa792010edd2c7dbfb"/>
                        <button  type="button" className="btn btn-dark" onclick="sendChannel()">Save</button>
                    </div>
                    <div className="input-group align-items-center py-2">
                        <small className="input-group-addon"><i>Gateway of keepy</i></small>
                        <input id="gateway" type="text" className="form-control" name="wifi" placeholder="192.168.8.100:3002"/>
                        <button  type="button" className="btn btn-dark" onclick="sendGateway()">Save</button>
                    </div>
                    <div className="border p-2">
                        <div className="input-group">
                          <small className="input-group-addon"><i>SSID</i></small>
                          <input id="wifi-ssid" type="text" className="form-control" name="wifi" placeholder="Wifi name"/>
                        </div>
                        <div className="input-group py-2">
                          <small className="input-group-addon"><i>PWD</i></small>
                          <input id="password" type="password" className="form-control" name="password" placeholder="Password"/>
                        </div>
                      <button  type="button" className="btn btn-dark w-100" onclick="sendServer()">Save</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
