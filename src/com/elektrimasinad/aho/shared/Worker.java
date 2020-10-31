package com.elektrimasinad.aho.shared;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class Worker implements Serializable{
   private String name;
   private String email;
   private String phone;
   private String passwordhash;
   private List<Role> roles=new ArrayList<Role>();
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getPhone() {
	return phone;
}
public void setPhone(String phone) {
	this.phone = phone;
}

public void addRole(Role r) {
	roles.add(r);
}
public List<Role> getRoles(){return roles;}
}
