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
	AsyncCallback<List<MaintenanceItem>> getDeviceEntriesCallback;
	DebugClientSide Debug = new DebugClientSide();
	Button maintenanceHistoryButton=new Button("Kuva ajalugu");

	//private DeviceCard createMaintenancePanelView = new DeviceCard();
	public DeviceEditPanel() {
		super();
		maintenanceHistoryButton.addClickHandler(new ClickHandler() {
			@Override
			public void onClick(ClickEvent e) {
				if(maintenanceHistoryButton.getText().contentEquals("Kuva ajalugu")) {
				  showMaintenanceHistoryList();
				} else {
					deviceTreeService.getMaintenanceEntriesFromKey(selectedDevice, getDeviceEntriesCallback);
				}
			}

		});
		Debug.enable();
	}
	public void createNewDeviceEditPanel(Device device) {
		SingleSelectionModel<MaintenanceItem> tableSelModel = new SingleSelectionModel<MaintenanceItem>();
		tableSelModel.addSelectionChangeHandler(new SelectionChangeEvent.Handler() {

			@Override
			public void onSelectionChange(SelectionChangeEvent arg0) {
				// TODO Auto-generated method stub
				MaintenanceItem selectedItem = (MaintenanceItem) tableSelModel.getSelectedObject();
				Window.Location.assign("DeviceCard.html?deviceKey="+device.getDeviceKey()+"&maintenanceCode="+selectedItem.getMaintenanceID()+"&action=showPlannerItem");
				//showEditPanel(selectedItem);
			}
			
		});
		getDeviceEntriesCallback = new AsyncCallback<List<MaintenanceItem>>() {

			@Override
			public void onFailure(Throwable arg0) {
				// TODO Auto-generated method stub
			}

			@Override
			public void onSuccess(List<MaintenanceItem> retrievedMaintenanceList) {
				// TODO Auto-generated method stub
				maintenanceList = retrievedMaintenanceList;
//				maintenanceTable.setRowData(0, maintenanceList);
				List<MaintenanceItem> current=maintenanceList.stream().filter(m -> !m.getMaintenanceState().equals("done")).collect(Collectors.toList());
				maintenanceTable.setRowData(0, current);
				maintenanceTable.setRowCount(current.size());
				//clear();
				add(maintenanceTable);
                if(maintenanceList.stream().filter(m -> m.getMaintenanceState().equals("done")).count()>0) {
                //maintenanceHistoryButton.

				add(maintenanceHistoryButton);
				maintenanceHistoryButton.setText("Kuva ajalugu");
                }
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
		//super.clear();
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

		TextColumn<MaintenanceItem> katCol = new TextColumn<MaintenanceItem>() {

			@Override
			public String getValue(MaintenanceItem m) {
				String item = m.getMaintenanceShortDescription();
				return item;
			}
		};

		TextColumn<MaintenanceItem> dateCol = new TextColumn<MaintenanceItem>() {

			@Override
			public String getValue(MaintenanceItem m) {
				return DeviceMaintenancePanel2.dateString(m.getMaintenanceCompleteDate());
			}
		};
		TextColumn<MaintenanceItem> assignedEmployee = new TextColumn<MaintenanceItem>() {
			@Override
			public String getValue(MaintenanceItem m) {
				String item = m.getMaintenanceAssignedTo();
				return item;
			}
		};
		maintenanceTable.addColumn(katCol, "Kategooria");
		maintenanceTable.addColumn(nameCol, "Nimetus");
		maintenanceTable.addColumn(dateCol, "Kuupaev");
		maintenanceTable.addColumn(assignedEmployee, "Teostaja");
		maintenanceTable.setSelectionModel(tableSelModel);
	}

	private void showMaintenanceHistoryList() {
		List<MaintenanceItem> list3=maintenanceList.stream().filter(m -> m.getMaintenanceState().equals("done")).collect(Collectors.toList());
		maintenanceTable.setRowData(0, list3);
       
		maintenanceTable.flush();
		maintenanceTable.setRowCount(list3.size());
		maintenanceHistoryButton.setText("Kuva tegemata hooldused");
		Debug.log("kuvatakse ajalugu");
	}

}
