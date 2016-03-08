/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.service;

import com.google.gson.Gson;
import static com.rest.service.Exam.registerStudents;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Set;
import javax.naming.NamingException;

/**
 *
 * @author bola odesile
 */
public class InsertStudentsDatabaseQueryXcelSheet {
    
    Connection connection = null;
    int status = 0;
    
    
    
    
    public void createPreparedStatement(){
           try{
        javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
        connection = ds.getConnection(); 
   
        
        Exam.registerStudents = connection.prepareStatement("INSERT INTO newstudenttable(FirstName,LastName,MiddleName,Gender,StudentNumber) VALUES(?,?,?,?,?);");
    }
            catch(SQLException | NamingException e){
               e.printStackTrace();
                
            }   
        
    }
    
    public String returnStatusQuery(String first,String last,String middle,String gender,String studentNumber){
          try 
      {
        
    
           
            Exam.registerStudents.setString(1, first );
            Exam.registerStudents.setString(2, last);
            Exam.registerStudents.setString(3, middle );
           Exam.registerStudents.setString(4, gender);
           Exam.registerStudents.setString(5, studentNumber);
             
             
             
             
         status =     Exam.registerStudents.executeUpdate();
             
           
        
      } // end try
      catch ( SQLException sqlException )
      {
         sqlException.printStackTrace();         
      } // end catch
       
     // end finally
      
        
      
        return new Gson().toJson(String.valueOf(status));
    }
    
    
    
     public String excelSheetQuery(HashMap<String,StudentsObject> map){
            
             
               
       
         System.out.println("insert db "+map.size());
            Set<String> keys = map.keySet();
         for(String lookUp : keys){
             
             if(lookUp == null)
               continue;
             
            if(lookUp.length() < 1)
                continue;
            
           try{
            double n = Double.parseDouble(lookUp);
           }
           catch(NumberFormatException e){
            
               continue;
           }
       String lastName=  map.get(lookUp).getLastName();
       String firstName=  map.get(lookUp).getFirstName();
       String middleName=  map.get(lookUp).getMiddleName();
       String gender= map.get(lookUp).getGender();
       String studentNumber=  map.get(lookUp).getStudentNumber();
         try{
           Exam.registerStudents.setString(1, firstName );
            Exam.registerStudents.setString(2, lastName);
            Exam.registerStudents.setString(3, middleName );
           Exam.registerStudents.setString(4, gender);
           Exam.registerStudents.setString(5, studentNumber);
             
             
             
             
         status =    Exam.registerStudents.executeUpdate();
         
         if(status == 1){
             System.out.println("success");
         }
         else{
             System.out.println("failure");
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
         
         }
        return new Gson().toJson(String.valueOf(status));
    }
     
     
     public  String excelSheetInsertExam(HashMap<String,StudentsObject> map,String exam){
         StringBuilder totalStudents= new StringBuilder();
          System.out.println("insert db "+map.size());
            Set<String> keys = map.keySet();
         for(String lookUp : keys){
             
             if(lookUp == null)
               continue;
             
            if(lookUp.length() < 1)
                continue;
            
           try{
            double n = Double.parseDouble(lookUp);
           }
           catch(NumberFormatException e){
            
               continue;
           }
      
      totalStudents.append(map.get(lookUp).getStudentNumber()).append(",");
         }
         RegisterExamStudents register = new RegisterExamStudents();
         register.insertNewStudentsTable();
         return register.insertNewStudentsTableQuery(totalStudents.toString(), exam);
     }
   
    
} 
