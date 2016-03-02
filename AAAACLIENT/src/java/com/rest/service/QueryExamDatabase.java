/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.service;

import com.google.gson.Gson;
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
public class QueryExamDatabase {
    
    PreparedStatement getAllExams = null;
    ResultSet results = null;
            
   Connection connection = null;
    public void startQuery(){
        
            
        try{
          
             
                    javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
                   connection = ds.getConnection(); 

           
            getAllExams = connection.prepareStatement("SELECT * FROM examstable");
       
        }
        catch(SQLException | NamingException e){
             
          e.printStackTrace();
        }
    }
    
     
     
    public String returnQuery(){
        try{
            StringBuilder appender = new StringBuilder();
         results = getAllExams.executeQuery();
         while(results.next()){
            appender.append("[begin]").append(results.getString("Subject")).append("[middle]").append(results.getString("Question")).append("[middle]").append(results.getString("Date")).append("[middle]").append(results.getString("Author")).append("[middle]").append(results.getString("type"));
         }
          
         return new Gson().toJson(appender.toString());
         
        }
        catch(SQLException e){
           e.printStackTrace();
        }
        
         finally{
                try{
                    
                    if(results != null){
                        results.close();
                         
                    }
                if(connection!= null)
                    connection.close();
                }
                catch(SQLException e){
                    e.printStackTrace();
                }
            }
        
        return "";
    }
}

