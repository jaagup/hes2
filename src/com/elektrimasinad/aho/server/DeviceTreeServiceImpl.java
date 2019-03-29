package com.elektrimasinad.aho.server;

import java.math.BigInteger;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.security.spec.InvalidKeySpecException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;

import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;

import com.elektrimasinad.aho.client.DeviceTreeService;
import com.elektrimasinad.aho.shared.Company;
import com.elektrimasinad.aho.shared.Department;
import com.elektrimasinad.aho.shared.Device;
import com.elektrimasinad.aho.shared.MaintenanceItem;
import com.elektrimasinad.aho.shared.Measurement;
import com.elektrimasinad.aho.shared.DiagnostikaItem;
import com.elektrimasinad.aho.shared.Raport;
import com.elektrimasinad.aho.shared.Unit;
import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.EntityNotFoundException;
import com.google.appengine.api.datastore.FetchOptions;
import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Query.Filter;
import com.google.appengine.api.datastore.Query.FilterOperator;
import com.google.appengine.api.datastore.Query.FilterPredicate;
import com.google.gwt.user.server.rpc.RemoteServiceServlet;


/**
 * The server-side implementation of the RPC service.
 */
@SuppressWarnings("serial")
public class DeviceTreeServiceImpl extends RemoteServiceServlet implements DeviceTreeService {
	private DatastoreService ds = DatastoreServiceFactory.getDatastoreService();
	private String userCompanyName = "Elektrimasinad";
	private static final Random RANDOM = new SecureRandom();
	private static final int ITERATIONS = 1000;
	private static final int KEY_LENGTH = 192;
	
	private String hashPassword(String passwordToHash, byte[] salt) throws NoSuchAlgorithmException, InvalidKeySpecException {
		char[] passwordChar = passwordToHash.toCharArray();
		byte[] saltBytes = salt;
		
		PBEKeySpec spec = new PBEKeySpec(
				passwordChar,
				saltBytes,
				ITERATIONS,
				KEY_LENGTH
				);
		SecretKeyFactory key = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA1");
		byte[] hashedPassword = key.generateSecret(spec).getEncoded();
		return String.format("%x", new BigInteger(hashedPassword));
	}
	
	@Override
	public String storeLogEntry(String action, String user) {
		Entity l = new Entity("Log");
		Date today = new Date();
		l.setProperty("Date", today.toString());
		l.setProperty("Action", action);
		l.setProperty("User", user);
		
		ds.put(l);
		
		return "Action logged";
	}
	
