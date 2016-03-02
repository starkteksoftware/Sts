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
public class StudentResourceVerification {
   Connection connection = null;
    PreparedStatement checkUser = null;
    PreparedStatement getMatric = null;
    PreparedStatement getName = null;
    
       
     
    public String verify(String matric,String password){
    System.out.println("Start up verify candidate");
        
    
    try{
       javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
        connection = ds.getConnection();
    }
    catch(NamingException | SQLException e ){
        e.printStackTrace();
    }
    
          try{
            
        checkUser =connection.prepareStatement("SELECT * FROM candidatedata WHERE email=? AND password =? OR matric =? AND password=?");
         getMatric = connection.prepareStatement("SELECT * FROM candidatedata WHERE email =? ");
           getMatric = connection.prepareStatement("SELECT * FROM candidatedata WHERE matric =? ");
         getName = connection.prepareStatement("SELECT * FROM newstudenttable WHERE studentNumber=?");
          
            
          
          
         
         checkUser.setString(1, matric.toLowerCase());
         checkUser.setString(2, password);
         checkUser.setString(3, matric.toLowerCase());
         checkUser.setString(4, password);
          String matriculationNumber = "";
              StringBuilder name = new StringBuilder();
              ResultSet result = checkUser.executeQuery();
              String inst = "";
              boolean user = false;
              while(result.next()){
                  
                  
                  user = true;
                  inst = result.getString("institution");
              }

          if(user){
              if(matric.contains("@") && matric.contains(".")){
                  getMatric.setString(1, matric);
                  
                  ResultSet resultMatric = getMatric.executeQuery();
                 
                  while(resultMatric.next()){
                      matriculationNumber = resultMatric.getString("matric");
                      getName.setString(1, matriculationNumber);
                      
                     ResultSet res =   getName.executeQuery();
                     while(res.next()){
                        name.append(res.getString("LastName")).append("#").append(res.getString("FirstName"));//.append("#").append(res.getString("institution"));
                        
                    
                         
                         
                        
                     }
                      
                  }
              }
              else{
                 
                       getName.setString(1, matric);
                      
                     ResultSet res =   getName.executeQuery();
                     while(res.next()){
                        name.append(res.getString("LastName")).append("#").append(res.getString("FirstName"));//.append("#").append(res.getString("institution"));
                 
                  }
              }
              
              System.out.println(matriculationNumber +name.toString());
              
              return matriculationNumber+"#"+name.toString()+"#"+inst;
              
              
              
          }
          else{
              return "false";
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
         
          return "";
    
}
}
