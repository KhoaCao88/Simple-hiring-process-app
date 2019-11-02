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
                value: "junior",
                label: "Junior ( < 3 years)"
            },
            {
                value: "intermediate",
                label: "Intermediate (4 - 6 years)"
            },
            {
                value: "senior",
                label: "Senior (7 - 10 years)"
            },
            {
                value: "expert",
                label: "Expert (> 10 years)"
            },
        ];
    }
}