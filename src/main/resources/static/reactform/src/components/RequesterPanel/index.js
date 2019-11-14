import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent, TextField, MenuItem } from '@material-ui/core';
import LookupDataService from '../../services/LookupDataService';

const lookupDataService = new LookupDataService();
const empTypes = lookupDataService.fetchEmploymentType();
let isLoaded = false;

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

    const [departments, setDepartments] = React.useState([]);
    const classes = useStyles();
    if(!isLoaded){
        lookupDataService.fetchDepartment(setDepartments);
        isLoaded = true;
    }

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
                    disabled={props.disabled}
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
                    disabled={props.disabled}
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
                    disabled={props.disabled}
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
                    disabled={props.disabled}
                />

            </CardContent>
        </Card>
    );
}