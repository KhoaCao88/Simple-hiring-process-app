import React from 'react';
// import SubmitApplication from './components/SubmitApplication';
import PositionPanel from '../../components/PositionPanel';
import RequesterPanel from '../../components/RequesterPanel';
import QualificationPanel from '../../components/QualificationPanel'
import { ExpansionPanel, Typography, Grid, Button, ExpansionPanelSummary, ExpansionPanelDetails} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ActionButtonSection from '../../components/ActionButtonSection';


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
											disabled={false}
											/>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <PositionPanel  requisition             	=   {props.requisition} 
                                            position                	=   {props.position}
                                            handleStartDateChange   	=   {props.handleStartDateChange}
                                            handleLocationChange    	=   {props.handleLocationChange}
                                            handlePositionChange    	=   {props.handlePositionChange}
                                            handleJobTitleChange    	=   {props.handleJobTitleChange} 
											disabled={false}
											/>
                        </Grid>
                        <Grid item xs={12}>
                            <QualificationPanel qualification			=	{props.qualification}
												handleEducationSelect	=	{props.handleEducationSelect} 
												handleSkillSelect		=	{props.handleSkillSelect}
												handleExperienceSelect	=	{props.handleExperienceSelect}
												disabled={false}
											/>
                        </Grid>
                    </Grid>
				</ExpansionPanelDetails>
			</ExpansionPanel>

			<ActionButtonSection 	handleSubmitClick 	=	{props.handleSubmitClick}
									handleSaveClick		=	{props.handleSaveClick}
									handleCancelClick	=	{props.handleCancelClick}
			/>
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
			position: {value: { positionType: "", replacement:{} }},
			requisition: {value: { empType: "", department: "", location: "" }},
			qualification: {value: {educations:[], skills:[], experience: ""}},
			isNewPosition: false
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
		this.handleExperienceSelect		= 	this.handleExperienceSelect.bind(this);
	}

	handleEducationSelect(checked){
		const qualification = this.state.qualification;
		let educations = qualification.value.educations.slice();
		educations = checked;
		qualification.value.educations = educations;
		this.setState({
			qualification: qualification
		})
		
	}

	handleSkillSelect(checked){
		const qualification = this.state.qualification;
		qualification.value.skills = checked;
		this.setState({
			qualification: qualification
		})
	}

	handleExperienceSelect(checked){
		console.log("exp: ", checked);
		const qualification = this.state.qualification;
		qualification.value.experience = checked;
		this.setState({
			qualification: qualification
		})
	}

    handleEmpTypeChange(event) {
		const requisition = this.state.requisition;
		requisition.value.empType = event.target.value;
		this.setState(
			{ requisition: requisition }
		)
	}

	handleDepartmentChange(event) {
		const requisition = this.state.requisition;
		requisition.value.department = event.target.value;
		this.setState(
			{ requisition: requisition }
		)
	}

	handleLocationChange(event) {
		const requisition = this.state.requisition;
		requisition.value.location = event.target.value;
		this.setState(
			{ requisition: requisition }
		)
	}

	handlePositionChange(event) {
		const position = this.state.position;
		position.value.positionType = event.target.value;
		this.setState(
			{ position: position }
		)
	}

	handleEmpNumChange(event) {
		const requisition = this.state.requisition;
		requisition.value.empNum = event.target.value;
		this.setState(
			{ requisition: requisition }
		)
	}

	handleRequesterChange(event) {
		const requisition = this.state.requisition;
		requisition.value.requester = event.target.value;
		this.setState(
			{ requisition: requisition }
		)
	}

	handleJobTitleChange(event) {
		const position = this.state.position;
		position.value.jobTitle = event.target.value;
		this.setState(
			{ position: position }
		)
	}

	handleStartDateChange(date) {
		const requisition = this.state.requisition;
		requisition.value.date = date || null;
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
		console.log("qualification: ", this.state.qualification);
		const requisition = this.state.requisition;
		const qualification = this.state.qualification;
		const position = this.state.position;
		requisition.value = JSON.stringify(requisition.value);
		qualification.value = JSON.stringify(qualification.value);
		position.value = JSON.stringify(position.value);

		fetch(`${window.location.protocol + '//' + window.location.host}/rest/task/${this.state.taskId}/complete`, {
			method: 'POST',
			body: JSON.stringify({
				"variables": {
					"requisition": requisition,
					"position": position,
					"qualification": qualification,
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

	handleSaveClick() {
		const requisition = this.state.requisition;
		const qualification = this.state.qualification;
		const position = this.state.position;
		requisition.value = JSON.stringify(requisition.value);
		qualification.value = JSON.stringify(qualification.value);
		position.value = JSON.stringify(position.value);
		fetch(`${window.location.protocol + '//' + window.location.host}/rest/task/${this.state.taskId}/localVariables`, {
			method: 'POST',
			body: JSON.stringify({
				"modifications": {
					"requisition": requisition,
					"position": position,
					"qualification": qualification
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
					const requisition = result.requisition ? result.requisition : {value: { empType: "", department: "", location: "" }};
					console.log("After parsing requisition: ", requisition);
					const position = result.position ? result.position : {value:{ positionType: "", replacement: {} }};
					console.log("After parsing position: ", position);
					const qualification = result.qualification ? result.qualification : {value: {educations:[], skills:[], experience: "l0"}};

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
        return(
			(this.state.isLoaded)?
					<SubmitApplicationHook  requisition				=	{this.state.requisition.value}
											position				=	{this.state.position.value}
											qualification			=	{this.state.qualification.value}

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
											handleIsNewPositionClick=	{this.handleIsNewPositionClick}
					/>
			:<div>Loading....</div>
        );
    }
}