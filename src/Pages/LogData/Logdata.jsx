import styled from 'styled-components'
import  InlineDatePickerDemo from "../../components/pilihtanggal/Pilihtanggal"
import Tabel from "../../components/Tabel/Tabel"
import Nav from '../../components/navbar/index'

const Logdata=()=>{
    return (
        <div>
            <Nav />
            <Log>
                <InlineDatePickerDemo />
                <Tabel />
            </Log>
        </div>
    )
 }

 const Log = styled.div`
    flex:4;
 `;

 export default Logdata;