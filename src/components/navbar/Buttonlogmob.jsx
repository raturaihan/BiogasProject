import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";

export default styled(IconButton)`
  && {
    position: absolute;
    right: 15px;
    border-radius: 25px;
    background-color: white;
    border: none;
    display: block;
    @media (min-width: 768px){
        display: none;
    }
  }
`;