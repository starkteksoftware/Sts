/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.endpoin.service;

import com.rest.service.LogIn;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Set;
import javax.naming.NamingException;

/**
 *
 * @author bola odesile
 */
public class UpdateStatus {
    Connection connection = null;
    PreparedStatement updateStatus = null;
    
    public void updateStart(){
        try{
            
         javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
                   connection = ds.getConnection(); 


 updateStatus  = connection.prepareStatement("UPDATE examstatus SET Status=3"+
         " WHERE matric=? AND examName =?");
  
     }
            catch(SQLException | NamingException e){
               e.printStackTrace();
            }   
        
        
            
    }
    
    
    public String executeQuery(HashMap<String,String> students,String exam){
        try{
       Set<String> keys = students.keySet();
       for(String ss : keys){
           updateStatus.setString(1, ss);
           updateStatus.setString(2, exam);
           updateStatus.executeUpdate();
        }
        }
        catch(SQLException e){
            e.printStackTrace();
        }
      
         
    finally{
                try{
                if(connection!= null)
                    connection.close();
                }
                catch(SQLException e){
                    e.printStackTrace();
                }
            }
         
        
        return"";
    }
}
