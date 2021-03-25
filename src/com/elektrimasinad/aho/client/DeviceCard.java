package com.elektrimasinad.aho.client;

//import static java.util.stream.Collectors.toList;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.List;
import java.util.Map;

import com.elektrimasinad.aho.shared.Company;
import com.elektrimasinad.aho.shared.Department;
import com.elektrimasinad.aho.shared.Device;
import com.elektrimasinad.aho.shared.MaintenanceItem;
import com.elektrimasinad.aho.shared.Measurement;
import com.elektrimasinad.aho.shared.Raport;
import com.elektrimasinad.aho.shared.Role;
import com.elektrimasinad.aho.shared.StoreItem;
import com.elektrimasinad.aho.shared.Unit;
import com.elektrimasinad.aho.shared.Worker;
import com.elektrimasinad.aho.shared.StoreMeta;
import com.google.gwt.cell.client.SafeHtmlCell;
import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ChangeEvent;
import com.google.gwt.event.dom.client.ChangeHandler;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.dom.client.KeyCodes;
import com.google.gwt.event.dom.client.KeyPressEvent;
import com.google.gwt.event.dom.client.KeyPressHandler;
import com.google.gwt.event.dom.client.KeyUpEvent;
import com.google.gwt.event.dom.client.KeyUpHandler;
import com.google.gwt.event.dom.client.MouseDownHandler;
import com.google.gwt.event.logical.shared.ResizeEvent;
import com.google.gwt.event.logical.shared.ResizeHandler;
import com.google.gwt.event.logical.shared.SelectionEvent;
import com.google.gwt.event.logical.shared.SelectionHandler;
import com.google.gwt.event.logical.shared.ValueChangeEvent;
import com.google.gwt.event.logical.shared.ValueChangeHandler;
import com.google.gwt.i18n.client.DateTimeFormat;
import com.google.gwt.i18n.client.TimeZone;
import com.google.gwt.regexp.shared.RegExp;
import com.google.gwt.safehtml.shared.SafeHtml;
import com.google.gwt.safehtml.shared.SafeHtmlUtils;
import com.google.gwt.storage.client.Storage;
import com.google.gwt.user.cellview.client.CellTable;
import com.google.gwt.user.cellview.client.Column;
import com.google.gwt.user.cellview.client.TextColumn;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.AbsolutePanel;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.CheckBox;
import com.google.gwt.user.client.ui.DeckPanel;
import com.google.gwt.user.client.ui.DoubleBox;
import com.google.gwt.user.client.ui.Grid;
import com.google.gwt.user.client.ui.HasHorizontalAlignment;
import com.google.gwt.user.client.ui.HasHorizontalAlignment.HorizontalAlignmentConstant;
import com.google.gwt.user.client.ui.ValueBoxBase.TextAlignment;
import com.google.gwt.view.client.SelectionChangeEvent;
import com.google.gwt.view.client.SingleSelectionModel;
import com.sun.java.swing.plaf.windows.resources.windows;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.IntegerBox;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.Panel;
import com.google.gwt.user.client.ui.PopupPanel;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.ScrollPanel;
import com.google.gwt.user.client.ui.SimplePanel;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.TreeItem;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.user.client.ui.Widget;

public class DeviceCard implements EntryPoint {
	
	static DeviceTreeServiceAsync deviceTreeService = GWT.create(DeviceTreeService.class);
	private AsyncCallback<List<Company>> getCompanyListCallback;
	private AsyncCallback<List<Department>> getDepartmentListCallback;
	private AsyncCallback<List<Unit>> getUnitListCallback;
	private AsyncCallback<List<Device>> getDeviceListCallback;
	private AsyncCallback<String> storeCompanyCallback;
	private AsyncCallback<String> storeDepartmentCallback;
	private AsyncCallback<String> storeUnitCallback;
	AsyncCallback<String> storeDeviceCallback;
	private AsyncCallback<Measurement> getLastMeasurementCallback;
	private AsyncCallback<String> storeMeasurementCallback;
	private AsyncCallback<Company> getCompanyCallback;
	private AsyncCallback<Device> getDeviceCallback;
	private AsyncCallback<Unit> getUnitCallback;
	private AsyncCallback<Department> getDepartmentCallback;
	private AsyncCallback<MaintenanceItem> getMaintenanceItemCallback;
	private AsyncCallback<List<MaintenanceItem>> getCompanyMaintenanceItemsCallback;
	private AsyncCallback<List<String>> getCompanyImageNamesListCallback;
	
	private int MAIN_WIDTH /*= 900*/;
	private int CONTENT_WIDTH = 800;
	private List<Company> companyList = new ArrayList<Company>();
	private List<Department> departmentList = new ArrayList<Department>();
	private List<Unit> unitList = new ArrayList<Unit>();
	private List<Device> deviceList = new ArrayList<Device>();
	private List<String> imageNames=new ArrayList<String>();
	
	private VerticalPanel mainPanel;
	private DeviceCardPanel deviceCardPanel = new DeviceCardPanel();;
	private DeviceMaintenancePanel deviceMaintenancePanel = new DeviceMaintenancePanel();
	private DeviceMaintenancePanel2 deviceMaintenancePanel2 = new DeviceMaintenancePanel2(this);
	private DeviceEditPanel deviceEditPanel = new DeviceEditPanel();
	private VerticalPanel lastMeasurementPanel = new VerticalPanel();
	private VerticalPanel maintenanceListPanel=new VerticalPanel();
	private VerticalPanel workersPanel=new VerticalPanel();
	private VerticalPanel storeConfigPanel=new VerticalPanel();
	 private VerticalPanel tootjad=new VerticalPanel();
	 private VerticalPanel hankijad=new VerticalPanel();
	 private VerticalPanel tegevuspohised=new VerticalPanel();
	 private VerticalPanel kategooriad=new VerticalPanel();
	 private VerticalPanel laod=new VerticalPanel();
	 private VerticalPanel metaStoreSisu=new VerticalPanel();
	    private VerticalPanel storePanel=new VerticalPanel();
	    private VerticalPanel storeAddPanel=new VerticalPanel();
	    private VerticalPanel storeSearchPanel=new VerticalPanel();
	    private VerticalPanel storeChangePanel=new VerticalPanel();
   	private AbsolutePanel headerPanel;
	private DeckPanel contentPanel;
	private HorizontalPanel storeTypePanel=new HorizontalPanel();
	//private Device device;
	private String selectedDeviceName;
	Company selectedCompany;
	Label companyNameLabel=new Label("!!");
	Department selectedDepartment;
    Unit selectedUnit;
	Device selectedDevice;
	private Measurement measurement;
	MaintenanceItem selectedMaintenanceItem;
	private List<MaintenanceItem> maintenance2 = new ArrayList<MaintenanceItem>();
	CellTable<Worker> wtable=new CellTable<Worker>();
	Label lName=new Label("Nimi");
	TextBox tbName=new TextBox();
	Label lPhone=new Label("Telefon");
	TextBox tbPhone=new TextBox();
	Label lEmail=new Label("Email");
	TextBox tbEmail=new TextBox();
	Label lWorker=new Label("Tegija");
	CheckBox cbWorker=new CheckBox();
	Label lSupervisor=new Label("N\u00E4gija");
	CheckBox cbSupervisor=new CheckBox();
	Label lActive=new Label("Aktiivne");
	CheckBox cbActive=new CheckBox();
	CellTable<StoreItem> storeTable=createStoreTable();

	
	private VerticalPanel companyListPanel = new VerticalPanel();
	private CompanyPanel newCompanyPanel = new CompanyPanel();
	private VerticalPanel departmentListPanel = new VerticalPanel();
	private VerticalPanel unitListPanel = new VerticalPanel();
	private VerticalPanel deviceListPanel = new VerticalPanel();
	private DepartmentPanel newDepartmentPanel = new DepartmentPanel();
	private UnitPanel newUnitPanel = new UnitPanel();
	private Panel measurementListPanel = new VerticalPanel();
	private AsyncCallback<List<Measurement>> getMeasurementsCallback;
	protected List<Measurement> measurements;
	private boolean isDevMode;
	private boolean isMobileView;
	private Storage sessionStore;
	private String accountKey = null;
	Map<String, StoreMeta> storeMetaMap=null;
	DebugClientSide Debug = new DebugClientSide();
	
	@Override
	public void onModuleLoad() {
		Debug.enable();
		//Debug.log("Debug enabled");
		sessionStore = Storage.getSessionStorageIfSupported();
		accountKey = sessionStore.getItem("Account");
		if ( accountKey == null) {
			Window.Location.assign("/Login.html");
		}
		String param=Window.Location.getParameter("dnr");
		if(param!=null) {
		   //Debug.log("Tuli "+param);
		} else {
		  // Debug.log("dnr puudub");
		}
		getCompanyCallback = new AsyncCallback<Company>() {
			
			@Override
			public void onFailure(Throwable arg0) {
				// TODO Auto-generated method stub
				Window.alert("failed");
			}

			@Override
			public void onSuccess(Company arg0) {
				// TODO Auto-generated method stub
				selectedCompany = arg0;
				init();
				updateWidgetSizes();
			}
			
		};
		getDeviceCallback = new AsyncCallback<Device>() {
			
			@Override
			public void onFailure(Throwable arg0) {
				// TODO Auto-generated method stub
				Window.alert("failed device");
			}

			@Override
			public void onSuccess(Device arg0) {
				// TODO Auto-generated method stub
				selectedDevice = arg0;
				deviceTreeService.getUnit(selectedDevice.getUnitKey(), getUnitCallback);

			}
			
		};
		
		getUnitCallback = new AsyncCallback<Unit>() {
			
			@Override
			public void onFailure(Throwable arg0) {
				// TODO Auto-generated method stub
				Window.alert("failed unit");
			}

			@Override
			public void onSuccess(Unit arg0) {
				// TODO Auto-generated method stub
				selectedUnit = arg0;
				deviceTreeService.getDepartment(selectedUnit.getDepartmentKey(), getDepartmentCallback);
			}
			
		};


		getDepartmentCallback = new AsyncCallback<Department>() {
			
			@Override
			public void onFailure(Throwable arg0) {
				// TODO Auto-generated method stub
				Window.alert("failed department");
			}

			@Override
			public void onSuccess(Department arg0) {
				// TODO Auto-generated method stub
				selectedDepartment = arg0;
				String actionParameter=Window.Location.getParameter("action");
				if(actionParameter!=null) {
					if(actionParameter.contentEquals("addPlannerItem")) {
				      createDeviceEditPanelView();
					}
					if(actionParameter.contentEquals("showPlannerItem")) {
						String maintenanceCode=Window.Location.getParameter("maintenanceCode");
						if(maintenanceCode!=null) {
							deviceTreeService.getMaintenanceEntry(maintenanceCode, getMaintenanceItemCallback);
						}
					}
					if(actionParameter.contentEquals("createPlannerItem")) {
						createDeviceEditPanelView();
					}
				}
			}
			
		};
		
		getMaintenanceItemCallback = new AsyncCallback<MaintenanceItem>() {
			@Override
			public void onFailure(Throwable arg0) {
				Window.alert("failed maintenanceItem");
			}
			@Override
			public void onSuccess(MaintenanceItem arg0) {
			    selectedMaintenanceItem=arg0;
			    createMaintenancePanel2();
			}
		};
		
/*
		getCompanyImageNamesListCallback=new AsyncCallback<List<String>>() {
			@Override
			public void onSuccess(List<String> items) {
			
				imageNames=items;
				Debug.log("Pildinimed: "+imageNames.toString());
//				createMaintenanceListPanel();

			}
			@Override
			public void onFailure(Throwable caught) {
				//System.err.println(caught);
				Debug.log("Maintenance Items error "+caught);
			}
			
		};
	*/	
		getCompanyMaintenanceItemsCallback=new AsyncCallback<List<MaintenanceItem>>() {
			@Override
			public void onSuccess(List<MaintenanceItem> items) {
			
				maintenance2=items;
			}
			@Override
			public void onFailure(Throwable caught) {
				Debug.log("Maintenance Items error "+caught);
			}
		};
	
		
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
		
		getCompanyListCallback = new AsyncCallback<List<Company>>() {
			
			@Override
			public void onSuccess(List<Company> companies) {
				companyList = companies;
				createCompanyListPanel();
			}
			
			@Override
			public void onFailure(Throwable caught) {
				System.err.println(caught);
			}
			
		};

		getDepartmentListCallback = new AsyncCallback<List<Department>>() {
			
			@Override
			public void onSuccess(List<Department> locations) {
				//System.out.println(name);
				departmentList = locations;
				System.err.println(locations);
				createDepartmentListPanel();
			}
			
			@Override
			public void onFailure(Throwable caught) {
				System.err.println(caught);
			}
			
		};


		
		getUnitListCallback = new AsyncCallback<List<Unit>>() {
			
			@Override
			public void onSuccess(List<Unit> locations) {
				//System.out.println(name);
				unitList = locations;
				createUnitListPanel(); 
			}
			
			@Override
			public void onFailure(Throwable caught) {
				System.err.println(caught);
			}
			
		};

		getDeviceListCallback = new AsyncCallback<List<Device>>() {
			
			@Override
			public void onSuccess(List<Device> devices) {
				//System.out.println(name);
				deviceList = devices;
				createDeviceListPanel();
			}
			
			@Override
			public void onFailure(Throwable caught) {
				System.err.println(caught);
			}
			
		};
		
		storeCompanyCallback = new AsyncCallback<String>() {
			
			@Override
			public void onSuccess(String name) {
				//System.out.println(name);
				//fetchCompanies();
			}
			
			@Override
			public void onFailure(Throwable caught) {
				System.err.println(caught);
			}
			
		};

		storeDepartmentCallback = new AsyncCallback<String>() {
			
			@Override
			public void onSuccess(String name) {
				fetchDepartments();
			}
			
			@Override
			public void onFailure(Throwable caught) {
				Window.alert("osakonna probleenm "+caught.getMessage());
				System.err.println(caught);
			}
			
		};
		

		
		storeUnitCallback = new AsyncCallback<String>() {
			
			@Override
			public void onSuccess(String name) {
				System.out.println(name);
				fetchUnits();
			}
			
			@Override
			public void onFailure(Throwable caught) {
				System.err.println(caught);
			}
			
		};
		
		storeDeviceCallback = new AsyncCallback<String>() {
			
			@Override
			public void onSuccess(String name) {
				System.out.println(name);
				fetchDevices();
			}
			
			@Override
			public void onFailure(Throwable caught) {
				System.err.println(caught);
			}
			
		};
		
		getLastMeasurementCallback = new AsyncCallback<Measurement>() {
			
			@Override
			public void onSuccess(Measurement lastMeasurement) {
				measurement = lastMeasurement;
				createDeviceMeasurementsPanel();
			}
			
			@Override
			public void onFailure(Throwable caught) {
				System.err.println(caught);
			}
			
		};
		
		storeMeasurementCallback = new AsyncCallback<String>() {
			
			@Override
			public void onSuccess(String name) {
				System.out.println(name);
				contentPanel.showWidget(contentPanel.getWidgetIndex(measurementListPanel));
			}
			
			@Override
			public void onFailure(Throwable caught) {
				System.err.println(caught);
			}
			
		};
		
		getMeasurementsCallback = new AsyncCallback<List<Measurement>>() {
			
			@Override
			public void onSuccess(List<Measurement> measurementList) {
				if (measurementList != null) {
					measurements = measurementList;
			        Collections.reverse(measurements);
				}
				createMeasurementListPanel();
				contentPanel.showWidget(contentPanel.getWidgetIndex(measurementListPanel));
				updateWidgetSizes();
			}
			
			@Override
			public void onFailure(Throwable caught) {
				System.err.println(caught);
			}
			
		};
		RootPanel root = RootPanel.get();
		root.setStyleName("mainBackground2");
		
		mainPanel = new VerticalPanel();
		mainPanel.setStyleName("panelBackground");
		
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
		navigationPanel.add(companyNameLabel);
		companyNameLabel.setStyleName("companyLabel");
		navigationPanel.setCellWidth(companyNameLabel, "150px");
		Button logoutButton = new Button("Logi v\u00E4lja", new ClickHandler() {

			@Override
			public void onClick(ClickEvent arg0) {
				// TODO Auto-generated method stub
				sessionStore.clear();
				Window.Location.assign("/Login.html");
			}
			
		});
		logoutButton.setStyleName("loginBtn");
		navigationPanel.add(logoutButton);
		navigationPanel.setCellWidth(logoutButton, "52px");

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
		deviceTreeService.getCompany(sessionStore.getItem("Account"), getCompanyCallback);
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
		//fetchCompanies();
		//fetchUnits();
		
		fetchDepartments();
		contentPanel.add(unitListPanel);
		contentPanel.add(deviceListPanel);
		contentPanel.add(newCompanyPanel);
		contentPanel.add(newDepartmentPanel);
		contentPanel.add(departmentListPanel);
		contentPanel.add(newUnitPanel);
		contentPanel.add(measurementListPanel);
		contentPanel.add(lastMeasurementPanel);
		contentPanel.add(deviceCardPanel);
		contentPanel.add(deviceMaintenancePanel);
		contentPanel.add(deviceMaintenancePanel2);
		contentPanel.add(deviceEditPanel);
		contentPanel.add(maintenanceListPanel);
		contentPanel.add(workersPanel);
		contentPanel.add(storeConfigPanel);
		contentPanel.add(storePanel);
		companyNameLabel.setText(selectedCompany.getCompanyName());
		mainPanel.setCellHorizontalAlignment(contentPanel, HasHorizontalAlignment.ALIGN_CENTER);
		String deviceKey=Window.Location.getParameter("deviceKey");
		if(deviceKey!=null) {
			deviceTreeService.getDevice(deviceKey, getDeviceCallback);
		}
		
		deviceTreeService.getCompanyStoreMetas(selectedCompany.getCompanyKey(), new AsyncCallback<Map<String, StoreMeta>>(){

			@Override
			public void onFailure(Throwable caught) {
				// TODO Auto-generated method stub
				
			}

			@Override
			public void onSuccess(Map<String, StoreMeta> result) {
				//Debug.log(result+"");
				storeMetaMap=result;

			}
		});

	}
	
	
	private void fetchDepartments() {
		deviceTreeService.getDepartments(sessionStore.getItem("Account"), getDepartmentListCallback);
		System.err.println("Osakondade info kuvatud");
	}
	
