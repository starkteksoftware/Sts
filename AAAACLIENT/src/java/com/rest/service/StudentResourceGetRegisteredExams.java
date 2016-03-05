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
public class StudentResourceGetRegisteredExams {
    
    
    Connection connection = null;
    PreparedStatement getExams = null;
    PreparedStatement getAttempts = null;
    
    ResultSet result;
    StringBuilder appender;
      public String createExams(String matric,String exam,String type,String num){
        
                   try{
       javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
        connection = ds.getConnection();
       getExams = connection.prepareStatement("SELECT * FROM activeexam where examName IN (select examName from examstudenttable where matric = ? AND examName LIKE ? AND type=? )");
         getAttempts = connection.prepareStatement("SELECT * FROM results where matric=? AND courseId =? AND type=?");
          System.out.println(matric +" "+exam +" "+type);
                       
         getExams.setString(1, matric);
         getExams.setString(2, "%"+exam+"%");
         getExams.setString(3, type);
         
         
      result = getExams.executeQuery();
      appender = new StringBuilder();
     
     while(result.next()){
      
          appender.append("#").append(result.getString("ExamName")).append(",");
           getAttempts.setString(1, matric);
           getAttempts.setString(2, result.getString("ExamName"));
           getAttempts.setString(3, type);
            int count = 1;
            ResultSet getAt = getAttempts.executeQuery();
            while(getAt.next()){
               ++count;
               
            }
            
            System.out.println("count is "+count);
            
         appender.append(result.getString("ScheduleDateTime")).append(",");
          appender.append(result.getString("time")).append(",");
             appender.append(result.getString("Duration")).append(",");
          
           appender.append(result.getString("RegisteredCandidates")).append(",");
           
            
              appender.append(result.getString("Amount")).append(",");
               
         appender.append(count);
          
              
               // appender.append(result.getString("ExamName"));
                
              
           
     }
                       System.err.println("The exams are "+appender.toString());
            if(appender.toString().isEmpty()){
                getExams = connection.prepareStatement("SELECT * FROM activeexam where examName IN (select examName from examstudenttable where matric = ? AND examName LIKE ? AND type=? )");
         getAttempts = connection.prepareStatement("SELECT * FROM results where matric=? AND courseId =? AND type=?");
          System.out.println(matric +" "+exam +" "+type);
                       
         getExams.setString(1, matric);
         getExams.setString(2, "%"+exam+"%");
         getExams.setString(3, num);
         
         
      result = getExams.executeQuery();
      appender = new StringBuilder();
       
       
     while(result.next()){
      
          appender.append("#").append(result.getString("ExamName")).append(",");
           getAttempts.setString(1, matric);
           getAttempts.setString(2, result.getString("ExamName"));
           getAttempts.setString(3, num);
            
            int count = 1;
            ResultSet getAt = getAttempts.executeQuery();
            while(getAt.next()){
               ++count;
               
            }
            
            System.out.println("count is "+count);
            
         appender.append(result.getString("ScheduleDateTime")).append(",");
          appender.append(result.getString("time")).append(",");
             appender.append(result.getString("Duration")).append(",");
          
           appender.append(result.getString("RegisteredCandidates")).append(",");
           
            
              appender.append(result.getString("Amount")).append(",");
               
         appender.append(count);
          
              
               // appender.append(result.getString("ExamName"));
                
              
           
     }  
            }
                       
                       
       return appender.toString();
       
    }
    catch(NamingException | SQLException e ){
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
                           
                       }
                   }
         
          
         return ""; 
      }
    /*
      public static String getStudentsExams(String id,String exam){
           String finalString = "";
    try{
       
          StringBuilder appended = new StringBuilder();
         if(Exam.registeredCourses.containsKey(id)){
            
             String manipulate = Exam.ongoingExam;
             
             
            String [] distrubute  = Exam.registeredCourses.get(id).split(",");
             
             
            
            for(String dis : distrubute){
               
             int index = manipulate.indexOf(dis);
             int second = manipulate.lastIndexOf("#",index);
             
             int third = manipulate.indexOf("#",(second + 1));
             
              
             
             if(third == -1){
                 String sub = manipulate.substring(second,manipulate.length());
            
                 appended.append(sub);
             }
             else{
                 System.out.print(second +" "+third);
                 if(second == -1){
                   String sub = manipulate.substring(0, third);    
                   appended.append(sub);
                 }
                 else{
             String sub = manipulate.substring(second, third);
            // System.out.println("these is it in the new state "+sub);
                 appended.append(sub);
                 }
           
             }
           
            }
             
             
         }
        finalString = appended.toString();      
    }
    catch(StringIndexOutOfBoundsException e){
        e.printStackTrace();
    }
       
       
          System.out.println(finalString);
         
    String [] exactExam =  finalString.split("#");
    for(String ss : exactExam){
        
        String [] furtheSplice = ss.split(",");
        
        for(String ff : furtheSplice){
             if(ff.equals(exam)){
            System.out.println(ss);
            System.out.println("#"+ss);
            
            
            return new Gson().toJson("#"+ss);
            
            
        }
        }
       
    }
      
    
         return new Gson().toJson(finalString);
    }
      */
      
      
}
