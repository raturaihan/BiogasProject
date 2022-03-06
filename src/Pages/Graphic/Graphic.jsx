import Chart from "../../components/chart/Chart"
import Parameterinfo from "../../components/parameterinfo/Parameterinfo"
import styled from 'styled-components'
import Nav from '../../components/navbar/index'
import axios from 'axios'
import { useEffect, useState } from 'react'



const Graphic=()=>{
    const state=localStorage.getItem('dev_id');
    console.log(state);
    console.log('tes masuk graphic')

    const [isFetched, setIsFetched] = useState(false);

    const [dataParameter, setDataParameter] = useState([]);

    // call api to get most recent datas
    useEffect(()=>{
        if(!isFetched) {
        axios.post('https://ehy3b0lyhk.execute-api.us-east-1.amazonaws.com/release/recentbiogas', JSON.stringify({
        "device_id": state
        }))
        .then((res)=>{
            console.log(res.data);
            console.log(res.data[0].device_data.time.slice(11,16));
            console.log("test");
            setDataParameter(res.data);
            setIsFetched(true);
        })
        .catch((err)=>{
            console.log(err.response.data);
        })
        }
    },[isFetched,state]);
    

    return (
        <div>
            <Nav />
            <Graphics>
                {dataParameter.length !==0 ? <Parameterinfo data={dataParameter} responsive="scroll"/> : null}
                {dataParameter.length !==0 ? <Chart data={dataParameter} /> : null}
            </Graphics>
        </div>
    )
}

const Graphics = styled.div`
    flex:4
`;

export default Graphic;