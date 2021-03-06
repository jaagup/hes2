package com.elektrimasinad.aho.client;

import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

import com.elektrimasinad.aho.shared.Company;
import com.elektrimasinad.aho.shared.Department;
import com.elektrimasinad.aho.shared.Device;
import com.elektrimasinad.aho.shared.Unit;
import com.gargoylesoftware.htmlunit.javascript.host.Console;
import com.google.gwt.core.client.GWT;
import com.google.gwt.core.client.Scheduler;
import com.google.gwt.core.client.Scheduler.ScheduledCommand;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.AbsolutePanel;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.FileUpload;
import com.google.gwt.user.client.ui.FormPanel;
import com.google.gwt.user.client.ui.FormPanel.SubmitCompleteEvent;
import com.google.gwt.user.client.ui.FormPanel.SubmitCompleteHandler;
import com.google.gwt.user.client.ui.FormPanel.SubmitEvent;
import com.google.gwt.user.client.ui.FormPanel.SubmitHandler;


import com.google.gwt.user.client.ui.Grid;
import com.google.gwt.user.client.ui.HasHorizontalAlignment;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.PopupPanel;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.user.client.ui.Widget;


public class DeviceCardPanel extends VerticalPanel {
	private Device device;
	private Department department;
	private Unit location;
	private Company company;
	Widget deviceName;
	Widget deviceFreecomment1Widget;
	Widget deviceId;
	Widget locationName;
	
	private Label fileUrl = new Label("");
	
	private int IMAGES_PER_ROW = 5;
	private List<Image> images = new ArrayList<Image>();
	private List<Image> uploadedFiles = new ArrayList<Image>();
	private Widget pDeviceInput;
	private Widget pDeviceFreeCommentInput;
	private Widget pDeviceCommentInput;
	private Widget pDevicePowerInput;
	private Widget pDeviceTypeInput;
	private Widget pDeviceManufacturerInput;
	private Widget pLaager1;
	private Widget pSimmer1;
	private Widget pTihend1;
	private Widget pNotes1;
	private Widget pLaager2;
	private Widget pSimmer2;
	private Widget pTihend2;
	private Widget pNotes2;
	private Widget cDeviceInput;
	private Widget cDeviceFreeCommentInput;
	private Widget cDeviceCommentInput;
	private Widget cDeviceTypeInput;
	private Widget cDeviceManufacturerInput;
	private Widget cLaager1;
	private Widget cSimmer1;
	private Widget cTihend1;
	private Widget cNotes1;
	private Widget cLaager2;
	private Widget cSimmer2;
	private Widget cTihend2;
	private Widget cNotes2;
	private VerticalPanel photosPanel=new VerticalPanel();
	private Image bigImage=new Image();
	Button hideButton=new Button("Peida pilt");

	//private FileUpload fileUpload;
	private AsyncCallback<List<String>> getCompanyImageNamesListCallback;
	private AsyncCallback<String> hideImageCallback;
	static DeviceTreeServiceAsync deviceTreeService = GWT.create(DeviceTreeService.class);
	DebugClientSide Debug = new DebugClientSide();
	boolean editable=false;
	public DeviceCardPanel() {
		bigImage.addClickHandler(new ClickHandler() {
			@Override
			public void onClick(ClickEvent e) {
		//		Debug.log(bigImage.getStyleName());
				if(bigImage.getStyleName().contains("bigRotatedImage")) {
				  bigImage.setStyleName("bigImage");
				} else {
				  bigImage.setStyleName("bigRotatedImage", true);
				}
			}
		});
  		hideButton.addClickHandler(new ClickHandler() {
  			@Override
  			public void onClick(ClickEvent e) {

  				deviceTreeService.hideImageName(bigImage.getUrl().substring(bigImage.getUrl().lastIndexOf("/")+1), hideImageCallback);
  			}
  		});
  		hideButton.setStyleName("loginBtn");

	}
	
	private String asendused2(String sisend) {
		//String muudetavad=" ��������";
		sisend=sisend.replace("%C3%B5", "\u00D5");
		sisend=sisend.replace("%C3%A4", "\u00C4");
		sisend=sisend.replace("%C3%B6", "\u00D6");
		sisend=sisend.replace("%C3%BC", "\u00DC");

		sisend=sisend.replace("%C3%95", "\u00F5");
		sisend=sisend.replace("%C3%84", "\u00E4");
		sisend=sisend.replace("%C3%96", "\u00F6");
		sisend=sisend.replace("%C3%9C", "\u00FC");
		sisend=sisend.replace("%20", " ");
		return sisend;
	}
	
	
	private String muuda(String milles, String mida, String millega) {
		while(milles.indexOf(mida)>=0) {
			milles=milles.substring(0, milles.indexOf(mida))+millega+milles.substring(milles.indexOf(mida)+mida.length());
		}
		return milles;
	}
	
