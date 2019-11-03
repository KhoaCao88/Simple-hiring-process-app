package Camunda_demo.Simple_hiring_process_app.models;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

@Component("Qualification")
public class Qualification implements Serializable {

	private static final long serialVersionUID = 5243163530506209011L;

	private List<String> skills;
	private List<String> educations;
	private List<String> experience;

	public Qualification(){
		skills = new ArrayList<String>();
		educations = new ArrayList<String>();
		experience = new ArrayList<String>();
	}
	
	public List<String> getSkills() {
		return skills;
	}
	public void setSkills(List<String> skills) {
		this.skills = skills;
	}
	public List<String> getEducations() {
		return educations;
	}
	public void setEducations(List<String> educations) {
		this.educations = educations;
	}
	public List<String> getExperience() {
		return experience;
	}
	public void setExperience(List<String> experience) {
		this.experience = experience;
	}
	
	
}
