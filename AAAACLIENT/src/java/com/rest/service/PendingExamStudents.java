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
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Set;
import javax.naming.NamingException;

/**
 *
 * @author bola odesile
 */
public class PendingExamStudents {
    
    
    
     Connection connection;
    PreparedStatement pendingStudents= null;
     ResultSet resultSet = null;
    HashMap<String, String> regStuds = new LinkedHashMap<>();
        HashMap<String, String> namesAndId = new LinkedHashMap<>();
    
    
    
    public void startQuery(){
      try{
                   javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
                   connection = ds.getConnection(); 


  
       pendingStudents = connection.prepareStatement("SELECT * FROM examstudenttable INNER JOIN newstudenttable ON examstudenttable.matric=newstudenttable.StudentNumber WHERE ExamName=?");
   }
         
       catch (SQLException | NamingException e){
               e.printStackTrace();
            } 
        
}
    
    public String getQueryResults(ArrayList<String > exams) {
       
        StringBuilder result = new StringBuilder();
        // executeQuery returns ResultSet containing matching entries
        
        
      for(int c = 0; c < exams.size(); c++){
        try{
            
            pendingStudents.setString(1, exams.get(c));
          resultSet = pendingStudents.executeQuery(); 
       while (  resultSet.next() )
         {
          StringBuilder builder = new StringBuilder();
          builder.append("#");
            String concat = ""; 
         
            concat+= resultSet.getString("LastName").concat(" ");
            concat+=resultSet.getString("FirstName").concat(",");
            builder.append(concat);
     
             builder.append( exams.get(c)).append(",");
          if(Exam.loggedIn.containsKey(resultSet.getString("StudentNumber")))
             builder.append("active,");
         else   builder.append("inactive,");
            
          
            builder.append(resultSet.getString("StudentNumber"));
           
             namesAndId.put(resultSet.getString("StudentNumber"), concat);
             
            
            if(regStuds.containsKey(resultSet.getString("StudentNumber"))){
                String value = regStuds.get(resultSet.getString("StudentNumber"));
                if(!value.contains(exams.get(c)))
                value+="<li>"+exams.get(c)+"</li>";{
                regStuds.put(resultSet.getString("StudentNumber"), value);}
            }
            else{
                regStuds.put(resultSet.getString("StudentNumber"), "<ol><li>"+exams.get(c)+"</li>");
                
            }
            
             
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
     Set<String> keys = regStuds.keySet();
     StringBuilder candidates = new StringBuilder();
     for(String ss :keys){
         if(namesAndId.containsKey(ss))
     candidates.append("#").append(namesAndId.get(ss));
         
         candidates.append(regStuds.get(ss)).append("</ol>").append(",");
          if(Exam.loggedIn.containsKey(ss))
             candidates.append("active,");
         else   candidates.append("inactive,");
            
            candidates.append(ss);
     }
      return  new Gson().toJson(candidates);  
      
      
      
      
      
          
        
}
    
    
    public void closeConnection(){
    
           try{
               if(resultSet!= null)
                 resultSet.close();
                   
               
                if(connection!= null)
                    connection.close();
                  }
                catch(SQLException e){
                    e.printStackTrace();
                }
    }
}

 
