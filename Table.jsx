import React from 'react';
import "./Table.css";
import { Button } from '@mui/material';

 export const Table = () => {
  return (
  <div className="table-wrapper">
    <table className="table">
        <thead>
            <tr>
                <th>Flight No</th>
                <th clsssName="expand">Origin</th>
                <th>Destination</th>
                <th>Departure</th>
                <th>Arrival</th>
                <th className="expand">Frequency</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>176</td>
                <td>Agartala</td>
                <td>Chennai</td>
                <td>12:35</td>
                <td>20:20</td>
                <td>Daily</td>
            </tr>
            <tr>
                <td>174</td>
                <td>Agartala</td>
                <td>Bangalur</td>
                <td>16:20</td>
                <td>19:11</td>
                <td>Mon,tue</td>
            </tr>
            <tr>
                <td>183</td>
                <td>Agartala</td>
                <td>Kolkata</td>
                <td>15:11</td>
                <td>17:57</td>
                <td>Daily</td>
            </tr>
            <tr>
                <td>192</td>
                <td>Agartala</td>
                <td>mumbai</td>
                <td>120:20</td>
                <td>11:11</td>
                <td>sunday</td>
            </tr>
            <tr>
                <td>183</td>
                <td>Chennai</td>
                <td>Munbai</td>
                <td>12:11</td>
                <td>19:57</td>
                <td>Mon</td>
            </tr>  
            <tr>
                <td>154</td>
                <td>Chennai</td>
                <td>Bengaluru</td>
                <td>12:20</td>
                <td>13:11</td>
                <td>Daily</td>
            </tr>
            <tr>
                <td>198</td>
                <td>Mumbai</td>
                <td>kolkata</td>
                <td>18:11</td>
                <td>20:10</td>
                <td>tue,wed</td>
            </tr>   
            <tr>
                <td>154</td>
                <td>Chennai</td>
                <td>Bengaluru</td>
                <td>14:20</td>
                <td>14:11</td>
                <td>Sat,fri</td>
            </tr>
            <tr>
                <td>173</td>
                <td>kolkata</td>
                <td>Delhi</td>
                <td>16:11</td>
                <td>15:10</td>
                <td>Daily</td>
            </tr>       
        </tbody>
    </table>
    <br></br>
    <center>
        <form>
        <Button className="btn" href="/Home">
        Reserve Flight
      </Button>
      <Button className="btn" href="/BasicTable">
        Admin
    
      </Button>

      </form>
    </center>
  </div>
  )
};
