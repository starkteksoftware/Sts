/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.service;

import com.google.gson.Gson;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import javax.naming.NamingException;

/**
 *
 * @author bola odesile
 */
public class DeleteStudentFromDb {
   Connection connection = null;
    public void deleteStudents(){
        
          try{
         
                javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
                   connection = ds.getConnection(); 
     Exam.deleteStudentFromAllStudents = connection.prepareStatement("DELETE  FROM newstudenttable  WHERE studentnumber = ?");
         Exam.deleteStudentFromExamTable  = connection.prepareStatement("DELETE  FROM examstudenttable  WHERE matric = ?");
         Exam.deleteactiveExam =  connection.prepareStatement("DELETE  FROM activeexamstudents  WHERE matric = ?");
         Exam.deleteFromExamStatus =  connection.prepareStatement("DELETE FROM examstatus WHERE matric =?");
       
         }
            catch(SQLException | NamingException e){
               e.printStackTrace();
            }
    }
    
    public String deleteStudentQuery(String matric){
      try{
      
        Exam.deleteStudentFromExamTable.setString(1, matric);
        Exam.deleteactiveExam.setString(1, matric);
        Exam.deleteFromExamStatus.setString(1, matric);
          System.out.println("candidate "+matric+" successfully deleted");
            Exam.deleteactiveExam.executeUpdate();
         Exam.deleteFromExamStatus.executeUpdate();
     int result =  Exam.deleteStudentFromExamTable.executeUpdate();
          
     
         Exam.deleteStudentFromAllStudents.setString(1, matric);
       Exam.deleteStudentFromAllStudents.executeUpdate();
       return new Gson().toJson("Candidate "+matric+" successfully deleted");
      
      }
      catch(SQLException e){
        return new Gson().toJson("Error  "+matric+" not deleted "+e.getMessage());
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
}
