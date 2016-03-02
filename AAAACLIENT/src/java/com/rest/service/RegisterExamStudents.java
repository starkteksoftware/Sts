/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.service;

import static com.rest.service.Exam.URL;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import javax.naming.NamingException;


/**
 *
 * @author bola odesile
 */
public class RegisterExamStudents {
    
    Connection connection = null;
    int status = 0;
  public void insertNewStudentsTable(){
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



          
     Exam.insertIntoExamTable  = connection.prepareStatement("INSERT INTO examstudenttable(matric,ExamName) VALUES (?,?); ");
     Exam.updateRegisteredCandidates = connection.prepareStatement("UPDATE activeexam SET "
            +"RegisteredCandidates=RegisteredCandidates + ? WHERE ExamName=?");
     }
                
            catch(SQLException | NamingException e){
               e.printStackTrace();
            }   
        
        
    }
     public String insertNewStudentsTableQuery(String totalStudents,String exam){
         System.out.println("the students "+totalStudents);
        String [] totalS = totalStudents.split(",");
         
         for(String j : totalS){
             
             if(j == null){
                 continue;
             }
             
             if(j.length() <=2){
                 System.out.println(" i am touching here, i dont know why");
                 continue;
             }else{
                 if(j.equals("checkall"))
                   continue;
          try 
      {
        
     System.out.println(" i am updating "+j);
           
            Exam.insertIntoExamTable.setString(1,j );
            Exam.insertIntoExamTable.setString(2,exam);
       status =     Exam.insertIntoExamTable.executeUpdate();
       if(status == 1){
           System.out.println("success in student add");
       }
       else{
            System.out.println("error in student add"); 
       }
      }
           catch ( SQLException sqlException )
      {
         sqlException.printStackTrace();         
      } 
    }
         }
         
         
         try{
         
          Exam.updateRegisteredCandidates.setInt(1, totalS.length - 1);
          Exam.updateRegisteredCandidates.setString(2, exam);
         
        status =  Exam.updateRegisteredCandidates.executeUpdate();
          if(status == 1){
           System.out.println("success in exam update");
       }
       else{
            System.out.println("error in exam update"); 
       }
         }
         catch(SQLException e){
             e.printStackTrace();
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
         
         return "";
         
         
     }   
}

