/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.service;

import java.net.URL;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import javax.naming.NamingException;

/**
 *
 * @author bola odesile
 */
public class UnregisterStudent {
    
    Connection connection;
    PreparedStatement unRegisterStudent= null;
    PreparedStatement reduceExamCandidate = null;
     ResultSet resultSet = null;


public void unRegStudent(){
            
       try{
           javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
                   connection = ds.getConnection(); 
          unRegisterStudent = connection.prepareStatement("DELETE FROM examstudenttable WHERE matric = ? AND ExamName = ?");
          reduceExamCandidate = connection.prepareStatement("UPDATE activeexam SET "
            +"RegisteredCandidates=RegisteredCandidates - 1 WHERE ExamName=?");
       }
            catch(SQLException | NamingException e){
               e.printStackTrace();
            } 
        
       
    }
    
    public String unRegisterStudentQuery(String matric,String examName){
       
       try{
        unRegisterStudent.setString(1, matric);
         unRegisterStudent.setString(2,examName);
           reduceExamCandidate.setString(1,examName);
           System.out.println(matric +" is deleted "+examName);
           unRegisterStudent.executeUpdate();
           reduceExamCandidate.executeUpdate();
           
           
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
        return "";
        
    }
    
}
