package com.elektrimasinad.aho.shared;

import java.io.Serializable;

public class Role implements Serializable{
	private static final long serialVersionUID = 1L;
private String companyKeyString;
   private String email;
   private String role; //worker/supervisor
public String getCompanyKeyString() {
	return companyKeyString;
}
public void setCompanyKeyString(String companyKeyString) {
	this.companyKeyString = companyKeyString;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getRole() {
	return role;
}
public void setRole(String role) {
	this.role = role;
}
public void setRole(boolean worker, boolean supervisor, boolean active) {
	this.role=(worker?"worker":"no")+","+(supervisor?"supervisor":"no")+","+(active?"active":"no");
}
public boolean isWorker() {
	if(this.role==null) {return false;}
	return this.role.split(",")[0].contentEquals("worker");
}
public boolean isSupervisor() {
	if(this.role==null) {return false;}
	return this.role.split(",")[1].contentEquals("supervisor");
}
public boolean isActive() {
	if(this.role==null) {return false;}
	if(this.role.split(",").length<3) {return true;}
	return this.role.split(",")[2].contentEquals("active");
}
}
