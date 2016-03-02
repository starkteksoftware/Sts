


/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.jols.exam;

import java.io.File;
import java.util.ArrayList;
import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebService;

/**
 *
 * @author bola odesile
 */@WebService(serviceName = "FileServicesTest")
public class FileServicesTest {
    
     @WebMethod(operationName = "fileMethod")
     public void getArrayListFile(@WebParam(name = "name") ArrayList<File> files){
         for(int c = 0; c < files.size(); c++){
             System.out.println(files.get(c).getAbsolutePath());
         }
     }
}
