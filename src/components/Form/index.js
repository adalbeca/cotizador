import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: '',
            year: '',
            plan: ''
        };
    }

    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };


    cotizarSeguro = (e) => {
        e.preventDefault();
        const infoAuto = {
            brand: this.state.brand,
            year: this.state.year,
            plan: this.state.plan,
        };
        alert(this.state.brand + this.state.year + this.state.plan);
    };

    render() {
        let start_y = 1990;
        const today = new Date();
        const end_y = today.getFullYear();
        const fillRange = (start, end) => {
            return [...Array(end - start + 1)].map((item, index) => start + index);
        };
        const array_years = fillRange(start_y, end_y);

        const brands = [
            {brand: "Americano"},
            {brand: "Europeo"},
            {brand: "Asiatico"},
        ];
        return (
            <div className="container">
                <div className="d-flex align-items-center flex-column justify-content-center">
                    <form className="width-90" onSubmit={ this.cotizarSeguro }>
                        <div className="width-90 row">
                            <div className="col-lg-4 col-12 d-flex justify-content-center">
                                <TextField
                                    id="select-marca"
                                    name="brand"
                                    select
                                    label="Select"
                                    helperText="Select your brand"
                                    margin="normal"
                                    value={this.state.brand}
                                    onChange={this.handleChange('brand')}
                                >
                                    {
                                        Object.keys(brands).map(key => (
                                            <MenuItem key={key} value={brands[key].brand}>
                                                {brands[key].brand}
                                            </MenuItem>
                                        ))
                                    }
                                </TextField>
                            </div>
                            <div className="col-12 col-lg-4 d-flex justify-content-center">
                                <TextField
                                    id="select-year"
                                    select
                                    label="Choose Year"
                                    helperText="Please select your Year"
                                    margin="normal"
                                    value={this.state.year}
                                    onChange={this.handleChange('year')}
                                >
                                    {
                                        array_years.map((item, key) => {
                                            return (<MenuItem key={key} value={array_years[key]}>
                                                {array_years[key]}
                                            </MenuItem>)
                                        })
                                    }
                                </TextField>
                            </div>
                            <div className="col-12 col-lg-4 d-flex justify-content-center">
                                <FormControl component="fieldset" className="">
                                    <RadioGroup
                                        aria-label="gender"
                                        name="gender2"
                                        className=""
                                        value={this.state.plan}
                                        onChange={this.handleChange('plan')}
                                    >
                                        <FormControlLabel
                                            value="basico"
                                            control={<Radio color="primary"/>}
                                            label="Plan Básico"
                                            labelPlacement="start"
                                        />
                                        <FormControlLabel
                                            value="completo"
                                            control={<Radio color="primary"/>}
                                            label="Plan Completo"
                                            labelPlacement="start"
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                        </div>
                        <div className="width-90 row justify-content-center">
                            <button className="btn btn-primary">Cotizar</button>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}

export default Form;