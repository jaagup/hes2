package com.elektrimasinad.aho.client;

import java.text.Format;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;
import static java.util.stream.Collectors.toList;

import com.elektrimasinad.aho.shared.Company;
import com.elektrimasinad.aho.shared.Device;
import com.elektrimasinad.aho.shared.Measurement;
import com.elektrimasinad.aho.shared.Raport;
import com.elektrimasinad.aho.shared.Unit;
import com.elektrimasinad.aho.shared.DiagnostikaItem;
import com.elektrimasinad.aho.shared.MaintenanceItem;
import com.elektrimasinad.aho.shared.PlannerItem;
import com.google.gwt.cell.client.Cell;
import com.google.gwt.cell.client.SafeHtmlCell;
import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.Element;
import com.google.gwt.dom.client.NativeEvent;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.logical.shared.ResizeHandler;
import com.google.gwt.event.logical.shared.SelectionEvent;
import com.google.gwt.event.logical.shared.SelectionHandler;
import com.google.gwt.safehtml.shared.SafeHtml;
import com.google.gwt.safehtml.shared.SafeHtmlUtils;
import com.google.gwt.storage.client.Storage;
import com.google.gwt.event.logical.shared.ResizeEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.cellview.client.CellTable;
import com.google.gwt.user.cellview.client.Column;
import com.google.gwt.user.cellview.client.ColumnSortEvent;
import com.google.gwt.user.cellview.client.RowStyles;
import com.google.gwt.user.cellview.client.TextColumn;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.AbsolutePanel;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.DeckPanel;
import com.google.gwt.user.client.ui.DecoratorPanel;
import com.google.gwt.user.client.ui.HasHorizontalAlignment;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.ScrollPanel;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.TreeItem;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.view.client.ListDataProvider;
import com.google.gwt.view.client.SelectionChangeEvent;
import com.google.gwt.view.client.SingleSelectionModel;
//import com.ibm.icu.util.Calendar;



public class Hooldus implements EntryPoint {
	
	private static final DeviceTreeServiceAsync deviceTreeService = DeviceCard.getDevicetreeservice();
	private AsyncCallback<List<Raport>> getRaportsCallback;
	private AsyncCallback<List<Device>> getDeviceCallback;
	private AsyncCallback<List<MaintenanceItem>> getMaintenanceCallback;
	protected AsyncCallback<List<Measurement>> getRaportDataCallback;
	private AsyncCallback<Company> getCompanyCallback;
	private AsyncCallback<List<MaintenanceItem>> getCompanyMaintenanceItemsCallback;
	private AsyncCallback<List<Measurement>> getCompanyMeasurementsCallback;

	
	private int MAIN_WIDTH = 900;
	private int CONTENT_WIDTH = (int) (MAIN_WIDTH * 0.9);
	
	private List<Raport> raports = new ArrayList<Raport>();
	private List<Device> devices = new ArrayList<Device>();
	private List<MaintenanceItem> maintenance = new ArrayList<MaintenanceItem>();
	private List<MaintenanceItem> maintenance2 = new ArrayList<MaintenanceItem>();
	private List<Measurement> measurements2 = new ArrayList<Measurement>();
	private static List<Measurement> raportDataList;
	
	private DeviceTree devTree;
	private VerticalPanel mainPanel = new VerticalPanel();
	private VerticalPanel raportPanel = new VerticalPanel();
	private DeckPanel contentPanel;
	private DeckPanel content2Panel;
	private VerticalPanel treePanel;
	private VerticalPanel tablePanel;
	private VerticalPanel table2Panel=new VerticalPanel();
	private VerticalPanel unitPanel = new VerticalPanel();
	private VerticalPanel maintenanceListPanel=new VerticalPanel();

	
	private Unit selectedUnit;
	private static Raport selectedRaport;
	protected Company selectedCompany;
	private Widget inputRaportNr;
	private Widget inputMeasurerName;
	private Widget inputMeasurerPhone;
	private Widget inputDate;
	private boolean isDevMode;
	private boolean isMobileView;
	DebugClientSide Debug = new DebugClientSide();
	private Storage sessionStore;
	private String accountKey = null;
	
	private List<DiagnostikaItem> DIAGNOSTIKA = new ArrayList<DiagnostikaItem>();
	private List<PlannerItem> PLANNER = new ArrayList<PlannerItem>();
    private String otsiStr="";

