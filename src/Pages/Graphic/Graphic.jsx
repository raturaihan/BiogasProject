import Chart from "../../components/chart/Chart"
import Parameterinfo from "../../components/parameterinfo/Parameterinfo"
import styled from 'styled-components'
import Nav from '../../components/navbar/index'

const Graphic=()=>{
    return (
        <div>
            <Nav />
            <Graphics>
                <Parameterinfo responsive="scroll"/>
                <Chart />
            </Graphics>
        </div>
    )
}

const Graphics = styled.div`
    flex:4
`;

export default Graphic;