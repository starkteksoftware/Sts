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
import java.util.ArrayList;
import javax.naming.NamingException;

/**
 *
 * @author bola odesile
 */
public class ExamStatus {
   Connection connection = null;
    ResultSet results = null;
    boolean completeStudent = false;
     boolean missedStudent = false;
      boolean completeExam = false;
       boolean missedExam = false;
       boolean AllMissedExam = false;
    PreparedStatement getExamDetails = null;
    public void getCompletedStudent(){
        
        try{
          javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
                   connection = ds.getConnection(); 

 
         Exam.getCompletedExamStatus = connection.prepareStatement("SELECT * FROM examstatus WHERE status =3 AND matric =?");
              getExamDetails = connection.prepareStatement("SELECT * FROM activeexam WHERE ExamName=?");
              
                
       completeStudent = true;
        }
        catch(SQLException | NamingException e){
          e.printStackTrace();
        }
    }
    
    
    
     public void getMissedStudent(){
        
        try{
                javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
                   connection = ds.getConnection(); 

    Exam.getMissedExamStatus = connection.prepareStatement("SELECT * FROM examstatus WHERE status =0 AND matric =?");
            getExamDetails =  connection.prepareStatement("SELECT * FROM activeexam WHERE ExamName=?");
        missedStudent = true;    
         
         
        }
        catch(SQLException | NamingException e){
            
          e.printStackTrace();
        }
    }
     
      public void getCompletedExam(){
        
        try{
                javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
                   connection = ds.getConnection(); 

            
       Exam.getCompletedExamStatus =  connection.prepareStatement("SELECT * FROM examstatus WHERE Status =3 AND examName =?");
                 
         completeExam = true;
        }
        catch(SQLException | NamingException e){
          e.printStackTrace();
        }
    }
      
      
       public void getMissedExam(){
        
        try{
            
                javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
                   connection = ds.getConnection(); 
 
       Exam.getCompletedExamStatus = connection.prepareStatement("SELECT * FROM examstatus WHERE status =0 AND examName=?");
               missedExam = true; 
               
         
        }
        
        catch(SQLException | NamingException e){
          e.printStackTrace();
        }
    }
    
       
       public void getAllMissedExam(){
        
        try{
            
                javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
                   connection = ds.getConnection(); 

       Exam.getAllMissedStudents =  connection.prepareStatement("SELECT * FROM examstatus WHERE status =0 ");
               AllMissedExam = true; 
         
        }
        
        catch(SQLException | NamingException e){
          e.printStackTrace();
        }
    }
    
       
       public String returnQuery(String matric) throws SQLException{
           ArrayList<String> getData;
           StringBuilder builder = new StringBuilder();
          
           try{
           if(completeStudent){
               getData = new ArrayList<>();
               Exam.getCompletedExamStatus.setString(1, matric);
            results = Exam.getCompletedExamStatus.executeQuery();
              
              
              while(results.next()){
                
                  getData.add(results.getString("examName"));
                  
              }
              
              
              for(int c = 0; c < getData.size(); c++){
                
          getExamDetails.setString(1,getData.get(c));
        ResultSet resultSet =  getExamDetails.executeQuery();
        while(resultSet.next()){
           builder.append("#");
             
           builder.append(resultSet.getString("ExamName").concat(","));
            builder.append(resultSet.getString("ScheduleDateTime").concat(","));
              builder.append(resultSet.getString("RegisteredCandidates").concat(","));
                builder.append(resultSet.getString("Duration"));
        }
        
              }
           }
           if(missedStudent){
               
               getData = new ArrayList<>();
                Exam.getMissedExamStatus.setString(1, matric);
              results = Exam.getMissedExamStatus.executeQuery();
                while(results.next()){
                
                  getData.add(results.getString("examName"));
                    
                }
                 for(int c = 0; c < getData.size(); c++){
                
          getExamDetails.setString(1,getData.get(c));
          ResultSet resultSet =  getExamDetails.executeQuery();
           while(resultSet.next()){
           builder.append("#");
             
             builder.append(resultSet.getString("ExamName").concat(","));
              builder.append(resultSet.getString("ScheduleDateTime").concat(","));
              builder.append(resultSet.getString("RegisteredCandidates").concat(","));
                builder.append(resultSet.getString("Duration"));
                System.out.println(builder+" in missed Exams");
        }
        
              }
           }
           if(completeExam){
               
           }
           if(missedExam){
               
           }
           
           if(AllMissedExam){
               
           }
           }
           catch(SQLException e){
              e.printStackTrace();
           }
         finally{
                try{
                if(connection!= null){
                    if(results != null){
                        results.close();
                   
                         
                    }
                    connection.close();
                    
                }
                }
                catch(SQLException e){
                    e.printStackTrace();
                }
            }
           
           
           
           return new Gson().toJson(builder.toString()); 
           
          
           
       }
    
    
}
//getAllMissedStudents 