	@Override
	public void onModuleLoad() {
		Debug.enable();
		Debug.log("Debug enabled");
		sessionStore = Storage.getSessionStorageIfSupported();
		accountKey = sessionStore.getItem("Account");
		if ( accountKey == null) {
			Window.Location.assign("/Login.html");
			return;
		} 
 		if (Window.Location.getHref().contains("127.0.0.1")) isDevMode = true;
 		else isDevMode = false;
 		if (Window.getClientWidth() < 10000) {
 			isMobileView = true;
 		} else {
 			isMobileView = false;
 		}
 		Window.addResizeHandler(new ResizeHandler() {
 
 		    @Override
 		    public void onResize(ResizeEvent event) {
 		    	if (Window.getClientWidth() < 10000) {
 					isMobileView = true;
 				} else {
 					isMobileView = false;
 				}
 		    	updateWidgetSizes();
 		    }
 		});
 		HorizontalPanel navigationPanel = new HorizontalPanel();

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
				
//				selectedCompany = arg0;
				Label companyNameLabel = new Label(selectedCompany.getCompanyName());
				companyNameLabel.setStyleName("companyLabel");
				Button logoutButton = new Button("Logi v\u00E4lja", new ClickHandler() {

					@Override
					public void onClick(ClickEvent arg0) {
						// TODO Auto-generated method stub
						sessionStore.clear();
						Window.Location.assign("/Login.html");
					}
					
				});
				logoutButton.setStyleName("loginBtn");
				navigationPanel.add(companyNameLabel);
				navigationPanel.add(logoutButton);
			

				deviceTreeService.getCompanyMaintenanceItems(sessionStore.getItem("Account"), getCompanyMaintenanceItemsCallback);
				
				//init();
			//	updateWidgetSizes();
			}
			
		};
		getCompanyMaintenanceItemsCallback=new AsyncCallback<List<MaintenanceItem>>() {
			@Override
			public void onSuccess(List<MaintenanceItem> items) {
			
				maintenance2=items;
				Debug.log("uued saabusid");
				Debug.log(maintenance2.toString());
				deviceTreeService.getCompanyMeasurements(sessionStore.getItem("Account"), getCompanyMeasurementsCallback);

			}
			@Override
			public void onFailure(Throwable caught) {
				//System.err.println(caught);
				Debug.log("Maintenance Items error "+caught);
			}
		};
		getCompanyMeasurementsCallback=new AsyncCallback<List<Measurement>>() {
			@Override
			public void onSuccess(List<Measurement> items) {
			
				measurements2=items;
				Debug.log("uued mootmised saabusid");
				Debug.log(measurements2.toString());
				init();
			}
			@Override
			public void onFailure(Throwable caught) {
				//System.err.println(caught);
				Debug.log("Measurement Items error "+caught);
			}
		};

		RootPanel root = RootPanel.get();
		root.setStyleName("mainBackground2");
		
		mainPanel.setSize(MAIN_WIDTH + "px", "900px");
		mainPanel.setStyleName("panelBackground b");
 		Image headerImage = new Image("res/hes-symbol.jpg");
 		headerImage.setStyleName("aho-headerImage");
 		headerImage.addClickHandler(new ClickHandler() {
 			
 			@Override
 			public void onClick(ClickEvent event) {
 				if(isDevMode) Window.Location.assign(Window.Location.getHref().replace("index", "index"));
 				else Window.Location.assign("/Index.html");
 			}
 			
 		});
 		
 		navigationPanel.setStyleName("aho-navigationPanel");
 		navigationPanel.add(headerImage);
 		navigationPanel.setCellWidth(headerImage, "52px");
		//deviceTreeService.getCompany(sessionStore.getItem("Account"), getCompanyCallback);

		AbsolutePanel headerPanel = new AbsolutePanel();
		headerPanel.setStyleName("headerBackground");
		headerPanel.add(navigationPanel);
		mainPanel.add(headerPanel);
		
		contentPanel = new DeckPanel();
		mainPanel.add(contentPanel);
		mainPanel.setCellHeight(contentPanel, "100%");
		mainPanel.setCellHorizontalAlignment(contentPanel, HasHorizontalAlignment.ALIGN_CENTER);
		content2Panel = new DeckPanel();
		mainPanel.add(content2Panel);
		mainPanel	.setCellHeight(content2Panel, "100%");
		mainPanel.setCellHorizontalAlignment(content2Panel, HasHorizontalAlignment.ALIGN_CENTER);
		
		root.add(mainPanel);
		firstInit();
		updateWidgetSizes();
		//createUnitPanel();

		
	}

	private void updateWidgetSizes() {
		String contentWidth = "90%";
 		MAIN_WIDTH = 700;
 		MAIN_WIDTH = Window.getClientWidth();
 		if (isMobileView) {
 			//MAIN_WIDTH = Window.getClientWidth();
 			contentWidth = "95%";
 		}
 		mainPanel.setWidth("100%");
 		contentPanel.setWidth("100%");
 		content2Panel.setWidth("100%");
	}
	private void firstInit() {
		devTree = new DeviceTree(deviceTreeService);
		devTree.getElement().addClassName("gwt-Tree");
		Debug.log("uurib ja kysib");
		deviceTreeService.getCompany(sessionStore.getItem("Account"), getCompanyCallback);

		//deviceTreeService.getListRaports(getRaportsCallback);
	}
	private void init() {
			
		//String m = "measurement size: " + Integer.toString(raportDataList.size());
		//Debug.log(m);
		createNewDataTable2();
		contentPanel.add(tablePanel);
		content2Panel.add(table2Panel);
		content2Panel.add(maintenanceListPanel);
		contentPanel.showWidget(contentPanel.getWidgetIndex(tablePanel));
		//content2Panel.showWidget(content2Panel.getWidgetIndex(table2Panel));
		createNewPlannerTable2();
		Debug.log("init valmis");
	}

	public void createMaintenanceListPanel() {
		maintenanceListPanel.clear();
	    HorizontalPanel upperPanel=new HorizontalPanel();
    	upperPanel.setStyleName("aho-navigationPanel");
	   	Label lLabel = new Label("Tegevuste ajalugu");
		lLabel.setStyleName("backSaveLabel noPointer");
        maintenanceListPanel.add(lLabel);
		TextBox tbOtsi = AhoWidgets.createTextbox("aho-textbox1 medium", otsiStr);

//        TextBox tbOtsi=new TextBox();
//        tbOtsi.setText(otsiStr);
        Button bOtsi=new Button("Otsi");
        bOtsi.setStyleName("loginBtn");
        bOtsi.addClickHandler(new ClickHandler() {

			@Override
			public void onClick(ClickEvent event) {
				otsiStr=tbOtsi.getText();
				createMaintenanceListPanel();
			}
        });
        HorizontalPanel labelPanel=new HorizontalPanel();
    	labelPanel.setStyleName("aho-navigationPanel");

//        Label lLabel = new Label("Planeeritavad tegevused");
	//	lLabel.setStyleName("backSaveLabel noPointer");
        //table2Panel.add(lLabel);
        upperPanel.add(lLabel);
        upperPanel.add(tbOtsi);
        upperPanel.add(bOtsi);
        Button bAjalugu=new Button("Tagasi");
       // upperPanel.add(bAjalugu);
        bAjalugu.setStyleName("loginBtn");
        bAjalugu.addClickHandler(new ClickHandler() {
        	public void onClick(ClickEvent e) {        		
          	  createNewPlannerTable2();	
        	}
        });
        upperPanel.add(bAjalugu);
        Button bEkspordi=new Button("CSV eksport");
        //upperPanel.add(bEkspordi);
        bEkspordi.setStyleName("loginBtn");
        bEkspordi.addClickHandler(new ClickHandler() {
        	public void onClick(ClickEvent e) {        		
          	  Window.Location.assign("/getRaport/hooldusCSV?companyKey="+sessionStore.getItem("Account"));	
        	}
        });
        upperPanel.add(bEkspordi);
        Button bEkspordi2=new Button("CSV Excel EST");
        //upperPanel.add(bEkspordi);
        bEkspordi2.setStyleName("loginBtn");
        bEkspordi2.addClickHandler(new ClickHandler() {
        	public void onClick(ClickEvent e) {        		
          	  Window.Location.assign("/getRaport/hooldusCSV?companyKey="+sessionStore.getItem("Account")+"&separator=semicolon");	
        	}
        });
        upperPanel.add(bEkspordi2);
        maintenanceListPanel.add(upperPanel);
//        table2Panel.add(upperPanel);
/*
        Label lKuup=new Label("Kuup");
        labelPanel.add(lKuup);
        Label lOsakond=new Label("Osakond");
        labelPanel.add(lOsakond);
        Label lUksus=new Label("Uksus");
        labelPanel.add(lUksus);
        Label lIdnr=new Label("ID nr");
        labelPanel.add(lIdnr);
        Label lSeade=new Label("Seade");
        labelPanel.add(lSeade);
        Label lTegevus=new Label("Tegevus");
        labelPanel.add(lTegevus);
        Label lKat=new Label("Kat");
        labelPanel.add(lKat);
*/
        Label lTyhi=new Label("");
        labelPanel.add(lTyhi);
        Label lTeost=new Label("Teostaja");
        labelPanel.add(lTeost);
        Label lSeisak=new Label("Seisaku aeg");
        labelPanel.add(lSeisak);
        Label lAjakulu=new Label("Ajakulu");
        labelPanel.add(lAjakulu);
        Label lMaksumus=new Label("Maksumus");
        labelPanel.add(lMaksumus);
/*        Label lAjalugu=new Label("Vaata planeeritavaid tegevusi");
        labelPanel.add(lAjalugu);
        lAjalugu.addClickHandler(new ClickHandler() {
        	public void onClick(ClickEvent e) {        		
        	  createNewPlannerTable2();	
        	}
        });
  */    
        /*
        labelPanel.setCellWidth(lKuup,"10%");
        labelPanel.setCellWidth(lOsakond,"10%");
        labelPanel.setCellWidth(lUksus,"10%");
        labelPanel.setCellWidth(lIdnr,"10%");
        labelPanel.setCellWidth(lSeade,"10%");
        labelPanel.setCellWidth(lTegevus,"20%");
        labelPanel.setCellWidth(lKat,"10%");*/
        labelPanel.setCellWidth(lTyhi, "70%");
        labelPanel.setCellWidth(lSeisak,"10%");
        labelPanel.setCellWidth(lAjakulu,"10%");
        labelPanel.setCellWidth(lMaksumus,"10%");
  //      labelPanel.setCellWidth(lAjalugu,"10%");
		maintenanceListPanel.setStyleName("aho-panel1 table center");
		maintenanceListPanel.setWidth("100%");
		maintenanceListPanel.add(labelPanel);
        labelPanel.setWidth("100%");
	       CellTable<MaintenanceItem> table=new CellTable<MaintenanceItem>(500);
		    maintenance2.sort(new Comparator<MaintenanceItem>() {
		    	@Override
		    	public int compare(MaintenanceItem m1, MaintenanceItem m2) {
		    		return m1.getMaintenanceCompleteDate().compareTo(m2.getMaintenanceCompleteDate());
		    	}
		    });
		   
			Column<MaintenanceItem, SafeHtml> markingColumn = new Column<MaintenanceItem, SafeHtml>(new SafeHtmlCell()) {
				public SafeHtml getValue(MaintenanceItem m) {
					Date now=new Date();
					Date d=m.getMaintenanceCompleteDate();
					String dstr=DeviceMaintenancePanel2.dateString(d);
	/*				String taust="gray";
//					plan.setStyle("background-color: red");
					if(d.compareTo(now)<0 && (d.getDate()<now.getDate() || d.getMonth()<now.getMonth())) {taust="pink";}
					else {
						if(d.getTime()<now.getTime()+60*60*24*1000) {
							taust="white";
						} else {
					     taust="lightblue";
						}
					}
*/
				   return SafeHtmlUtils.fromTrustedString(dstr);
				}
			}    ;    

			markingColumn.setCellStyleNames("markingCell");
			markingColumn.setSortable(true);
			table.setColumnWidth(0, "60px");
		    table.addColumn(markingColumn, "Kuup");

		    TextColumn<MaintenanceItem> nameColumn = new TextColumn<MaintenanceItem>() {
				@Override
				public String getValue(MaintenanceItem object) {
					return object.getDepartmentName();
				}
			};
			nameColumn.setSortable(true);
			table.addColumn(nameColumn, "Osakond");
			
			TextColumn<MaintenanceItem> addressColumn = new TextColumn<MaintenanceItem>() {
				@Override
				public String getValue(MaintenanceItem object) {
					return object.getUnitName();
				}
			};
			addressColumn.setSortable(true);
			table.addColumn(addressColumn, "\u00DCksus");

			TextColumn<MaintenanceItem> idColumn = new TextColumn<MaintenanceItem>() {
				@Override
				public String getValue(MaintenanceItem object) {
					return object.getDeviceID();
				}
			};
			idColumn.setSortable(true);
			table.addColumn(idColumn, "ID.nr");
			
			TextColumn<MaintenanceItem> deviceColumn = new TextColumn<MaintenanceItem>() {
				@Override
				public String getValue(MaintenanceItem object) {
					return object.getDeviceName();
				}
			};
			deviceColumn.setSortable(true);
			table.addColumn(deviceColumn, "Seade");
			
			TextColumn<MaintenanceItem> actionColumn = new TextColumn<MaintenanceItem>() {
				@Override
				public String getValue(MaintenanceItem object) {
					return object.getMaintenanceName();
				}
			};
			actionColumn.setSortable(true);
			table.addColumn(actionColumn, "Tegevus");

			TextColumn<MaintenanceItem> katColumn = new TextColumn<MaintenanceItem>() {
				@Override
				public String getValue(MaintenanceItem object) {
					return object.getMaintenanceShortDescription();
				}
			};
			katColumn.setSortable(true);
			table.addColumn(katColumn, "Kat");


			TextColumn<MaintenanceItem> teostColumn = new TextColumn<MaintenanceItem>() {
				@Override
				public String getValue(MaintenanceItem object) {
					return object.getMaintenanceAssignedTo();
				}
			};
			katColumn.setSortable(true);
			table.addColumn(teostColumn, "Teostaja");

			
			TextColumn<MaintenanceItem> downtimeColumn = new TextColumn<MaintenanceItem>() {
				@Override
				public String getValue(MaintenanceItem object) {
					return object.getMaintenanceDowntime()+"";
				}
			};
			downtimeColumn.setSortable(true);
			table.addColumn(downtimeColumn, "Seisaku aeg");

			TextColumn<MaintenanceItem> timeSpentColumn = new TextColumn<MaintenanceItem>() {
				@Override
				public String getValue(MaintenanceItem object) {
					return object.getMaintenanceTimeSpent()+"";
				}
			};
			timeSpentColumn.setSortable(true);
			table.addColumn(timeSpentColumn, "Ajakulu");

			TextColumn<MaintenanceItem> costColumn = new TextColumn<MaintenanceItem>() {
				@Override
				public String getValue(MaintenanceItem object) {
					return object.getMaintenanceCost()+"";
				}
			};
			costColumn.setSortable(true);
			table.addColumn(costColumn, "Maksumus");

	        List<MaintenanceItem> maintenance2a=maintenance2.stream().filter((m) -> m.getMaintenanceState().contentEquals("done")).
	        		filter((m)->m.getTableString().indexOf(otsiStr)>=0).
	        		collect(toList());

			ListDataProvider<MaintenanceItem> dataProvider=new ListDataProvider<MaintenanceItem>();
			dataProvider.addDataDisplay(table);
			for(MaintenanceItem item: maintenance2a) {
				dataProvider.getList().add(item);
			}
		    ColumnSortEvent.ListHandler<MaintenanceItem> columnSortHandler=new ColumnSortEvent.ListHandler<MaintenanceItem>(dataProvider.getList());
            columnSortHandler.setComparator(actionColumn, new Comparator<MaintenanceItem>(){
            	public int compare(MaintenanceItem m1, MaintenanceItem m2) {
            		return m1.getMaintenanceName().compareToIgnoreCase(m2.getMaintenanceName());
            	}
            });
            columnSortHandler.setComparator(markingColumn, new Comparator<MaintenanceItem>(){
            	public int compare(MaintenanceItem m1, MaintenanceItem m2) {
            		return m1.getMaintenanceCompleteDate().compareTo(m2.getMaintenanceCompleteDate());
            	}
            });

            columnSortHandler.setComparator(nameColumn, new Comparator<MaintenanceItem>(){
            	public int compare(MaintenanceItem m1, MaintenanceItem m2) {
            		return m1.getDepartmentName().compareToIgnoreCase(m2.getDepartmentName());
            	}
            });
         
            columnSortHandler.setComparator(addressColumn, new Comparator<MaintenanceItem>(){
            	public int compare(MaintenanceItem m1, MaintenanceItem m2) {
            		return m1.getUnitName().compareToIgnoreCase(m2.getUnitName());
            	}
            });
            
            columnSortHandler.setComparator(idColumn, new Comparator<MaintenanceItem>(){
            	public int compare(MaintenanceItem m1, MaintenanceItem m2) {
            		try {
            			return Integer.parseInt(m1.getDeviceID())-Integer.parseInt(m2.getDeviceID());
            		}
            		catch(Exception ex) {
            		return m1.getDeviceID().compareToIgnoreCase(m2.getDeviceID());}
            	}
            });

            columnSortHandler.setComparator(deviceColumn, new Comparator<MaintenanceItem>(){
            	public int compare(MaintenanceItem m1, MaintenanceItem m2) {
            		return m1.getDeviceName().compareToIgnoreCase(m2.getDeviceName());
            	}
            });

            columnSortHandler.setComparator(katColumn, new Comparator<MaintenanceItem>(){
            	public int compare(MaintenanceItem m1, MaintenanceItem m2) {
            		return m1.getMaintenanceShortDescription().compareToIgnoreCase(m2.getMaintenanceShortDescription());
            	}
            });

            
            columnSortHandler.setComparator(downtimeColumn, new Comparator<MaintenanceItem>(){
            	public int compare(MaintenanceItem m1, MaintenanceItem m2) {
            		if( m1.getMaintenanceDowntime()<m2.getMaintenanceDowntime()) {return -1;}
            		if( m1.getMaintenanceDowntime()>m2.getMaintenanceDowntime()) {return 1;}
            		return 0;
            	}
            });

            columnSortHandler.setComparator(timeSpentColumn, new Comparator<MaintenanceItem>(){
            	public int compare(MaintenanceItem m1, MaintenanceItem m2) {
            		if(m1.getMaintenanceTimeSpent()<m2.getMaintenanceTimeSpent()) {return -1;}
            		if(m1.getMaintenanceTimeSpent()>m2.getMaintenanceTimeSpent()) {return 1;}
            		return 0;
            	}
            });

            columnSortHandler.setComparator(costColumn, new Comparator<MaintenanceItem>(){
            	public int compare(MaintenanceItem m1, MaintenanceItem m2) {
            		return (int) (m1.getMaintenanceCost()-m2.getMaintenanceCost());
            	}
            });


            
            table.addColumnSortHandler(columnSortHandler) ;
            table.getColumnSortList().push(markingColumn);			
            table.getColumnSortList().push(nameColumn);			
            table.getColumnSortList().push(addressColumn);			
            table.getColumnSortList().push(idColumn);			
            table.getColumnSortList().push(actionColumn);			
            table.getColumnSortList().push(katColumn);			
            table.getColumnSortList().push(deviceColumn);			
            table.getColumnSortList().push(downtimeColumn);			
            table.getColumnSortList().push(timeSpentColumn);			
            table.getColumnSortList().push(costColumn);			
			
			table.setRowCount(maintenance2a.size(), true);
			
			table.setRowData(0, maintenance2a);
			maintenanceListPanel.add(table);
			content2Panel.showWidget(content2Panel.getWidgetIndex(maintenanceListPanel));
			contentPanel.setVisible(false);
            double sumDowntime=0;
            double sumTimeSpent=0;
            double sumCost=0;
            for(MaintenanceItem mi: maintenance2a) {
            	sumDowntime+=mi.getMaintenanceDowntime();
            	sumTimeSpent+=mi.getMaintenanceTimeSpent();
            	sumCost+=mi.getMaintenanceCost();
            }
            
            lSeisak.setText("Seisaku aeg: "+((int)(sumDowntime*100))/100.0);
            lAjakulu.setText("Ajakulu: "+((int)(sumTimeSpent*100))/100.0);
            lMaksumus.setText("Maksumus: "+((int)(sumCost*100))/100);
            table.setHeight(maintenance2a.size()*50+"px");
//			ScrollPanel sp=new ScrollPanel(table);
//			sp.setSize("100%", "200px");
//			table2Panel.add(sp);

	}

	private VerticalPanel createNewDataTable2() {
		tablePanel = new VerticalPanel();
		tablePanel.setStyleName("aho-panel1 table2");
		tablePanel.setWidth("100%");
		Label lLabel = new Label("Diagnostika ja monitooring");
		lLabel.setStyleName("backSaveLabel noPointer");
		// HOOLDUSTEGEVUSTE PILT
		Image hooldusImage = new Image("res/pikto-hooldus.png");
 		hooldusImage.setStyleName("aho-hooldusImage");
 		hooldusImage.addClickHandler(new ClickHandler() {
 			
 			@Override
 			public void onClick(ClickEvent event) {
 				if(isDevMode) Window.Location.assign(Window.Location.getHref().replace("index", "DeviceCard"));
 				else Window.Location.assign("/DeviceCard.html");
 			}
 			
 		});
 		
		CellTable<Measurement> table = new CellTable<Measurement>();
		Column<Measurement, SafeHtml> markingColumn = new Column<Measurement, SafeHtml>(new SafeHtmlCell()) {
	    	@Override
			public SafeHtml getValue(Measurement object) {
	    		//return  SafeHtmlUtils.fromTrustedString(AhoWidgets.getAHOImage("a", 24).toString());
	    		if(object.getMarking()==null) {return null;}
	    		if(object.getMarking().contentEquals("alarm")) {return  SafeHtmlUtils.fromTrustedString(AhoWidgets.getAHOImage("a", 24).toString());}
	    		if(object.getMarking().contentEquals("hoiatus")) {return  SafeHtmlUtils.fromTrustedString(AhoWidgets.getAHOImage("h", 24).toString());}
	    		return  SafeHtmlUtils.fromTrustedString(AhoWidgets.getAHOImage("o", 24).toString());

				/*if(object.getMarking().equals("alarm")) {
						return object.getMarking().equals("alarm") ? SafeHtmlUtils.fromTrustedString(AhoWidgets.getAHOImage("a", 24).toString()): null;
					}else if (object.getMarking().equals("hoiatus")) {
						return object.getMarking().equals("hoiatus") ? SafeHtmlUtils.fromTrustedString(AhoWidgets.getAHOImage("h", 24).toString()): null;
					} else {
						return object.getMarking().equals("ok") ? SafeHtmlUtils.fromTrustedString(AhoWidgets.getAHOImage("o", 24).toString()): null;
			}
					}*/
		}
		};
		
		markingColumn.setCellStyleNames("markingCell");
		table.setColumnWidth(0, "60px");
		table.setWidth("100%");
	    table.addColumn(markingColumn);
	    	
	    TextColumn<Measurement> dateColumn = new TextColumn<Measurement>() {
		      @Override
		      public String getValue(Measurement object) {
		        return object.getDate().toString();
		      }
		    };
		    table.addColumn(dateColumn, "Kuup");

		  TextColumn<Measurement> nameColumn = new TextColumn<Measurement>() {
	      @Override
	      public String getValue(Measurement object) {
	        return object.getDepartmentName();
	      }
	    };
	    table.addColumn(nameColumn, "Osakond");

	    // Add a text column to show the address.
	    TextColumn<Measurement> addressColumn = new TextColumn<Measurement>() {
	      @Override
	      public String getValue(Measurement object) {
	        return object.getUnitName();
	      }
	    };
	    table.addColumn(addressColumn, "\u00FCksus");
	    
	 // Add a text column to show the ID.
	    TextColumn<Measurement> idColumn = new TextColumn<Measurement>() {
	      @Override
	      public String getValue(Measurement object) {
	          //return object.getRaportID();
	          return object.getDeviceID();
	    	      }
	    };
	    table.addColumn(idColumn, "ID.nr");
	    
	    // Add a text column to show the device name.
	    TextColumn<Measurement> seadeColumn = new TextColumn<Measurement>() {
	      @Override
	      public String getValue(Measurement object) {
	        return object.getDeviceName();
	      }
	    };
	    table.addColumn(seadeColumn, "Seade");
	    
	    // Add a text column to show the comment.
	    TextColumn<Measurement> kommentaarColumn = new TextColumn<Measurement>() {
	      @Override
	      public String getValue(Measurement object) {
	        return object.getComment();
	      }
	     
	    };
	    kommentaarColumn.setCellStyleNames("kommentaar");
	    table.addColumn(kommentaarColumn, "Kommentaar");
	    
	    
		SingleSelectionModel<Measurement> tableSelModel = new SingleSelectionModel<Measurement>();
		tableSelModel.addSelectionChangeHandler(new SelectionChangeEvent.Handler() {

			@Override
			public void onSelectionChange(SelectionChangeEvent arg0) {
				// TODO Auto-generated method stub
				Measurement selectedItem = (Measurement) tableSelModel.getSelectedObject();
				//showEditPanel(selectedItem);
				//Debug.log(selectedItem.getDevice());
//				Window.Location.assign("/DeviceCard.html?deviceKey="+selectedItem.getDeviceKey()+"&action=addPlannerItem");
				Window.Location.assign("/DeviceCard.html?deviceKey="+selectedItem.getDeviceKey()+"&action=createPlannerItem&problemDescription="+selectedItem.getComment()+"&DiagnosticKey="+selectedItem.getMeasurementKey());
			}
			
		});
		table.setSelectionModel(tableSelModel);
		List<Measurement> measurements3=
  	      measurements2.stream().filter((m) -> m.getRaportKey().length()>0).
	      filter((m) -> (m.getMarking().contentEquals("alarm") || 
	    		    m.getMarking().contentEquals("hoiatus")) && !m.getStatus().contentEquals("archived")).
	      collect(toList()); 
	    // Set the total row count. This isn't strictly necessary, but it affects
	    // paging calculations, so its good habit to keep the row count up to date.
	    table.setRowCount(measurements3.size(), true);
	    table.setWidth("100%");
	    tablePanel.setWidth("100%");
	    //tablePanel.getParent().setWidth("100%");
	    // Push the data into the widget.
	    table.setRowData(0, measurements3);
	    tablePanel.add(lLabel);
	    ScrollPanel sp=new ScrollPanel(table);
//	    sp.setSize("720px", "200px");
	    sp.setSize("100%", "200px");
	    tablePanel.add(sp);
		AbsolutePanel markingPanel = new AbsolutePanel();
	    markingPanel.setSize("100%", "50px");
		markingPanel.add(AhoWidgets.getAHOImage("a", 14), 20, 5);
		markingPanel.add(AhoWidgets.getAHOImage("h", 14), 20, 20);
		//markingPanel.add(AhoWidgets.getAHOImage("o", 14), 0, 35);
	    Label markingA = new Label("Alarm. Oluline k\u00F5rvalekalle normist. Soovitatav tegevus");
	    Label markingH = new Label("Hoiatus. T\u00E4heldatav k\u00F5rvalekalle normist. V\u00E4lja selgitada p\u00F5hjus v\u00F5i j\u00E4lgida arengut.");
	    //Label markingO = new Label("N\u00E4itajad normi piirides");
	    markingA.setStyleName("smallTextLabel");
	    markingH.setStyleName("smallTextLabel");
	    //markingO.setStyleName("smallTextLabel");
	    markingPanel.add(markingA, 45, 5);
	    markingPanel.add(markingH, 45, 20);
	    //markingPanel.add(markingO, 25, 35);
		tablePanel.add(markingPanel);

	    Debug.log("ylemine valmis");
		return tablePanel;
	}
