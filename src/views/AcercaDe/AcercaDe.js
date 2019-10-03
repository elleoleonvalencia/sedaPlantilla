import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "components/Card/Card.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";

import avatar from "assets/img/reactlogo.png";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function AcercaDe() {
  const classes = useStyles();
  return (
    <div>
          <Card profile>
            <CardAvatar profile>
              <a href="/admin/dashboard" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>Versión 1.0</h6>
              <h2 className={classes.cardTitle}>SedA | Sistema Estadístico para la toma de Decisiones de la Agricultura</h2>
              <h4 className={classes.cardTitle}>Desarrollado X Grupo Geomática ENPA UEB VC 2019</h4>
            </CardBody>
          </Card>  
    </div>
  );
}