	public void createDeviceView(Company company, Department department, Unit location, Device device) {
		//loadDeviceData(companyName, locationName, deviceName);
		this.device = device;
		this.company = company;
		this.department=department;
		this.location = location;
		getCompanyImageNamesListCallback=new AsyncCallback<List<String>>() {
			@Override
			public void onSuccess(List<String> items) {
				images.clear();
				uploadedFiles.clear();
			//	Debug.log("Pildinimed: "+items.toString());
				for(String rida: items) {
					    String[] m=rida.split("/");
					    Image im=new Image("/fileUpload/"+company.getCompanyKey().substring(company.getCompanyKey().length()-10)+"/"+m[0]);
//					    im.setTitle(new String(Base64.getDecoder().decode(m[1])));
					  //  im.setTitle(m[1].replace("%20", " "));
					    if(m[1]!=null) {
						    im.setTitle(asendused2(m[1]));
					    	
					    }
//					    im.setTitle(muuda(m[1],"%20", " "));
					    if(im.getUrl().endsWith(".jpg")) {
						  images.add(im);
					    } else {
					      uploadedFiles.add(im);
					    //  Debug.log("lisati "+im.getUrl());
					    }

				}
				if(images.size()>0) {
					images.add(new Image("/res/tyhi.png"));
				}
				bigImage.setUrl("");
  				bigImage.setTitle("");
				createPhotosPanel();

			}
			@Override
			public void onFailure(Throwable caught) {
				//System.err.println(caught);
				Debug.log("Maintenance Items error "+caught);
			}
			
		};
		
		hideImageCallback=new AsyncCallback<String>() {
			@Override
			public void onSuccess(String vastus) {
				for(Image im: images) {
					if(im.getUrl().contentEquals(bigImage.getUrl())) {
						im.setUrl("/res/tyhi.png");
						hideButton.setVisible(false);
					}
				}
  				bigImage.setUrl("");
  				bigImage.setTitle("");
  				deviceTreeService.getImageNames(device.getDeviceKey(), getCompanyImageNamesListCallback);
			}
			@Override
			public void onFailure(Throwable caught) {
				Debug.log("Image hide error "+caught);
			}
		};
		
		createDeviceCard(false);
		deviceTreeService.getImageNames(device.getDeviceKey(), getCompanyImageNamesListCallback);
	}
	
	public void createEditDeviceView(Company company, Unit location, Device device) {
		//loadDeviceData(companyName, locationName, deviceName);
		this.device = device; 
		this.company = company;
		this.location = location;
		createDeviceCard(true);
		Scheduler.get().scheduleDeferred(new ScheduledCommand() {

		    @Override
		    public void execute() {
		    	((TextBox)deviceId).setFocus(true);
		    }
		});
	}
	
	public void createNewDeviceView(Company company, Department department, Unit location) {
		device = new Device(location.getUnitKey());
		this.company = company;
		this.location = location;
		this.department=department;
		images.clear();
		createDeviceCard(true);
		bigImage.setUrl("");
		//remove(photosPanel);
		Scheduler.get().scheduleDeferred(new ScheduledCommand() {

		    @Override
		    public void execute() {
		    	((TextBox)deviceId).setFocus(true);
		    	photosPanel.clear();
		    }
		});
	}
	
