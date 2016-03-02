/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.service;

import com.google.gson.Gson;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import javax.naming.NamingException;

/**
 *
 * @author bola odesile
 */
public class AdministratorRights {
   Connection connection = null;
    ResultSet results = null;
    boolean createAdmin = false;
    boolean editAdmin = false;
    boolean deleteAdmin = false;
    boolean confirmAdmin = false;
    boolean updateAdmin = false;
    boolean updateNewAdmin = false;
    boolean editNewAdmin = false;
    
    
     
    
    
    public void createAdmins(){
         try{
        
             javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
                   connection = ds.getConnection(); 
               
          Exam.createAdministrator = connection.prepareStatement("INSERT  INTO administrator(UserName,Password,FirstName,LastName,Email) VALUES (?,?,?,?,?)");
              
           
              
      createAdmin = true;
        }
        catch(SQLException | NamingException e){
          e.printStackTrace();
        }
        
    }
     public void editAdmins(){
        try{
      
            
             javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
                   connection = ds.getConnection(); 
            
         Exam.editAdministrator =  connection.prepareStatement("SELECT * FROM   administrator WHERE UserName =? ");
              
         
              
      editAdmin = true;
      
        }
        catch(SQLException | NamingException e){
          e.printStackTrace();
        }
        
    }
    public void editNewAdmins(){
        try{
      
            
             javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
                   connection = ds.getConnection(); 
            
         Exam.editAdministrator =  connection.prepareStatement("SELECT * FROM   administrator WHERE UserName =? ");
              
         
              
      editNewAdmin = true;
      
        }
        catch(SQLException | NamingException e){
          e.printStackTrace();
        }
        
    }
    
    public void deleteAdmins(){
       try{
    
            
             javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
                   connection = ds.getConnection(); 
           
         Exam.deleteAdministrator = connection.prepareStatement("DELETE * FROM   administrator WHERE UserName =? ");
              
              
      deleteAdmin = true;
      
        }
        catch(SQLException | NamingException e){
          e.printStackTrace();
        }
          
    }
    
    
    
    public void updateAdmins(){
       try{
     
             
             javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
                   connection = ds.getConnection(); 
        Exam.updateAdmin = connection.prepareStatement("UPDATE administrator SET FirstName =?,LastName=?,Email=?,UserName=?,Password=? WHERE UserName = ?");
              
              
        updateAdmin = true;
      
        }
        catch(SQLException | NamingException e){
          e.printStackTrace();
           
        }
            
    }
    public void updateAdmins(String version){
        System.out.println("new version");
       try{
     
             
             javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
        connection = ds.getConnection(); 
        Exam.updateAdmin = connection.prepareStatement("UPDATE administrator SET FirstName =?,LastName=?,Email=?,MiddleName=?, Number=?,Number2=?,Address=?,Address2=?, Initials=?,  Gender=? WHERE UserName = ?");
        updateNewAdmin = true;
      
        }
        catch(SQLException | NamingException e){
          e.printStackTrace();
           
        }
            
    }
    
      
    public void confirmAdmins(){
        
    }
    
    
    public String getAdminQueryResults(String userName,String password,String firstName,String lastName,String email,String user,String middleName,String number,String number2,String address,String address2,String initials,String gender){
    try{
        
        
         if(updateNewAdmin){
             Exam.updateAdmin.setString(1, firstName.replaceAll(",", "&CloseCurlyQuote;"));
           Exam.updateAdmin.setString(2, lastName.replaceAll(",", "&CloseCurlyQuote;"));
            Exam.updateAdmin.setString(3, email.replaceAll(",", "&CloseCurlyQuote;"));
             Exam.updateAdmin.setString(4, middleName.replaceAll(",", "&CloseCurlyQuote;"));
              Exam.updateAdmin.setString(5, number.replaceAll(",", "&CloseCurlyQuote;"));
               Exam.updateAdmin.setString(6, number2.replaceAll(",", "&CloseCurlyQuote;")); 
                Exam.updateAdmin.setString(7, address.replaceAll(",", "&CloseCurlyQuote;"));
                 Exam.updateAdmin.setString(8, address2.replaceAll(",", "&CloseCurlyQuote;"));
                  Exam.updateAdmin.setString(9, initials.replaceAll(",", "&CloseCurlyQuote;"));
                   Exam.updateAdmin.setString(10, gender.replaceAll(",", "&CloseCurlyQuote;"));
                    Exam.updateAdmin.setString(11, userName.replaceAll(",", "&CloseCurlyQuote;"));
                   Exam.updateAdmin.executeUpdate();
               return new Gson().toJson("1:Admin Updated");
            
           
             
         }
        
         
         StringBuilder builder = new StringBuilder();
        
        
        if(createAdmin){
           Exam.createAdministrator.setString(1, userName);
           Exam.createAdministrator.setString(2, password);
           Exam.createAdministrator.setString(3, firstName);
           Exam.createAdministrator.setString(4, lastName);
           Exam.createAdministrator.setString(5, email);
           
       int result =    Exam.createAdministrator.executeUpdate();
       
            System.out.println("the procces has been executed");
            
       if(result == 1){
           return new Gson().toJson("true");
       }
       else{
           System.out.println("error");
          return new Gson().toJson("false"); 
          
       }
        }
        
        if(editNewAdmin){
          Exam.editAdministrator.setString(1, user);
          results = Exam.editAdministrator.executeQuery();
          while(results.next()){
           builder.append("#");
            builder.append(results.getString("UserName")).append(",");
             builder.append(results.getString("Password")).append(",");
             builder.append(results.getString("FirstName")).append(",");
              builder.append(results.getString("LastName")).append(",");
               builder.append(results.getString("Email")).append(",");
                builder.append(results.getString("MiddleName")).append(",");
                 builder.append(results.getString("Gender")).append(",");
                 builder.append(results.getString("Initials")).append(",");
                  builder.append(results.getString("Number")).append(",");
                   builder.append(results.getString("Address")).append(",");
                    builder.append(results.getString("Number2")).append(",");
                     builder.append(results.getString("Address2")).append(",");
                     
               
           }
          
          return new Gson().toJson(builder.toString());
          
        }
        
        
        if(editAdmin){
          Exam.editAdministrator.setString(1, user);
          results = Exam.editAdministrator.executeQuery();
          while(results.next()){
           builder.append("#");
            builder.append(results.getString("UserName")).append(",");
             builder.append(results.getString("Password")).append(",");
             builder.append(results.getString("FirstName")).append(",");
              builder.append(results.getString("LastName")).append(",");
               builder.append(results.getString("Email"));
               
             
             
           }
          
          return new Gson().toJson(builder.toString());
          
          
        }
    
        
        if(deleteAdmin){
            
        }
        
        
        if(updateAdmin){
          Exam.updateAdmin.setString(1, firstName);
           Exam.updateAdmin.setString(2, lastName);
            Exam.updateAdmin.setString(3, email);
             Exam.updateAdmin.setString(4, userName);
              Exam.updateAdmin.setString(5, password);
               Exam.updateAdmin.setString(6, userName);
            
               int result = Exam.updateAdmin.executeUpdate();
               if(result == 1){
                 return new Gson().toJson("true");
               }
               else{
                 return new Gson().toJson("false");  
                 
               }
            
           
           
        }
         
        if( confirmAdmin){
            
        }
    }
    catch(SQLException e){
        System.out.println(e.getMessage());
      return new Gson().toJson("false"); 
        
    }
     finally{
                try{
                    if(results!= null)
                      results.close();
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
