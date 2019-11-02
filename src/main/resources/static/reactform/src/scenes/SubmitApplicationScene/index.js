import React from 'react';
// import SubmitApplication from './components/SubmitApplication';
import PositionPanel from '../../components/PositionPanel';
import RequesterPanel from '../../components/RequesterPanel';
import QualificationPanel from '../../components/QualificationPanel'
import { ExpansionPanel, Typography, Grid, Button, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightBold,
	},
	label: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1)
	},
	button: {
		margin: theme.spacing(1),
	},
}));

function SubmitApplicationHook(props) {

	const classes = useStyles();
	return (
		<div>
			<ExpansionPanel expanded>
				<ExpansionPanelSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header">
				<Typography className={classes.heading}> Create Position Requisition </Typography>
                </ExpansionPanelSummary>
				<ExpansionPanelDetails>
                    <Grid container>
                        <Grid item xs={12}>
							<Typography className={classes.label}>Requisition Number: {props.requisition.reqNum}</Typography>
						</Grid>
                        <Grid item xs={12} lg={6}>
                            <RequesterPanel requisition             	=   {props.requisition} 
                                            handleRequesterChange   	=   {props.handleRequesterChange}
                                            handleEmpTypeChange     	=   {props.handleEmpTypeChange}
                                            handleDepartmentChange  	=   {props.handleDepartmentChange}
                                            handleEmpNumChange      	=   {props.handleEmpNumChange} 
											/>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <PositionPanel  requisition             	=   {props.requisition} 
                                            position                	=   {props.position}
                                            handleStartDateChange   	=   {props.handleStartDateChange}
                                            handleLocationChange    	=   {props.handleLocationChange}
                                            handlePositionChange    	=   {props.handlePositionChange}
                                            handleJobTitleChange    	=   {props.handleJobTitleChange} 
											/>
                        </Grid>
                        <Grid item xs={12}>
                            <QualificationPanel qualification			=	{props.qualification}
												handleEducationSelect	=	{props.handleEducationSelect} 
												handleSkillSelect		=	{props.handleSkillSelect}
												handleExperienceSelect	=	{props.handleExperienceSelect}
											/>
                        </Grid>
                    </Grid>
				</ExpansionPanelDetails>
			</ExpansionPanel>

			<Grid container justify="center">
				<Grid item>
					<Button
						variant="contained"
						color="primary"
						className={classes.button}
						onClick={props.handleSubmitClick}
						startIcon={<CheckIcon></CheckIcon>}>
						Submit
					</Button>
					<Button
						variant="contained"
						color="default"
						className={classes.button}
						startIcon={<SaveIcon></SaveIcon>}
						onClick={props.handleSaveClick}
					>
						Save
					</Button>
					<Button
						variant="contained"
						color="default"
						className={classes.button}
						startIcon={<CancelIcon></CancelIcon>}
						onClick={props.handleCancelClick}
					>
						Cancel
					</Button>
				</Grid>
			</Grid>
		</div>
	);
}

export default class SubmitApplicationScene extends React.Component{
    
    constructor(props){
        super(props)
        console.log("props: ", props);
		this.backUrl = props.backUrl;
        this.state = {
            taskId: props.taskId,
			isLoaded: false,
			position: { positionType: "" },
			requisition: { empType: "", department: "", location: "" },
			qualification: {educations:[], skills:[], experience: ""}
        };

        this.handleEmpTypeChange 		= 	this.handleEmpTypeChange.bind(this);
		this.handleDepartmentChange 	= 	this.handleDepartmentChange.bind(this);
		this.handleLocationChange 		= 	this.handleLocationChange.bind(this);
		this.handlePositionChange 		= 	this.handlePositionChange.bind(this);
		this.handleSubmitClick 			= 	this.handleSubmitClick.bind(this);
		this.handleEmpNumChange 		= 	this.handleEmpNumChange.bind(this);
		this.handleRequesterChange 		= 	this.handleRequesterChange.bind(this);
		this.handleJobTitleChange 		= 	this.handleJobTitleChange.bind(this);
		this.handleStartDateChange 		= 	this.handleStartDateChange.bind(this);
		this.handleCancelClick 			= 	this.handleCancelClick.bind(this);
		this.handleSaveClick 			= 	this.handleSaveClick.bind(this);
		this.handleSubmitClick 			= 	this.handleSubmitClick.bind(this);
		this.handleEducationSelect 		= 	this.handleEducationSelect.bind(this);
		this.handleSkillSelect 			= 	this.handleSkillSelect.bind(this);
		this.handleExperienceSelect		= 	this.handleExperienceSelect.bind(this)
    }

	handleEducationSelect(checked){
		const qualification = this.state.qualification;
		let educations = qualification.educations.slice();
		educations = checked;
		qualification.educations = educations;
		this.setState({
			qualification: qualification
		})
		
	}

