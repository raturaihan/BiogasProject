import "./parameterinfo.css"
import {Chip, Tooltip, Grid} from "@material-ui/core"
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ChipDesk from "./ChipDesk"
import ChipMob from "./ChipMob"

export default function Parameterinfo({data}) {
// console.log(data);

  function formatDate(string){
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([],options);
}

    return (
        <div className="parameter">
            <div className="parameterItem"  >  
                <Grid item xs={12} sm container>
                {data[data.length-1].device_data.temperatureStatus === 1?
                    <Grid item xs container direction="column" spacing={2}>
                    <item>
                        <Chip icon={<WarningAmberIcon color="warning"/>} label="Warning" color="#FFFF00" />
                    </item></Grid>: <></>}
                    <Grid item>
                    <item>
                        <Tooltip title={<div>
                                            <div>20 - 35 &#8451; : Normal</div>
                                        </div>} enterTouchDelay={0}>
                            <InfoOutlinedIcon color="disabled" />
                        </Tooltip>
                    </item></Grid>
                </Grid>
                <div className="parameterTitle">Suhu Slurry</div>
                <div className="nilaiParameter">
                    <span className="Data"> {data[data.length-1].device_data.temperatureValue.toFixed(2)} &#8451;</span>
                </div>
                <div><span className="tanggal">{formatDate(data[data.length-1].device_data.time.slice(0,10))}</span></div>
                <span className="waktu"> {data[data.length-1].device_data.time.slice(11,16)}</span>
            </div> 
            <div className="parameterItem">
                <Grid item xs={12} sm container>
                        {data[data.length-1].device_data.phStatus === 1?
                        <Grid item xs container direction="column" spacing={2}>
                        <item>
                            <ChipDesk icon={<WarningAmberIcon color="warning"/>} label="Warning" color="warning" />
                            <ChipMob icon={<WarningAmberIcon color="warning"/>}  color="warning" />
                        </item></Grid>: <></>}
                        <Grid item>
                        <item>
                            <Tooltip title={<div>
                                                <div>6.5 - 8.2 : Normal</div>
                                            </div>} enterTouchDelay={0}>
                                <InfoOutlinedIcon color="disabled" />
                            </Tooltip>
                        </item></Grid>
                    </Grid>
                <span className="parameterTitle">pH Slurry</span>
                <div className="nilaiParameter">
                    <span className="Data">{data[data.length-1].device_data.phValue.toFixed(2)}</span>
                </div>
                <div><span className="tanggal">{formatDate(data[data.length-1].device_data.time.slice(0,10))}</span></div>
                <span className="waktu">{data[data.length-1].device_data.time.slice(11,16)}</span>
            </div> 
            <div className="parameterItem2">
                <Grid item xs={12} sm container>
                {data[data.length-1].device_data.pressureStatus === 1?
                        <Grid item xs container direction="column" spacing={2}>
                        <item>
                            <Chip icon={<WarningAmberIcon color="warning"/>} label="Warning" color="#FFFF00" />
                        </item></Grid>
                : <></>}
                        <Grid item>
                        <item>
                            <Tooltip title={<div>
                                                <div> 0 - 7.84 KPa : Normal</div>
                                            </div>} enterTouchDelay={0}>
                                <InfoOutlinedIcon color="disabled" />
                            </Tooltip>
                        </item></Grid>
                    </Grid>
                <span className="parameterTitle">Tekanan Gas</span>
                <div className="nilaiParameter">
                    <span className="Data">{data[data.length-1].device_data.pressureValue.toFixed(2)} KPa</span>
                </div>
                <div><span className="tanggal">{formatDate(data[data.length-1].device_data.time.slice(0,10))}</span></div>
                <span className="waktu">{data[data.length-1].device_data.time.slice(11,16)}</span>
            </div> 
        </div>
    )
}
