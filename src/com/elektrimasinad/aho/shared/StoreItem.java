package com.elektrimasinad.aho.shared;

public class StoreItem implements java.io.Serializable{
  private static final long serialVersionUID=1L;
  private String companyKeyString;
  private String entityKeyString;
  private String sysId;
  private String productCode;
  private String productName;
  private String workingCode;
  private String category;
  private String categoryKey;
  private String subCategory;
  private String storeName;
  private String storeKey;
  private String storePlace;
  private String storePlaceKey;
  private String producer;
  private String producerKey;
  private String contractor;
  private String contractorKey;
  private String amount;
  private String minAmount;
  private String price;
  private String departmentKey;
  private String departmentName="";
  private String unitKey;
  private String unitName="";
  private String deviceKey;
  private String deviceName="";
  private String status="normal"; //hidden, deleted
public String getCompanyKeyString() {
	return companyKeyString;
}
public void setCompanyKeyString(String companyKeyString) {
	this.companyKeyString = companyKeyString;
}
public String getSysId() {
	return sysId;
}
public void setSysId(String sysId) {
	this.sysId = sysId;
}
public String getProductCode() {
	return productCode;
}
public void setProductCode(String productCode) {
	this.productCode = productCode;
}
public String getProductName() {
	return productName;
}
public void setProductName(String productName) {
	this.productName = productName;
}
public String getWorkingCode() {
	return workingCode;
}
public void setWorkingCode(String workingCode) {
	this.workingCode = workingCode;
}
public String getCategory() {
	return category;
}
public void setCategory(String category) {
	this.category = category;
}
public String getSubCategory() {
	return subCategory;
}
public void setSubCategory(String subCategory) {
	this.subCategory = subCategory;
}
public String getStoreName() {
	return storeName;
}
public void setStoreName(String storeName) {
	this.storeName = storeName;
}
public String getStorePlace() {
	return storePlace;
}
public void setStorePlace(String storePlace) {
	this.storePlace = storePlace;
}
public String getProducer() {
	return producer;
}
public void setProducer(String producer) {
	this.producer = producer;
}
public String getContractor() {
	return contractor;
}
public void setContractor(String contractor) {
	this.contractor = contractor;
}
public String getAmount() {
	return amount;
}
public void setAmount(String amount) {
	this.amount = amount;
}
public String getMinAmount() {
	return minAmount;
}
public void setMinAmount(String minAmount) {
	this.minAmount = minAmount;
}
public String getPrice() {
	return price;
}
public void setPrice(String price) {
	this.price = price;
}
public String getDepartmentKey() {
	return departmentKey;
}
public void setDepartmentKey(String departmentKey) {
	this.departmentKey = departmentKey;
}
public String getUnitKey() {
	return unitKey;
}
public void setUnitKey(String unitKey) {
	this.unitKey = unitKey;
}
public String getDeviceKey() {
	return deviceKey;
}
public void setDeviceKey(String deviceKey) {
	this.deviceKey = deviceKey;
}
public String getDepartmentName() {
	return departmentName;
}
public void setDepartmentName(String departmentName) {
	this.departmentName = departmentName;
}
public String getUnitName() {
	return unitName;
}
public void setUnitName(String unitName) {
	this.unitName = unitName;
}
public String getDeviceName() {
	return deviceName;
}
public void setDeviceName(String deviceName) {
	this.deviceName = deviceName;
}
public String getStoreKey() {
	return storeKey;
}
public void setStoreKey(String storeKey) {
	this.storeKey = storeKey;
}
public String getStorePlaceKey() {
	return storePlaceKey;
}
public void setStorePlaceKey(String storePlaceKey) {
	this.storePlaceKey = storePlaceKey;
}
public String getProducerKey() {
	return producerKey;
}
public void setProducerKey(String producerKey) {
	this.producerKey = producerKey;
}
public String getContractorKey() {
	return contractorKey;
}
public void setContractorKey(String contractorKey) {
	this.contractorKey = contractorKey;
}
public String getCategoryKey() {
	return categoryKey;
}
public void setCategoryKey(String categoryKey) {
	this.categoryKey = categoryKey;
}
public String getEntityKeyString() {
	return entityKeyString;
}
public void setEntityKeyString(String entityKeyString) {
	this.entityKeyString = entityKeyString;
}
public String getStatus() {
	return status;
}
public void setStatus(String status) {
	this.status = status;
}
  
}