	private void fetchUnits() {
		deviceTreeService.getUnits(selectedDepartment.getDepartmentKey(), getUnitListCallback);
	}
	
	private void fetchDevices() {
		deviceTreeService.getDevices(selectedUnit.getUnitKey(), getDeviceListCallback);
	}

	
	
	public VerticalPanel createCompanyListPanel() {
		companyListPanel.clear();
		companyListPanel.setWidth("100%");
		
		//Buttons panel
		Label lLabel1 = new Label("");
		lLabel1.setStyleName("backSaveLabel noPointer");
		
		Label lNewCompany = new Label("Lisa ettev\u00F5te");
		lNewCompany.setStyleName("backSaveLabel wide");
		lNewCompany.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				createNewCompanyView();
			}
			
		});
		
		HorizontalPanel buttonsPanel = new HorizontalPanel();
		buttonsPanel.setStyleName("backSavePanel");
		buttonsPanel.add(lLabel1);
		buttonsPanel.setCellWidth(lLabel1, "50%");
		buttonsPanel.add(lNewCompany);
		buttonsPanel.setCellWidth(lNewCompany, "50%");
		buttonsPanel.setCellHorizontalAlignment(lNewCompany, HasHorizontalAlignment.ALIGN_RIGHT);
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
					//createLocationListPanel(((Label)(event.getSource())).getText());
					selectedCompany = companyList.get(companyList.indexOf(company));
					fetchDepartments();
				}
				
			});
			companyListPanel.add(lCompany);
		}
		
		contentPanel.showWidget(contentPanel.getWidgetIndex(companyListPanel));
		
		return companyListPanel;
	}

	
	
	
	private VerticalPanel createDepartmentListPanel() {
		departmentListPanel.clear();
		
		//Buttons panel
		final Label lBack = new Label("Tagasi");
		lBack.setStyleName("backSaveLabel");
		lBack.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				 Window.Location.assign("/Index.html");
//				contentPanel.showWidget(contentPanel.getWidgetIndex(companyListPanel));
			}
			
		});
		Button lBackButton = new Button();
		lBackButton.setStyleName("backButton");
		lBackButton.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				lBack.fireEvent(event);
			}
			
		});
		
		Label lNewLocation = new Label("Lisa osakond");
		lNewLocation.setStyleName("backSaveLabel wide");
		lNewLocation.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				createNewDepartmentView();
			}
			
		});
		
		Label lStore=new Label("Ladu");
		lStore.setStyleName("backSaveLabel wide");
		lStore.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				createStorePanel();
			}
			
		});
		
		Label lWorkers = new Label("T\u00F6\u00F6tajad");
		lWorkers.setStyleName("backSaveLabel wide");
		lWorkers.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				createWorkersPanel();
			}
			
		});
		
		HorizontalPanel buttonsPanel = new HorizontalPanel();
		buttonsPanel.setStyleName("backSavePanel");
		buttonsPanel.add(lBackButton);
		buttonsPanel.add(lBack);
		buttonsPanel.setCellWidth(lBackButton, "7%");
		buttonsPanel.setCellWidth(lBack, "23%");
		buttonsPanel.add(lStore);
		buttonsPanel.add(lWorkers);
		buttonsPanel.add(lNewLocation);
//		buttonsPanel.setCellHorizontalAlignment(lNewLocation, HasHorizontalAlignment.ALIGN_RIGHT);
		buttonsPanel.setCellWidth(lStore, "20%");
		buttonsPanel.setCellWidth(lWorkers, "25%");
		buttonsPanel.setCellWidth(lNewLocation, "25%");
		departmentListPanel.add(buttonsPanel);
		
		HorizontalPanel headerPanel = AhoWidgets.createThinContentHeader("OSAKONNAD");
	//	HorizontalPanel headerPanel=new HorizontalPanel();
	//	headerPanel.add(new Label("OSAKONNAD"));
	//	Label companyMaintenances=new Label("Hoolduste ajalugu");
//		headerPanel.add(companyMaintenances);
	/*	companyMaintenances.addClickHandler(new ClickHandler() {
			public void onClick(ClickEvent e) {
				deviceTreeService.getCompanyMaintenanceItems(sessionStore.getItem("Account"), getCompanyMaintenanceItemsCallback);	
				
			}
		});*/
		departmentListPanel.add(headerPanel);
		
		for (final Department location : departmentList) {
			Label lLocation = new Label(location.getDepartmentName());
			lLocation.setStyleName("aho-listItem");
			lLocation.addClickHandler(new ClickHandler() {
				
				@Override
				public void onClick(ClickEvent event) {
					selectedDepartment = departmentList.get(departmentList.indexOf(location));
					fetchUnits();
				}
				
			});
			departmentListPanel.add(lLocation);
		}
		
		contentPanel.showWidget(contentPanel.getWidgetIndex(departmentListPanel));
		return departmentListPanel;
	}

	
	private VerticalPanel createUnitListPanel() {
		unitListPanel.clear();
		
		//Buttons panel
		final Label lBack = new Label("Tagasi");
		lBack.setStyleName("backSaveLabel");
		lBack.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				createDepartmentListPanel();
				contentPanel.showWidget(contentPanel.getWidgetIndex(departmentListPanel));
			}
			
		});
		Button lBackButton = new Button();
		lBackButton.setStyleName("backButton");
		lBackButton.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				lBack.fireEvent(event);
			}
			
		});
		Label lDelete = new Label("Kustuta");
		lDelete.setStyleName("backSaveLabel");
		lDelete.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				String deleteKey = selectedDepartment.getDepartmentKey();
				showDeletePrompt(deleteKey, "Department");
			}
			
		});
		
		Label lEdit = new Label("Andmed");
		lEdit.setStyleName("backSaveLabel");
		lEdit.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				createEditDepartmentView();
			}
			
		});
		Label lNewLocation = new Label("Lisa \u00FCksus");
		lNewLocation.setStyleName("backSaveLabel wide");
		lNewLocation.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				createNewLocationView();
			}
			
		});
		
		HorizontalPanel buttonsPanel = new HorizontalPanel();
		buttonsPanel.setStyleName("backSavePanel");
		buttonsPanel.add(lBackButton);
		buttonsPanel.add(lBack);
		buttonsPanel.setCellWidth(lBackButton, "7%");
		buttonsPanel.setCellWidth(lBack, "43%");
		buttonsPanel.add(lEdit);
		buttonsPanel.setCellWidth(lEdit, "15%");
		buttonsPanel.add(lDelete);
		buttonsPanel.setCellWidth(lDelete, "30%");
		buttonsPanel.add(lNewLocation);
		buttonsPanel.setCellHorizontalAlignment(lNewLocation, HasHorizontalAlignment.ALIGN_RIGHT);
		buttonsPanel.setCellWidth(lNewLocation, "20%");
		unitListPanel.add(buttonsPanel);
		
		//Header Panel
		HorizontalPanel headerPanel = AhoWidgets.createThinContentHeader("osakond-"+selectedDepartment.getDepartmentName() + "- \u00FCksused");
		unitListPanel.add(headerPanel);
		
		//Locations list
		for (final Unit location : unitList) {
			Label lLocation = new Label(location.getUnit());
			lLocation.setStyleName("aho-listItem");
			lLocation.addClickHandler(new ClickHandler() {
				
				@Override
				public void onClick(ClickEvent event) {
					selectedUnit = unitList.get(unitList.indexOf(location));
					fetchDevices();
				}
				
			});
			unitListPanel.add(lLocation);
		}
		
		contentPanel.showWidget(contentPanel.getWidgetIndex(unitListPanel));
		
		return unitListPanel;
	}

	private VerticalPanel createDeviceListPanel() {
		deviceListPanel.clear();
		
		//Buttons panel
		final Label lBack = new Label("Tagasi");
		lBack.setStyleName("backSaveLabel");
		lBack.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				createUnitListPanel();
				contentPanel.showWidget(contentPanel.getWidgetIndex(unitListPanel));
			}
			
		});
		Button lBackButton = new Button();
		lBackButton.setStyleName("backButton");
		lBackButton.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				lBack.fireEvent(event);
			}
			
		});
		Label lDelete = new Label("Kustuta");
		lDelete.setStyleName("backSaveLabel");
		lDelete.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				String deleteKey = selectedUnit.getUnitKey();
				showDeletePrompt(deleteKey, "Unit");
			}
			
		});
		
		Label lEdit = new Label("Andmed");
		lEdit.setStyleName("backSaveLabel");
		lEdit.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				createEditLocationView();
			}
			
		});
		Label lNewDevice = new Label("Lisa seade");
		lNewDevice.setStyleName("backSaveLabel wide");
		lNewDevice.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				showAddDeviceView();
			}
			
		});
		
		HorizontalPanel buttonsPanel = new HorizontalPanel();
		buttonsPanel.setStyleName("backSavePanel");
		buttonsPanel.add(lBackButton);
		buttonsPanel.add(lBack);
		buttonsPanel.setCellWidth(lBackButton, "7%");
		buttonsPanel.setCellWidth(lBack, "43%");
		buttonsPanel.add(lEdit);
		buttonsPanel.setCellWidth(lEdit, "15%");
		buttonsPanel.add(lDelete);
		buttonsPanel.setCellWidth(lDelete, "15%");
		buttonsPanel.add(lNewDevice);
		buttonsPanel.setCellHorizontalAlignment(lNewDevice, HasHorizontalAlignment.ALIGN_RIGHT);
		buttonsPanel.setCellWidth(lNewDevice, "20%");
		deviceListPanel.add(buttonsPanel);
		
		//Header Panel
		HorizontalPanel headerPanel = AhoWidgets.createThinContentHeader(selectedDepartment.getDepartmentName()+"-"+selectedUnit.getUnit()+ "- \u00FCksuse seadmed");
		deviceListPanel.add(headerPanel);
		Collections.sort(deviceList, new Comparator<Device>() {

			@Override
			public int compare(Device arg0, Device arg1) {
				try{
					return  Integer.parseInt(arg0.getId())-Integer.parseInt(arg1.getId());
				}catch(Exception ex) {
//					Debug.log(arg0.getId()+" - "+arg1.getId()+" "+ex.getMessage());
					return arg1.getId().compareTo(arg1.getId());
				}
//				return 0;
			}
			
		});
		//Device list
		for (final Device device : deviceList) {
			Label lDevice = new Label(device.getId() + " " + device.getDeviceName());
			lDevice.setStyleName("aho-listItem");
			lDevice.addClickHandler(new ClickHandler() {
				
				@Override
				public void onClick(ClickEvent event) {
					selectedDevice = deviceList.get(deviceList.indexOf(device));
					showDeviceCardView(selectedDevice.getDeviceName());
				}
				
			});
			deviceListPanel.add(lDevice);
		}
		
		contentPanel.showWidget(contentPanel.getWidgetIndex(deviceListPanel));
		
		return deviceListPanel;
	}
	
	private HorizontalPanel metaLabel(StoreMeta m, Panel startingPanel) {
		HorizontalPanel hp=new HorizontalPanel();
		hp.add(new Label(m.getValue()+" "));
		final String sisu=m.getValue();
		final String kood=m.getKey();
		final Button b=new Button("x");
		hp.add(b);
	    final Button b2=new Button("m");
	    hp.add(b2);
		b.addClickHandler(new ClickHandler() {
			public void onClick(ClickEvent e) {
				if(Window.confirm("Kas kustutada "+sisu+"?")) {
					deviceTreeService.deleteMeta(kood, new AsyncCallback<String>() {

						@Override
						public void onFailure(Throwable caught) {
							// TODO Auto-generated method stub
							
						}

						@Override
						public void onSuccess(String result) {
							createStoreConfigPanel(startingPanel);		
						}
						
					});
				}
			}
		});
		b2.addClickHandler(new ClickHandler() {
			public void onClick(ClickEvent e) {
				String v=Window.prompt("uus", sisu);
				deviceTreeService.updateMeta(m.getKey(), v, new AsyncCallback<String>() {

					@Override
					public void onFailure(Throwable caught) {
						// TODO Auto-generated method stub
						
					}

					@Override
					public void onSuccess(String result) {
                       // Debug.log(result);	
                        createStoreConfigPanel(startingPanel);
					}
					
				});
			}
		});
	    return hp;
	}
	
	private void createStoreConfigPanel() {
	   createStoreConfigPanel(tootjad);	
	}
	
	private void createStoreConfigPanel(Panel startingPanel) {
		storeConfigPanel.clear();
		tootjad.clear();
		hankijad.clear();
		tegevuspohised.clear();
		kategooriad.clear();
		laod.clear();
		metaStoreSisu.clear();
		metaStoreSisu.add(startingPanel);

		
		final Label lBack = new Label("Tagasi");
		lBack.setStyleName("backSaveLabel");
		lBack.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				contentPanel.showWidget(contentPanel.getWidgetIndex(departmentListPanel));
			}
			
		});
		final Button lBackButton = new Button();
		lBackButton.setStyleName("backButton");
		lBackButton.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				lBack.fireEvent(event);
			}
			
		});
		
		final Label bLaoleht=new Label("Ladu");
		bLaoleht.addClickHandler(new ClickHandler() {
			public void onClick(ClickEvent e) {
			   createStorePanel();
			}
		});
		
		final Button baTootjad=new Button("Tootjad");
		baTootjad.addClickHandler(new ClickHandler() {

			@Override
			public void onClick(ClickEvent event) {
				metaStoreSisu.clear();
				metaStoreSisu.add(tootjad);
				
			}});

		final Button baHankijad=new Button("Hankijad");
		baHankijad.addClickHandler(new ClickHandler() {

			@Override
			public void onClick(ClickEvent event) {
				metaStoreSisu.clear();
				metaStoreSisu.add(hankijad);
				
			}});

		final Button baTegevuspohised=new Button("Tegevusp\u00F5hised");
		baTegevuspohised.addClickHandler(new ClickHandler() {

			@Override
			public void onClick(ClickEvent event) {
				metaStoreSisu.clear();
				metaStoreSisu.add(tegevuspohised);
				
			}});
		final Button baKategooriad=new Button("Kategooriad");
		baKategooriad.addClickHandler(new ClickHandler() {

			@Override
			public void onClick(ClickEvent event) {
				metaStoreSisu.clear();
				metaStoreSisu.add(kategooriad);
				
			}});
		final Button baLaod=new Button("Laod");
		baLaod.addClickHandler(new ClickHandler() {

			@Override
			public void onClick(ClickEvent event) {
				metaStoreSisu.clear();
				metaStoreSisu.add(laod);
				
			}});

		final Button baEksport=new Button("Eksport");
		baEksport.addClickHandler(new ClickHandler() {

			@Override
			public void onClick(ClickEvent event) {
		    	  Window.Location.assign("/getRaport/hooldusCSV?export=store&companyKey="+sessionStore.getItem("Account")+"&separator=semicolon");	
				
			}});


		HorizontalPanel buttonsPanel = new HorizontalPanel();
		buttonsPanel.setStyleName("backSavePanel");
		buttonsPanel.add(lBackButton);
		//buttonsPanel.add(lBack);
		buttonsPanel.add(bLaoleht);
		bLaoleht.setStyleName("suursinine");
		buttonsPanel.add(baKategooriad);
		buttonsPanel.add(baTegevuspohised);
		buttonsPanel.add(baLaod);
		buttonsPanel.add(baTootjad);
		buttonsPanel.add(baHankijad);
		buttonsPanel.add(baEksport);
		buttonsPanel.setCellWidth(lBackButton, "7%");
		//buttonsPanel.setCellWidth(lBack, "43%");
        storeConfigPanel.add(buttonsPanel);
        storeConfigPanel.add(metaStoreSisu);

		
