/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package Servlets;

import com.lowagie.text.DocumentException;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.StringReader;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.xhtmlrenderer.pdf.ITextRenderer;


/**
 *
 * @author bola odesile
 */
public class PdfFormat extends HttpServlet {

    /**
     * Processes requests for both HTTP
     * <code>GET</code> and
     * <code>POST</code> methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
    
      response.setContentType ("application/octet-stream");
        

       OutputStream out = response.getOutputStream();


       
        
        
      String [] id =  request.getQueryString().split("=");
    System.out.print(id[1]);
        try {
   /*         
            
            String [] id =  request.getQueryString().split("=");
    System.out.print(id[1]);
    
    DataBaseQuery data = new DataBaseQuery();
    data.getQuestion();
   String dateReplace = id[2].replaceAll("%20", " ");
   String results = data.sendData(id[1].replaceAll("&date",""),dateReplace);
  
   
   String [] split = results.split("#");
   
   
             String yourXhtmlContentAsString = "<html><head><h1><b>CAREYS UNIVERSITY</b></h1><h3>Rain Semester Exam Results</h3> <br/><br/><br/> <h5>"+id[1].replaceAll("&date", "")+" </h5> <br/> Date : "+split[0]+" </head><body><table border='1'><tr><thead><th style=\"width:8px\">S/N</th><th style=\"width:12px\">Matric</th><th style=\"width:30px\">Name</th><th style=\"width:12px\">Score</th></thead></tr> <tbody>"+split[1]+"</tbody></table></body></html>";
         String outputFileFolder =System.getProperty("user.home")+System.getProperty("file.separator")+"Images"+System.getProperty("file.separator");
    //    Document document = XMLResource.load( new ByteArrayInputStream( yourXhtmlContentAsString.getBytes() ) ).getDocument();

ITextRenderer renderer = new ITextRenderer();
renderer.setDocumentFromString(yourXhtmlContentAsString);

renderer.layout();



String fileNameWithPath = outputFileFolder +id[1].replaceAll("&date","")+".pdf";
FileOutputStream fos = new FileOutputStream( fileNameWithPath );
 renderer.createPDF( fos );
fos.close();
System.out.println( "File 1: '" + fileNameWithPath + "' created." ); */
            /* TODO output your page here. You may use following sample code. */
        
           pdf(request,id[1].replaceAll("&date",""),out);
            
         response.addHeader("Content-Disposition","attachment; filename="+id[1].replaceAll("&date","")+".pdf");
   
         
        }
      /*  catch(DocumentException e){
            e.printStackTrace();
        } */
        catch(com.itextpdf.text.DocumentException e){
            e.printStackTrace();
            
        }
        catch(ArrayIndexOutOfBoundsException e){
            e.printStackTrace();
        }
      finally {            
            out.close();
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP
     * <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

      
    /**
     * Handles the HTTP
     * <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>
    
     
     
    
    public void pdf(HttpServletRequest request,String name, OutputStream out) throws IOException, com.itextpdf.text.DocumentException,ArrayIndexOutOfBoundsException{
        
      String outputFileFolder =System.getProperty("user.home")+System.getProperty("file.separator")+"Images"+System.getProperty("file.separator");
        com.itextpdf.text.Document document =
        new com.itextpdf.text.Document( com.itextpdf.text.PageSize.A4 );
String fileNameWithPath = outputFileFolder +name+ ".pdf";
FileOutputStream fos = new FileOutputStream( fileNameWithPath );
com.itextpdf.text.pdf.PdfWriter pdfWriter =
        com.itextpdf.text.pdf.PdfWriter.getInstance( document, fos );


document.open();

//**********************************************************
// if required, you can add document meta data
document.addAuthor( "Starks testing technologies" );

//document.addCreator( creator );
document.addSubject( "HtmlWoker Parsed Pdf from iText" );
document.addCreationDate();
document.addTitle( "HtmlWoker Parsed Pdf from iText" );

//**********************************************************/

com.itextpdf.text.html.simpleparser.HTMLWorker htmlWorker =
        new com.itextpdf.text.html.simpleparser.HTMLWorker( document );


   String [] id =  request.getQueryString().split("=");
    System.out.print(id[1]);
    
    DataBaseQuery data = new DataBaseQuery();
    data.getQuestion();
     String dateReplace = id[2].replaceAll("%20", " ");
    String results = data.sendData(id[1].replaceAll("&date",""),dateReplace);
    
    
    
   
   String [] split = results.split("#");
   
  StringBuilder sb = new StringBuilder("<html><head><h1><b>CAREYS UNIVERSITY</b></h1><h3>Rain Semester Exam Results</h3> <br/><br/><br/> <h5>"+id[1].replaceAll("&date", "")+" </h5> <br/> Date : "+split[0]+" </head><body><table border='1'><tr><thead><th style=\"width:8px\">S/N</th><th style=\"width:12px\">Matric</th><th style=\"width:30px\">Name</th><th style=\"width:12px\">Score</th></thead></tr> <tbody>"+split[1]+"</tbody></table></body></html>");
   htmlWorker.parse( new StringReader( sb.toString() ) );
   document.close();
  fos.close();
  

System.out.println( "File 3: '" + fileNameWithPath + "' created." );
 File files = new File(fileNameWithPath);
  if(files.exists()){
        FileInputStream input = new FileInputStream(files);
        InputStream ins = input;
       
       
          int read = 0;
       final byte[] bytes = new byte[1024];
 //out = response.getOutputStream();
        while ((read = ins.read(bytes)) != -1) {
       out.write(bytes, 0, read);
        
           
        }
       
        }
        else{
      
           
        }
    }
}



   
