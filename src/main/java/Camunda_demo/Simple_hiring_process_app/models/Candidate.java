package Camunda_demo.Simple_hiring_process_app.models;

import java.io.Serializable;

import org.springframework.stereotype.Component;

@Component("Candidate")
public class Candidate implements Serializable {


	private static final long serialVersionUID = 8778858715851778663L;

	private String name;
	private Qualifications qualifications;
	
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Qualifications getQualifications() {
		return qualifications;
	}
	public void setQualifications(Qualifications qualifications) {
		this.qualifications = qualifications;
	}
	
	
}
