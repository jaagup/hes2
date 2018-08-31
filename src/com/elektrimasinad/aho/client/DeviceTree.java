package com.elektrimasinad.aho.client;

import java.util.ArrayList; 

import java.util.HashMap;
import java.util.List;

import com.elektrimasinad.aho.shared.Company;
import com.elektrimasinad.aho.shared.Department;
import com.elektrimasinad.aho.shared.Device;
import com.elektrimasinad.aho.shared.Measurement;
import com.elektrimasinad.aho.shared.Unit;
import com.gargoylesoftware.htmlunit.javascript.host.Console;
import com.google.appengine.api.datastore.Key;
import com.google.gwt.storage.client.Storage;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Tree;
import com.google.gwt.user.client.ui.TreeItem;

public class DeviceTree extends Tree {
	private DeviceTreeServiceAsync deviceTreeService;
	private Storage sessionStore;
	
	private AsyncCallback<Company> getCompanyCallback;
	private AsyncCallback<List<Department>> getDepartmentListCallback;
	private AsyncCallback<List<Unit>> getUnitListCallback;
	private AsyncCallback<List<Device>> getDeviceListCallback;
	TreeItem selectedTreeItem=null;
	
	//private List<Company> companyList = new ArrayList<Company>();
	//private HashMap<Key, Unit> unitMap = new HashMap<Key, Unit>();
	//private HashMap<Key, Device> deviceMap = new HashMap<Key, Device>();
	
	public DeviceTree(DeviceTreeServiceAsync deviceTreeService) {
		super();
		sessionStore = Storage.getSessionStorageIfSupported();
		this.deviceTreeService = deviceTreeService;
		getCompanyCallback = new AsyncCallback<Company>() {
			
			@Override
			public void onSuccess(Company company) {
				addCompanyToTree(company);
			}
			
			@Override
			public void onFailure(Throwable caught) {
				System.err.println(caught);
			}
			
		};
		
		getDepartmentListCallback = new AsyncCallback<List<Department>>() {
			
			@Override
			public void onSuccess(List<Department> companies) {
				addDepartmentsToTree(companies);
			}
			
			@Override
			public void onFailure(Throwable caught) {
				System.err.println(caught);
			}
			
		};
		
		getUnitListCallback = new AsyncCallback<List<Unit>>() {
			
			@Override
			public void onSuccess(List<Unit> units) {
				//Window.alert("unit lisa "+units.size());
				addUnitsToTree(units);
			}
			
			@Override
			public void onFailure(Throwable caught) {
				Window.alert(caught.toString());
				System.err.println(caught);
			}
			
		};

		getDeviceListCallback = new AsyncCallback<List<Device>>() {
			
			@Override
			public void onSuccess(List<Device> devices) {
				//Window.alert(devices.size()+" devices");
				addDevicesToTree(devices);
			}
			
			@Override
			public void onFailure(Throwable caught) {
				System.err.println(caught);
			}
			
		};
		
		getElement().addClassName("gwt-Tree");
		refreshTree();
	}
	
	public void refreshTree() {
		clear();
		fetchCompanies();
		
		
	}
	
	private void fetchCompanies() {
		deviceTreeService.getCompany(sessionStore.getItem("Account"), getCompanyCallback);

//		deviceTreeService.getCompany(getCompanyCallback);
	}
	public void fetchDepartments(Company company) {
		deviceTreeService.getDepartments(company.getCompanyKey(), getDepartmentListCallback);
	}
	public void fetchUnits(Department department) {
		//Window.alert("fetchUnits "+department.getDepartmentKey());
		deviceTreeService.getUnits(department.getDepartmentKey(), getUnitListCallback);
	}
	
	public void fetchDevices(Unit unit, TreeItem selectedTreeItem) {
		this.selectedTreeItem=selectedTreeItem;
		//Window.alert("selected : "+this.selectedTreeItem);
		deviceTreeService.getDevices(unit.getUnitKey(), getDeviceListCallback);
	}
	
