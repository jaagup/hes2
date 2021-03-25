package com.elektrimasinad.aho.client;


import java.util.Date;
import java.util.List;
import java.util.Map;

import com.elektrimasinad.aho.shared.Company;
import com.elektrimasinad.aho.shared.Department;
import com.elektrimasinad.aho.shared.Device;
import com.elektrimasinad.aho.shared.MaintenanceItem;
import com.elektrimasinad.aho.shared.DiagnostikaItem;
import com.elektrimasinad.aho.shared.Measurement;
import com.elektrimasinad.aho.shared.Raport;
import com.elektrimasinad.aho.shared.Role;
import com.elektrimasinad.aho.shared.StoreItem;
import com.elektrimasinad.aho.shared.StoreMeta;
import com.elektrimasinad.aho.shared.Unit;
import com.elektrimasinad.aho.shared.Worker;
import com.google.gwt.user.client.rpc.AsyncCallback;

/**
 * The async counterpart of <code>DeviceTreeService</code>.
 */
public interface DeviceTreeServiceAsync {
	
	void storeCompany(Company company, String username, String password, AsyncCallback<String> callback) throws IllegalArgumentException;
	void getCompanies(AsyncCallback<List<Company>> callback) throws IllegalArgumentException;
	void updateCompany(Company updatedCompany, AsyncCallback<String> updateCompanyCallback) throws IllegalArgumentException;
	void deleteCompany(String companyKeyString, AsyncCallback<String> removeCompanyCallback) throws IllegalArgumentException;
	
	void storeDepartment(Department unit, AsyncCallback<String> callback) throws IllegalArgumentException;
	void getDepartments(String companyKeyString, AsyncCallback<List<Department>> callback) throws IllegalArgumentException;
	void updateDepartment(Department updatedDepartment, AsyncCallback<String> updateDepartmentCallback) throws IllegalArgumentException;
	void deleteDepartment(String departmentKeyString, AsyncCallback<String> removeDepartmentCallback) throws IllegalArgumentException;
	
	void storeUnit(Unit unit, AsyncCallback<String> callback) throws IllegalArgumentException;
	void getUnits(String companyKeyString, AsyncCallback<List<Unit>> callback) throws IllegalArgumentException;
	void updateUnit(Unit updatedUnit, AsyncCallback<String> updateUnitCallback) throws IllegalArgumentException;
	void deleteUnit(String unitKeyString, AsyncCallback<String> removeUnitCallback) throws IllegalArgumentException;
	
	void storeDevice(Device device, AsyncCallback<String> callback) throws IllegalArgumentException;
	void getDevices(String unitKeyString, AsyncCallback<List<Device>> callback) throws IllegalArgumentException;
	//void getListDevices(AsyncCallback<List<Device>> callback) throws IllegalArgumentException;
	void updateDevice(Device updatedDevice, AsyncCallback<String> updateDeviceCallback) throws IllegalArgumentException;
	void deleteDevice(String deviceKeyString, AsyncCallback<String> removeDeviceCallback) throws IllegalArgumentException;
	
	void storeMeasurement(Measurement measurement, AsyncCallback<String> callback) throws IllegalArgumentException;
	void getMeasurements(String deviceKeyString, AsyncCallback<List<Measurement>> callback) throws IllegalArgumentException;
	void getMeasurement(String measurementKeyString, AsyncCallback<Measurement> callback) throws IllegalArgumentException;
	void getListMeasurement(AsyncCallback<List<Measurement>> callback) throws IllegalArgumentException;
	void getLastMeasurement(String deviceKeyString, AsyncCallback<Measurement> callback) throws IllegalArgumentException;
	void updateMeasurement(Measurement updatedMeasurement, AsyncCallback<String> updateMeasurementCallback) throws IllegalArgumentException;
	void deleteMeasurement(String measurementKeyString, AsyncCallback<String> removeMeasurementCallback) throws IllegalArgumentException;
	
	void storeRaport(Raport raport, AsyncCallback<String> callback) throws IllegalArgumentException;
	void getRaports(String unitKey, AsyncCallback<List<Raport>> callback) throws IllegalArgumentException;
	void getRaport(String raportKeyString, AsyncCallback<Raport> callback) throws IllegalArgumentException;
	//void getListRaports(AsyncCallback<List<Raport>> callback) throws IllegalArgumentException;
	void getRaportData(Raport raport, AsyncCallback<List<Measurement>> callback) throws IllegalArgumentException;
	
	void storeWorker(Worker w, AsyncCallback<String> callback) throws IllegalArgumentException;
	void getCompanyWorkers(String companyKeyString, AsyncCallback<List<Worker>> callback) throws IllegalArgumentException;
	void getWorkerRoles(String email, AsyncCallback<List<Role>> callback) throws IllegalArgumentException;
	void getWorker(String email, AsyncCallback<Worker> asyncCallback) throws IllegalArgumentException;
	
	void storeLogEntry(String action, String user, AsyncCallback<String> callback);
	
	void storeMaintenanceEntry(MaintenanceItem m, String companyKey, AsyncCallback<String> callback);
	//void getMaintenanceEntries(AsyncCallback<List<MaintenanceItem>> callback);
	void getMaintenanceEntry(String maintenanceString, AsyncCallback<MaintenanceItem> callback);
	void updateMaintenanceEntry(MaintenanceItem mNew, AsyncCallback<String> callback);
	void getMaintenanceEntriesFromKey(String maintenanceString, AsyncCallback<List<MaintenanceItem>> callback);
	void getCompany(String companyName, AsyncCallback<Company> callback);
    void getDepartment(String departmentKey, AsyncCallback<Department> callback); 
    void getUnit(String unitKey, AsyncCallback<Unit> callback);
    void getDevice(String deviceKey, AsyncCallback<Device> callback);
    
    void getCompanyUnits(String companyKey, AsyncCallback<List<Unit>> callback);
    void getCompanyDevices(String companyKey, AsyncCallback<List<Device>> callback);
    void getCompanyMaintenanceItems(String companyKey, AsyncCallback<List<MaintenanceItem>> callback);
    void getCompanyMeasurements(String companyKey, AsyncCallback<List<Measurement>> callback);
    
    void getImageNames(String companyKey, AsyncCallback<List<String>> callback);
    void hideImageName(String imageURL, AsyncCallback<String> callback);
    
	void sendMail(String to, String subject, String message, String replyto, AsyncCallback<String> callback);
	void getCompanyStoreMetas(String companyKeyString, AsyncCallback<Map<String, StoreMeta>> callback);
	void getChildMetas(String key, AsyncCallback<List<StoreMeta>> callback);
	void addChildMeta(String parentKey, String value, AsyncCallback<String> callback);
	void deleteMeta(String key, AsyncCallback<String> callback);
	void updateMeta(String key, String value, AsyncCallback<String> callback);
	void getCompanyStoreItems(String companyKeyString, StoreItem queryItem, AsyncCallback<List<StoreItem>> callback);
	void addCompanyStoreItem(StoreItem si, String companyKeyString, AsyncCallback<String> callback);
}
