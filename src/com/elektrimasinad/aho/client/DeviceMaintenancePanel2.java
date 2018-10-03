package com.elektrimasinad.aho.client;

import java.util.Date;

import com.elektrimasinad.aho.shared.MaintenanceItem;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.logical.shared.ValueChangeEvent;
import com.google.gwt.event.logical.shared.ValueChangeHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.HasHorizontalAlignment;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.user.datepicker.client.DateBox;
import com.google.gwt.user.datepicker.client.DatePicker;

public class DeviceMaintenancePanel2  extends VerticalPanel{
    DeviceCard deviceCard;
	private AsyncCallback<String> storeCallback;
	
    public DeviceMaintenancePanel2(DeviceCard deviceCard) {
    	this.deviceCard=deviceCard;
    }
    public static String dateString(Date d) {
    	String s="";
    	s+=d.getDate();
    	if(s.length()<2) {s="0"+s;}
    	s+=".";
    	if(d.getMonth()<9) {
    		s+="0"+(d.getMonth()+1);
    	} else {
    		s+=(d.getMonth()+1);
    	}
    	s+=".";
    	s+=(d.getYear()+1900);
    	return s;
    }
    public void create() {
    	if(deviceCard.selectedMaintenanceItem==null) {
    		deviceCard.selectedMaintenanceItem=new MaintenanceItem();
    	}
		storeCallback = new AsyncCallback<String>() {

			@Override
			public void onFailure(Throwable arg0) {
				// TODO Auto-generated method stub
				Window.alert("store error "+arg0);
			}

			@Override
			public void onSuccess(String arg0) {
				// TODO Auto-generated method stub
				//Window.alert("Store ok "+arg0+" "+deviceCard.selectedDevice.getDeviceKey());
				Window.Location.assign("DeviceCard.html?deviceKey="+deviceCard.selectedDevice.getDeviceKey()+"&action=addPlannerItem");
			}
			
		};

		HorizontalPanel NamePanel = new HorizontalPanel();
		NamePanel.setStyleName("aho-panel1");
		Label tb00 = new Label("T\u00F6\u00F6 nimetus");
		TextBox tb0 = new TextBox();
		tb0.setText(deviceCard.selectedMaintenanceItem.getMaintenanceName());
		NamePanel.setCellHorizontalAlignment(tb0, HasHorizontalAlignment.ALIGN_RIGHT);
		NamePanel.add(tb00);
		NamePanel.add(tb0);
		//ProblemPanel.setCellHorizontalAlignment(tb0, HasHorizontalAlignment.ALIGN_RIGHT);
		tb0.setStyleName("aho-textbox1");
	    tb00.setStyleName("aho-label1");
//	    NamePanel.setWidth("100%");
	    add(NamePanel);
		
	    HorizontalPanel DescriptionPanel = new HorizontalPanel();
	    DescriptionPanel.setStyleName("aho-panel1");
	    Label tb11 = new Label("T\u00F6\u00F6 kirjeldus");
		TextBox tb1 = new TextBox();
		DescriptionPanel.setCellHorizontalAlignment(tb1, HasHorizontalAlignment.ALIGN_RIGHT);
		DescriptionPanel.add(tb11);
		DescriptionPanel.add(tb1);
		tb1.setText(deviceCard.selectedMaintenanceItem.getMaintenanceDescription());
		tb1.setStyleName("aho-textbox1");
	    tb11.setStyleName("aho-label1");
//	    DescriptionPanel.setWidth("100%");
	    add(DescriptionPanel);
//	    ProblemPanel.setCellHorizontalAlignment(tb1, HasHorizontalAlignment.ALIGN_RIGHT);
		
	    HorizontalPanel ProbDescPanel = new HorizontalPanel();
	    ProbDescPanel.setStyleName("aho-panel1");
//	    ProbDescPanel.setWidth("100%");
		Label tb22 = new Label("Probleemi kirjeldus");
		TextBox tb2 = new TextBox();
		ProbDescPanel.setCellHorizontalAlignment(tb2, HasHorizontalAlignment.ALIGN_RIGHT);
		tb2.setText(deviceCard.selectedMaintenanceItem.getMaintenanceProblemDescription());
		if(Window.Location.getParameter("problemDescription")!=null) {
			tb2.setText(tb2.getText()+" "+Window.Location.getParameter("problemDescription"));
		}
		if(Window.Location.getParameter("DiagnosticKey")!=null) {
			deviceCard.selectedMaintenanceItem.setConnectedMeasurementKeyString(Window.Location.getParameter("DiagnosticKey"));
		}
		tb2.setStyleName("aho-textbox1");
	    tb22.setStyleName("aho-label1");
	    ProbDescPanel.add(tb22);
	    ProbDescPanel.add(tb2);
	    add(ProbDescPanel);
	    
		HorizontalPanel ReadyBy = new HorizontalPanel();
		Label Time = new Label("T\u00F6\u00F6 valmib: ");
	    ReadyBy.setStyleName("aho-panel1");
//		DateBox dateBox = new DateBox();
		DatePicker dateBox= new DatePicker();
		final Label dateText = new Label();
		ReadyBy.add(Time);
		ReadyBy.add(dateText);
		ReadyBy.add(dateBox);
		dateBox.setYearAndMonthDropdownVisible(true);
		   dateBox.addValueChangeHandler(new ValueChangeHandler<Date>() {
			      public void onValueChange(ValueChangeEvent<Date> event) {
			        Date date = (Date)event.getValue();
			     //   String dateString = DateTimeFormat.getMediumDateFormat().format(date);
			        dateText.setText(dateString(date));
			      }
			    });
	//	dateBox.setStyleName("aho-datebox");
		Date ndate=deviceCard.selectedMaintenanceItem.getMaintenanceCompleteDate();
		if(ndate==null) {
	        dateBox.setValue(new Date());
		} else {
			dateBox.setValue(ndate);
		}
        dateText.setText(dateString(dateBox.getValue()));
        
	    ReadyBy.setStyleName("aho-panel1");
	    Time.setStyleName("aho-label1");
	    dateBox.setWidth("100%");
	    add(ReadyBy);

	    HorizontalPanel materialPanel=new HorizontalPanel();
	    materialPanel.setStyleName("aho-panel1");
	    Label materialLabel=new Label("Materjalid");
	    TextBox materialTb=new TextBox();
	    materialTb.setText(deviceCard.selectedMaintenanceItem.getMaintenanceMaterials());
	    materialPanel.add(materialLabel);
	    materialPanel.add(materialTb);
	    materialLabel.setStyleName("aho-label1");
	    materialTb.setStyleName("aho-textbox1");
	    add(materialPanel);
	    
	    HorizontalPanel notesPanel=new HorizontalPanel();
	    notesPanel.setStyleName("aho-panel1");
	    Label notesLabel=new Label("M\u00E4rkused");
	    TextBox notesTb=new TextBox();
	    notesTb.setText(deviceCard.selectedMaintenanceItem.getMaintenanceNotes());
	    notesPanel.add(notesLabel);
	    notesPanel.add(notesTb);
	    notesLabel.setStyleName("aho-label1");
	    notesTb.setStyleName("aho-textbox1");
	    add(notesPanel);
	    
	    HorizontalPanel personPanel=new HorizontalPanel();
	    personPanel.setStyleName("aho-panel1");
	    Label personLabel=new Label("Teostaja");
	    TextBox personTb=new TextBox();
	    personTb.setText(deviceCard.selectedMaintenanceItem.getMaintenanceAssignedTo());
	    personPanel.add(personLabel);
	    personPanel.add(personTb);
	    personLabel.setStyleName("aho-label1");
	    personTb.setStyleName("aho-textbox1");
	    add(personPanel);
	    
	    
	    Button saveButton=new Button("Salvesta", new ClickHandler() {
	    	@Override
	    	public void onClick(ClickEvent event) {
	    		if(tb0.getText().trim().length()==0) {
	    			Window.alert("Nimi puudub");
	    			return;
	    		}
	    		MaintenanceItem m=deviceCard.selectedMaintenanceItem;
	    		 m.setMaintenanceDevice(deviceCard.selectedDevice.getDeviceKey().toString());
	    		  m.setMaintenanceName(tb0.getValue());
	    		  m.setMaintenanceDescription(tb1.getValue());
	    		  m.setMaintenanceProblemDescription(tb2.getValue());
	    		  //m.setMaintenanceState(state);
	    		  m.setMaintenanceAssignedTo(personTb.getValue());
	    		  m.setMaintenanceCompleteDate(dateBox.getValue());
	    		  m.setMaintenanceMaterials(materialTb.getText());
	    		  m.setMaintenanceNotes(notesTb.getValue());
	    		  if(m.getMaintenanceID()==null) {
			    	  deviceCard.deviceTreeService.storeMaintenanceEntry(m, deviceCard.selectedCompany.getCompanyKey(), storeCallback);	    			  
	    		  }
	    		  else {
			    	  deviceCard.deviceTreeService.updateMaintenanceEntry(m, storeCallback);

	    		  }
	    	}
	    });
	    if(deviceCard.selectedMaintenanceItem.getMaintenanceID()!=null) {
	    	saveButton.setText("Uuenda");
	    }
	    add(saveButton);
		saveButton.setStyleName("panelButton");

	    HorizontalPanel dublicatePanel=new HorizontalPanel();
	    dublicatePanel.setStyleName("aho-panel1");
	    DateBox dublicateBox=new DateBox();
	    dublicateBox.setValue(new Date(new Date().getTime()+1000*60*60*24*7));
	    Button dublicateButton=new Button("Loo duplikaat", new ClickHandler() {
	    	@Override
	    	public void onClick(ClickEvent event) {
	    		MaintenanceItem m=deviceCard.selectedMaintenanceItem;
	    		 m.setMaintenanceDevice(deviceCard.selectedDevice.getDeviceKey().toString());
	    		  m.setMaintenanceName(tb0.getValue()+"-koopia");
	    		  m.setMaintenanceDescription(tb1.getValue());
	    		  m.setMaintenanceProblemDescription(tb2.getValue());
	    		  //m.setMaintenanceState(state);
	    		  m.setMaintenanceAssignedTo(personTb.getValue());
	    		  m.setMaintenanceCompleteDate(dublicateBox.getValue());
	    		  m.setMaintenanceMaterials(materialTb.getText());
	    		  m.setMaintenanceNotes(notesTb.getValue());
			      deviceCard.deviceTreeService.storeMaintenanceEntry(m, deviceCard.selectedCompany.getCompanyKey(), storeCallback);	    			  
	    	}
	    });
		dublicateButton.setStyleName("panelButton");

	    dublicatePanel.add(dublicateButton);
	    dublicatePanel.add(dublicateBox);
	    add(dublicatePanel);
	    HorizontalPanel downtimePanel=new HorizontalPanel();
	    downtimePanel.setStyleName("aho-panel1");
	    downtimePanel.setWidth("100%");
	    Label dlb=new Label("Seisaku aeg");
	    TextBox dtb=new TextBox();
	    dtb.setText("0");
	    downtimePanel.setCellHorizontalAlignment(dtb, HasHorizontalAlignment.ALIGN_RIGHT);
		dtb.setStyleName("aho-textbox1");
	    dlb.setStyleName("aho-label1");
		downtimePanel.add(dlb);
		downtimePanel.add(dtb);
		add(downtimePanel);
		
	    HorizontalPanel timeSpentPanel=new HorizontalPanel();
	    timeSpentPanel.setStyleName("aho-panel1");
	    //downtimePanel.setWidth("100%");
	    Label timeSpentLb=new Label("Ajakulu:");
	    TextBox timeSpentTb=new TextBox();
	    timeSpentTb.setText("0");
	    downtimePanel.setCellHorizontalAlignment(timeSpentTb, HasHorizontalAlignment.ALIGN_RIGHT);
		timeSpentTb.setStyleName("aho-textbox1");
	    timeSpentLb.setStyleName("aho-label1");
		timeSpentPanel.add(timeSpentLb);
		timeSpentPanel.add(timeSpentTb);
		add(timeSpentPanel);
		
	    HorizontalPanel costPanel=new HorizontalPanel();
	    costPanel.setStyleName("aho-panel1");
	    //downtimePanel.setWidth("100%");
	    Label costLb=new Label("Maksumus:");
	    TextBox costTb=new TextBox();
	    costTb.setText("0");
	    downtimePanel.setCellHorizontalAlignment(costTb, HasHorizontalAlignment.ALIGN_RIGHT);
		costTb.setStyleName("aho-textbox1");
	    costLb.setStyleName("aho-label1");
		costPanel.add(costLb);
		costPanel.add(costTb);
		add(costPanel);
		
		Button w = new Button("L\u00F5peta t\u00F6\u00F6!", new ClickHandler() {
		      public void onClick(ClickEvent event) {
		    		if(tb0.getText().trim().length()==0) {
		    			Window.alert("Nimi puudub");
		    			return;
		    		}
		    	  MaintenanceItem mi=deviceCard.selectedMaintenanceItem;

		    		 mi.setMaintenanceDevice(deviceCard.selectedDevice.getDeviceKey().toString());
		    		  mi.setMaintenanceName(tb0.getValue());
		    		  mi.setMaintenanceDescription(tb1.getValue());
		    		  mi.setMaintenanceProblemDescription(tb2.getValue());
		    		  //m.setMaintenanceState(state);
		    		  mi.setMaintenanceAssignedTo(personTb.getValue());
		    		  mi.setMaintenanceCompleteDate(dateBox.getValue());
		    		  mi.setMaintenanceMaterials(materialTb.getText());
		    		  mi.setMaintenanceNotes(notesTb.getValue());

		    	  mi.setMaintenanceState("done");
		    	  try {
		    	  mi.setMaintenanceDowntime(Integer.parseInt(dtb.getValue()));
		    	  mi.setMaintenanceTimeSpent(Integer.parseInt(timeSpentTb.getValue()));
		    	  mi.setMaintenanceCost(Double.parseDouble(costTb.getValue()));
		    	  mi.setMaintenanceCompleteDate(new Date());
	    		  if(mi.getMaintenanceID()==null) {
			    	  deviceCard.deviceTreeService.storeMaintenanceEntry(mi, deviceCard.selectedCompany.getCompanyKey(), storeCallback);	    			  
	    		  }
	    		  else {
			    	  deviceCard.deviceTreeService.updateMaintenanceEntry(mi, storeCallback);

	    		  }
		    	  } catch(Exception ex) {
		    		  Window.alert("Lopetamisprobleem: "+ex);
		    	  }
//		    	  Window.alert("T\u00F6\u00F6 on l\u00F5petatud!");
		      }
		});
		add(w);
		w.setStyleName("panelButton");
    }
}
