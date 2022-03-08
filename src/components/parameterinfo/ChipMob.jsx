import styled from "styled-components";
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

export default styled(WarningAmberIcon)`
  && {
    position: absolute;
    margin-top: 7px;
    color: orange;
    border: none;
    @media (min-width: 768px){
      display: none;
  }
  }
`;