package com.elektrimasinad.aho.shared;

public class DiagnostikaItem {
    private String address;
    private String name;
    private String id;
    private String seade;
    private String deviceKey;
    private String measurementKey;
    private String kommentaar;
    private String marking;

    public DiagnostikaItem() {
    	
    }
    
    public void setName(String name) {
    	this.name = name;
    }
    
    public void setDevice(String deviceName) {
		this.seade = deviceName;
	}    
    
    public void setDeviceKey(String deviceKey) {
		this.deviceKey = deviceKey;
	}
    
    public void setMeasurementKey(String measurementKey) {
    	this.measurementKey=measurementKey;
    }
    
    public void setAddress(String deviceAddress) {
		this.address = deviceAddress;
	}
    
    public void setID(String id) {
		this.id = id;
	}
    
    public void setComment(String comment) {
		this.kommentaar = comment;
	}
    
    public String getName() {
    	return this.name;
    }
    
    public String getDevice() {
    	return this.seade;
	}
    public String getDeviceKey() {
    	return this.deviceKey;
	}
    public String getMeasurementKey() {
    	return this.measurementKey;
    }
    public String getAddress() {
    	return this.address;
	}
    
    public String getID() {
    	return this.id;
	}
    public String getComment() {
    	return this.kommentaar;
	}
    
    public String getMarking() {
		return marking;
	}

	public void setMarking(String marking) {
		this.marking = marking;
	}
  
  } 
