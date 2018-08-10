package com.elektrimasinad.aho.client;

import java.util.ArrayList;
import java.util.List;

import com.elektrimasinad.aho.shared.Company;
import com.elektrimasinad.aho.shared.Device;
import com.elektrimasinad.aho.shared.Measurement;
import com.elektrimasinad.aho.shared.Unit;
import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.logical.shared.ResizeEvent;
import com.google.gwt.event.logical.shared.ResizeHandler;
import com.google.gwt.storage.client.Storage;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.AbsolutePanel;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.DeckPanel;
import com.google.gwt.user.client.ui.HasHorizontalAlignment;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.Panel;
import com.google.gwt.user.client.ui.PasswordTextBox;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.VerticalPanel;

public class Admin implements EntryPoint{
	
	private int MAIN_WIDTH = 900;
	private int CONTENT_WIDTH = 800;
	private static final DeviceTreeServiceAsync deviceTreeService = GWT.create(DeviceTreeService.class);
	private static final UserInfoServiceAsync userInfoService = GWT.create(UserInfoService.class);
	private AsyncCallback<List<Company>> getCompanyListCallback;
	private AsyncCallback<String> storeCompanyCallback;
	private AsyncCallback<String> updateCompanyCallback;
	private VerticalPanel mainPanel;
	private AbsolutePanel headerPanel;
	private DeckPanel contentPanel;
	private Company selectedCompany;
	private VerticalPanel companyListPanel = new VerticalPanel();
	private VerticalPanel adminLogonPanel = new VerticalPanel();
	private AsyncCallback<List<Measurement>> getMeasurementsCallback;
	private AsyncCallback<String> getAccountDataCallback;
	private AsyncCallback<String> getAdminAccountDataCallback;
	private AsyncCallback<String> createAdminAccountCallback;
	protected List<Measurement> measurements;
	private List<Company> companyList = new ArrayList<Company>();
	private boolean isDevMode;
	private boolean isMobileView;
	private String accountKey;
	private Storage sessionStore;
	private Label userLabel;
	
