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
public class RegisteredStudents {
    
 Connection connection;
    PreparedStatement registered = null;
     ResultSet resultSet = null;
  
  
     
     public void startQuery(){
         try{
            
          try{   
 Class.forName("com.mysql.jdbc.Driver");
       }
       catch(Exception e){
          e.printStackTrace();
       }
          javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
                   connection = ds.getConnection(); 
      registered = connection.prepareStatement("SELECT * FROM examstudenttable INNER JOIN newstudenttable ON examstudenttable.matric=newstudenttable.StudentNumber WHERE ExamName=?");
 }
            catch (SQLException | NamingException  e){
               e.printStackTrace();
            } 
     }
     
     
      public String getQueryResults(ArrayList<String> exams) {
      
           StringBuilder result = new StringBuilder();
        // executeQuery returns ResultSet containing matching entries
        
        
      for(int c = 0; c < exams.size(); c++){
        try{
            
             registered.setString(1, exams.get(c));
          resultSet = registered.executeQuery(); 
        // results = new ArrayList< Person >();
         
         while (  resultSet.next() )
         {
          StringBuilder builder = new StringBuilder();
          builder.append("#");
            String concat = ""; 
         
            concat+= resultSet.getString("LastName").concat(" ");
            concat+=resultSet.getString("FirstName").concat(",");
            builder.append(concat);
        
             
           builder.append(resultSet.getString("Gender")).append(",");
         
          
            builder.append(resultSet.getString("StudentNumber"));
           
            
            
            
             
     result.append(builder);
     
        } // end while
     // registeredExamStudent = result.toString();
        
            
          
            
      } // end try
      catch ( SQLException sqlException )
      {
         sqlException.printStackTrace();         
      } // end catch
      }
      
       closeConnection();
        
       return  new Gson().toJson(result);  
          
          
         
          
      }
      
      
      public void closeConnection(){
          try{
              if(resultSet!= null)
             resultSet.close();
               
                if(connection!= null)
                  connection.close();
                 
                    
          }
          catch(SQLException e){
              e.getMessage();
          }
      }
}
