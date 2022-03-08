import styled from "styled-components";
import Button from "@material-ui/core/Button";

export default styled(Button)`
  && {
    position: absolute;
    right: 15px;
    border-radius: 20px;
    background-color: white;
    border: none;
    @media (max-width: 767px){
      display: none;
  }
  }
`;