	private void createDeviceCard(boolean isEditable) {
		Grid pGrid=new Grid(2, 6);
		editable=isEditable;
		if (isEditable) {
			deviceId = AhoWidgets.createTextbox("aho-textbox3", device.getId());
			deviceFreecomment1Widget = AhoWidgets.createTextbox("aho-textbox3", device.getFreeComment1());
			deviceName = AhoWidgets.createTextbox("aho-textbox3", device.getDeviceName());
			locationName = AhoWidgets.createTextbox("aho-textbox3", device.getLocationName());
		} else {
			deviceId = AhoWidgets.createLabel(device.getId(), "deviceValue alignRight", HasHorizontalAlignment.ALIGN_RIGHT);
			deviceFreecomment1Widget = AhoWidgets.createLabel(device.getFreeComment1(), "deviceValue alignRight", HasHorizontalAlignment.ALIGN_RIGHT);
			deviceName = AhoWidgets.createLabel(device.getDeviceName(), "deviceValue alignRight", HasHorizontalAlignment.ALIGN_RIGHT);
			locationName = AhoWidgets.createLabel(device.getLocationName(), "deviceValue alignRight", HasHorizontalAlignment.ALIGN_RIGHT);
		}
		Label lDepartmentName = AhoWidgets.createLabel(department.getDepartmentName(), "deviceValue alignRight", HasHorizontalAlignment.ALIGN_RIGHT);
		Label lUnit = AhoWidgets.createLabel(location.getUnit(), "deviceValue alignRight", HasHorizontalAlignment.ALIGN_RIGHT);
		/*
		HorizontalPanel departmentNamePanel = new HorizontalPanel();
		departmentNamePanel.setStyleName("aho-panel3");
		departmentNamePanel.add(AhoWidgets.createLabel("Osakond", "aho-label3", null));
		departmentNamePanel.add(lDepartmentName);
		departmentNamePanel.setCellHorizontalAlignment(lDepartmentName, HasHorizontalAlignment.ALIGN_RIGHT);
		add(departmentNamePanel);
		HorizontalPanel unitPanel = new HorizontalPanel();
		unitPanel.setStyleName("aho-panel3");
		unitPanel.add(AhoWidgets.createLabel("\u00FCksus", "aho-label3", null));
		unitPanel.add(lUnit);
		unitPanel.setCellHorizontalAlignment(lUnit, HasHorizontalAlignment.ALIGN_RIGHT);
		add(unitPanel);
		HorizontalPanel locationPanel = new HorizontalPanel();
		locationPanel.setStyleName("aho-panel3");
		locationPanel.add(AhoWidgets.createLabel("Asukoht", "aho-label3", null));
		locationPanel.add(locationName);
		locationPanel.setCellHorizontalAlignment(locationName, HasHorizontalAlignment.ALIGN_RIGHT);
		add(locationPanel);
		HorizontalPanel deviceIdPanel = new HorizontalPanel();
		deviceIdPanel.setStyleName("aho-panel3");
		deviceIdPanel.add(AhoWidgets.createLabel("ID nr.", "aho-label3", null));
		deviceIdPanel.add(deviceId);
		deviceIdPanel.setCellHorizontalAlignment(deviceId, HasHorizontalAlignment.ALIGN_RIGHT);
		add(deviceIdPanel);
		HorizontalPanel deviceNamePanel = new HorizontalPanel();
		deviceNamePanel.setStyleName("aho-panel3");
		deviceNamePanel.add(AhoWidgets.createLabel("Seadme nimi", "aho-label3", null));
		deviceNamePanel.add(deviceName);
		deviceNamePanel.setCellHorizontalAlignment(deviceName, HasHorizontalAlignment.ALIGN_RIGHT);
		add(deviceNamePanel);
*/
		pGrid.setWidget(0,  0, AhoWidgets.createLabel("Osakond", "aho-label1.alignRight", null));
		pGrid.setWidget(1,  0, lDepartmentName);
		pGrid.setWidget(0,  1, AhoWidgets.createLabel("\u00DCksus", "aho-label1.alignRight", null));
		pGrid.setWidget(1,  1, lUnit);
		pGrid.setWidget(0,  2, AhoWidgets.createLabel("Asukoht", "aho-label1.alignRight", null));
		pGrid.setWidget(1,  2, locationName);
		pGrid.setWidget(0,  3, AhoWidgets.createLabel("ID nr", "aho-label1.alignRight", null));
		pGrid.setWidget(1,  3, deviceId);
		pGrid.setWidget(0,  4, AhoWidgets.createLabel("Seadme nimi", "aho-label1.alignRight", null));
		pGrid.setWidget(1,  4, deviceName);
		pGrid.setWidget(0,  5, AhoWidgets.createLabel("Kommentaar", "aho-label1.alignRight", null));
		pGrid.setWidget(1,  5, deviceFreecomment1Widget);
		pGrid.setWidth("100%");
		pGrid.setStyleName("deviceNameTable", true);

		add(pGrid);
		photosPanel = createPhotosPanel();
		add(photosPanel);
		createDeviceDataPanel(false, isEditable);
		
		if (device.hasCoupledDevice()) {
			createDeviceDataPanel(true, isEditable);
		} else {
			if (isEditable) {
				final Label coupledDeviceLabel = new Label("Lisa seotud seade");
				coupledDeviceLabel.setStyleName("backSaveLabel wide");
				coupledDeviceLabel.addClickHandler(new ClickHandler() {
					
					@Override
					public void onClick(ClickEvent event) {
						createDeviceDataPanel(true, true);
						remove(coupledDeviceLabel);
						photosPanel.clear();
					}
					
				});
				add(coupledDeviceLabel);
			}
		}
		
		
		AbsolutePanel emptyPanel = new AbsolutePanel();
		emptyPanel.setStyleName("aho-markingBlankPanel");
		add(emptyPanel);
		deviceTreeService.getImageNames(device.getDeviceKey(), getCompanyImageNamesListCallback);
		
	}
	
