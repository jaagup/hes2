package com.elektrimasinad.aho.client;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.elektrimasinad.aho.shared.Company;
import com.elektrimasinad.aho.shared.Department;
import com.elektrimasinad.aho.shared.Device;
import com.elektrimasinad.aho.shared.Measurement;
import com.elektrimasinad.aho.shared.Raport;
import com.elektrimasinad.aho.shared.Unit;
import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.dom.client.FocusEvent;
import com.google.gwt.event.dom.client.FocusHandler;
import com.google.gwt.event.dom.client.HasFocusHandlers;
import com.google.gwt.event.dom.client.KeyUpEvent;
import com.google.gwt.event.dom.client.KeyUpHandler;
import com.google.gwt.event.logical.shared.ResizeEvent;
import com.google.gwt.event.logical.shared.ResizeHandler;
import com.google.gwt.event.logical.shared.SelectionEvent;
import com.google.gwt.event.logical.shared.SelectionHandler;
import com.google.gwt.event.logical.shared.ValueChangeEvent;
import com.google.gwt.event.logical.shared.ValueChangeHandler;
import com.google.gwt.i18n.client.DateTimeFormat;
import com.google.gwt.i18n.client.TimeZone;
import com.google.gwt.storage.client.Storage;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.AbsolutePanel;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.DeckPanel;
import com.google.gwt.user.client.ui.FocusWidget;
import com.google.gwt.user.client.ui.HasHorizontalAlignment;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.ScrollPanel;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.Tree;
import com.google.gwt.user.client.ui.TreeItem;
import com.google.gwt.user.client.ui.ValueBoxBase.TextAlignment;
import com.google.gwt.user.client.ui.VerticalPanel;

import sun.security.util.Debug;

public class Aho implements EntryPoint {
	
	private static final DeviceTreeServiceAsync deviceTreeService = DeviceCard.getDevicetreeservice();
	private AsyncCallback<String> storeMeasurementCallback;
	private AsyncCallback<Measurement> getLastMeasurementCallback;

	private boolean isMobileView;
	private int MAIN_WIDTH;
	protected Integer currentFocusedInputField;
	private List<HasFocusHandlers> inputFieldList = new ArrayList<HasFocusHandlers>();
	private Device selectedDevice = new Device();
	//private Company selectedCompany;
	private TreeItem selectedTreeItem;
	private Measurement measurement = new Measurement();
	
	private VerticalPanel mainPanel;
	private AbsolutePanel headerPanel;
	private VerticalPanel deviceTreePanel;
	private VerticalPanel measurementPanel;
	private Label lName;
	private HorizontalPanel prevNextPanel;
	private ScrollPanel markingScrollPanel;
	private DeckPanel contentPanel;

	private DeviceTree devTree;

