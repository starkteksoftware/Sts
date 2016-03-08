/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.service;

import static com.rest.service.Exam.getQuestions;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import javax.naming.NamingException;

/**
 *
 * @author bola odesile
 */
public class GetAllQuestionsGetAllPeople {
      static Connection connection = null;
    static String getAllQuestions(String exam){
         try{
                javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
                   connection = ds.getConnection(); 


        Exam.getQuestions = connection.prepareStatement("SELECT * FROM examstable WHERE Subject =?");
     }
           
            catch(SQLException | NamingException e){
               e.printStackTrace();
            }  
        
      return "";  
    }
    
    
    
    
    
    
    
    
    static String getAllPeople(String time,String subject,String feed,String amount){
         ResultSet resultSet = null;
     
      try 
      {
          getQuestions.setString(1, subject );
       resultSet = getQuestions.executeQuery(); 
        // results = new ArrayList< Person >();
        while ( resultSet.next() )
         {   
         Exam.questionTypeAndTime = new ArrayList();
            String [] filter = resultSet.getString("Question").split("#question");
            StringBuilder builder = new StringBuilder();
            int count = 0;
            int amoun = Integer.parseInt(amount);
           for(String filt : filter){
                if(count > amoun){
                    break;
                }
                else{
                    if(count != 0){
                 String conc = "#question"+filt;
                    builder.append(conc.replaceAll("FILEX", Exam.ip));
                    }
                    
                }
              count++;
            }
           Exam.questionTypeAndTime.add(builder.toString());
           Exam.questionTypeAndTime.add(resultSet.getString("Type"));
           Exam.questionTypeAndTime.add(time);
           Exam.questionTypeAndTime.add(feed);
           Exam.questionTypeAndTime.add(resultSet.getString("Author"));
           Exam.allExams.put(resultSet.getString("Subject"),   Exam.questionTypeAndTime);
        } // end while
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
             
               if(connection!= null)
                    connection.close();
                
         } // end try
         catch ( SQLException sqlException )
         {
            sqlException.printStackTrace();         
            
         } // end catch
      } // end finally
      
      return "true";
    }
}
