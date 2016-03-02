/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.service;

import static com.rest.service.Exam.URL;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import javax.naming.NamingException;

/**
 *
 * @author bola odesile
 */
public class Status {
      Connection connection;
    PreparedStatement changeExamState = null;
    PreparedStatement  removeRegisteredStudents = null;
    
    private String results;
   public void changeExamStateNow(){
        
 
       
       
        
          try{
             javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
                   connection = ds.getConnection(); 


       
    changeExamState  = connection.prepareStatement("UPDATE activeexam SET Status=1"+
         " WHERE ExamName=?");
   
   
     }
            catch(SQLException | NamingException e){
               e.printStackTrace();
            }   
        
        
            
    }
   
   
   public void changeExamStateEnd(){
        
 
        
          try{
             javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
                   connection = ds.getConnection(); 


        
 changeExamState  = connection.prepareStatement("DELETE FROM  activeexam "+
         " WHERE ExamName=?");
 removeRegisteredStudents = connection.prepareStatement("DELETE  FROM  examstudenttable WHERE ExamName=? ");
 
   
   
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


     
    changeExamState  = connection.prepareStatement("UPDATE activeexam SET Status=0 "+
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
         changeExamState.setString(1, exam );
            changeExamState.executeUpdate();
             
           
        
      } // end try
      catch ( SQLException sqlException )
      {
         sqlException.printStackTrace();         
      } // end catch
     // end finally
        
    }
    
    public void removeStudents(String exam){
           try 
      {
        
         
           removeRegisteredStudents.setString(1, exam );
           
             removeRegisteredStudents.executeUpdate();
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
    
}
