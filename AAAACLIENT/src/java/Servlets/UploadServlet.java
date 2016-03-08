/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package Servlets;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

/**
 *
 * @author bola odesile
 */

@MultipartConfig(location="/tmp", fileSizeThreshold=10000*10000*5, 
    maxFileSize=10000*10000*5, maxRequestSize=10000*10000*5)
public class UploadServlet extends HttpServlet {

    
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
     private final static Logger LOGGER = 
            Logger.getLogger(FormServlet.class.getCanonicalName());
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
       
        final String path = System.getProperty("user.home")+System.getProperty("file.separator")+"Images";
    final Part  filePart = request.getPart("file");
    
    
  
    final String fileName = getFileName(filePart);
    
    if(fileName != null && !fileName.equals("") && fileName.length() > 1){
        
        System.out.println(path);
        

    OutputStream outs = null;
    InputStream filecontent = null;
    
  
    
           String name = fileName;
          
 //   final PrintWriter writer = response.getWriter();

    try {
        outs = new FileOutputStream(new File(path + File.separator
                + name));
        filecontent = filePart.getInputStream();

        int read = 0;
        final byte[] bytes = new byte[1024];

        while ((read = filecontent.read(bytes)) != -1) {
            outs.write(bytes, 0, read);
        }
       }
    
      
       catch(IOException e){
               e.printStackTrace();
            }  
    finally {            
           
     
        if (outs != null) {
            outs.close();
        }
        if (filecontent != null) {
            filecontent.close();
        }
       // if (writer != null) {
         //   writer.close();
        //}
        }
    }
    
   StringBuffer requestUrl = request.getRequestURL();
        
      
 //    response.sendRedirect(requestUrl.toString());
     
        
    }
      
  
    private String getFileName(final Part part) {
    final String partHeader = part.getHeader("content-disposition");
     LOGGER.log(Level.INFO, "Part Header = {0}", partHeader);
    
    for (String content : part.getHeader("content-disposition").split(";")) {
        if (content.trim().startsWith("filename")) {
            return content.substring(
                    content.indexOf('=') + 1).trim().replace("\"", "");
        }
    }
    return null;
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
}
