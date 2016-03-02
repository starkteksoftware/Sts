/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.service;

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
public class GetActiveStudents {
     Connection  connection = null;
    ResultSet resultSet = null;
 
    public void getActiveStudentsStatements(){
         
          try{
                javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
                   connection = ds.getConnection(); 




 Exam.getActiveStudents =  connection.prepareStatement("SELECT * FROM activeexamstudents where matric = ? And ExamName = ?");
  
          }
            catch(SQLException | NamingException e){
               e.printStackTrace();
            }   
        
        
    }
    
      
       public void getActiveStudentsQuery(String matric,String examName){
          
      
        StringBuilder result = new StringBuilder();
        // executeQuery returns ResultSet containing matching entries
        
        
           
        try{
              Exam.getActiveStudents.setString(1, matric);
              Exam.getActiveStudents.setString(2, examName);
              System.out.println(matric +" examName"+examName);
         resultSet = Exam.getActiveStudents.executeQuery(); 
        // results = new ArrayList< Person >();
         int status;
         
         
         while ( resultSet.next() )
         {
          StringBuilder builder = new StringBuilder();
          builder.append("#");
             
      //     builder.append(resultSet.getString("matric").concat(","));
           
            status =   resultSet.getInt("Status");
            
            
            
            if(status == 1 ){
               if(resultSet.getString("Data").contains("time")){
                    System.err.println(" i have time in me");
           builder.append(resultSet.getString("Data"));  
            result.append(builder);
            
                break;
                }
                else{
                      System.err.println(" i have no time in me");
                    builder.append(resultSet.getString("Data")); 
                     result.append(builder);
                }
           
            }
            else{
             builder.append("false");   
              result.append(builder);
            }
            
             System.err.println(builder +"actives");
             
    
     break;
     
     
        } // end while
     Exam.activeStudents = result.toString();
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
           
                if(connection!= null)
                    connection.close();
                
         } // end try
         catch ( SQLException sqlException )
         {
            sqlException.printStackTrace();         
            
         } // end catch
      } // end finally
       
       
       }
}