//		Label lTootja=new Label("Tootja");
//		storeConfigPanel.add(lTootja);
		HorizontalPanel pTootja=new HorizontalPanel();
		TextBox tbTootja=new TextBox();
//		storeConfigPanel.add(tbTootja);
		Button bTootja=new Button("Lisa tootja");
//		storeConfigPanel.add(bTootja);
		pTootja.add(bTootja);
		pTootja.add(tbTootja);
		storeConfigPanel.add(pTootja);
		bTootja.addClickHandler(new ClickHandler() {

			@Override
			public void onClick(ClickEvent event) {
				deviceTreeService.addChildMeta(storeMetaMap.get("Tootjad").getKey(), tbTootja.getText(), new AsyncCallback<String>() {

					@Override
					public void onFailure(Throwable caught) {
						// TODO Auto-generated method stub
						
					}

					@Override
					public void onSuccess(String result) {
						// TODO Auto-generated method stub
						createStoreConfigPanel(tootjad);
					}					
				});
				
			}});
//		VerticalPanel tootjad=new VerticalPanel();
		//storeConfigPanel.add(tootjad);
		tootjad.add(pTootja);

		

//		Label lHankija=new Label("Hankija");
//		storeConfigPanel.add(lHankija);
		HorizontalPanel pHankija=new HorizontalPanel();
		TextBox tbHankija=new TextBox();
//		storeConfigPanel.add(tbHankija);
		Button bHankija=new Button("Lisa hankija");
		storeConfigPanel.add(bHankija);
		pHankija.add(bHankija);
		pHankija.add(tbHankija);
//		storeConfigPanel.add(pHankija);
		bHankija.addClickHandler(new ClickHandler() {

			@Override
			public void onClick(ClickEvent event) {
				deviceTreeService.addChildMeta(storeMetaMap.get("Hankijad").getKey(), tbHankija.getText(), new AsyncCallback<String>() {

					@Override
					public void onFailure(Throwable caught) {
						// TODO Auto-generated method stub
						
					}

					@Override
					public void onSuccess(String result) {
						// TODO Auto-generated method stub
						createStoreConfigPanel(hankijad);
					}					
				});
				
			}});
		
	//	VerticalPanel hankijad=new VerticalPanel();
	//	storeConfigPanel.add(hankijad);
		hankijad.add(pHankija);

		
		HorizontalPanel pTegevuspoh=new HorizontalPanel();
		TextBox tbTegevuspoh1=new TextBox();
		TextBox tbTegevuspoh2=new TextBox();
//		storeConfigPanel.add(tbHankija);
		Button bTegevuspoh=new Button("Lisa tegevuspohine");
