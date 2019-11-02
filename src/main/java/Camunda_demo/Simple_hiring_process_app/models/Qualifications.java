package Camunda_demo.Simple_hiring_process_app.models;

import java.io.Serializable;
import java.util.List;

import org.springframework.stereotype.Component;

@Component("Qualification")
public class Qualifications implements Serializable {

	private static final long serialVersionUID = 5243163530506209011L;

	private List<String> skills;
	private List<String> education;
	private List<String> experience;
	
	public List<String> getSkills() {
		return skills;
	}
	public void setSkills(List<String> skills) {
		this.skills = skills;
	}
	public List<String> getEducation() {
		return education;
	}
	public void setEducation(List<String> education) {
		this.education = education;
	}
	public List<String> getExperience() {
		return experience;
	}
	public void setExperience(List<String> experience) {
		this.experience = experience;
	}
	
	
}
