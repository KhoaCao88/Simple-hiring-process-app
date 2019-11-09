export default class LookupDataService{
    fetchEducations(){
        return[
            {
                value: "BS",
                label: "Bachelor Of Science (BS)"
            },
            {
                value: "BA",
                label: "Bachelor Of Art (BA)"
            },
            {
                value: "BEng",
                label: "Bachelor Of Engineer (B Eng)"
            },
            {
                value: "BArch",
                label: "Bachelor Of Architect (B Arch)"
            },
        ];
    }

    fetchSkills(){
        return [
            {
                value: "s1",
                label: "Programing"
            },
            {
                value: "s2",
                label: "Design Patterns"
            },
            {
                value: "s3",
                label: "Project Managing"
            },
            {
                value: "s4",
                label: "Business Analysis"
            },
        ];
    }

    fetchExperience(){
        return [
            {
                value: "l0",
                label: "No prior experience"
            },
            {
                value: "l1",
                label: "1-2 years experience"
            },
            {
                value: "l2",
                label: "3-4 years experience"
            },
            {
                value: "l3",
                label: "5-10 years experience"
            },
            {
                value: "l4",
                label: "10+ years experience"
            },
        ];
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

    fetchDepartment(){
        return[
            {
                value: "fin",
                label: "Finance"
            },
            {
                value: "mrk",
                label: "Marketing"
            },
            {
                value: "prd",
                label: "Product Development"
            },
            {
                value: "hr",
                label: "Human Resource"
            },
            {
                value: "sales",
                label: "Sales"
            },
            {
                value: "cssv",
                label: "Customer Service"
            },
            {
                value: "bps",
                label: "Business Partner Service"
            },
            {
                value: "bs",
                label: "Business Strategies"
            },
            {
                value: "se",
                label: "Software Engineering"
            },
        ]
    }

    fetchLocation(){
        return [
            {
                value: "loc1",
                label: "Location 1"
            },
            {
                value: "loc2",
                label: "Location 2"
            },
            {
                value: "loc3",
                label: "Location 3"
            },
            {
                value: "loc4",
                label: "Location 4"
            },
        ]
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
}