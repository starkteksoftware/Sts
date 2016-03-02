/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.endpoin.service;

import java.util.HashMap;

/**
 *
 * @author bola odesile
 */
public class Sorting {
    static HashMap<Integer,String> sorterAdvanceds;
   
     public  static String sort(String a){
    char [] b =  a.toCharArray();
  
    
   int smallest =99;
  
    StringBuilder build = new StringBuilder();
      
        try{
    for(int c = 0; c < b.length; c++){
     
        
      for(int i = 0; i < b.length; i++){
         String v = String.valueOf(b[i]);
        
         
        
         if(Integer.valueOf(v) < 1){
         
         }
         
         
         else{
        if(Integer.valueOf(v) < smallest){
          smallest = Integer.valueOf(v);
        }
      }
         
         
      }
     
         
     for(int e = 0; e < b.length; e++){
              String v = String.valueOf(b[e]); 
           if(Integer.valueOf(v) == smallest){
            
              
               b[e] = '9';
           
           }
           
                     
           
         } 
 
    
        build.append(smallest);
        smallest = 9;
    }
        }
        catch(NumberFormatException e){
            
        }
   
        return build.toString();
    }
    
    
   public static String sortAdvanced(String so){
        HashMap<Integer,String> sorterAdvanced = new HashMap<>();
        
        
        sorterAdvanceds = sorterAdvanced;
    
         String [] f = null;
        String g ="";
        String a = so;
        String [] split = a.split("\\*");
        for(String ss : split){
       
       f = ss.substring(0, ss.length() - 1).split("\\(");
       g+=f[1];
       sorterAdvanceds.put(Integer.parseInt(f[1]), f[0]);
        }
        
    String returnString = sortMark(g);
    
        System.out.println("let see "+returnString);
        
       
       
       return returnString;
   }  
   
   
    public  static String sortMark(String a){
         String resultReturner="";
   
         char [] b =  a.toCharArray();
  
    
   int smallest =99;
  
    StringBuilder build = new StringBuilder();
      
        try{
    for(int c = 0; c < b.length; c++){
     
        
      for(int i = 0; i < b.length; i++){
         String v = String.valueOf(b[i]);
        
         
        
         if(Integer.valueOf(v) < 1){
         
         }
         
         
         else{
        if(Integer.valueOf(v) < smallest){
          smallest = Integer.valueOf(v);
        }
      }
         
         
      }
     
         
     for(int e = 0; e < b.length; e++){
              String v = String.valueOf(b[e]); 
           if(Integer.valueOf(v) == smallest){
            
              
               b[e] = '9';
           
           }
           
                     
           
         } 
 
    
        build.append(smallest);
       resultReturner += sorterAdvanceds.get(smallest).toString()+"("+smallest+")*";
        
        smallest = 9;
    }
        }
        catch(NumberFormatException e){
            
        }
   
        return resultReturner;
        
        
    }
     
   
}
