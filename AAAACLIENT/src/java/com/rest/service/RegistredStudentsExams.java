/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.service;

import com.google.gson.Gson;
import java.util.Arrays;


/**
 *
 * @author bola odesile
 */
public class RegistredStudentsExams {
    
    
    public static String getStudentsExams(String id){
           String finalString = "";
    try{
       
          StringBuilder appended = new StringBuilder();
          if(Exam.registeredCourses == null)
             return new Gson().toJson("Server not started");
         if(Exam.registeredCourses.containsKey(id)){
            
             String manipulate = Exam.ongoingExam;
             System.out.println(manipulate);
             
             
            String [] distrubute  = Exam.registeredCourses.get(id).split(",");
             System.out.println(Arrays.toString(distrubute));
             
             
             
            
            for(String dis : distrubute){
             if(dis.equals("")){
                 System.out.println("distrubute is empty ");
                 continue;
             }
             int index = manipulate.indexOf(dis);
             int second = manipulate.lastIndexOf("#",index);
             int third = manipulate.indexOf("#",(second + 1));
             if(third == -1){
                 String sub = manipulate.substring(second,manipulate.length());
                
                 appended.append(sub);
             }
             else{
                 System.out.print(second +" "+third);
                 if(second == -1){
                   String sub = manipulate.substring(0, third);    
                   appended.append(sub);
                 }
                 else{
             String sub = manipulate.substring(second, third);
             
             System.out.println("these is it in the new state "+sub);
             if(sub.split(",")[0].substring(1, sub.split(",")[0].length()).equals(dis))
                 appended.append(sub);
             else{
                 System.out.println(sub.split(",")[0].substring(1, sub.split(",")[0].length())+" not appended");
                 
             }
                 }
           
             }
           
            }
             
             
         }
        finalString = appended.toString();      
    }
    catch(StringIndexOutOfBoundsException e){
        e.printStackTrace();
    }
       
       
         
      
         return new Gson().toJson(finalString);
    }
}
