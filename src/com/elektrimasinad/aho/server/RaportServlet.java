package com.elektrimasinad.aho.server;

import static java.util.stream.Collectors.toList;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.elektrimasinad.aho.shared.*;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Query.CompositeFilter;
import com.google.appengine.api.datastore.Query.CompositeFilterOperator;
import com.google.appengine.api.datastore.Query.FilterOperator;
import com.elektrimasinad.aho.client.DeviceMaintenancePanel2;

import java.util.Calendar;
import java.util.Date;
import java.util.List;
/*import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.poi.openxml4j.opc.OPCPackage;
import org.apache.poi.xwpf.usermodel.XWPFDocument;
import org.apache.poi.xwpf.usermodel.XWPFParagraph;
import org.apache.poi.xwpf.usermodel.XWPFRun;*/
import java.util.TimeZone;

public class RaportServlet extends DeviceTreeServiceImpl {
    /**
	 * 
	 */
	private static final long serialVersionUID = -4210862892257557487L;

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
	
	private String getMaintenanceItemsCSV(String companyKey, String sep){
		List<MaintenanceItem> items=getCompanyMaintenanceItems(companyKey);
        items=items.stream().filter((m) -> m.getMaintenanceState().contentEquals("done")).collect(toList());

		StringBuffer sb=new StringBuffer();
		
		sb.append("Aeg"+sep+"Osakond"+sep+"Üksus"+sep+"Seade"+sep+"Hooldus"+sep+"Kirjeldus"+sep+"Teostaja"+sep+"Seisaku aeg"+sep+"Hooldusaeg"+sep+"Maksumus\n");
		for(MaintenanceItem mi:items) { 
			String downtime=mi.getMaintenanceDowntime().toString();
			String timeSpent=mi.getMaintenanceTimeSpent().toString();
			String cost=mi.getMaintenanceCost().toString();
			if(sep.contentEquals(";")) {
				downtime='"'+downtime.replace('.', ',')+'"';
				timeSpent='"'+timeSpent.replace('.', ',')+'"';
				cost='"'+cost.replace('.', ',')+'"';
			}
			
					sb.append(dateString(mi.getMaintenanceCompleteDate())+sep+mi.getDepartmentName()+sep+mi.getUnitName()+sep+
		       "\""+mi.getDeviceName()+"\""+sep+"\""+mi.getMaintenanceName()+"\""+sep+"\""+mi.getMaintenanceShortDescription()+"\""+sep+
		       mi.getMaintenanceAssignedTo()+ downtime+sep+timeSpent+sep+cost+"\n");
		}
		return sb.toString();
	}
	
