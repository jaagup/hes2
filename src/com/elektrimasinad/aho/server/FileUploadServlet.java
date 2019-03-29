package com.elektrimasinad.aho.server;

import com.google.appengine.api.blobstore.BlobKey;
import com.google.appengine.api.blobstore.BlobstoreService;
import com.google.appengine.api.blobstore.BlobstoreServiceFactory;
import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;
//[START gcs_imports]
import com.google.appengine.tools.cloudstorage.GcsFileOptions;
import com.google.appengine.tools.cloudstorage.GcsFilename;
import com.google.appengine.tools.cloudstorage.GcsInputChannel;
import com.google.appengine.tools.cloudstorage.GcsOutputChannel;
import com.google.appengine.tools.cloudstorage.GcsService;
import com.google.appengine.tools.cloudstorage.GcsServiceFactory;
import com.google.appengine.tools.cloudstorage.RetryParams;
//[END gcs_imports]
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.channels.Channels;
import java.util.Enumeration;
import java.util.List;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;


/**
 * A simple servlet that proxies reads and writes to its Google Cloud Storage bucket.
 */
@SuppressWarnings("serial")
public class FileUploadServlet extends HttpServlet {

  public static final boolean SERVE_USING_BLOBSTORE_API = true;

  /**
   * This is where backoff parameters are configured. Here it is aggressively retrying with
   * backoff, up to 10 times but taking no more that 15 seconds total to do so.
   */
  private final GcsService gcsService = GcsServiceFactory.createGcsService(new RetryParams.Builder()
      .initialRetryDelayMillis(10)
      .retryMaxAttempts(10)
      .totalRetryPeriodMillis(15000)
      .build());

  /**Used below to determine the size of chucks to read in. Should be > 1kb and < 10MB */
  private static final int BUFFER_SIZE = 6 * 1024 * 1024;

  /**
   * Retrieves a file from GCS and returns it in the http response.
   * If the request path is /gcs/Foo/Bar this will be interpreted as
   * a request to read the GCS file named Bar in the bucket Foo.
   */
//[START doGet]
  @Override
  public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
	Enumeration<String> nimed=req.getSession().getAttributeNames();
	while(nimed.hasMoreElements()) {
		System.out.println(nimed.nextElement());
	}
    GcsFilename fileName = getFileName(req);
    if (SERVE_USING_BLOBSTORE_API) {
      BlobstoreService blobstoreService = BlobstoreServiceFactory.getBlobstoreService();
      BlobKey blobKey = blobstoreService.createGsBlobKey(
    	//         "/gs/" + fileName.getBucketName() + "/" + fileName.getObjectName());
      "/gs/" + "hes-209307.appspot.com" + "/" + fileName.getObjectName());
           blobstoreService.serve(blobKey, resp);
    } else {
      GcsInputChannel readChannel = gcsService.openPrefetchingReadChannel(fileName, 0, BUFFER_SIZE);
      copy(Channels.newInputStream(readChannel), resp.getOutputStream());
    }
  }
//[END doGet]

  /**
   * Writes the payload of the incoming post as the contents of a file to GCS.
   * If the request path is /gcs/Foo/Bar this will be interpreted as
   * a request to create a GCS file named Bar in bucket Foo.
   */
//[START doPost]
  @Override
  public void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
    GcsFileOptions instance = GcsFileOptions.getDefaultInstance();
    System.out.println(req.getRequestURI());
    String[] m=req.getRequestURI().split("/");
    System.out.println("a: "+m[2]+", seade: "+m[3]);
   // GcsFilename fileName = getFileName(req);
    GcsOutputChannel outputChannel;
    ServletFileUpload sfu=new ServletFileUpload(new DiskFileItemFactory());
//    outputChannel = gcsService.createOrReplace(fileName, instance);
    String fname=m[3].substring(m[3].length()-10)+"_"+((int)(1000000*Math.random()))+".jpg";
//    outputChannel = gcsService.createOrReplace(new GcsFilename(m[2], fname), instance);
    outputChannel = gcsService.createOrReplace(new GcsFilename("hes-209307.appspot.com", fname), instance);
    try {
    List<FileItem> items = sfu.parseRequest(req);
    System.out.println("faile: "+items.size());
	copy(items.get(0).getInputStream(),Channels.newOutputStream(outputChannel));
	//copy(items.get(1).getInputStream(),Channels.newOutputStream(outputChannel));
	  	DatastoreService ds = DatastoreServiceFactory.getDatastoreService();
  	System.out.println(m[3]);
  	Key deviceKey = KeyFactory.stringToKey(m[3]);
	Entity e = new Entity("PictureName", deviceKey);
	e.setProperty("filename", fname);
	ds.put(e);
   // items.get(0).getInputStream()
    //  byte[] sisu=items.get(0).get();
     // System.out.println("Pikkus: "+sisu.length);
    } catch(Exception ex) {
    	ex.printStackTrace();
    }
//    copy(req.getInputStream(), Channels.newOutputStream(outputChannel));
  }
//[END doPost]

  private GcsFilename getFileName(HttpServletRequest req) {
	System.out.println(req.getRequestURI());
    String[] splits = req.getRequestURI().split("/", 4);
    if (!splits[0].equals("") || !splits[1].equals("fileUpload")) {
      throw new IllegalArgumentException("The URL is not formed as expected. " +
          "Expecting /fileUpload/<bucket>/<object>");
    }
    return new GcsFilename(splits[2], splits[3]);
  }

  /**
   * Transfer the data from the inputStream to the outputStream. Then close both streams.
   */
  private void copy(InputStream input, OutputStream output) throws IOException {
    try {
      byte[] buffer = new byte[BUFFER_SIZE];
      int kokku=0;
      int bytesRead = input.read(buffer);
      while (bytesRead != -1) {
    	kokku+=bytesRead;
        output.write(buffer, 0, bytesRead);
        bytesRead = input.read(buffer);
      }
      System.out.println("Kokku: "+kokku);
    } finally {
      input.close();
      output.close();
    }
  }
  
}