//		storeConfigPanel.add(bHankija);
		pTegevuspoh.add(bTegevuspoh);
		pTegevuspoh.add(tbTegevuspoh1);
		pTegevuspoh.add(new Label("-"));
		pTegevuspoh.add(tbTegevuspoh2);
		storeConfigPanel.add(pTegevuspoh);
		bTegevuspoh.addClickHandler(new ClickHandler() {

			@Override
			public void onClick(ClickEvent event) {
				deviceTreeService.addChildMeta(storeMetaMap.get("Tegevuspohised").getKey(), tbTegevuspoh1.getText().replace('-', '_').trim()+"-"+tbTegevuspoh2.getText().replace('-', '_').trim(), new AsyncCallback<String>() {

					@Override
					public void onFailure(Throwable caught) {
						// TODO Auto-generated method stub
						
					}

					@Override
					public void onSuccess(String result) {
						// TODO Auto-generated method stub
						createStoreConfigPanel(tegevuspohised);
					}					
				});
				
			}});
		
		//VerticalPanel tegevuspohised=new VerticalPanel();
	//	storeConfigPanel.add(tegevuspohised);
		tegevuspohised.add(pTegevuspoh);

		
		HorizontalPanel pKategooria=new HorizontalPanel();
		TextBox tbKategooria=new TextBox();
		Button bKategooria=new Button("Lisa kategooria");
		pKategooria.add(bKategooria);
		pKategooria.add(tbKategooria);
		storeConfigPanel.add(pKategooria);
		bKategooria.addClickHandler(new ClickHandler() {

			@Override
			public void onClick(ClickEvent event) {
				deviceTreeService.addChildMeta(storeMetaMap.get("Kategooriad").getKey(), tbKategooria.getText(), new AsyncCallback<String>() {

					@Override
					public void onFailure(Throwable caught) {
						// TODO Auto-generated method stub
						
					}

					@Override
					public void onSuccess(String result) {
						// TODO Auto-generated method stub
						createStoreConfigPanel(kategooriad);
					}					
				});
				
			}});
		
		//VerticalPanel kategooriad=new VerticalPanel();
		//storeConfigPanel.add(kategooriad);
		kategooriad.add(pKategooria);

		

		HorizontalPanel pLadu=new HorizontalPanel();
		TextBox tbLadu=new TextBox();
		Button bLadu=new Button("Lisa ladu");
		pLadu.add(bLadu);
		pLadu.add(tbLadu);
		storeConfigPanel.add(pLadu);
		bLadu.addClickHandler(new ClickHandler() {

			@Override
			public void onClick(ClickEvent event) {
				if(tbLadu.getText().trim().length()==0) {return;}
				deviceTreeService.addChildMeta(storeMetaMap.get("Laod").getKey(), tbLadu.getText(), new AsyncCallback<String>() {

					@Override
					public void onFailure(Throwable caught) {
						// TODO Auto-generated method stub
						
					}

					@Override
					public void onSuccess(String result) {
						// TODO Auto-generated method stub
						createStoreConfigPanel(laod);
					}					
				});
				
			}});
		
		//VerticalPanel laod=new VerticalPanel();
		//storeConfigPanel.add(laod);
        laod.add(pLadu);

		
		
		
		deviceTreeService.getCompanyStoreMetas(selectedCompany.getCompanyKey(), new AsyncCallback<Map<String, StoreMeta>>(){

			@Override
			public void onFailure(Throwable caught) {
				// TODO Auto-generated method stub
				
			}

			@Override
			public void onSuccess(Map<String, StoreMeta> result) {
				//Debug.log(result+"");
				storeMetaMap=result;
				deviceTreeService.getChildMetas(storeMetaMap.get("Tootjad").getKey(), new AsyncCallback<List<StoreMeta>>(){

					@Override
					public void onFailure(Throwable caught) {
						// TODO Auto-generated method stub
						
					}

					@Override
					public void onSuccess(List<StoreMeta> result) {
						for(StoreMeta m: result) {
							tootjad.add(metaLabel(m, tootjad));
							/*
							HorizontalPanel hp=new HorizontalPanel();
							hp.add(new Label(m.getValue()));
							final Button b=new Button("x");
							hp.add(b);
							tootjad.add(hp);
							final String kood=m.getKey();
							final String sisu=m.getValue();
							b.addClickHandler(new ClickHandler() {
								public void onClick(ClickEvent e) {
									if(Window.confirm("Kas kustutada "+sisu+" ?")) {
										deviceTreeService.deleteMeta(kood, new AsyncCallback<String>() {

											@Override
											public void onFailure(Throwable caught) {
												// TODO Auto-generated method stub
												
											}

											@Override
											public void onSuccess(String result) {
												Debug.log(result);
												createStoreConfigPanel();
											}
											
										});
									}
								}
							});*/
						}
					}
					
				});

				deviceTreeService.getChildMetas(storeMetaMap.get("Hankijad").getKey(), new AsyncCallback<List<StoreMeta>>(){

					@Override
					public void onFailure(Throwable caught) {
						// TODO Auto-generated method stub
						
					}

					@Override
					public void onSuccess(List<StoreMeta> result) {
						for(StoreMeta m: result) {
//							hankijad.add(new Label(m.getValue()));
							hankijad.add(metaLabel(m, hankijad));
						}
					}
					
				});
			
				deviceTreeService.getChildMetas(storeMetaMap.get("Tegevuspohised").getKey(), new AsyncCallback<List<StoreMeta>>(){

					@Override
					public void onFailure(Throwable caught) {
						// TODO Auto-generated method stub
						
					}

					@Override
					public void onSuccess(List<StoreMeta> result) {
						for(StoreMeta m: result) {
							//tegevuspohised.add(new Label(m.getValue()));
							tegevuspohised.add(metaLabel(m, tegevuspohised));
						}
					}
					
				});
			

			
				deviceTreeService.getChildMetas(storeMetaMap.get("Kategooriad").getKey(), new AsyncCallback<List<StoreMeta>>(){

					@Override
					public void onFailure(Throwable caught) {
						// TODO Auto-generated method stub
						
					}

					@Override
					public void onSuccess(List<StoreMeta> result) {
						
						for(StoreMeta m: result) {
							HorizontalPanel hp=new HorizontalPanel();
							VerticalPanel vp1=new VerticalPanel();
							final VerticalPanel vp2=new VerticalPanel();
							hp.add(vp1);
							hp.add(vp2);
//							vp1.add(new Label(m.getValue()));
							vp1.add(metaLabel(m, kategooriad));
							final String kood=m.getKey();
							final Button b=new Button("Lisa alamkategooria");
							final TextBox tb=new TextBox();
							vp1.add(tb);
							vp1.add(b);
							kategooriad.add(new Label("   "));
							kategooriad.add(hp);
							b.addClickHandler(new ClickHandler() {

								@Override
								public void onClick(ClickEvent event) {
									deviceTreeService.addChildMeta(kood, tb.getText(), new AsyncCallback<String>(){

										@Override
										public void onFailure(Throwable caught) {
											// TODO Auto-generated method stub
											
										}

										@Override
										public void onSuccess(String result) {
											createStoreConfigPanel(kategooriad);
										}
										
									});
									
								}});
							
							deviceTreeService.getChildMetas(kood, new AsyncCallback<List<StoreMeta>>() {

								@Override
								public void onFailure(Throwable caught) {
									// TODO Auto-generated method stub
									
								}

								@Override
								public void onSuccess(List<StoreMeta> result) {
								  for(StoreMeta m: result) {
								//	vp2.add(new Label(m.getValue()));
									 vp2.add(metaLabel(m, kategooriad));
								  }
								}
								
							});
					  }}});
                        
						
					deviceTreeService.getChildMetas(storeMetaMap.get("Laod").getKey(), new AsyncCallback<List<StoreMeta>>(){

								@Override
								public void onFailure(Throwable caught) {
									// TODO Auto-generated method stub
									
								}

								@Override
								public void onSuccess(List<StoreMeta> result) {
									
									for(StoreMeta m: result) {
										HorizontalPanel hp=new HorizontalPanel();
										VerticalPanel vp1=new VerticalPanel();
										final VerticalPanel vp2=new VerticalPanel();
										hp.add(vp1);
										hp.add(vp2);
								//		vp1.add(new Label(m.getValue()));
										vp1.add(metaLabel(m, laod));
										final String kood=m.getKey();
										final Button b=new Button("Lisa riiul/tase");
										final TextBox tb=new TextBox();
										vp1.add(tb);
										vp1.add(b);
										laod.add(hp);
										b.addClickHandler(new ClickHandler() {

											@Override
											public void onClick(ClickEvent event) {
												deviceTreeService.addChildMeta(kood, tb.getText(), new AsyncCallback<String>(){

													@Override
													public void onFailure(Throwable caught) {
														// TODO Auto-generated method stub
														
													}

													@Override
													public void onSuccess(String result) {
														createStoreConfigPanel(laod);
													}
													
												});
												
											}});
										deviceTreeService.getChildMetas(kood, new AsyncCallback<List<StoreMeta>>() {

											@Override
											public void onFailure(Throwable caught) {
												// TODO Auto-generated method stub
												
											}

											@Override
											public void onSuccess(List<StoreMeta> result) {
											  for(StoreMeta m: result) {
												//vp2.add(new Label(m.getValue()));
												  vp2.add(metaLabel(m, laod));
											  }
											}
											
										});

						}
					}
					
				});

			
			}
			
		});

		metaStoreSisu.clear();
		metaStoreSisu.add(kategooriad);

		
		contentPanel.showWidget(contentPanel.getWidgetIndex(storeConfigPanel));
		
	}
	
	
	private void createStoreSearchPanel() {
			   storeSearchPanel.clear();
			   Label slabel=new Label("Laotoote otsing");
			   slabel.setStyleName("suursinine");
			   storeSearchPanel.add(slabel);
			   storeSearchPanel.add(new Label(""));
			   Grid g1=new Grid(16, 2);
			   storeSearchPanel.add(g1);
			   final TextBox tbSysId=new TextBox();
			   final TextBox tbProductCode=new TextBox();
			   final TextBox tbProductName=new TextBox();
			   final ListBox lbTegevuspohine=new ListBox();
			deviceTreeService.getChildMetas(storeMetaMap.get("Tegevuspohised").getKey(), new AsyncCallback<List<StoreMeta>>(){

				@Override
				public void onFailure(Throwable caught) {
					// TODO Auto-generated method stub
					
				}

				@Override
				public void onSuccess(List<StoreMeta> result) {
					lbTegevuspohine.addItem("");
					for(StoreMeta sm: result) {
						lbTegevuspohine.addItem(sm.getValue().split("-")[1]);
					}
				}
			});  
			
			   final ListBox lbKategooria=new ListBox();
				  final ListBox lbAlamkategooria=new ListBox();
				deviceTreeService.getChildMetas(storeMetaMap.get("Kategooriad").getKey(), new AsyncCallback<List<StoreMeta>>(){

					@Override
					public void onFailure(Throwable caught) {
						// TODO Auto-generated method stub
						
					}

					@Override
					public void onSuccess(List<StoreMeta> result) {
						lbKategooria.addItem("");
						for(StoreMeta sm: result) {
							lbKategooria.addItem(sm.getValue(), sm.getKey());
						}
						 deviceTreeService.getChildMetas(lbKategooria.getSelectedValue(), new AsyncCallback<List<StoreMeta>>() {

								@Override
								public void onFailure(Throwable caught) {
									// TODO Auto-generated method stub
									
								}

								@Override
								public void onSuccess(List<StoreMeta> result) {
									lbAlamkategooria.clear();
									lbAlamkategooria.addItem("");
								    for(StoreMeta sm: result) {
								    	lbAlamkategooria.addItem(sm.getValue());
								    }	
								}
								 
							 });

					
					}
				});  

			  lbKategooria.addChangeHandler(new ChangeHandler() {

				@Override
				public void onChange(ChangeEvent event) {
					 deviceTreeService.getChildMetas(lbKategooria.getSelectedValue(), new AsyncCallback<List<StoreMeta>>() {

						@Override
						public void onFailure(Throwable caught) {
							// TODO Auto-generated method stub
							
						}

						@Override
						public void onSuccess(List<StoreMeta> result) {
							lbAlamkategooria.clear();
							lbAlamkategooria.addItem("");
						    for(StoreMeta sm: result) {
						    	lbAlamkategooria.addItem(sm.getValue());
						    }	
						}
						 
					 });
					
				}
				  
			  });

			  final ListBox lbLadu=new ListBox();
			  final ListBox lbLaokoht=new ListBox();
			  
				deviceTreeService.getChildMetas(storeMetaMap.get("Laod").getKey(), new AsyncCallback<List<StoreMeta>>(){

					@Override
					public void onFailure(Throwable caught) {
						// TODO Auto-generated method stub
						
					}

					@Override
					public void onSuccess(List<StoreMeta> result) {
						lbLadu.addItem("");
						for(StoreMeta sm: result) {
							lbLadu.addItem(sm.getValue(), sm.getKey());
						}
						 deviceTreeService.getChildMetas(lbLadu.getSelectedValue(), new AsyncCallback<List<StoreMeta>>() {

								@Override
								public void onFailure(Throwable caught) {
									// TODO Auto-generated method stub
									
								}

								@Override
								public void onSuccess(List<StoreMeta> result) {
									lbLaokoht.clear();
									lbLaokoht.addItem("");
								    for(StoreMeta sm: result) {
								    	lbLaokoht.addItem(sm.getValue());
								    }	
								}
								 
							 });

					
					}
				});  

			  lbLadu.addChangeHandler(new ChangeHandler() {

				@Override
				public void onChange(ChangeEvent event) {
					 deviceTreeService.getChildMetas(lbLadu.getSelectedValue(), new AsyncCallback<List<StoreMeta>>() {

						@Override
						public void onFailure(Throwable caught) {
							// TODO Auto-generated method stub
							
						}

						@Override
						public void onSuccess(List<StoreMeta> result) {
							lbLaokoht.clear();
							lbLaokoht.addItem("");
						    for(StoreMeta sm: result) {
						    	lbLaokoht.addItem(sm.getValue());
						    }	
						}
						 
					 });
					
				}
				  
			  });
			  

			   final ListBox lbTootja=new ListBox();
			   final TextBox tbTootja=new TextBox();
			deviceTreeService.getChildMetas(storeMetaMap.get("Tootjad").getKey(), new AsyncCallback<List<StoreMeta>>(){

				@Override
				public void onFailure(Throwable caught) {
					// TODO Auto-generated method stub
					
				}

				@Override
				public void onSuccess(List<StoreMeta> result) {
					lbTootja.addItem("");
					for(StoreMeta sm: result) {
						lbTootja.addItem(sm.getValue());
					}
				}
			});  

			   final ListBox lbHankija=new ListBox();
			   final TextBox tbHankija=new TextBox();
			deviceTreeService.getChildMetas(storeMetaMap.get("Hankijad").getKey(), new AsyncCallback<List<StoreMeta>>(){

				@Override
				public void onFailure(Throwable caught) {
					// TODO Auto-generated method stub
					
				}

				@Override
				public void onSuccess(List<StoreMeta> result) {
					lbHankija.addItem("");
					for(StoreMeta sm: result) {
						lbHankija.addItem(sm.getValue());
					}
				}
			});  

			lbTootja.addChangeHandler(new ChangeHandler() {

				@Override
				public void onChange(ChangeEvent event) {
					tbTootja.setText(lbTootja.getSelectedItemText());
					
				}});
			
			lbHankija.addChangeHandler(new ChangeHandler() {

				@Override
				public void onChange(ChangeEvent event) {
					tbHankija.setText(lbHankija.getSelectedItemText());
					
				}});
			

			
			  final IntegerBox tbLaoseis=new IntegerBox();
			  tbLaoseis.addKeyPressHandler(new KeyPressHandler() {

				@Override
				public void onKeyPress(KeyPressEvent event) {
					if(event.getNativeEvent().getKeyCode()!=KeyCodes.KEY_DELETE && 
					        event.getNativeEvent().getKeyCode()!=KeyCodes.KEY_BACKSPACE &&
					        event.getNativeEvent().getKeyCode()!=KeyCodes.KEY_LEFT &&
					        event.getNativeEvent().getKeyCode()!=KeyCodes.KEY_RIGHT){
					            String c = event.getCharCode()+"";
					            if(RegExp.compile("[^0-9]").test(c))
					                tbLaoseis.cancelKey();
					    }			
				}
				  
			  });
		      final IntegerBox tbMinkogus=new IntegerBox();
			  tbMinkogus.addKeyPressHandler(new KeyPressHandler() {

				@Override
				public void onKeyPress(KeyPressEvent event) {
					if(event.getNativeEvent().getKeyCode()!=KeyCodes.KEY_DELETE && 
					        event.getNativeEvent().getKeyCode()!=KeyCodes.KEY_BACKSPACE &&
					        event.getNativeEvent().getKeyCode()!=KeyCodes.KEY_LEFT &&
					        event.getNativeEvent().getKeyCode()!=KeyCodes.KEY_RIGHT){
					            String c = event.getCharCode()+"";
					            if(RegExp.compile("[^0-9]").test(c))
					                tbMinkogus.cancelKey();
					    }			
				}
				  
			  });
			  final DoubleBox tbHind=new DoubleBox();
			  tbHind.addKeyPressHandler(new KeyPressHandler() {

				@Override
				public void onKeyPress(KeyPressEvent event) {
					if(event.getNativeEvent().getKeyCode()!=KeyCodes.KEY_DELETE && 
					        event.getNativeEvent().getKeyCode()!=KeyCodes.KEY_BACKSPACE &&
					        event.getNativeEvent().getKeyCode()!=KeyCodes.KEY_LEFT &&
					        event.getNativeEvent().getKeyCode()!=KeyCodes.KEY_RIGHT){
					            String c = event.getCharCode()+"";
					            if(RegExp.compile("[^0-9]").test(c))
					                tbHind.cancelKey();
					    }			
				}
				  
			  });

			   final ListBox lbOsakond=new ListBox();
			   final ListBox lbYksus=new ListBox();
			   final ListBox lbSeade=new ListBox();
			deviceTreeService.getDepartments(selectedCompany.getCompanyKey(), new AsyncCallback<List<Department>>(){

				@Override
				public void onFailure(Throwable caught) {
					// TODO Auto-generated method stub
					
				}

				@Override
				public void onSuccess(List<Department> result) {
					lbOsakond.addItem("", "");
					for(Department dm: result) {
						lbOsakond.addItem(dm.getDepartmentName(), dm.getDepartmentKey());
					}
				}
			});  
		    lbOsakond.addChangeHandler(new ChangeHandler() {

				@Override
				public void onChange(ChangeEvent event) {
		             deviceTreeService.getUnits(lbOsakond.getSelectedValue(), new AsyncCallback<List<Unit>>(){

						@Override
						public void onFailure(Throwable caught) {
							// TODO Auto-generated method stub
							
						}

						@Override
						public void onSuccess(List<Unit> result) {
							lbYksus.clear();
							lbYksus.addItem("", "");
							for(Unit u: result) {
									lbYksus.addItem(u.getUnit(), u.getUnitKey());
							}	
							lbYksus.fireEvent(event);
							lbSeade.clear();
						}
		            	 
		             });			
				}});
			  
		       lbYksus.addChangeHandler(new ChangeHandler() {

				@Override
				public void onChange(ChangeEvent event) {
		             deviceTreeService.getDevices(lbYksus.getSelectedValue(), new AsyncCallback<List<Device>>() {

						@Override
						public void onFailure(Throwable caught) {
							// TODO Auto-generated method stub
							
						}

						@Override
						public void onSuccess(List<Device> result) {
							lbSeade.clear();
							lbSeade.addItem("", "");
							for(Device d: result) {
								lbSeade.addItem(d.getDeviceName(), d.getDeviceKey());
							}
							
						}});			
				}});
		       
		       ListBox lbSeisund=new ListBox();
		       lbSeisund.addItem("", "normal");
		       lbSeisund.addItem("peidetud", "hidden");
		       

		       HorizontalPanel hpTootja=new HorizontalPanel();
		       hpTootja.add(lbTootja);
		       hpTootja.add(tbTootja);
		    
		       HorizontalPanel hpHankija=new HorizontalPanel();
		       hpHankija.add(lbHankija);
		       hpHankija.add(tbHankija);
		    
			   g1.setWidget(0, 0, new Label("S\u00FCst. ID"));
			   g1.setWidget(0, 1, tbSysId);
			   g1.setWidget(1, 0, new Label("Tootekood"));
			   g1.setWidget(1, 1, tbProductCode);
			   g1.setWidget(2, 0, new Label("Toote nimetus"));
			   g1.setWidget(2, 1, tbProductName);
			   g1.setWidget(3, 0, new Label("Tegevusp\u00F5hine"));
			   g1.setWidget(3, 1, lbTegevuspohine);
			   g1.setWidget(4, 0, new Label("Kategooria"));
			   g1.setWidget(4, 1, lbKategooria);
			   g1.setWidget(5, 0, new Label("Alamkategooria"));
			   g1.setWidget(5, 1, lbAlamkategooria);
			   g1.setWidget(6, 0, new Label("Ladu"));
			   g1.setWidget(6, 1, lbLadu);
			   g1.setWidget(7, 0, new Label("Riiul/ tase"));
			   g1.setWidget(7, 1, lbLaokoht);
			   g1.setWidget(8, 0, new Label("Tootja"));
//			   g1.setWidget(8, 1, lbTootja);
			   g1.setWidget(8, 1, hpTootja);
			   g1.setWidget(9, 0, new Label("Hankija"));
//			   g1.setWidget(9, 1, lbHankija);
			   g1.setWidget(9, 1, hpHankija);
/*			   g1.setWidget(10, 0, new Label("Laoseis"));
			   g1.setWidget(10, 1, tbLaoseis);
			   g1.setWidget(11, 0, new Label("Min kogus"));
			   g1.setWidget(11, 1, tbMinkogus);
			   g1.setWidget(12, 0, new Label("Hind"));
			   g1.setWidget(12, 1, tbHind);
*/			   g1.setWidget(10, 0, new Label("Osakond"));
			   g1.setWidget(10, 1, lbOsakond);
			   g1.setWidget(11, 0, new Label("\u00DCksus"));
			   g1.setWidget(11, 1, lbYksus);
			   g1.setWidget(12, 0, new Label("Seade"));
			   g1.setWidget(12, 1, lbSeade);
			   g1.setWidget(13, 0, new Label("Seisund"));
			   g1.setWidget(13, 1, lbSeisund);
			   
			   Button bOtsi=new Button("Otsi");
			   bOtsi.setStyleName("laoalanupp");
			   StoreItem si=new StoreItem();
			   bOtsi.addClickHandler(new ClickHandler() {
				  public void onClick(ClickEvent e) {
		               si.setSysId(tbSysId.getText().trim());
		               si.setProductCode(tbProductCode.getText().trim());
		               si.setProductName(tbProductName.getText().trim());
		               si.setWorkingCode(lbTegevuspohine.getSelectedValue());
		               si.setCategory(lbKategooria.getSelectedValue());
		               si.setSubCategory(lbAlamkategooria.getSelectedItemText());
		               si.setStoreName(lbLadu.getSelectedValue());
		               si.setStorePlace(lbLaokoht.getSelectedItemText());
//		               si.setProducer(lbTootja.getSelectedItemText());
//		               si.setContractor(lbHankija.getSelectedItemText());
		               si.setProducer(tbTootja.getText());
		               si.setContractor(tbHankija.getText());
		               si.setAmount(tbLaoseis.getText());
		               si.setMinAmount(tbMinkogus.getText());
		               si.setPrice(tbHind.getText());
		               si.setDepartmentKey(lbOsakond.getSelectedValue());
		               si.setUnitKey(lbYksus.getSelectedValue());
		               si.setDeviceKey(lbSeade.getSelectedValue());
		               si.setStatus(lbSeisund.getSelectedValue());
		               displayStoreItems(si);
				  } 
			   });
			   
			   storeSearchPanel.add(bOtsi);
			   
			   

			   
			}
		
	
	
	private void createStoreAddPanel() {
	   storeAddPanel.clear();
	   Label slabel=new Label("Uue laotoote sisestus");
	   slabel.setStyleName("suursinine");
	   storeAddPanel.add(slabel);
	   Grid g1=new Grid(16, 2);
	   storeAddPanel.add(g1);
	   final TextBox tbSysId=new TextBox();
	   final TextBox tbProductCode=new TextBox();
	   final TextBox tbProductName=new TextBox();
	   final ListBox lbTegevuspohine=new ListBox();
	deviceTreeService.getChildMetas(storeMetaMap.get("Tegevuspohised").getKey(), new AsyncCallback<List<StoreMeta>>(){

		@Override
		public void onFailure(Throwable caught) {
			// TODO Auto-generated method stub
			
		}

		@Override
		public void onSuccess(List<StoreMeta> result) {
			lbTegevuspohine.addItem("");
			for(StoreMeta sm: result) {
				lbTegevuspohine.addItem(sm.getValue().split("-")[1]);
			}
		}
	});  
	
	   final ListBox lbKategooria=new ListBox();
		  final ListBox lbAlamkategooria=new ListBox();
		deviceTreeService.getChildMetas(storeMetaMap.get("Kategooriad").getKey(), new AsyncCallback<List<StoreMeta>>(){

			@Override
			public void onFailure(Throwable caught) {
				// TODO Auto-generated method stub
				
			}

			@Override
			public void onSuccess(List<StoreMeta> result) {
				lbKategooria.addItem("");
				for(StoreMeta sm: result) {
					lbKategooria.addItem(sm.getValue(), sm.getKey());
				}
				 deviceTreeService.getChildMetas(lbKategooria.getSelectedValue(), new AsyncCallback<List<StoreMeta>>() {

						@Override
						public void onFailure(Throwable caught) {
							// TODO Auto-generated method stub
							
						}

						@Override
						public void onSuccess(List<StoreMeta> result) {
							lbAlamkategooria.clear();
						    for(StoreMeta sm: result) {
						    	lbAlamkategooria.addItem(sm.getValue());
						    }	
						}
						 
					 });

			
			}
		});  

	  lbKategooria.addChangeHandler(new ChangeHandler() {

		@Override
		public void onChange(ChangeEvent event) {
			 deviceTreeService.getChildMetas(lbKategooria.getSelectedValue(), new AsyncCallback<List<StoreMeta>>() {

				@Override
				public void onFailure(Throwable caught) {
					// TODO Auto-generated method stub
					
				}

				@Override
				public void onSuccess(List<StoreMeta> result) {
					lbAlamkategooria.clear();
				    for(StoreMeta sm: result) {
				    	lbAlamkategooria.addItem(sm.getValue());
				    }	
				}
				 
			 });
			
		}
		  
	  });

	  final ListBox lbLadu=new ListBox();
	  final ListBox lbLaokoht=new ListBox();
	  
		deviceTreeService.getChildMetas(storeMetaMap.get("Laod").getKey(), new AsyncCallback<List<StoreMeta>>(){

			@Override
			public void onFailure(Throwable caught) {
				// TODO Auto-generated method stub
				
			}

			@Override
			public void onSuccess(List<StoreMeta> result) {
				lbLadu.addItem("");
				for(StoreMeta sm: result) {
					lbLadu.addItem(sm.getValue(), sm.getKey());
				}
				 deviceTreeService.getChildMetas(lbLadu.getSelectedValue(), new AsyncCallback<List<StoreMeta>>() {

						@Override
						public void onFailure(Throwable caught) {
							// TODO Auto-generated method stub
							
						}

						@Override
						public void onSuccess(List<StoreMeta> result) {
							lbLaokoht.clear();
						    for(StoreMeta sm: result) {
						    	lbLaokoht.addItem(sm.getValue());
						    }	
						}
						 
					 });

			
			}
		});  

	  lbLadu.addChangeHandler(new ChangeHandler() {

		@Override
		public void onChange(ChangeEvent event) {
			 deviceTreeService.getChildMetas(lbLadu.getSelectedValue(), new AsyncCallback<List<StoreMeta>>() {

				@Override
				public void onFailure(Throwable caught) {
					// TODO Auto-generated method stub
					
				}

				@Override
				public void onSuccess(List<StoreMeta> result) {
					lbLaokoht.clear();
				    for(StoreMeta sm: result) {
				    	lbLaokoht.addItem(sm.getValue());
				    }	
				}
				 
			 });
			
		}
		  
	  });
	  

	   final ListBox lbTootja=new ListBox();
	   final TextBox tbTootja=new TextBox();
	deviceTreeService.getChildMetas(storeMetaMap.get("Tootjad").getKey(), new AsyncCallback<List<StoreMeta>>(){

		@Override
		public void onFailure(Throwable caught) {
			// TODO Auto-generated method stub
			
		}

		@Override
		public void onSuccess(List<StoreMeta> result) {
			lbTootja.addItem("");
			for(StoreMeta sm: result) {
				lbTootja.addItem(sm.getValue());
			}
		}
	});  
	lbTootja.addChangeHandler(new ChangeHandler() {

		@Override
		public void onChange(ChangeEvent event) {
			tbTootja.setText(lbTootja.getSelectedItemText());
			
		}
		
	});

	   final ListBox lbHankija=new ListBox();
	   final TextBox tbHankija=new TextBox();
	deviceTreeService.getChildMetas(storeMetaMap.get("Hankijad").getKey(), new AsyncCallback<List<StoreMeta>>(){

		@Override
		public void onFailure(Throwable caught) {
			// TODO Auto-generated method stub
			
		}

		@Override
		public void onSuccess(List<StoreMeta> result) {
			lbHankija.addItem("");
			for(StoreMeta sm: result) {
				lbHankija.addItem(sm.getValue());
			}
		}
	});  
	
	lbHankija.addChangeHandler(new ChangeHandler() {

		@Override
		public void onChange(ChangeEvent event) {
			tbHankija.setText(lbHankija.getSelectedItemText());
		}
		
	});

	  final IntegerBox tbLaoseis=new IntegerBox();
	  tbLaoseis.addKeyPressHandler(new KeyPressHandler() {

		@Override
		public void onKeyPress(KeyPressEvent event) {
			if(event.getNativeEvent().getKeyCode()!=KeyCodes.KEY_DELETE && 
			        event.getNativeEvent().getKeyCode()!=KeyCodes.KEY_BACKSPACE &&
			        event.getNativeEvent().getKeyCode()!=KeyCodes.KEY_LEFT &&
			        event.getNativeEvent().getKeyCode()!=KeyCodes.KEY_RIGHT){
			            String c = event.getCharCode()+"";
			            if(RegExp.compile("[^0-9]").test(c))
			                tbLaoseis.cancelKey();
			    }			
		}
		  
	  });
      final IntegerBox tbMinkogus=new IntegerBox();
	  tbMinkogus.addKeyPressHandler(new KeyPressHandler() {

		@Override
		public void onKeyPress(KeyPressEvent event) {
			if(event.getNativeEvent().getKeyCode()!=KeyCodes.KEY_DELETE && 
			        event.getNativeEvent().getKeyCode()!=KeyCodes.KEY_BACKSPACE &&
			        event.getNativeEvent().getKeyCode()!=KeyCodes.KEY_LEFT &&
			        event.getNativeEvent().getKeyCode()!=KeyCodes.KEY_RIGHT){
			            String c = event.getCharCode()+"";
			            if(RegExp.compile("[^0-9]").test(c))
			                tbMinkogus.cancelKey();
			    }			
		}
		  
	  });
	  final DoubleBox tbHind=new DoubleBox();
	  tbHind.addKeyPressHandler(new KeyPressHandler() {

		@Override
		public void onKeyPress(KeyPressEvent event) {
			if(event.getNativeEvent().getKeyCode()!=KeyCodes.KEY_DELETE && 
			        event.getNativeEvent().getKeyCode()!=KeyCodes.KEY_BACKSPACE &&
			        event.getNativeEvent().getKeyCode()!=KeyCodes.KEY_LEFT &&
			        event.getNativeEvent().getKeyCode()!=KeyCodes.KEY_RIGHT){
			            String c = event.getCharCode()+"";
			            if(RegExp.compile("[^0-9]").test(c))
			                tbHind.cancelKey();
			    }			
		}
		  
	  });

	   final ListBox lbOsakond=new ListBox();
	   final ListBox lbYksus=new ListBox();
	   final ListBox lbSeade=new ListBox();
	deviceTreeService.getDepartments(selectedCompany.getCompanyKey(), new AsyncCallback<List<Department>>(){

		@Override
		public void onFailure(Throwable caught) {
			// TODO Auto-generated method stub
			
		}

		@Override
		public void onSuccess(List<Department> result) {
			lbOsakond.addItem("", "");
			for(Department dm: result) {
				lbOsakond.addItem(dm.getDepartmentName(), dm.getDepartmentKey());
			}
		}
	});  
    lbOsakond.addChangeHandler(new ChangeHandler() {

		@Override
		public void onChange(ChangeEvent event) {
 			  lbYksus.clear();
             deviceTreeService.getUnits(lbOsakond.getSelectedValue(), new AsyncCallback<List<Unit>>(){

				@Override
				public void onFailure(Throwable caught) {
					// TODO Auto-generated method stub
					
				}

				@Override
				public void onSuccess(List<Unit> result) {
					lbYksus.addItem("", "");
					for(Unit u: result) {
							lbYksus.addItem(u.getUnit(), u.getUnitKey());
					}	
					lbYksus.fireEvent(event);
					lbSeade.clear();
				}
            	 
             });			
		}});
	  
       lbYksus.addChangeHandler(new ChangeHandler() {

		@Override
		public void onChange(ChangeEvent event) {
			lbSeade.clear();
             deviceTreeService.getDevices(lbYksus.getSelectedValue(), new AsyncCallback<List<Device>>() {

				@Override
				public void onFailure(Throwable caught) {
					// TODO Auto-generated method stub
					
				}

				@Override
				public void onSuccess(List<Device> result) {
					lbSeade.addItem("", "");
					for(Device d: result) {
						lbSeade.addItem(d.getDeviceName(), d.getDeviceKey());
					}
					
				}});			
		}});
    
       HorizontalPanel hpTootja=new HorizontalPanel();
       hpTootja.add(lbTootja);
       hpTootja.add(tbTootja);
       
       HorizontalPanel hpHankija=new HorizontalPanel();
       hpHankija.add(lbHankija);
       hpHankija.add(tbHankija);
       
	   g1.setWidget(1, 0, new Label("Tootekood"));
	   g1.setWidget(1, 1, tbProductCode);
	   g1.setWidget(2, 0, new Label("Toote nimetus"));
	   g1.setWidget(2, 1, tbProductName);
	   g1.setWidget(3, 0, new Label("Tegevusp\u00F5hine"));
	   g1.setWidget(3, 1, lbTegevuspohine);
	   g1.setWidget(4, 0, new Label("Kategooria"));
	   g1.setWidget(4, 1, lbKategooria);
	   g1.setWidget(5, 0, new Label("Alamkategooria"));
	   g1.setWidget(5, 1, lbAlamkategooria);
	   g1.setWidget(6, 0, new Label("Ladu"));
	   g1.setWidget(6, 1, lbLadu);
	   g1.setWidget(7, 0, new Label("Riiul/ tase"));
	   g1.setWidget(7, 1, lbLaokoht);
	   g1.setWidget(8, 0, new Label("Tootja"));
//	   g1.setWidget(8, 1, lbTootja);
	   g1.setWidget(8, 1, hpTootja);
	   g1.setWidget(9, 0, new Label("Hankija"));
//	   g1.setWidget(9, 1, lbHankija);
	   g1.setWidget(9, 1, hpHankija);
	   g1.setWidget(10, 0, new Label("Laoseis"));
	   g1.setWidget(10, 1, tbLaoseis);
	   g1.setWidget(11, 0, new Label("Min kogus"));
	   g1.setWidget(11, 1, tbMinkogus);
	   g1.setWidget(12, 0, new Label("Hind"));
	   g1.setWidget(12, 1, tbHind);
	   g1.setWidget(13, 0, new Label("Osakond"));
	   g1.setWidget(13, 1, lbOsakond);
	   g1.setWidget(14, 0, new Label("\u00DCksus"));
	   g1.setWidget(14, 1, lbYksus);
	   g1.setWidget(15, 0, new Label("Seade"));
	   g1.setWidget(15, 1, lbSeade);
	   
	   Button bSave=new Button("Lisa");
	   bSave.setStyleName("laoalanupp");
	   StoreItem si=new StoreItem();
	   bSave.addClickHandler(new ClickHandler() {
		  public void onClick(ClickEvent e) {
               si.setSysId(tbSysId.getText().trim());
			   if(tbProductCode.getText().trim().length()==0) {
				   Window.alert("Tootekood puudub");
				   return;
			   }
               si.setProductCode(tbProductCode.getText().trim());
			   if(tbProductName.getText().trim().length()==0) {
				   Window.alert("Toote nimetus puudub");
				   return;
			   }
               si.setProductName(tbProductName.getText().trim());
               if(lbTegevuspohine.getSelectedIndex()==0) {
            	   Window.alert("Tegevusp\u00F5hine valimata");
            	   return;
               }
               si.setWorkingCode(lbTegevuspohine.getSelectedValue());
               if(lbKategooria.getSelectedIndex()==0) {
            	   Window.alert("Kategooria valimata");
            	   return;
               }
               si.setCategoryKey(lbKategooria.getSelectedValue());
               si.setSubCategory(lbAlamkategooria.getSelectedItemText());
               if(lbLadu.getSelectedIndex()==0) {
            	   Window.alert("Ladu valimata");
            	   return;
               }
               si.setStoreKey(lbLadu.getSelectedValue());
               si.setStorePlace(lbLaokoht.getSelectedItemText());
//               si.setProducer(lbTootja.getSelectedItemText());
  //             si.setContractor(lbHankija.getSelectedItemText());
               si.setProducer(tbTootja.getText());
               si.setContractor(tbHankija.getText());
               si.setAmount(tbLaoseis.getText());
               si.setMinAmount(tbMinkogus.getText());
               si.setPrice(tbHind.getText());
               si.setDepartmentKey(lbOsakond.getSelectedValue());
               si.setUnitKey(lbYksus.getSelectedValue());
               si.setDeviceKey(lbSeade.getSelectedValue());
			  deviceTreeService.addCompanyStoreItem(si, selectedCompany.getCompanyKey(), new AsyncCallback<String>() {

				@Override
				public void onFailure(Throwable caught) {
					// TODO Auto-generated method stub
					
				}

				@Override
				public void onSuccess(String result) {
                //  Debug.log(result);	
                  createStorePanel();
				}
				  
				  
			  });
		  } 
	   });
	   
	   storeAddPanel.add(bSave);
	   
	   

	   
	}
	
	private void createStorePanel() {
	   storePanel.clear();
		final Label lBack = new Label("Tagasi");
		lBack.setStyleName("backSaveLabel");
		lBack.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				contentPanel.showWidget(contentPanel.getWidgetIndex(departmentListPanel));
			}
			
		});
		final Button lBackButton = new Button();
		lBackButton.setStyleName("backButton");
		lBackButton.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				lBack.fireEvent(event);
			}
			
		});
		HorizontalPanel nupupaneel = new HorizontalPanel();
		//nupupaneel.setStyleName("backSavePanel");
		nupupaneel.add(lBackButton);
		//buttonsPanel.add(lBack);
		//buttonsPanel.add(bLaoHaldus);
      //storeAddPanel.add(buttonsPanel);
