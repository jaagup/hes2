package com.elektrimasinad.aho.shared;

public class PlannerItem {
		private String kuup;
	    private String address;
	    private String name;
	    private String id;
	    private String key;
	    private String seade;
	    private String tegevus;
	    private Device deviceObject;
	    private String style="";

	    public PlannerItem() {
	    	
	    }
	    
	    public void setDeviceObject(Device device) {
	    	this.deviceObject=device;
	    }
	    public void setDates(String dates) {
	    	this.kuup = dates;
	    }
	    
	    public void setName(String name) {
	    	this.name = name;
	    }
	    
	    public void setDevice(String deviceName) {
			this.seade = deviceName;
		}
	    
	    public void setAddress(String deviceAddress) {
			this.address = deviceAddress;
		}

	    public void setID(String id) {
			this.id = id;
		}
	    
	    public void setKey(String key) {
	    	this.key=key;
	    }
	    
	    public void setAction(String action) {
			this.tegevus = action;
		}
	    
	    public void setStyle(String style) {
	    	this.style=style;
	    }
	    
	    public String getDates() {
	    	return this.kuup;
	    }
	    public String getName() {
	    	return this.name;
	    }
	    
	    public Device getDeviceObject() {
	    	return this.deviceObject;
	    }
	    
	    public String getDevice() {
	    	return this.seade;
		}
	    
	    public String getAddress() {
	    	return this.address;
		}
	    
	    public String getID() {
	    	return this.id;
		}
	    public String getKey() {
	    	return key;
	    }
	    public String getAction() {
	    	return this.tegevus;
		}
	    
	    public String getStyle() {
	    	return this.style;
	    }
}
