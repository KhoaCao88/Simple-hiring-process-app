export default class LookupDataService{
    
    constructor(){
        this.url = `${window.location.protocol + '//' + window.location.host}`;
    }

    fetchLookupData(type, callback){
        fetch(`${this.url}/appRest/${type}`, {
            method: 'GET',
        })
        .then(resp => resp.json())
        .then(
            
            (result) => {
                console.log("Educations: ", result)
                if(callback){
                    callback(result);
                }
            },

            (error) => {
                console.log(error);
                return [{value:"", label:"Error when fetching data"}];
            }
        );
    }

    fetchEducations(callback){
        this.fetchLookupData('educations', callback);
    }

    fetchSkills(callback){
        this.fetchLookupData('skills', callback);
    }

    fetchExperience(callback){
        this.fetchLookupData('experience', callback);
    }

    fetchDepartment(callback){
        this.fetchLookupData('departments', callback);
    }

    fetchLocation(callback){
        this.fetchLookupData('locations', callback);
    }

    fetchPositionType(){
        return [
            {
                value: "n",
                label: "New"
            },
            {
                value: "e",
                label: "Existing"
            },
        ]
    }

    fetchEmploymentType(){
        return [
            {
                value: "fullTime",
                label: "Full-Time"
            },
            {
                value: "partTime",
                label: "PartTime"
            },
            {
                value: "contract",
                label: "Contract"
            },
        ]
    }
}