//	   HorizontalPanel nupupaneel=new HorizontalPanel();
	   
		final Button bLaoHaldus=new Button("Lao haldus");
		bLaoHaldus.setStyleName("suuremnupp");
		bLaoHaldus.addClickHandler(new ClickHandler() {
			public void onClick(ClickEvent e) {
				createStoreConfigPanel();
			}
		});
		nupupaneel.add(bLaoHaldus);

		final Button bOtsing=new Button("Lao otsing");
		bOtsing.setStyleName("suuremnupp");
		bOtsing.addClickHandler(new ClickHandler() {
			public void onClick(ClickEvent e) {
			   storeTypePanel.clear();
			   createStoreSearchPanel();
			   storeTypePanel.add(storeSearchPanel);
			}
		});
		nupupaneel.add(bOtsing);

		final Button bLisamine=new Button("Lattu lisamine");
		bLisamine.setStyleName("suuremnupp");
		bLisamine.addClickHandler(new ClickHandler() {
			public void onClick(ClickEvent e) {
			   storeTypePanel.clear();
			   storeTypePanel.add(storeAddPanel);
			}
		});
		nupupaneel.add(bLisamine);
        storePanel.add(nupupaneel);
		storePanel.add(storeTypePanel);
	   createStoreAddPanel();
	   createStoreSearchPanel();
	   storeTypePanel.clear();
	   storeTypePanel.add(storeSearchPanel);
//       storePanel.add(storeTypePanel);	   

