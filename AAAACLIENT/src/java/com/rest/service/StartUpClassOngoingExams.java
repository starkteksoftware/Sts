/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.service;

import com.google.gson.Gson;
import static com.rest.service.Exam.registeredCourses;
import java.io.File;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Set;
import javax.naming.NamingException;

/**
 *
 * @author bola odesile
 */
public class StartUpClassOngoingExams {
   Connection connection = null;
    public static HashMap<String,String> studentsRegistered = new  HashMap<>();
    public static boolean isLogin = false;
    
       public void manageOngoingExam(){
 try{
        javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
                   connection = ds.getConnection(); 
    Exam.getOngoingExams = connection.prepareStatement("SELECT * FROM activeexam WHERE Status=1");
    Exam.getAllRegisteredStudents  = connection.prepareStatement("SELECT * FROM examstudenttable ORDER BY matric ASC ");
    Exam.insertStudentState = connection.prepareStatement("INSERT INTO activeexamstudents VALUES(?,?,?,?);");
    Exam.registerStudentsExam = connection.prepareStatement("SELECT * FROM newstudenttable WHERE StudentNumber = ? ORDER BY StudentNumber ASC");    
           }
            catch(SQLException | NamingException e){
               e.printStackTrace();
            }   
        
       
    }
        
       public void allowCandidateStart(){
        try{
            System.err.println(" in allow canidates");
            
        javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
                   connection = ds.getConnection(); 
                   PreparedStatement allowSign = connection.prepareStatement("SELECT * From newstudenttable");
                   ResultSet getResults2 = allowSign.executeQuery();
                   while(getResults2.next()){
                         StringBuilder builder = new StringBuilder();
          builder.append("#");
          builder.append(getResults2.getString("LastName").concat(","));
            builder.append(getResults2.getString("FirstName").concat(","));
              builder.append(getResults2.getString("MiddleName").concat(","));
                builder.append(getResults2.getString("Gender").concat(","));
                  builder.append(getResults2.getString("StudentNumber"));
                 studentsRegistered.put(getResults2.getString("StudentNumber"), getResults2.getString("LastName")+" "+getResults2.getString("FirstName"));
                       System.err.println("builder to string "+builder.toString());
                 Exam.registeredStudents.put(getResults2.getString("StudentNumber"), builder.toString());
                 
               
                   }
                  StartUpClassOngoingExams.isLogin = true;
        }
        catch(NamingException | SQLException e){
            
        }
       }
   
              public void startOngoingExam(){
                  
               File files = new File(System.getProperty("user.home")+System.getProperty("file.separator")+"Images");
               if(!files.isDirectory()){
                   files.mkdir();
                   System.out.println(files.getAbsolutePath());
                   File file = new File(files.getAbsolutePath()+System.getProperty("file.separator")+"jols.txt");
                   try{
                   file.createNewFile();
                   }
                   catch(IOException e){
                     e.printStackTrace();
                  }
               }
               
               
         System.out.println("control start:1 getting all students registered for exams ");
         registeredCourses = new HashMap<>();
       //  ArrayList matrics = new ArrayList();
         HashMap matrics = new HashMap();
         Exam.getNewRegisteredStudents = "";
        ResultSet resultSet1 = null;
         try{
         resultSet1 =  Exam.getAllRegisteredStudents.executeQuery(); 
         while ( resultSet1.next() )
          {
         String matricNumber  = resultSet1.getString("matricExam").split("\\*\\*\\*")[0];
         matrics.put(matricNumber,"");
       if(registeredCourses.containsKey(matricNumber)){
           StringBuilder builder = new StringBuilder();
            builder.append(registeredCourses.get(matricNumber)).append(",").append(resultSet1.getString("ExamName"));
            registeredCourses.put(matricNumber, builder.toString());
            }
       else{
         registeredCourses.put(matricNumber,resultSet1.getString("ExamName"));   
        
           }
         } 
         
          
           System.out.println(matrics.size()+" the size ");
            Set<String> keys = matrics.keySet();
              ResultSet getResults2;
           for(String matricNumbers : keys){
               
              Exam.getNewRegisteredStudents += matricNumbers+",";   
          Exam.registerStudentsExam.setString(1,matricNumbers);
          getResults2 =    Exam.registerStudentsExam.executeQuery();    
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
            }
             }
           ResultSet resultSet ;
        StringBuilder result = new StringBuilder();
        // executeQuery returns ResultSet containing matching entries
        resultSet = Exam.getOngoingExams.executeQuery(); 
        // results = new ArrayList< Person >();
        while ( resultSet.next() )
         {
          StringBuilder builder = new StringBuilder();
          builder.append("#");
           builder.append(resultSet.getString("ExamName").concat(","));
            builder.append(resultSet.getString("ScheduleDateTime").concat(","));
             builder.append(resultSet.getString("time").concat(","));
              builder.append(resultSet.getString("RegisteredCandidates").concat(","));
                builder.append(resultSet.getString("Duration"));
              
                GetAllQuestionsGetAllPeople.getAllQuestions(resultSet.getString("ExamName"));
               GetAllQuestionsGetAllPeople.getAllPeople(resultSet.getString("Duration"),resultSet.getString("ExamName"),resultSet.getString("FeedBack"),resultSet.getString("Amount"));
                 result.append(builder);
             } // end while
             Exam.ongoingExam = result.toString();
          // end of registered courses
         //all student with courses are put in.
    } // end try
      catch ( SQLException sqlException )
      {
         sqlException.printStackTrace();         
       } // end catch
        
      //  StringBuilder result = new StringBuilder();
          
            //please change it  to greater than 0;
       
      finally
      {
         try 
         {
       
             if(resultSet1 != null){
            resultSet1.close();
             }
            
              if(connection != null)
                connection.close();
               
         } // end try
         catch ( SQLException sqlException )
         {
            sqlException.printStackTrace();         
            
         } // end catch
      } // end finally
       
       
    }
        
}  
/*      
      System.out.println("dear lord");
              
              if(datasource == null){
                  
              }
              else{
                  System.err.println("not null");
              }
              
         connection = datasource.getConnection();
         
              Properties prop =  connection.getClientInfo();
          Set<Object> sets =    prop.keySet();
          
          for(Object look : sets){
              System.out.println("this is "+look.toString());
          }
                
              DatabaseMetaData data =   connection.getMetaData();
             
                      System.out.println(data.getDriverVersion() +" "+data.getURL()+" "+data.getUserName()+" ");
                      ResultSet res = data.getTableTypes();
                      while(res.next()){
                       
                      } */