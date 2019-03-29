package com.elektrimasinad.aho.client;

import java.util.ArrayList;
import java.util.List;

import com.elektrimasinad.aho.shared.Company;
import com.elektrimasinad.aho.shared.Department;
import com.elektrimasinad.aho.shared.Device;
import com.elektrimasinad.aho.shared.Unit;
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
	Widget deviceId;
	Widget locationName;
	
	private Label fileUrl = new Label("");
	
	private int IMAGES_PER_ROW = 5;
	private List<Image> images = new ArrayList<Image>();
	private Widget pDeviceInput;
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
	private FileUpload fileUpload;
	private AsyncCallback<List<String>> getCompanyImageNamesListCallback;
	private AsyncCallback<String> hideImageCallback;
	static DeviceTreeServiceAsync deviceTreeService = GWT.create(DeviceTreeService.class);
	DebugClientSide Debug = new DebugClientSide();
	boolean editable=false;
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
				//Debug.log("Pildinimed: "+items.toString());
				for(String pnimi: items) {
						images.add(new Image("/fileUpload/"+company.getCompanyKey().substring(company.getCompanyKey().length()-10)+"/"+pnimi));

				}
				if(images.size()>0) {
					images.add(new Image("/res/tyhi.png"));
				}
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
					}
				}
  				bigImage.setUrl("");
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
		createDeviceCard(true);
		Scheduler.get().scheduleDeferred(new ScheduledCommand() {

		    @Override
		    public void execute() {
		    	((TextBox)deviceId).setFocus(true);
		    }
		});
	}
	
	private void createDeviceCard(boolean isEditable) {
		editable=isEditable;
		if (isEditable) {
			deviceId = AhoWidgets.createTextbox("aho-textbox1", device.getId());
			deviceName = AhoWidgets.createTextbox("aho-textbox1", device.getDeviceName());
			locationName = AhoWidgets.createTextbox("aho-textbox1", device.getLocationName());
		} else {
			deviceId = AhoWidgets.createLabel(device.getId(), "aho-label1 alignRight", HasHorizontalAlignment.ALIGN_RIGHT);
			deviceName = AhoWidgets.createLabel(device.getDeviceName(), "aho-label1 alignRight", HasHorizontalAlignment.ALIGN_RIGHT);
			locationName = AhoWidgets.createLabel(device.getLocationName(), "aho-label1 alignRight", HasHorizontalAlignment.ALIGN_RIGHT);
		}
		Label lDepartmentName = AhoWidgets.createLabel(department.getDepartmentName(), "aho-label1 alignRight", HasHorizontalAlignment.ALIGN_RIGHT);
		Label lUnit = AhoWidgets.createLabel(location.getUnit(), "aho-label1 alignRight", HasHorizontalAlignment.ALIGN_RIGHT);
		HorizontalPanel departmentNamePanel = new HorizontalPanel();
		departmentNamePanel.setStyleName("aho-panel1");
		departmentNamePanel.add(AhoWidgets.createLabel("Osakond", "aho-label1", null));
		departmentNamePanel.add(lDepartmentName);
		departmentNamePanel.setCellHorizontalAlignment(lDepartmentName, HasHorizontalAlignment.ALIGN_RIGHT);
		add(departmentNamePanel);
		HorizontalPanel unitPanel = new HorizontalPanel();
		unitPanel.setStyleName("aho-panel1");
		unitPanel.add(AhoWidgets.createLabel("\u00FCksus", "aho-label1", null));
		unitPanel.add(lUnit);
		unitPanel.setCellHorizontalAlignment(lUnit, HasHorizontalAlignment.ALIGN_RIGHT);
		add(unitPanel);
		HorizontalPanel locationPanel = new HorizontalPanel();
		locationPanel.setStyleName("aho-panel1");
		locationPanel.add(AhoWidgets.createLabel("Asukoht", "aho-label1", null));
		locationPanel.add(locationName);
		locationPanel.setCellHorizontalAlignment(locationName, HasHorizontalAlignment.ALIGN_RIGHT);
		add(locationPanel);
		HorizontalPanel deviceIdPanel = new HorizontalPanel();
		deviceIdPanel.setStyleName("aho-panel1");
		deviceIdPanel.add(AhoWidgets.createLabel("ID nr.", "aho-label1", null));
		deviceIdPanel.add(deviceId);
		deviceIdPanel.setCellHorizontalAlignment(deviceId, HasHorizontalAlignment.ALIGN_RIGHT);
		add(deviceIdPanel);
		HorizontalPanel deviceNamePanel = new HorizontalPanel();
		deviceNamePanel.setStyleName("aho-panel1");
		deviceNamePanel.add(AhoWidgets.createLabel("Seadme nimi", "aho-label1", null));
		deviceNamePanel.add(deviceName);
		deviceNamePanel.setCellHorizontalAlignment(deviceName, HasHorizontalAlignment.ALIGN_RIGHT);
		add(deviceNamePanel);
		
//		photosPanel = createPhotosPanel(isEditable);
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
		Label lDevicePower = AhoWidgets.createLabel("kW/rpm", "aho-label3", null);
		Label lType = AhoWidgets.createLabel("T\u00FC\u00FCp", "aho-label3", null);
		Label lManufacturer = AhoWidgets.createLabel("Tootja", "aho-label3", null);
		Label lLaager = AhoWidgets.createLabel("Laager", "aho-label3", null);
		Label lSimmer = AhoWidgets.createLabel("Simmer", "aho-label3", null);
		Label lVTihend = AhoWidgets.createLabel("V tihend", "aho-label3", null);
		Label lNotes = AhoWidgets.createLabel("Muud m\u00E4rkused", "aho-label3", null);
		Label lDE = AhoWidgets.createLabel("Vedav ots (DE)", "aho-label3", null);
		Label lNDE = AhoWidgets.createLabel("Tiivikupoolne ots (NDE)", "aho-label3", null);
		if (isCoupledDevice) {
			device.hasCoupledDevice = true;
			lDevice.setText("Seotud seade");
			lDE.setText("Mootori poolne (MP)");
			lNDE.setText("Teine pool (TP)");
			lDevicePower.setText("");
			if (isEditView) {
				cDeviceInput = AhoWidgets.createTextbox("aho-textbox1 medium", device.getCoupledDeviceName());
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
		} else {
			if (isEditView) {
				pDeviceInput = AhoWidgets.createTextbox("aho-textbox1 medium", device.getDeviceNickname());
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
		}
		
		grid.setWidget(0, 0, lDevice);
		grid.setWidget(0, 2, lDevicePower);
		grid.setWidget(0, 3, lType);
		grid.setWidget(0, 4, lManufacturer);
		grid.setWidget(2, 1, lLaager);
		grid.setWidget(2, 2, lSimmer);
		grid.setWidget(2, 3, lVTihend);
		grid.setWidget(2, 4, lNotes);
		grid.setWidget(3, 0, lDE);
		grid.setWidget(4, 0, lNDE);
		
		insert(grid, getWidgetIndex(photosPanel));
		
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
                                bigImage.setUrl(image.getUrl());	
                               
							}
							
						});
						Debug.log(i+" "+j+" "+image.getUrl());
						photosGrid.setWidget(i, j, image);
						Debug.log("pilt paigas");
					}
				}
			}
			photosPanel.add(photosGrid);
		} else {
			Label placeholder = new Label("Pildid puuduvad!");
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
		  	Button uploadSubmitButton = new Button("Upload");
		  	panel.add(uploadSubmitButton);
		  	uploadSubmitButton.addClickHandler(new ClickHandler(){
				@Override
				public void onClick(ClickEvent event) {
					uploadForm.setAction("fileUpload/" + company.getCompanyKey().substring(company.getCompanyKey().length()-10)+
							"/"+ device.getDeviceKey());
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
					Debug.log("kohal: "+event.getResults());
					fileUrl.setText(event.getResults());
					deviceTreeService.getImageNames(device.getDeviceKey(), getCompanyImageNamesListCallback);
				}
		  		
		  	});
		  	panel.add(fileUrl);
		    photosPanel.add(uploadForm);
		}
		
		Grid g2=new Grid(1, 1);
		g2.setWidget(0, 0, bigImage); 
	  	photosPanel.add(g2);
	  	if(editable) {
	  		Button hideButton=new Button("Peida pilt");
	  		hideButton.addClickHandler(new ClickHandler() {
	  			@Override
	  			public void onClick(ClickEvent e) {
	  				deviceTreeService.hideImageName(bigImage.getUrl().substring(bigImage.getUrl().lastIndexOf("/")+1), hideImageCallback);
	  			}
	  		});
	  		photosPanel.add(hideButton);
	  	}
		
		return photosPanel;
	}
	
	public void updateDeviceData(Device device, AsyncCallback<String> storeDeviceCallback) {
		device.setId(((TextBox)deviceId).getText());
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
		
		DeviceCard.getDevicetreeservice().updateDevice(device, storeDeviceCallback);
	}
	
	public void createDevice(List<Device> deviceList, AsyncCallback<String> storeDeviceCallback) {
		device.setId(((TextBox)deviceId).getText());
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
		
		DeviceCard.getDevicetreeservice().storeDevice(device, storeDeviceCallback);
	}
	
}