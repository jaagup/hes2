package com.elektrimasinad.aho.client;

import java.util.List;

import com.elektrimasinad.aho.shared.Company;
import com.elektrimasinad.aho.shared.Department;
import com.elektrimasinad.aho.shared.Unit;
import com.google.gwt.core.client.Scheduler;
import com.google.gwt.core.client.Scheduler.ScheduledCommand;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.HasHorizontalAlignment;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.VerticalPanel;

public class DepartmentPanel extends VerticalPanel{
  private TextBox departmentText;
  private Department departmentOld;
  private Company company;
  public DepartmentPanel() {
	  super();
	//  createNewDepartmentPanel();
  }
	private void createNewDepartmentPanel() {
		super.clear();
		departmentOld = new Department();
		
		//Header
		HorizontalPanel headerPanel = AhoWidgets.createContentHeader(company.getCompanyName());
		add(headerPanel);
		
		//Content
		departmentText = AhoWidgets.createTextbox("aho-textbox1 large", "");
		HorizontalPanel unitPanel = new HorizontalPanel();
		unitPanel.setStyleName("aho-panel1");
		unitPanel.add(AhoWidgets.createLabel("Osakond", "aho-label1", null));
		unitPanel.add(departmentText);
		unitPanel.setCellHorizontalAlignment(departmentText, HasHorizontalAlignment.ALIGN_RIGHT);
		add(unitPanel);
		
		Scheduler.get().scheduleDeferred(new ScheduledCommand() {

		    @Override
		    public void execute() {
		    	departmentText.setFocus(true);
		    }
		});
	}

  public void clear(Company company) {
	  this.company=company;
	  createNewDepartmentPanel();
  }
  public void saveDepartment(List<Department> departmentList, AsyncCallback<String> storeDepartmentCallback) {
	  if(departmentText.getText().isEmpty()) { Window.alert("nimi puudub"); return ;}
	  for(Department d:departmentList) {
		  if(d.getDepartmentName().equals(departmentText.getText())) {
			  if(!departmentOld.getDepartmentName().equals(departmentText.getText())) {
				  Window.alert("Nimi juba olemas");
				  return;
			  }
		  }
	  }
  if(departmentOld.getDepartmentName().equals("")) {
	  Department department=new Department(company.getCompanyKey(), departmentText.getText());
	  DeviceCard.getDevicetreeservice().storeDepartment(department, storeDepartmentCallback);
  }
  else {
	  for(Department d:departmentList) {
		  if(d.getDepartmentKey().equalsIgnoreCase(departmentOld.getDepartmentKey())) {
			 Department updatedDepartment=departmentList.get(departmentList.indexOf(d));
			 updatedDepartment.setDepartmentName(departmentText.getText());
			 DeviceCard.getDevicetreeservice().updateDepartment(updatedDepartment, storeDepartmentCallback);
		  }
	  }
  }
  }
}