	/**
	 * Create device data panel.
	 * @param isCoupledDevice
	 * @param device
	 * @param devicekWrpm
	 * @param deviceType
	 * @param deviceManufacturer
	 * @param laager1
	 * @param simmer1
	 * @param vtihend1
	 * @param notes1
	 * @param laager2
	 * @param simmer2
	 * @param vtihend2
	 * @param notes2
	 * @return
	 */
	private Grid createDeviceDataPanel(boolean isCoupledDevice, boolean isEditView) {
		
		Grid grid = new Grid(5, 5);
		grid.setStyleName("aho-panel1 table");
		
		Label lDevice = AhoWidgets.createLabel("Seadme abinimi", "aho-label3", null);
		Label lFreecomment = AhoWidgets.createLabel("Vaba kommentaar", "aho-label3", null);
		Label lDevicePower = AhoWidgets.createLabel("kW/rpm", "aho-label3", null);
		Label lType = AhoWidgets.createLabel("T\u00FC\u00FCp", "aho-label3", null);
		Label lManufacturer = AhoWidgets.createLabel("Tootja", "aho-label3", null);
		Label lLaager = AhoWidgets.createLabel("Laager", "aho-label3", null);
		Label lSimmer = AhoWidgets.createLabel("Simmer", "aho-label3", null);
		Label lVTihend = AhoWidgets.createLabel("V tihend", "aho-label3", null);
		Label lNotes = AhoWidgets.createLabel("Muud m\u00E4rkused", "aho-label3", null);
		Label lDE = AhoWidgets.createLabel("Vedav ots (DE)", "aho-label3", null);
		Label lNDE = AhoWidgets.createLabel("Tiivikupoolne ots (NDE)", "aho-label3", null);

		HorizontalPanel chp=new HorizontalPanel();
		chp.add(lFreecomment);

		if (isCoupledDevice) {
			device.hasCoupledDevice = true;
			lDevice.setText("Seotud seade");
			lDE.setText("Mootori poolne (MP)");
			lNDE.setText("Teine pool (TP)");
			lDevicePower.setText("");
			if (isEditView) {
				cDeviceInput = AhoWidgets.createTextbox("aho-textbox1 medium", device.getCoupledDeviceName());
				cDeviceFreeCommentInput = AhoWidgets.createTextbox("aho-textbox1 large", device.getFreeComment3());
				cDeviceCommentInput = AhoWidgets.createTextbox("aho-textbox1 medium", device.getCoupledDeviceComment());
				cDeviceTypeInput = AhoWidgets.createTextbox("aho-textbox1 small", device.getCoupledDeviceType());
				cDeviceManufacturerInput = AhoWidgets.createTextbox("aho-textbox1 medium", device.getCoupledDeviceManufacturer());
				cLaager1 = AhoWidgets.createTextbox("aho-textbox1 small", device.getMPlaager());
				cSimmer1 = AhoWidgets.createTextbox("aho-textbox1 small", device.getMPsimmer());
				cTihend1 = AhoWidgets.createTextbox("aho-textbox1 small", device.getMPVtihend());
				cNotes1 = AhoWidgets.createTextbox("aho-textbox1 medium", device.getMPnotes());
				cLaager2 = AhoWidgets.createTextbox("aho-textbox1 small", device.getTPlaager());
				cSimmer2 = AhoWidgets.createTextbox("aho-textbox1 small", device.getTPsimmer());
				cTihend2 = AhoWidgets.createTextbox("aho-textbox1 small", device.getTPVtihend());
				cNotes2 = AhoWidgets.createTextbox("aho-textbox1 medium", device.getTPnotes());
			} else {
				cDeviceInput = AhoWidgets.createLabel(device.getCoupledDeviceName(), "aho-label3 blue", null);
				cDeviceFreeCommentInput = AhoWidgets.createLabel( device.getFreeComment3(), "aho-label3 blue", null);
				cDeviceCommentInput = AhoWidgets.createLabel(device.getCoupledDeviceComment(), "aho-label3 blue", null);
				cDeviceTypeInput = AhoWidgets.createLabel(device.getCoupledDeviceType(), "aho-label3 blue", null);
				cDeviceManufacturerInput = AhoWidgets.createLabel(device.getCoupledDeviceManufacturer(), "aho-label3 blue", null);
				cLaager1 = AhoWidgets.createLabel(device.getMPlaager(), "aho-label3 blue", null);
				cSimmer1 = AhoWidgets.createLabel(device.getMPsimmer(), "aho-label3 blue", null);
				cTihend1 = AhoWidgets.createLabel(device.getMPVtihend(), "aho-label3 blue", null);
				cNotes1 = AhoWidgets.createLabel(device.getMPnotes(), "aho-label3 blue", null);
				cLaager2 = AhoWidgets.createLabel(device.getTPlaager(), "aho-label3 blue", null);
				cSimmer2 = AhoWidgets.createLabel(device.getTPsimmer(), "aho-label3 blue", null);
				cTihend2 = AhoWidgets.createLabel(device.getTPVtihend(), "aho-label3 blue", null);
				cNotes2 = AhoWidgets.createLabel(device.getTPnotes(), "aho-label3 blue", null);
			}
			grid.setWidget(1, 0, cDeviceInput);
			grid.setWidget(1, 1, cDeviceFreeCommentInput);
			grid.setWidget(1, 3, cDeviceTypeInput);
			grid.setWidget(1, 4, cDeviceManufacturerInput);
			grid.setWidget(2, 0, cDeviceCommentInput);
			grid.setWidget(3, 1, cLaager1);
			grid.setWidget(3, 2, cSimmer1);
			grid.setWidget(3, 3, cTihend1);
			grid.setWidget(3, 4, cNotes1);
			grid.setWidget(4, 1, cLaager2);
			grid.setWidget(4, 2, cSimmer2);
			grid.setWidget(4, 3, cTihend2);
			grid.setWidget(4, 4, cNotes2);
			chp.add(cDeviceFreeCommentInput);
		} else {
			if (isEditView) {
				pDeviceInput = AhoWidgets.createTextbox("aho-textbox1 medium", device.getDeviceNickname());
				pDeviceFreeCommentInput = AhoWidgets.createTextbox("aho-textbox1 large", device.getFreeComment2());
				pDeviceCommentInput = AhoWidgets.createTextbox("aho-textbox1 medium", device.getDeviceComment());
				pDevicePowerInput = AhoWidgets.createTextbox("aho-textbox1 small", device.getDevicekWrpm());
				pDeviceTypeInput = AhoWidgets.createTextbox("aho-textbox1 small", device.getDeviceType());
				pDeviceManufacturerInput = AhoWidgets.createTextbox("aho-textbox1 medium", device.getDeviceManufacturer());
				pLaager1 = AhoWidgets.createTextbox("aho-textbox1 small", device.getDElaager());
				pSimmer1 = AhoWidgets.createTextbox("aho-textbox1 small", device.getDEsimmer());
				pTihend1 = AhoWidgets.createTextbox("aho-textbox1 small", device.getDEVtihend());
				pNotes1 = AhoWidgets.createTextbox("aho-textbox1 medium", device.getDEnotes());
				pLaager2 = AhoWidgets.createTextbox("aho-textbox1 small", device.getNDElaager());
				pSimmer2 = AhoWidgets.createTextbox("aho-textbox1 small", device.getNDEsimmer());
				pTihend2 = AhoWidgets.createTextbox("aho-textbox1 small", device.getNDEVtihend());
				pNotes2 = AhoWidgets.createTextbox("aho-textbox1 medium", device.getNDEnotes());
			} else {
				pDeviceInput = AhoWidgets.createLabel(device.getDeviceNickname(), "aho-label3 blue", null);
				pDeviceFreeCommentInput = AhoWidgets.createLabel(device.getFreeComment2(), "aho-label3 blue ", null);
				pDeviceCommentInput = AhoWidgets.createLabel(device.getDeviceComment(), "aho-label3 blue", null);
				pDevicePowerInput = AhoWidgets.createLabel(device.getDevicekWrpm(), "aho-label3 blue", null);
				pDeviceTypeInput = AhoWidgets.createLabel(device.getDeviceType(), "aho-label3  blue", null);
				pDeviceManufacturerInput = AhoWidgets.createLabel(device.getDeviceManufacturer(), "aho-label3  blue", null);
				pLaager1 = AhoWidgets.createLabel(device.getDElaager(), "aho-label3  blue", null);
				pSimmer1 = AhoWidgets.createLabel(device.getDEsimmer(), "aho-label3  blue", null);
				pTihend1 = AhoWidgets.createLabel(device.getDEVtihend(), "aho-label3  blue", null);
				pNotes1 = AhoWidgets.createLabel(device.getDEnotes(), "aho-label3  blue", null);
				pLaager2 = AhoWidgets.createLabel(device.getNDElaager(), "aho-label3  blue", null);
				pSimmer2 = AhoWidgets.createLabel(device.getNDEsimmer(), "aho-label3  blue", null);
				pTihend2 = AhoWidgets.createLabel(device.getNDEVtihend(), "aho-label3  blue", null);
				pNotes2 = AhoWidgets.createLabel(device.getNDEnotes(), "aho-label3  blue", null);
			}
			grid.setWidget(1, 0, pDeviceInput);
//			grid.setWidget(1, 1, pDeviceFreeCommentInput);
			grid.setWidget(1, 2, pDevicePowerInput);
			grid.setWidget(1, 3, pDeviceTypeInput);
			grid.setWidget(1, 4, pDeviceManufacturerInput);
			grid.setWidget(2, 0, pDeviceCommentInput);
			grid.setWidget(3, 1, pLaager1);
			grid.setWidget(3, 2, pSimmer1);
			grid.setWidget(3, 3, pTihend1);
			grid.setWidget(3, 4, pNotes1);
			grid.setWidget(4, 1, pLaager2);
			grid.setWidget(4, 2, pSimmer2);
			grid.setWidget(4, 3, pTihend2);
			grid.setWidget(4, 4, pNotes2);
			chp.add(pDeviceFreeCommentInput);
		}
		
		grid.setWidget(0, 0, lDevice);
//		grid.setWidget(0, 1, lFreecomment);
		grid.setWidget(0, 2, lDevicePower);
		grid.setWidget(0, 3, lType);
		grid.setWidget(0, 4, lManufacturer);
		grid.setWidget(2, 1, lLaager);
		grid.setWidget(2, 2, lSimmer);
		grid.setWidget(2, 3, lVTihend);
		grid.setWidget(2, 4, lNotes);
		grid.setWidget(3, 0, lDE);
		grid.setWidget(4, 0, lNDE);
		createPhotosPanel();

		insert(grid, getWidgetIndex(photosPanel));
		insert(chp, getWidgetIndex(photosPanel));
		return grid;
	}
	
