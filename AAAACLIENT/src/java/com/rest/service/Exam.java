/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.service;

 
 

import com.google.gson.Gson;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import javax.enterprise.context.RequestScoped;
import javax.naming.NamingException;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Consumes;
import javax.ws.rs.Path;
import javax.ws.rs.GET;
import javax.ws.rs.Produces;
import javax.ws.rs.FormParam;
import javax.ws.rs.POST;
import javax.ws.rs.PathParam;
import javax.ws.rs.QueryParam;








/**
 * REST Web Service
 *
 * @author bola odesile
 */
@Path("exam")







  public class   Exam  {

    @Context
    private UriInfo context;
    
  Connection connection = null;

  static  String ip;
 //     static String URL  ="jdbc:mysql://"+ip+":3306/test";

 
  
   static String URL  ="jdbc:mysql://localhost:3306/test";
    static String USERNAME = "root";
      
     static String passsword ="ronldo";
     
     
     
    
    //      static String URL  ="jdbc:mysql://mysql7811-starks.j.scaleforce.net/test";// jdbc:mysql://localhost:3306/test";
      //static String USERNAME = "root";
      //static String passsword ="PMDsfd12372";
    
      
  //   @Resource( name="jdbc/test")
    //DataSource datasource;
    
   //  private Connection connection = null; // manages connection
      static PreparedStatement getQuestions = null; 
      static HashMap<String,String> metadata = new HashMap<>();
       static  PreparedStatement getStudents = null;
      private PreparedStatement insertAdmin = null;
      static PreparedStatement examScheduler = null;
      static PreparedStatement insertActiveExam = null;
      static  PreparedStatement updateOngoingExamTable = null;
      static PreparedStatement updateAddNewExamInDb = null;
      static  PreparedStatement registerStudents = null;
      static  PreparedStatement getAllStudents = null;
      static  PreparedStatement insertIntoExamTable = null;
      static  PreparedStatement getAllRegisteredStudents = null;
      static  PreparedStatement registerStudentsExam = null;
      static  PreparedStatement changeExamState = null;
      static PreparedStatement getMissedExamStatus = null;
      static PreparedStatement getCompletedExamStatus = null;
      static PreparedStatement getAllMissedStudents = null;
      static PreparedStatement insertIntoStatus = null;
      static  PreparedStatement getOngoingExams = null;
      static  PreparedStatement getAllStudentsQuery = null;
      static  PreparedStatement insertStudentState = null;
      static  PreparedStatement getActiveStudents = null;
     static  PreparedStatement updateRegisteredCandidates = null;
      static  PreparedStatement getRgisteredExamStudent = null;
      static  PreparedStatement removeRegisteredStudents = null;
     static  PreparedStatement deleteStudentFromAllStudents = null;
      static  PreparedStatement deleteStudentFromExamTable = null;
      static  PreparedStatement deleteactiveExam = null;
      static  PreparedStatement editStudentProfile = null;
      static  PreparedStatement editStudentSchedule = null;
      static  PreparedStatement editActiveExam = null;
      static PreparedStatement getRequestedStudent = null;
    static  PreparedStatement unRegisterStudent = null;
      static  PreparedStatement reduceExamCandidate = null;
      static PreparedStatement editAdministrator = null;
      static PreparedStatement createAdministrator = null;
      static PreparedStatement deleteAdministrator = null;
      static PreparedStatement updateAdmin = null;
      static PreparedStatement deleteFromExamStatus = null;
      
      
      
    
      static  PreparedStatement report = null;
      static  String  allTotalStudents;
     static   String totalExamStudents;
      static String totalStudents;
    static  String examsSchedule;
    static  String examTable;
  static    String ongoingExam;
    static  String activeStudents;// gets students time with answer
   static   String registeredExamStudent;//get students registered for an exam
   static   String getNewRegisteredStudents;//these is the new total students
   static   String requestedCandidate;//get candidate to populate edit profile;
   static  ArrayList studs;
   static boolean examSent;
     
   static  ArrayList questionTypeAndTime; 
   static  HashMap<String, String> allStudents = new HashMap<>();// all students
   static  HashMap<String, ArrayList> allExams = new HashMap<>();// all exams
   static  HashMap<String, String> loggedIn = new HashMap<>();//students logged in
    // HashMap<String, String> loggedIn = new HashMap<>();//students logged in
   static  HashMap<String, String> insertInDB = new HashMap<>();
    
   static int started ;
   static String examCase="";
   static boolean  multipleSheet;
   
    
     
 static HashMap<String, String> startedStudents = new HashMap<>();//students logged in with answers
    static HashMap<String, String > registeredCourses = null;
   static  HashMap<String, String > registeredStudents = new HashMap<>();
     
   
  

    /**
     * Creates a new instance of Exam
     */
    public Exam() {
  
    }

    /**
     * Retrieves representation of an instance of com.rest.service.Exam
     * @return an instance of java.lang.String
     */
    
      @POST
     @Path("{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}")
    @Produces("application/json")
     public String getStudentUpload(@QueryParam("file") String file, @QueryParam("exam")String exam,@QueryParam("multiple")String multiple){
          System.out.println("control 15:");
          
          //upload file method to server should come here
         if(exam == null && multiple == null){ 
         return new Gson().toJson(XslxXslSheet.checkExist(file));
         }
         
         if( exam != null && exam.length() > 1 && multiple == null){
             examSent = true;
             examCase = exam;
            return new Gson().toJson(XslxXslSheet.checkExist(file));
         }
        
         
         
         
         if(multiple != null){
           multipleSheet = true;  
               return new Gson().toJson(XslxXslSheet.checkExist(file));
         }
       
         
         return "";
      }
    
     @POST
     @Path("{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}")
     @Produces("application/json")
     public String getAdminAccount(@QueryParam("status") int status,@QueryParam("userName")String user,@QueryParam("lastName")String lastName,@QueryParam("firstName")String firstName,@QueryParam("email")String email,@QueryParam("password")String password){
        System.out.println("control 16:");
     AdministratorRights admin ;
        if(status == 1){
            admin = new AdministratorRights();
            admin.editAdmins();
           return admin.getAdminQueryResults(null, null, null, null, null, user,null,null,null,null,null,null,null);
        }
        
        if(status == 2){
            admin = new AdministratorRights();
            admin.updateAdmins();
            return admin.getAdminQueryResults(user, password, firstName, lastName, email,user,null,null,null,null,null,null,null);
            
        }
        
       
        
        return "";
    }
     @POST
     @Path("{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}")
     @Produces("application/json")
    public String getAdminStaff(@QueryParam("lastName") String lastName,@QueryParam("firstName") String firstName,@QueryParam("email") String email,@QueryParam("userName") String userName,@QueryParam("password") String password,@QueryParam("status")int status,@QueryParam("userName")String user,@QueryParam("contact")String contact,@QueryParam("contact2")String contact2,@QueryParam("address")String address,@QueryParam("address2") String address2,@QueryParam("initials")String initials,@QueryParam("gender")String gender,@QueryParam("middleName")String middleName){
        System.out.println("control Recieved: 15");
        System.out.println(""+lastName);

        AdministratorRights admin;
        if(status == 1){
            admin = new AdministratorRights();
            admin.createAdmins();
            
           return  admin.getAdminQueryResults(userName, password, firstName, lastName, email,null,null,null,null,null,null,null,null);
        }
        
        if(status == 2){
            admin = new AdministratorRights();
           admin.editAdmins();
              return  admin.getAdminQueryResults(null, null, null, null, null,user,null,null,null,null,null,null,null);
               
              
        }
        if(status == 3){
            AdministratorForgotPassword forgot = new AdministratorForgotPassword();
            return new Gson().toJson(forgot.getPassword(email));
        }
        if(status == 4){
            admin = new AdministratorRights();
            admin.updateAdmins(null);
            return new Gson().toJson(admin.getAdminQueryResults(userName, null, firstName, lastName, email, null, middleName, contact, contact2, address, address2, initials, gender));
          
        }
        
        if(status == 5){
          admin = new AdministratorRights();
            admin.editNewAdmins();
            return new Gson().toJson(admin.getAdminQueryResults(null, null, null, null, null, user, null, null, null, null, null, null, null));
             
        }
        
         
        
        
         return "";
      }
    
    @GET
    @Path("{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}")
    @Produces("application/json")
    public  String getExamStatus(@QueryParam("matric") String matric,@QueryParam("examName") String exam,@QueryParam("status") int status){
    
        
        System.out.println("control recieved 14");
        
        try{
         if(status == 1){
             
          ExamStatus examstats = new ExamStatus();
          examstats.getCompletedStudent();
            return examstats.returnQuery(matric);
             
         }
         if(status == 2){
           ExamStatus examstats = new ExamStatus();
           examstats.getMissedStudent();
         return   examstats.returnQuery(matric);
       }
         if(status == 3){
             
             
         }
         if(status == 4){
             
             
         }
         if(status == 5){
             
             
         }
        }
        catch(SQLException e){
            e.printStackTrace();
        }
          
          return "";
      }
   
    // to unregister students
    //42
      @GET
    @Path("{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}")
    @Produces("application/json")
    public  String unregisterStudentsQuery(@QueryParam("matric") String matric,@QueryParam("examName") String exam){
          System.out.println("in the unregister student method");
         
          
          if(matric != null && exam != null){
           UnregisterStudent unregister = new UnregisterStudent();
           unregister.unRegStudent();
           unregister.unRegisterStudentQuery(matric, exam);
           return "";
          }
          else return "";
          
           
      }
    
    
    
     @GET
    @Path("{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}")
    @Produces("application/json")
    public  String pendingExamStudents(@QueryParam("subject") String subject){
       
         
         System.out.println(subject);
         if(subject == null )
            return "";
         
       if(subject.indexOf(",") != -1){
         String [] split = subject.split(",");
         ArrayList<String> exams = new ArrayList<>();
         for(String sep : split){
             exams.add(sep);
         }
          PendingExamStudents pending = new PendingExamStudents();
         pending.startQuery();
        
           return  pending.getQueryResults(exams); 
       }
         PendingExamStudents pending = new PendingExamStudents();
         pending.startQuery();
            ArrayList<String> exams = new ArrayList<>();
            exams.add(subject);
     
        return     pending.getQueryResults(exams);
        
        
    }
    
    
     
    @GET
    @Path("{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}")
    @Produces("application/json")
    public  String removeId(@QueryParam("id") String id,@QueryParam("course") String courseExam){
       
        RemoveId.removeId(id, loggedIn,registeredCourses,courseExam);
        return "";
        
    }
    
      @GET
    @Path("{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}")
     @Produces("application/json")
    public String statusCancel(@QueryParam("sub")String sub){
          
          System.out.println("34");
        Status sta = new Status();
          sta.changeExamStateEnd();
         sta.confirmStateChange(sub);
         sta.removeStudents(sub);
      return  "";
       
        
        
    }
    
    
    
      @GET
    @Path("{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}")
     @Produces("application/json")
    public String status(@QueryParam("sub")String sub){
          
          System.out.println("33");
        Status sta = new Status();
          sta.changeExamStateNow();
         sta.confirmStateChange(sub);
          
       return  "";
       
        
        
    }
    
    
    
    
     @GET
    @Path("{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}")
     @Produces("application/json")
    public String reports(@QueryParam("sub")String sub){
          System.out.println("32");
         
          
           String [] split = sub.split("\\[split\\]");
           
          try{
         if((split[0] != null) && (split[1] != null)){
             System.out.println(split[0]+" "+split[1]);    
          }
          }
          catch(ArrayIndexOutOfBoundsException e){
              e.printStackTrace();
               return  new Gson().toJson("ArrayOutOfBound"); 
          }
          Report rep = new Report();
           rep.getSinglereport();
       return  new Gson().toJson( rep.getSheet(split[0],split[1].replaceAll("%20","")));
       
        
        
    }
    
      
     
      @GET
    @Path("{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}")
     @Produces("application/json")
    public String report(){
          System.out.println("31");
          
          Report rep = new Report();
          rep.rep();
       return  new Gson().toJson(rep.getReportDate());
        
        
    }
    
    
    
    
      @GET
    @Path("{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}")
     @Produces("application/json")
    public String unRegMethod(@QueryParam("matric") String matric,@QueryParam("examName") String exam){
       UnregisterStudent unreg = new UnregisterStudent();
      
    unreg.unRegStudent();
    unreg .unRegisterStudentQuery(matric, exam);
      return  new Gson().toJson("Candidate succesfully ");
        
        
    }
    
    
    
   
      @GET
    @Path("{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}")
     @Produces("application/json")
    public String editGetStudentReturnMethod(@QueryParam("matric") String matric){
      
     getStudent();
    getStudentQuery(matric);
     
      
        
        return  new Gson().toJson(requestedCandidate);
        
        
    }
    
    
    
    public void getStudent(){
        
       try{
          javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
                   connection = ds.getConnection(); 

    
    
   getRequestedStudent = connection.prepareStatement("SELECT LastName,FirstName,MiddleName,Gender,StudentNumber FROM newstudenttable WHERE StudentNumber =?");
     }
        
            catch(SQLException | NamingException e){
               e.printStackTrace();
            } 
        
       
    }
    
    public void getStudentQuery(String matric){
          ResultSet getResults = null;
        try{
            StringBuilder result = new StringBuilder();
         getRequestedStudent.setString(1, matric);
         getResults = getRequestedStudent.executeQuery();
         
      
         
         while ( getResults.next() )
         {
       
             
    StringBuilder builder = new StringBuilder();
          builder.append("#");
             
           builder.append(getResults.getString("LastName").concat(","));
            builder.append(getResults.getString("FirstName").concat(","));
              builder.append(getResults.getString("MiddleName").concat(","));
                builder.append(getResults.getString("Gender").concat(","));
            builder.append(getResults.getString("StudentNumber"));
            
             result.append(builder);
          
               
        } // end while
         
       requestedCandidate = result.toString();
        
      } // end try
      catch ( SQLException sqlException )
      {
         sqlException.printStackTrace();         
      } //
      
      finally
      {
         try 
         {
             if(getResults!= null){
         getResults.close();
             }
             
             if(connection!= null){
                 connection.close();
                  
             }
         
         } // end try
         catch ( SQLException sqlException )
         {
            sqlException.printStackTrace();         
            
         } // end catch
      }
      } // en
        
        
       
        
        
   
    
    
    //edit students
       @POST
    @Path("{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}")
     @Produces("application/json")
    public String editStudents(@QueryParam("LastName") String lastName,@QueryParam("FirstName") String firstName,@QueryParam("MiddleName") String middleName,@QueryParam("Gender") String gender,@QueryParam("matric") String matric,@QueryParam("StudentNumber") String formerNumber){
           System.out.println("control 44:");
           
           EditStudentProfile edit = new EditStudentProfile();
     edit.editStudentProfileMethod();
    return  edit.editStudentProfileQuery(lastName, firstName, middleName, gender, matric,formerNumber);
    }
    
    
    
    
   
    //delete students
     @GET
    @Path("{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}")
     @Produces("application/json")
    public String deleteStudentMethod(@QueryParam("matric") String matric){
      
         DeleteStudentFromDb delete = new DeleteStudentFromDb();
      delete.deleteStudents();
      delete.deleteStudentQuery(matric);
     return  new Gson().toJson("Candidate "+matric+"  Deleted");
        
        
    }
    
    
    
 
   
    @GET
    @Path("{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}")
     @Produces("application/json")
    public String getRegisteredExamStudents(@QueryParam("exam") String exam){
      
        getAllRegisteredExamStudents();
        getAllRegisteredStudentQuery(exam);
        
        return  new Gson().toJson(registeredExamStudent);
    }
    
    public void getAllRegisteredExamStudents(){
      
           try{
         javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
                   connection = ds.getConnection(); 


    getRgisteredExamStudent = connection.prepareStatement("SELECT * FROM examstudenttable INNER JOIN newstudenttable ON "+
            "examstudenttable.matric=newstudenttable.StudentNumber WHERE ExamName=?");
                }
             
            catch(SQLException | NamingException e){
               e.printStackTrace();
            }  
           
           
        
        
    }
    
    public void getAllRegisteredStudentQuery(String exam){
          
        List results = null;
      ResultSet resultSet = null;
        StringBuilder result = new StringBuilder();
        // executeQuery returns ResultSet containing matching entries
           
        try{
            getRgisteredExamStudent.setString(1, exam);
         resultSet = getRgisteredExamStudent .executeQuery(); 
        // results = new ArrayList< Person >();
         
         while ( resultSet.next() )
         {
          StringBuilder builder = new StringBuilder();
          builder.append("#");
            String concat = ""; 
         
            concat+= resultSet.getString("LastName").concat(" ");
            concat+=resultSet.getString("FirstName").concat(",");
            builder.append(concat);
             builder.append(resultSet.getString("MiddleName").concat(","));
                builder.append(resultSet.getString("Gender").concat(","));
            builder.append(resultSet.getString("StudentNumber"));
            
            
            
            
             
     result.append(builder);
     
        } // end while
      registeredExamStudent = result.toString();
           
            
            
            
      } // end try
      catch ( SQLException sqlException )
      {
         sqlException.printStackTrace();         
      } // end catch
      finally
      {
         try 
         {
              if(resultSet != null)
            resultSet.close();
              
              if(connection!=null){
                  connection.close();
                   
                   
              }
         } // end try
         catch ( SQLException sqlException )
         {
            sqlException.printStackTrace();         
            
         } // end catch
      } // end finally
       
        
    } 
    
   @GET
     @Path( "{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}" ) 
    @Produces("application/json")
     public String getactiveStudentsQuery(@QueryParam("matric") String matric,@QueryParam("subject")String subject){
       System.out.println(""+matric +" "+subject);
      
       
       GetActiveStudents activeStuds = new  GetActiveStudents();
         activeStuds.getActiveStudentsStatements();
         activeStuds.getActiveStudentsQuery(matric, subject);
     
    
      return new Gson().toJson(activeStudents);
      
         
         
     }
     
      
      
  

     @GET
     @Path( "{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}" ) 
    @Produces("application/json")
     public String getonStudents(){
     getStudentsQuery();
      getAllStudentsQueryFinal();
      return new Gson().toJson(allTotalStudents);
      
         
         
     }
     
    
    
    public void getStudentsQuery(){
        
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


          
getAllStudentsQuery = connection.prepareStatement("SELECT * FROM newstudenttable");
    
     }
            catch(SQLException | NamingException e){
               e.printStackTrace();
            }   
        
          
       
    }
    //method for all student table
    public void getAllStudentsQueryFinal(){
          List results = null;
      ResultSet resultSet = null;
        StringBuilder result = new StringBuilder();
        // executeQuery returns ResultSet containing matching entries
           
        try{
         resultSet = getAllStudentsQuery.executeQuery(); 
        // results = new ArrayList< Person >();
         
         while ( resultSet.next() )
         {
          StringBuilder builder = new StringBuilder();
          builder.append("#");
             
           builder.append(resultSet.getString("LastName").concat(","));
            builder.append(resultSet.getString("FirstName").concat(","));
            builder.append(resultSet.getString("MiddleName").concat(","));
              builder.append(resultSet.getString("StudentNumber").concat(","));
                builder.append(resultSet.getString("Gender"));
                
                
                
                //   builder.append(resultSet.getString("Gender").concat(","));
            //builder.append(resultSet.getString("StudentNumber"));
            
            
            
            
             
     result.append(builder);
     
        } // end while
     allTotalStudents = result.toString();
           
            
            
            
            
      } // end try
      catch ( SQLException sqlException )
      {
         sqlException.printStackTrace();         
      } // end catch
      finally
      {
         try 
         {
             if(resultSet != null)
            resultSet.close();
             
             
             if(connection != null){
               connection.close();
                
             }
         } // end try
         catch ( SQLException sqlException )
         {
            sqlException.printStackTrace();         
            
         } // end catch
      } // end finally
       
       
    }    
    //ongoingexams
     @GET
     @Path( "{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}" ) 
    @Produces("application/json")
     public String getonGoingExamMethods(){
       
         //manages ongoing exams
          
          long seconds = System.currentTimeMillis();
          Initializer.initializer();
         StartUpClassOngoingExams start = new StartUpClassOngoingExams();
         start.manageOngoingExam();
         start.startOngoingExam();
         
         long now = System.currentTimeMillis();
        System.out.println("took this amount of seconds now "+(now - seconds));
   
      
      
      return new Gson().toJson(ongoingExam);
      
         
         
     }
     
    
    
   
     @GET
     @Path( "{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}" ) 
     @Produces("application/json")
   
      public String getExams(@QueryParam("subject") String subject, @QueryParam("status") String status  ){
         System.out.println("i am here in the new "+subject);
       ChangeExamState changeState = new ChangeExamState();
        if(Integer.parseInt(status) == 4){
         changeState.changeExamStateNow();
          changeState.confirmStateChange(subject);
          return "";
     }
         System.out.println(status);
     if(Integer.parseInt(status) == 2){
        
      changeState.changeExamStateEnd();
     changeState.confirmStateChange(subject);
     removeStudents(subject);
         System.out.println("working perfectly");
     return new Gson().toJson(subject+ "successfully deleted");
     }
     
   if(Integer.parseInt(status) == 3){
          
      changeState.changeExamStateCancel();
     changeState.confirmStateChange(subject);
      
     return "";
     }
       
        
        
         return "";
    }
    //this method set status to 1 in pending exams and makes them ready for start up
    
    
    public void removeStudents(String exam){
           try 
      {
        
       
          
          
          
          
           
           removeRegisteredStudents.setString(1, exam );
          
             
             
             
             removeRegisteredStudents.executeUpdate();
             
             
           
        
      } // end try
      catch ( SQLException sqlException )
      {
         sqlException.printStackTrace();         
      } // end catch
     // end finally
    }
    
    
    
    @GET
    @Consumes("application/json")
    @Path("{state}/{register}/{insert}/{test}/{query}/{student}/{registerStud}/{totalStudents}/{students}/{results}/{form}")
    public String publishStudents(@QueryParam("Exam") String exam){
        System.err.println("the exam "+exam);
        totalExamStudents= "";
        
        examStudents();
         examStudentsQuery(exam);
        
         
        return new Gson().toJson(totalExamStudents);
        
        
    }
    
    public void examStudents(){
        
          try{
         javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
                   connection = ds.getConnection(); 


              
              
   getAllRegisteredStudents  = connection.prepareStatement("SELECT * FROM examstudenttable WHERE ExamName = ?");
   registerStudentsExam = connection.prepareStatement("SELECT * FROM newstudenttable WHERE StudentNumber = ?");
   
     
     }
            
            catch(SQLException | NamingException e){
               e.printStackTrace();
            }   
        
        
        
    }
    
    public void examStudentsQuery(String exam){
        
        ArrayList matrics = new ArrayList();
        System.err.println(" started in next method ");
        
        
          
      ResultSet resultSet = null;
      ResultSet getResults = null;

        // executeQuery returns ResultSet containing matching entries
           
        try{
            getAllRegisteredStudents.setString(1, exam);
         resultSet =  getAllRegisteredStudents.executeQuery(); 
         
       
        // results = new ArrayList< Person >();
         
         while ( resultSet.next() )
         {
       
             System.err.println(resultSet.getString("matric"));
    matrics.add(resultSet.getString("matric"));
     
        } // end while
     } // end try
      catch ( SQLException sqlException )
      {
         sqlException.printStackTrace();         
      } // end catch
        
         StringBuilder result = new StringBuilder();
      for ( int c =0; c < matrics.size(); c++){
         
          try{
              registerStudentsExam.setString(1, matrics.get(c).toString());
              
        getResults = registerStudentsExam.executeQuery(); 
       
         while ( getResults.next() )
         {
       
             
    StringBuilder builder = new StringBuilder();
          builder.append("#");
             
           builder.append(getResults.getString("LastName").concat(","));
            builder.append(getResults.getString("FirstName").concat(","));
              builder.append(getResults.getString("MiddleName").concat(","));
                builder.append(getResults.getString("Gender").concat(","));
            builder.append(getResults.getString("StudentNumber"));
            
            result.append(builder);
          
                allStudents.put(getResults.getString("StudentNumber"), builder.toString());
        } // end while
         
        totalExamStudents = result.toString();
        
      } // end try
      catch ( SQLException sqlException )
      {
         sqlException.printStackTrace();         
      } //
      
      finally
      {
         try 
         {
             
             if(resultSet!= null)
            resultSet.close();
           if(getResults != null)
            getResults.close();
           
           
           if(connection!= null)
            connection.close();
            
            
           
         } // end try
         catch ( SQLException sqlException )
         {
            sqlException.printStackTrace();         
            
         } // end catch
      }
      } // en
        
        
       
        
        
    }
    
    
    
    
    
    //student pool.js select subject into db
    @GET
    @Consumes("application/json")
    @Path("{state}/{register}/{insert}/{test}/{query}/{student}/{registerStud}/{totalStudents}/{students}")
    public String totalStudents(@QueryParam("students") String students, @QueryParam("exam") String exam){
       // System.err.println(students);
         System.err.println("control 0.5 "+exam);
         RegisterExamStudents register = new RegisterExamStudents();
         register.insertNewStudentsTable();
         return register.insertNewStudentsTableQuery(students, exam);
     }
   
    //get alll students who havent been registered
   @GET
    @Consumes("application/json")
    @Path("{state}/{register}/{insert}/{test}/{query}/{student}/{registerStud}/{totalStudents}")
    public String getStudentsServiceMethod(@QueryParam("examName")String exam){
        System.out.println(exam);
        getAllStudentsService();
        getAllStudentsQuery(exam);
        return  new Gson().toJson(totalStudents);
    }
    
    public void getAllStudentsService(){
        
          
           try{
       
                 javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
                   connection = ds.getConnection(); 


               
    getAllStudents  = connection.prepareStatement("SELECT * FROM newstudenttable  WHERE StudentNumber NOT IN (SELECT matric FROM examstudenttable WHERE ExamName=?)");
     
     }
            catch(SQLException | NamingException e){
               e.printStackTrace();
            }  
           
           
        
        
    }
    
    public void getAllStudentsQuery(String exam){
          
        
        List results = null;
      ResultSet resultSet = null;
        StringBuilder result = new StringBuilder();
        // executeQuery returns ResultSet containing matching entries
           
        try{
            getAllStudents.setString(1, exam);
         resultSet = getAllStudents.executeQuery(); 
        // results = new ArrayList< Person >();
         
         while ( resultSet.next() )
         {
          StringBuilder builder = new StringBuilder();
          builder.append("#");
             
           builder.append(resultSet.getString("LastName").concat(","));
            builder.append(resultSet.getString("FirstName").concat(","));
              builder.append(resultSet.getString("MiddleName").concat(","));
                builder.append(resultSet.getString("Gender").concat(","));
            builder.append(resultSet.getString("StudentNumber"));
            
            
            
            
             
     result.append(builder);
     
        } // end while
       totalStudents = result.toString();
            System.out.println("these are the students "+totalStudents);
            
            
            
            
      } // end try
      catch ( SQLException sqlException )
      {
         sqlException.printStackTrace();         
      } // end catch
      finally
      {
         try 
         {
             if(resultSet != null)
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
    /*
     @POST
      @Path("{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}")
     @Consumes(MediaType.MULTIPART_FORM_DATA)
    
    public String p(@FormDataParam("file") InputStream uploadInputstream, @FormDataParam("file") FormDataContentDisposition fileDetail ){
         System.err.println(" the thing has started");
         
        String uploadFileLocation = "c://uploaded/"+fileDetail.getFileName();
        
        writeToFile(uploadInputstream,uploadFileLocation);
        String output = "File Uploaded to : "+uploadFileLocation;
        return ""; //Response.status(200).entity(output).build();
    }
    */
    private void writeToFile(InputStream uploadInputStream,String uploadedFileLocation){
        
        try{
            OutputStream out = new FileOutputStream(new File(uploadedFileLocation));
            
            int read = 0;
            byte[] bytes = new byte[1024];
            
            out = new FileOutputStream( new File(uploadedFileLocation));
            
            while((read = uploadInputStream.read(bytes)) != -1){
                out.write(bytes,0,read);
            }
            out.flush();
            out.close();
        }
        catch(IOException e){
           e.printStackTrace();
        }
    }
    
    
    
    
    @GET
    @Consumes("application/json")
    @Path("{state}/{register}/{insert}/{test}/{query}/{student}/{registerStud}")
    public String insertRegStudents(  @QueryParam("first") String first,@QueryParam("last") String last,@QueryParam("middle") String middle,@QueryParam("gender") String gender,@QueryParam("number") String number){
         InsertStudentsDatabaseQueryXcelSheet insert = new InsertStudentsDatabaseQueryXcelSheet();
         insert.createPreparedStatement();
        return  insert.returnStatusQuery(first, last, middle, gender, number);
  }
    
    
    
  
    
    
    
    
    
    @GET
  @Path("{updateTable}/{update}/{insert}/{query}/{form}")
    @Consumes("application/json")
    @Produces("application/json")
    public String  activeEams(@QueryParam("subject") String subject){
        SetGetScheduledPageRescheduleExam getData = new SetGetScheduledPageRescheduleExam();
        
        if(subject == null){
       getData.setActiveExams();
       getData.getActiveExam();
        }
        else{
            getData.setCurrentExams();
            getData.getQueryStatus(subject);
       }
       
        
        return  new Gson().toJson(examTable);
        
    }
    
    
   
    
    @GET
    @Consumes("application/json")
    @Path("{activeExam}/{table}/{insert}/{test}/{query}/{inquery}")
    
    public String updateSession(@QueryParam("question") String question,@QueryParam("scheduleDate") String schedule ,@QueryParam("time") String time,@QueryParam("duration") String duration,@QueryParam("feedback") String feedback,@QueryParam("amount")String amo,@QueryParam("status")String status ){
        System.out.println("transferring to control add Exam control 27 :");
     
        AddNewExam addExam = new AddNewExam();
        
        
         if(status == null){
          addExam.insertExam();
        return addExam.runInsertExamQuery(question,schedule,time,duration,feedback,amo);
        }
         
         if(status.equals("33")){
             addExam.insertExamStart();
             return addExam.runInsertExamQueryAdvanced(question, schedule, time, duration, feedback, amo);
             
         }
         else{
             addExam.updateAddNewExam();
            return  addExam.returnUpdateQuery(question, schedule,time, duration, feedback, amo);
         }
       
         
    }
    
    
    @POST
    @Consumes("application/x-www-form-urlencoded")
     @Path( "{admin}/{setQuestions}" ) 
   public String setQuestions( @FormParam("question") String question,@FormParam("time") String time,@FormParam("calculator") String calculator){
        System.err.println(question+" "+time);  
        
              getAllQuestions(question);
           getAllPeople(time,question,question,null);
      
           return "";
           
           
     }
    
    
    
  
    
    
   
    
    
    
    @GET
    @Path( "{schedule}/{examination}/{exams}") 
    public String schedule(){
     
        System.err.println("control: 002");
         AddNewSchedulePage schedulePage = new AddNewSchedulePage();
         schedulePage.scheduleExam();
         schedulePage.scheduleExamResults();
        return  new Gson().toJson(examsSchedule);
        
    }
    
    
    
    
    
    
    
    public String getAllQuestions(String question){
      try{
          
          
            javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
                   connection = ds.getConnection(); 


           getQuestions =  connection.prepareStatement("SELECT * FROM examstable WHERE Subject =?");
     
            }
            catch(SQLException | NamingException e){
               e.printStackTrace();
            }  
        
      return "";
    }
    
    
    public String getAllPeople(String time,String subject,String feed,String amount)
   {
      List results = null;
      ResultSet resultSet = null;
     String a = null;
      try 
      {
          getQuestions.setString(1, subject );
       resultSet = getQuestions.executeQuery(); 
        // results = new ArrayList< Person >();
        while ( resultSet.next() )
         {   
         questionTypeAndTime = new ArrayList();
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
                    builder.append(conc);
                    }
                    
                }
              count++;
            }
         questionTypeAndTime.add(builder.toString());
         questionTypeAndTime.add(resultSet.getString("Type"));
         questionTypeAndTime.add(time);
         questionTypeAndTime.add(feed);
         questionTypeAndTime.add(resultSet.getString("Author"));
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
             if(resultSet!= null)
            resultSet.close();
             
             if(connection!= null){
                 connection.close();
             
                  
             }
         } // end try
         catch ( SQLException sqlException )
         {
            sqlException.printStackTrace();         
            
         } // end catch
      } // end finally
      
      return "true";
   } // end method getAllPeople
    
    
    
    
    
    public String getAllStudents(){
          
        try{
      
              javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
                   connection = ds.getConnection(); 


            
       getStudents = connection.prepareStatement("SELECT * FROM student");
       getStudents.executeQuery();
           
         
           
           
            }
            catch(SQLException | NamingException e){
               e.printStackTrace();
            }  
        
        
         enterStudents();
      return "";
    }
    
    
    
    public void enterStudents(){
        
           ResultSet resultSet = null;
      
      
        studs = new ArrayList();
      
      try 
      {
         // executeQuery returns ResultSet containing matching entries
         
         resultSet = getStudents.executeQuery(); 
       
         
         while ( resultSet.next() )
         {
            
          allStudents.put(resultSet.getString("name"), resultSet.getString("matric"));
         
           
         
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
             
             if(resultSet!=null)
            resultSet.close();
             
             if(connection!=null)
               connection.close();
             
              
         } // end try
         catch ( SQLException sqlException )
         {
            sqlException.printStackTrace();         
            
         } // end catch
      } //
         
    }
    
    
    
    
     @GET
     @Path( "{student}/{matric}" ) 
    @Produces("application/json")
     public String getMatric(@QueryParam("matric") String matric,@QueryParam("status") int status,@QueryParam("exam") String exam,@QueryParam("password") String password){
         
         
         
         if(status == 3){
             
             
         }
         
         
         if(password != null){
             
             
             LogIn log = new LogIn();
             if(log.checkUser(matric, password) == 0)
                 return new Gson().toJson("Invalid password");
             
                 
         }
         
         
         
         
         if(status == 1){
            ResultSheet getResult = new ResultSheet();
            getResult.startGetResult();
            return new Gson().toJson(getResult.getResults(exam));
            
         }
       
         
          String value = "false";
          System.err.println("this is it "+loggedIn.size());
          
           
          if(StartUpClassOngoingExams.isLogin){
               String val =registeredStudents.get(matric);
               System.out.println("in is login "+matric);
               System.out.println("in is lo"+val);
         value = "*"+val;   
            
            System.out.println("these ist the value"+value);
        loggedIn.put(matric, "student");
        startedStudents.remove(matric);
          
         return new Gson().toJson(value);
          
          }
         
        if( startedStudents.containsKey(matric) ){
            String val =registeredStudents.get(matric);
         value = "*"+val;   
              System.out.println("in is login "+matric);
               System.out.println("in is lo"+val);
            System.out.println("these ist the value"+value);
        loggedIn.put(matric, "student");
        startedStudents.remove(matric);
         
         return new Gson().toJson(value);
        
         
         }
      
        if (  loggedIn.containsKey(matric)) {
           value = "session active";
           
            
           return new Gson().toJson(value);
          
         }
        
           if(registeredStudents.containsKey(matric)){
             value = registeredStudents.get(matric);
            loggedIn.put(matric, "student");
              return new Gson().toJson(value);
         }
         
           
           
        System.err.println("this is the final value "+value);
         
        return new Gson().toJson(value);
        
          
        
         
     }
     
    
     @GET
    @Consumes("application/json") 
    @Path( "{candidate}/{cancelsession}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}" ) 
     public String cancelActiveSession(@QueryParam("id") String id){
       
        startedStudents.put(id,"");
        
        
         System.err.println("removed this id "+id);
         
         return "true";
         
     }
     
     @GET
     @Path( "{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}/{b}" ) 
    @Produces("application/json")
     public String getExams(@QueryParam("id") String id){
           
         
    
        return RegistredStudentsExams.getStudentsExams(id);
        
     }
    
    @GET
    @Path( "{name}" ) 
    @Produces("application/json")
    public String getJson(@PathParam( "name" ) String name, @QueryParam("question") String question,@QueryParam("time")String timer ) {
        //TODO return proper representation object
       // throw new UnsupportedOperationException();
      Question message = new Question(); // create wrapper object
    if(allExams.containsKey(question)){
     ArrayList set;
     set = allExams.get(question);
     String questionMain = set.get(0).toString();
     String type = set.get(1).toString();
     String times = set.get(2).toString();
     String feed = set.get(3).toString();
     int time =  Integer.parseInt(times);
     
          message.setQuestion(String.format( "%s, %s",
         "Starks copyright", questionMain ) );
          
          message.setQuestionType(String.format("%s", type));
          
          message.setFeedBack(String.format("%s", feed));
          
    //      message.setQuestionTime(String.format("%d", time));
          message.setQuestionTime(time);
            
     }
    else{
        Initializer.initializer();
        
         StartUpClassOngoingExams start = new StartUpClassOngoingExams();
                 
                  start.manageOngoingExam();
                    start.startOngoingExam();
                    
            
            ArrayList set;
            set = allExams.get(question);
         String questionMain = set.get(0).toString();
           String type = set.get(1).toString();
           String timesV = set.get(2).toString();
         String feedV = set.get(3).toString();
          int time =  Integer.parseInt(timesV);
     
          message.setQuestion(String.format( "%s, %s",
         "Starks copyright", questionMain ) );
          
          message.setQuestionType(String.format("%s", type));
          
          message.setFeedBack(String.format("%s", feedV));
          
    //      message.setQuestionTime(String.format("%d", time));
          message.setQuestionTime(time);
           
            
    }
     
        
     return new Gson().toJson( message); 
       
    }

    /**
     * PUT method for updating or creating an instance of Exam
     * @param content representation for the resource
     * @return an HTTP response with content of the updated or created resource.
   
    @PUT
    @Consumes("application/json")
    public void putJson(String content) {
        System.err.println(content);
        
    }
      */
    
    
 /*   @PUT
     @Consumes("application/json")
    @Path( "{student}/{matric}/{name}" ) 
     public void insertName(@PathParam( "name" ) String name){
        
    }
    */
    //uncomment 
   @POST
