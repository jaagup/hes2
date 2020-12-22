package com.elektrimasinad.aho.server;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Properties;

import javax.imageio.ImageIO;
import javax.mail.Message;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.tuple.ImmutablePair;
import org.apache.commons.lang3.tuple.Pair;

import com.elektrimasinad.aho.shared.Device;
import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;
import com.google.appengine.api.datastore.Query;
//import com.google.appengine.api.mail.MailService.Message;

import java.awt.*;
import java.awt.geom.AffineTransform;
import java.awt.image.*;

/**
 * Servlet implementation class MeasurementServlet
 */
@WebServlet("/MeasurementServlet")
public class MeasurementServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public MeasurementServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String deviceKeyString=request.getParameter("device");
		String ptype="NDE";
		if(request.getParameter("ptype")!=null) { 
			if(request.getParameter("ptype").equals("DE")) {ptype="DE";}
			if(request.getParameter("ptype").equals("MP")) {ptype="MP";}
			if(request.getParameter("ptype").equals("TP")) {ptype="TP";}
		}
		String commentField="NDEcomment";
		if(ptype.equals("DE")) {commentField="DEcomment";}
		if(ptype.equals("MP")) {commentField="MPcomment";}
		if(ptype.equals("TP")) {commentField="TPcomment";}
		Key deviceKey = KeyFactory.stringToKey(deviceKeyString);
	  	DatastoreService ds = DatastoreServiceFactory.getDatastoreService();
	  	//Query dQuery=new Query("Device", deviceKey);
	  	String dName="??";
	  	String dName2="???";
	  	String dName3="????";
	  	try {
	  	  Entity e0=ds.get(deviceKey);
	  	  dName=e0.getProperty("DeviceName").toString();
	  	  dName2=e0.getProperty("CoupledDeviceName").toString();
	  	  dName3=e0.getProperty("DeviceNickname").toString();
	  	//System.out.println(dName);
	  	} catch(Exception ex) {ex.printStackTrace();}
	  	System.out.println(dName);
	  	Query query = new Query("Measurement", deviceKey).setAncestor(deviceKey).addSort("Date",  Query.SortDirection.DESCENDING);
		List<String> dates=new ArrayList<String>();
		List<Double> valuesmms=new ArrayList<Double>();
		List<Double> valuesge=new ArrayList<Double>();
		//List<String> comments=new ArrayList<String>();
		for (Entity e : ds.prepare(query).asIterable()) {
			dates.add(0, e.getProperty("Date").toString()+".;"+e.getProperty(commentField).toString());
			try {
	 			 valuesmms.add(0, Double.parseDouble(e.getProperty(ptype+"mms").toString().replace(',', '.')));
			}catch(Exception ex) {
				valuesmms.add(0, 0.0);
			}
			try {
	 			 valuesge.add(0, Double.parseDouble(e.getProperty(ptype+"ge").toString().replace(',', '.')));
			}catch(Exception ex) {
				valuesge.add(0, 0.0);
			}
		}
		List<Pair<String, Pair<Double, Double> > > pairs=new ArrayList<Pair<String, Pair<Double, Double> > >();
		for(int i=0; i<valuesmms.size(); i++){
		  pairs.add(new ImmutablePair<>(dates.get(i), new ImmutablePair<Double, Double>(valuesmms.get(i), valuesge.get(i))));	
		}
		Collections.sort(pairs, new Comparator<Pair<String, Pair<Double, Double> > >(){

			@Override
			public int compare(Pair<String,  Pair<Double, Double>> o1, Pair<String, Pair<Double, Double> > o2) {
				String[] m1=o1.getKey().split("\\.");  
				String[] m2=o2.getKey().split("\\.");
				//System.out.println(Arrays.deepToString(m1));
				if(m1.length!=4) {return -1;}
				if(m2.length!=4) {return 1;}
				try {
					int a1=Integer.parseInt(m1[2]);
					int a2=Integer.parseInt(m2[2]);
					if(a1<a2) {return -1;}
					if(a1>a2) {return 1;}
					int k1=Integer.parseInt(m1[1]);
					int k2=Integer.parseInt(m2[1]);
					if(k1<k2) {return -1;}
					if(k1>k2) {return 1;}
					int p1=Integer.parseInt(m1[0]);
					int p2=Integer.parseInt(m2[0]);
					return p1 - p2;
				} catch(Exception ex){
					return 0;
				}
				//return 0;
			}
			
		});
        double max=1;
        for(int i=0; i<valuesmms.size(); i++) {
        	if(valuesmms.get(i)>max) {max=valuesmms.get(i);}
        	if(valuesge.get(i)>max) {max=valuesge.get(i);}
         }
        double koef=200/max;