	private String markingText;
	private ExtendedTextArea commentTextArea;
//	private ExtendedTextArea localCommentTextArea;
	private TextBox localCommentNDE;
	private TextBox mmsNDE;
	private TextBox geNDE;
	private TextBox commentNDE;
	private TextBox localCommentDE;
	private TextBox mmsDE;
	private TextBox geDE;
	private TextBox commentDE;
	private TextBox localCommentMP;
	private TextBox mmsMP;
	private TextBox geMP;
	private TextBox commentMP;
	private TextBox localCommentTP;
	private TextBox mmsTP;
	private TextBox geTP;
	private TextBox commentTP;
	private Image imgA;
	private Image imgH;
	private Image imgO;
	private boolean isDevMode;
	private Storage sessionStore;
	private String accountKey = null;
	private AsyncCallback<Company> getCompanyCallback;
	Company selectedCompany;

	
	public void onModuleLoad() {
		
		sessionStore = Storage.getSessionStorageIfSupported();
		accountKey = sessionStore.getItem("Account");
		if ( accountKey == null) {
			Window.Location.assign("/Login.html");
			return;
		} 
		
			HorizontalPanel navigationPanel = new HorizontalPanel();
			getCompanyCallback = new AsyncCallback<Company>() {

				@Override
				public void onFailure(Throwable arg0) {
					// TODO Auto-generated method stub
					
				}

				@Override
				public void onSuccess(Company arg0) {
					// TODO Auto-generated method stub
					selectedCompany = arg0;
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
		
		
		
		storeMeasurementCallback = new AsyncCallback<String>() {
			
			@Override
			public void onSuccess(String name) {
				System.out.println(name);
				if (measurement.getMarking().equalsIgnoreCase("alarm")) selectedTreeItem.getElement().setClassName("gwt-TreeNode2A");
				else if (measurement.getMarking().equalsIgnoreCase("hoiatus")) selectedTreeItem.getElement().setClassName("gwt-TreeNode2H");
				else if (measurement.getMarking().equalsIgnoreCase("ok")) selectedTreeItem.getElement().setClassName("gwt-TreeNode2O");
				else selectedTreeItem.getElement().setClassName("gwt-TreeNode2M");
				contentPanel.showWidget(contentPanel.getWidgetIndex(deviceTreePanel));
				prevNextPanel.setVisible(false);
			}
			
			@Override
			public void onFailure(Throwable caught) {
				System.err.println(caught);
			}
			
		};
		getLastMeasurementCallback = new AsyncCallback<Measurement>() {
			
			@Override
			public void onSuccess(Measurement lastMeasurement) {
				//System.out.println(name);
				if (lastMeasurement == null) {
					measurement = new Measurement();
				} else {
					measurement = lastMeasurement;
				}
				createMeasurementPanel();
				fillMeasurementData();
				contentPanel.showWidget(contentPanel.getWidgetIndex(measurementPanel));
				updateWidgetSizes();
			}
			
			@Override
			public void onFailure(Throwable caught) {
				System.err.println(caught);
			}
			
		};
		
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
					prevNextPanel.setVisible(false);
				}
		    	updateWidgetSizes();
		    }
		});
		mainPanel = new VerticalPanel();
		mainPanel.setSize(MAIN_WIDTH + "px", "900px");
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
		
