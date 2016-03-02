/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.exam.setUp;

import javax.jws.WebService;
import javax.jws.WebMethod;
import javax.jws.WebParam;

/**
 *
 * @author bola odesile
 */
@WebService(serviceName = "ExamSetting")
public class ExamSetting {

    /**
     * This is a sample web service operation
     */
    @WebMethod(operationName = "hello")
    public String hello(@WebParam(name = "name") String txt) {
         
       System.out.println("this is the full text "+txt);
        
        
        String [] arrange = txt.split("#split");
       // String [] aas = arrange[0].split("#split");
        
        System.out.println(arrange[0]);
        
        
        int first = arrange[2].indexOf("#");
        int last = arrange[2].lastIndexOf("#");
        
        int secondLast = arrange[2].lastIndexOf("#",last);
        
        String sub = arrange[2].substring(first, secondLast);
        
        String subject = arrange[0];
        
        System.out.println(arrange[0]);
        
        String author =arrange[1];
        String date = "02/03/2014";
        int type = 4;
        String question = sub;
        System.out.println( "topi "+subject +" au "+author +" "+question);
   // populateDatabase(subject,author,date,type,question);
      
     //   System.err.println(" a new method");
      
        return "this is the sub " + sub + " !";
        }
}