/*
	private VerticalPanel createOldPlannerTable3() {
		
	}
	*/
	private VerticalPanel createNewPlannerTable2() {
//		table2Panel = new VerticalPanel();
		table2Panel.clear();
		Label lLabel = new Label("Planeeritavad tegevused");
		lLabel.setStyleName("backSaveLabel noPointer");
		TextBox otsiTb = AhoWidgets.createTextbox("aho-textbox1 medium", otsiStr);

		otsiTb.setText(otsiStr);
		Button otsiB=new Button("Otsi");
		otsiB.setStyleName("loginBtn");
		otsiB.addClickHandler(new ClickHandler() {
			public void onClick(ClickEvent e) {
				otsiStr=otsiTb.getText();
				createNewPlannerTable2();
			}
		});
        //table2Panel.add(lLabel);
        HorizontalPanel upperPanel=new HorizontalPanel();
    	upperPanel.setStyleName("aho-navigationPanel");
        upperPanel.add(lLabel);
        upperPanel.add(otsiTb);
        upperPanel.add(otsiB);
        Button bAjalugu=new Button("Vaata ajalugu");
        upperPanel.add(bAjalugu);
        bAjalugu.setStyleName("loginBtn");
        bAjalugu.addClickHandler(new ClickHandler() {
        	public void onClick(ClickEvent e) {        		
        	  createMaintenanceListPanel();	
        	}
        });
        table2Panel.add(upperPanel);
        HorizontalPanel labelPanel=new HorizontalPanel();
        Label lKuup=new Label("Kuup");
        labelPanel.add(lKuup);
        Label lOsakond=new Label("Osakond");
        labelPanel.add(lOsakond);
        Label lUksus=new Label("Uksus");
        labelPanel.add(lUksus);
        Label lIdnr=new Label("ID nr");
        labelPanel.add(lIdnr);
        Label lSeade=new Label("Seade");
        labelPanel.add(lSeade);
        Label lTegevus=new Label("Tegevus");
        labelPanel.add(lTegevus);
        Label lKat=new Label("Kategooria");
        labelPanel.add(lTegevus);
        Label lTeost=new Label("Teostaja");
        labelPanel.add(lTeost);
/*        Label lAjalugu=new Label("Vaata ajalugu");
        labelPanel.add(lAjalugu);
        lAjalugu.addClickHandler(new ClickHandler() {
        	public void onClick(ClickEvent e) {        		
        	  createMaintenanceListPanel();	
        	}
        });*/
        labelPanel.setCellWidth(lKuup,"10%");
        labelPanel.setCellWidth(lOsakond,"10%");
        labelPanel.setCellWidth(lUksus,"10%");
        labelPanel.setCellWidth(lIdnr,"10%");
        labelPanel.setCellWidth(lSeade,"10%");
        labelPanel.setCellWidth(lTegevus,"30%");
        labelPanel.setCellWidth(lKat,"10%");
        labelPanel.setCellWidth(lTeost,"10%");
        //labelPanel.setCellWidth(lAjalugu,"10%");
		table2Panel.setStyleName("aho-panel1 table center");
		table2Panel.setWidth("100%");
       // table2Panel.add(labelPanel);
        labelPanel.setWidth("100%");
        CellTable<MaintenanceItem> table=new CellTable<MaintenanceItem>(500);
	    maintenance2.sort(new Comparator<MaintenanceItem>() {
	    	@Override
	    	public int compare(MaintenanceItem m1, MaintenanceItem m2) {
	    		return m1.getMaintenanceCompleteDate().compareTo(m2.getMaintenanceCompleteDate());
	    	}
	    });
		Column<MaintenanceItem, SafeHtml> markingColumn = new Column<MaintenanceItem, SafeHtml>(new SafeHtmlCell()) {
			public SafeHtml getValue(MaintenanceItem m) {
				Date now=new Date();
				Date d=m.getMaintenanceCompleteDate();
				String dstr=DeviceMaintenancePanel2.dateString(d);
				String taust="gray";
//				plan.setStyle("background-color: red");
				if(d.compareTo(now)<0 && (d.getDate()<now.getDate() || d.getMonth()<now.getMonth() || d.getYear()<now.getYear())) {taust="pink";}
				else {
					if(d.getTime()<now.getTime()+60*60*24*1000) {
						taust="white";
					} else {
				     taust="lightblue";
					}
				}

			   return SafeHtmlUtils.fromTrustedString("<span style='background-color: "+taust+"'>"+dstr+"</span>");
			}
		}    ;    

		markingColumn.setCellStyleNames("markingCell");
		table.setColumnWidth(0, "60px");
	    table.addColumn(markingColumn, "Kuup");

	    TextColumn<MaintenanceItem> nameColumn = new TextColumn<MaintenanceItem>() {
			@Override
			public String getValue(MaintenanceItem object) {
				return object.getDepartmentName();
			}
		};
		table.addColumn(nameColumn, "Osakond");
		
		TextColumn<MaintenanceItem> addressColumn = new TextColumn<MaintenanceItem>() {
			@Override
			public String getValue(MaintenanceItem object) {
				return object.getUnitName();
			}
		};
		table.addColumn(addressColumn, "\u00DCksus");
		
		TextColumn<MaintenanceItem> idColumn = new TextColumn<MaintenanceItem>() {
			@Override
			public String getValue(MaintenanceItem object) {
				return object.getDeviceID();
			}
		};
		table.addColumn(idColumn, "ID.nr");
		
		TextColumn<MaintenanceItem> deviceColumn = new TextColumn<MaintenanceItem>() {
			@Override
			public String getValue(MaintenanceItem object) {
				return object.getDeviceName();
			}
		};
		table.addColumn(deviceColumn, "Seade");
		
		TextColumn<MaintenanceItem> actionColumn = new TextColumn<MaintenanceItem>() {
			@Override
			public String getValue(MaintenanceItem object) {
				return object.getMaintenanceName();
			}
		};
		/*
		table.setRowStyles(new RowStyles<PlannerItem>() {
			@Override
			public String getStyleNames(PlannerItem rowObject, int rowIndex) {
				return rowObject.getStyle();
			}
		});*/
		table.addColumn(actionColumn, "Tegevus");

		TextColumn<MaintenanceItem> katColumn = new TextColumn<MaintenanceItem>() {
			@Override
			public String getValue(MaintenanceItem object) {
//				return new String[] {"KH","EH","D","\u00FC","R","M","R/H"}[Integer.parseInt(object.getMaintenanceDescription())];
				return object.getMaintenanceShortDescription();
			}
		};
		table.addColumn(katColumn, "Kategooria");

		TextColumn<MaintenanceItem> teostColumn = new TextColumn<MaintenanceItem>() {
			@Override
			public String getValue(MaintenanceItem object) {
				return object.getMaintenanceAssignedTo();
			}
		};
		table.addColumn(teostColumn, "Teostaja");
		
		
		SingleSelectionModel<MaintenanceItem> tableSelModel = new SingleSelectionModel<MaintenanceItem>();
		tableSelModel.addSelectionChangeHandler(new SelectionChangeEvent.Handler() {

			@Override
			public void onSelectionChange(SelectionChangeEvent arg0) {
				// TODO Auto-generated method stub
				MaintenanceItem selectedItem = (MaintenanceItem) tableSelModel.getSelectedObject();
				//showEditPanel(selectedItem);
			//	Debug.log(selectedItem.getDevice());
				Window.Location.assign("/DeviceCard.html?deviceKey="+selectedItem.getMaintenanceDevice()+
						"&action=showPlannerItem&maintenanceCode="+selectedItem.getMaintenanceID());
			}
			
		});
		table.setSelectionModel(tableSelModel);
		Date loppaeg=new Date(new Date().getTime()+2*7*24*3600*1000);
		Debug.log(loppaeg.toString());
        List<MaintenanceItem> maintenance2a=maintenance2.stream().filter((m) -> !m.getMaintenanceState().contentEquals("done")).
        		filter((m)-> m.getMaintenanceCompleteDate().getTime()<loppaeg.getTime()).
        		filter((m)->m.getTableString().indexOf(otsiStr)>=0).
        		collect(toList());
		table.setRowCount(maintenance2a.size(), true);
		//table.setRowCount(500, true);
		
		table.setRowData(0, maintenance2a);
		//table.setColumnWidth(0, "80px");
		
/*
	    table.setColumnWidth(0, "35px");
	    table.setColumnWidth(1, "35px");
	    table.setColumnWidth(2, "35px");
	    table.setColumnWidth(3, "35px");
	    table.setColumnWidth(4, "35px");
	    table.setColumnWidth(5, "300px");
*/	    table.setWidth("100%");
        table.setHeight(maintenance2a.size()*50+"px");
		//table2Panel.add(lLabel);
		//ScrollPanel sp=new ScrollPanel(table);
		//sp.setSize("100%", "200px");
		//table2Panel.add(sp);
        table2Panel.add(table);
		content2Panel.showWidget(content2Panel.getWidgetIndex(table2Panel));
		contentPanel.setVisible(true);
    //   Debug.log(maintenance2.size()+" "+maintenance2a.size());
		
		return table2Panel;
	}
}
