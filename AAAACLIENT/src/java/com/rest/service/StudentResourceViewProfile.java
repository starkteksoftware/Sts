/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.service;

import com.google.gson.Gson;
import java.sql.PreparedStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedHashMap;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.naming.NamingException;

/**
 *
 * @author user
 */
public class StudentResourceViewProfile {
    Connection connection = null;
    PreparedStatement getBioData = null;
    PreparedStatement getResult = null;
    PreparedStatement getRanking = null;
    ResultSet results = null;
    PreparedStatement getSubjectRank = null;
    
    
    public String queryData(String matric){
         try{
             javax.naming.InitialContext ctx = new javax.naming.InitialContext();
             javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
             connection = ds.getConnection();
             getBioData = connection.prepareStatement("SELECT lastname, firstname, email, comment from candidatedata where matric= ?");
             getResult = connection.prepareStatement("SELECT * from results where matric =? ORDER BY dateyear DESC");
             getRanking = connection.prepareStatement("SELECT matric from results where courseId = ? ORDER BY score DESC, time DESC  ");
              
             
             getBioData.setString(1, matric);
             results = getBioData.executeQuery();
             StringBuilder appender = new StringBuilder();
             while(results.next()){
                appender.append("#").append(results.getString("lastname")).append(",");
                appender.append(results.getString("firstname")).append(",");
                appender.append(results.getString("email")).append(",");
                appender.append(results.getString("comment")).append("***");
             }
             LinkedHashMap<String,String> courses = new LinkedHashMap<>();
             getResult.setString(1, matric);
             results = getResult.executeQuery();
             int incomplete = 0;
             int passrate = 0;
             while(results.next()){
                 appender.append("#").append(results.getString("courseId")).append(",");
                 courses.put(results.getString("courseId"), "");
                 appender.append(results.getString("score")).append(",");
                 appender.append(results.getString("time")).append(",");
                 appender.append(results.getString("dateYear")).append(",");
                 appender.append(results.getString("complete"));
                 if(results.getInt("complete") == 0)
                     incomplete++;
                 
                 if(results.getInt("score") >= 50)
                     passrate++;
                
             }
             
             appender.append("***").append(incomplete).append("***").append(passrate).append("***");
             
             courses.forEach((k,v)-> {
                 try {
                    getRanking.setString(1, k);
                    results = getRanking.executeQuery();
                    int count = 0;
                    while(results.next()){
                        count++;
                        if(results.getString("matric").equals(matric)){
                            appender.append("#").append(k).append("*").append(count);
                            break;
                        }
                    }
                    
                 } catch (SQLException ex) {
                     Logger.getLogger(StudentResourceViewProfile.class.getName()).log(Level.SEVERE, null, ex);
                 }
             
              
             } );
             
             
             
             System.out.println(appender);
             return new Gson().toJson(appender);
             
             
         }
         catch(NamingException | SQLException e){
             e.printStackTrace();
         }
         finally{
             try{
                 if(results != null)
                     results.close();
                 if(connection!=null)
                     connection.close();
                 
             }
             catch(SQLException e){
                 e.printStackTrace();
             }
         }
        
        return "";
    }
    
    
    
    public String learderBoardSubjects(String subject){
         try{
             javax.naming.InitialContext ctx = new javax.naming.InitialContext();
             javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
             connection = ds.getConnection();
             getSubjectRank = connection.prepareStatement("SELECT matric,score,time,dateYear from results where courseId = ? ORDER BY score DESC, time ASC  ");
             getSubjectRank.setString(1, subject);
             results = getSubjectRank.executeQuery();
             StringBuilder appender = new StringBuilder();
             while(results.next()){
                 appender.append("#").append(results.getString("matric")).append(",");
                 appender.append(results.getString("score")).append(",");
                 appender.append(results.getString("time")).append(",");
                 appender.append(results.getString("dateYear"));
             }
             
             return new Gson().toJson(appender.toString());
         }
         catch(NamingException | SQLException e){
             e.printStackTrace();
         }
         
         finally{
            try{
             if(results != null)
                 results.close();
             if(connection != null)
                 connection.close();
            }catch(SQLException e){
                e.printStackTrace();
            }
         }
        return new Gson().toJson("No results");
    }
    
    
    
}
