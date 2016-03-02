/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.service;

import com.google.gson.Gson;
 
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;


import java.util.HashMap;
import java.util.Set;

/**
 *
 * @author bola odesile
 */
public class AddNewExam {
    
 Connection connection = null;
     public void insertExam(){
        
         
         System.out.println("control exam add : 1");
        
        
         
             
          try{   
 Class.forName("com.mysql.jdbc.Driver");
  
             javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
                   connection = ds.getConnection(); 
            
       }
       catch(Exception e){
          e.printStackTrace();
       }
              try{
     Exam.insertActiveExam = connection.prepareStatement("INSERT INTO activeexam(examname,scheduledatetime,time,status,"+
              "registeredcandidates,feedback,duration,amount) VALUES(?,?,?,0,0,?,?,?);");
    //   getQuestions.executeQuery();
           
         
     
         
           
            }
            catch(SQLException e){
               e.printStackTrace();
            } 
    }
    
     
       public void insertExamStart(){
        
         
         System.out.println("control exam add new method : 1");
        
        
         
             
          try{   
 Class.forName("com.mysql.jdbc.Driver");
  
             javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
                   connection = ds.getConnection(); 
            
       }
       catch(Exception e){
          e.printStackTrace();
       }
              try{
     Exam.insertActiveExam = connection.prepareStatement("INSERT INTO activeexam(examname,scheduledatetime,time,status,"+
              "registeredcandidates,feedback,duration,amount) VALUES(?,?,?,1,0,?,?,?);");
    //   getQuestions.executeQuery();
           
         
     
         
           
            }
            catch(SQLException e){
               e.printStackTrace();
            } 
    }
    
     
     public void updateAddNewExam(){
              System.out.println("control exam add : 22");
        
          try{
            
          try{   
 Class.forName("com.mysql.jdbc.Driver");
       }
       catch(Exception e){
          e.printStackTrace();
       }
        
      Exam.updateAddNewExamInDb = connection.prepareStatement("UPDATE activeexam SET scheduledatetime=?,time=?,feedback=?,duration=?,amount=? where examName=?");
       }
            catch(SQLException e){
               e.printStackTrace();
            } 
     }
     
      public String returnUpdateQuery(String question,String scheduleDate,String time,String duration,String feedback,String amo){
            try{
     
              
    DateFormat dated = new SimpleDateFormat("yyyy-MM-dd");
    
    
    
                Date dates = dated.parse(scheduleDate);
  
   java.sql.Date sqlDate = new java.sql.Date(dates.getTime());
           Exam.updateAddNewExamInDb.setDate(1,sqlDate);
            Exam.updateAddNewExamInDb.setString(3, feedback );
        short sc=  Short.parseShort(duration);
         java.sql.Time myTime = java.sql.Time.valueOf(time);
  
           Exam.updateAddNewExamInDb.setTime(2, myTime);
             Exam.updateAddNewExamInDb.setShort(4, sc);
               Exam.updateAddNewExamInDb.setInt(5, Integer.parseInt(amo));
               Exam.updateAddNewExamInDb.setString(6, question);
               
             
       int result =  Exam.updateAddNewExamInDb.executeUpdate();
       
       if(result >=0){
           return new Gson().toJson( question +"was successfull updated.... view added exams in schedule exams page");
       }
       else{
           return new Gson().toJson("Error...please reschedule exam");
       }
             
            }
            catch(NumberFormatException | SQLException |ParseException  e){
                return new Gson().toJson("Error "+e.getMessage());
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
    public String runInsertExamQuery(String question,String scheduleDate,String time,String duration,String feedback,String amo){
       try 
      {
      DateFormat dated = new SimpleDateFormat("yyyy-MM-dd");
   
      
    
                Date dates = dated.parse(scheduleDate);
  
   java.sql.Date sqlDate = new java.sql.Date(dates.getTime());
          Exam.insertActiveExam.setString(1, question );
           Exam.insertActiveExam.setDate(2, sqlDate);
                   java.sql.Time myTime = java.sql.Time.valueOf(time);
  
             Exam.insertActiveExam.setTime(3, myTime);
             
            Exam.insertActiveExam.setString(4, feedback );
        short sc=  Short.parseShort(duration);
             Exam.insertActiveExam.setShort(5, sc);
             
             Exam.insertActiveExam.setInt(6, Integer.parseInt(amo));
             
       int result =  Exam.insertActiveExam.executeUpdate();
       if(result >= 0){
               return new Gson().toJson( question +" was successfull added.... click   <a href='SchedulePage.html'><i class=' icon-arrow-right'></i></a>   to view exam");
     
       }
       else{
           return new Gson().toJson("Error...please reschedule exam");
       }
             
        
      } // end try
    catch(NumberFormatException | SQLException | ParseException e){
           return new Gson().toJson("Error: "+e.getMessage());
            }// end catch
     // end finally
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
            public String runInsertExamQueryAdvanced(String question,String scheduleDate,String time,String duration,String feedback,String amo){
       try 
      {
      DateFormat dated = new SimpleDateFormat("yyyy-MM-dd");
   
      
    
                Date dates = dated.parse(scheduleDate);
  
   java.sql.Date sqlDate = new java.sql.Date(dates.getTime());
          Exam.insertActiveExam.setString(1, question );
           Exam.insertActiveExam.setDate(2, sqlDate);
                   java.sql.Time myTime = java.sql.Time.valueOf(time);
  
             Exam.insertActiveExam.setTime(3, myTime);
             
            Exam.insertActiveExam.setString(4, feedback );
        short sc=  Short.parseShort(duration);
             Exam.insertActiveExam.setShort(5, sc);
             
             Exam.insertActiveExam.setInt(6, Integer.parseInt(amo));
             
       int result =  Exam.insertActiveExam.executeUpdate();
       if(result >= 0){
               return new Gson().toJson( question+" inserted true .");
     
       }
       else{
           return new Gson().toJson("Error...please reschedule exam");
       }
             
        
      } // end try
    catch(NumberFormatException | SQLException | ParseException e){
           return new Gson().toJson("Error: "+e.getMessage());
            }// end catch
     // end finally
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
    
    
    
    
      public String runInsertExamQuery(HashMap<String,ExamScheduler> map){
         System.out.println("insert db "+map.size());
            Set<String> keys = map.keySet();
         for(String lookUp : keys){
             
             if(lookUp == null)
               continue;
             
            if(lookUp.length() < 1)
                continue;
            
           
       String exam=  map.get(lookUp).getExamName();
       String examDate=  map.get(lookUp).getExamDate();
       String examTime=  map.get(lookUp).getExamTime();
       String durationMinutes = map.get(lookUp).getDurationInMinutes();
       String amountOfQuestions = map.get(lookUp).getAmountOfQuestions();
       String feedBack=  map.get(lookUp).getFeedBack();
        
         try 
      {
     
          Exam.insertActiveExam.setString(1,exam );
           Exam.insertActiveExam.setString(2, examDate);
            Exam.insertActiveExam.setString(3, feedBack );
          short sc=  Short.parseShort(examTime);
             Exam.insertActiveExam.setShort(4, sc);
             
             Exam.insertActiveExam.setInt(5, Integer.parseInt(amountOfQuestions));
             
             Exam.insertActiveExam.executeUpdate();
             
        
      } // end try
      catch ( SQLException sqlException )
      {
         sqlException.printStackTrace();         
      } // end catch
     // end finally
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
         
           
          return "";
          
     }
    
}
