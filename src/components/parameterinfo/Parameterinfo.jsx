import "./parameterinfo.css"
import {Chip, Tooltip, Grid} from "@material-ui/core"
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function Parameterinfo() {
    return (
        <div className="parameter">
            <div className="parameterItem">
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                    <item>
                        <Chip icon={<WarningAmberIcon color="warning"/>} label="Warning" color="#FFFF00" />
                    </item></Grid>
                    <Grid item>
                    <item>
                        <Tooltip title={<div>
                                            <div>25 - 35 C : Normal</div>
                                        </div>}>
                            <InfoOutlinedIcon color="disabled" />
                        </Tooltip>
                    </item></Grid>
                </Grid>
                <div className="parameterTitle">Suhu Slurry</div>
                <div className="nilaiParameter">
                    <span className="Data">33.25 C</span>
                </div>
                <div><span className="tanggal">5 November 2021</span></div>
                <span className="waktu">12.00</span>
            </div> 
            <div className="parameterItem">
                <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                        <item>
                            <Chip icon={<WarningAmberIcon color="warning"/>} label="Warning" color="warning" />
                        </item></Grid>
                        <Grid item>
                        <item>
                            <Tooltip title={<div>
                                                <div>6.8 - 7 : Normal</div>
                                            </div>}>
                                <InfoOutlinedIcon color="disabled" />
                            </Tooltip>
                        </item></Grid>
                    </Grid>
                <span className="parameterTitle">pH Slurry</span>
                <div className="nilaiParameter">
                    <span className="Data">7.1</span>
                </div>
                <div><span className="tanggal">5 November 2021</span></div>
                <span className="waktu">12.00</span>
            </div> 
            <div className="parameterItem">
                <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                        <item>
                            <Chip icon={<WarningAmberIcon color="warning"/>} label="Warning" color="#FFFF00" />
                        </item></Grid>
                        <Grid item>
                        <item>
                            <Tooltip title={<div>
                                                <div> 0 - 2.8 KPa : Normal</div>
                                            </div>}>
                                <InfoOutlinedIcon color="disabled" />
                            </Tooltip>
                        </item></Grid>
                    </Grid>
                <span className="parameterTitle">Tekanan Gas</span>
                <div className="nilaiParameter">
                    <span className="Data">75 KPa</span>
                </div>
                <div><span className="tanggal">5 November 2021</span></div>
                <span className="waktu">12.00</span>
            </div> 
        </div>
    )
}
