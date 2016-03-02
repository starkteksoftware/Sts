/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.service;

import com.google.gson.Gson;
import java.io.File;
import java.util.Date;




/**
 *
 * @author bola odesile
 */
public class GetUploadData {
    
    public String getFiles(){
        String [] files = null;
        StringBuilder appender = new StringBuilder();
        try{
       File file = new File(System.getProperty("user.home")+System.getProperty("file.separator")+"Images");
    if(file.isDirectory()){
      files=  file.list();
      
      
    }
    File [] f = file.listFiles();
    for(File ff: f){
         String a= String.valueOf(ff.length());
      int newValue = 0;
   double d   =  Double.valueOf(a);
   double result = d /1000;
        
    String check = String.valueOf(result);
        System.out.println(check);
    String [] split = check.split("\\D");
        System.out.println(split[0]);
        
    if(Integer.valueOf(split[1]) >= 500){
         newValue = Integer.valueOf(split[0])+1;
    }
    else{
         newValue = Integer.valueOf(split[0]);
    }
        Date date = new Date(ff.lastModified());
        appender.append("#").append( ff.getName()).append(",").append(newValue).append("KB").append(",").append( date.toString());
        
     }
        }
        catch(Exception e){
            e.printStackTrace();
        }
        
        if(files!= null)
        return new Gson().toJson(appender.toString());
        else{
              return new Gson().toJson("No Files in the directory");
              
        }
    }
}
