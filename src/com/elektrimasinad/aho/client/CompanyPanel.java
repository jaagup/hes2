package com.elektrimasinad.aho.client;

import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.util.List;

import com.elektrimasinad.aho.shared.Company;
import com.google.gwt.core.client.Scheduler;
import com.google.gwt.core.client.Scheduler.ScheduledCommand;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.HasHorizontalAlignment;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.PasswordTextBox;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.VerticalPanel;

public class CompanyPanel extends VerticalPanel {
	private TextBox companyName;
	private TextBox accountName;
	private TextBox accountPassword;
	private String companyOld;
	
	
	public CompanyPanel() {
		super();
		
		createNewCompanyPanel();
	}
	
	private void createNewCompanyPanel() {
		super.clear();
		companyOld = "";
		
		//Header
		HorizontalPanel headerPanel = AhoWidgets.createContentHeader("Ettev\u00F5tte andmed");
		add(headerPanel);
		
		//Content
		companyName = AhoWidgets.createTextbox("aho-textbox1 large", "");
		accountName = AhoWidgets.createTextbox("aho-textbox1 large", "");
		accountPassword = AhoWidgets.createTextbox("aho-textbox1 large", "");
		VerticalPanel companyNamePanel = new VerticalPanel();
		companyNamePanel.setStyleName("aho-panel1");
		companyNamePanel.add(AhoWidgets.createLabel("Ettev\u00F5te", "aho-label1", null));
		companyNamePanel.add(companyName);
		companyNamePanel.add(AhoWidgets.createLabel("Kasutajanimi", "aho-label1", null));
		companyNamePanel.add(accountName);
		companyNamePanel.add(AhoWidgets.createLabel("Parool", "aho-label1", null));
		companyNamePanel.add(accountPassword);
		companyNamePanel.setCellHorizontalAlignment(companyName, HasHorizontalAlignment.ALIGN_RIGHT);
		add(companyNamePanel);
		
		Scheduler.get().scheduleDeferred(new ScheduledCommand() {

		    @Override
		    public void execute() {
		    	companyName.setFocus(true);
		    }
		});
	}
	
	@Override
	public void clear() {
		createNewCompanyPanel();
	}
	
	public void saveCompany(List<Company> companyList, AsyncCallback<String> storeCompanyCallback) throws IllegalArgumentException {
		
		//TODO save company to datastore and remove companyList logic from this method (reload companies from datastore)
		if (companyName.getText().trim().isEmpty()) {
			return;
		}
		for (Company company: companyList) {
			if (company.getCompanyName() == companyName.getText()) {
				if (companyOld != companyName.getText()) {
					//TODO company already exists exception
					return;
				}
			}
		}
		if (companyOld .contentEquals("")) {
			Company company = new Company(companyName.getText());
			DeviceCard.getDevicetreeservice().storeCompany(company, accountName.getValue(), accountPassword.getValue(), storeCompanyCallback);
		} else {
			for (Company company: companyList) {
				if (company.getCompanyName().contentEquals(companyOld)) {
					Company updatedCompany = companyList.get(companyList.indexOf(company));
					updatedCompany.setCompanyName(companyName.getText());
					updatedCompany.setCompanyUsername(companyName.getText());
					DeviceCard.getDevicetreeservice().updateCompany(updatedCompany, storeCompanyCallback);
					return;
				}
			}
		}
		
	}
	
	public void createEditCompanyPanel(Company company) {
		companyOld = company.getCompanyName();
		companyName.setText(company.getCompanyName());
	}
}