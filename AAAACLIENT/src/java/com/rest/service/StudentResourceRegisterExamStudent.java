/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.service;

import com.google.gson.Gson;
import static com.rest.service.Exam.registeredCourses;
import static com.rest.service.StartUpClassOngoingExams.studentsRegistered;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Arrays;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.naming.NamingException;

/**
 *
 * @author user
 */
public class StudentResourceRegisterExamStudent {
     Connection connection = null;
     int status = 0;
     PreparedStatement setPrimary = null;
     PreparedStatement setCount = null;
     
     
     public void insertNewStudentsTable(){
         
     }
     
     
    public void insertNewStudentsTable(Connection connection){
             
    /*         
    try{
       javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
        Connection connections = ds.getConnection();
    }
    catch(NamingException | SQLException e ){
        e.printStackTrace();
    }  */
          try{   
     setPrimary = connection.prepareStatement("INSERT INTO examstudenttable(matricExam,ExamName,matric) VALUES (?,?,?)");
    setCount = connection.prepareStatement("SELECT * from examstudenttable where examName =?");
     Exam.updateRegisteredCandidates = connection.prepareStatement("UPDATE activeexam SET RegisteredCandidates=? WHERE ExamName=?");
            connection.setAutoCommit(false);  
          }
            catch(SQLException e){
               e.printStackTrace();
            }   
        
              
              
        
    }
    
    
    public String insertNewStudentTable(String student,String exam,Connection connection) throws ArrayIndexOutOfBoundsException{
      try{
          long start = System.currentTimeMillis();
        String [] splitExam = exam.split(",");
        Arrays.stream(splitExam).forEach(subjectCode->{
         
               try 
      {
            System.out.println(" adding "+subjectCode+" matric :"+student);
            setPrimary.setString(1, student+"***"+subjectCode);
            setPrimary.setString(2, subjectCode);
            setPrimary.setString(3, student);
            setPrimary.executeUpdate();
           setCount.setString(1, subjectCode);
            ResultSet results = setCount.executeQuery();
            
              int count = 0;
             while(results.next()){
                count++;   
               }
            System.out.println(" count is " +count +" ");
            if(count == 0)
            Exam.updateRegisteredCandidates.setInt(1, 1);
            else{
                 Exam.updateRegisteredCandidates.setInt(1, count);
            }
            Exam.updateRegisteredCandidates.setString(2, subjectCode);
            Exam.updateRegisteredCandidates.executeUpdate();
            
        
     }
           catch ( SQLException sqlException )
      {
                   try {
                       connection.rollback();
                   } catch (SQLException ex) {
                       Logger.getLogger(StudentResourceRegisterExamStudent.class.getName()).log(Level.SEVERE, null, ex);
                   }
         sqlException.printStackTrace();         
         //return new Gson().toJson("Courses not registered successfully... Please try again");
         
      } 
                  
            
         if(registeredCourses!= null && registeredCourses.containsKey(student)){
           StringBuilder builder = new StringBuilder();
            builder.append(registeredCourses.get(student)).append(",").append(subjectCode);
            registeredCourses.put(student, builder.toString());
            }
       else
               if(registeredCourses!= null ){
                   try {
                       registeredCourses.put(student,subjectCode);
                       if(!Exam.getNewRegisteredStudents.equals(""))
                           Exam.getNewRegisteredStudents += "," +student;
                       else{
                           Exam.getNewRegisteredStudents = student;
                       }
                       
                       Exam.registerStudentsExam = connection.prepareStatement("SELECT * FROM newstudenttable WHERE StudentNumber = ? ORDER BY StudentNumber ASC");
                       Exam.registerStudentsExam.setString(1,student);
                       ResultSet  getResults2 =    Exam.registerStudentsExam.executeQuery();
                      
                       while(getResults2.next()){
                           StringBuilder builder = new StringBuilder();
                           builder.append("#");
                           builder.append(getResults2.getString("LastName").concat(","));
                           builder.append(getResults2.getString("FirstName").concat(","));
                           builder.append(getResults2.getString("MiddleName").concat(","));
                           builder.append(getResults2.getString("Gender").concat(","));
                           builder.append(getResults2.getString("StudentNumber"));
                           studentsRegistered.put(getResults2.getString("StudentNumber"), getResults2.getString("LastName")+" "+getResults2.getString("FirstName"));
                           Exam.registeredStudents.put(getResults2.getString("StudentNumber"), builder.toString());
                       }      } catch (SQLException ex) {
                       Logger.getLogger(StudentResourceRegisterExamStudent.class.getName()).log(Level.SEVERE, null, ex);
                   }
           }        
              try {
                  connection.commit();
              } catch (SQLException ex) {
                  Logger.getLogger(StudentResourceRegisterExamStudent.class.getName()).log(Level.SEVERE, null, ex);
              }
         
        
        });
      
        long end = System.currentTimeMillis();
          System.err.println("using an enhanced for loop "+(end - start )+"seconds");
          
        }
        catch(Exception e){
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
        
        return new Gson().toJson("Courses Succesfully registered");
         
        
       
        
    }
    
    
     public String insertNewStudentsTableQuery(String totalStudents,String exam){
      
       
         return "";
         
           
         
     }   
}
     
         
      /*     switch(subjectCode[1]){
               case "WAEC": value = "5";
               
               getAllExams.setString(1, "%"+subjectCode[0]+"%");
               getAllExams.setString(2, "1");
                appender = new StringBuilder();
                    getR = getAllExams.executeQuery();
                     while(getR.next()){
                        String [] val = getR.getString("Subject").split("_");
                     //   if(val[0].toLowerCase().equals(subjectCode[0].toLowerCase())){
                            appender.append("#").append(getR.getString("Subject"));
                            
                            
                      //  }
                          }
                    update = appender.toString().split("#");
                     for(String u : update){
                         if(u.equals(""))
                          continue;
                         
                         
                        Exam.insertIntoExamTable.setString(1,student);
            Exam.insertIntoExamTable.setString(2,u);
            Exam.insertIntoExamTable.setString(3, "1");
       status =     Exam.insertIntoExamTable.executeUpdate();
     
            Exam.updateRegisteredCandidates.setInt(1, 1);
          Exam.updateRegisteredCandidates.setString(2, subjectCode[0]);
         
        status =  Exam.updateRegisteredCandidates.executeUpdate();
     
                     }
        
                     
                   
               
               break;
               
               case "NECO": value = "6";
             
               
           getAllExams.setString(1, "%"+subjectCode[0]+"%");
                       getAllExams.setString(2, "2");
                appender = new StringBuilder();
                    getR = getAllExams.executeQuery();
                    
                   
                     while(getR.next()){
                        
                        String [] val = getR.getString("Subject").split("_");
                         System.out.println("contains "+subjectCode[0]+"  "+val[0]);
                        
                                appender.append("#").append(getR.getString("Subject"));
                        
                       
                          }
                    update = appender.toString().split("#");
                   
                     for(String u : update){
                         System.out.println(u);
                         
                     }
                    
                     for(String u : update){
                    
                          if(u.equals(""))
                          continue;
                        Exam.insertIntoExamTable.setString(1,student);
            Exam.insertIntoExamTable.setString(2,u);
            Exam.insertIntoExamTable.setString(3, "2");
       status =     Exam.insertIntoExamTable.executeUpdate();
           Exam.updateRegisteredCandidates.setInt(1, 1);
          Exam.updateRegisteredCandidates.setString(2, subjectCode[0]);
         
        status =  Exam.updateRegisteredCandidates.executeUpdate();
     
     
                     }
                     
               
                     
                     
               
               
               break;
                
               case "JAMB": value = "7";
             
           getAllExams.setString(1, "%"+subjectCode[0]+"%");
                  getAllExams.setString(2, "3");
                appender = new StringBuilder();
                    getR = getAllExams.executeQuery();
                     while(getR.next()){
                        String [] val = getR.getString("Subject").split("_");
                         System.out.println("contains "+subjectCode[0]+"  "+val[0]);
                          appender.append("#").append(getR.getString("Subject"));
                      // if(val[0].toLowerCase().equals(subjectCode[0].toLowerCase())){
                             appender.append("#").append(getR.getString("Subject"));
                           
                        } //
                          }
                    update = appender.toString().split("#");
                    
                     for(String u : update){
                         if(u.equals(""))
                          continue;
         Exam.insertIntoExamTable.setString(1,student);
         Exam.insertIntoExamTable.setString(2,u);
         Exam.insertIntoExamTable.setString(3, "3");
         status =     Exam.insertIntoExamTable.executeUpdate();
       
          Exam.updateRegisteredCandidates.setInt(1, 1);
          Exam.updateRegisteredCandidates.setString(2, subjectCode[0]);
         
        status =  Exam.updateRegisteredCandidates.executeUpdate();
     
                     }
                     
                    
               
               
               break;
               
               case "UTME":    value = "8";
           
                   System.out.println("in the right case");
                   
            getAllExams.setString(1, "%"+subjectCode[0]+"%");
                  getAllExams.setString(2, "4");
                   System.err.println(subjectCode[0]+" type = "+"4");
                   
                appender = new StringBuilder();
                    getR = getAllExams.executeQuery();
                     while(getR.next()){
                        String [] val = getR.getString("Subject").split("_");
                         System.out.println("contains "+subjectCode[0]+"  "+val[0]);
                              appender.append("#").append(getR.getString("Subject"));
                      
                     //   if(val[0].toLowerCase().equals(subjectCode[0].toLowerCase())){
                           
                     
                                
                     //   }
                          }
                    update = appender.toString().split("#");
                     for(String u : update){
                              if(u.equals(""))
                          continue;
                        Exam.insertIntoExamTable.setString(1,student);
            Exam.insertIntoExamTable.setString(2,u);
            Exam.insertIntoExamTable.setString(3, "4");
       status =     Exam.insertIntoExamTable.executeUpdate();
           Exam.updateRegisteredCandidates.setInt(1, 1);
          Exam.updateRegisteredCandidates.setString(2, subjectCode[0]);
         
        status =  Exam.updateRegisteredCandidates.executeUpdate();
     
     
                     }
                     
                    
               
               
               break;
           } */