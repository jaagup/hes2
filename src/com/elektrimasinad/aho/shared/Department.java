package com.elektrimasinad.aho.shared;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
public class Department implements Serializable{
	private static final long serialVersionUID = -711750541648786189L;
    private String departmentKey="";
    private String departmentName="";
	private String companyKey="";
    public String getDepartmentKey() {
		return departmentKey;
	}
	public void setDepartmentKey(String departmentKey) {
		this.departmentKey = departmentKey;
	}
	public String getDepartmentName() {
		return departmentName;
	}
	public void setDepartmentName(String departmentName) {
		this.departmentName = departmentName;
	}
	public String getCompanyKey() {
		return companyKey;
	}
	public void setCompanyKey(String companyKey) {
		this.companyKey = companyKey;
	}
	private List<Unit> unitList = new ArrayList<Unit>();
    public Department() {}
    public Department(String companyKey, String departmentName) {
    	this.companyKey=companyKey;
    	this.departmentName=departmentName;
    }
	public void addUnit(Unit unit) {
		if(!unitList.contains(unit)) {
			unitList.add(unit);
		}
		//TODO device already exists exception
	}
	
	public void removeUnit(Unit unit) {
		if(unitList.contains(unit)) {
			unitList.remove(unit);
		}
		//TODO no such device exception
	}
	
	public List<Unit> getUnitList() {
		return unitList;
	}

}
