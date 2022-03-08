import styled from "styled-components";
import {Chip} from "@material-ui/core"

export default styled(Chip)`
  && {
    position: absolute;
    border-radius: 15px;
    background-color: #FFFAA0;
    font-weight: bold;
    border: none;
    @media (max-width: 767px){
      display: none;
  }
  }
`;