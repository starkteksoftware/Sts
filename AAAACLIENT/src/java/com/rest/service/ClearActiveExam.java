/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.service;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import javax.naming.NamingException;

/**
 *
 * @author bola odesile
 */
public class ClearActiveExam {
   
    PreparedStatement delete = null;
    Connection connection = null;
    
   public void deleteQuery(){
        try{
            
              javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
         connection = ds.getConnection(); 
         delete =  connection.prepareStatement("DELETE  FROM activeexamstudents");
       
         }
        catch(SQLException | NamingException e){
            e.printStackTrace();
        }
    }
    
    
      
    
    public void delteQueryExecuted(){
        try{
           delete.executeUpdate();
           
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
         
     
    }
    
}

