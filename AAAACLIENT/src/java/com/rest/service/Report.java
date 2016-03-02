/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.service;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import javax.naming.NamingException;



/**
 *
 * @author bola odesile
 */
public class Report {
     Connection connection;
    PreparedStatement reportData = null;
    private String results;
      ResultSet resultset = null;
    public void rep(){
      try{
            
         javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
                   connection = ds.getConnection(); 

        reportData = connection.prepareStatement("SELECT * FROM report");
   }
            catch (SQLException | NamingException e){
               e.printStackTrace();
            } 
        
}
    
    public String getReportDate(){
        StringBuilder resultBuild = new StringBuilder();
        StringBuilder list = new  StringBuilder();
        try{
            resultset = reportData.executeQuery();
            
            while(resultset.next()){
              StringBuilder builder = new StringBuilder();
          builder.append("#");
             
          list.append(resultset.getString("Subject").concat(" ".concat(resultset.getString("Date").concat(" ")).concat(resultset.getString("Amount").concat(" Candidates"))).concat("##"));
           builder.append(resultset.getString("Subject").concat(","));
            builder.append(resultset.getString("Result").concat(","));
              builder.append(resultset.getString("Amount").concat(","));
                builder.append(resultset.getString("Date"));
        resultBuild.append(builder);    
            }
        }
        catch(SQLException e){
            e.printStackTrace();
        }
       finally{
            try{
           
                 
            resultset.close();
            if(connection!=null)
            connection.close();
            }
            catch(SQLException e){
            e.printStackTrace();
            }
        }
      return results = resultBuild.toString().concat("#split").concat(list.toString());
       
    }
    
    public void getSinglereport(){
          try{
              javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
                   connection = ds.getConnection(); 

     reportData = connection.prepareStatement("SELECT * FROM report WHERE Subject=? And Date=?");
          
   }
            catch (SQLException | NamingException e){
               e.printStackTrace();
            } 
        
    }
    
    public String getSheet(String s,String date){
      StringBuilder resultBuild = new StringBuilder();

        try{
                  reportData.setString(1,s);
                   reportData.setString(2,date);
         resultset  = reportData.executeQuery();
            
            while(resultset.next()){
              StringBuilder builder = new StringBuilder();
          builder.append("#");
             
        
           builder.append(resultset.getString("Subject").concat(","));
            builder.append(resultset.getString("Result").concat(","));
            
              builder.append(resultset.getString("Amount").concat(","));
                builder.append(resultset.getString("Date"));
        resultBuild.append(builder);    
            }
        }
        catch(SQLException e){
            e.printStackTrace();
        }
        finally{
            try{
             
             resultset.close();
             if(connection != null)
               connection.close();
              
            }
            catch(SQLException e){
                e.printStackTrace();
            }
        }
       
      return results = resultBuild.toString();
    }
}
