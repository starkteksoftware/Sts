/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.service;

import java.net.URL;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import javax.naming.NamingException;

 

/**
 *
 * @author bola odesile
 */
public class ChangeExamState {
    Connection connection = null;
     public void changeExamStateNow(){
        try{
             javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
                   connection = ds.getConnection(); 
       Exam.changeExamState  = connection.prepareStatement("UPDATE activeexam SET Status=1"+
         " WHERE ExamName=?");
       }
            catch(SQLException | NamingException e){
               e.printStackTrace();
            }   
           
    }
     //method sets exam to 2 for taken exams
      public void changeExamStateEnd(){
      
  try{
             javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
                   connection = ds.getConnection(); 
 Exam.changeExamState  =  connection.prepareStatement("DELETE FROM  activeexam "+
         " WHERE ExamName=?");
 Exam.removeRegisteredStudents = connection.prepareStatement("DELETE  FROM  examstudenttable WHERE ExamName=? ");
   }
            catch(SQLException | NamingException e){
               e.printStackTrace();
            }   
          
   
    }
       
      
         public void changeExamStateCancel(){
       try{
             javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
                   connection = ds.getConnection(); 
   Exam.changeExamState  =  connection.prepareStatement("UPDATE activeexam SET Status=0 "+
         " WHERE ExamName=?");
 
    
// removeRegisteredStudents = connection.prepareStatement("DELETE  FROM examstudenttable  WHERE ExamName=? ");
  }
            catch(SQLException | NamingException e){
               e.printStackTrace();
            }   
            
    }
    
    
    public void confirmStateChange(String exam){
      try 
      {
        
          System.err.println( "deleted"+exam);
          Exam.changeExamState.setString(1, exam );
          Exam.changeExamState.executeUpdate();
   } // end try
      catch ( SQLException sqlException )
      {
         sqlException.printStackTrace();         
      } // end catch
     // end finally
        finally{
          closeConnection();
           
      }
    }
    
      public void closeConnection(){
                try{
                if(connection!= null)
                    connection.close();
                }
                catch(SQLException e){
                    e.printStackTrace();
                }
            
    }
}
