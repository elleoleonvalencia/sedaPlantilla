import React, { useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
// @material-ui/icons
import LocationOnIcon from '@material-ui/icons/LocationOn';
// core components

import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";
import { async } from "q";

import cubejs from '@cubejs-client/core';

const useStyles = makeStyles(styles);

const API_URL = "http://192.168.0.10:4000"; // change to your actual endpoint

const cubejsApi = cubejs(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NjUxODE0NjMsImV4cCI6MTU2NTI2Nzg2M30.r3FYOTFyahrqGyE_BWF0HXeXlrDP8YDtWhWTRtehU0I",
  { apiUrl: API_URL + "/cubejs-api/v1" }
);

export default function AdminNavbarLinks(props) {
  const classes = useStyles(props);

  const [provinciaName, setProvinciaName] = React.useState([]);
  const [municipioName, setMunicipioName] = React.useState([]);


  const [municipioLista, setMunicipioLista] = React.useState([]);
  const [provinciaLista, setProvinciaLista] = React.useState([]);

  useEffect(

    () => {

      async function asyncrona() {

        const provincias = await cubejsApi.load({
          "measures": [],
          "timeDimensions": [],
          "dimensions": [
            "SymAgricUrbanaPoint.provincia"
          ],
          "filters": []
        })
        var auxp = []
        provincias["loadResponse"]["data"].map((prov) =>
          auxp.push(prov["SymAgricUrbanaPoint.provincia"])
        )
        await setProvinciaLista(auxp);

        const municipios = await cubejsApi.load({
          "measures": [],
          "timeDimensions": [],
          "dimensions": [
            "SymAgricUrbanaPoint.municipio"
          ],
          "filters": []
        })
        var auxm = []
        municipios["loadResponse"]["data"].map((mun) =>
          auxm.push(mun["SymAgricUrbanaPoint.municipio"])
        )
        await setMunicipioLista(auxm);

      }

      asyncrona();

    },

    []

  )

  const handleChangeP = event => {
    setProvinciaName(event.target.value);
  };

  const handleChangeM = event => {
    setMunicipioName(event.target.value);
  };

  return (
    <div>
      <div className={classes.manager}>
        <Select
          className={classes.select_link}
          multiple
          value={provinciaName}
          onChange={handleChangeP}
          displayEmpty
          input={<Input id="select-multiple" />}
          renderValue={selected => {
            if (selected.length === 0) {
              return <span><LocationOnIcon className={classes.icons} style={{ fontSize: 16 }} /> Provincia</span>;
            }
            return selected.join(', ');
          }}
        >
          <MenuItem value='' disabled className={classes.dropdownItem}>
            <LocationOnIcon className={classes.icons} style={{ fontSize: 16 }} /> Provincia
          </MenuItem>
          {provinciaLista.map(name => (
            <MenuItem key={name} value={name} className={classes.dropdownItem}>
              {name}
            </MenuItem>
          ))}
        </Select>
        <Select
          className={classes.select_link}
          multiple
          value={municipioName}
          onChange={handleChangeM}
          displayEmpty
          input={<Input id="select-multiple1" />}
          renderValue={selected => {
            if (selected.length === 0) {
              return <span><LocationOnIcon className={classes.icons} style={{ fontSize: 16 }} /> Municipio</span>;
            }
            return selected.join(', ');
          }}
        >
          <MenuItem value='' disabled className={classes.dropdownItem}>
            <LocationOnIcon className={classes.icons} style={{ fontSize: 16 }} /> Municipio
          </MenuItem>
          {municipioLista.map(name => (
            <MenuItem key={name} value={name} className={classes.dropdownItem}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </div>
    </div>
  );
}
