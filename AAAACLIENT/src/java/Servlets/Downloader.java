package Servlets;

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author bola odesile
 */
public class Downloader extends HttpServlet {

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
        //response.setContentType("text/html;charset=UTF-8");
        response.setContentType ("application/octet-stream");
        
//response.addHeader("Content-Disposition","attachment; filename="+"hello.jpg");
       OutputStream out = response.getOutputStream();
        try {
            /* TODO output your page here. You may use following sample code. */
             String [] id =  request.getQueryString().split("=");
    System.out.print(id[1]);
        String replace = id[1].replaceAll("%20", " ");
        File files = new File(System.getProperty("user.home")+System.getProperty("file.separator")+"Images"+System.getProperty("file.separator")+replace+".mp4");
        
        
       response.addHeader("Content-Disposition","attachment; filename="+files.getName());
 
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
            File filess = new File(System.getProperty("user.home")+System.getProperty("file.separator")+"Images"+System.getProperty("file.separator")+replace);
            System.err.println(filess.getName());
               if(filess.exists()){
        FileInputStream input = new FileInputStream(filess);
        InputStream ins = input;
      
        
       
          int read = 0;
       final byte[] bytes = new byte[1024];
 //OutputStream out = response.getOutputStream();
        while ((read = ins.read(bytes)) != -1) {
       out.write(bytes, 0, read);
       
       
           
        }
       
        }
        
        }
        } finally {            
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
}
