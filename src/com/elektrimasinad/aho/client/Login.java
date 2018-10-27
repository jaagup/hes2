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
import com.google.gwt.event.dom.client.KeyDownEvent;
import com.google.gwt.event.dom.client.KeyDownHandler;
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

public class Login implements EntryPoint{
	
	private int MAIN_WIDTH = 900;
	private int CONTENT_WIDTH = 800;
	private static final DeviceTreeServiceAsync deviceTreeService = GWT.create(DeviceTreeService.class);
	private static final UserInfoServiceAsync userInfoService = GWT.create(UserInfoService.class);
	private AsyncCallback<List<Company>> getCompanyListCallback;
	private AsyncCallback<String> storeCompanyCallback;
	private VerticalPanel mainPanel;
	private AbsolutePanel headerPanel;
	private DeckPanel contentPanel;
	private Company selectedCompany;
	private VerticalPanel companyListPanel = new VerticalPanel();
	private AsyncCallback<List<Measurement>> getMeasurementsCallback;
	private AsyncCallback<String> getAccountDataCallback;
	protected List<Measurement> measurements;
	private List<Company> companyList = new ArrayList<Company>();
	private boolean isDevMode;
	private boolean isMobileView;
	private String accountKey;
	private Storage sessionStore;
	private Label userLabel;
	
	@Override
	public void onModuleLoad() {
/*
  		String[] testNames = {"elektrimasinad", "mitte_elektrimasinad", "auruseadmed"};
 
		for (int i = 0; i < 3; i++) {
			Company testCompany = new Company();
			testCompany.setCompanyName(testNames[i]);
			deviceTreeService.storeCompany(testCompany, testCompany.getCompanyName(), "test", storeCompanyCallback);
		}
*/		
		sessionStore = Storage.getSessionStorageIfSupported();
		if (Window.Location.getHref().contains("127.0.0.1")) isDevMode = true;
		else isDevMode = false;
		if (Window.getClientWidth() < 1000) {
			isMobileView = true;
		} else {
			isMobileView = false;
		}
//		isMobileView=false;
		Window.addResizeHandler(new ResizeHandler() {

		    @Override
		    public void onResize(ResizeEvent event) {
		    	if (Window.getClientWidth() < 1000) {
					isMobileView = true;
				} else {
					isMobileView = false;
				}
				//isMobileView=false;
		    	updateWidgetSizes();
		    }
		});
		
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
				Window.alert("sisenemisprobleem");
				
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
//		Image elektrimasinadImage=new Image("res/valgelogo.png");
//		Image elektrimasinadImage=new Image("res/elektrimasinad.gif");
//		Image elektrimasinadImage=new Image("res/elektrimasinad_labipaistev.png");
		Image elektrimasinadImage=new Image("res/elektrimasinad2.jpeg");
		
		HorizontalPanel navigationPanel = new HorizontalPanel();
		navigationPanel.setStyleName("aho-navigationPanel");
		navigationPanel.add(headerImage);
		headerImage.setHeight("90px");
		navigationPanel.add(elektrimasinadImage);
		elektrimasinadImage.setHeight("90px");
//		navigationPanel.setCellWidth(headerImage, "52px");
		navigationPanel.setCellWidth(headerImage, "250px");
		navigationPanel.setCellHeight(headerImage, "90px");
		headerPanel = new AbsolutePanel();
		headerPanel.setStyleName("loginHeaderBackground");
		headerPanel.add(navigationPanel);
		mainPanel.add(headerPanel);
		
		contentPanel = new DeckPanel();
		mainPanel.add(contentPanel);
		mainPanel.setCellHeight(contentPanel, "100%");
		
		RootPanel rootPanel = RootPanel.get();
		rootPanel.setStyleName("mainBackground2");
		rootPanel.add(mainPanel);
		
		init();
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
					sessionStore.setItem("selectedCompany", company.getCompanyName());
					createLoginPanel();
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
		loginPanel.setWidth("80%");
		Label userLabel = new Label();
		userLabel.setStyleName("userLabel");
		userLabel.setText("Ettev\u00F5te");
		TextBox loginUser = new TextBox();
		loginUser.setStyleName("loginUser");
		loginUser.setValue(sessionStore.getItem("selectedCompany"));
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
		loginPass.addKeyDownHandler(new KeyDownHandler() {
			
			@Override
			public void onKeyDown(KeyDownEvent arg0) {
               int kood=arg0.getNativeKeyCode();
               DebugClientSide.log("kood: "+kood);
               if(kood==13) {
            	   loginButton.click();
               }
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
}
