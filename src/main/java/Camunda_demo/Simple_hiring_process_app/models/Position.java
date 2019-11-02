package Camunda_demo.Simple_hiring_process_app.models;

import java.io.Serializable;

import org.springframework.stereotype.Component;

@Component("PositionDetails")
public class Position implements Serializable {

	private static final long serialVersionUID = 4580085259982608206L;
	
	private String positionType;
	private Person replacement;
	private String jobTitle;
	private String ild;
	private Qualifications qualifications;
	public String getPositionType() {
		return positionType;
	}
	public void setPositionType(String positionType) {
		this.positionType = positionType;
	}
	public Person getReplacement() {
		return replacement;
	}
	public void setReplacement(Person replacement) {
		this.replacement = replacement;
	}
	public String getJobTitle() {
		return jobTitle;
	}
	public void setJobTitle(String jobTitle) {
		this.jobTitle = jobTitle;
	}
	public String getIld() {
		return ild;
	}
	public void setIld(String ild) {
		this.ild = ild;
	}
	public Qualifications getQualifications() {
		return qualifications;
	}
	public void setQualifications(Qualifications qualifications) {
		this.qualifications = qualifications;
	}
	
	
}
