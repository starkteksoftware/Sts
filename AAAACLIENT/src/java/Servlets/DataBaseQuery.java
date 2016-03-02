/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package Servlets;

import com.rest.service.LogIn;
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
public class DataBaseQuery {
    PreparedStatement getQuestions = null;
   Connection connection = null;


  private static String URL  ="jdbc:mysql://localhost:3306/test";
    private static String USERNAME = "root";
    private static String passsword ="ronaldo"; 
    
    
    
   //    public static String URL  ="jdbc:mysql://mysql7811-starks.j.scaleforce.net/test";// jdbc:mysql://localhost:3306/test";
     // public  static String USERNAME = "root";
    //public  static String passsword ="PMDsfd12372";
   
    
    
    public void getQuestion(){
        try{
           javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
                   connection = ds.getConnection(); 
        
      getQuestions = connection.prepareStatement("SELECT * FROM report WHERE Subject=? And Date=?" );
        
       
        }
        catch(SQLException | NamingException e){
          e.printStackTrace();
          
        }
    }
    public String  sendData(String question,String date){
        StringBuilder builder = new  StringBuilder();
        try{
         ResultSet resultSet = null;
        getQuestions.setString(1, question);
         getQuestions.setString(2, date);
     
         
        resultSet = getQuestions.executeQuery();
        
        while(resultSet.next()){
            builder.append(resultSet.getString("Date").concat("#"));
              builder.append(resultSet.getString("Result").concat("#"));
                builder.append(resultSet.getString("Amount"));
        }
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
        
       return builder.toString() ;
    }
}
