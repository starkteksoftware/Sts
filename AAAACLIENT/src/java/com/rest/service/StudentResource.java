/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.service;

import com.google.gson.Gson;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.enterprise.context.RequestScoped;
import javax.ws.rs.POST;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

/**
 * REST Web Service
 *
 * @author user
 */
@Path("student")
@RequestScoped
 
public class StudentResource {

    @Context
    private UriInfo context;

    static String getAllSubjects = "";

    /**
     * Creates a new instance of StudentResource
     */
    public StudentResource() {
    }

    /**
     * Retrieves representation of an instance of com.rest.service.StudentResource
     * @return an instance of java.lang.String
     */


    /**
     * PUT method for updating or creating an instance of StudentResource
     * @param content representation for the resource
     */

    /**
     * PUT method for updating or creating an instance of StudentResource
     * @param status
     * @param type
     * @param subjects
     * @param matric
     * @param email
     * @param password
     * @param lastName
     * @param firstName
     * @param middleName
     * @param institution
     * @param mobileNumber
     * @param gender
     * @param dob
     *  @param subjects
     * @param address
     * @param address2
     * @param number2
     * @param comment
     *  @param password
     * @param number2

     * @return
     */

    /**
     * PUT method for updating or creating an instance of StudentResource
     * @param status
     * @param exam
     * @param type
     * @param subjects
     * @param time
     * @param score
     * @param attempt
     * @param complete
     * @param matric
     * @param password
     * @param lastName
     * @param firstName
     * @param middleName
     * @param institution
     *  @param mobileNumber
     * @param gender
     * @param dob
     * @return
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("{exam}/{start}/{section}/{exam}")
    public String examination(@QueryParam("matric") String matric,@QueryParam("exam")String exam,@QueryParam("type")String type,@QueryParam("status") String status,@QueryParam("time") String time,@QueryParam("score")String score,@QueryParam("attempt")String attempt,@QueryParam("complete") boolean  complete){
        System.out.println("touching registered Exams to get information)");
            
         
        
        if(status == null){
        if(type != null){
            StudentResourceGetRegisteredExams regExam = new StudentResourceGetRegisteredExams();
        
        String typeF = "";
                    if(Integer.parseInt(type) == 5){
                        typeF = "1";
                    }
                     if(Integer.parseInt(type) == 6){
                         typeF = "2"; 
                    }
                      if(Integer.parseInt(type) == 7){
                          typeF = "3";
                    }
                       if(Integer.parseInt(type) == 8){
                          typeF = "4";
                    }
                       
           return new Gson().toJson(regExam.createExams(matric, exam, typeF,type));
            
        }
        else{
            return new Gson().toJson("Log In");
            
        }
        }
           
          
        if(status.equals("result")){
           StudentResourceResult results = new StudentResourceResult();
           
           
                   try{
                  
         return new Gson().toJson(results.postResult(matric, exam, attempt, time, score, type,complete));
                   }
                   catch(ArrayIndexOutOfBoundsException e){
                    e.printStackTrace();
                    
                   }
          
          
       
            }
          
        
    //    return StudentResourceGetRegisteredExams.getStudentsExams(matric, exam);
        
      
        return "";
    }

     @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("{dashboard}/{information}/{data}")
     public String dashboard(@QueryParam("matric")String matric,@QueryParam("type")String type, @QueryParam("institution") String institution){
        System.out.println("Getting data for dashboard for ");

      
         
         StudentResourceDashBoardHome dashboard = new StudentResourceDashBoardHome();
         return new Gson().toJson(dashboard.startQuery(matric,type,institution ));






     }


     @POST
     @Produces(MediaType.APPLICATION_JSON)
     @Path("{verify}/{login}")
     public String verifyAccount(@QueryParam("matric")String matric,@QueryParam("status") int status,@QueryParam("exam")String exam, @QueryParam("password") String password){


         if(status == 1){
            ResultSheet getResult = new ResultSheet();
            getResult.startGetResult();
            return new Gson().toJson(getResult.getResults(exam));

         }
         
         
         if(status == 2){
             StudentResourceVerification verification = new StudentResourceVerification();
             System.out.println(matric+" "+password);
           return new Gson().toJson(verification.verify(matric,password ));
           
         }


 return "";
 

     }





     


    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("{course}/{information}")
     public String course(@QueryParam("status") int status, @QueryParam("subjects") String subjects ,@QueryParam("matric")String matric){
        System.out.println("Returning Subjects registered on exam table");
        if(status == 1){
            System.out.println("entered with status 1  subjects: "+subjects +"  matric : "+matric);
                try{
            StudentResourceRegisterExamStudent registerStudent = new StudentResourceRegisterExamStudent();
            registerStudent.insertNewStudentsTable();
           return new Gson().toJson(registerStudent.insertNewStudentTable(matric, subjects));
            
            
                }
                catch(ArrayIndexOutOfBoundsException e){
                  e.printStackTrace();
                  
                }

        }


        if(status == 2){
            StudentResourceGetAllSubjects getSubjects = new StudentResourceGetAllSubjects();
           return new Gson().toJson(getSubjects.getReturningStudentSubjects(matric));

        }

        
         if(status == 3){
             
                StudentResourceEditUpdate edit = new StudentResourceEditUpdate();
                      return new Gson().toJson(edit.edit(matric));
                       
         }
         
         if(status == 4){
             StudentResourceExamData returnExamData = new StudentResourceExamData();
             return  new Gson().toJson(returnExamData.queryData(subjects));
             
         }
         
         if(status == 5){
             StudentResourceViewProfile getProfile = new StudentResourceViewProfile();
             return new Gson().toJson(getProfile.queryData(matric));
         }
         
         if (status == 6){
             StudentResourceViewProfile getSubject = new StudentResourceViewProfile();
             return new Gson().toJson(getSubject.learderBoardSubjects(subjects));
         }







        //this method never gets touched
       StudentResourceGetAllSubjects getSubjects = new StudentResourceGetAllSubjects();

        return new Gson().toJson(getSubjects.sendAllResults());




    }

@GET
@Produces(MediaType.APPLICATION_JSON)
@Path("{mail}")
public String sendMail(@QueryParam("email") String email,@QueryParam("status") int status){
    if(status == 1){
        StudentResourceHandleMailing resource = new StudentResourceHandleMailing();
       
    return new Gson().toJson( resource.getPassword(email));
    
    }
    
    
    return new Gson().toJson("");
    
}
     
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Path("{register}")
    public String student(@QueryParam("email") String email,@QueryParam("password") String password,@QueryParam("lastName") String lastName,@QueryParam("firstName") String firstName, @QueryParam("middleName")String middleName, @QueryParam("institution")String institution,@QueryParam("mobileNumber")String mobileNumber
    ,@QueryParam("gender") String gender,@QueryParam("DOB")String dob
    
    ,@QueryParam("status") String status,@QueryParam("number2") String number2,@QueryParam("address") String address,@QueryParam("address2") String address2, @QueryParam("comment") String comment,@QueryParam("matric") String matric){



       
            if(status == null){
        System.out.println("Student Id"+email + lastName+firstName+institution+dob+gender+password );

        StudentRegistration register = new StudentRegistration();
      return new Gson().toJson(register.startRegistration(email, password, lastName, firstName, middleName, institution, mobileNumber, gender, dob));

            }
            
            if(status.equals("1")){
            StudentResourceEditUpdate upd = new StudentResourceEditUpdate();
                return new Gson().toJson(upd.update(firstName, lastName, middleName, gender, email, mobileNumber, address, number2, address2, comment,matric));
           }

      return new Gson().toJson("Method not Called in registration post");



    }
}