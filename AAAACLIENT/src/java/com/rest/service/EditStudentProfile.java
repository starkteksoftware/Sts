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
public class EditStudentProfile {
     Connection connection = null;
     public void editStudentProfileMethod(){
         try{
      javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
          connection = ds.getConnection(); 

           

     
Exam.editStudentProfile =  connection.prepareStatement("UPDATE newstudenttable SET FirstName =?,LastName=?,MiddleName=?,Gender=? WHERE StudentNumber = ?");
 //Exam.editStudentSchedule = connection.prepareStatement("UPDATE  examstudenttable  SET matric = ? WHERE matric =?");
  //Exam.editActiveExam =  connection.prepareStatement("UPDATE activeexamstudents  SET matric = ? WHERE matric = ?");
  
  
     }
            catch(SQLException | NamingException e){
               e.printStackTrace();
                
            } 
    }
    
    public String editStudentProfileQuery(String lastName,String firstName,String  middleName,String gender,String studentNumber,String formerNumber){
        
        try{
        Exam.editStudentProfile.setString(1, lastName);
        Exam.editStudentProfile.setString(2, firstName);
         Exam.editStudentProfile.setString(3, middleName);
          Exam.editStudentProfile.setString(4, gender);
         //  Exam.editStudentProfile.setString(5, studentNumber);
            Exam.editStudentProfile.setString(5, formerNumber);
           
        int result = Exam.editStudentProfile.executeUpdate();
            System.out.println(result);
        if(result >= 1){
            return new Gson().toJson(""+formerNumber +" succesfully updated.");
        }
        else{
          return new Gson().toJson("Error in updating "+formerNumber +"");
        }
           
        ///   Exam.editStudentSchedule.setString(1, studentNumber);
           //  Exam.editStudentSchedule.setString(2, formerNumber);
           
          //    Exam.editStudentSchedule.executeUpdate();
              
            //  Exam.editActiveExam.setString(1, studentNumber);
              // Exam.editActiveExam.setString(2, formerNumber);
              //Exam.editActiveExam.executeUpdate();
              
              
        }
        catch( SQLException e){
              return new Gson().toJson("Error in updating "+formerNumber +" "+e.getMessage());
       
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
