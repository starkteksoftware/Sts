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
public class LogIn {
   Connection connection;
    PreparedStatement login = null; 
    PreparedStatement candidateLogin = null;
    ResultSet results = null;
       
    public static boolean value = false;
    
    public void getUser(){
        try{
      javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
      
          try{
              connection = ds.getConnection(); 
              
          }
          catch(SQLException e){
              e.printStackTrace();
          }
        }
        catch(NamingException e){
            e.printStackTrace();
            
        }
        try{
            
      
         
        login = connection.prepareStatement("SELECT * FROM administrator WHERE administrator.UserName =? and administrator.Password=? ");
   }
            catch (SQLException e){
               e.printStackTrace();
            }   
    }
    
   
     
    public int checkUser(String matric,String password){
           try{
         javax.naming.InitialContext ctx = new javax.naming.InitialContext();
         javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
         connection = ds.getConnection(); 
         candidateLogin = connection.prepareStatement("SELECT matric, password from candidatedata where matric =? and password =?");
         candidateLogin.setString(1, matric);
         candidateLogin.setString(2, password);
        
         results = candidateLogin.executeQuery();
         while(results.next()){
             
             return 1;
         }
         
         
          
         return 0;
           }
          catch(SQLException | NamingException e){
          }
           finally{
               try{
               if(results != null)
                   results.close();
               if(connection != null)
                   connection.close();
               }
               catch(SQLException e){
                   e.printStackTrace();
               }
               
           }
        
        return 0;
    }
    
    public static  boolean getValue(){
        return value;
    }
    public void verify(String userName,String password){
        
        
        
        try{
            login.setString(1, userName);
             login.setString(2, password);
             
            results = login.executeQuery();
            if(results.next()){
                System.out.println("correct");
          value = true;
            }
        }
        
        
        catch(SQLException e){
           e.printStackTrace();
        }
        
        finally{
            try{
            if(results!=null)
               results.close();
            if(connection!=null)
               connection.close();
            
            }
            catch(SQLException e){
               e.printStackTrace();
                       
            }
        }
    }
}
