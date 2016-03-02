/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.service;





import static com.endpoin.service.DatabaseReportClass.URL;
import static com.endpoin.service.DatabaseReportClass.USERNAME;
import static com.endpoin.service.DatabaseReportClass.passsword;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
import javax.naming.NamingException;

/**
 *
 * @author bola odesile
 */
public class AutoScheduler {
   private static Connection connection = null;
    private static PreparedStatement getStarted = null;
    private static  ResultSet results = null;
    
  static  ScheduledExecutorService executorService;
    
    
    
 public static  void startExecutor(){
                
      executorService = Executors.newScheduledThreadPool(1);
     executorService.scheduleWithFixedDelay( new Runnable() {

         @Override
         public void run() {
         
        System.out.println("checking auto database");
            try{
                  
       startQuery();
        executeQuery();
        
       
            }
            catch(Exception e){
                e.printStackTrace();
            }
             //   throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
         }
     }, 10, 1, TimeUnit.MINUTES);
     
  
     
 }
    
 
 
    public static void stopExecutor(){
        if(executorService !=  null && !executorService.isShutdown()){
            executorService.shutdown();
           
        }
    }
    public static void startQuery(){
           try{
            

             javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
                   connection = ds.getConnection(); 
         
  getStarted  = connection.prepareStatement("UPDATE activeexam SET Status=1"+
         " WHERE ScheduleDateTime <= CURDATE() AND status=0 AND RegisteredCandidates > 0");
   
  
   
     }
            catch(SQLException | NamingException e){
               e.printStackTrace();
            }   
        
             
         
    }
    
    public static void executeQuery(){
      try{
        getStarted.executeUpdate();
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
    }
}
