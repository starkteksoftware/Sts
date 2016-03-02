/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.service;

import static com.rest.service.StudentResourceResult.SortByValue;
import java.util.HashMap;
import java.util.TreeMap;

/**
 *
 * @author user
 */
public class StudentResourceSorterMethod {
    
    
    public static String sortMaps(HashMap<String,Integer> map,String id,String type){
        
  
         
  TreeMap<String, Integer> sortedOverallMap = SortByValue(map);  
        System.out.println("In type -----> "+type+"     "+sortedOverallMap);
        
  
         
        
 String getOverallRankM   = sortedOverallMap.toString().replaceAll("\\{", "").replaceAll("}", "").trim();
        
 
    if(!getOverallRankM.contains(",")){
              
                 return "1";
                  
                 
                 
           }
     
               else{
           int firsts = 0;
            int counters = 0;
              while(firsts != - 1 ){
                  int second = sortedOverallMap.toString().indexOf(",",firsts);
                  
                    System.err.println(firsts +" second "+second);
                      if(second != -1){
                          
                     if(  getOverallRankM.substring(firsts,getOverallRankM.indexOf("=", firsts)).equalsIgnoreCase(id)){
                      ++counters;
                         System.err.println("found at "+getOverallRankM.substring(firsts, getOverallRankM.indexOf("=", firsts))+ " count is "+counters);
                             
                         break; 
                      }
                  }
                      else{
                           if(  getOverallRankM.substring(firsts, getOverallRankM.indexOf("=", firsts)).equalsIgnoreCase(id)){
                          ++counters;
                             System.err.println("found at "+getOverallRankM.substring(firsts, getOverallRankM.indexOf("=", firsts))+ " count is "+counters);
                             
                           
                                  break;
                      }
                              
                      }
                      
                      
                    ++counters;
                                System.err.println("not found at "+getOverallRankM.substring(firsts, getOverallRankM.indexOf("=", firsts)));
                  
                                 
                    firsts = second+1;
                if(firsts == 0 || firsts == -1){
                       break;
                  }
              }
              
              
             // String overall = ":"+counters;
              
              
        return String.valueOf(counters);
        
    }
}
    
    
    
      public static String count(HashMap<String,Integer> map){
        
  
         
  TreeMap<String, Integer> sortedOverallMap = SortByValue(map);  
          System.out.println(sortedOverallMap +" in school rankings ");
         
        
 String getOverallRankM   = sortedOverallMap.toString().replaceAll("\\{", "").replaceAll("}", "").trim();
        
 StringBuilder get = new StringBuilder();
    
           int firsts = 0;
            int counters = 0;
              while(firsts != - 1  ){
                  int second = sortedOverallMap.toString().indexOf(",",firsts);
                  
                  
            
                  if(firsts != - 1 && second != -1){    
                    ++counters;
                                System.err.println("value at  "+getOverallRankM.substring(firsts, getOverallRankM.indexOf("=", firsts)));
                   get.append(getOverallRankM.substring(firsts, second));
                 if(counters == 8){
                     return get.toString();
                     
                 }
                  }
                  else{
                      return get.toString();
                  }
                    firsts = second+1;
                if(firsts == 0 || firsts == -1){
                       break;
                  }
              }
              
              
             // String overall = ":"+counters;
              
              
        return String.valueOf(counters);
        
    
}
    
    
    
    
    
    
    
}