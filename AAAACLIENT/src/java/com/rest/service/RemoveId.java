/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.service;

import java.util.HashMap;

/**
 *
 * @author bola odesile
 */
public class RemoveId {
    
    public static void removeId(String id,HashMap<String,String> map,HashMap<String,String> courses,String course){
        
        map.remove(id);
        
        
      String getCourses =  courses.get(id);
       
    String newCourses =  getCourses.replaceFirst(course, "");
    System.err.println(newCourses);
    courses.put(id, newCourses);
    
      
    }
    
}