	/**
	 * Create photos panel and populate it with photos.
	 * @return VerticalPanel photos panel.
	 */
	private VerticalPanel createPhotosPanel() {
		photosPanel.clear();
		photosPanel.setStyleName("aho-panel1");
		photosPanel.setWidth("100%");
		if (!images.isEmpty()) {
			Grid photosGrid = new Grid(images.size() / IMAGES_PER_ROW+1, IMAGES_PER_ROW);
			for (int i = 0; i <= images.size() / IMAGES_PER_ROW; i++) {
				for (int j = 0; j < IMAGES_PER_ROW; j++) {
					int imageNr = i * IMAGES_PER_ROW + j;
					if (imageNr < images.size()) {
						final Image image = images.get(imageNr);
						image.setHeight("50px");
						image.addClickHandler(new ClickHandler() {

							@Override
							public void onClick(ClickEvent event) {
								if(!image.getUrl().endsWith("tyhi.png")) {
									hideButton.setVisible(true);
								}
                                bigImage.setUrl(image.getUrl());	
                                bigImage.setStyleName("bigImage");
                                bigImage.setTitle(image.getTitle());
                               // Window.alert(image.getTitle());
							}
							
						});
						//Debug.log(i+" "+j+" "+image.getUrl());
						photosGrid.setWidget(i, j, image);
						//Debug.log("pilt paigas");
					}
				}
			}
			bigImage.setUrl("");
			photosPanel.add(photosGrid);
		} else {
			Label placeholder = new Label("Pildid puuduvad");
			placeholder.setStyleName("aho-label1");
			photosPanel.add(placeholder);
			
		}			
		if(editable) {
			final FormPanel uploadForm = new FormPanel();
		  	uploadForm.setAction("fileUpload");
		  	uploadForm.setEncoding(FormPanel.ENCODING_MULTIPART);
		  	uploadForm.setMethod(FormPanel.METHOD_POST);
		  	VerticalPanel panel = new VerticalPanel();
		  	uploadForm.setWidget(panel);
		  	final FileUpload upload = new FileUpload();
		  	upload.setName("uploadFormElement");
		  	upload.getElement().setAttribute("capture", "camera");
		  	upload.getElement().setAttribute("accept", "image/*;capture=camera");
		  	panel.add(upload);
		  	final TextBox tb=new TextBox();
		  	panel.add(tb);
		  	Button uploadSubmitButton = new Button("Lae serverisse");
		  	uploadSubmitButton.setStyleName("loginBtn");
		  	panel.add(uploadSubmitButton);
		  	uploadSubmitButton.addClickHandler(new ClickHandler(){
				@Override
				public void onClick(ClickEvent event) {
					String fname=upload.getFilename().replace("\\", "/");
					if(fname.split("/").length>1) {
						fname=fname.split("/")[fname.split("/").length-1];
					}
					//Window.alert(fname);
					uploadForm.setAction("fileUpload/" + company.getCompanyKey().substring(company.getCompanyKey().length()-10)+
					//		"/"+ device.getDeviceKey()+"/"+java.net.URLEncoder.encode(tb.getText()));
					"/"+ device.getDeviceKey()+"/"+tb.getText().replace(" ", "%20")+"/"+fname);
									uploadForm.submit();
				}
		  	});
		  	uploadForm.addSubmitHandler(new SubmitHandler(){
				@Override
				public void onSubmit(SubmitEvent event) {
				}
		  	});
		  	uploadForm.addSubmitCompleteHandler(new SubmitCompleteHandler() {

				@Override
				public void onSubmitComplete(SubmitCompleteEvent event) {
					fileUrl.setText(event.getResults());
					deviceTreeService.getImageNames(device.getDeviceKey(), getCompanyImageNamesListCallback);
				}
		  		
		  	});
		  	panel.add(fileUrl);
		    photosPanel.add(uploadForm);

		}
		
		Grid g2=new Grid(1, 1);
		g2.setWidget(0, 0, bigImage); 
	    bigImage.setStyleName("bigImage");
	  	photosPanel.add(g2);
	  	if(editable) {
	  		photosPanel.add(hideButton);
	  		hideButton.setVisible(false);
	  	}
	    if(!uploadedFiles.isEmpty()) {
			VerticalPanel fileListPanel=new VerticalPanel();
			Label fTitleLabel=new Label("Failid:");
			fTitleLabel.setStyleName("aho-label1");
			fileListPanel.add(fTitleLabel);
			for(int i=0; i<uploadedFiles.size(); i++) {
				HorizontalPanel hp=new HorizontalPanel();
				final Label flabel=new Label("f: "+uploadedFiles.get(i).getTitle());
				flabel.setStyleName("aho-label1");
				final int nr=i;
				flabel.addClickHandler(new ClickHandler() {
					public void onClick(ClickEvent e) {
						Window.open(uploadedFiles.get(nr).getUrl(), "_blank", "");
					}
				});
				hp.add(flabel);
				if(editable) {
					Label eLabel=new Label("eemalda");
					hp.add(eLabel);
			  		eLabel.addClickHandler(new ClickHandler() {
			  			@Override
			  			public void onClick(ClickEvent e) {
                            if(Window.confirm("Kas eemaldada?")) {
			  				deviceTreeService.hideImageName(uploadedFiles.get(nr).getUrl().substring(uploadedFiles.get(nr).getUrl().lastIndexOf("/")+1), hideImageCallback);
                            }
			  			}
			  		});

				}
				fileListPanel.add(hp);
			}
			photosPanel.add(fileListPanel);
		} else {
			/*Label placeholder = new Label("Failid puuduvad!");
			placeholder.setStyleName("aho-label1");
			photosPanel.add(placeholder);*/
			
		}
		
		return photosPanel;
	}
	
	
	void dataFromForm() {
		device.setId(((TextBox)deviceId).getText());
		device.setDeviceName(((TextBox)deviceName).getText());
		device.setDeviceComment(((TextBox)pDeviceCommentInput).getText());
		device.setFreeComment1(((TextBox)deviceFreecomment1Widget).getText());
		device.setFreeComment2(((TextBox)pDeviceFreeCommentInput).getText());
		device.setLocationName(((TextBox)locationName).getText());
		device.setDeviceNickname(((TextBox)pDeviceInput).getText());
		device.setDevicekWrpm(((TextBox)pDevicePowerInput).getText());
		device.setDeviceType(((TextBox)pDeviceTypeInput).getText());
		device.setDeviceManufacturer(((TextBox)pDeviceManufacturerInput).getText());
		device.setDElaager(((TextBox)pLaager1).getText());
		device.setDEsimmer(((TextBox)pSimmer1).getText());
		device.setDEVtihend(((TextBox)pTihend1).getText());
		device.setDEnotes(((TextBox)pNotes1).getText());
		device.setNDElaager(((TextBox)pLaager2).getText());
		device.setNDEsimmer(((TextBox)pSimmer2).getText());
		device.setNDEVtihend(((TextBox)pTihend2).getText());
		device.setNDEnotes(((TextBox)pNotes2).getText());
		if (device.hasCoupledDevice()) {
			device.setCoupledDeviceName(((TextBox)cDeviceInput).getText());
			device.setCoupledDeviceComment(((TextBox)cDeviceCommentInput).getText());
			device.setFreeComment3(((TextBox)cDeviceFreeCommentInput).getText());
			device.setCoupledDeviceType(((TextBox)cDeviceTypeInput).getText());
			device.setCoupledDeviceManufacturer(((TextBox)cDeviceManufacturerInput).getText());
			device.setMPlaager(((TextBox)cLaager1).getText());
			device.setMPsimmer(((TextBox)cSimmer1).getText());
			device.setMPVtihend(((TextBox)cTihend1).getText());
			device.setMPnotes(((TextBox)cNotes1).getText());
			device.setTPlaager(((TextBox)cLaager2).getText());
			device.setTPsimmer(((TextBox)cSimmer2).getText());
			device.setTPVtihend(((TextBox)cTihend2).getText());
			device.setTPnotes(((TextBox)cNotes2).getText());
		}
		
	}
	
	
	public void updateDeviceData(Device device, AsyncCallback<String> storeDeviceCallback) {
		dataFromForm();
		DeviceCard.getDevicetreeservice().updateDevice(device, storeDeviceCallback);
	}
	