	@Override
	public void onModuleLoad() {
		
		if (Window.Location.getHref().contains("127.0.0.1")) isDevMode = true;
		else isDevMode = false;
		if (Window.getClientWidth() < 1000) {
			isMobileView = true;
		} else {
			isMobileView = false;
		}
		Window.addResizeHandler(new ResizeHandler() {

		    @Override
		    public void onResize(ResizeEvent event) {
		    	if (Window.getClientWidth() < 1000) {
					isMobileView = true;
				} else {
					isMobileView = false;
				}
		    	updateWidgetSizes();
		    }
		});
		getAdminAccountDataCallback = new AsyncCallback<String>() {

			@Override
			public void onFailure(Throwable arg0) {
				// TODO Auto-generated method stub
				
			}

			@Override
			public void onSuccess(String arg0) {
				// TODO Auto-generated method stub
				sessionStore.setItem("hasAdminLogon", arg0);
				Window.Location.reload();
			}
			
		};
		updateCompanyCallback = new AsyncCallback<String>() {

			@Override
			public void onFailure(Throwable arg0) {
				// TODO Auto-generated method stub
				
			}

			@Override
			public void onSuccess(String arg0) {
				// TODO Auto-generated method stub
				Window.alert("Company updated!");
			}
			
		};
		getCompanyListCallback = new AsyncCallback<List<Company>>() {
			
			@Override
			public void onSuccess(List<Company> companies) {
				//System.out.println(name);
				companyList = companies;
				createCompanyListPanel();
			}
			
			@Override
			public void onFailure(Throwable caught) {
				System.err.println(caught);
			}
			
		};
		getAccountDataCallback = new AsyncCallback<String>() {
			
			@Override
			public void onSuccess(String accountData) {
				accountKey = accountData;
				if(accountKey != "failed") {
					sessionStore.setItem("Account", accountKey);
					Window.Location.assign("/Index.html");
				}
				
			}

			@Override
			public void onFailure(Throwable arg0) {
				// TODO Auto-generated method stub
				
			}
		};
		storeCompanyCallback = new AsyncCallback<String>() {
			
			@Override
			public void onSuccess(String name) {
				System.out.println(name);
				fetchCompanies();
			}
			
			@Override
			public void onFailure(Throwable caught) {
				System.err.println(caught);
			}
			
		};
		createAdminAccountCallback = new AsyncCallback<String>() {

			@Override
			public void onFailure(Throwable arg0) {
				// TODO Auto-generated method stub
				
			}

			@Override
			public void onSuccess(String arg0) {
				// TODO Auto-generated method stub
				Window.alert(arg0);
			}
			
		};
		userInfoService.createAdminAccount("admin", "test", createAdminAccountCallback);
		
		RootPanel root = RootPanel.get();
		root.setStyleName("mainBackground2");
		
		mainPanel = new VerticalPanel();
		if (isMobileView) {
			mainPanel.setStyleName("panelBackground mobile");
		} else {
			mainPanel.setStyleName("panelBackground");
		}
		
		
		Image headerImage = new Image("res/hes-symbol.jpg");
		headerImage.setStyleName("aho-headerImage");
		headerImage.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				if(isDevMode) Window.Location.assign(Window.Location.getHref().replace("index", "index"));
				else Window.Location.assign("/Index.html");
			}
			
		});
		
		HorizontalPanel navigationPanel = new HorizontalPanel();
		navigationPanel.setStyleName("aho-navigationPanel");
		navigationPanel.add(headerImage);
		navigationPanel.setCellWidth(headerImage, "52px");
		headerPanel = new AbsolutePanel();
		headerPanel.setStyleName("headerBackground");
		headerPanel.add(navigationPanel);
		mainPanel.add(headerPanel);
		
		contentPanel = new DeckPanel();
		mainPanel.add(contentPanel);
		mainPanel.setCellHeight(contentPanel, "100%");
		
		RootPanel rootPanel = RootPanel.get();
		rootPanel.setStyleName("mainBackground2");
		rootPanel.add(mainPanel);
		
		sessionStore = Storage.getSessionStorageIfSupported();
		if(sessionStore.getItem("hasAdminLogon") == "yes") {
			init();
		} else {
			initAdminLogon();
		}
		updateWidgetSizes();
	}
	private void fetchCompanies() {
		deviceTreeService.getCompanies(getCompanyListCallback);
	}
	private void updateWidgetSizes() {
		String contentWidth = "90%";
		MAIN_WIDTH = 700;
		if (isMobileView) {
			MAIN_WIDTH = Window.getClientWidth();
			contentWidth = "95%";
		}
		mainPanel.setWidth(MAIN_WIDTH + "px");
		mainPanel.setHeight(Window.getClientHeight() + "px");
		contentPanel.setWidth(CONTENT_WIDTH + "px");
	}
	private void init() {
		//generateDemoData();
		fetchCompanies();
		contentPanel.add(companyListPanel);
		
		//devTree = new DeviceTree();
		//generateDemoTreeData();
		//device = new Device("Tartu Graanul", "Graanuli tootmine", "Tehas1", "Haamerveski Champion", "110/1500", "1LE1503", "SIEMENS",
		//		"6319/C3", "", "", "", "6319/C3", "", "", "", "Haamerveski", "", "", "22322", "", "", "", "22322", "", "", "");
		//createDeviceTreePanel();
		
		//contentPanel.add(deviceTreePanel);
		//contentPanel.showWidget(contentPanel.getWidgetIndex(deviceTreePanel));
		mainPanel.setCellHorizontalAlignment(contentPanel, HasHorizontalAlignment.ALIGN_CENTER);
	}
	private void initAdminLogon() {
		createAdminLogonPanel();
	}
	public VerticalPanel createCompanyListPanel() {
		companyListPanel.clear();
		companyListPanel.setWidth("100%");
		
		//Buttons panel
		Label lLabel1 = new Label("");
		lLabel1.setStyleName("backSaveLabel noPointer");
		
		HorizontalPanel buttonsPanel = new HorizontalPanel();
		buttonsPanel.setStyleName("backSavePanel");
		buttonsPanel.add(lLabel1);
		buttonsPanel.setCellWidth(lLabel1, "50%");
		companyListPanel.add(buttonsPanel);
		
		//Header Panel
		HorizontalPanel headerPanel = AhoWidgets.createThinContentHeader("Ettev\u00F5tted");
		companyListPanel.add(headerPanel);
		
		//Companies list
		for (final Company company : companyList) {
			Label lCompany = new Label(company.getCompanyName());
			lCompany.setStyleName("aho-listItem");
			lCompany.addClickHandler(new ClickHandler() {
				
				@Override
				public void onClick(ClickEvent event) {
					sessionStore.setItem("adminPanelSelectedCompany", company.getCompanyName());
					createEditPanel(company);
				}
				
			});
			companyListPanel.add(lCompany);
		}
		
		contentPanel.showWidget(contentPanel.getWidgetIndex(companyListPanel));
		
		return companyListPanel;
	}
	private void createLoginPanel() {
		contentPanel.clear();
		VerticalPanel loginPanel = new VerticalPanel();
		loginPanel.setStyleName("loginPanel");
		Label userLabel = new Label();
		userLabel.setStyleName("userLabel");
		userLabel.setText("Ettev\u00F5te");
		TextBox loginUser = new TextBox();
		loginUser.setStyleName("loginUser");
		Label pwsLabel = new Label();
		pwsLabel.setStyleName("userLabel");
		pwsLabel.setText("Parool");
		PasswordTextBox loginPass = new PasswordTextBox();
		loginPass.setStyleName("loginUser");
		String companyName = sessionStore.getItem("selectedCompany");
		Button loginButton = new Button("Logi sisse", new ClickHandler() {

			@Override
			public void onClick(ClickEvent event) {
				userInfoService.getAccountData(loginUser.getValue(), loginPass.getValue(), companyName, getAccountDataCallback);
			}
			
		});
		loginButton.setStyleName("loginBtn");
		loginPanel.add(userLabel);
		loginPanel.add(loginUser);
		loginPanel.add(pwsLabel);
		loginPanel.add(loginPass);
		loginPanel.add(loginButton);
		contentPanel.add(loginPanel);
		contentPanel.showWidget(contentPanel.getWidgetIndex(loginPanel));
	}
	private void createAdminLogonPanel() {
		contentPanel.clear();
		VerticalPanel loginPanel = new VerticalPanel();
		loginPanel.setStyleName("loginPanel");
		Label userLabel = new Label();
		userLabel.setStyleName("userLabel");
		userLabel.setText("Kasutajanimi");
		TextBox loginUser = new TextBox();
		loginUser.setStyleName("loginUser");
		Label pwsLabel = new Label();
		pwsLabel.setStyleName("userLabel");
		pwsLabel.setText("Parool");
		PasswordTextBox loginPass = new PasswordTextBox();
		loginPass.setStyleName("loginUser");
		Button loginButton = new Button("Logi sisse", new ClickHandler() {

			@Override
			public void onClick(ClickEvent event) {
				userInfoService.getAdminAccountData(loginUser.getValue(), loginPass.getValue(), getAdminAccountDataCallback);
			}
			
		});
		loginButton.setStyleName("loginBtn");
		loginPanel.add(userLabel);
		loginPanel.add(loginUser);
		loginPanel.add(pwsLabel);
		loginPanel.add(loginPass);
		loginPanel.add(loginButton);
		contentPanel.add(loginPanel);
		contentPanel.showWidget(contentPanel.getWidgetIndex(loginPanel));
	}
	private void createEditPanel(Company c) {
		contentPanel.clear();
		VerticalPanel editCompany = new VerticalPanel();
		Label editCompanyNameLabel = new Label("Nimi");
		TextBox editCompanyName = new TextBox();
		editCompanyName.setValue(c.getCompanyName());
		Label editCompanyUsernameLabel = new Label("Kasutajanimi");
		TextBox editCompanyUsername = new TextBox();
		editCompanyName.setValue(c.getCompanyUsername());
		Label editCompanyPasswordLabel = new Label("Salas�na");
		PasswordTextBox editCompanyPassword = new PasswordTextBox();
		editCompanyName.setValue(c.getCompanyPassword());
		Button editCompanySave = new Button("Salvesta", new ClickHandler() {

			@Override
			public void onClick(ClickEvent arg0) {
				// TODO Auto-generated method stub
				c.setCompanyName(editCompanyName.getValue().toString());
				c.setCompanyUsername(editCompanyUsername.getValue().toString());
				c.setCompanyPassword(editCompanyPassword.getValue().toString());
				deviceTreeService.updateCompany(c, updateCompanyCallback);
			}
			
		});
		editCompany.add(editCompanyNameLabel);
		editCompany.add(editCompanyName);
		editCompany.add(editCompanyUsernameLabel);
		editCompany.add(editCompanyUsername);
		editCompany.add(editCompanyPasswordLabel);
		editCompany.add(editCompanyPassword);
		editCompany.add(editCompanySave);
		contentPanel.add(editCompany);
		contentPanel.showWidget(contentPanel.getWidgetIndex(editCompany));
	}
}
