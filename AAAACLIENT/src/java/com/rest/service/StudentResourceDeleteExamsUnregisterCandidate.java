/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.service;

import com.google.gson.Gson;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import javax.naming.NamingException;

/**
 *
 * @author user
 */
public class StudentResourceDeleteExamsUnregisterCandidate {
    PreparedStatement removeExam  = null;
    PreparedStatement removeAllStudents = null;
    Connection connection = null;
   
    
    public String prepareDeleteQuery(String exam){
        try{
            javax.naming.InitialContext ctx = new javax.naming.InitialContext();
            javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
            connection = ds.getConnection();
            connection.setAutoCommit(false);
            removeExam = connection.prepareStatement("DELETE from activeexam  WHERE ExamName=?");
            removeAllStudents = connection.prepareStatement("DELETE  from  examstudenttable WHERE ExamName=? ");
            System.out.println(exam);
            removeExam.setString(1, exam);
            removeAllStudents.setString(1, exam);
            removeExam.executeUpdate();
            removeAllStudents.executeUpdate();
            connection.commit();
            
            return new Gson().toJson("Successfull");
            
        }
        catch(NamingException | SQLException e){
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
        
        return new Gson().toJson("Unsuccessful");
        
    }
    
   
    
    
}