//	   storePanel.add(storeTable);
//	   displayStoreItems(null);
	   contentPanel.showWidget(contentPanel.getWidgetIndex(storePanel));
	}
	
	
	private void displayStoreItems(StoreItem queryItem) {
		   deviceTreeService.getCompanyStoreItems(selectedCompany.getCompanyKey(), queryItem, new AsyncCallback<List<StoreItem>>() {

				@Override
				public void onFailure(Throwable caught) {
					// TODO Auto-generated method stub
					
				}

				@Override
				public void onSuccess(List<StoreItem> result) {
					Collections.sort(result, new Comparator<StoreItem>() {
						public int compare(StoreItem s1, StoreItem s2) {
							try {
								return Integer.parseInt(s2.getSysId())-Integer.parseInt(s1.getSysId());
							} catch(Exception ex) {return 0;}
						}
					});
					storePanel.add(storeTable);
					storeTable.setRowData(result);
					if(result.size()==1) {
						displaySelectedItem(result.get(0));
					}
				}
				   
			   });
		
	}
	
	private CellTable<StoreItem> createStoreTable(){
		   CellTable<StoreItem> table=new CellTable<StoreItem>(500);
		   TextColumn<StoreItem> cSysId=new TextColumn<StoreItem>() {
			  public String getValue(StoreItem si) {
				 return si.getSysId();
			  }		   
		   };
		   table.addColumn(cSysId, "S\u00FCst ID");
		   TextColumn<StoreItem> cTooteKood=new TextColumn<StoreItem>() {
			  public String getValue(StoreItem si) {
				 return si.getProductCode();
			  }		   
		   };
		   table.addColumn(cTooteKood, "Toote kood");
		   TextColumn<StoreItem> cTooteNimi=new TextColumn<StoreItem>() {
			  public String getValue(StoreItem si) {
				 return si.getProductName();
			  }		   
		   };
		   table.addColumn(cTooteNimi, "Toote nimetus");
		   TextColumn<StoreItem> cTegevuspohine=new TextColumn<StoreItem>() {
			  public String getValue(StoreItem si) {
				 return si.getWorkingCode();
			  }		   
		   };
		   table.addColumn(cTegevuspohine, "Tegp.");
		   TextColumn<StoreItem> cKategooria=new TextColumn<StoreItem>() {
			  public String getValue(StoreItem si) {
				 return si.getCategory();
			  }		   
		   };
		   table.addColumn(cKategooria, "Kategooria");
		   TextColumn<StoreItem> cAlamkategooria=new TextColumn<StoreItem>() {
			  public String getValue(StoreItem si) {
				 return si.getSubCategory();
			  }		   
		   };
		   table.addColumn(cAlamkategooria, "Alamkategooria");

		   TextColumn<StoreItem> cLadu=new TextColumn<StoreItem>() {
			  public String getValue(StoreItem si) {
				 return si.getStoreName();
			  }		   
		   };
		   table.addColumn(cLadu, "Ladu");
		   TextColumn<StoreItem> cLaoAsukoht=new TextColumn<StoreItem>() {
			  public String getValue(StoreItem si) {
				 return si.getStorePlace();
			  }		   
		   };
		   table.addColumn(cLaoAsukoht, "Riiul/Tase");

		   TextColumn<StoreItem> cTootja=new TextColumn<StoreItem>() {
			  public String getValue(StoreItem si) {
				 return si.getProducer();
			  }		   
		   };
		   table.addColumn(cTootja, "Tootja");
		   TextColumn<StoreItem> cHankija=new TextColumn<StoreItem>() {
			  public String getValue(StoreItem si) {
				 return si.getContractor();
			  }		   
		   };
		   table.addColumn(cHankija, "Hankija");


		   TextColumn<StoreItem> cLaoseis=new TextColumn<StoreItem>() {
			  public String getValue(StoreItem si) {
				 return si.getAmount();
			 }		   
		   };
		   table.addColumn(cLaoseis, "Laos");
		   
		   TextColumn<StoreItem> cMinkogus=new TextColumn<StoreItem>() {
			  public String getValue(StoreItem si) {
				 return si.getMinAmount();
			 }		   
		   };
		   table.addColumn(cMinkogus, "Min. kogus");
		   
		   TextColumn<StoreItem> cHind=new TextColumn<StoreItem>() {
			  public String getValue(StoreItem si) {
				 return si.getPrice();
			 }		   
		   };
		   table.addColumn(cHind, "Hind");
		   
		   
		   TextColumn<StoreItem> cOsakond=new TextColumn<StoreItem>() {
			  public String getValue(StoreItem si) {
				 return si.getDepartmentName();
			 }		   
		   };
		   table.addColumn(cOsakond, "Osakond");
		   
		   TextColumn<StoreItem> cYksus=new TextColumn<StoreItem>() {
			  public String getValue(StoreItem si) {
				 return si.getUnitName();
			 }		   
		   };
		   table.addColumn(cYksus, "\u00DCksus");
		   
		   TextColumn<StoreItem> cSeade=new TextColumn<StoreItem>() {
			  public String getValue(StoreItem si) {
				 return si.getDeviceName();
			 }		   
		   };
		   table.addColumn(cSeade, "Seade");
		   table.setStyleName("laotabel", true);
		   SingleSelectionModel<StoreItem> tableSelModel = new SingleSelectionModel<StoreItem>();
			tableSelModel.addSelectionChangeHandler(new SelectionChangeEvent.Handler() {

				@Override
				public void onSelectionChange(SelectionChangeEvent arg0) {
					StoreItem selectedItem = (StoreItem) tableSelModel.getSelectedObject();
					displaySelectedItem(selectedItem);
				}
				
			});
			table.setSelectionModel(tableSelModel);
           return table;		
	}

	
	private void displaySelectedItem(StoreItem si) {
		//Debug.log(si.getProductCode());
		createStoreChangePanel(si);
		storeTypePanel.clear();
		storeTypePanel.add(storeChangePanel);
	}
	
	private void createStoreChangePanel(StoreItem selectedItem) {
		   storeChangePanel.clear();
		   Label slabel=new Label("Laotoote andmete muutmine");
		   slabel.setStyleName("suurpunane");
		   storeChangePanel.add(slabel);
		   storeChangePanel.add(new Label(""));
		   Grid g1=new Grid(17, 2);
		   storeChangePanel.add(g1);
		   final Label tbSysId=new Label(selectedItem.getSysId());
		   final TextBox tbProductCode=new TextBox();
		   tbProductCode.setText(selectedItem.getProductCode());
		   final TextBox tbProductName=new TextBox();
		   tbProductName.setText(selectedItem.getProductName());
		   final ListBox lbTegevuspohine=new ListBox();
		deviceTreeService.getChildMetas(storeMetaMap.get("Tegevuspohised").getKey(), new AsyncCallback<List<StoreMeta>>(){

			@Override
			public void onFailure(Throwable caught) {
				// TODO Auto-generated method stub
				
			}

			@Override
			public void onSuccess(List<StoreMeta> result) {
				int snr=0;
				for(int i=0; i<result.size(); i++) {
					lbTegevuspohine.addItem(result.get(i).getValue().split("-")[1]);
					if(result.get(i).getValue().split("-")[1].equals(selectedItem.getWorkingCode())) {snr=i;}
				}
				lbTegevuspohine.setSelectedIndex(snr);
			}
		});  
		
		   final ListBox lbKategooria=new ListBox();
			  final ListBox lbAlamkategooria=new ListBox();
			deviceTreeService.getChildMetas(storeMetaMap.get("Kategooriad").getKey(), new AsyncCallback<List<StoreMeta>>(){

				@Override
				public void onFailure(Throwable caught) {
					// TODO Auto-generated method stub
					
				}

				@Override
				public void onSuccess(List<StoreMeta> result) {
					int snr=0;
					for(int i=0; i<result.size(); i++) {
						lbKategooria.addItem(result.get(i).getValue(), result.get(i).getKey());
						if(result.get(i).getKey().equals(selectedItem.getCategoryKey())) {snr=i;}
					}
					lbKategooria.setSelectedIndex(snr);
					 deviceTreeService.getChildMetas(lbKategooria.getSelectedValue(), new AsyncCallback<List<StoreMeta>>() {

							@Override
							public void onFailure(Throwable caught) {
								// TODO Auto-generated method stub
								
							}

							@Override
							public void onSuccess(List<StoreMeta> result) {
								lbAlamkategooria.clear();
								int sanr=0;
								for(int i=0; i<result.size(); i++) {
									lbAlamkategooria.addItem(result.get(i).getValue());
									if(result.get(i).getValue().equals(selectedItem.getSubCategory())) {sanr=i;}
								}
								lbAlamkategooria.setSelectedIndex(sanr);
							}
							 
						 });

				
				}
			});  

		  lbKategooria.addChangeHandler(new ChangeHandler() {

			@Override
			public void onChange(ChangeEvent event) {
				 deviceTreeService.getChildMetas(lbKategooria.getSelectedValue(), new AsyncCallback<List<StoreMeta>>() {

					@Override
					public void onFailure(Throwable caught) {
						// TODO Auto-generated method stub
						
					}

					@Override
					public void onSuccess(List<StoreMeta> result) {
						lbAlamkategooria.clear();
						int sanr=0;
						for(int i=0; i<result.size(); i++) {
							lbAlamkategooria.addItem(result.get(i).getValue());
							if(result.get(i).getValue().equals(selectedItem.getSubCategory())) {sanr=i;}
						}
//						lbAlamkategooria.setSelectedIndex(sanr);
					}
					 
				 });
				
			}
			  
		  });

		  final ListBox lbLadu=new ListBox();
		  final ListBox lbLaokoht=new ListBox();
		  
			deviceTreeService.getChildMetas(storeMetaMap.get("Laod").getKey(), new AsyncCallback<List<StoreMeta>>(){

				@Override
				public void onFailure(Throwable caught) {
					// TODO Auto-generated method stub
					
				}

				@Override
				public void onSuccess(List<StoreMeta> result) {
					int snr=0;
					for(int i=0; i<result.size(); i++) {
						lbLadu.addItem(result.get(i).getValue(), result.get(i).getKey());
						if(result.get(i).getKey().equals(selectedItem.getStoreKey())) {snr=i;}
					}
					lbLadu.setSelectedIndex(snr);
					 deviceTreeService.getChildMetas(lbLadu.getSelectedValue(), new AsyncCallback<List<StoreMeta>>() {

							@Override
							public void onFailure(Throwable caught) {
								// TODO Auto-generated method stub
								
							}

							@Override
							public void onSuccess(List<StoreMeta> result) {
								lbLaokoht.clear();
							    int snr=0;
							    for(int i=0; i<result.size(); i++) {
							       lbLaokoht.addItem(result.get(i).getValue());
							       if(selectedItem.getStorePlace().equals(result.get(i).getValue())) {snr=i;}
							    }
							    lbLaokoht.setSelectedIndex(snr);
							}
							 
						 });

				
				}
			});  

		  lbLadu.addChangeHandler(new ChangeHandler() {

			@Override
			public void onChange(ChangeEvent event) {
				 deviceTreeService.getChildMetas(lbLadu.getSelectedValue(), new AsyncCallback<List<StoreMeta>>() {

					@Override
					public void onFailure(Throwable caught) {
						// TODO Auto-generated method stub
						
					}

					@Override
					public void onSuccess(List<StoreMeta> result) {
						lbLaokoht.clear();
					    for(StoreMeta sm: result) {
					    	lbLaokoht.addItem(sm.getValue());
					    }	
					}
					 
				 });
				
			}
			  
		  });

		  

		   final TextBox tbTootja=new TextBox();

		   final TextBox tbHankija=new TextBox();

		   final ListBox lbTootja=new ListBox();
		deviceTreeService.getChildMetas(storeMetaMap.get("Tootjad").getKey(), new AsyncCallback<List<StoreMeta>>(){

			@Override
			public void onFailure(Throwable caught) {
				// TODO Auto-generated method stub
				
			}

			@Override
			public void onSuccess(List<StoreMeta> result) {
				int snr=-1;
				lbTootja.addItem("");
				for(int i=0; i<result.size(); i++) {
				   lbTootja.addItem(result.get(i).getValue());
				   if(selectedItem.getProducer().equals(result.get(i).getValue())) {snr=i;}
				}
				lbTootja.setSelectedIndex(snr+1);
			}
		});  

		   final ListBox lbHankija=new ListBox();
		deviceTreeService.getChildMetas(storeMetaMap.get("Hankijad").getKey(), new AsyncCallback<List<StoreMeta>>(){

			@Override
			public void onFailure(Throwable caught) {
				// TODO Auto-generated method stub
				
			}

			@Override
			public void onSuccess(List<StoreMeta> result) {
				int snr=-1;
				lbHankija.addItem("");
				for(int i=0; i<result.size(); i++) {
					lbHankija.addItem(result.get(i).getValue());
					if(result.get(i).getValue().equals(selectedItem.getContractor())) {snr=i;}
				}
				lbHankija.setSelectedIndex(snr+1);
			}
		});  


		lbTootja.addChangeHandler(new ChangeHandler() {

			@Override
			public void onChange(ChangeEvent event) {
				tbTootja.setText(lbTootja.getSelectedItemText());
				
			}});
		
		lbHankija.addChangeHandler(new ChangeHandler() {

			@Override
			public void onChange(ChangeEvent event) {
				tbHankija.setText(lbHankija.getSelectedItemText());
				
			}});
		
		tbTootja.setText(selectedItem.getProducer());
		tbHankija.setText(selectedItem.getContractor());

		final IntegerBox tbLaoseis=new IntegerBox();
		  tbLaoseis.addKeyPressHandler(new KeyPressHandler() {

			@Override
			public void onKeyPress(KeyPressEvent event) {
				if(event.getNativeEvent().getKeyCode()!=KeyCodes.KEY_DELETE && 
				        event.getNativeEvent().getKeyCode()!=KeyCodes.KEY_BACKSPACE &&
				        event.getNativeEvent().getKeyCode()!=KeyCodes.KEY_LEFT &&
				        event.getNativeEvent().getKeyCode()!=KeyCodes.KEY_RIGHT){
				            String c = event.getCharCode()+"";
				            if(RegExp.compile("[^0-9]").test(c))
				                tbLaoseis.cancelKey();
				    }			
			}
			  
		  });
		  tbLaoseis.setText(selectedItem.getAmount());
	      final IntegerBox tbMinkogus=new IntegerBox();
		  tbMinkogus.addKeyPressHandler(new KeyPressHandler() {

			@Override
			public void onKeyPress(KeyPressEvent event) {
				if(event.getNativeEvent().getKeyCode()!=KeyCodes.KEY_DELETE && 
				        event.getNativeEvent().getKeyCode()!=KeyCodes.KEY_BACKSPACE &&
				        event.getNativeEvent().getKeyCode()!=KeyCodes.KEY_LEFT &&
				        event.getNativeEvent().getKeyCode()!=KeyCodes.KEY_RIGHT){
				            String c = event.getCharCode()+"";
				            if(RegExp.compile("[^0-9]").test(c))
				                tbMinkogus.cancelKey();
				    }			
			}
			  
		  });
		  tbMinkogus.setText(selectedItem.getMinAmount());
		  final DoubleBox tbHind=new DoubleBox();
		  tbHind.addKeyPressHandler(new KeyPressHandler() {

			@Override
			public void onKeyPress(KeyPressEvent event) {
				if(event.getNativeEvent().getKeyCode()!=KeyCodes.KEY_DELETE && 
				        event.getNativeEvent().getKeyCode()!=KeyCodes.KEY_BACKSPACE &&
				        event.getNativeEvent().getKeyCode()!=KeyCodes.KEY_LEFT &&
				        event.getNativeEvent().getKeyCode()!=KeyCodes.KEY_RIGHT){
				            String c = event.getCharCode()+"";
				            if(RegExp.compile("[^0-9]").test(c))
				                tbHind.cancelKey();
				    }			
			}
			  
		  });
		  tbHind.setText(selectedItem.getPrice());

		   final ListBox lbOsakond=new ListBox();
		   final ListBox lbYksus=new ListBox();
		   final ListBox lbSeade=new ListBox();
		    lbOsakond.addChangeHandler(new ChangeHandler() {

				@Override
				public void onChange(ChangeEvent event) {
		 			  lbYksus.clear();
		             deviceTreeService.getUnits(lbOsakond.getSelectedValue(), new AsyncCallback<List<Unit>>(){

						@Override
						public void onFailure(Throwable caught) {
							// TODO Auto-generated method stub
							
						}

						@Override
						public void onSuccess(List<Unit> result) {
							lbYksus.addItem("", "");
							int snr=-1;
							for(int i=0; i<result.size(); i++) {
								lbYksus.addItem(result.get(i).getUnit(), result.get(i).getUnitKey());
								if(selectedItem.getUnitKey().equals(result.get(i).getUnitKey())) {snr=i;}
							}
							lbYksus.setSelectedIndex(snr+1);
							lbYksus.fireEvent(event);
							lbSeade.clear();
						}
		            	 
		             });			
				}});
			  
         // Debug.log(selectedCompany.getCompanyKey()+" kompanii");
		  deviceTreeService.getDepartments(selectedCompany.getCompanyKey(), new AsyncCallback<List<Department>>(){

			@Override
			public void onFailure(Throwable caught) {
				// TODO Auto-generated method stub
				Debug.log("probleem "+caught);
			}

			@Override
			public void onSuccess(List<Department> result) {
				lbOsakond.addItem("", "");
				int snr=-1;
				for(int i=0; i<result.size(); i++) {
					lbOsakond.addItem(result.get(i).getDepartmentName(), result.get(i).getDepartmentKey());
					if(selectedItem.getDepartmentKey()!=null && selectedItem.getDepartmentKey().length()>0 && selectedItem.getDepartmentKey().equals(result.get(i).getDepartmentKey())){snr=i;}
				}
				if(snr>=0) {
				  lbOsakond.setSelectedIndex(snr+1);
				  
		             deviceTreeService.getUnits(lbOsakond.getSelectedValue(), new AsyncCallback<List<Unit>>(){

						@Override
						public void onFailure(Throwable caught) {
							// TODO Auto-generated method stub
							
						}

						@Override
						public void onSuccess(List<Unit> result) {
							lbYksus.addItem("", "");
							int snr=-1;
							for(int i=0; i<result.size(); i++) {
								lbYksus.addItem(result.get(i).getUnit(), result.get(i).getUnitKey());
								if(selectedItem.getUnitKey().equals(result.get(i).getUnitKey())) {snr=i;}
							}
							if(snr>=0) {
							  lbYksus.setSelectedIndex(snr+1);
							  lbSeade.clear();
					             deviceTreeService.getDevices(lbYksus.getSelectedValue(), new AsyncCallback<List<Device>>() {

										@Override
										public void onFailure(Throwable caught) {
											// TODO Auto-generated method stub
											
										}

										@Override
										public void onSuccess(List<Device> result) {
											lbSeade.addItem("", "");
											int snr=-1;
											for(int i=0; i<result.size(); i++) {
												lbSeade.addItem(result.get(i).getDeviceName(), result.get(i).getDeviceKey());
												if(selectedItem.getDeviceKey().equals(result.get(i).getDeviceKey())) {snr=i;}
											}
											lbSeade.setSelectedIndex(snr+1);
										}});			
							  
							}
						}
		            	 
		             });				  
				}
				
			}
		});  
	       lbYksus.addChangeHandler(new ChangeHandler() {

			@Override
			public void onChange(ChangeEvent event) {
				lbSeade.clear();
	             deviceTreeService.getDevices(lbYksus.getSelectedValue(), new AsyncCallback<List<Device>>() {

					@Override
					public void onFailure(Throwable caught) {
						// TODO Auto-generated method stub
						
					}

					@Override
					public void onSuccess(List<Device> result) {
						lbSeade.addItem("", "");
						int snr=-1;
						for(int i=0; i<result.size(); i++) {
							lbSeade.addItem(result.get(i).getDeviceName(), result.get(i).getDeviceKey());
							if(selectedItem.getDeviceKey().equals(result.get(i).getDeviceKey())) {snr=i;}
						}
						lbSeade.setSelectedIndex(snr+1);
					}});			
			}});
	       
	       ListBox lbSeisund=new ListBox();
	       lbSeisund.addItem("tavaline", "normal");
	       lbSeisund.addItem("peidetud", "hidden");
	       lbSeisund.addItem("kustutatud", "deleted");
	       if(selectedItem.getStatus()!=null && selectedItem.getStatus().equals("hidden")) {lbSeisund.setSelectedIndex(1);}
	       
	       HorizontalPanel hpTootja=new HorizontalPanel();
	       hpTootja.add(lbTootja);
	       hpTootja.add(tbTootja);

	       HorizontalPanel hpTarnija=new HorizontalPanel();
	       hpTarnija.add(lbHankija);
	       hpTarnija.add(tbHankija);
	       

	    
		   g1.setWidget(0, 0, new Label("ID"));
		   g1.setWidget(0, 1, tbSysId);
		   g1.setWidget(1, 0, new Label("Tootekood"));
		   g1.setWidget(1, 1, tbProductCode);
		   g1.setWidget(2, 0, new Label("Toote nimetus"));
		   g1.setWidget(2, 1, tbProductName);
		   g1.setWidget(3, 0, new Label("Tegevusp\u00F5hine"));
		   g1.setWidget(3, 1, lbTegevuspohine);
		   g1.setWidget(4, 0, new Label("Kategooria"));
		   g1.setWidget(4, 1, lbKategooria);
		   g1.setWidget(5, 0, new Label("Alamkategooria"));
		   g1.setWidget(5, 1, lbAlamkategooria);
		   g1.setWidget(6, 0, new Label("Ladu"));
		   g1.setWidget(6, 1, lbLadu);
		   g1.setWidget(7, 0, new Label("Riiul/ tase"));
		   g1.setWidget(7, 1, lbLaokoht);
		   g1.setWidget(8, 0, new Label("Tootja"));
//		   g1.setWidget(8, 1, lbTootja);
		   g1.setWidget(8, 1, hpTootja);
		   g1.setWidget(9, 0, new Label("Hankija"));
//		   g1.setWidget(9, 1, lbHankija);
		   g1.setWidget(9, 1, hpTarnija);
		   g1.setWidget(10, 0, new Label("Laoseis"));
		   g1.setWidget(10, 1, tbLaoseis);
		   g1.setWidget(11, 0, new Label("Min kogus"));
		   g1.setWidget(11, 1, tbMinkogus);
		   g1.setWidget(12, 0, new Label("Hind"));
		   g1.setWidget(12, 1, tbHind);
		   g1.setWidget(13, 0, new Label("Osakond"));
		   g1.setWidget(13, 1, lbOsakond);
		   g1.setWidget(14, 0, new Label("\u00DCksus"));
		   g1.setWidget(14, 1, lbYksus);
		   g1.setWidget(15, 0, new Label("Seade"));
		   g1.setWidget(15, 1, lbSeade);
		   g1.setWidget(16, 0, new Label("Seisund"));
		   g1.setWidget(16, 1, lbSeisund);
		   
		   Button bChange=new Button("Muuda");
		   bChange.setStyleName("laoalapunane");
		   StoreItem si=selectedItem;
		   bChange.addClickHandler(new ClickHandler() {
			  public void onClick(ClickEvent e) {
	               si.setSysId(tbSysId.getText().trim());
				   if(tbProductCode.getText().trim().length()==0) {
					   Window.alert("Tootekood puudub");
					   return;
				   }
	               si.setProductCode(tbProductCode.getText().trim());
				   if(tbProductName.getText().trim().length()==0) {
					   Window.alert("Toote nimetus puudub");
					   return;
				   }
	               si.setProductName(tbProductName.getText().trim());
	               si.setWorkingCode(lbTegevuspohine.getSelectedValue());
	               si.setCategoryKey(lbKategooria.getSelectedValue());
	               si.setSubCategory(lbAlamkategooria.getSelectedItemText());
	               si.setStoreKey(lbLadu.getSelectedValue());
	               si.setStorePlace(lbLaokoht.getSelectedItemText());
//	               si.setProducer(lbTootja.getSelectedItemText());
//	               si.setContractor(lbHankija.getSelectedItemText());
	               si.setProducer(tbTootja.getText());
	               si.setContractor(tbHankija.getText());
	               si.setAmount(tbLaoseis.getText());
	               si.setMinAmount(tbMinkogus.getText());
	               si.setPrice(tbHind.getText());
	               si.setDepartmentKey(lbOsakond.getSelectedValue());
	               si.setUnitKey(lbYksus.getSelectedValue());
	               si.setDeviceKey(lbSeade.getSelectedValue());
	               if(lbSeisund.getSelectedValue().equals("deleted")) {
	            	   if(!Window.confirm("Kas kindlasti soovid kustutada")) {
	            		   return;
	            	   }
	               }
	               si.setStatus(lbSeisund.getSelectedValue());
				  deviceTreeService.addCompanyStoreItem(si, selectedCompany.getCompanyKey(), new AsyncCallback<String>() {

					@Override
					public void onFailure(Throwable caught) {
						// TODO Auto-generated method stub
						
					}

					@Override
					public void onSuccess(String result) {
	                 // Debug.log(result);	
	                  createStorePanel();
					}
					  
					  
				  });
			  } 
		   });
		   
		   storeChangePanel.add(bChange);
		   
		   

		   
		}

	
	
	private void createWorkersPanel() {
		
		workersPanel.clear();
		final Label lBack = new Label("Tagasi");
		lBack.setStyleName("backSaveLabel");
		lBack.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				contentPanel.showWidget(contentPanel.getWidgetIndex(departmentListPanel));
			}
			
		});
		final Button lBackButton = new Button();
		lBackButton.setStyleName("backButton");
		lBackButton.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				lBack.fireEvent(event);
			}
			
		});

		Label lSave = new Label("Salvesta");
		lSave.setStyleName("backSaveLabel wide");
