import React from 'react';
import 'date-fns';
import { Card, CardHeader, TextField, MenuItem, CardContent } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles';

const empTypes = [
    {
        value: 'fullTime',
        label: 'Full time',
    },
    {
        value: 'contract',
        label: 'Contractor',
    }
];

const locations = [
	{
		value: 'la',
		label: 'Location A',
	},
	{
		value: 'lb',
		label: 'Location B',
	},
	{
		value: 'lc',
		label: 'Location C',
	},
];

const useStyles = makeStyles(theme => ({
    menu: {
		width: 200,
	},
	section: {
		marginRight: theme.spacing(1),
		marginBottom: theme.spacing(1),
    },
    textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 200,
	}
}));


export default function PositionDetails(props) {

    const classes = useStyles();
    
    return (
        <Card className={classes.section}>
            <CardHeader title='Position Details' />
            <CardContent>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        margin="normal"
                        id="startDate"
                        label="Planned starting date"
                        format="MM/dd/yyyy"
                        value={props.requisition.date}
                        onChange={props.handleStartDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
                <TextField
                    id="location"
                    select
                    label="Location"
                    className={classes.textField}
                    value={props.requisition.location}
                    onChange={props.handleLocationChange}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    margin="normal"
                >
                    {locations.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    id="posType"
                    select
                    label="Position Type"
                    className={classes.textField}
                    value={props.position.positionType}
                    onChange={props.handlePositionChange}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    margin="normal"
                >
                    {empTypes.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    id="jobTitle"
                    label="Job Title"
                    value={props.position.jobTitle}
                    onChange={props.handleJobTitleChange}
                    type="text"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                />
            </CardContent>
        </Card>
    );
}