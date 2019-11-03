package Camunda_demo.Simple_hiring_process_app.models;

import java.io.Serializable;

import org.springframework.stereotype.Component;

@Component("Candidate")
public class Candidate implements Serializable {


	private static final long serialVersionUID = 8778858715851778663L;

	private String name;
	private Qualification qualification;
	
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Qualification getQualification() {
		return qualification;
	}
	public void setQualification(Qualification qualification) {
		this.qualification = qualification;
	}
	
	
}
