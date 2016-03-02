/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.service;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.Comparator;
import java.util.HashMap;
import java.util.Map;
import java.util.TreeMap;


/**
 *
 * @author user
 */
public class Solution {
public static void main(String[] args){
	/*	HashMap<String, Integer> map = new HashMap<String, Integer>();
		map.put("a", 10);
		map.put("b", 30);
		map.put("c", 50);
		map.put("d", 40);
		map.put("e", 20);
		System.out.println(map);
 
		TreeMap<String, Integer> sortedMap = SortByValue(map);  
                
		System.out.println(sortedMap);
                String st = sortedMap.toString();
               int first = 0;//sortedMap.toString().indexOf(",");
               int counter = 0;
                while(first != - 1 || first != 0){
                    
                    
                    
                    int second = sortedMap.toString().indexOf(",",first);
                    System.out.println(first +" second "+second);
                      if(second != -1){
                     if(  st.substring(first, second).equalsIgnoreCase(st)){
                          
                      }
                      
                     
                    }
                      else{
                              System.err.println(st.substring(first, st.length()));
                              
                      }
                      
                    ++counter;
                    first = second+1;
                    
                   
                  
                    
                    
                    if(first == 0 || first == -1){
                  
                        break;
                     
                    }
                    
                  
                }
                System.out.println("counter is "+counter);
               */
        
        //Below is for reading the file
        /*
          HashMap<String,String> schools = new HashMap<>();
         File file = new File("C:\\Users\\user\\Desktop\\schools.txt");
      BufferedReader br = null;
      try{
          String sCurrentLine;
           br = new BufferedReader(new FileReader("C:\\Users\\user\\Desktop\\schools.txt"));
           
           while((sCurrentLine = br.readLine()) != null){
             //  System.out.println(sCurrentLine);
               schools.put(sCurrentLine, sCurrentLine);
                 
               
           }
      }
      catch(IOException e){
          e.printStackTrace();
          
      }
      finally{
          try{
              
           Set<String> s =   schools.keySet();
           
           for(String k : s){
               System.out.println("<option value='"+k+"'>"+k+"</option>");
               
             
                
           }
           
           
              
              
              if(br != null)br.close();
          }
          catch(IOException e){
              e.printStackTrace();
               
          }
      } */
       
        
         String fileName = "C:\\Users\\user\\Desktop\\UniversityExamField\\Questions\\Science\\Acid-Base.txt";
         BufferedReader br = null;

		try {

			String sCurrentLine;
 
			br = new BufferedReader(new FileReader(fileName));

			while ((sCurrentLine = br.readLine()) != null) {
				System.out.println("<p>"+sCurrentLine.replace("?", "? <input type='text'/>")+"</p>");
                                
			}

		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			try {
				if (br != null)br.close();
			} catch (IOException ex) {
				ex.printStackTrace();
			}
		}

	
         
/*
	List<String> list = new ArrayList<>();

		try (BufferedReader br = Files.newBufferedReader(Paths.get(fileName))) {

			//br returns as stream and convert it into a List
			list = br.lines().collect(Collectors.toList());

		} catch (IOException e) {
			e.printStackTrace();
		}
	
		list.forEach(System.out::println);

	*/

	
	}
 
	  public static TreeMap<String, Integer> SortByValue 
			(HashMap<String, Integer> map) {
		ValueComparator vc =  new ValueComparator(map);
		TreeMap<String,Integer> sortedMap = new TreeMap<String,Integer>(vc);
		sortedMap.putAll(map);
		return sortedMap;
	}
}
 
class ValueComparator implements Comparator<String> {
 
    Map<String, Integer> map;
 
    public ValueComparator(Map<String, Integer> base) {
        this.map = base;
    }
 
    public int compare(String a, String b) {
        if (map.get(a) >= map.get(b)) {
            return -1;
        } else {
            return 1;
        } // returning 0 would merge keys 
    }
}
