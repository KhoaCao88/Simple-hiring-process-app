import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent, TextField, MenuItem } from '@material-ui/core';


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

const departments = [
    {
        value: 'IT',
        label: 'IT',
    },
    {
        value: 'HR',
        label: 'HR',
    },
    {
        value: 'sale',
        label: 'Sale',
    },
    {
        value: 'accounting',
        label: 'Accounting',
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


export default function RequesterPanel(props) {

    const classes = useStyles();

    return (
        <Card className={classes.section}>
            <CardHeader title='Request Data' />
            <CardContent>

                <TextField
                    id="requester"
                    label="Hiring Manager"
                    className={classes.textField}
                    value={props.requisition.requester}
                    onChange={props.handleRequesterChange}
                    margin="normal"
                />

                <TextField
                    id="empType"
                    select
                    label="Employment type"
                    className={classes.textField}
                    value={props.requisition.empType}
                    onChange={props.handleEmpTypeChange}
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
                    id="dept"
                    select
                    label="Department"
                    className={classes.textField}
                    value={props.requisition.department}
                    onChange={props.handleDepartmentChange}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    margin="normal"
                >
                    {departments.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    id="empNum"
                    label="Number of employees required"
                    value={props.requisition.empNum}
                    type="number"
                    onChange={props.handleEmpNumChange}
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