//		lSave.setStyleName("backButton");
		lSave.addClickHandler(new ClickHandler() {	
			
			@Override
			public void onClick(ClickEvent event) {
				try {					
					saveWorker(tbName.getText(), tbPhone.getText(), tbEmail.getText(), cbWorker.getValue(), cbSupervisor.getValue(), cbActive.getValue());
				//	newCompanyPanel.saveCompany(companyList, storeCompanyCallback);
				} catch (IllegalArgumentException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}

			
			
		});


		TextColumn<Worker> nameColumn=new TextColumn<Worker>() {

			@Override
			public String getValue(Worker object) {
				// TODO Auto-generated method stub
				return object.getName();
			}
			
		};
		wtable.addColumn(nameColumn, "Nimi");
		TextColumn<Worker> emailColumn=new TextColumn<Worker>() {

			@Override
			public String getValue(Worker object) {
				// TODO Auto-generated method stub
				return object.getEmail();
			}
			
		};
		wtable.addColumn(emailColumn, "Email");
		TextColumn<Worker> phoneColumn=new TextColumn<Worker>() {

			@Override
			public String getValue(Worker object) {
				// TODO Auto-generated method stub
				return object.getPhone();
			}
			
		};
		wtable.addColumn(phoneColumn, "Telefon");
		TextColumn<Worker> workerColumn=new TextColumn<Worker>() {

			@Override
			public String getValue(Worker object) {
				// TODO Auto-generated method stub
				return object.getRoles().get(0).isWorker()?"jah":"ei";
			}
			
		};
		wtable.addColumn(workerColumn, "Tegija");
		
		TextColumn<Worker> supervisorColumn=new TextColumn<Worker>() {

			@Override
			public String getValue(Worker object) {
				// TODO Auto-generated method stub
				return object.getRoles().get(0).isSupervisor()?"jah":"ei";
			}
			
		};
		wtable.addColumn(supervisorColumn, "N\u00E4gija");
		TextColumn<Worker> activeColumn=new TextColumn<Worker>() {

			@Override
			public String getValue(Worker object) {
				// TODO Auto-generated method stub
				return object.getRoles().get(0).isActive()?"jah":"ei";
			}
			
		};
		wtable.addColumn(activeColumn, "Aktiivne");
		
		SingleSelectionModel<Worker> tableSelModel = new SingleSelectionModel<Worker>();
		tableSelModel.addSelectionChangeHandler(new SelectionChangeEvent.Handler() {

			@Override
			public void onSelectionChange(SelectionChangeEvent arg0) {
				// TODO Auto-generated method stub
				Worker selectedItem = (Worker) tableSelModel.getSelectedObject();
				tbName.setText(selectedItem.getName());
				tbEmail.setText(selectedItem.getEmail());
				tbEmail.setEnabled(false);
				tbPhone.setText(selectedItem.getPhone());
				cbWorker.setValue(selectedItem.getRoles().get(0).isWorker());
				cbSupervisor.setValue(selectedItem.getRoles().get(0).isSupervisor());
				cbActive.setValue(selectedItem.getRoles().get(0).isActive());
			}
			
		});
		wtable.setSelectionModel(tableSelModel);
		
        updateWorkersTable();		
		
		HorizontalPanel buttonsPanel = new HorizontalPanel();
		buttonsPanel.setStyleName("backSavePanel");
		buttonsPanel.add(lBackButton);
		buttonsPanel.add(lBack);
		buttonsPanel.setCellWidth(lBackButton, "7%");
		buttonsPanel.setCellWidth(lBack, "10%");
		buttonsPanel.add(lSave);
//		buttonsPanel.setCellHorizontalAlignment(lSave, HasHorizontalAlignment.ALIGN_RIGHT);
		buttonsPanel.setCellWidth(lSave, "20%");
		workersPanel.insert(buttonsPanel, 0);
        workersPanel.add(wtable);
		
		workersPanel.add(lName);
		workersPanel.add(tbName);
		workersPanel.add(lPhone);
		workersPanel.add(tbPhone);
		workersPanel.add(lEmail);
		workersPanel.add(tbEmail);
		workersPanel.add(lWorker);
		workersPanel.add(cbWorker);
		workersPanel.add(lSupervisor);
		workersPanel.add(cbSupervisor);
		workersPanel.add(lActive);
		workersPanel.add(cbActive);

		contentPanel.showWidget(contentPanel.getWidgetIndex(workersPanel));

	}

	
	private void updateWorkersTable() {
	    deviceTreeService.getCompanyWorkers(selectedCompany.getCompanyKey(), new AsyncCallback<List<Worker>>() {

			@Override
			public void onFailure(Throwable caught) {
                Window.alert(caught.toString());				
			}


			@Override
			public void onSuccess(List<Worker> result) {
				// TODO Auto-generated method stub
                wtable.setRowData(result);
                tbName.setText("");
                tbPhone.setText("");
                tbEmail.setEnabled(true);
                tbEmail.setText("");
                cbWorker.setValue(false);
                cbSupervisor.setValue(false);
                cbActive.setValue(false);
			}
	    	
	    });

	}
	
	private void saveWorker(String name, String phone, String email, boolean worker, boolean supervisor, boolean active) {
		Worker w=new Worker();
		w.setName(name);
		w.setPhone(phone);
		w.setEmail(email);
		Role r=new Role();
		r.setEmail(email);
		r.setCompanyKeyString(selectedCompany.getCompanyKey());
		r.setRole(worker, supervisor, active);
		w.addRole(r);
		deviceTreeService.storeWorker(w,new AsyncCallback<String>() {

			@Override
			public void onFailure(Throwable caught) {
				Window.alert(caught.toString());
				
			}

			@Override
			public void onSuccess(String result) {
				//Window.alert("stored "+result);
				updateWorkersTable();
			}
			
		});
		
	}
	
	
	
	private void createMeasurementListPanel() {
		measurementListPanel.clear();
		measurementListPanel.setWidth("100%");
		
		Label lBack = new Label("Tagasi");
		lBack.setStyleName("backSaveLabel");
		final Button lBackButton = new Button();
		lBackButton.setStyleName("backButton");
		lBackButton.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				createDeviceListPanel();
				contentPanel.showWidget(contentPanel.getWidgetIndex(deviceCardPanel));
			}
			
		});
		lBack.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				lBackButton.fireEvent(event);
			}
			
		});
		
		HorizontalPanel buttonsPanel = new HorizontalPanel();
		buttonsPanel.setStyleName("backSavePanel");
		buttonsPanel.add(lBackButton);
		buttonsPanel.add(lBack);
		buttonsPanel.setCellWidth(lBackButton, "7%");
		buttonsPanel.setCellWidth(lBack, "93%");
		measurementListPanel.add(buttonsPanel);
		
		//Header Panel
		HorizontalPanel headerPanel = AhoWidgets.createThinContentHeader(selectedDevice.getId() + " " + selectedDevice.getDeviceName());
		measurementListPanel.add(headerPanel);
		VerticalPanel measurementPanel=new VerticalPanel();
		VerticalPanel picturePanel=new VerticalPanel();
		VerticalPanel spacePanel=new VerticalPanel();
		HorizontalPanel hpanel=new HorizontalPanel();
		hpanel.setCellWidth(measurementPanel,  "50%");
		//Measurements list
		for (final Measurement measurement : measurements) {
			Label lMeasurement = new Label(measurement.getDate());
			lMeasurement.setStyleName("aho-listItem");
			lMeasurement.addClickHandler(new ClickHandler() {
				
				@Override
				public void onClick(ClickEvent event) {
					deviceTreeService.getMeasurement(measurement.getMeasurementKey(), getLastMeasurementCallback);
				}
				
			});
//			measurementListPanel.add(lMeasurement);
			measurementPanel.add(lMeasurement);
		}
		Image img=new Image();
	    img.setUrl("/measurement?device="+selectedDevice.getDeviceKey());
//	    measurementListPanel.add(img);
	    picturePanel.add(img);
		Image img2=new Image();
	    img2.setUrl("/measurement?device="+selectedDevice.getDeviceKey()+"&ptype=DE");
//	    measurementListPanel.add(img2);
	    picturePanel.add(img2);
		Image img3=new Image();
	    img3.setUrl("/measurement?device="+selectedDevice.getDeviceKey()+"&ptype=MP");
//	    measurementListPanel.add(img3);
	    picturePanel.add(img3);
		Image img4=new Image();
	    img4.setUrl("/measurement?device="+selectedDevice.getDeviceKey()+"&ptype=TP");
//	    measurementListPanel.add(img4);
	    picturePanel.add(img4);
	    Label label1=new Label(" ");
	    spacePanel.setWidth("20px");
	    spacePanel.add(label1);
	    hpanel.add(measurementPanel);
	    hpanel.add(spacePanel);
	    hpanel.add(picturePanel);
	    measurementListPanel.add(hpanel);
		contentPanel.showWidget(contentPanel.getWidgetIndex(measurementListPanel));
	}
	
	
	
	private CompanyPanel createNewCompanyView() {
		newCompanyPanel.clear();
		
		//Buttons panel
		final Label lBack = new Label("T\u00FChista");
		lBack.setStyleName("backSaveLabel");
		lBack.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				contentPanel.showWidget(contentPanel.getWidgetIndex(companyListPanel));
			}
			
		});
		Button lBackButton = new Button();
		lBackButton.setStyleName("backButton");
		lBackButton.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				lBack.fireEvent(event);
			}
			
		});
		
		Label lSave = new Label("Salvesta");
		lSave.setStyleName("backSaveLabel wide");
		lSave.addClickHandler(new ClickHandler() {	
			
			@Override
			public void onClick(ClickEvent event) {
				try {
					newCompanyPanel.saveCompany(companyList, storeCompanyCallback);
				} catch (IllegalArgumentException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}

			
			
		});
		
		HorizontalPanel buttonsPanel = new HorizontalPanel();
		buttonsPanel.setStyleName("backSavePanel");
		buttonsPanel.add(lBackButton);
		buttonsPanel.add(lBack);
		buttonsPanel.setCellWidth(lBackButton, "7%");
		buttonsPanel.setCellWidth(lBack, "43%");
		buttonsPanel.add(lSave);
		buttonsPanel.setCellHorizontalAlignment(lSave, HasHorizontalAlignment.ALIGN_RIGHT);
		buttonsPanel.setCellWidth(lSave, "50%");
		newCompanyPanel.insert(buttonsPanel, 0);
		
		contentPanel.showWidget(contentPanel.getWidgetIndex(newCompanyPanel));
		
		return newCompanyPanel;
	}
	
	private void createEditCompanyView() {
		createNewCompanyView();
		newCompanyPanel.createEditCompanyPanel(selectedCompany);
	}

	private void createEditDepartmentView() {
		createNewDepartmentView();
		//newDepartmentPanel.clear(selectedCompany);
		newDepartmentPanel.createEditDepartmentPanel(selectedDepartment);
	}

	private DepartmentPanel createNewDepartmentView() {
		final Label lBack = new Label("T\u00FChista");
		lBack.setStyleName("backSaveLabel");
		lBack.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				contentPanel.showWidget(contentPanel.getWidgetIndex(departmentListPanel));
			}
			
		});
		Button lBackButton = new Button();
		lBackButton.setStyleName("backButton");
		lBackButton.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				lBack.fireEvent(event);
			}
			
		});
		
		Label lSave = new Label("Salvesta");
		lSave.setStyleName("backSaveLabel wide");
		lSave.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				System.out.println("Osakonna salvestuse alustus");
