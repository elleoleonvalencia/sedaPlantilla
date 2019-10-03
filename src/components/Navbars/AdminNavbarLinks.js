import React from "react";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
// @material-ui/icons
import LocationOnIcon from '@material-ui/icons/LocationOn';
// core components

import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);
const provincia = [
  'Villa Clara',
];
const municipio = [
  'Santa Clara',
  'Remedios',
  'Camajuaní',
  'Placetas',
  'Sagua La Grande',
  'Cifuentes',
  'Corralillo',
  'Caibarién',
];
export default function AdminNavbarLinks(props) {
  const classes = useStyles(props);

  const [provinciaName, setProvinciaName] = React.useState([]);
  const [municipioName, setMunicipioName] = React.useState([]);

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
          <MenuItem value='' disabled>
            <LocationOnIcon className={classes.icons} style={{ fontSize: 16 }} /> Provincia
          </MenuItem>
          {provincia.map(name => (
            <MenuItem key={name} value={name}>
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
          <MenuItem value='' disabled>
            <LocationOnIcon className={classes.icons} style={{ fontSize: 16 }} /> Municipio
          </MenuItem>
          {municipio.map(name => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </div>
    </div>
  );
}
