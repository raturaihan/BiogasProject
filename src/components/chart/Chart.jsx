import "./chart.css";
import { useState, useEffect } from "react";
import { LineChart, XAxis, YAxis, Line, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

export default function Chart({data}) {

  const [dataTemperature, setDataTemperature] = useState([]);
  const [datapH, setDatapH] = useState([]);
  const [dataPressure, setDataPressure] = useState([]);
 
  // const dataTemperature = data.reverse().map(object => (
  //   {
  //     Waktu: object.device_data.time.slice(11,16),
  //     Temperature: object.device_data.temperatureValue,
  //   } 
  // ));

  // const datapH = data.reverse().map(object => (
  //   {
  //     Waktu: object.device_data.time.slice(11,16),
  //     pH: object.device_data.phValue,
  //   }
  // ));

  // const dataPressure = data.reverse().map(object => (
  //   {
  //     Waktu: object.device_data.time.slice(11,16),
  //     Pressure: object.device_data.pressureValue,
  //   }
  // ));

  useEffect(()=> {
    setDataTemperature(data.reverse().map(object => (
      {
        Waktu: object.device_data.time.slice(11,16),
        Temperature: object.device_data.temperatureValue.toFixed(2),
      } 
    )));

    setDatapH(data.reverse().map(object => (
      {
        Waktu: object.device_data.time.slice(11,16),
        pH: object.device_data.phValue.toFixed(2),
      } 
    )));


    setDataPressure(data.reverse().map(object => (
      {
        Waktu: object.device_data.time.slice(11,16),
        Pressure: object.device_data.pressureValue.toFixed(2),
      }
    )));
  }, [])

  
    return (
      <div className="chart">
        <div className="chartSuhu">
            <h3 className="chartTitle">Suhu Slurry</h3>
            <ResponsiveContainer width="100%" aspect={4/1}>
                <LineChart data={dataTemperature}>
                    <XAxis dataKey="Waktu" stroke="#355E3B"/>
                    <YAxis stroke="#355E3B"/>
                    <Line type="monotone" dataKey="Temperature" stroke="#008080"/>
                    <Tooltip/>
                    <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>
                </LineChart>
            </ResponsiveContainer>
        </div>
        <div className="chartpH">
        <h3 className="chartTitle">pH Slurry</h3>
            <ResponsiveContainer width="100%" aspect={4/1}>
                <LineChart data={datapH}>
                    <XAxis dataKey="Waktu" stroke="#355E3B" reversed='true'/>
                    <YAxis stroke="#355E3B"/> 
                    <Line type="monotone" dataKey="pH" stroke="#008080"/>
                    <Tooltip/>
                    <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>
                </LineChart>
            </ResponsiveContainer>
        </div>
        <div className="chartTekanan">
            <h3 className="chartTitle">Tekanan Gas</h3>
            <ResponsiveContainer width="100%" aspect={4/1}>
                <LineChart data={dataPressure}>
                    <XAxis dataKey="Waktu" stroke="#355E3B"/>
                    <YAxis stroke="#355E3B"/>
                    <Line type="monotone" dataKey="Pressure" stroke="#008080"/>
                    <Tooltip/>
                    <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>
                </LineChart>
            </ResponsiveContainer>
        </div>
      </div>
    )
}