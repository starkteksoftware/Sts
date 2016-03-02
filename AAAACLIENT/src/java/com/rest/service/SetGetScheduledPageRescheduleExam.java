/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.service;

import static com.rest.service.Exam.URL;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import javax.naming.NamingException;

/**
 *
 * @author bola odesile
 */
public class SetGetScheduledPageRescheduleExam {
   Connection connection = null;
     public void setActiveExams(){
       
         
         
        
           try{
             javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
                   connection = ds.getConnection(); 


        
      Exam.updateOngoingExamTable = connection.prepareStatement("SELECT * FROM activeexam WHERE Status=0 ORDER BY ExamName");
        }
            catch(SQLException | NamingException e){
               e.printStackTrace();
            } 
    }
    
     
     
     
     public void setCurrentExams(){
       
        
           try{
            
         javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
                   connection = ds.getConnection(); 


      Exam.updateOngoingExamTable = connection.prepareStatement("SELECT * FROM activeexam WHERE Status=0 And ExamName=?");
      
         }
            catch(SQLException | NamingException e){
               e.printStackTrace();
            } 
    }
    
    public void getActiveExam(){
       
        
        
        List results = null;
      ResultSet resultSet = null;
        StringBuilder result = new StringBuilder();
        // executeQuery returns ResultSet containing matching entries
           
        try{
         resultSet =  Exam.updateOngoingExamTable.executeQuery(); 
        // results = new ArrayList< Person >();
         
         while ( resultSet.next() )
         {
          StringBuilder builder = new StringBuilder();
          builder.append("#");
             
           builder.append(resultSet.getString("ExamName").concat(","));
           
            builder.append(resultSet.getString("ScheduleDateTime").concat(","));
            builder.append(resultSet.getString("time").concat(","));
            
            builder.append(resultSet.getString("RegisteredCandidates").concat(","));
        
            builder.append(resultSet.getShort("Duration"));
             
     result.append(builder);
     
        } // end while
        Exam.examTable = result.toString();
            
            
      } // end try
      catch ( SQLException sqlException )
      {
         sqlException.printStackTrace();         
      } // end catch
      finally
      {
         try 
         {
          
              if(resultSet!= null)
            resultSet.close();
              
              if(connection != null)
                 connection.close();
               
         } // end try
         catch ( SQLException sqlException )
         {
            sqlException.printStackTrace();         
            
         } // end catch
      } // end finally
       
        
    }
    
    
    public void getQueryStatus(String subject){
       
        
        
        List results = null;
      ResultSet resultSet = null;
        StringBuilder result = new StringBuilder();
        // executeQuery returns ResultSet containing matching entries
           
        try{
            //
            Exam.updateOngoingExamTable.setString(1, subject);
            
         resultSet =  Exam.updateOngoingExamTable.executeQuery(); 
        // results = new ArrayList< Person >();
         
         while ( resultSet.next() )
         {
          StringBuilder builder = new StringBuilder();
          builder.append("#");
             
           builder.append(resultSet.getString("ExamName").concat(","));
            builder.append(resultSet.getString("ScheduleDateTime").concat(","));
                 builder.append(resultSet.getString("time").concat(","));
         
            builder.append(resultSet.getString("RegisteredCandidates").concat(","));
                 builder.append(resultSet.getString("FeedBack").concat(","));
              builder.append(resultSet.getString("Amount").concat(","));
            
            builder.append(resultSet.getShort("Duration"));
            
             
     result.append(builder);
     
        } // end while
        Exam.examTable = result.toString();
            
            
      } // end try
      catch ( SQLException sqlException )
      {
         sqlException.printStackTrace();         
      } // end catch
      finally
      {
         try 
         {
            resultSet.close();
         } // end try
         catch ( SQLException sqlException )
         {
            sqlException.printStackTrace();         
            
         } // end catch
      } // end finally
       
        
    }
    
}