	handleSkillSelect(checked){
		const qualification = this.state.qualification;
		let skills = qualification.skills.slice();
		skills = checked;
		qualification.skills = skills;
		this.setState({
			qualification: qualification
		})
	}

	handleExperienceSelect(checked){

	}

    handleEmpTypeChange(event) {
		const requisition = this.state.requisition;
		requisition.empType = event.target.value;
		this.setState(
			{ requisition: requisition }
		)
	}

	handleDepartmentChange(event) {
		const requisition = this.state.requisition;
		requisition.department = event.target.value;
		this.setState(
			{ requisition: requisition }
		)
	}

	handleLocationChange(event) {
		const requisition = this.state.requisition;
		requisition.location = event.target.value;
		this.setState(
			{ requisition: requisition }
		)
	}

	handlePositionChange(event) {
		const position = this.state.position;
		position.positionType = event.target.value;
		this.setState(
			{ position: position }
		)
	}

	handleEmpNumChange(event) {
		const requisition = this.state.requisition;
		requisition.empNum = event.target.value;
		this.setState(
			{ requisition: requisition }
		)
	}

	handleRequesterChange(event) {
		const requisition = this.state.requisition;
		requisition.requester = event.target.value;
		this.setState(
			{ requisition: requisition }
		)
	}

	handleJobTitleChange(event) {
		const position = this.state.position;
		position.jobTitle = event.target.value;
		this.setState(
			{ position: position }
		)
	}

	handleStartDateChange(date) {
		const requisition = this.state.requisition;
		requisition.date = date || null;
		this.setState(
			{ requisition: requisition }
		)
	};

	handleCancelClick() {
		window.location.replace(this.backUrl)
	}

	handleSubmitClick(event) {
		console.log("requisition: ", this.state.requisition);
		console.log("position: ", this.state.position);
		console.log("position: ", this.state.qualification);
	}

	handleSaveClick() {
		fetch(`${window.location.protocol + '//' + window.location.host}/rest/task/${this.state.taskId}/localVariables`, {
			method: 'POST',
			body: JSON.stringify({
				"modifications": {
					"requisition": { "value": JSON.stringify(this.state.requisition), "type": "String", "valueInfo": { "objectTypeName": "Requisition", "serializationDataFormat": "JSON" } },
					"position": { "value": JSON.stringify(this.state.position), "type": "String", "valueInfo": { "objectTypeName": "Position", "serializationDataFormat": "JSON" } },
					"qualification": {"value": JSON.stringify(this.state.qualification), "type": "String", "valueInfo": { "objectTypeName": "Position", "serializationDataFormat": "JSON"} }
				}
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		})
			.then(data => {
				if (data.status === 204) {
					alert("save successfully")
					window.location.replace(this.backUrl);
				} else {
					alert("error");
					console.log(data);
				}
			})
	}

	componentDidMount() {
		fetch(`${window.location.protocol + '//' + window.location.host}/rest/task/${this.state.taskId}/variables`)
			.then(res => res.json())
			.then(
				(result) => {
					console.log("result: ", result);
					const requisition = result.requisition ? JSON.parse(result.requisition.value) : {};
					console.log("After parsing requisition: ", requisition);
					const position = result.position ? JSON.parse(result.position.value) : {};
					console.log("After parsing position: ", position);
					const qualification = result.qualification ? JSON.parse(result.qualification.value) : {};
					console.log("After parsing qualification: ", qualification);
					this.setState({
						isLoaded: true,
						requisition: requisition,
						position: position,
						qualification: qualification
					});
				},
				(error) => {
					this.setState({
						isLoaded: true,
						error
					});
					console.log("Error: ", error);

				}
			)
	}

    render(){
		if(this.state.isLoaded){

		}
        return(
			(this.state.isLoaded)?
					<SubmitApplicationHook  requisition				=	{this.state.requisition}
											position				=	{this.state.position}
											qualification			=	{this.state.qualification}

											handleEmpTypeChange		=	{this.handleEmpTypeChange}
											handleDepartmentChange	=	{this.handleDepartmentChange}
											handleLocationChange	=	{this.handleLocationChange}
											handlePositionChange	=	{this.handlePositionChange}
											handleEmpNumChange		=	{this.handleEmpNumChange}
											handleJobTitleChange	=	{this.handleJobTitleChange}
											handleStartDateChange	=	{this.handleStartDateChange}
											handleRequesterChange	=	{this.handleRequesterChange}
											handleCancelClick		=	{this.handleCancelClick}
											handleSaveClick			=	{this.handleSaveClick}
											handleSubmitClick		=	{this.handleSubmitClick}
											handleEducationSelect	= 	{this.handleEducationSelect}
											handleSkillSelect		= 	{this.handleSkillSelect}
											handleExperienceSelect	= 	{this.handleExperienceSelect}
					/>
			:<div>Loading....</div>
        );
    }
}