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
import com.google.gwt.user.client.rpc.RemoteService;
import com.google.gwt.user.client.rpc.RemoteServiceRelativePath;

/**
 * The client-side stub for the RPC service.
 */
@RemoteServiceRelativePath("deviceTree")
public interface DeviceTreeService extends RemoteService {
	
	String storeCompany(Company company, String username, String password) throws IllegalArgumentException;
	List<Company> getCompanies() throws IllegalArgumentException;
	String updateCompany(Company updatedCompany) throws IllegalArgumentException;
	String deleteCompany(String companyKeyString) throws IllegalArgumentException;
	
	String storeDepartment(Department department) throws IllegalArgumentException;
	List<Department> getDepartments(String companyKeyString) throws IllegalArgumentException;
	String updateDepartment(Department updatedDepartment) throws IllegalArgumentException;
	String deleteDepartment(String departmentKeyString) throws IllegalArgumentException;

	String storeUnit(Unit unit) throws IllegalArgumentException;
	List<Unit> getUnits(String departmentKeyString) throws IllegalArgumentException;
	String updateUnit(Unit updatedUnit) throws IllegalArgumentException;
	String deleteUnit(String unitKeyString) throws IllegalArgumentException;
	
	String storeDevice(Device device) throws IllegalArgumentException;
	List<Device> getDevices(String unitKeyString) throws IllegalArgumentException;
	String updateDevice(Device updatedDevice) throws IllegalArgumentException;
	//List<Device> getListDevices() throws IllegalArgumentException;
	String deleteDevice(String deviceKeyString) throws IllegalArgumentException;
	
	String storeMeasurement(Measurement measurement) throws IllegalArgumentException;
	List<Measurement> getMeasurements(String deviceKeyString) throws IllegalArgumentException;
	Measurement getMeasurement(String measurementKeyString) throws IllegalArgumentException;
	Measurement getLastMeasurement(String deviceKeyString) throws IllegalArgumentException;
	List<Measurement> getListMeasurement() throws IllegalArgumentException;
	String updateMeasurement(Measurement updatedMeasurement) throws IllegalArgumentException;
	String deleteMeasurement(String measurementKeyString) throws IllegalArgumentException;
	
	String storeRaport(Raport raport) throws IllegalArgumentException;
	List<Raport> getRaports(String unitKey) throws IllegalArgumentException;
	//List<Raport> getListRaports() throws IllegalArgumentException;
	Raport getRaport(String raportKeyString) throws IllegalArgumentException;
	List<Measurement> getRaportData(Raport raport) throws IllegalArgumentException;
	
	String storeWorker(Worker w) throws IllegalArgumentException;
	List<Worker> getCompanyWorkers(String companyKeyString) throws IllegalArgumentException;
	List<Role>  getWorkerRoles(String email) throws IllegalArgumentException;
	Worker getWorker(String email) throws IllegalArgumentException;
	
	String storeLogEntry(String action, String user);
	
	String storeMaintenanceEntry(MaintenanceItem m, String companyKey);
	//List<MaintenanceItem> getMaintenanceEntries() throws IllegalArgumentException;
	MaintenanceItem getMaintenanceEntry(String maintenanceString);
	String updateMaintenanceEntry(MaintenanceItem mNew);
	List<MaintenanceItem> getMaintenanceEntriesFromKey(String maintenanceString) throws IllegalArgumentException;
	Company getCompany(String companyName);
	Department getDepartment(String departmentKey);
	Unit getUnit(String unitKey);
	Device getDevice(String deviceKey);
	
    
    List<Unit> getCompanyUnits(String companyKey) throws IllegalArgumentException;
    List<Device> getCompanyDevices(String companyKey) throws IllegalArgumentException;
    List<MaintenanceItem> getCompanyMaintenanceItems(String companyKey) throws IllegalArgumentException;
    List<Measurement> getCompanyMeasurements(String companyKey)  throws IllegalArgumentException;

    List<String> getImageNames(String companyKey)   throws IllegalArgumentException;
	String hideImageName(String imageURL) throws IllegalArgumentException;
	
	String sendMail(String to, String subject, String message, String replyto);
	Map<String, StoreMeta> getCompanyStoreMetas(String companyKeyString);
	List<StoreMeta> getChildMetas(String key);
	String addChildMeta(String parentKey, String value);
	String deleteMeta(String key);
	String updateMeta(String key, String value);
	List<StoreItem> getCompanyStoreItems(String companyKeyString, StoreItem queryItem);
	String addCompanyStoreItem(StoreItem si, String companyKeyString);
}