	public void createDevice(List<Device> deviceList, AsyncCallback<String> storeDeviceCallback) {
		dataFromForm();
/*
 * 		device.setId(((TextBox)deviceId).getText());
 
		device.setDeviceName(((TextBox)deviceName).getText());
		device.setDeviceComment(((TextBox)pDeviceCommentInput).getText());
		device.setLocationName(((TextBox)locationName).getText());
		device.setDeviceNickname(((TextBox)pDeviceInput).getText());
		device.setDevicekWrpm(((TextBox)pDevicePowerInput).getText());
		device.setDeviceType(((TextBox)pDeviceTypeInput).getText());
		device.setDeviceManufacturer(((TextBox)pDeviceManufacturerInput).getText());
		device.setDElaager(((TextBox)pLaager1).getText());
		device.setDEsimmer(((TextBox)pSimmer1).getText());
		device.setDEVtihend(((TextBox)pTihend1).getText());
		device.setDEnotes(((TextBox)pNotes1).getText());
		device.setNDElaager(((TextBox)pLaager2).getText());
		device.setNDEsimmer(((TextBox)pSimmer2).getText());
		device.setNDEVtihend(((TextBox)pTihend2).getText());
		device.setNDEnotes(((TextBox)pNotes2).getText());
		if (device.hasCoupledDevice()) {
			device.setCoupledDeviceName(((TextBox)cDeviceInput).getText());
			device.setCoupledDeviceComment(((TextBox)cDeviceCommentInput).getText());
			device.setCoupledDeviceType(((TextBox)cDeviceTypeInput).getText());
			device.setCoupledDeviceManufacturer(((TextBox)cDeviceManufacturerInput).getText());
			device.setMPlaager(((TextBox)cLaager1).getText());
			device.setMPsimmer(((TextBox)cSimmer1).getText());
			device.setMPVtihend(((TextBox)cTihend1).getText());
			device.setMPnotes(((TextBox)cNotes1).getText());
			device.setTPlaager(((TextBox)cLaager2).getText());
			device.setTPsimmer(((TextBox)cSimmer2).getText());
			device.setTPVtihend(((TextBox)cTihend2).getText());
			device.setTPnotes(((TextBox)cNotes2).getText());
		}
*/		
		DeviceCard.getDevicetreeservice().storeDevice(device, storeDeviceCallback);
	}
	
}