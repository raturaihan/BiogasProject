import "./chart.css"
import { LineChart, XAxis, Line, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

export default function Chart() {
    const data = [
        {
          name: '12.00',
          Suhu: 29.6,
        },
        {
          name: '13.00',
          Suhu: 29.8,
        },
        {
          name: '14.00',
          Suhu: 31.3,
        },
        {
          name: '15.00',
          Suhu: 31.5,
        },
        {
          name: '17.00',
          Suhu: 33.6,
        },
        {
          name: '18.00',
          Suhu: 34.2,
        },
        {
          name: '19.00',
          Suhu: 34.8,
        },
      ];
      
    return (
      <div className="chart">
        <div className="chartSuhu">
            <h3 className="chartTitle">Suhu Slurry</h3>
            <ResponsiveContainer width="100%" aspect={4/1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd"/>
                    <Line type="monotone" dataKey="Suhu" stroke="#5550bd"/>
                    <Tooltip/>
                    <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>
                </LineChart>
            </ResponsiveContainer>
        </div>
        <div className="chartpH">
            <h3 className="chartTitle">pH Slurry</h3>
            <ResponsiveContainer width="100%" aspect={4/1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd"/>
                    <Line type="monotone" dataKey="Suhu" stroke="#5550bd"/>
                    <Tooltip/>
                    <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>
                </LineChart>
            </ResponsiveContainer>
        </div>
        <div className="chartTekanan">
            <h3 className="chartTitle">Tekanan Gas</h3>
            <ResponsiveContainer width="100%" aspect={4/1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd"/>
                    <Line type="monotone" dataKey="Suhu" stroke="#5550bd"/>
                    <Tooltip/>
                    <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>
                </LineChart>
            </ResponsiveContainer>
        </div>
      </div>
    )
}