	private void addCompaniesToTree(List<Company> companies) {
		for (Company company : companies) {
			TreeItem companyItem = new TreeItem();
			companyItem.getElement().addClassName("gwt-TreeNode");
			companyItem.setText(company.getCompanyName());
			companyItem.setUserObject(company);
			this.addItem(companyItem);
			
		}
	}
	private void addCompanyToTree(Company company) {
		TreeItem companyItem = new TreeItem();
		companyItem.getElement().addClassName("gwt-TreeNode");
		companyItem.setText(company.getCompanyName());
		companyItem.setUserObject(company);
		this.addItem(companyItem);
		
	}
	
	
/*	
	private void addUnitsToTree(List<Unit> units) {
		TreeItem selItem = null;
		for (Unit unit : units) {
			for (int i = 0; i < getItemCount(); i++) {
				if (getItem(i).getUserObject() instanceof Company) {
					if (((Company)getItem(i).getUserObject()).getCompanyKey().equals(unit.getCompanyKey())) {
						TreeItem unitItem = new TreeItem();
						unitItem.getElement().addClassName("gwt-TreeNode");
						unitItem.setText(unit.getUnit());
						unitItem.setUserObject(unit);
						getItem(i).addItem(unitItem);
						
						selItem = getItem(i);
					}
				}
			}
		}
		openSelectedItem(selItem);
	}
	*/

	private void addUnitsToTree(List<Unit> units) {
		TreeItem selItem = null;
		//Window.alert("addUnits 152 "+units+" "+units.get(0)+" kogus "+getItemCount());
		for (Unit unit : units) {
			//Window.alert(unit.getUnit());
			for (int i = 0; i < getItemCount(); i++) {
				//Window.alert(getItem(i).toString());
				for(int j=0; j<getItem(i).getChildCount(); j++) {
					TreeItem departmentItem=getItem(i).getChild(j);
					Department d=(Department)getItem(i).getChild(j).getUserObject();
				//if (getItem(i).getUserObject() instanceof Department) {
					//Window.alert(getItem(i).toString()+ " -d");
					//if (((Department)getItem(i).getUserObject()).getDepartmentKey().equals(unit.getDepartmentKey())) {
					if(d.getDepartmentKey().equals(unit.getDepartmentKey())) {
						TreeItem unitItem = new TreeItem();
						unitItem.getElement().addClassName("gwt-TreeNode");
						unitItem.setText(unit.getUnit());
						unitItem.setUserObject(unit);
						departmentItem.addItem(unitItem);
						//getItem(i).addItem(unitItem);
						//Window.alert("Lisas "+unitItem);
					//	selItem = getItem(i);
						selItem=unitItem;
					}
				//}
			}
			}
		}
		openSelectedItem(selItem);
	}

	
	private void addDepartmentsToTree(List<Department> departments) {
		TreeItem selItem = null;
		for (Department department : departments) {
			for (int i = 0; i < getItemCount(); i++) {
				if (getItem(i).getUserObject() instanceof Company) {
					if (((Company)getItem(i).getUserObject()).getCompanyKey().equals(department.getCompanyKey())) {
						TreeItem departmentItem = new TreeItem();
						departmentItem.getElement().addClassName("gwt-TreeNode");
						departmentItem.setText(department.getDepartmentName());
					//	System.err.println("d "+department.getDepartmentName());
						departmentItem.setUserObject(department);
						getItem(i).addItem(departmentItem);
						
						selItem = getItem(i);
					}
				}
			}
		}
		openSelectedItem(selItem);
	}
	
