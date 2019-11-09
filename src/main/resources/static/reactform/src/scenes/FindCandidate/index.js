import React from 'react';
import { Card, CardContent, ExpansionPanel, Grid, TextField, Table, TableHead, TableRow, TableBody, Button, TableCell, ExpansionPanelSummary, Typography, ExpansionPanelDetails, CardHeader, IconButton } from '@material-ui/core';
import QualificationPanel from '../../components/QualificationPanel';
import MutipleSelectionList from '../../components/MutipleSelectionList';
import LookupDataService from '../../services/LookupDataService';
import SingleSelectionList from '../../components/SingleSelectionList';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';

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

const lookupDataService = new LookupDataService();
const educations = lookupDataService.fetchEducations();
const skills = lookupDataService.fetchSkills();
const experience = lookupDataService.fetchExperience();

function FindCandidateHook(props){

    const classes = useStyles();
    return(
        <ExpansionPanel expanded>
            <ExpansionPanelSummary>
                <Typography>Find candidates</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Grid container>
                    <Grid item xs={12}>
                        <Card>
                            <CardHeader title="Review Position"/>
                            <CardContent>
                                <TextField 
                                    id="jobTitle"
                                    value={props.position.jobTitle}
                                    disabled={true}
                                />
                                <TextField 
                                    id="posType"
                                    value={props.position.positionType}
                                    disabled={true}
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <QualificationPanel qualification={props.qualification}
                                            disabled={true}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Education</TableCell>
                                    <TableCell>Skill</TableCell>
                                    <TableCell>Experience</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    props.candidates.map((candidate, index) => (
                                        <TableRow>
                                            <TableCell>
                                                <TextField value={candidate.name}
                                                    onChange={(event) => (props.handleNameChange(event, index))}
                                                >

                                                </TextField>
                                            </TableCell>
                                            <TableCell>
                                                <MutipleSelectionList disabled={false} list={educations} 
                                                                                        selectedValues={candidate.qualification.educations} 
                                                                                        handleItemSelect={props.handleEducationSelect}
                                                                                        otherInputs={[index]}
                                                                                    />
                                            </TableCell>
                                            <TableCell>
                                                <MutipleSelectionList disabled={false} list={skills} 
                                                                                        selectedValues={candidate.qualification.skills} 
                                                                                        handleItemSelect={props.handleSkillSelect}
                                                                                        otherInputs={[index]}
                                                                                    />
                                            </TableCell>
                                            <TableCell>
                                                <SingleSelectionList disabled={false} list={experience} 
                                                                                        selectedValues={candidate.qualification.experience} 
                                                                                        handleItemSelect={props.handleExperienceSelect}
                                                                                        otherInputs={[index]}
                                                                                        />
                                            </TableCell>
                                            <TableCell>
                                                <IconButton aria-label="delete" onClick={() => (props.handleDeleteRow(index))}>
                                                    <DeleteIcon fontSize="small" />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            onClick={props.handleAddCandidate}
                            startIcon={<AddIcon></AddIcon>}>
                            Add candidate
                        </Button> 
                    </Grid>
                </Grid>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
}

export default class FindCandidate extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            taskId: props.taskId,
            isLoaded: false,
            candidates: {value: [{name: "", qualification:{educations:[], skills:[], experience:""}}]},
            qualification: {value: {educations:[], skills:[], experience: ""}},
            position: {value:{jobTitle:"test", posType:"test"}}
        }
        this.handleAddCandidate = this.handleAddCandidate.bind(this);
        this.handleEducationSelect = this.handleEducationSelect.bind(this);
        this.handleSkillSelect = this.handleSkillSelect.bind(this);
        this.handleExperienceSelect = this.handleExperienceSelect.bind(this);
        this.handleDeleteRow = this.handleDeleteRow.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(event, index){
        console.log(event, index)
        const newVal = event.target.value;
        const candidates = this.state.candidates.value.slice();
        candidates[index].name = newVal;
        this.setState({
            candidates: {value: candidates}
        })
    }

    handleEducationSelect(checked, ...others){
        const index = others[0];
        const candidates = this.state.candidates.value.slice();
        candidates[index].qualification.educations = checked;
        console.log("candidates: ", candidates)
        this.setState(
            {
                candidates: {value: candidates}
            }
        )
    }

    handleDeleteRow(index){
        const candidates = this.state.candidates.value.slice();
        candidates.splice(index, 1)
        this.setState(
            {candidates:{value: candidates}}
        )
    }

    handleSkillSelect(checked, ...others){
        const index = others[0];
        const candidates = this.state.candidates.value.slice();
        candidates[index].qualification.skills = checked;
        this.setState(
            {
                candidates: {value: candidates}
            }
        )
    }

    handleExperienceSelect(checked, ...others){
        const index = others[0];
        const candidates = this.state.candidates.value.slice();
        candidates[index].qualification.experience = checked;
        this.setState(
            {
                candidates: {value: candidates}
            }
        )
    }

    handleAddCandidate(){
        const candidateValues = this.state.candidates.value.slice();
        candidateValues.push(
            {name: "", qualification:{educations:[], skills:[], experience:""}}
        )
        this.setState(
            {
                candidates:{
                    value: candidateValues
                }
            }
        )
    }

    componentDidMount(){
        const host = `${window.location.protocol + '//' + window.location.host}`;
		fetch(`${host}/rest/task/${this.state.taskId}/variables`)
			.then(res => res.text())
			.then(
				(result) => {
					const position = result.position ? result.position : {value:{ positionType: "", replacement: {} }};
					console.log("After parsing position: ", position);
					const qualification = result.qualification ? result.qualification : {value: {educations:[], skills:[], experience: ""}};
                    console.log("After parsing qualification: ", qualification);

					this.setState({
						isLoaded: true,
						position: position,
						qualification: qualification
					});
				},
				(error) => {
					this.setState({
						isLoaded: false,
						error
					});
					console.log("Error: ", error);

				}
			)
    }

    render(){
        console.log("find candidate: ", this.state.candidates);
        return(
            this.state.isLoaded?
                <FindCandidateHook  candidates              =   {this.state.candidates.value}
                                    position                =   {this.state.position.value}
                                    qualification           =   {this.state.qualification.value}
                                    handleAddCandidate      =   {this.handleAddCandidate}
                                    handleEducationSelect   =   {this.handleEducationSelect}
                                    handleSkillSelect       =   {this.handleSkillSelect}
                                    handleExperienceSelect  =   {this.handleExperienceSelect}
                                    handleDeleteRow         =   {this.handleDeleteRow}
                                    handleNameChange        =   {this.handleNameChange}
                />:<div>Loading...</div>
        )
    }
}