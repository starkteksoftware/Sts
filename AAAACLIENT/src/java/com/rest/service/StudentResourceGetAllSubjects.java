/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
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
 * @author user
 */
public class StudentResourceGetAllSubjects {
    
   Connection connection = null;
    PreparedStatement getAllReports = null;
    PreparedStatement getAllUnregisteredSubjects = null;
    
    
    public String sendAllResults(){
        
          System.out.println("control exam add in student resource: 2 getting all the results");
        
          try{
    
           try{
       javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
        connection = ds.getConnection();
    }
    catch(NamingException | SQLException e ){
        e.printStackTrace();
    }
         
      getAllReports = connection.prepareStatement("SELECT * FROM examstable WHERE type > 4 ");
      
      
              ResultSet results = getAllReports.executeQuery();
              StringBuilder resultReturn = new StringBuilder();
             
              
              while(results.next()){
                 resultReturn.append("#").append(results.getString("Subject")).append(",");
                 resultReturn.append(results.getInt("type"));
                 
                
                  
              }
              
              System.out.println("returning the subjects "+resultReturn.toString());
              
              StudentResource.getAllSubjects = resultReturn.toString();
              return resultReturn.toString();
      
          }
          catch(SQLException e){
              e.printStackTrace();
          }
          finally{
              try{
                  
              if(connection!= null){
                  connection.close();
              }
              }
              catch(SQLException e){
                  e.printStackTrace();
                  
              }
          }
        
        return "";
        
    }
    
    
    
    
    
    public String getReturningStudentSubjects(String matric){
        
        
         
           try{
            
               try{
       javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
        connection = ds.getConnection();
    }
    catch(NamingException | SQLException e ){
        e.printStackTrace();
    }
         
                
               
     getAllUnregisteredSubjects = connection.prepareStatement("SELECT * FROM activeexam where status = 1 AND ExamName NOT IN (select examName from examstudenttable where matric = ? )");
     getAllUnregisteredSubjects.setString(1, matric);
     
    ResultSet results = getAllUnregisteredSubjects.executeQuery();
    StringBuilder resultReturn = new StringBuilder();
              while(results.next()){
                 resultReturn.append("#").append(results.getString("ExamName")).append(",");
                 resultReturn.append(results.getString("ScheduleDateTime")).append(",");
                   resultReturn.append(results.getString("time")).append(",");
                     resultReturn.append(results.getString("RegisteredCandidates"));
                     
             }
              System.out.println("returning the subjects "+resultReturn.toString());
              return resultReturn.toString();
              
     
     }
            catch(SQLException e){
               e.printStackTrace();
            }  
           finally{
               try{
               if(connection!= null){
                   connection.close();
               }
               }
               catch(SQLException e){
                   e.printStackTrace();
                   
               }
           }
           
           
        
        
        return "";
        
        
    }
    
    
    
    
}
