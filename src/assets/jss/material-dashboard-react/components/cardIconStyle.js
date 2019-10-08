import {
  warningCardHeader1,
  successCardHeader1,
  dangerCardHeader1,
  infoCardHeader1,
  warningCardHeader,
  successCardHeader,
  dangerCardHeader,
  infoCardHeader,
  primaryCardHeader,
  roseCardHeader,
  grayColor
} from "assets/jss/material-dashboard-react.js";

const cardIconStyle = {
  cardIcon: {
    "&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader": {
      borderRadius: "3px",
      backgroundColor: "transparent",
      padding: "0px",
      marginTop: "5px",
      float: "left",
    }
  },
  warningCardHeader,
  successCardHeader,
  dangerCardHeader,
  infoCardHeader,
  warningCardHeader1,
  successCardHeader1,
  dangerCardHeader1,
  infoCardHeader1,
  primaryCardHeader,
  roseCardHeader
};

export default cardIconStyle;