	private void addDevicesToTree(List<Device> devices) {
		TreeItem selItem = null;
		if(selectedTreeItem.getUserObject() instanceof Unit) {
			Unit u=(Unit)(selectedTreeItem.getUserObject());
			for(Device device: devices) {
				if(device.getUnitKey().equals(u.getUnitKey())) {
				TreeItem deviceItem = new TreeItem();
				deviceItem.setText(device.getId() + " " + device.getDeviceName());
				deviceItem.setUserObject(device);
				styleDeviceItem(deviceItem);
				selectedTreeItem.addItem(deviceItem);
				selItem=deviceItem;
				} else {
					Window.alert("Voti ei sobi");
				}
			}
		} else {
			Window.alert(selectedTreeItem.getUserObject().getClass().toString());
		}
		/*
		for (Device device : devices) {
			for (int i = 0; i < getItemCount(); i++) {
				for (int j = 0; j < getItem(i).getChildCount(); j++) {
					if (((Unit)getItem(i).getChild(j).getUserObject()).getUnitKey().equals(device.getUnitKey())) {
						TreeItem deviceItem = new TreeItem();
						deviceItem.setText(device.getId() + " " + device.getDeviceName());
						deviceItem.setUserObject(device);
						styleDeviceItem(deviceItem);
						getItem(i).getChild(j).addItem(deviceItem);
						
						selItem = getItem(i).getChild(j);
					}
				}
			}
		}*/
		openSelectedItem(selItem);
	}
	
	private void styleDeviceItem(final TreeItem item) {
		deviceTreeService.getLastMeasurement(((Device)item.getUserObject()).getDeviceKey(), new AsyncCallback<Measurement>() {
			
			@Override
			public void onSuccess(Measurement lastMeasurement) {
				//System.out.println(name);
				if (lastMeasurement != null) {
					if (lastMeasurement.getMarking().equalsIgnoreCase("alarm")) item.getElement().addClassName("gwt-TreeNode2A");
					else if (lastMeasurement.getMarking().equalsIgnoreCase("hoiatus")) item.getElement().addClassName("gwt-TreeNode2H");
					else if (lastMeasurement.getMarking().equalsIgnoreCase("ok")) item.getElement().addClassName("gwt-TreeNode2O");
					else item.getElement().addClassName("gwt-TreeNode2M");
				} else {
					item.getElement().addClassName("gwt-TreeNode2");
				}
			}
			
			@Override
			public void onFailure(Throwable caught) {
				System.err.println(caught);
			}
			
		});
	}
	
	private void openSelectedItem(TreeItem selItem) {
		if (selItem != null) {
			boolean state = selItem.getState();
		    TreeItem parent = selItem.getParentItem();
		    selItem.getTree().setSelectedItem(parent, false); // null is ok
		    if(parent != null)
		        parent.setSelected(false);  // not compulsory
		    selItem.setState(!state, false);
		}
	}
	
	/*public TreeItem addDeviceItem(String company, String location, String device) {
		addCompany(company).addLocation(location).addDevice(device);
		TreeItem item = getDeviceItem(company, location, device);
		if (item == null) {
			item = addLocationItem(company, location).addTextItem(device);
			item.getElement().addClassName("gwt-TreeNode2");
			item.setUserObject("device");
		}
		return item;
		
	}
	public TreeItem addLocationItem(String company, String location) {
		addCompany(company).addLocation(location);
		TreeItem item = getLocationItem(company, location);
		if (item == null) {
			item = addCompanyItem(company).addTextItem(location);
			item.getElement().addClassName("gwt-TreeNode");
		}
		return item;
	}
	public TreeItem addCompanyItem(String company) {
		addCompany(company);
		TreeItem item = getCompanyItem(company);
		if (item == null) {
			item = addTextItem(company);
			item.getElement().addClassName("gwt-TreeNode");
		}
		return item;
	}
	
	public TreeItem getDeviceItem(String company, String location, String device) {
		TreeItem locationItem = getLocationItem(company, location);
		if (locationItem != null) {
			for (int k = 0; k < locationItem.getChildCount(); k++) {
				if (locationItem.getChild(k).getText() == device) {
					return locationItem.getChild(k);
				}
			}
		}
		return null;
	}
	public TreeItem getLocationItem(String company, String location) {
		TreeItem companyItem = getCompanyItem(company);
		if (companyItem != null) {
			for (int j = 0; j < companyItem.getChildCount(); j++) {
				if (companyItem.getChild(j).getText() == location) {
					return companyItem.getChild(j);
				}
			}
		}
		return null;
	}
	public TreeItem getCompanyItem(String company) {
		for (int i = 0; i < getItemCount(); i ++) {
			if (getItem(i).getText() == company) {
				return getItem(i);
			}
		}
		return null;
	}*/
}
