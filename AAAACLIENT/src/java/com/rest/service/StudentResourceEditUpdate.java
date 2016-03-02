/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.service;

import com.google.gson.Gson;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import javax.naming.NamingException;

/**
 *
 * @author user
 */
public class StudentResourceEditUpdate {
     Connection connection = null;
    PreparedStatement edit = null;
    PreparedStatement update = null;
    ResultSet result = null;
    
    public String edit(String matric){
             try{
       javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
        connection = ds.getConnection();
        edit = connection.prepareStatement("SELECT * from candidateData WHERE matric =?");
        edit.setString(1, matric);
        
        result = edit.executeQuery();StringBuilder append = new StringBuilder();
        while(result.next()){
            append.append("#").append(result.getString("firstName")).append(",");
            append.append(result.getString("lastName")).append(",");
            append.append(result.getString("middleName")).append(",");
             append.append(result.getString("matric")).append(",");
             append.append(result.getString("gender")).append(",");
             append.append(result.getString("email")).append(",");
             append.append(result.getString("mobileNumber")).append(",");
             append.append(result.getString("address")).append(",");
             append.append(result.getString("Number2")).append(",");
              append.append(result.getString("address2")).append(",");
               append.append(result.getString("comment"));
               
        }
        
        return new Gson().toJson(append.toString());
        
         
    }
    catch(NamingException | SQLException e ){
        e.printStackTrace();
    }
             finally{
                 try{
                     if(result!=null)
                        result.close();
                 if(connection!=null)
                     connection.close();
                 }
                 catch(SQLException e){
                     e.printStackTrace();
                 }
             }
        return new Gson().toJson("Data");
    }
    
    public String update(String firstName,String lastName,String middleName,String gender,String email,String mobileNumber,String address,String number2,String address2,String comment,String matric){
        
                try{
       javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
        connection = ds.getConnection();
        
        update = connection.prepareStatement("UPDATE candidateData SET firstName=?, lastName=?, middleName=?,gender=?,email=?,mobileNumber=?,address=?,Number2=?, address2=?,comment=? Where matric=?");
        update.setString(1, firstName);
        update.setString(2, lastName);
        update.setString(3, middleName);
         update.setString(4, gender);
         update.setString(5, email);
          update.setString(6, mobileNumber);
           update.setString(7, address);
            update.setString(8, number2);
             update.setString(9,address2);
              update.setString(10, comment);
               update.setString(11, matric);
               update.executeUpdate();
               return new Gson().toJson("Update Successfull");
                }catch(NamingException | SQLException e){
                 e.printStackTrace();
                   return new Gson().toJson("There was an error while updating ");
                }
                
                finally{
                try{
                 if(connection!=null)   
                     connection.close();
                }
                catch(SQLException e){
                    
                }
                }
                
              
        
    
        
    }
}
