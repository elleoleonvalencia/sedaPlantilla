import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col, Message } from 'antd';
import { Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

class dropdown extends Component {
    state = {
        showGM: true,
        showGD: true
    }

    handleChangeMeasures = async value => {
        if (value.length > 0) {
            this.props.camposMeasures(value)
            await this.setState({ showGM: true })
            this.props.showGrafic(this.state.showGM, this.state.showGD)
        } else {
            //Message.error('Debe seleccionar el valor por el eje Y.', 5);
            await this.setState({ showGM: false })
            this.props.showGrafic(this.state.showGM, this.state.showGD)
        }
    }

    handleChangeDimensions = async value => {
        if (value.length > 0) {
            this.props.camposDimensions(value)
            await this.setState({ showGD: true })
            this.props.showGrafic(this.state.showGM, this.state.showGD)
        } else {
            //Message.error('Debe seleccionar la categoría por el eje X.', 5);
            await this.setState({ showGD: false })
            this.props.showGrafic(this.state.showGM, this.state.showGD)
        }
    }

    handleChangeGrafic = value => {
        this.props.tipoGrafic(value)
    }

    render() {
        return (
            <div>
                <Row>
                    <InputLabel htmlFor="age-simple">Valores (eje Y):</InputLabel>
                    <Select
                        style={{ width: '50%' }}
                        mode='multiple'
                        onChange={this.handleChangeMeasures}
                    >
                        <MenuItem value='SymAgricUrbanaPoint.count'>Cantidad</MenuItem>
                        <MenuItem value='SymAgricUrbanaPoint.areaTotal'>Área</MenuItem>
                    </Select>
                </Row>
                <Row>
                    <br />
                    <InputLabel htmlFor="age-simple">Categorías (eje X):</InputLabel>
                    <Select
                        style={{ width: '50%' }}
                        mode='multiple'
                        onChange={this.handleChangeMeasures}
                    >
                        <MenuItem value="SymAgricUrbanaPoint.nombre">Nombre</MenuItem>
                        <MenuItem value="SymAgricUrbanaPoint.tecnologia">Tecnología</MenuItem>
                        <MenuItem value="SymAgricUrbanaPoint.ministerio">Ministerio</MenuItem>
                        <MenuItem value="SymAgricUrbanaPoint.consejoPopular">Consejo Popular</MenuItem>
                        <MenuItem value="SymAgricUrbanaPoint.provincia">Provincia</MenuItem>
                        <MenuItem value="SymAgricUrbanaPoint.entidad">Entidad</MenuItem>
                        <MenuItem value="SymAgricUrbanaPoint.productor">Productor</MenuItem>
                    </Select>
                </Row>
                <Row>
                </Row>
                <Row>
                    <br />
                    <InputLabel htmlFor="age-simple">Tipo de Gráfico:</InputLabel>
                    <Select
                        style={{ width: '50%' }}
                        mode='multiple'
                        onChange={this.handleChangeMeasures}
                    >
                        <MenuItem value="bar">Gráfico de Barras</MenuItem>
                        <MenuItem value="pie">Gráfico de Pastel</MenuItem>
                        <MenuItem value="line">Gráfico de Líneas</MenuItem>
                        <MenuItem value="area">Gráfico de Área</MenuItem>
                        <MenuItem value="table">Tabla</MenuItem>
                    </Select>
                </Row>
                <Row>
                </Row>
            </div>
        );
    }
}

export default withRouter(dropdown);