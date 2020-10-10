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
import com.elektrimasinad.aho.client.DeviceMaintenancePanel2;

import java.util.Date;
import java.util.List;
/*import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.poi.openxml4j.opc.OPCPackage;
import org.apache.poi.xwpf.usermodel.XWPFDocument;
import org.apache.poi.xwpf.usermodel.XWPFParagraph;
import org.apache.poi.xwpf.usermodel.XWPFRun;*/

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
	
	protected void doGet( HttpServletRequest req, HttpServletResponse resp ) throws ServletException, IOException
    { 
//		resp.getWriter().println("tere");
	//	System.out.println(req.getParameter("companyKey"));
		   resp.setContentType("text/csv");
           resp.setHeader("Content-Disposition", "attachment; filename=hooldused.csv");
        if(req.getParameter("separator")!=null && req.getParameter("separator").contentEquals("semicolon")) {
  		  resp.getWriter().println(getMaintenanceItemsCSV(req.getParameter("companyKey"), ";"));        	
        } else {
		  resp.getWriter().println(getMaintenanceItemsCSV(req.getParameter("companyKey"), ","));
        }
       // String fileName = req.getParameter( "fileInfo1" );
       // resp.getWriter().println(fileName);
//         resp.getWriter().println(req.getSession().getAttribute("Account"));
     //  req.getParameter("companyKey");
        // if(req.)
        /*int BUFFER = 1024 * 100;
        resp.setContentType( "application/octet-stream" );
        resp.setHeader( "Content-Disposition:", "attachment;filename=" + "\"" + fileName + "\"" );
        ServletOutputStream outputStream = resp.getOutputStream();
        resp.setContentLength( Long.valueOf( getRaport().length() ).intValue() );
        resp.setBufferSize( BUFFER );
        //Your IO code goes here to create a file and set to outputStream//
        */
        //File docxFile = new File("RaportTemplate.docx");
        //File file = new File(docxFile.toString());
        
      //Blank Document
        /*XWPFDocument document = null;
		try {
			document = new XWPFDocument(OPCPackage.open("res/RaportTemplate.docx"));
		} catch (InvalidFormatException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		if (document == null) {
			document = new XWPFDocument();
		}
        XWPFParagraph paragraph = document.createParagraph();
        XWPFRun run = paragraph.createRun();
        run.setText("At tutorialspoint.com, we strive hard to " +
           "provide quality tutorials for self-learning " +
           "purpose in the domains of Academics, Information " +
           "Technology, Management and Computer Programming Languages.");
  		
        //Write the Document in file system
        //FileOutputStream out = new FileOutputStream( new File("createdocument.docx"));
        //document.write(out);
        //out.close();
        //System.out.println("createdocument.docx written successully");
     
        //long length = file.length();
        //FileInputStream fis = new FileInputStream(file);
        resp.addHeader("Content-Disposition","attachment; filename=\"Raport.docx\"");        
        resp.setContentType("application/force-download");
     
        //if (length > 0 && length <= Integer.MAX_VALUE) {
        //	resp.setContentLength((int)length);
        //}
     
        resp.setBufferSize(32768);
        ServletOutputStream out = resp.getOutputStream();
        
     
        /*int bufSize = resp.getBufferSize();
        byte[] buffer = new byte[bufSize];
        BufferedInputStream bis = new BufferedInputStream(fis,bufSize);
     
        int bytes;
        while ((bytes = bis.read(buffer, 0, bufSize)) >= 0)
            out.write(buffer, 0, bytes);
        bis.close();      
        fis.close();*/
        /*document.write(out);
        out.flush();
        out.close();*/

    }
}