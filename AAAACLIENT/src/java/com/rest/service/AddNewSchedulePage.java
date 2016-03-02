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

/**
 *
 * @author bola odesile
 */
public class AddNewSchedulePage {
    
   Connection connection = null;
      
    
      ResultSet resultSet = null;
    public void scheduleExam(){
      
        try{
            
          try{   
 Class.forName("com.mysql.jdbc.Driver");
 
             javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
                   connection = ds.getConnection(); 
       }
       catch(Exception e){
          e.printStackTrace();
       }
        
      Exam.examScheduler =  connection.prepareStatement(" SELECT Subject FROM examstable ORDER BY Subject ASC");
   
           
            }
            catch(SQLException e){
               e.printStackTrace();
            }   
        
    }
    
    public void scheduleExamResults(){
       
        StringBuilder result = new StringBuilder();
        // executeQuery returns ResultSet containing matching entries
           
        try{
         resultSet =  Exam.examScheduler.executeQuery(); 
        // results = new ArrayList< Person >();
         
         while ( resultSet.next() )
         {
           
     result.append( resultSet.getString("Subject").concat(","));
     
        } // end while
         Exam.examsSchedule = result.toString();
         
      } // end try
      catch ( SQLException sqlException )
      {
         sqlException.printStackTrace();         
      } // end catch
    
          finally{
                try{
                if(connection!= null){
                    resultSet.close();
                    
                            
                    connection.close();
                    
                }
                }
                catch(SQLException e){
                    e.printStackTrace();
                }
            }
    }
    
}
