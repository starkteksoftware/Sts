package com.endpoin.service;


import com.rest.service.Exam;
import com.rest.service.LogIn;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import javax.naming.NamingException;

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author bola odesile
 */
public class DatabaseReportClass {
     HashMap<String, ArrayList> allExams = new HashMap<>();
     PreparedStatement getQuestions = null;
     Connection connection = null;
     PreparedStatement updateStudents = null;
     PreparedStatement getResultsMark = null;
     PreparedStatement results = null;
     
     private String respond;
     private  int weight;
    

       public  static String URL  = "jdbc:mysql://localhost:3306/test"; //"jdbc:mysql://mysql7811-starks.j.scaleforce.net/test";// jdbc:mysql://localhost:3306/test";
      public  static String USERNAME = "root";
    public  static String passsword = "";// "PMDsfd12372";
   static ArrayList questionTypeAndTime  = new ArrayList();
   
   
     
    
   
   
   
    
    public void setStudentStatus(){
       try{
            
          try{   
 Class.forName("com.mysql.jdbc.Driver");
  javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
                   connection = ds.getConnection(); 



       }
       catch(Exception e){
          e.printStackTrace();
       }
          try{
          String attach =   InetAddress.getLocalHost().toString();
          }
          catch(UnknownHostException e){
              e.printStackTrace();
          }
       
 updateStudents  = connection.prepareStatement("UPDATE activeexamstudents SET Status=?,Data=?"+
         " WHERE matric=? AND ExamName =?");
   
   
     }
            catch(SQLException e){
               e.printStackTrace();
            }   
        
        
            


    }
    
    
    public void errorUpdateQuery(){
         try
         {
            Map studs = Endpoint.students;
             Set<String> ss = studs.keySet();
      for(String s : ss){
           String value = studs.get(s).toString();
       String examination = Endpoint.totalStudents.get(s);
          updateStudents.setString(3, s); 
          updateStudents.setString(4, examination);
           String time ="";
       String [] amperstand= value.split("&");
      String [] split = amperstand[1].split("=");
       int count = 0;
       for(String sss : split){
           if(count == 1){
              time = sss;
               
           }
           count++;
       }
       int times = Integer.parseInt(time);
       
       if(times <=0 ){
               updateStudents.setInt(1, 0);
          updateStudents.setString(2,value);     
       }
       else{
           System.out.println("updated  "+value);
           
       updateStudents.setInt(1, 1);
          updateStudents.setString(2,value);   
          
       }
     

        
          
          
       }
          
       updateStudents.executeUpdate();
             
           
        
      } // end try
        
      catch ( SQLException sqlException )
      {
         sqlException.printStackTrace();         
      } // end catch
     // end finally
        
       
    }
    
    public void updateStudentDataQuery(){
        try
         {
            Map studs = Endpoint.allLoggedInStudents;
             Set<String> ss = studs.keySet();
        
       for(String s : ss){
         
           String value = studs.get(s).toString();
       String [] examinations = s.split("#split");
       String examination = examinations[1];
          updateStudents.setString(3, examinations[0]);
         updateStudents.setString(4, examination);
           String time ="";
       String [] amperstand= value.split("&");
      String [] split = amperstand[1].split("=");
       int count = 0;
       for(String sss : split){
           if(count == 1){
              time = sss;
               
           }
           count++;
       }
       int times = Integer.parseInt(time);
       
       if(times <=0 ){
               updateStudents.setInt(1, 0);
          updateStudents.setString(2,value);     
             System.out.println("updated  "+value);
             
       }
       else{
           System.out.println("updated  "+value);
           
       updateStudents.setInt(1, 1);
          updateStudents.setString(2,value);   
          
       }
     

        
      updateStudents.executeUpdate();    
          
       }
          
       
       
       
             
           
        
      } // end try
        
      catch ( SQLException sqlException )
      {
         sqlException.printStackTrace();         
      } // end catch
     // end finally
        
        
    }
    
    
    
    
     
     
     public String getAllQuestions(String question){
     
         try{
              
         javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
                   connection = ds.getConnection(); 



        getQuestions = connection.prepareStatement("SELECT * FROM examstable WHERE Subject =?");
    //   getQuestions.executeQuery();
           
     
           
           
            }
            catch(SQLException | NamingException e){
               e.printStackTrace();
            }  
        
      return "";
    }
    
     
     
    

 public String getAllPeople(String time,String subject)
   {
      List results = null;
      ResultSet resultSet = null;
      
      
      String a = null;
      
      try 
      {
         // executeQuery returns ResultSet containing matching entries
           System.err.println(" results");
           getQuestions.setString(1, subject );
           
         resultSet = getQuestions.executeQuery(); 
        // results = new ArrayList< Person >();
          System.err.println(" executed");
         while ( resultSet.next() )
         {
       
         
       
         questionTypeAndTime.add(resultSet.getString("Question"));
         questionTypeAndTime.add(resultSet.getString("Type"));
         questionTypeAndTime.add(time);
         questionTypeAndTime.add(resultSet.getString("Author"));
         
             System.err.println(resultSet.getString("Question")+" "+resultSet.getString("Author"));
           
             
         allExams.put(resultSet.getString("Subject"), questionTypeAndTime);
         
         
         
         
         
         
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
            resultSet.close();
         } // end try
         catch ( SQLException sqlException )
         {
            sqlException.printStackTrace();         
            
         } // end catch
      } // end finally
      
      return "true";
   } // end method getAllPeople
 
 
   
    
     
     
     public String getResults(){
     
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



       getResultsMark= connection.prepareStatement("SELECT * FROM answers WHERE Question =?");
        
    //   getQuestions.executeQuery();
           
           
           
            }
            catch(SQLException | NamingException e){
               e.printStackTrace();
            }  
        
      return "";
    }
     
     
     public String returnResults(String subject){
         
         ResultSet results = null;
         try{
         getResultsMark.setString(1,subject);
         results = getResultsMark.executeQuery();
         
         while(results.next()){
        respond = results.getString("Answer");
        weight = results.getInt("Weight");
         }
         
         }
         catch(SQLException e){
            e.printStackTrace();
            
         }
          finally{
                try{
                if(connection!= null)
                    connection.close();
                
                
                if(results != null)
                   results.close();
                
                }
                catch(SQLException e){
                    e.printStackTrace();
                }
            }
         
         return respond;
              
     }
     
     public int getWeight(){
         return weight;
     }
     
     
     
     public void populateResults(){
         
         try{
            
              javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
                   connection = ds.getConnection(); 



      
 results  =  connection.prepareStatement("INSERT INTO report(Subject,Result,Amount,Date) VALUES (?,?,?,?)");
   
     }
            catch(SQLException | NamingException e){
               e.printStackTrace();
            }   
        
        
            


         
         
     }
    
    public void resultQuery(String examName,String result,int amount,String date){
       try{
        results.setString(1, examName);
        results.setString(2, result);
        results.setInt(3, amount);
        results.setString(4, date);
        
        results.executeUpdate();
        
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
    
    
     public void populateMark(){
         
         try{
            
         javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
                   connection = ds.getConnection(); 



                         
         String QUERY ="INSERT INTO resultSheet (ExamName,Result) VALUES (?,?);";
         
       
         results  = connection.prepareStatement(QUERY);
         
    
     }
            catch(SQLException | NamingException e){
               e.printStackTrace();
            }   
        
        
            


         
         
     }
    
    public void markQuery(String examName,String result){
       try{
        results.setString(1, examName);
        
        results.setString(2, result);
       
        
        
        results.executeUpdate();
        
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
}
