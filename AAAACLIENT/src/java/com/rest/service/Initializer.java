/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.service;

import ServerPackage.Server;
import static com.rest.service.Exam.ip;
import java.net.InetAddress;
import java.net.UnknownHostException;

/**
 *
 * @author bola odesile
 */
public class Initializer {
   public  static  void initializer(){
      try{
             
     
          
          
          
    Exam.ip = InetAddress.getLocalHost().getHostAddress();
            System.out.println("This is the address "+Exam.ip);
            System.out.println("control 0: in Initializer class(method 1)");
            
            // if exam has not started
            if(Exam.started < 1){
        
                ClearActiveExam clearData = new ClearActiveExam();
                clearData.deleteQuery();
                clearData.delteQueryExecuted();
                    /* Server server = new Server();
                     server.doConnect(); */
             
                      
                         
            }
            Exam.started = 1;
         
            
        }
        catch(UnknownHostException e){
          e.printStackTrace();
        }   
    }
}
