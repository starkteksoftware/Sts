/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.service;

import com.google.gson.Gson;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import javax.naming.NamingException;

/**
 *
 * @author user
 */
public class StudentRegistration {
    Connection connection = null;
    PreparedStatement registration = null;
    PreparedStatement selectAllStudents = null;
    
     
     
    
    public String startRegistration(String email,String password,String lastName,String firstName,String middleName,String institutuion,String mobileNumber,String gender,String dob){
       System.out.println("control exam add in student resource: 1");
        
          try{
                     try{
       javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
        connection = ds.getConnection();
    }
    catch(NamingException | SQLException e ){
        e.printStackTrace();
    }
       
  connection.setAutoCommit(false);
         
  
   
   
   
         
      registration = connection.prepareStatement("INSERT INTO candidatedata (email,password,lastName,firstName,"+
              "middleName,institution,mobileNumber,gender,dob,matric) VALUES(?,?,?,?,?,?,?,?,?,?);");
      
      selectAllStudents = connection.prepareStatement("SELECT * FROM candidatedata");
      
        ResultSet resultSet = selectAllStudents.executeQuery();
      int counter = 0; 
         
          while(resultSet.next()){
            counter++;
            
          }
            String matric = String.format("%07d", ++counter);
            
           
      registration.setString(1, email.toLowerCase());
      
       
      registration.setString(2, password);
      registration.setString(3, lastName);
      registration.setString(4, firstName);
      registration.setString(5, middleName);
      registration.setString(6, institutuion);
      registration.setString(7, mobileNumber);
      registration.setString(8, gender);
      registration.setString(9, dob);
      registration.setString(10, matric);
      
      int result = registration.executeUpdate();
      
      if(result == 0 || result > 0){
         
          
          
          
          InsertStudentsDatabaseQueryXcelSheet insert = new InsertStudentsDatabaseQueryXcelSheet();
          insert.createPreparedStatement();
          
        
            System.out.println("inserting into table "+firstName +" "+lastName +" "+matric);
            
        
        String results =insert.returnStatusQuery(firstName, lastName, middleName, gender, matric);
         
        connection.commit();
         
         return  new Gson().toJson("matric:"+matric);
         
          
         
         
          
          
          
          
      }
      else{
          connection.rollback();
           
             return new Gson().toJson("error ");
              
             
          
      }
      
          }
          catch(SQLException e){
              e.printStackTrace();
               
               
          }
          finally{
              try{
                  if(connection != null)
                      connection.close();
              }
              catch(SQLException e){
                e.printStackTrace();
                
              }
          }
          
          
          return new Gson().toJson("Failed to return");
          
}
    
}