//				contentPanel.showWidget(contentPanel.getWidgetIndex(departmentListPanel));
				newDepartmentPanel.saveDepartment(departmentList, storeDepartmentCallback);
			}
			
		});
		
		HorizontalPanel buttonsPanel = new HorizontalPanel();
		buttonsPanel.setStyleName("backSavePanel");
		buttonsPanel.add(lBackButton);
		buttonsPanel.add(lBack);
		buttonsPanel.setCellWidth(lBackButton, "7%");
		buttonsPanel.setCellWidth(lBack, "43%");
		buttonsPanel.add(lSave);
		buttonsPanel.setCellHorizontalAlignment(lSave, HasHorizontalAlignment.ALIGN_RIGHT);
		buttonsPanel.setCellWidth(lSave, "50%");
		newDepartmentPanel.clear(selectedCompany);
		newDepartmentPanel.insert(buttonsPanel, 0);
		
		contentPanel.showWidget(contentPanel.getWidgetIndex(newDepartmentPanel));
		
		return newDepartmentPanel;
		
	}
	
	private UnitPanel createNewLocationView() {
		newUnitPanel.clear(selectedDepartment);
		
		//Buttons panel
		final Label lBack = new Label("T\u00FChista");
		lBack.setStyleName("backSaveLabel");
		lBack.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				contentPanel.showWidget(contentPanel.getWidgetIndex(unitListPanel));
			}
			
		});
		Button lBackButton = new Button();
		lBackButton.setStyleName("backButton");
		lBackButton.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				lBack.fireEvent(event);
			}
			
		});
		
		Label lSave = new Label("Salvesta");
		lSave.setStyleName("backSaveLabel wide");
		lSave.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				newUnitPanel.saveUnit(unitList, storeUnitCallback);
			}
			
		});
		
		HorizontalPanel buttonsPanel = new HorizontalPanel();
		buttonsPanel.setStyleName("backSavePanel");
		buttonsPanel.add(lBackButton);
		buttonsPanel.add(lBack);
		buttonsPanel.setCellWidth(lBackButton, "7%");
		buttonsPanel.setCellWidth(lBack, "43%");
		buttonsPanel.add(lSave);
		buttonsPanel.setCellHorizontalAlignment(lSave, HasHorizontalAlignment.ALIGN_RIGHT);
		buttonsPanel.setCellWidth(lSave, "50%");
		newUnitPanel.insert(buttonsPanel, 0);
		
		contentPanel.showWidget(contentPanel.getWidgetIndex(newUnitPanel));
		
		return newUnitPanel;
	}

	public void createMaintenancePanel2() {
		HorizontalPanel maintHeader = new HorizontalPanel();
		deviceMaintenancePanel2.clear();
        deviceMaintenancePanel2.create();	
        maintHeader.setWidth("100%");
		final Label lBack = new Label("Tagasi ");
		final Label lInfo = new Label(selectedDepartment.getDepartmentName()+" - "+selectedUnit.getUnit()+" "+selectedDevice.getDeviceName());
		lBack.setStyleName("backSaveLabel");
		lInfo.setStyleName("backSaveLabel");
		lBack.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				createDeviceEditPanelView();
				contentPanel.showWidget(contentPanel.getWidgetIndex(deviceEditPanel));
			}
			
		});
		Button lBackButton = new Button();
		lBackButton.setStyleName("backButton");
		lBackButton.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				lBack.fireEvent(event);
			}	
		});
		maintHeader.add(lBackButton);
		maintHeader.add(lBack);

		maintHeader.add(lInfo);
		maintHeader.setCellHorizontalAlignment(lInfo, HasHorizontalAlignment.ALIGN_RIGHT);
		
		deviceMaintenancePanel2.insert(maintHeader, 0);
		contentPanel.showWidget(contentPanel.getWidgetIndex(deviceMaintenancePanel2));
	}
	
	public void createDeviceEditPanelView() {
		deviceEditPanel.clear();
		
		HorizontalPanel maintHeader = new HorizontalPanel();
		final Label lBack = new Label("Tagasi");
		lBack.setStyleName("backSaveLabel");
		lBack.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				showDeviceCardView(selectedDevice.getDeviceName());
			}
			
		});
		
		Button lBackButton = new Button();
		lBackButton.setStyleName("backButton");
		lBackButton.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				lBack.fireEvent(event);
			}	
		});
		
		HorizontalPanel buttonTime = AhoWidgets.createContentHeader("");
		buttonTime.setWidth("100%");
		Label header=new Label(selectedDevice.getId() +" " + selectedDepartment.getDepartmentName()+ " - " +
				   selectedUnit.getUnit()+" -" +selectedDevice.getDeviceName() + " hooldust\u00F6\u00F6d");
		Label admin1 = new Label("Lisa hooldust\u00F6\u00F6");
		final Button admin = new Button("+", new ClickHandler() {
			  @Override
			  public void onClick(ClickEvent event) {
				  DeviceCard.this.selectedMaintenanceItem=null;
				  createMaintenancePanel2();
		      }
		    });
		admin1.addClickHandler(new ClickHandler() {
			public void onClick(ClickEvent event) {
				admin.click();
			}
		});
		header.setStyleName("maintenanceHeaderText");
		admin.setStyleName("maintenanceLink");
		admin1.setStyleName("aho-label2-maintLink");
		RootPanel.get().add(admin);
		buttonTime.add(header);
		buttonTime.add(admin1);
		buttonTime.add(admin);
		
		maintHeader.add(lBack);
		maintHeader.add(lBackButton);
		//deviceEditPanel.insert(maintHeader, 0);
		//deviceEditPanel.insert(buttonTime, 1);
		deviceEditPanel.add(maintHeader);
		deviceEditPanel.add(buttonTime);
		deviceEditPanel.createNewDeviceEditPanel(selectedDevice);
		if(Window.Location.getParameter("DiagnosticKey")!=null) {
			  DeviceCard.this.selectedMaintenanceItem=null;
			createMaintenancePanel2();
		} else {
		    contentPanel.showWidget(contentPanel.getWidgetIndex(deviceEditPanel));
		}
	}
	
	private void createEditLocationView() {
		createNewLocationView();
		newUnitPanel.createEditLocationPanel(selectedUnit);
	}

	private void showDeviceCardView(String deviceName) {
		deviceCardPanel.clear();
		
		selectedDeviceName = deviceName;
		
		//Back/edit panel
		final Label lBack = new Label("Tagasi");
		lBack.setStyleName("backSaveLabel");
		lBack.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				contentPanel.showWidget(contentPanel.getWidgetIndex(deviceListPanel));
			}
			
		});
		Button lBackButton = new Button();
		lBackButton.setStyleName("backButton");
		lBackButton.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				lBack.fireEvent(event);
			}
			
		});
		/*
		Label lMeasurements = new Label("M\u00F5\u00F5tmiste tulemused");
		lMeasurements.setStyleName("backSaveLabel");
		lMeasurements.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				deviceTreeService.getMeasurements(selectedDevice.getDeviceKey(), getMeasurementsCallback);
			}
			
		})*/;
		Label lDeleteDevice = new Label("Kustuta");
		lDeleteDevice.setStyleName("backSaveLabel");
		lDeleteDevice.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				String deleteKey = selectedDevice.getDeviceKey();
				showDeletePrompt(deleteKey, "Device");
			}
			
		});
		Label lEditDevice = new Label("Muuda");
		lEditDevice.setStyleName("backSaveLabel");
		lEditDevice.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				showEditDeviceView();
			}
			
		});
		
		HorizontalPanel backSavePanel = new HorizontalPanel();
		backSavePanel.setStyleName("backSavePanel");
		backSavePanel.add(lBackButton);
		backSavePanel.add(lBack);
		backSavePanel.setCellWidth(lBackButton, "7%");
//		backSavePanel.setCellWidth(lBack, "43%");
		backSavePanel.setCellWidth(lBack, "61%");
	//	backSavePanel.add(lMeasurements);
	//	backSavePanel.setCellHorizontalAlignment(lMeasurements, HasHorizontalAlignment.ALIGN_RIGHT);
	//	backSavePanel.setCellWidth(lMeasurements, "18%");
		backSavePanel.add(lEditDevice);
		backSavePanel.setCellHorizontalAlignment(lEditDevice, HasHorizontalAlignment.ALIGN_RIGHT);
		backSavePanel.setCellWidth(lEditDevice, "16%");
		backSavePanel.add(lDeleteDevice);
		backSavePanel.setCellHorizontalAlignment(lDeleteDevice, HasHorizontalAlignment.ALIGN_RIGHT);
		backSavePanel.setCellWidth(lDeleteDevice, "16%");
		String labelText = "Seadme \u00FCldandmed";
		HorizontalPanel headerPanel = new HorizontalPanel();
		headerPanel.setStyleName("aho-measurementHeaderPanel");
		Label lDeviceHeader = new Label(labelText);
		lDeviceHeader.setStyleName("aho-label2");
		headerPanel.add(lDeviceHeader);

		if (labelText.equals("Seadme \u00FCldandmed")) {
			//Button maintainanceLink = new Button();
			
            Image imMeasurements=new Image("/res/pik-mootmine.png");
            imMeasurements.setSize("50px", "65px");
			//Label lMeasurements = new Label("M\u00F5\u00F5tmiste tulemused");
			//lMeasurements.setStyleName("backSaveLabel");
			imMeasurements.addClickHandler(new ClickHandler() {
				
				@Override
				public void onClick(ClickEvent event) {
					deviceTreeService.getMeasurements(selectedDevice.getDeviceKey(), getMeasurementsCallback);
				}
				
			});
			headerPanel.add(imMeasurements);
			
			
			Image imMaintainanceLink=new Image("/res/pik-hooldus.png");
			imMaintainanceLink.setSize("50px", "65px");
			//Label lMaintainanceLink = new Label("Hooldus");
			//lMaintainanceLink.setStyleName("aho-label2-maintLink");
			//maintainanceLink.setStyleName("maintainanceLink link");
			//maintainanceLink.setText("+");
//			lMaintainanceLink.addClickHandler(new ClickHandler() {
			imMaintainanceLink.addClickHandler(new ClickHandler() {
				@Override
				public void onClick(ClickEvent event) {
					createDeviceEditPanelView();
				}
			});
			//headerPanel.add(lMaintainanceLink);
			headerPanel.add(imMaintainanceLink);
			//headerPanel.add(maintainanceLink);
		}

		deviceCardPanel.createDeviceView(selectedCompany, selectedDepartment, selectedUnit, selectedDevice);

		deviceCardPanel.insert(backSavePanel, 0);
		deviceCardPanel.insert(headerPanel, 1);
		contentPanel.showWidget(contentPanel.getWidgetIndex(deviceCardPanel));
	}

	private void showEditDeviceView() {
		deviceCardPanel.clear();
		
		//Cancel/save panel
		final Label lCancel = new Label("Tagasi");
		lCancel.setStyleName("backSaveLabel cancel");
		lCancel.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				cancelDeviceEditing();
				
			}
			
		});
		Button lBackButton = new Button();
		lBackButton.setStyleName("backButton cancel");
		lBackButton.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				lCancel.fireEvent(event);
			}
			
		});
		
		Label lSaveDevice = new Label("Salvesta");
		lSaveDevice.setStyleName("backSaveLabel");
		lSaveDevice.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				deviceCardPanel.updateDeviceData(selectedDevice, storeDeviceCallback);
			}
			
		});
		
		HorizontalPanel backSavePanel = new HorizontalPanel();
		backSavePanel.setStyleName("backSavePanel");
		backSavePanel.add(lBackButton);
		backSavePanel.add(lCancel);
		backSavePanel.setCellWidth(lBackButton, "7%");
		backSavePanel.setCellWidth(lCancel, "43%");
		backSavePanel.add(lSaveDevice);
		backSavePanel.setCellHorizontalAlignment(lSaveDevice, HasHorizontalAlignment.ALIGN_RIGHT);
		backSavePanel.setCellWidth(lSaveDevice, "50%");
		
		deviceCardPanel.createEditDeviceView(selectedCompany, selectedUnit, selectedDevice);
		deviceCardPanel.insert(backSavePanel, 0);
		contentPanel.showWidget(contentPanel.getWidgetIndex(deviceCardPanel));
	}
	
	private void showDeletePrompt(String key, String deleteType) {
		PopupPanel popupPanel = new PopupPanel();
		VerticalPanel popupContainer = new VerticalPanel();
		HorizontalPanel buttonRow = new HorizontalPanel();
		Button yesButton = new Button("Jah");
		Button noButton = new Button("Ei");
		Label popupText = new Label("Kas soovid kindlasti kustutada?");
		popupPanel.setTitle("Kustuta");
		popupPanel.setStyleName("deletePrompt");
		popupText.setStyleName("popupText");
		yesButton.setStyleName("promptButton");
		noButton.setStyleName("promptButton");
		buttonRow.setStyleName("promptButtonRow");
		buttonRow.setCellHorizontalAlignment(yesButton, HasHorizontalAlignment.ALIGN_CENTER);
		buttonRow.setCellHorizontalAlignment(noButton, HasHorizontalAlignment.ALIGN_CENTER);
		popupContainer.add(popupText);
		buttonRow.add(yesButton);
		buttonRow.add(noButton);
		popupContainer.add(buttonRow);
		popupPanel.setWidget(popupContainer);
		popupPanel.center();
		yesButton.addClickHandler(new ClickHandler() {
			@Override
			public void onClick(ClickEvent event) {
				switch(deleteType) {
					case "Device":
						deviceTreeService.deleteDevice(key, storeDeviceCallback);
						break;
					case "Unit":
						deviceTreeService.deleteUnit(key, storeUnitCallback);
						break;
					case "Department":
						deviceTreeService.deleteDepartment(key, storeDepartmentCallback);
						break;
					case "Company":
						deviceTreeService.deleteCompany(key, storeCompanyCallback);
						break;
				}
				popupPanel.hide();
			}
		});
		noButton.addClickHandler(new ClickHandler() {
			@Override
			public void onClick(ClickEvent event) {
				popupPanel.hide();
			}
		});
		popupPanel.show();
	}
	
	private void cancelDeviceEditing() {
		showDeviceCardView(selectedDeviceName);
	}
	
	private void showAddDeviceView() {
		deviceCardPanel.clear();
		
		//Back/save/edit panel
		final Label lCancel = new Label("T\u00FChista");
		lCancel.setStyleName("backSaveLabel b");
		lCancel.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				contentPanel.showWidget(contentPanel.getWidgetIndex(deviceListPanel));
			}
			
		});
		Button lBackButton = new Button();
		lBackButton.setStyleName("backButton");
		lBackButton.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				lCancel.fireEvent(event);
			}
			
		});
		
		Label lNewDevice = new Label("Salvesta");
		lNewDevice.setStyleName("backSaveLabel");
		lNewDevice.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				deviceCardPanel.createDevice(deviceList, storeDeviceCallback);
			}
			
		});
		
		HorizontalPanel backSavePanel = new HorizontalPanel();
		backSavePanel.setStyleName("backSavePanel");
		backSavePanel.add(lBackButton);
		backSavePanel.add(lCancel);
		backSavePanel.setCellWidth(lBackButton, "7%");
		backSavePanel.setCellWidth(lCancel, "43%");
		backSavePanel.add(lNewDevice);
		backSavePanel.setCellHorizontalAlignment(lNewDevice, HasHorizontalAlignment.ALIGN_RIGHT);
		backSavePanel.setCellWidth(lNewDevice, "50%");
		deviceCardPanel.createNewDeviceView(selectedCompany, selectedDepartment,  selectedUnit);
		deviceCardPanel.insert(backSavePanel, 0);
		contentPanel.showWidget(contentPanel.getWidgetIndex(deviceCardPanel));
	}
	
	

	

	/**
	 * Create panel for viewing measurements taken on said device.
	 */
	private void createDeviceMeasurementsPanel() {
		// TODO panel with measurements taken on said device.
		lastMeasurementPanel.clear();
		lastMeasurementPanel.setWidth("100%");
		
		final ExtendedMeasurementView measurementPanel = new ExtendedMeasurementView(selectedDevice, measurement, storeMeasurementCallback);
		
		//Back/save panel
		final Label lBack = new Label("Tagasi");
		lBack.setStyleName("backSaveLabel b");
		lBack.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				contentPanel.showWidget(contentPanel.getWidgetIndex(measurementListPanel));
			}
			
		});
		Button lBackButton = new Button();
		lBackButton.setStyleName("backButton");
		lBackButton.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				lBack.fireEvent(event);
			}
			
		});
		
		Label lSave = new Label("Salvesta");
		lSave.setStyleName("backSaveLabel");
		lSave.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				measurementPanel.saveMeasurement();
			}
			
		});
		
		HorizontalPanel backSavePanel = new HorizontalPanel();
		backSavePanel.setStyleName("backSavePanel");
		backSavePanel.add(lBackButton);
		backSavePanel.add(lBack);
		backSavePanel.setCellWidth(lBackButton, "7%");
		backSavePanel.setCellWidth(lBack, "43%");
		backSavePanel.add(lSave);
		backSavePanel.setCellHorizontalAlignment(lSave, HasHorizontalAlignment.ALIGN_RIGHT);
		backSavePanel.setCellWidth(lSave, "50%");
		lastMeasurementPanel.add(backSavePanel);
		lastMeasurementPanel.add(measurementPanel);
		
		AbsolutePanel emptyPanel = new AbsolutePanel();
		emptyPanel.setStyleName("aho-markingBlankPanel");
		lastMeasurementPanel.add(emptyPanel);
		
		contentPanel.showWidget(contentPanel.getWidgetIndex(lastMeasurementPanel));
		measurementPanel.focusInputField();
	}

	public static DeviceTreeServiceAsync getDevicetreeservice() {
		return deviceTreeService;
	}
}