@Produces("application/json")
     @Path( "{admin}/{verify}/{a}/{a}/{a}/{a}/{a}/{a}/{a}/{a}/{a}/{a}/{a}" ) 
     
    public String login(@QueryParam("username") String userrname,@QueryParam("password") String password ){
          //System.err.println(userName +" "+password);
        
          LogIn logs = new LogIn();
          logs.getUser();
          logs.verify(userrname, password);
       
          
          
          
      
          
       
           if( com.rest.service.LogIn.value != true) {
                 System.err.println(userrname +" pass "+password+" false");
             return new Gson().toJson("false");
            } else {
                 System.err.println(userrname +" pass "+password+" true");
                 com.rest.service.LogIn.value =false;
               return new Gson().toJson("true");
           }
         
        
         
          
         
      }
         
        
  @GET
  @Produces("application/json")
  @Path("{admin}/{set}/{password}")
   public String queryExam(@QueryParam("status") int status){
      System.out.println("it is hitting here i suspect");
      
      
      
      if( status == 1 ){
        System.err.println("control: 002");
         AddNewSchedulePage schedulePage = new AddNewSchedulePage();
         schedulePage.scheduleExam();
         schedulePage.scheduleExamResults();
        return  new Gson().toJson(examsSchedule);
      }
      
      QueryExamDatabase exams = new QueryExamDatabase();
      exams.startQuery();
      
      return exams.returnQuery();
      
      
      
  }
      
    @POST
    @Consumes("application/json")
       @Path( "{admin}/{set}/{password}" ) 
     public String insertAdmin(@QueryParam("status") int status,@QueryParam("author") String author,@QueryParam("question") String question,@QueryParam("answer") String answer,@QueryParam("subject") String subject,@QueryParam("grade") String grade,@QueryParam("showAnswer") String showAnswer,@QueryParam("level") String level,@QueryParam("table") String table,@QueryParam("type") int type ){
       
          System.out.println(question +" hello");
          
          
         System.out.println(table);
          
          
        if(status == 1){
        AdminSetUpClass.startServer();
        }
        if(status == 2){
            AdminSetUpClass.stopServer();
        }
       if(status == 3){
            System.err.println("started");
            AutoScheduler.startExecutor();
          
        }
        if(status == 4){
            AutoScheduler.stopExecutor();
        }
        
        if(status == 5){
            GetUploadData upload = new GetUploadData();
            return upload.getFiles();
        }
       
        if(status == 6){
            PopulateExamAndResult populateExam = new PopulateExamAndResult();
         
            
           return new Gson().toJson(populateExam.hello(subject,author,question));
            
        }
        
        if(status == 7){
                 PopulateExamAndResult populateExam = new PopulateExamAndResult();
            
            populateExam.populateAnswers(subject, answer);
         
        }
        
       
        if(status == 8){
            System.out.println("metadata added");
            System.out.println(subject);
            metadata.put(subject, grade+","+showAnswer+","+level);
            return new Gson().toJson("data added");
        }
        
        if(status == 9){
             System.out.println(subject);
            if(metadata.containsKey(subject)){
               System.out.println(subject);
                return new Gson().toJson(metadata.get(subject));
                
            }
            else{
                
            }
        }
        
        
         if(status == 11){
           PopulateExamAndResult populateExam = new PopulateExamAndResult();
         return new Gson().toJson(populateExam.populateDatabase(subject, author, type, question, table));
            
           }
        if(status == 12){
         
          PopulateExamAndResult popu = new PopulateExamAndResult();
          return new Gson().toJson(popu.updateDatabase(subject, question, table));
          
        }
        
        if(status == 13){
            
        }
        
        return new Gson().toJson("Server has finshed executing");
    }
    
    
    
    
    
     
     
  
  
      
    
    
    
    
    
    
    class Question{

        public Question() {
        }

        public Question(String question) {
            this.question = question;
        }
        
        
        
        
        
        
        
      String question;
      String questionType;
      String feedBack;
      int questionTime;

        public String getFeedBack() {
            return feedBack;
        }

        public void setFeedBack(String feedBack) {
            this.feedBack = feedBack;
        }

      
        public String getQuestion() {
            return question;
        }

        public void setQuestion(String question) {
            this.question = question;
        }

        public String getQuestionType() {
            return questionType;
        }

        public void setQuestionType(String questionType) {
            this.questionType = questionType;
        }

        public int getQuestionTime() {
            return questionTime;
        }

        public void setQuestionTime(int questionTime) {
            this.questionTime = questionTime;
        }

     
        
        
      
      
        
    }
 }