	@Override
	public String storeMaintenanceEntry(MaintenanceItem m, String companyString) {
		Key maintenanceKey = KeyFactory.createKey("MaintenanceEntry", m.getMaintenanceName());
		System.out.println(KeyFactory.keyToString(maintenanceKey));
		Entity e = new Entity("MaintenanceEntry", maintenanceKey);
		//Iterable<Entity> nameCheck;
		//Query query = new Query("MaintenanceEntry");
		//query.setFilter(FilterOperator.EQUAL.of("Name", m.getMaintenanceName()));
		//nameCheck = ds.prepare(query).asIterable();
		//if(nameCheck.iterator().hasNext() == true ){
			//return "Name already taken!";
		//} else {
			e.setProperty("Device", m.getMaintenanceDevice());
			e.setProperty("Name", m.getMaintenanceName());
			e.setProperty("Description", m.getMaintenanceDescription());
			e.setProperty("ProblemDescription", m.getMaintenanceProblemDescription());
			e.setProperty("State", m.getMaintenanceState());
			e.setProperty("Person", m.getMaintenanceAssignedTo());
			e.setProperty("CompleteDate", m.getMaintenanceCompleteDate());
			e.setProperty("Materials", m.getMaintenanceMaterials());
			e.setProperty("Notes", m.getMaintenanceNotes());
			Integer interval = m.getMaintenanceInterval();
			try {
			if(interval > 0 ) {
				e.setProperty("Interval", interval);
			}
			} catch (Exception ex) {}
			//e.setProperty("KeyString", KeyFactory.keyToString(e.getKey()));
			e.setProperty("Downtime", m.getMaintenanceDowntime().toString());
			e.setProperty("TimeSpent", m.getMaintenanceTimeSpent().toString());
			System.out.println("Time spent salvestus" + e.getProperty("TimeSpent").toString());
			e.setProperty("Cost", m.getMaintenanceCost().toString());
			ds.put(e);
			System.out.println("Mootmise uuring " +m.getConnectedMeasurementKeyString());
			if(m.getConnectedMeasurementKeyString()!=null && m.getConnectedMeasurementKeyString().length()>0) {
	            System.out.println("Proovib muuta");
				Measurement mm=getMeasurement(m.getConnectedMeasurementKeyString());
			   mm.setStatus("archived");
			   updateMeasurement(mm);
			   System.out.println("muudetud");
			}
			return "Task stored";
		//}
		
	}
	/*
	@Override
	public List<MaintenanceItem> getMaintenanceEntries() throws IllegalArgumentException {
		List<MaintenanceItem> maintenanceItems = new ArrayList<MaintenanceItem>();
		Query query = new Query("MaintenanceEntry");
		for(Entity e : ds.prepare(query).asIterable()) {
			MaintenanceItem m = new MaintenanceItem();
			m.setMaintenanceID(KeyFactory.keyToString(e.getKey()));
			m.setMaintenanceDevice(e.getProperty("Device").toString());
			m.setMaintenanceName(e.getProperty("Name").toString());
			m.setMaintenanceDescription(e.getProperty("Description").toString());
			m.setMaintenanceProblemDescription(e.getProperty("ProblemDescription").toString());
			if(e.getProperty("State")!=null) {
			  m.setMaintenanceState(e.getProperty("State").toString());
			} else {
				m.setMaintenanceState("active");
			}
			if(e.getProperty("Person")!=null) {
			m.setMaintenanceAssignedTo(e.getProperty("Person").toString());
			} 
			m.setMaintenanceCompleteDate((Date) e.getProperty("CompleteDate"));
			m.setMaintenanceMaterials(e.getProperty("Materials").toString());
			m.setMaintenanceNotes(e.getProperty("Notes").toString());
			maintenanceItems.add(m);
		}
		
		return maintenanceItems;
	}*/
	@Override
	public List<MaintenanceItem> getMaintenanceEntriesFromKey(String maintenanceString) throws IllegalArgumentException {
	//	Key userCompanyKey = KeyFactory.createKey("Companies", userCompanyName);
		List<MaintenanceItem> maintenanceItems = new ArrayList<MaintenanceItem>();
		Query query = new Query("MaintenanceEntry");
		query.setFilter(FilterOperator.EQUAL.of("Device", maintenanceString));
		for(Entity e : ds.prepare(query).asIterable()) {
			MaintenanceItem m = new MaintenanceItem();
			//m.setMaintenanceKey(e.getProperty("KeyString").toString());
			m.setMaintenanceID(KeyFactory.keyToString(e.getKey()));
			m.setMaintenanceDevice(e.getProperty("Device").toString());
			m.setMaintenanceName(e.getProperty("Name").toString());
			m.setMaintenanceDescription(e.getProperty("Description").toString());
			m.setMaintenanceProblemDescription(e.getProperty("ProblemDescription").toString());
			if(e.getProperty("State")!=null) {
			try{m.setMaintenanceState(e.getProperty("State").toString());}
			catch(Exception ex) {System.out.println(" 144 "+ex);
			  }
			} else {
				m.setMaintenanceState("active");
			}
			if(e.getProperty("Person")!=null) {
  			  m.setMaintenanceAssignedTo(e.getProperty("Person").toString());
			}
			m.setMaintenanceCompleteDate((Date) e.getProperty("CompleteDate"));
			m.setMaintenanceMaterials(e.getProperty("Materials").toString());
			m.setMaintenanceNotes(e.getProperty("Notes").toString());
			try{m.setMaintenanceTimeSpent(Double.parseDouble(e.getProperty("TimeSpent").toString()));
			  System.out.println("ajakulu "+ m.getMaintenanceTimeSpent()+" "+e.getProperty("TimeSpent").toString());
			}catch(Exception ex) {}
			try{m.setMaintenanceDowntime(Double.parseDouble(e.getProperty("Downtime").toString()));}catch(Exception ex) {}
			try{m.setMaintenanceCost(Double.parseDouble(e.getProperty("Cost").toString()));}catch(Exception ex) {}
			maintenanceItems.add(m);
		}
		
		return maintenanceItems;
	}
	@Override
	public MaintenanceItem getMaintenanceEntry(String maintenanceString) throws IllegalArgumentException {
		Key maintenanceKey = KeyFactory.stringToKey(maintenanceString);
		MaintenanceItem m = new MaintenanceItem();
		Entity e;
		try {
			e = ds.get(maintenanceKey);
			m.setMaintenanceID(KeyFactory.keyToString(e.getKey()));
			//m.setMaintenanceKey(e.getProperty("KeyString").toString());
			m.setMaintenanceDevice(e.getProperty("Device").toString());
			m.setMaintenanceName(e.getProperty("Name").toString());
			m.setMaintenanceDescription(e.getProperty("Description").toString());
			m.setMaintenanceProblemDescription(e.getProperty("ProblemDescription").toString());
			if(e.getProperty("State")!=null) {
			m.setMaintenanceState(e.getProperty("State").toString());
			} else {
				m.setMaintenanceState("active");
			}
			if(e.getProperty("Person")!=null) {
			m.setMaintenanceAssignedTo(e.getProperty("Person").toString());
			}
			m.setMaintenanceCompleteDate((Date) e.getProperty("CompleteDate"));
			m.setMaintenanceMaterials(e.getProperty("Materials").toString());
			m.setMaintenanceNotes(e.getProperty("Notes").toString());
			try {
			m.setMaintenanceInterval(Integer.valueOf(e.getProperty("Interval").toString()));
			} catch(Exception ex) {}
			try{m.setMaintenanceTimeSpent(Double.parseDouble(e.getProperty("TimeSpent").toString()));
			  System.out.println("ajakulu "+ m.getMaintenanceTimeSpent()+" "+e.getProperty("TimeSpent").toString());
			}catch(Exception ex) {ex.printStackTrace();}
			try{m.setMaintenanceDowntime(Double.parseDouble(e.getProperty("Downtime").toString()));}catch(Exception ex) {}
			try{m.setMaintenanceCost(Double.parseDouble(e.getProperty("Cost").toString()));}catch(Exception ex) {}
		} catch (EntityNotFoundException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		
		return m;
	}
	@Override
	public String updateMaintenanceEntry(MaintenanceItem mNew) {
		Entity e;
	//	Iterable<Entity> nameCheck;
//		Query query = new Query("MaintenanceEntry");
//		query.setFilter(FilterOperator.EQUAL.of("Name", mNew.getMaintenanceName()));
	//	e = ds.prepare(query).asSingleEntity();
		try {
		e=ds.get(KeyFactory.stringToKey(mNew.getMaintenanceID()));
		e.setProperty("Name", mNew.getMaintenanceName());
		e.setProperty("Device", mNew.getMaintenanceDevice());
		e.setProperty("Description", mNew.getMaintenanceDescription());
		e.setProperty("ProblemDescription", mNew.getMaintenanceProblemDescription());
		e.setProperty("State", mNew.getMaintenanceState());
		e.setProperty("Person", mNew.getMaintenanceAssignedTo());
		e.setProperty("CompleteDate", mNew.getMaintenanceCompleteDate());
		e.setProperty("Materials", mNew.getMaintenanceMaterials());
		e.setProperty("Notes", mNew.getMaintenanceNotes());
		Integer interval = mNew.getMaintenanceInterval();
		e.setProperty("Interval", interval);
		e.setProperty("Downtime", mNew.getMaintenanceDowntime().toString());
		e.setProperty("TimeSpent", mNew.getMaintenanceTimeSpent().toString());
		System.out.println("Time spent salvestus" + e.getProperty("TimeSpent").toString());
		e.setProperty("Cost", mNew.getMaintenanceCost().toString());

		ds.put(e);
		return "Task updated";
		}catch(Exception ex) {
			ex.printStackTrace();
		}
		return "entry update error";
	}

	
		//e.setProperty("KeyString", mNew.getMaintenanceKey());
	@Override
	public String storeCompany(Company company, String username, String password) throws IllegalArgumentException {
		//Check if company with specified name already exists
		List<Company> companyList = getCompanies();
		for (Company c : companyList) {
			if (c.getCompanyName().equalsIgnoreCase(company.getCompanyName())) {
				return "Company already exists!"; //TODO exception instead?
			}
		}
		System.out.println("new company");
		String saltString = "Elektrimasinad";
		byte[] salt = saltString.getBytes();
		System.out.println("salt generated");
		//Create new company if company does not already exist
		Key userCompanyKey = KeyFactory.createKey("Company", userCompanyName);
		System.out.println("company key: " + KeyFactory.keyToString(userCompanyKey));
		Entity e = new Entity("Company", userCompanyKey);
		e.setProperty("Name", company.getCompanyName());
		System.out.println("Name: " + e.getProperty("Name"));
		e.setProperty("Username", username);
		System.out.println("Username: " + e.getProperty("Username"));
		try {
			e.setProperty("Password", hashPassword(password, salt));
			System.out.println("Password stored: " + e.getProperty("Password"));
			ds.put(e);
			System.out.println("ds.put done");
			return "Company stored: " + company.getCompanyName();
		} catch (NoSuchAlgorithmException | InvalidKeySpecException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
			return "dun goofed";
		}
	}
	@Override
	public Company getCompany(String companyKey) {
		Key userCompanyKey = KeyFactory.stringToKey(companyKey);
		//System.out.println("Voti: "+userCompanyKey);
		Entity e;
		Company c = new Company();
		//System.out.println("Tyhi: "+c);
		try {
			e = ds.get(userCompanyKey);
			System.out.println(e);
			c.setCompanyKey(KeyFactory.keyToString(userCompanyKey));
			System.out.println(c);
			c.setCompanyName(e.getProperty("Name").toString());
			try{c.setHidden(Boolean.valueOf(e.getProperty("Hidden").toString()));}
			catch(Exception ex) {
			//	System.out.println("hidden puudub");
				//ex.printStackTrace();
				}
			//System.out.println("olemas "+c.getCompanyName());
			return c;
		} catch (EntityNotFoundException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		return null;
	}
	
	@Override
	public Department getDepartment(String departmentKey) { 
		Key userDepartmentKey = KeyFactory.stringToKey(departmentKey);
		Entity e;
		Department d=new Department();
		try {
			e=ds.get(userDepartmentKey);
			d.setDepartmentKey(departmentKey);
			d.setDepartmentName(e.getProperty("Department").toString());
			d.setCompanyKey(KeyFactory.keyToString(e.getParent()));
			return d;
		} catch (Exception ex) {
			ex.printStackTrace();
		}
		return null;
	}
	
	@Override
	public Unit getUnit(String unitKey) {
		Key userUnitKey = KeyFactory.stringToKey(unitKey);
		Entity e;
		Unit u = new Unit();
		try {
			e=ds.get(userUnitKey);
//			u.setDepartmentKey(e.getProperty("DepartmentKey").toString());
			u.setDepartmentKey(KeyFactory.keyToString(e.getParent()));
			u.setUnit(e.getProperty("Unit").toString());
			u.setUnitKey(KeyFactory.keyToString(e.getKey()));
			return u;
		} catch (Exception ex) {
			ex.printStackTrace();
		}
		return null;
	}
	
	@Override
	public Device getDevice(String deviceKey) {
		Key userDeviceKey=KeyFactory.stringToKey(deviceKey);
		Entity e;
		Device d=new Device();
		try {
		  e=ds.get(userDeviceKey);	
		  d=deviceFrom(e);
		  return d;
		}catch (Exception ex) {
			ex.printStackTrace();
		}
		return null;
	}
	
	@Override
	public List<Company> getCompanies() throws IllegalArgumentException {
		Key userCompanyKey = KeyFactory.createKey("Company", userCompanyName);
		
		List<Company> companyList = new ArrayList<Company>();
		Query query = new Query("Company", userCompanyKey).setAncestor(userCompanyKey).addSort("Name", Query.SortDirection.ASCENDING);
		for (Entity e : ds.prepare(query).asIterable()) {
			Company c = new Company();
			if (e.getKey() != null && e.getProperty("Name").toString() != null) {
				c.setCompanyKey(KeyFactory.keyToString(e.getKey()));
				c.setCompanyName(e.getProperty("Name").toString());
				try {
					c.setHidden(Boolean.valueOf(e.getProperty("Hidden").toString()));
				}catch(Exception ex) {}
				companyList.add(c);
			}
		}
		
		return companyList;
	}
	
	@Override
	public String updateCompany(Company updatedCompany) throws IllegalArgumentException {
		Entity e;
		String saltString = "Elektrimasinad";
		byte[] salt = saltString.getBytes();
		try {
			e = ds.get(KeyFactory.stringToKey(updatedCompany.getCompanyKey()));
			//Check if company name has been changed
			if (!e.getProperty("Name").toString().equalsIgnoreCase(updatedCompany.getCompanyName())) {
				//Check if company with specified name already exists
				List<Company> companyList = getCompanies();
				for (Company c : companyList) {
					if (c.getCompanyName().equalsIgnoreCase(updatedCompany.getCompanyName())) {
						return "Company with that name already exists!"; //TODO exception instead?
					}
				}
			}
			
			//Update company if company does not already exist
			System.out.println(updatedCompany.getCompanyName());
			System.out.println(updatedCompany.getCompanyUsername());
			e.setProperty("Name", updatedCompany.getCompanyName());
			e.setProperty("Username", updatedCompany.getCompanyUsername());
			String passwordToProc = updatedCompany.getCompanyPassword().toString();
			if(passwordToProc.trim().length()>0) {
			 System.out.println(hashPassword(passwordToProc, salt));
			 String proccedPassword = hashPassword(passwordToProc, salt);
			 e.setProperty("Password", proccedPassword);
			}
			e.setProperty("Hidden", String.valueOf(updatedCompany.getHidden()));
			ds.put(e);
		} catch (EntityNotFoundException | NoSuchAlgorithmException | InvalidKeySpecException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
			return "Company not found!";
		}
		return "Company updated!";
	}
	
	@Override
	public String deleteCompany(String companyKeyString) throws IllegalArgumentException {
		Key companyKey = KeyFactory.stringToKey(companyKeyString);
		
		Query q = new Query().setAncestor(companyKey).setKeysOnly();
		
		List<Key> keys = new ArrayList<Key>();
		for (Entity e : ds.prepare(q).asIterable()) {
			keys.add(e.getKey());
		}
		
		ds.delete(keys);
		return "Company deleted!";
	}
	

	@Override
	public String storeDepartment(Department department) throws IllegalArgumentException {
		//Check if unit with specified name already exists
		System.out.println("Serveripoolne salvestus");
		List<Department> departmentList = getDepartments(department.getCompanyKey());
		System.out.println("Leitud "+departmentList);
		for (Department d : departmentList) {
			if (d.getDepartmentName().equalsIgnoreCase(department.getDepartmentName())) {
				System.out.println("Olemas osakond "+department.getDepartmentName());
				return "Department already exists!"; //TODO exception instead?
			}
		}
		//Create new unit if unit does not already exist
		Key companyKey = KeyFactory.stringToKey(department.getCompanyKey());
		Entity e = new Entity("Department", companyKey);
		e.setProperty("Department", department.getDepartmentName());
		ds.put(e);
		return "Department stored: " + department.getDepartmentName();
	}

	@Override
	public List<Department> getDepartments(String companyKeyString) throws IllegalArgumentException {
		Key companyKey = KeyFactory.stringToKey(companyKeyString);
		List<Department> locationList = new ArrayList<Department>();
		Query query = new Query("Department", companyKey).setAncestor(companyKey).addSort("Department", Query.SortDirection.ASCENDING);
		for (Entity e : ds.prepare(query).asIterable()) {
			Department d = new Department();
			if (e.getKey() != null && e.getProperty("Department").toString() != null) {
				d.setDepartmentKey(KeyFactory.keyToString(e.getKey())); 
				d.setCompanyKey(companyKeyString);
				d.setDepartmentName(e.getProperty("Department").toString());
				locationList.add(d);
			}
		}
		
		return locationList;
	}
	
	public List<Unit> getCompanyUnits(String companyKeyString) throws IllegalArgumentException{
		List<Department> departments=getDepartments(companyKeyString);
		List<Unit> units=new ArrayList<Unit>();
		for(Department d: departments) {
			List<Unit> localUnits=getUnits(d.getDepartmentKey());
			for(Unit u : localUnits) {
				u.setDepartmentName(d.getDepartmentName());
				units.add(u);
			}
		}
		return units;
	}
	
	public List<Device> getCompanyDevices(String companyKey) throws IllegalArgumentException{
		List<Device> devices=new ArrayList<Device>();
		List<Unit> units=getCompanyUnits(companyKey);
		for(Unit u: units) {
			List<Device> localDevices=getDevices(u.getUnitKey());
			for(Device d: localDevices) {
				d.setUnitName(u.getUnit());
				d.setDepartmentName(u.getDepartmentName());
				devices.add(d);
			}
		}
		return devices;
	}
	
	public List<MaintenanceItem> getCompanyMaintenanceItems(String companyKey) throws IllegalArgumentException{
		List<MaintenanceItem> items=new ArrayList<MaintenanceItem>();
		List<Device> devices=getCompanyDevices(companyKey);
		for(Device d: devices) {
			List<MaintenanceItem> localItems=getMaintenanceEntriesFromKey(d.getDeviceKey());
			for(MaintenanceItem m: localItems) {
				m.setDeviceName(d.getDeviceName());
				m.setDeviceID(d.getId());
				m.setUnitName(d.getUnitName());
				m.setDepartmentName(d.getDepartmentName());
				items.add(m);
			}
		}
		return items;
	}

	public List<Measurement> getCompanyMeasurements(String companyKey) throws IllegalArgumentException{
		System.err.println("Mootmiste algus");
		List<Measurement> items=new ArrayList<Measurement>();
		List<Device> devices=getCompanyDevices(companyKey);
		System.out.println("seadmed: "+devices);
		for(Device d: devices) {
		   List<Measurement> localItems=getMeasurements(d.getDeviceKey());
		   System.out.println(localItems);
		   for(Measurement m: localItems) {
			   m.setDeviceName(d.getDeviceName());
			   m.setDeviceID(d.getId());
			   System.out.println(m.getDeviceName()+" did "+ m.getDeviceID());
			   m.setDepartmentName(d.getDepartmentName());
			   m.setUnitName(d.getUnitName());
			   if(m.getRaportKey().length()>0) {
				   Raport r=getRaport(m.getRaportKey());
				   m.setRaportID(r.getRaportID());
			   }
			   items.add(m);
		   }
		}
		System.out.println("Mootmisi: "+items.size()+" "+items);
		return items;
	}
	
	@Override
	public String updateDepartment(Department updatedDepartment) throws IllegalArgumentException {
		Entity e;
		try {
			e = ds.get(KeyFactory.stringToKey(updatedDepartment.getDepartmentKey()));
			//Check if unit name has been changed
			if (!e.getProperty("Department").toString().equalsIgnoreCase(updatedDepartment.getDepartmentName())) {
				//Check if unit with specified name already exists
				List<Department> departmentList = getDepartments(updatedDepartment.getCompanyKey());
				for (Department d : departmentList) {
					if (d.getDepartmentName().equalsIgnoreCase(updatedDepartment.getDepartmentName())) {
						return "Department with that name already exists!"; //TODO exception instead?
					}
				}
			}
			
			//Update unit if unit does not already exist
			e.setProperty("Department", updatedDepartment.getDepartmentName());
			ds.put(e);
		} catch (EntityNotFoundException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
			return "Department not found!";
		}
		return "Department updated!";
	}

	@Override
	public String deleteDepartment(String departmentKeyString) throws IllegalArgumentException {
		Key unitKey = KeyFactory.stringToKey(departmentKeyString);
		
		Query q = new Query().setAncestor(unitKey).setKeysOnly();
		
		List<Key> keys = new ArrayList<Key>();
		for (Entity e : ds.prepare(q).asIterable()) {
			keys.add(e.getKey());
		}
		
		ds.delete(keys);
		return "Department deleted!";
	}

	
	
	
	@Override
	public String storeUnit(Unit unit) throws IllegalArgumentException {
		//Check if unit with specified name already exists
		List<Unit> unitList = getUnits(unit.getDepartmentKey());
		for (Unit c : unitList) {
			if (c.getUnit().equalsIgnoreCase(unit.getUnit())) {
				return "Unit already exists!"; //TODO exception instead?
			}
		}
		
		//Create new unit if unit does not already exist
		Key departmentKey = KeyFactory.stringToKey(unit.getDepartmentKey());
		Entity e = new Entity("Unit", departmentKey);
		e.setProperty("Unit", unit.getUnit());
		
		ds.put(e);
		
		return "Unit stored: " + unit.getUnit();
	}

	@Override
	public List<Unit> getUnits(String departmentKeyString) throws IllegalArgumentException {
		Key departmentKey = KeyFactory.stringToKey(departmentKeyString);
		List<Unit> locationList = new ArrayList<Unit>();
		Query query = new Query("Unit", departmentKey).setAncestor(departmentKey).addSort("Unit", Query.SortDirection.ASCENDING);
		for (Entity e : ds.prepare(query).asIterable()) {
			Unit c = new Unit();
			if (e.getKey() != null && e.getProperty("Unit").toString() != null) {
				c.setUnitKey(KeyFactory.keyToString(e.getKey())); 
				c.setDepartmentKey(departmentKeyString);
				c.setUnit(e.getProperty("Unit").toString());
				locationList.add(c);
			}
		}
		
		return locationList;
	}

	@Override
	public String updateUnit(Unit updatedUnit) throws IllegalArgumentException {
		Entity e;
		try {
			e = ds.get(KeyFactory.stringToKey(updatedUnit.getUnitKey()));
			//Check if unit name has been changed
			if (!e.getProperty("Unit").toString().equalsIgnoreCase(updatedUnit.getUnit())) {
				//Check if unit with specified name already exists
				List<Unit> unitList = getUnits(updatedUnit.getDepartmentKey());
				for (Unit c : unitList) {
					if (c.getUnit().equalsIgnoreCase(updatedUnit.getUnit())) {
						return "Unit with that name already exists!"; //TODO exception instead?
					}
				}
			}
			
			//Update unit if unit does not already exist
			e.setProperty("Unit", updatedUnit.getUnit());
			ds.put(e);
		} catch (EntityNotFoundException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
			return "Unit not found!";
		}
		return "Unit updated!";
	}

	@Override
	public String deleteUnit(String unitKeyString) throws IllegalArgumentException {
		Key unitKey = KeyFactory.stringToKey(unitKeyString);
		
		Query q = new Query().setAncestor(unitKey).setKeysOnly();
		
		List<Key> keys = new ArrayList<Key>();
		for (Entity e : ds.prepare(q).asIterable()) {
			keys.add(e.getKey());
		}
		
		ds.delete(keys);
		return "Unit deleted!";
	}

	@Override
	public String storeDevice(Device device) throws IllegalArgumentException {
		//Check if device with specified ID already exists
		List<Device> deviceList = getDevices(device.getUnitKey());
		for (Device c : deviceList) {
			if (c.getId().equalsIgnoreCase(device.getId())) {
				return "Device already exists!"; //TODO exception instead?
			}
		}
		
		//Create new device if device does not already exist
		Key locationKey = KeyFactory.stringToKey(device.getUnitKey());
		
		Entity e = new Entity("Device", locationKey);
		e.setProperty("DeviceId", device.getId());
		e.setProperty("DeviceName", device.getDeviceName());
		e.setProperty("DeviceComment", device.getDeviceComment());
		e.setProperty("Location", device.getLocationName());
		e.setProperty("DeviceNickname", device.getDeviceNickname());
		e.setProperty("kWrpm", device.getDevicekWrpm());
		e.setProperty("DeviceType", device.getDeviceType());
		e.setProperty("DeviceManufacturer", device.getDeviceManufacturer());
		e.setProperty("DElaager", device.getDElaager());
		e.setProperty("DEsimmer", device.getDEsimmer());
		e.setProperty("DEVtihend", device.getDEVtihend());
		e.setProperty("DEnotes", device.getDEnotes());
		e.setProperty("NDElaager", device.getNDElaager());
		e.setProperty("NDEsimmer", device.getNDEsimmer());
		e.setProperty("NDEVtihend", device.getNDEVtihend());
		e.setProperty("NDEnotes", device.getNDEnotes());
			e.setProperty("CoupledDeviceName", device.getCoupledDeviceName());
			e.setProperty("CoupledDeviceComment", device.getCoupledDeviceComment());
			e.setProperty("CoupledDeviceType", device.getCoupledDeviceType());
			e.setProperty("CoupledDeviceManufacturer", device.getCoupledDeviceManufacturer());
			e.setProperty("MPlaager", device.getMPlaager());
			e.setProperty("MPsimmer", device.getMPsimmer());
			e.setProperty("MPVtihend", device.getMPVtihend());
			e.setProperty("MPnotes", device.getMPnotes());
			e.setProperty("TPlaager", device.getTPlaager());
			e.setProperty("TPsimmer", device.getTPsimmer());
			e.setProperty("TPVtihend", device.getTPVtihend());
			e.setProperty("TPnotes", device.getTPnotes());
		e.setProperty("HasCoupledDevice", device.hasCoupledDevice());
		
		ds.put(e);
		
		return "Device stored: " + device.getDeviceName();
	}
	@Override
	public List<Device> getListDevices() throws IllegalArgumentException {
		List<Device> deviceList = new ArrayList<Device>();
		//Filter filter = new FilterPredicate("LocationKey", FilterOperator.EQUAL, location.getLocationKey());
		Query query = new Query("Device").addSort("DeviceId", Query.SortDirection.ASCENDING);
		for (Entity e : ds.prepare(query).asIterable()) {
			Device c = new Device();
			if (e.getKey() != null && e.getProperty("DeviceName").toString() != null) {
				c.setDeviceKey(KeyFactory.keyToString(e.getKey()));
				c.setId(e.getProperty("DeviceId").toString());
				c.setDeviceName(e.getProperty("DeviceName").toString());
				c.setLocationName(e.getProperty("Location").toString());
				c.setDeviceNickname(e.getProperty("DeviceNickname").toString());
				c.setDevicekWrpm(e.getProperty("kWrpm").toString());
				c.setDeviceType(e.getProperty("DeviceType").toString());
				c.setDeviceManufacturer(e.getProperty("DeviceManufacturer").toString());
				c.setDElaager(e.getProperty("DElaager").toString());
				c.setDEsimmer(e.getProperty("DEsimmer").toString());
				c.setDEVtihend(e.getProperty("DEVtihend").toString());
				c.setDEnotes(e.getProperty("DEnotes").toString());
				c.setNDElaager(e.getProperty("NDElaager").toString());
				c.setNDEsimmer(e.getProperty("NDEsimmer").toString());
				c.setNDEVtihend(e.getProperty("NDEVtihend").toString());
				c.setNDEnotes(e.getProperty("NDEnotes").toString());
				if ((boolean) e.getProperty("HasCoupledDevice")) {
					c.setCoupledDeviceName(e.getProperty("CoupledDeviceName").toString());
					c.setCoupledDeviceType(e.getProperty("CoupledDeviceType").toString());
					c.setCoupledDeviceManufacturer(e.getProperty("CoupledDeviceManufacturer").toString());
					c.setMPlaager(e.getProperty("MPlaager").toString());
					c.setMPsimmer(e.getProperty("MPsimmer").toString());
					c.setMPVtihend(e.getProperty("MPVtihend").toString());
					c.setMPnotes(e.getProperty("MPnotes").toString());
					c.setTPlaager(e.getProperty("TPlaager").toString());
					c.setTPsimmer(e.getProperty("TPsimmer").toString());
					c.setTPVtihend(e.getProperty("TPVtihend").toString());
					c.setTPnotes(e.getProperty("TPnotes").toString());
				}
				
				deviceList.add(c);
			}
		}
		
		return deviceList;
	}
	
	private Device deviceFrom(Entity e) {
		Device c = new Device();
		if (e.getKey() != null && e.getProperty("DeviceName").toString() != null) {
			c.setDeviceKey(KeyFactory.keyToString(e.getKey()));
			c.setUnitKey(KeyFactory.keyToString(e.getParent()));
			c.setId(e.getProperty("DeviceId").toString());
			c.setDeviceName(e.getProperty("DeviceName").toString());
			c.setDeviceComment((e.getProperty("DeviceComment")!=null?e.getProperty("DeviceComment").toString():""));
			c.setLocationName(e.getProperty("Location").toString());
			c.setDeviceNickname(e.getProperty("DeviceNickname").toString());
			c.setDevicekWrpm(e.getProperty("kWrpm").toString());
			c.setDeviceType(e.getProperty("DeviceType").toString());
			c.setDeviceManufacturer(e.getProperty("DeviceManufacturer").toString());
			c.setDElaager(e.getProperty("DElaager").toString());
			c.setDEsimmer(e.getProperty("DEsimmer").toString());
			c.setDEVtihend(e.getProperty("DEVtihend").toString());
			c.setDEnotes(e.getProperty("DEnotes").toString());
			c.setNDElaager(e.getProperty("NDElaager").toString());
			c.setNDEsimmer(e.getProperty("NDEsimmer").toString());
			c.setNDEVtihend(e.getProperty("NDEVtihend").toString());
			c.setNDEnotes(e.getProperty("NDEnotes").toString());
			if ((boolean) e.getProperty("HasCoupledDevice")) {
				c.setCoupledDeviceName(e.getProperty("CoupledDeviceName").toString());
				c.setCoupledDeviceComment((e.getProperty("CoupledDeviceComment")!=null?e.getProperty("CoupledDeviceComment").toString():""));
				c.setCoupledDeviceType(e.getProperty("CoupledDeviceType").toString());
				c.setCoupledDeviceManufacturer(e.getProperty("CoupledDeviceManufacturer").toString());
				c.setMPlaager(e.getProperty("MPlaager").toString());
				c.setMPsimmer(e.getProperty("MPsimmer").toString());
				c.setMPVtihend(e.getProperty("MPVtihend").toString());
				c.setMPnotes(e.getProperty("MPnotes").toString());
				c.setTPlaager(e.getProperty("TPlaager").toString());
				c.setTPsimmer(e.getProperty("TPsimmer").toString());
				c.setTPVtihend(e.getProperty("TPVtihend").toString());
				c.setTPnotes(e.getProperty("TPnotes").toString());
			}
		}
		return c;
	}
	
	@Override
	public List<Device> getDevices(String unitKeyString) throws IllegalArgumentException {
		Key locationKey = KeyFactory.stringToKey(unitKeyString);
		List<Device> deviceList = new ArrayList<Device>();
		//Filter filter = new FilterPredicate("LocationKey", FilterOperator.EQUAL, location.getLocationKey());
		Query query = new Query("Device", locationKey).setAncestor(locationKey).addSort("DeviceId", Query.SortDirection.ASCENDING);
		for (Entity e : ds.prepare(query).asIterable()) {
			Device c = new Device();
			if (e.getKey() != null && e.getProperty("DeviceName").toString() != null) {
				c.setDeviceKey(KeyFactory.keyToString(e.getKey()));
				c.setUnitKey(unitKeyString);
				c.setId(e.getProperty("DeviceId").toString());
				c.setDeviceName(e.getProperty("DeviceName").toString());
				c.setDeviceComment((e.getProperty("DeviceComment")!=null?e.getProperty("DeviceComment").toString():""));
				c.setLocationName(e.getProperty("Location").toString());
				c.setDeviceNickname(e.getProperty("DeviceNickname").toString());
				c.setDevicekWrpm(e.getProperty("kWrpm").toString());
				c.setDeviceType(e.getProperty("DeviceType").toString());
				c.setDeviceManufacturer(e.getProperty("DeviceManufacturer").toString());
				c.setDElaager(e.getProperty("DElaager").toString());
				c.setDEsimmer(e.getProperty("DEsimmer").toString());
				c.setDEVtihend(e.getProperty("DEVtihend").toString());
				c.setDEnotes(e.getProperty("DEnotes").toString());
				c.setNDElaager(e.getProperty("NDElaager").toString());
				c.setNDEsimmer(e.getProperty("NDEsimmer").toString());
				c.setNDEVtihend(e.getProperty("NDEVtihend").toString());
				c.setNDEnotes(e.getProperty("NDEnotes").toString());
				if ((boolean) e.getProperty("HasCoupledDevice")) {
					c.setCoupledDeviceName(e.getProperty("CoupledDeviceName").toString());
					c.setCoupledDeviceType(e.getProperty("CoupledDeviceType").toString());
					c.setCoupledDeviceManufacturer(e.getProperty("CoupledDeviceManufacturer").toString());
					c.setCoupledDeviceComment((e.getProperty("CoupledDeviceComment")!=null?e.getProperty("CoupledDeviceComment").toString():""));
					c.setMPlaager(e.getProperty("MPlaager").toString());
					c.setMPsimmer(e.getProperty("MPsimmer").toString());
					c.setMPVtihend(e.getProperty("MPVtihend").toString());
					c.setMPnotes(e.getProperty("MPnotes").toString());
					c.setTPlaager(e.getProperty("TPlaager").toString());
					c.setTPsimmer(e.getProperty("TPsimmer").toString());
					c.setTPVtihend(e.getProperty("TPVtihend").toString());
					c.setTPnotes(e.getProperty("TPnotes").toString());
				}
				
				deviceList.add(c);
			}
		}
		
		return deviceList;
	}

	@Override
	public String updateDevice(Device updatedDevice) throws IllegalArgumentException {
		Entity e;
		try {
			e = ds.get(KeyFactory.stringToKey(updatedDevice.getDeviceKey()));
			//Check if device id has been changed
			if (!e.getProperty("DeviceId").toString().equalsIgnoreCase(updatedDevice.getId())) {
				//Check if device with specified id already exists
				List<Device> deviceList = getDevices(updatedDevice.getUnitKey());
				for (Device c : deviceList) {
					if (c.getId().equals(updatedDevice.getId())) {
						return "Device with that ID already exists!"; //TODO exception instead?
					}
				}
			}
			
			//Update device if device does not already exist
			e.setProperty("DeviceId", updatedDevice.getId());
			e.setProperty("DeviceName", updatedDevice.getDeviceName());
			e.setProperty("DeviceComment", updatedDevice.getDeviceComment());
			e.setProperty("Location", updatedDevice.getLocationName());
			e.setProperty("DeviceNickname", updatedDevice.getDeviceNickname());
			e.setProperty("kWrpm", updatedDevice.getDevicekWrpm());
			e.setProperty("DeviceType", updatedDevice.getDeviceType());
			e.setProperty("DeviceManufacturer", updatedDevice.getDeviceManufacturer());
			e.setProperty("DElaager", updatedDevice.getDElaager());
			e.setProperty("DEsimmer", updatedDevice.getDEsimmer());
			e.setProperty("DEVtihend", updatedDevice.getDEVtihend());
			e.setProperty("DEnotes", updatedDevice.getDEnotes());
			e.setProperty("NDElaager", updatedDevice.getNDElaager());
			e.setProperty("NDEsimmer", updatedDevice.getNDEsimmer());
			e.setProperty("NDEVtihend", updatedDevice.getNDEVtihend());
			e.setProperty("NDEnotes", updatedDevice.getNDEnotes());
			e.setProperty("CoupledDeviceName", updatedDevice.getCoupledDeviceName());
			e.setProperty("CoupledDeviceComment", updatedDevice.getCoupledDeviceComment());
				e.setProperty("CoupledDeviceType", updatedDevice.getCoupledDeviceType());
				e.setProperty("CoupledDeviceManufacturer", updatedDevice.getCoupledDeviceManufacturer());
				e.setProperty("MPlaager", updatedDevice.getMPlaager());
				e.setProperty("MPsimmer", updatedDevice.getMPsimmer());
				e.setProperty("MPVtihend", updatedDevice.getMPVtihend());
				e.setProperty("MPnotes", updatedDevice.getMPnotes());
				e.setProperty("TPlaager", updatedDevice.getTPlaager());
				e.setProperty("TPsimmer", updatedDevice.getTPsimmer());
				e.setProperty("TPVtihend", updatedDevice.getTPVtihend());
				e.setProperty("TPnotes", updatedDevice.getTPnotes());
			e.setProperty("HasCoupledDevice", updatedDevice.hasCoupledDevice());
			ds.put(e);
		} catch (EntityNotFoundException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
			return "Device not found!";
		}
		return "Device updated!";
	}

	@Override
	public String deleteDevice(String deviceKeyString) throws IllegalArgumentException {
		Key deviceKey = KeyFactory.stringToKey(deviceKeyString);
		
		/*Query q = new Query().setAncestor(deviceKey).setKeysOnly();
		
		List<Key> keys = new ArrayList<Key>();
		for (Entity e : ds.prepare(q).asIterable()) {
			keys.add(e.getKey());
		}
		
		ds.delete(keys);*/
		
		ds.delete(deviceKey);
		return "Device deleted!";
	}

	@Override
	public String storeMeasurement(Measurement measurement) throws IllegalArgumentException {
		Entity e;
		
		if (measurement.getMeasurementKey().equals("")) {
			//Create new measurement
			Key deviceKey = KeyFactory.stringToKey(measurement.getDeviceKey());
			
			e = new Entity("Measurement", deviceKey);
		} else {
			try {
				e = ds.get(KeyFactory.stringToKey(measurement.getMeasurementKey()));
			} catch (EntityNotFoundException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
				//return "Measurement not found!";
				Key deviceKey = KeyFactory.stringToKey(measurement.getDeviceKey());
				
				e = new Entity("Measurement", deviceKey);
			}
		}
		
		e.setProperty("DeviceID", measurement.getDeviceID());
		e.setProperty("DeviceName", measurement.getDeviceName());
		e.setProperty("RaportKey", measurement.getRaportKey());
		e.setProperty("Date", measurement.getDate());
		e.setProperty("Marking", measurement.getMarking());
		//e.setProperty("Comment", measurement.getComment() + " " + measurement.getNDEcomment() + " " + measurement.getDEcomment() + 
		//		" " + measurement.getMPcomment() + " " + measurement.getTPcomment());
		e.setProperty("Comment", measurement.getComment());
		e.setProperty("NDEmms", measurement.getNDEmms());
		e.setProperty("NDEge", measurement.getNDEge());
		e.setProperty("NDEcomment", measurement.getNDEcomment());
		e.setProperty("DEmms", measurement.getDEmms());
		e.setProperty("DEge", measurement.getDEge());
		e.setProperty("DEcomment", measurement.getDEcomment());
		e.setProperty("MPmms", measurement.getMPmms());
		e.setProperty("MPge", measurement.getMPge());
		e.setProperty("MPcomment", measurement.getMPcomment());
		e.setProperty("TPmms", measurement.getTPmms());
		e.setProperty("TPge", measurement.getTPge());
		e.setProperty("TPcomment", measurement.getTPcomment());
		e.setProperty("Status", measurement.getStatus());
		ds.put(e);
		
		return "Measurement stored: " + measurement.getDate();
	}
	@Override
	public List<Measurement> getListMeasurement() throws IllegalArgumentException {
		List<Measurement> measurementList = new ArrayList<Measurement>();
		Query query = new Query("Measurement").addSort("Date", Query.SortDirection.DESCENDING);
		for (Entity e : ds.prepare(query).asIterable()) {
			Measurement m = new Measurement();
			m.setDeviceKey(KeyFactory.keyToString(e.getParent()));
			m.setDeviceID(e.getProperty("DeviceID").toString());
			m.setRaportKey(e.getProperty("RaportKey").toString());
			m.setMeasurementKey(KeyFactory.keyToString(e.getKey()));
			m.setDate(e.getProperty("Date").toString());
			m.setDeviceName(e.getProperty("DeviceName").toString());
			m.setComment(e.getProperty("Comment").toString());
			m.setMarking(e.getProperty("Marking").toString());
			m.setNDEmms(e.getProperty("NDEmms").toString());
			m.setNDEge(e.getProperty("NDEge").toString());
			m.setNDEcomment(e.getProperty("NDEcomment").toString());
			m.setDEmms(e.getProperty("DEmms").toString());
			m.setDEge(e.getProperty("DEge").toString());
			m.setDEcomment(e.getProperty("DEcomment").toString());
			m.setMPmms(e.getProperty("MPmms").toString());
			m.setMPge(e.getProperty("MPge").toString());
			m.setMPcomment(e.getProperty("MPcomment").toString());
			m.setTPmms(e.getProperty("TPmms").toString());
			m.setTPge(e.getProperty("TPge").toString());
			m.setTPcomment(e.getProperty("TPcomment").toString());
			try{m.setStatus(e.getProperty("Status").toString());}catch(Exception ex) {}
			measurementList.add(m);
		}
		return measurementList;
	}
	@Override
	public List<Measurement> getMeasurements(String deviceKeyString) throws IllegalArgumentException {
		Key deviceKey = KeyFactory.stringToKey(deviceKeyString);
		List<Measurement> measurementList = new ArrayList<Measurement>();
		Query query = new Query("Measurement", deviceKey).setAncestor(deviceKey).addSort("Date", Query.SortDirection.DESCENDING);
		for (Entity e : ds.prepare(query).asIterable()) {
			Measurement m = new Measurement();
			m.setDeviceKey(deviceKeyString);
			//if (e.hasProperty("DeviceID")) {
			//	m.setDeviceID(e.getProperty("DeviceID").toString());
			//	m.setDeviceName(e.getProperty("DeviceName").toString());
			//}
			m.setMeasurementKey(KeyFactory.keyToString(e.getKey()));
			m.setRaportKey(e.getProperty("RaportKey").toString());
			m.setDate(e.getProperty("Date").toString());
			m.setComment(e.getProperty("Comment").toString());
			m.setMarking(e.getProperty("Marking").toString());
			m.setNDEmms(e.getProperty("NDEmms").toString());
			m.setNDEge(e.getProperty("NDEge").toString());
			m.setNDEcomment(e.getProperty("NDEcomment").toString());
			m.setDEmms(e.getProperty("DEmms").toString());
			m.setDEge(e.getProperty("DEge").toString());
			m.setDEcomment(e.getProperty("DEcomment").toString());
			m.setMPmms(e.getProperty("MPmms").toString());
			m.setMPge(e.getProperty("MPge").toString());
			m.setMPcomment(e.getProperty("MPcomment").toString());
			m.setTPmms(e.getProperty("TPmms").toString());
			m.setTPge(e.getProperty("TPge").toString());
			m.setTPcomment(e.getProperty("TPcomment").toString());
			try{m.setStatus(e.getProperty("Status").toString());}catch(Exception ex) {}
			measurementList.add(m);
		}
		
		return measurementList;
	}
	
	@Override
	public Measurement getMeasurement(String measurementKeyString) throws IllegalArgumentException {
		Key measurementKey = KeyFactory.stringToKey(measurementKeyString);
		Entity e;
		Measurement m = new Measurement();
		try {
			e = ds.get(measurementKey);
			//if (e.hasProperty("DeviceID")) {
			//	m.setDeviceID(e.getProperty("DeviceID").toString());
			//	m.setDeviceName(e.getProperty("DeviceName").toString());
			//}
			m.setMeasurementKey(KeyFactory.keyToString(e.getKey()));
			m.setRaportKey(e.getProperty("RaportKey").toString());
			m.setDate(e.getProperty("Date").toString());
			m.setComment(e.getProperty("Comment").toString());
			m.setMarking(e.getProperty("Marking").toString());
			m.setNDEmms(e.getProperty("NDEmms").toString());
			m.setNDEge(e.getProperty("NDEge").toString());
			m.setNDEcomment(e.getProperty("NDEcomment").toString());
			m.setDEmms(e.getProperty("DEmms").toString());
			m.setDEge(e.getProperty("DEge").toString());
			m.setDEcomment(e.getProperty("DEcomment").toString());
			m.setMPmms(e.getProperty("MPmms").toString());
			m.setMPge(e.getProperty("MPge").toString());
			m.setMPcomment(e.getProperty("MPcomment").toString());
			m.setTPmms(e.getProperty("TPmms").toString());
			m.setTPge(e.getProperty("TPge").toString());
			m.setTPcomment(e.getProperty("TPcomment").toString());
			try{m.setStatus(e.getProperty("Status").toString());}catch(Exception ex) {}
		} catch (EntityNotFoundException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
			
		return m;
	}

	@Override
	public Measurement getLastMeasurement(String deviceKeyString) throws IllegalArgumentException {
		Key deviceKey = KeyFactory.stringToKey(deviceKeyString);
		List<Measurement> measurementList = new ArrayList<Measurement>();
		Filter filter = new FilterPredicate("RaportKey", FilterOperator.EQUAL, "");
		Query query = new Query("Measurement", deviceKey).setAncestor(deviceKey).setFilter(filter).addSort("Date", Query.SortDirection.DESCENDING);
		for (Entity e : ds.prepare(query).asIterable()) {
			Measurement m = new Measurement();
			m.setDeviceKey(deviceKeyString);
			//if (e.hasProperty("DeviceID")) {
			//	m.setDeviceID(e.getProperty("DeviceID").toString());
			//	m.setDeviceName(e.getProperty("DeviceName").toString());
			//}
			m.setMeasurementKey(KeyFactory.keyToString(e.getKey()));
			m.setRaportKey(e.getProperty("RaportKey").toString());
			m.setDate(e.getProperty("Date").toString());
			m.setComment(e.getProperty("Comment").toString());
			m.setMarking(e.getProperty("Marking").toString());
			m.setNDEmms(e.getProperty("NDEmms").toString());
			m.setNDEge(e.getProperty("NDEge").toString());
			m.setNDEcomment(e.getProperty("NDEcomment").toString());
			m.setDEmms(e.getProperty("DEmms").toString());
			m.setDEge(e.getProperty("DEge").toString());
			m.setDEcomment(e.getProperty("DEcomment").toString());
			m.setMPmms(e.getProperty("MPmms").toString());
			m.setMPge(e.getProperty("MPge").toString());
			m.setMPcomment(e.getProperty("MPcomment").toString());
			m.setTPmms(e.getProperty("TPmms").toString());
			m.setTPge(e.getProperty("TPge").toString());
			m.setTPcomment(e.getProperty("TPcomment").toString());
			measurementList.add(m);
		}
		if (measurementList.size() > 0) {
			return measurementList.get(0);
		}
		return null;
	}

	@Override
	public String updateMeasurement(Measurement updatedMeasurement) throws IllegalArgumentException {
		// TODO Auto-generated method stub
		try {
 		  Entity e=ds.get(KeyFactory.stringToKey(updatedMeasurement.getMeasurementKey()));
 		  e.setProperty("Status", updatedMeasurement.getStatus());
 		  ds.put(e);
		}catch(Exception ex) {
			ex.printStackTrace();
		}
		return null;
	}

	@Override
	public String deleteMeasurement(String measurementKeyString) throws IllegalArgumentException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String storeRaport(Raport raport) throws IllegalArgumentException {
		Key unitKey = KeyFactory.stringToKey(raport.getUnitKey());
		Entity e;
		
		if (raport.getRaportKey().equals("")) {
			//Create new measurement
			e = new Entity("Raport", unitKey);
		} else {
			try {
				e = ds.get(KeyFactory.stringToKey(raport.getRaportKey()));
			} catch (EntityNotFoundException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
				//return "Measurement not found!";
				
				e = new Entity("Raport", unitKey);
			}
		}
		
		e.setProperty("UnitKey", raport.getUnitKey());
		e.setProperty("CompanyName", raport.getCompanyName());
		e.setProperty("UnitName", raport.getUnitName());
		e.setProperty("RaportID", raport.getRaportID());
		e.setProperty("Date", raport.getDate());
		e.setProperty("MeasurerName", raport.getMeasurerName());
		e.setProperty("MeasurerPhone", raport.getMeasurerPhone());
		
		String raportKey = KeyFactory.keyToString(ds.put(e));
		
		Filter filter = new FilterPredicate("RaportKey", FilterOperator.EQUAL, "");
		Query query = new Query("Measurement", unitKey).setAncestor(unitKey).setFilter(filter);
		List<Entity> measurements = ds.prepare(query).asList(FetchOptions.Builder.withDefaults());
		for (Entity d : measurements) {
			d.setProperty("RaportKey", raportKey);
		}
		ds.put(measurements);
		
		return "Raport stored: " + raport.getRaportID();
	}

	@Override
	public List<Raport> getRaports(String unitKeyString) throws IllegalArgumentException {
		Key unitKey = KeyFactory.stringToKey(unitKeyString);
		List<Raport> raportList = new ArrayList<Raport>();
		//Filter filter = new FilterPredicate("LocationKey", FilterOperator.EQUAL, location.getLocationKey());
		Query query = new Query("Raport", unitKey).setAncestor(unitKey).addSort("RaportID", Query.SortDirection.DESCENDING);
		for (Entity e : ds.prepare(query).asIterable()) {
			Raport c = new Raport();
			if (e.getKey() != null && e.getProperty("RaportID").toString() != null) {
				c.setRaportKey(KeyFactory.keyToString(e.getKey()));
				c.setUnitKey(unitKeyString);
				c.setCompanyName(e.getProperty("CompanyName").toString());
				c.setUnitName(e.getProperty("UnitName").toString());
				c.setRaportID(e.getProperty("RaportID").toString());
				c.setDate(e.getProperty("Date").toString());
				c.setMeasurerName(e.getProperty("MeasurerName").toString());
				c.setMeasurerPhone(e.getProperty("MeasurerPhone").toString());
				
				raportList.add(c);
			}
		}
		
		return raportList;
	}
	@Override
	public List<Raport> getListRaports() throws IllegalArgumentException {
		List<Raport> raportList = new ArrayList<Raport>();
		//Filter filter = new FilterPredicate("LocationKey", FilterOperator.EQUAL, location.getLocationKey());
		Query query = new Query("Raport").addSort("RaportID", Query.SortDirection.DESCENDING);
		for (Entity e : ds.prepare(query).asIterable()) {
			Raport c = new Raport();
			if (e.getProperty("RaportID").toString() != null) {
				c.setRaportKey(KeyFactory.keyToString(e.getKey()));
				c.setCompanyName(e.getProperty("CompanyName").toString());
				c.setUnitName(e.getProperty("UnitName").toString());
				c.setRaportID(e.getProperty("RaportID").toString());
				c.setDate(e.getProperty("Date").toString());
				c.setMeasurerName(e.getProperty("MeasurerName").toString());
				c.setMeasurerPhone(e.getProperty("MeasurerPhone").toString());
				
				raportList.add(c);
			}
		}
		
		return raportList;
	}
	@Override
	public Raport getRaport(String raportKeyString) throws IllegalArgumentException {
		Key raportKey = KeyFactory.stringToKey(raportKeyString);
		Raport r = new Raport();
		Entity e;
		try {
			e = ds.get(raportKey);
			r.setRaportKey(raportKeyString);
			r.setUnitKey(e.getProperty("UnitKey").toString());
			r.setCompanyName(e.getProperty("CompanyName").toString());
			r.setUnitName(e.getProperty("UnitName").toString());
			r.setRaportID(e.getProperty("RaportID").toString());
			r.setDate(e.getProperty("Date").toString());
			r.setMeasurerName(e.getProperty("MeasurerName").toString());
			r.setMeasurerPhone(e.getProperty("MeasurerPhone").toString());
		} catch (EntityNotFoundException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		
		return r;
	}

	@Override
	public List<Measurement> getRaportData(Raport raport) throws IllegalArgumentException {
		List<Measurement> measurementList = new ArrayList<Measurement>();
		Filter filter = new FilterPredicate("RaportKey", FilterOperator.EQUAL, raport.getRaportKey());
		Query query;
		Key unitKey = KeyFactory.stringToKey(raport.getUnitKey());
		query = new Query("Measurement").setAncestor(unitKey).setFilter(filter).addSort("DeviceID", Query.SortDirection.ASCENDING);
		for (Entity e : ds.prepare(query).asIterable()) {
			Measurement m = new Measurement();
			try {
				Entity device = ds.get(e.getParent());
				m.setDeviceName(device.getProperty("DeviceName").toString());
				m.setDeviceID(device.getProperty("DeviceId").toString());
			} catch (EntityNotFoundException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
				m.setDeviceName(e.getProperty("DeviceName").toString());
				m.setDeviceID(e.getProperty("DeviceID").toString());
			}
			m.setMeasurementKey(KeyFactory.keyToString(e.getKey()));
			m.setRaportKey(e.getProperty("RaportKey").toString());
			m.setDate(e.getProperty("Date").toString());
			m.setComment(e.getProperty("Comment").toString());
			m.setMarking(e.getProperty("Marking").toString());
			m.setNDEmms(e.getProperty("NDEmms").toString());
			m.setNDEge(e.getProperty("NDEge").toString());
			m.setNDEcomment(e.getProperty("NDEcomment").toString());
			m.setDEmms(e.getProperty("DEmms").toString());
			m.setDEge(e.getProperty("DEge").toString());
			m.setDEcomment(e.getProperty("DEcomment").toString());
			m.setMPmms(e.getProperty("MPmms").toString());
			m.setMPge(e.getProperty("MPge").toString());
			m.setMPcomment(e.getProperty("MPcomment").toString());
			m.setTPmms(e.getProperty("TPmms").toString());
			m.setTPge(e.getProperty("TPge").toString());
			m.setTPcomment(e.getProperty("TPcomment").toString());
			measurementList.add(m);
		}
		return measurementList;
	}
	
	@Override
	public List<String> getImageNames(String deviceKey){
		System.out.println("pyyab pilte");
		Query q = new Query("PictureName", KeyFactory.stringToKey(deviceKey));
		List<String> vastus=new ArrayList<String>();
		System.out.println(deviceKey);
		for(Entity e: ds.prepare(q).asIterable()) {
			String fname=e.getProperty("filename").toString();
			System.out.println(fname);
			if(e.hasProperty("hidden") && e.getProperty("hidden").toString().contentEquals("true")) {
				
			} else {
			  vastus.add(e.getProperty("filename").toString());
			}
		}
		System.out.println(vastus);
/*		Query q=new Query("_ah_FakeCloudStorage__ICAgIC0CAw");
		for(Entity e: ds.prepare(q).asIterable()) {
			System.out.println(e.getProperties());
			vastus.add(e.getProperty("ID/Name").toString());
		}*/
		return vastus;
	}
	
	public String hideImageName(String imageURL) {
		System.out.println("Peidetakse "+imageURL);
		Filter filter = new FilterPredicate("filename", FilterOperator.EQUAL, imageURL);
		Query q=new Query("PictureName").setFilter(filter);
		Entity e=ds.prepare(q).asSingleEntity();
		if(e!=null) {
			e.setProperty("hidden", "true");
			ds.put(e);
			return "hidded";
		}
		return "missing";
	}
}











 