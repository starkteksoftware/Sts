/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.service;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import javax.naming.NamingException;

/**
 *
 * @author user
 */
public class StudentResourceExamData {
     PreparedStatement getAverage = null;
     PreparedStatement getMaxGrades = null;
     PreparedStatement getCompleteAverage = null;
     PreparedStatement getPassrate = null;
     Connection connection = null;
     ResultSet results = null;
     
     public String queryData(String subject){
         try{
       javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
        connection = ds.getConnection();
        getAverage = connection.prepareStatement(" SELECT AVG(score) from results WHERE courseId =? and YearDate =?");
        getMaxGrades = connection.prepareStatement(" SELECT * from results  WHERE courseId =? ORDER BY score DESC, time ASC limit 5;");
        getCompleteAverage = connection.prepareStatement("SELECT COUNT(complete) from results WHERE courseId =? and complete = 0");
        getPassrate = connection.prepareStatement("SELECT COUNT(score) from results WHERE score > 50 and courseId=?");
        
        StringBuilder appender = new StringBuilder();
        
        for(int c = 2014; c < 2018; c++ ){
            getAverage.setString(1, subject);
            getAverage.setString(2, String.valueOf(c));
            results = getAverage.executeQuery();
            while(results.next()){
                if(results.getInt(1) > 0)
                    appender.append("#").append(results.getInt(1));
                
            }
        }
        
        appender.append("***");
        getMaxGrades.setString(1, subject);
        results = getMaxGrades.executeQuery();
        while(results.next()){
            
            appender.append("#").append(results.getString("matric")).append(",");
            appender.append(results.getString("score")).append(",");
            appender.append(results.getString("dateYear"));
            
        }
        appender.append("***");
        getCompleteAverage.setString(1, subject);
        results = getCompleteAverage.executeQuery();
        while(results.next()){
            appender.append(results.getInt(1));
        }
        
        appender.append("***");
        getPassrate.setString(1, subject);
        results = getPassrate.executeQuery();
        while(results.next()){
            appender.append(results.getInt(1));
        }
             System.out.println(appender.toString());
        return appender.toString();
    }
         
    catch(NamingException | SQLException e ){
        e.printStackTrace();
    }
         
         finally{
            try{
                if(results!= null){
                 results.close();
                 }
             if(connection!= null){
                 System.err.println("closing connection");
                 connection.close();
             }
             
            }
            catch(SQLException e){
                e.printStackTrace();
                
            }
         }
         
         
         return "Empty statement";
     }
    
}