//		HorizontalPanel navigationPanel = new HorizontalPanel();
		navigationPanel.setStyleName("aho-navigationPanel");
		navigationPanel.add(headerImage);
		navigationPanel.setCellWidth(headerImage, "52px");
		deviceTreeService.getCompany(sessionStore.getItem("Account"), getCompanyCallback);

		headerPanel = new AbsolutePanel();
		headerPanel.setStyleName("headerBackground");
		headerPanel.add(navigationPanel);
		mainPanel.add(headerPanel);
		
		contentPanel = new DeckPanel();
		mainPanel.add(contentPanel);
		
		RootPanel rootPanel = RootPanel.get();
		rootPanel.setStyleName("mainBackground2");
		rootPanel.add(mainPanel);
		
		init();
		updateWidgetSizes();
	}
	
	private void updateWidgetSizes() {
		String contentWidth = "90%";
		if (isMobileView) {
			MAIN_WIDTH = Window.getClientWidth();
			contentWidth = "95%";
			int markingScrollHeight = Math.abs(Window.getClientHeight() - markingScrollPanel.getAbsoluteTop() - 105);
			if (markingScrollHeight < 400) {
				markingScrollHeight = 400;
			}
			markingScrollPanel.setSize("100%", markingScrollHeight + "px");
		} else {
			MAIN_WIDTH = 700;
			markingScrollPanel.setSize("100%", "auto");
		}
		mainPanel.setWidth(MAIN_WIDTH + "px");
		mainPanel.setHeight(Window.getClientHeight() + "px");
		contentPanel.setWidth(contentWidth);
		mainPanel.setCellHorizontalAlignment(contentPanel, HasHorizontalAlignment.ALIGN_CENTER);
	}
	
	private void init() {
		createDeviceTreePanel();
		measurementPanel = new VerticalPanel();
		createMeasurementPanel();
		createPrevNextPanel();
		contentPanel.add(deviceTreePanel);
		contentPanel.add(measurementPanel);
		contentPanel.showWidget(contentPanel.getWidgetIndex(deviceTreePanel));
		mainPanel.setCellHorizontalAlignment(contentPanel, HasHorizontalAlignment.ALIGN_CENTER);
		mainPanel.setCellHeight(contentPanel, "100%");
		String unitKey=Window.Location.getParameter("unitKey");
		if(unitKey!=null) {
		deviceTreeService.getUnit(unitKey, new AsyncCallback<Unit>() {
			public void onSuccess(Unit u){
				DebugClientSide.log(u+"");
				
			}

			@Override
			public void onFailure(Throwable caught) {
				// TODO Auto-generated method stub
				
			}
		});
		}

	}
	
	
	
	private void createDeviceTreePanel() {
		deviceTreePanel = new VerticalPanel();
		deviceTreePanel.setWidth("100%");
		System.out.println("Loodud 244");
	//	Debug.println("loodud", "244");
		Label lLabel1 = new Label("M\u00F5\u00F5tmised");
		lLabel1.setStyleName("backSaveLabel noPointer");
		
		devTree = new DeviceTree(deviceTreeService);
		devTree.setType("monitooring");
		devTree.getElement().addClassName("gwt-Tree");
		devTree.addSelectionHandler(new SelectionHandler<TreeItem>() {

			@Override
			public void onSelection(SelectionEvent<TreeItem> event) {
				//System.err.println("valitud: " + event.getSelectedItem().getText());
				//Window.alert(event.getSelectedItem().getText());
				selectedTreeItem = (TreeItem) event.getSelectedItem();
				if (selectedTreeItem.getUserObject() instanceof Device) {
					//System.out.println(selectedTreeItem.getText() + " selected..");
					selectedDevice = (Device)selectedTreeItem.getUserObject();
					lName.setText(selectedTreeItem.getText());
					deviceTreeService.getLastMeasurement(selectedDevice.getDeviceKey(), getLastMeasurementCallback);
				} else {
					if (selectedTreeItem.getUserObject() instanceof Company && selectedTreeItem.getChildCount() == 0) {
						//System.out.println(selectedTreeItem.getText() + " selected..");
						devTree.fetchDepartments((Company)selectedTreeItem.getUserObject());
						//Window.alert("Company: "+event.getSelectedItem().getText());
					} else if (selectedTreeItem.getUserObject() instanceof Department && selectedTreeItem.getChildCount() == 0) {
						//System.err.println(selectedTreeItem.getText() + " selected..");
						devTree.fetchUnits((Department)selectedTreeItem.getUserObject());
						//Window.alert("Department: "+((Department)selectedTreeItem.getUserObject()).getDepartmentName());
					} else if (selectedTreeItem.getUserObject() instanceof Unit && selectedTreeItem.getChildCount() == 0) {
					//Window.alert(selectedTreeItem.getText() + " selected..");
					devTree.fetchDevices((Unit)selectedTreeItem.getUserObject(), selectedTreeItem);
				} else if(selectedTreeItem.getUserObject() instanceof String) {
					Window.Location.assign(selectedTreeItem.getUserObject().toString());
				}
					TreeItem selItem = event.getSelectedItem();
					boolean state = selItem.getState();
				    TreeItem parent = selItem.getParentItem();
				    selItem.getTree().setSelectedItem(parent, false); // null is ok
				    if(parent != null)
				        parent.setSelected(false);  // not compulsory
				    selItem.setState(!state, false);
				}
			}
			
		});
		
		deviceTreePanel.add(lLabel1);
		deviceTreePanel.add(devTree);
	}
	
	private void createMeasurementPanel() {
		measurementPanel.clear();
		measurementPanel.setWidth("100%");
		
		markingScrollPanel = new ScrollPanel();
		markingScrollPanel.setStyleName("markingScrollPanel");
		final VerticalPanel measurementInputPanel = new VerticalPanel();
		measurementInputPanel.setStyleName("aho-panel4");
		
		final HorizontalPanel headerPanel = createMeasurementHeader();
		
		//final ListBox cbId = new ListBox();
		//cbId.setStyleName("fb-combobox");
		//cbId.addItem("ERP1");
		//cbId.addItem("ERP2");
		//cbId.addItem("ERP3");
		//cbId.addItem("ERP4");
		//idPanel.add(cbId, 376, 14);
		
		// final Image imgIdSaved = new Image("res/saved_icon.png");
		// imgIdSaved.setSize("17px", "12px");
		// idPanel.add(imgIdSaved, 460, 20);
		//
		// final TextBox tbId = new TextBox();
		// tbId.setStyleName("fb-textbox2");
		// tbId.setAlignment(TextAlignment.RIGHT);
		// tbId.setText(name);
		// tbId.addKeyDownHandler(new KeyDownHandler() {
		//
		// @Override
		// public void onKeyDown(KeyDownEvent event) {
		// imgIdSaved.setVisible(false);
		// }
		//
		// });
		// idPanel.add(tbId, 275, 12);
		
		final HorizontalPanel markingPanel = new HorizontalPanel();
		markingPanel.setStyleName("aho-panel1");
		
		final Label lmarking = new Label("M\u00E4rge");
		lmarking.setStyleName("aho-label1");
		markingPanel.add(lmarking);
		
		imgA = new Image("res/aho_a_0.png");
		imgA.setAltText("alarm");
		imgA.setStyleName("aho-markingImg");
		markingPanel.add(imgA);
		
		imgH = new Image("res/aho_h_0.png");
		imgH.setAltText("hoiatus");
		imgH.setStyleName("aho-markingImg");
		markingPanel.add(imgH);
		
		imgO = new Image("res/aho_o_0.png");
		imgO.setAltText("ok");
		imgO.setStyleName("aho-markingImg");
		markingPanel.add(imgO);
		
		markingPanel.setCellWidth(lmarking, "55%");
		markingPanel.setCellWidth(imgA, "15%");
		markingPanel.setCellWidth(imgH, "15%");
		markingPanel.setCellWidth(imgO, "15%");
		
		ClickHandler imgAHOClickHandler = new ClickHandler() {

			@Override
			public void onClick(ClickEvent event) {
				Image img = (Image) event.getSource();
				markingText = img.getAltText();
				if (markingText.equals("alarm")) {
					System.out.println(imgA.getUrl());
					if (imgA.getUrl().contains("res/aho_a.png")) {
						markingText = "";
						imgA.setUrl("res/aho_a_0.png");
					} else {
						imgA.setUrl("res/aho_a.png");
						imgH.setUrl("res/aho_h_0.png");
						imgO.setUrl("res/aho_o_0.png");
					}
				}
				else if (markingText.equals("hoiatus")) {
					if (imgH.getUrl().contains("res/aho_h.png")) {
						markingText = "";
						imgH.setUrl("res/aho_h_0.png");
					} else {
						imgA.setUrl("res/aho_a_0.png");
						imgH.setUrl("res/aho_h.png");
						imgO.setUrl("res/aho_o_0.png");
					}
				}
				else if (markingText.equals("ok")) {
					if (imgO.getUrl().contains("res/aho_o.png")) {
						markingText = "";
						imgO.setUrl("res/aho_o_0.png");
					} else {
						imgA.setUrl("res/aho_a_0.png");
						imgH.setUrl("res/aho_h_0.png");
						imgO.setUrl("res/aho_o.png");
					}
				}
			}
			
		};
		imgA.addClickHandler(imgAHOClickHandler);
		imgH.addClickHandler(imgAHOClickHandler);
		imgO.addClickHandler(imgAHOClickHandler);
		
		Label lSaveMeasurement = new Label("Salvesta");
		lSaveMeasurement.setStyleName("backSaveLabel");
		lSaveMeasurement.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				saveMeasurement();
			}
			
		});
		Label lBack = new Label("Tagasi");
		lBack.setStyleName("backSaveLabel");
		final Button lBackButton = new Button();
		lBackButton.setStyleName("backButton");
		lBackButton.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				contentPanel.showWidget(contentPanel.getWidgetIndex(deviceTreePanel));
				prevNextPanel.setVisible(false);
			}
			
		});
		lBack.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				lBackButton.fireEvent(event);
			}
			
		});
		
		HorizontalPanel backSavePanel = new HorizontalPanel();
		backSavePanel.setStyleName("backSavePanel");
		backSavePanel.add(lBackButton);
		backSavePanel.add(lBack);
		backSavePanel.add(lSaveMeasurement);
		backSavePanel.setCellWidth(lBackButton, "7%");
		backSavePanel.setCellWidth(lBack, "43%");
		backSavePanel.setCellWidth(lSaveMeasurement, "50%");
		backSavePanel.setCellHorizontalAlignment(lSaveMeasurement, HasHorizontalAlignment.ALIGN_RIGHT);
		
		VerticalPanel commentPanel = createCommentTextArea("Kokkuv\u00F5te");
		//VerticalPanel localCommentPanel = createLocalCommentTextArea("Kohalik kommentaar");
		localCommentNDE=new TextBox();
		mmsNDE = new TextBox();
		geNDE = new TextBox();
		commentNDE = new TextBox();
		VerticalPanel ndePanel = createMeasurementPanelUnit("NDE", localCommentNDE, mmsNDE, geNDE, commentNDE);
		final Image ndeImg=new Image();
		ndeImg.setUrl("/res/tyhi_t.png");
		ndePanel.add(ndeImg);
		ndeImg.addClickHandler(new ClickHandler() {

			@Override
			public void onClick(ClickEvent event) {
                if(ndeImg.getUrl().endsWith("tyhi_t.png")) {
                	ndeImg.setUrl("/measurement?device="+selectedDevice.getDeviceKey()+"&ptype=NDE");
                }  else {
                	ndeImg.setUrl("/res/tyhi_t.png");
                }			
			}
			
		});

		localCommentDE=new TextBox();
		mmsDE = new TextBox();
		geDE = new TextBox();
		commentDE = new TextBox();
		VerticalPanel dePanel = createMeasurementPanelUnit("DE", localCommentDE, mmsDE, geDE, commentDE);
		final Image deImg=new Image();
		deImg.setUrl("/res/tyhi_t.png");
		dePanel.add(deImg);
		deImg.addClickHandler(new ClickHandler() {

			@Override
			public void onClick(ClickEvent event) {
                if(deImg.getUrl().endsWith("tyhi_t.png")) {
                	deImg.setUrl("/measurement?device="+selectedDevice.getDeviceKey()+"&ptype=DE");
                }  else {
                	deImg.setUrl("/res/tyhi_t.png");
                }			
			}
			
		});

		
		localCommentMP=new TextBox();
		mmsMP = new TextBox();
		geMP = new TextBox();
		commentMP = new TextBox();
		VerticalPanel mpPanel = createMeasurementPanelUnit("MP", localCommentMP, mmsMP, geMP, commentMP);
		final Image mpImg=new Image();
		mpImg.setUrl("/res/tyhi_t.png");
		mpPanel.add(mpImg);
		mpImg.addClickHandler(new ClickHandler() {

			@Override
			public void onClick(ClickEvent event) {
                if(mpImg.getUrl().endsWith("tyhi_t.png")) {
                	mpImg.setUrl("/measurement?device="+selectedDevice.getDeviceKey()+"&ptype=MP");
                }  else {
                	mpImg.setUrl("/res/tyhi_t.png");
                }			
			}
			
		});

		
		localCommentTP=new TextBox();
		mmsTP = new TextBox();
		geTP = new TextBox();
		commentTP = new TextBox();
		VerticalPanel tpPanel = createMeasurementPanelUnit("TP", localCommentTP, mmsTP, geTP, commentTP);
		final Image tpImg=new Image();
		tpImg.setUrl("/res/tyhi_t.png");
		tpPanel.add(tpImg);
		tpImg.addClickHandler(new ClickHandler() {

			@Override
			public void onClick(ClickEvent event) {
                if(tpImg.getUrl().endsWith("tyhi_t.png")) {
                	tpImg.setUrl("/measurement?device="+selectedDevice.getDeviceKey()+"&ptype=TP");
                }  else {
                	tpImg.setUrl("/res/tyhi_t.png");
                }			
			}
			
		});

		
		AbsolutePanel emptyPanel = new AbsolutePanel();
		emptyPanel.setStyleName("aho-markingBlankPanel");
		
		measurementPanel.add(backSavePanel);
		measurementPanel.add(headerPanel);
		measurementInputPanel.add(ndePanel);
		measurementInputPanel.add(dePanel);
		measurementInputPanel.add(mpPanel);
		measurementInputPanel.add(tpPanel);
		measurementPanel.add(markingPanel);
		measurementPanel.add(commentPanel);
		markingScrollPanel.add(measurementInputPanel);
		//measurementPanel.add(localCommentPanel);
		measurementPanel.add(markingScrollPanel);
		measurementPanel.setCellHeight(markingScrollPanel, "100%");
		measurementPanel.add(emptyPanel);
		/*
		Image img=new Image();
	    img.setUrl("/measurement?device="+selectedDevice.getDeviceKey());
	    measurementPanel.add(img);
		Image img2=new Image();
	    img2.setUrl("/measurement?device="+selectedDevice.getDeviceKey()+"&ptype=DE");
	    measurementPanel.add(img2);
		Image img3=new Image();
	    img3.setUrl("/measurement?device="+selectedDevice.getDeviceKey()+"&ptype=MP");
	    measurementPanel.add(img3);
		Image img4=new Image();
	    img4.setUrl("/measurement?device="+selectedDevice.getDeviceKey()+"&ptype=TP");
	    measurementPanel.add(img4);
*/
	}
	
	private void fillMeasurementData() {
		markingText = measurement.getMarking();
		if (markingText.equals("alarm")) {
			imgA.setUrl("res/aho_a.png");
			imgH.setUrl("res/aho_h_0.png");
			imgO.setUrl("res/aho_o_0.png");
		}
		else if (markingText.equals("hoiatus")) {
			imgA.setUrl("res/aho_a_0.png");
			imgH.setUrl("res/aho_h.png");
			imgO.setUrl("res/aho_o_0.png");
		}
		else if (markingText.equals("ok")) {
			imgA.setUrl("res/aho_a_0.png");
			imgH.setUrl("res/aho_h_0.png");
			imgO.setUrl("res/aho_o.png");
		}
		commentTextArea.setText(measurement.getComment());
		//localCommentTextArea.setText(measurement.getLocalComment());
		localCommentNDE.setText(measurement.getNDELocalComment());
		mmsNDE.setText(measurement.getNDEmms());
		geNDE.setText(measurement.getNDEge());
		commentNDE.setText(measurement.getNDEcomment());
		localCommentDE.setText(measurement.getDELocalComment());
		mmsDE.setText(measurement.getDEmms());
		geDE.setText(measurement.getDEge());
		commentDE.setText(measurement.getDEcomment());
		localCommentMP.setText(measurement.getMPLocalComment());
		mmsMP.setText(measurement.getMPmms());
		geMP.setText(measurement.getMPge());
		commentMP.setText(measurement.getMPcomment());
		localCommentTP.setText(measurement.getTPLocalComment());
		mmsTP.setText(measurement.getTPmms());
		geTP.setText(measurement.getTPge());
		commentTP.setText(measurement.getTPcomment());
	}
	
	/**
	 * Create measurement header panel with device name and drag icon on it.
	 * @return FocusPanel measurement header.
	 */
	private HorizontalPanel createMeasurementHeader() {
		HorizontalPanel userPanel = new HorizontalPanel();
		userPanel.setStyleName("aho-measurementHeaderPanel");
		
		// Image imgArrow = new Image("res/drop_down_arrow1.png");
		// userPanel.add(imgArrow, 30, 20);
		
		lName = new Label(selectedDevice.getId() + " " + selectedDevice.getDeviceName());
		lName.setStyleName("aho-label2");
		userPanel.add(lName);
		
		Image imgDrag = new Image("res/drag_icon.png");
		imgDrag.setStyleName("aho-dragImg");
		userPanel.add(imgDrag);
		userPanel.setCellWidth(lName, "93%");
		userPanel.setCellWidth(imgDrag, "7%");
		
		return userPanel;
	}
	
	/**
	 * Create panel with label and textbox fields.
	 * @param labelText - label text.
	 * @param isSmallTextBox - for smaller textbox size.
	 * @return AbsolutePanel with label and textbox on it.
	 */
	private HorizontalPanel createTextInputPanel(String labelText, final TextBox textBox, boolean isSmallTextBox) {
		HorizontalPanel aPanel = new HorizontalPanel();
		aPanel.setStyleName("aho-panel2");
		aPanel.setWidth("100%");
		
		final Label lLabel = new Label(labelText);
		lLabel.setStyleName("aho-label1");
		aPanel.add(lLabel);
		
		
		textBox.setStyleName("aho-textbox1");
		aPanel.add(textBox);
		inputFieldList.add(textBox);
		textBox.addFocusHandler(new FocusHandler() {

			@Override
			public void onFocus(FocusEvent event) {
				currentFocusedInputField = inputFieldList.indexOf(textBox);
				if (isMobileView) {
					prevNextPanel.setVisible(true);
				}
			}
			
		});
		if (isSmallTextBox) {
			textBox.setWidth("280px");
		} else {
			textBox.setWidth("420px");
		}
		aPanel.setCellHorizontalAlignment(textBox, HasHorizontalAlignment.ALIGN_RIGHT);
		return aPanel;
	}
	
	/**
	 * Create auto-expanding text area.
	 * @param labelText.
	 * @return VerticalPanel auto-expanding text area.
	 */
	private VerticalPanel createCommentTextArea(String labelText) {
		final VerticalPanel aPanel = new VerticalPanel();
		aPanel.setStyleName("aho-panel1 expandable");
		
		final Label lLabel = new Label(labelText);
		lLabel.setStyleName("aho-label1");
		aPanel.add(lLabel);
		
		commentTextArea = new ExtendedTextArea();
		commentTextArea.setStyleName("aho-autoExtendingTextArea");
		commentTextArea.setAlignment(TextAlignment.RIGHT);
	    aPanel.add(commentTextArea);
		inputFieldList.add(commentTextArea);
		commentTextArea.addFocusHandler(new FocusHandler() {

			@Override
			public void onFocus(FocusEvent event) {
				currentFocusedInputField = inputFieldList.indexOf(commentTextArea);
				if (isMobileView) {
					prevNextPanel.setVisible(true);
				}
			}
			
		});

	    commentTextArea.setVisibleLines(1);
	    commentTextArea.addKeyUpHandler(new KeyUpHandler()
	    {
	        @Override
	        public void onKeyUp(KeyUpEvent event)
	        {
	           commentTextArea.setHeight("auto");
	           commentTextArea.setHeight(commentTextArea.getElement().getScrollHeight() + "px");
	           updateWidgetSizes();
	        }
	    });

	    commentTextArea.addValueChangeHandler(new ValueChangeHandler<String>() {

	        @Override
	        public void onValueChange(ValueChangeEvent<String> event) {
	        	commentTextArea.setHeight("auto");
	        	commentTextArea.setHeight(commentTextArea.getElement().getScrollHeight() + "px");
	        	updateWidgetSizes();
	        }
	    });
	    
	    return aPanel;
	}
	

	private VerticalPanel designCTextArea(VerticalPanel aPanel, ExtendedTextArea cArea, String labelText) {
		aPanel.setStyleName("aho-panel1 expandable");
		
		final Label lLabel = new Label(labelText);
		lLabel.setStyleName("aho-label1");
		aPanel.add(lLabel);
		
		//commentTextArea = new ExtendedTextArea();
		cArea.setStyleName("aho-autoExtendingTextArea");
		cArea.setAlignment(TextAlignment.RIGHT);
	    aPanel.add(cArea);
		inputFieldList.add(cArea);
		cArea.addFocusHandler(new FocusHandler() {

			@Override
			public void onFocus(FocusEvent event) {
				currentFocusedInputField = inputFieldList.indexOf(cArea);
				if (isMobileView) {
					prevNextPanel.setVisible(true);
				}
			}
			
		});

	    cArea.setVisibleLines(1);
	    cArea.addKeyUpHandler(new KeyUpHandler()
	    {
	        @Override
	        public void onKeyUp(KeyUpEvent event)
	        {
	           cArea.setHeight("auto");
	           cArea.setHeight(cArea.getElement().getScrollHeight() + "px");
	           updateWidgetSizes();
	        }
	    });

	    cArea.addValueChangeHandler(new ValueChangeHandler<String>() {

	        @Override
	        public void onValueChange(ValueChangeEvent<String> event) {
	        	cArea.setHeight("auto");
	        	cArea.setHeight(cArea.getElement().getScrollHeight() + "px");
	        	updateWidgetSizes();
	        }
	    });
	    
		
		return aPanel;
	}
	/*
	private VerticalPanel createLocalCommentTextArea(String labelText) {
		final VerticalPanel aPanel = new VerticalPanel();
		localCommentTextArea = new ExtendedTextArea();
		designCTextArea(aPanel, localCommentTextArea, labelText);
	    return aPanel;
	}*/
	
	
	/**
	 * Create measurement panel unit.
	 * Example: DE panel with 2 input fields for taken measurements and 1 comment field.
	 * @param name - panel name (DE, NDE etc.)
	 * @return VerticalPanel with input fields.
	 */
	private VerticalPanel createMeasurementPanelUnit(String name, TextBox lComment, TextBox mms, TextBox ge, TextBox comment) {
		final VerticalPanel vPanel = new VerticalPanel();
		vPanel.setStyleName("aho-panel1");
		
		// final Image imgNameSaved = new Image("res/saved_icon.png");
		// imgNameSaved.setSize("17px", "12px");
		// namePanel.add(imgNameSaved, 460, 20);
		
		final HorizontalPanel localCommentPanel = createTextInputPanel("M\u00F5\u00F5tepunkti kommentaar", lComment, false);
		localCommentPanel.setStyleName("");
		final HorizontalPanel valuePanelMMS = createTextInputPanel(name + " (mm/s)", mms, true);
		valuePanelMMS.setStyleName("");
		final HorizontalPanel valuePanelGE = createTextInputPanel(name + " (gE)", ge, true);
		valuePanelGE.setStyleName("");
		HorizontalPanel commentPanel = createTextInputPanel("Kommentaar graafikule", comment, false);
		commentPanel.setStyleName("");
		
		vPanel.add(localCommentPanel);
		vPanel.add(valuePanelMMS);
		vPanel.add(valuePanelGE);
		vPanel.add(commentPanel);
		
		return vPanel;
	}
	
	/*
	 * Creates fixed footer with prev. next. buttons for quick navigation between input fields.
	 */
	private void createPrevNextPanel() {
		prevNextPanel = new HorizontalPanel();
		mainPanel.add(prevNextPanel);
		prevNextPanel.setStyleName("prevNextPanel");
		Button prevButton = new Button("Eelmine");
		prevButton.setStyleName("prevNextButton");
		prevButton.addClickHandler(new ClickHandler() {

			@Override
			public void onClick(ClickEvent event) {
				Integer cfif = currentFocusedInputField - 1;
				if (cfif < 0) {
					cfif = inputFieldList.size() + cfif;
				}
				((FocusWidget) inputFieldList.get(cfif)).setFocus(true);
			}
		});
		Button nextButton = new Button("J\u00E4rgmine");
		nextButton.setStyleName("prevNextButton");
		nextButton.addClickHandler(new ClickHandler() {

			@Override
			public void onClick(ClickEvent event) {
				Integer cfif = currentFocusedInputField + 1;
				if (cfif >= inputFieldList.size()) {
					cfif = 0;
				}
				((FocusWidget) inputFieldList.get(cfif)).setFocus(true);
			}
		});
		
		prevNextPanel.add(prevButton);
		prevNextPanel.setCellWidth(prevButton, "50%");
		prevNextPanel.add(nextButton);
		prevNextPanel.setCellWidth(nextButton, "50%");
		prevNextPanel.setVisible(false);
	}
	
	private void saveMeasurement() {
		Date date = new Date();
		DateTimeFormat dtf = DateTimeFormat.getFormat("dd.MM.yyyy");
		
		//Measurement measurement = new Measurement();
		measurement.setDeviceID(selectedDevice.getId());
		measurement.setDeviceName(selectedDevice.getDeviceName());
		measurement.setDeviceKey(selectedDevice.getDeviceKey());
		measurement.setDate(dtf.format(date, TimeZone.createTimeZone(0)));
		measurement.setMarking(markingText);
		measurement.setComment(commentTextArea.getText());
	//	measurement.setLocalComment(localCommentTextArea.getText());
		measurement.setNDELocalComment(localCommentNDE.getText());
		measurement.setNDEmms(mmsNDE.getText());
		measurement.setNDEge(geNDE.getText());
		measurement.setNDEcomment(commentNDE.getText());
		measurement.setDELocalComment(localCommentDE.getText());
		measurement.setDEmms(mmsDE.getText());
		measurement.setDEge(geDE.getText());
		measurement.setDEcomment(commentDE.getText());
		measurement.setMPLocalComment(localCommentMP.getText());
		measurement.setMPmms(mmsMP.getText());
		measurement.setMPge(geMP.getText());
		measurement.setMPcomment(commentMP.getText());
		measurement.setTPLocalComment(localCommentTP.getText());
		measurement.setTPmms(mmsTP.getText());
		measurement.setTPge(geTP.getText());
		measurement.setTPcomment(commentTP.getText());
		
		deviceTreeService.storeMeasurement(measurement, storeMeasurementCallback);
	}
	
	public static DeviceTreeServiceAsync getDevicetreeservice() {
		return deviceTreeService;
	}
}
