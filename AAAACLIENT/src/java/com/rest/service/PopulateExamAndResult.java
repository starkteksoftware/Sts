/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.service;


import com.endpoin.service.DatabaseReportClass;
import java.io.File;
import java.io.Serializable;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.Set;
import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.naming.NamingException;

/**
 *
 * @author bola odesile
 */
public class PopulateExamAndResult {
    
         private static String URL  ="jdbc:mysql://localhost:3306/test";
    private static String USERNAME = "root";
    private static String passsword ="";
    String subject;
   Connection  connection = null; // manages connection
     private PreparedStatement  insertQuestion = null; 
     private PreparedStatement insertAnswers = null;
     private PreparedStatement getStudentName = null;
     private PreparedStatement insertReport = null;
     private PreparedStatement updateQuestion = null;
    
     ResultSet result = null;
     private String GETSTUDENTNAME ="SELECT * FROM newstudenttable WHERE StudentNumber = ?";
    
     
     public void populateAnswers(String topic,String answers){
           try{
 
                    javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
                   connection = ds.getConnection(); 

               
        insertAnswers = connection.prepareStatement("INSERT INTO answers  (Question,Answer,Weight)  VALUES (?,?,?) ");
          topic = subject;
      
                System.err.println("working here");
                
          insertAnswers.setString(1, topic);
           insertAnswers.setString(2, "*2"+answers+"#");
           insertAnswers.setInt(3, 2);
           
           
           
            System.err.println("it has been shifted ere");
           insertAnswers.executeUpdate();
           
           
           
            }
             catch(SQLException | NamingException e){
               e.printStackTrace();
            }  
       
     }
    
    public void populateDatabase(String subject,String author,String date,int type,String questions ){
   
       try{
              
         insertQuestion = connection.prepareStatement("INSERT INTO examstable  (Subject,Author,Date,Type,Question)  VALUES (?,?,?,?,?) ");
           
       
                System.err.println("working here");
                 this.subject = subject;
           insertQuestion.setString(1, subject);
           insertQuestion.setString(2, author);
           insertQuestion.setString(3, date);
           insertQuestion.setInt(4, type);
           insertQuestion.setString(5, questions);
           
           
           
            System.err.println("it has been shifted ere");
           insertQuestion.executeUpdate();
           
           
           
            }
             catch(SQLException e){
               e.printStackTrace();
            }  
       
       
           
    }
    
     
    public String ans( String txt){
        populateAnswers(subject, txt);
        return txt;
    }
 
    public String result(String maps,String subs){
       
        String [] replace = maps.replaceAll("\\{", "").replaceAll("}", "").split(",");
        
        LinkedHashMap<String,Integer> map = new LinkedHashMap<>();
        
        for(String ss : replace){
            System.out.println(ss);
            String [] sort = ss.split("=");
            map.put(sort[0], Integer.valueOf(sort[1]));
        }
        
        
            try{
       
         getStudentName = connection.prepareStatement(GETSTUDENTNAME);
          
          
                System.err.println("it has gotten to the server");
         StringBuilder appender = new StringBuilder();
         int count = 0;
          Set<String> keys = map.keySet();
          for(String ss: keys){
              System.out.println(ss +" in student");
           String trim = ss.trim();
              count++;
              getStudentName.setString(1, trim);
              
               
             result = getStudentName.executeQuery();
             while(result.next()){
                 appender.append("<tr>").append("<td>").append(count).append("</td><td>").append(ss).append("</td><td>").append(result.getString("LastName")).append(" ").append(result.getString("FirstName")).append("</td><td>").append(map.get(ss)).append("</td>");
                 System.err.println(appender);
             }
          }
          
         DatabaseReportClass mark = new DatabaseReportClass();
          mark.populateResults();
    DateFormat date = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
    Date d = new Date();
 String dates =   date.format(d);
 
mark.resultQuery(subs, appender.toString(), map.size(), dates);


System.err.print("worked");
            }
            catch(SQLException e){
                e.printStackTrace();
            }
        
        return "sent";
    }
    
    public String hello( String subject,String author,String question) {
       
        
        
         System.out.println("subject "+subject);
         System.out.println("auhthor "+author);
         System.out.println("question "+question);
      
         if(subject.isEmpty() || author.isEmpty() || question.isEmpty()){
             
         }
         else{
           DateFormat date = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
    Date d = new Date();
 String dates =   date.format(d);
        
        int type = 4;
        
    populateDatabase(subject,author,dates,type,question);
      
     //   System.err.println(" a new method");
         }
        return "this is the sub " + question + " ";
        
     
    }
    
    
      
     
    class Question implements Serializable{

        public Question(){
            
        }
          
        public Question(ArrayList Question) {
            this.Question = Question;
        }
      
          
        
        private ArrayList Question;

        public ArrayList getQuestion() {
            return Question;
        }

        public void setQuestion(ArrayList Question) {
            this.Question = Question;
        }
       
     
    }
    
    
    
    
     public void getArrayListFile(@WebParam(name = "name") ArrayList<File> files){
         for(int c = 0; c < files.size(); c++){
             System.out.println(files.get(c).getAbsolutePath());
         }
     }
     
     
      public int populateDatabase(String subject,String author,int type,String questions,String table ){
   
       try{
         javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
        connection = ds.getConnection(); 
  insertQuestion = connection.prepareStatement("INSERT INTO examstable  (Subject,Author,Date,Type,Question,tableT)  VALUES (?,?,CURDATE(),?,?,?) ");
         
           
       
          System.err.println("Populate Database");
               
          insertQuestion.setString(1, subject);
          insertQuestion.setString(2, author);
          //insertQuestion.setString(3, date);
          insertQuestion.setInt(3, type);
          insertQuestion.setString(4, questions);
          insertQuestion.setString(5, table);
        return   insertQuestion.executeUpdate();
        
            }
             catch(SQLException | NamingException e){
               e.printStackTrace();
            }
       
       
       finally{
           try{
           if(connection != null)
              connection.close();
           }
           catch(SQLException e){
               e.printStackTrace();
           }
       }
       
       return 1;
           
    }
    
        
      public int updateDatabase(String subject, String question,String table){
            try{
         javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
        connection = ds.getConnection(); 
        updateQuestion = connection.prepareStatement("UPDATE examstable SET Question = ?,  tableT =?   WHERE Subject =?");
                System.out.println(question);
        updateQuestion.setString(1, question);
           updateQuestion.setString(2, table);
            updateQuestion.setString(3, subject);
             
             
              return updateQuestion.executeUpdate();
            }
            catch(NamingException | SQLException e){
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
          
          return 1;
      }
      
      
     
     
     
}
