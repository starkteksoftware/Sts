/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.service;
  
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import javax.mail.MessagingException;
import javax.naming.NamingException;

/**
 *
 * @author user
 */
public class AdministratorForgotPassword {

     
    Connection connection = null;
    PreparedStatement getPassword = null;
    ResultSet result;
    boolean contains = false;
    
    
    public String getPassword(String email){
        try{
          javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
        connection = ds.getConnection();
        getPassword = connection.prepareStatement("SELECT * FROM administrator WHERE email=?");
        
        
        getPassword.setString(1, email);
        result = getPassword.executeQuery();
        String password = "";
       
        while(result.next()){
            contains = true;
            password = result.getString("password");
            
            
        }
        if(password.length() > 1){
            try{
           StudentResourceMailSendReciever.mailsend( password, email, " STS Email Retrieval Request","Your pasasword is ");
           
           
            }
            catch(  MessagingException   e){
                
                return "Please Connect to the Internet";
            }
           
        }
        }
        catch(NamingException | SQLException e){
           e.printStackTrace();
        }
        
         finally{
            try{
                if(result!=null)
                 result.close();
                if(connection!=null)
                 connection.close();
                 
            }
            catch(SQLException e){
               e.printStackTrace();
            }
                 }
      
         if(contains){
           return "true";  
         }
         else{
           return "false";  
           
         }
         
        
        
    }
}
    

