package com.elektrimasinad.aho.client;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import com.elektrimasinad.aho.shared.Device;

import com.elektrimasinad.aho.shared.Device;
import com.elektrimasinad.aho.shared.MaintenanceItem;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.user.datepicker.client.DateBox;
import com.google.gwt.user.datepicker.client.DatePicker;
import com.google.gwt.view.client.SelectionChangeEvent;
import com.google.gwt.view.client.SingleSelectionModel;
import com.google.gwt.cell.client.DateCell;
import com.google.gwt.dom.client.Style.Unit;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.logical.shared.ValueChangeHandler;
import com.google.gwt.i18n.client.DateTimeFormat;
import com.google.gwt.user.cellview.client.CellTable;
import com.google.gwt.user.cellview.client.Column;
import com.google.gwt.user.cellview.client.TextColumn;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.FileUpload;
import com.google.gwt.user.client.ui.FormPanel;
import com.google.gwt.user.client.ui.FormPanel.SubmitCompleteEvent;
import com.google.gwt.user.client.ui.FormPanel.SubmitEvent;
import com.google.gwt.user.client.ui.HasHorizontalAlignment;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.IntegerBox;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.PopupPanel;
import com.google.gwt.user.client.ui.RadioButton;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.TextArea;

public class DeviceEditPanel extends VerticalPanel {
	//private DeviceMaintenancePanel deviceMaintenancePanel = new DeviceMaintenancePanel();
	private String selectedDevice;
	private List<MaintenanceItem> maintenanceList;
	private MaintenanceItem maintenanceItem = new MaintenanceItem();
	private CellTable<MaintenanceItem> maintenanceTable;
	private DeviceTreeServiceAsync deviceTreeService;
	private AsyncCallback<String> updateMaintenanceEntryCallback;
	//private DeviceCard createMaintenancePanelView = new DeviceCard();
	public DeviceEditPanel() {
		super();
	}
	public void createNewDeviceEditPanel(Device device) {
		SingleSelectionModel<MaintenanceItem> tableSelModel = new SingleSelectionModel<MaintenanceItem>();
		tableSelModel.addSelectionChangeHandler(new SelectionChangeEvent.Handler() {

			@Override
			public void onSelectionChange(SelectionChangeEvent arg0) {
				// TODO Auto-generated method stub
				MaintenanceItem selectedItem = (MaintenanceItem) tableSelModel.getSelectedObject();
				showEditPanel(selectedItem);
			}
			
		});
		AsyncCallback<List<MaintenanceItem>> getDeviceEntriesCallback = new AsyncCallback<List<MaintenanceItem>>() {

			@Override
			public void onFailure(Throwable arg0) {
				// TODO Auto-generated method stub
			}

			@Override
			public void onSuccess(List<MaintenanceItem> retrievedMaintenanceList) {
				// TODO Auto-generated method stub
				maintenanceList = retrievedMaintenanceList;
//				maintenanceTable.setRowData(0, maintenanceList);
				maintenanceTable.setRowData(0, 				
						maintenanceList.stream().filter(m -> !m.getMaintenanceState().equals("done")).collect(Collectors.toList()));
				add(maintenanceTable);
			}
			
		};
		updateMaintenanceEntryCallback = new AsyncCallback<String>() {

			@Override
			public void onFailure(Throwable arg0) {
				// TODO Auto-generated method stub
				Window.alert("failed");
			}

			@Override
			public void onSuccess(String arg0) {
				// TODO Auto-generated method stub
				Window.alert("success");
			}
			
		};
		super.clear();
		deviceTreeService = DeviceCard.getDevicetreeservice();
		selectedDevice = device.getDeviceKey();
		deviceTreeService.getMaintenanceEntriesFromKey(selectedDevice, getDeviceEntriesCallback);
		
		maintenanceTable = new CellTable<MaintenanceItem>();
		TextColumn<MaintenanceItem> nameCol = new TextColumn<MaintenanceItem>() {

			@Override
			public String getValue(MaintenanceItem m) {
				String item = m.getMaintenanceName();
				return item;
			}
		};
		DateCell dateCell = new DateCell();
		Column<MaintenanceItem, Date> dateCol = new Column<MaintenanceItem, Date>(dateCell) {

			@Override
			public Date getValue(MaintenanceItem m) {
				Date item = m.getMaintenanceCompleteDate();
				return item;
			}
		};
		TextColumn<MaintenanceItem> assignedEmployee = new TextColumn<MaintenanceItem>() {
			@Override
			public String getValue(MaintenanceItem m) {
				String item = m.getMaintenanceAssignedTo();
				return item;
			}
		};
		maintenanceTable.addColumn(nameCol, "Nimetus");
		maintenanceTable.addColumn(dateCol, "Kuupaev");
		maintenanceTable.addColumn(assignedEmployee, "Teostaja");
		maintenanceTable.setSelectionModel(tableSelModel);
	}
	public void showEditPanel(MaintenanceItem m) {
		PopupPanel editPopup = new PopupPanel(false);
		editPopup.setStyleName("maintenanceEditPopup");
		VerticalPanel editPanel = new VerticalPanel();
		Label editNameLabel = new Label(m.getMaintenanceName());
		editNameLabel.setStyleName("maintenanceEditPopupLabel");
		TextArea editDesc = new TextArea();
		editDesc.setValue(m.getMaintenanceDescription());
		TextArea editProblemDesc = new TextArea();
		editProblemDesc.setValue(m.getMaintenanceProblemDescription());
		TextArea editMaterials = new TextArea();
		editMaterials.setValue(m.getMaintenanceMaterials());
		TextArea editNotes = new TextArea();
		editNotes.setValue(m.getMaintenanceNotes());
		IntegerBox intervalBox = new IntegerBox();
		intervalBox.setValue(m.getMaintenanceInterval());
		Button editButton = new Button("Salvesta", new ClickHandler() {
			public void onClick(ClickEvent event) {
				m.setMaintenanceName(m.getMaintenanceName());
				m.setMaintenanceDescription(editDesc.getValue());
				m.setMaintenanceProblemDescription(editProblemDesc.getValue());
				m.setMaintenanceMaterials(editMaterials.getValue());
				m.setMaintenanceNotes(editNotes.getValue());
				m.setMaintenanceAssignedTo();
				m.setMaintenanceCompleteDate(m.getMaintenanceCompleteDate());
				m.setMaintenanceDevice(m.getMaintenanceDevice());
				m.setMaintenanceInterval(intervalBox.getValue());
				deviceTreeService.updateMaintenanceEntry(m, updateMaintenanceEntryCallback);
				editPopup.hide();
			}
		});
		Button finishButton=new Button("Lopeta", new ClickHandler() {
			public void onClick(ClickEvent event) {
				m.setMaintenanceState("done");
				deviceTreeService.updateMaintenanceEntry(m, updateMaintenanceEntryCallback);
				editPopup.hide();
			}
		});
		editPanel.add(editNameLabel);
		editPanel.add(new Label("Kirjeldus:"));
		editPanel.add(editDesc);
		editPanel.add(new Label("Probleemi kirjeldus:"));
		editPanel.add(editProblemDesc);
		editPanel.add(new Label("Materjalid:"));
		editPanel.add(editMaterials);
		editPanel.add(new Label("M\u00E4rkused:"));
		editPanel.add(editNotes);
		editPanel.add(new Label("Intervall:"));
		editPanel.add(intervalBox);
		editPanel.add(editButton);
		editPanel.add(finishButton);
		editPopup.add(editPanel);
		editPopup.center();
	}
}