//		response.getWriter().append("Served at: ").append(request.getContextPath()).append(values.toString()+dates.toString());
		BufferedImage bi=new BufferedImage(400, 300, BufferedImage.TYPE_INT_RGB);
		try {
	    String fontConfig = System.getProperty("java.home")
	            + File.separator + "lib" 
	            + File.separator + "fontconfig.Prodimage.properties";
	    if (new File(fontConfig).exists())
	        System.setProperty("sun.awt.fontconfig", fontConfig);
		} catch(Exception ex) {
			System.out.println(ex);
		}
		Graphics2D g=bi.createGraphics();
		g.setColor(Color.white);
		g.fillRect(0, 0, bi.getWidth(), bi.getHeight());
		int alus=250;
		g.setColor(Color.gray);
		g.drawLine(0, alus, bi.getWidth(), alus);
		g.drawLine(0, 200, bi.getWidth(), 200);
		g.drawLine(0, 150, bi.getWidth(), 150);
		g.drawLine(0, 100, bi.getWidth(), 100);
		g.drawLine(0, 50, bi.getWidth(), 50);
		g.setColor(Color.black);
        g.drawString(0+"", 10, alus);		
        g.drawString(Math.round(max*100/4.0)/100.0+"", 10, 200);		
        g.drawString(Math.round(max*100/2.0)/100.0+"", 10, 150);		
        g.drawString(Math.round(max*300/4.0)/100.0+"", 10, 100);		
        g.drawString(max+"", 10, 50);
        g.drawString(dName,20 , 10);
        if(ptype.contentEquals("MP") || ptype.contentEquals("TP")) {
        g.drawString(dName2,20 , 25);
        } else {
        g.drawString(dName3,20 , 40);
        }
        g.drawString(ptype,150 , 20);
        g.setColor(Color.green);
        g.drawString("mms",200 , 20);
        g.setColor(Color.blue);
        g.drawString("ge",250 , 20);
        int xmms=0, ymms=0, vanaxmms=0, vanaymms=0;
        int xde=0, yde=0, vanaxde=0, vanayde=0;
        System.out.println(valuesmms.size()+" "+valuesmms);
        while(valuesmms.size()>18) {
        	valuesmms.remove(0);
        	pairs.remove(0);
        }
        for(int i=0; i<pairs.size(); i++) {
//        	x=i*20+30; y=(int)(values.get(i)*koef);
        	xmms=i*20+30; ymms=alus-(int)(pairs.get(i).getRight().getLeft()*koef);
        	xde=i*20+30; yde=alus-(int)(pairs.get(i).getRight().getRight()*koef);
            g.setColor(Color.green);
        	g.fillOval(xmms, ymms, 5, 5);
        	if(i>0) {
        		g.drawLine(vanaxmms,  vanaymms, xmms, ymms);
        	}
        	vanaxmms=xmms; vanaymms=ymms;

            g.setColor(Color.blue);
        	g.fillOval(xde, yde, 5, 5);
        	if(i>0) {
        		g.drawLine(vanaxde,  vanayde, xde, yde);
        	}
        	vanaxde=xde; vanayde=yde;

        }
        g.setColor(Color.black);
        AffineTransform orig = g.getTransform();
        for(int i=0; i<pairs.size(); i++) {
        	g.rotate(-Math.PI/2, i*20+30, 290);
        	g.drawString(pairs.get(i).getLeft().split("\\;")[0], i*20+30, 290);
            g.setTransform(orig);
            String[] m=pairs.get(i).getLeft().split("\\;");
            if(m.length>1) {
        	  g.rotate(-Math.PI/2, i*20+30, 200);
        	  g.drawString(m[1], i*20+30, 200);
              g.setTransform(orig);
            }
        }
        
        response.setContentType("image/png");
        ImageIO.write(bi, "png", response.getOutputStream());
        Properties props = new Properties();
        Session session = Session.getDefaultInstance(props, null);

        try {
			/*
			 * Message msg = new MimeMessage(session); msg.setFrom(new
			 * InternetAddress("saatja@hes-209307.appspotmail.com", "Gmail.com Admin"));
			 * msg.addRecipient(Message.RecipientType.TO, new
			 * InternetAddress("jaagup@tlu.ee", "Mr. User")); msg.setSubject("Proovikiri");
			 * msg.setText("Kirja sisu"); msg.setReplyTo(new InternetAddress[]{new
			 * InternetAddress("jaagup@tlu.ee")}); Transport.send(msg);
			 */
        } catch (Exception e) {
            e.printStackTrace();                
        }   
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