	private String sendDailyMessages() {
		Entity e=new Entity("Konf");
		Query query = new Query("Konf");
//		CompositeFilter cf=FilterOperator.EQUAL.of("Type", "normal");
		query.setFilter(FilterOperator.EQUAL.of("Type", "normal"));
//	query.setFilter(cf);
    Entity answer=ds.prepare(query).asSingleEntity();
    if(answer!=null) {
    	e=answer;
    } else {
    	e.setProperty("Type", "normal");
    }
	Calendar cal = Calendar.getInstance(TimeZone.getTimeZone("Europe/Tallinn"));
	cal.setTime(new Date());
	int year=cal.get(Calendar.YEAR);
  	int month=cal.get(Calendar.MONTH);
  	int day=cal.get(Calendar.DAY_OF_MONTH);

    if(e.getProperty("LastDailyMail")!=null) {
    	System.out.println("Tuli "+e.getProperty("LastDailyMail"));
    	String[] m=e.getProperty("LastDailyMail").toString().split("-");
    	System.out.println(m[0]+" "+m[1]+" "+m[2]+" "+year+" "+month+" "+day);
        if(m[0].contentEquals(year+"") && m[1].contentEquals(month+"") && m[2].contentEquals(day+"")) {
        	return "same day";
        }  	else {
        	//System.out.println("erinev");
        }
    }
		for(Company c : getCompanies()) {
			if(!c.getCompanyName().contentEquals("AURUSEADMED AS")) {continue;}
			System.out.println(c.getCompanyName());
			String s="";
			for(Measurement m: getCompanyMeasurements(c.getCompanyKey())) {
				if(m.getRaportKey().length()>0) {
					if(m.getMarking().contentEquals("alarm") || m.getMarking().contentEquals("hoiatus")) {
						if(!m.getStatus().contentEquals("archived")) {
							Raport r=getRaport(m.getRaportKey());
							System.out.println("m: "+m.getComment());
							//s+=m.getComment();
							
					        s+="\nTeatis: "+m.getMarking().toUpperCase();
					        
							s+="\nKuupaev: "+r.getDate();
							s+="\nEttevõte: "+r.getCompanyName();
							s+="\nOsakond: "+getUnit(r.getUnitKey()).getDepartmentName();
							s+="\n\u00DCksus: "+getUnit(r.getUnitKey()).getUnit();
								
						   	 s+="\nSeadme nimi: "+m.getDeviceName();
				           	 s+="\nSeadme id: "+m.getDeviceID();
				           	 s+="\nKommentaar: "+m.getComment();
				           	 s+="\n";
						}
					}
				}
			}
			Date loppaeg=new Date(new Date().getTime()-24*3600*1000);
			for(MaintenanceItem m: getCompanyMaintenanceItems(c.getCompanyKey())){
				System.out.println(m.getMaintenanceState()+" "+m.getMaintenanceCompleteDate()+" "+loppaeg+
						 " "+m.getMaintenanceCompleteDate().compareTo(loppaeg));
				if(!m.getMaintenanceState().contentEquals("done") && m.getMaintenanceCompleteDate().compareTo(loppaeg)<0) {
					s+="\nHooldus\n"+
					
					   "Nimetus: "+m.getMaintenanceName()+ 
    				   "\nAeg: "+dateString(m.getMaintenanceCompleteDate())+
    				   "\nEttev\u00F5te: "+c.getCompanyName()+
    				   "\nOsakond: "+m.getDepartmentName()+
    				   "\n\u00DCksus: "+m.getUnitName()+
    				   "\nSeade: "+m.getDeviceName()+
    				   "\nSeadme kood: "+m.getDeviceID()+ 
    			//	   "\nKirjeldus: "+m.getMaintenanceDescription()+
    				   
    				   "\nProbleemi kirjeldus: "+m.getMaintenanceProblemDescription()+
    				   "\nTeostaja: "+m.getMaintenanceAssignedToName()+
    				   "\nTeadlik: "+m.getMaintenanceAssignedSupervisor()+"\n";
				}
			}
			if(s.length()>0) {
			for(Worker w:getCompanyWorkers(c.getCompanyKey())){
				if(w.getRoles().get(0).isSupervisor()) {
					sendMail(w.getEmail(), "HES info", s, "");
					//System.out.println("saadab "+w.getEmail()+" "+s);
				}
			}}
			
		}
		e.setProperty("LastDailyMail", year+"-"+month+"-"+day);
		ds.put(e);
		return "ok";
	}
	
	protected void doGet( HttpServletRequest req, HttpServletResponse resp ) throws ServletException, IOException
    { 
	   if(req.getParameter("dailyMessages")!=null) {
		   resp.getWriter().println(sendDailyMessages());
		  return;
	   }
		   resp.setContentType("text/csv");
           resp.setHeader("Content-Disposition", "attachment; filename=hooldused.csv");
        if(req.getParameter("separator")!=null && req.getParameter("separator").contentEquals("semicolon")) {
  		  resp.getWriter().println(getMaintenanceItemsCSV(req.getParameter("companyKey"), ";"));        	
        } else {
		  resp.getWriter().println(getMaintenanceItemsCSV(req.getParameter("companyKey"), ","));
        }

    }
}