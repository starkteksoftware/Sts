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

public class ResultSheet {
    PreparedStatement getResult = null;
    Connection connection = null;
    ResultSet results = null;
    boolean connected = false;
    
    public void startGetResult (){
            try{
              javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
                   connection = ds.getConnection(); 



           
   getResult  = connection.prepareStatement("Select * from mark where Exam= ? ");
   
   connected = true;
     
    
     }
            catch(SQLException | NamingException e){
               e.printStackTrace();
            }   
        
    }
    
    public String getResults (String result){
        if(!connected)
           throw new IllegalStateException("No connection");
            StringBuilder appender = new StringBuilder();
        try{
            getResult.setString(1,result);
            results = getResult.executeQuery();
        
            while(results.next()){
            appender.append("#").append(results.getString("Exam")).append(",");
            appender.append(results.getString("TimeStamp"));
            }
        }
        catch(Exception e){
            e.printStackTrace();
        }
        finally{
                try{
                       if(results != null)
                    results.close();
               
                if(connection!= null){
                    connection.close();
                }
                
                }
                 
                catch(SQLException e){
                    e.printStackTrace();
                }
            }
        return appender.toString();
    }
}
