/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.service;

import static com.rest.service.StudentResourceResult.SortByValue;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.TreeMap;
import javax.naming.NamingException;

/**
 *
 * @author user
 */
public class StudentResourceDashBoardHome {
    Connection connection = null;
    PreparedStatement getAllRegisteredCourses = null;
    PreparedStatement getAllAttemptedCourses = null;
    PreparedStatement getAttempts = null;
   PreparedStatement overallSchoolRanking = null;
   
    
    PreparedStatement getTotalRank = null;
    PreparedStatement getSchoolRank = null;
    PreparedStatement getTotalSubjectRank = null;
     PreparedStatement getTotalSchoolRank = null;
     PreparedStatement getSubjectLead = null;
     PreparedStatement getStudentLead = null;
     
    
    PreparedStatement getTotalRankP = null;
    PreparedStatement getSchoolRankP = null;
    PreparedStatement getTotSubjRankP = null;
    PreparedStatement getTotSchoolRank = null;
    
    
    
    PreparedStatement instanceTotal = null;
    PreparedStatement insertTotal = null;
    PreparedStatement updateTotal = null;
    
    
    
    
   
    HashMap<String, Integer> tRank = new HashMap<>();
     HashMap<String, Integer> gschoolR = new HashMap<>();
      HashMap<String, Integer> gtSubject = new HashMap<>();
       HashMap<String, Integer> gtschoolR = new HashMap<>();
       
        
    
    
    
    
    
    
    
    public String startQuery(String matric,String type,String institution){
        
           try{
                    try{
       javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
        connection = ds.getConnection();
    }
    catch(NamingException | SQLException e ){
        e.printStackTrace();
    }
       
                    String fType = "";
                      if(type.equals("5")){
                            fType = "1";
                   
                                      }
                  if(type.equals("6")){
                   fType = "2";
                   
               }
                     if(type.equals("7")){
                   fType = "3";
                   
               }
                         if(type.equals("8")){
                   fType = "4";
                   
                    
                   
               }
      
         StringBuilder resultReturn = new StringBuilder();
         StringBuilder addData = new StringBuilder();
         
         getAllRegisteredCourses = connection.prepareStatement("SELECT * FROM examstudenttable WHERE matric=? AND type=?");
         //getAllAttemptedCourses = connection.prepareStatement("SELECT * FROM results WHERE matric =?");
           
          getAllRegisteredCourses.setString(1, matric);
          getAllRegisteredCourses.setString(2, type);
          
            overallSchoolRanking = connection.prepareStatement("SELECT institution from candidatedata ");
                 
          
          ArrayList<String> subjects = new ArrayList<>();
               ResultSet results = getAllRegisteredCourses.executeQuery();
               while(results.next()){
                   
                   
                       resultReturn.append("#").append(results.getString("ExamName"));
                       subjects.add(results.getString("ExamName"));
                    addData.append("<").append(results.getString("ExamName")).append(getAttempts(matric, results.getString("ExamName"), fType));
                    
                     
                     
                     
                
               }
               
               
                  HashMap<String,Integer> over = new HashMap<>();
                   
                              ResultSet res = overallSchoolRanking.executeQuery();
                              while(res.next()){
                               
                                  if(over.containsKey(res.getString("institution"))){
                                      int counter = over.get(res.getString("institution"));
                                      System.out.println("");
                                        over.put(res.getString("institution"), ++counter);
                                        
                                        
                                         
                                
                                  }
                                  else{
                                  over.put(res.getString("institution"), 1);
                                  }
                              }
           System.out.println("This are the registered Exams "+resultReturn.toString()+"&"+addData);
               
               
           String totalRank = getTotalRanks(matric, fType);
               System.out.println("Ranked "+totalRank +" in total");
               
               String schoolRanks = getSchoolRankMethod(institution, matric, fType);
                     System.out.println("Ranked "+schoolRanks +" in school");
                     
                     String totalSchoolRank = getTotalSchoolRankMethod(institution, fType, subjects, matric);
                             System.out.println("Ranked "+totalSchoolRank +" in total school");
                             
                              
                              String totalSubjectRank = getTtotalSubjectRankMethod(fType, subjects, matric);
                                      System.out.println("Ranked "+totalSubjectRank +" in total subjects");
                                      
                                       
                                    
                     String tDifference = getPosition(matric, totalRank, fType,"1");
                 
                     System.out.println("The difference in total ---->"+tDifference);
                     
                      String tsDifference = getPosition(matric, schoolRanks, fType,"2");
             
                            System.out.println("The difference in school ---->"+tsDifference);
                            
                            String tsRDifference =  getPosition(matric, totalSchoolRank, fType,"3");
                            
                              
                            System.out.println("The difference in total  school ---->"+tsRDifference);
                            
                              String tsSDifference = getPosition(matric, totalSubjectRank, fType,"4");
                              
                              
                                
                                System.out.println("The difference in total subject rank---->"+tsSDifference);
                                
                  
                
                                
        String sch = StudentResourceSorterMethod.count(over);
        
              
               
                 
        
               
                String leads =  LeaderBoard(fType);
                 
               
               
                
           
               System.err.println("The final data ----->"+resultReturn.toString()+"&"+addData.toString()+"&#"+tDifference+"&"+tRank.size()+"#"+tsDifference+"&"+gschoolR.size()+"#"+tsRDifference+"&"+gtschoolR.size()+"#"+tsSDifference+"&"+ gtSubject.size()+"&"+ sch.replaceAll("=",",")+"&"+leads);
                
               
               
              
              
           
           
           
           
           
               
               return resultReturn.toString()+"&"+addData.toString()+"&#"+tDifference+"*"+tRank.size()+"#"+tsDifference+"*"+gschoolR.size()+"#"+tsRDifference+"*"+gtschoolR.size()+"#"+tsSDifference+"*"+ gtSubject.size()+"&"+ sch.replaceAll("=",",")+"&"+leads;
           
                
                
                   
                
           }
           catch(SQLException e){
               e.printStackTrace();
           }
           finally{
               try{
                   
                   
                 if(connection!= null) {
                     connection.close();
                 } 
               }
               catch(SQLException e){
                   e.printStackTrace();
                   
               }
           }
        
        return "";
    }
    
    
    
    public int makeInsert(int position,String matric,String rank,boolean value,String type,String eType) throws SQLException{
        int status ;
        if(value){
      updateTotal = connection.prepareStatement("UPDATE rank SET position=? WHERE primaryKey =? AND type=? ");
      updateTotal.setInt(1, position);
      updateTotal.setString(2, matric+type+eType);
      updateTotal.setString(3, eType);
      
      
    status =  updateTotal.executeUpdate();
      
        }
        else{
       insertTotal = connection.prepareStatement("INSERT INTO rank(primaryKey,position,type) VALUES(?,?,?)");
       insertTotal.setString(1, matric+type+eType);
       insertTotal.setInt(2, position);
       insertTotal.setString(3, eType);
       
    status =   insertTotal.executeUpdate();
        }
        
         
        return status;
    }
    
    public String getPosition(String matric,String rank,String type,String eType) throws SQLException{
        boolean found= false;
           instanceTotal = connection.prepareStatement("SELECT position FROM rank WHERE primaryKey=? AND type=?");
              instanceTotal.setString(1, matric+type+eType);
              instanceTotal.setString(2, eType);
                                       ResultSet res = instanceTotal.executeQuery();
                                       int position = Integer.parseInt(rank);
                                       while(res.next()){
                                      position = res.getInt("position");
                                      found = true;
                                       }
                                        
                                       makeInsert(position, matric, rank, found, type,eType);
                                       
                                       
                                      if(position == Integer.parseInt(rank) ){
                                     return "0*0*"+rank;
                                     
                                      }
                                      
                                      if(position < Integer.parseInt(rank)  ){
                                          
                                        int drop= Integer.parseInt(rank) - position;
                                        return "-*"+drop+"*"+rank;
                                        
                                      }
                                      
                                        if(position > Integer.parseInt(rank)  ){
                                          
                                        int drop= position - Integer.parseInt(rank);
                                        return "+*"+drop+"*"+rank;
                                        
                                        
                                         
                                        
                                      }
        
        
        return "";
    }
    
    
    public String getAttempts(String matric,String exam,String type){
          StringBuilder appender = new StringBuilder();
              int count = 0;
     
               
        try{
        getAttempts = connection.prepareStatement("SELECT * FROM results WHERE matric=? AND courseId LIKE ? AND type=?");
        getAttempts.setString(1, matric);
        getAttempts.setString(2, "%"+exam+"%");
        getAttempts.setString(3, type);
       
         ResultSet getResults = getAttempts.executeQuery();
        while(getResults.next()){
           
             appender.append("#").append(getResults.getString("score"));
             
             ++count;
             
         }
        
        }
        catch(SQLException e){
          e.printStackTrace();
          
        }
        return appender.toString()+":"+count;
        
        
    }
    
    
    
    public String getSchoolRankMethod(String institution,String matric,String type){
         try{
             
            getSchoolRank = connection.prepareStatement("SELECT * FROM results where matric  IN (select matric from candidatedata where institution = ?  )");
              getSchoolRank.setString(1, institution);
         ResultSet getSchoolRankResult = getSchoolRank.executeQuery();
         while(getSchoolRankResult.next()){
            
             if(gschoolR.containsKey(getSchoolRankResult.getString("matric"))){
             int add = gschoolR.get(getSchoolRankResult.getString("matric"));
               gschoolR.put(getSchoolRankResult.getString("matric"), (Integer.parseInt(getSchoolRankResult.getString("score"))+add) );
            
                  
                
             }
             else{
                 gschoolR.put(getSchoolRankResult.getString("matric"), Integer.parseInt(getSchoolRankResult.getString("score")));
                
                 
             
             }
             
         }
         
         
         }
         catch(SQLException e){
             e.printStackTrace();
         }
        return StudentResourceSorterMethod.sortMaps(gtschoolR, matric, type);
        
        
        
    }
    
    public String getTtotalSubjectRankMethod(String type,ArrayList<String> subjects,String matric){
         for (String subject : subjects) {
          try{
               
             getTotalSubjectRank = connection.prepareStatement("SELECT * from results WHERE courseId LIKE ? AND type=? ");
               getTotalSubjectRank.setString(1, "%"+subject+"%");
               getTotalSubjectRank.setString(2, type);
               
             ResultSet getTotalSubjectRankResult = getTotalSubjectRank.executeQuery();
               while(getTotalSubjectRankResult.next()){
                   if(gtSubject.containsKey(getTotalSubjectRankResult.getString("matric"))){
          int add = gtSubject.get(getTotalSubjectRankResult.getString("matric"));
               gtSubject.put(getTotalSubjectRankResult.getString("matric"), (Integer.parseInt(getTotalSubjectRankResult.getString("score"))+add) );
                 
                    }
                   else{
                       
                       gtSubject.put( getTotalSubjectRankResult.getString("matric"), Integer.parseInt( getTotalSubjectRankResult.getString("score")));
                     
                   }
               }
           }
        catch(SQLException e){
          e.printStackTrace();
          
        }
         }
        return StudentResourceSorterMethod.sortMaps(gtSubject, matric, type);
         
    }
    
    public String getTotalSchoolRankMethod(String institution,String type,ArrayList<String> subjects,String matric){
    
        
        for (String subject : subjects) {
            try{
                getTotalSchoolRank = connection.prepareStatement("SELECT matric,score FROM results where matric  IN (select matric from candidatedata where institution = ?  ) AND courseId LIKE ? AND type=?");
                
                getTotalSchoolRank.setString(1, institution);
                getTotalSchoolRank.setString(2, "%"+subject+"%");
                getTotalSchoolRank.setString(3, type);
                
                ResultSet result = getTotalSchoolRank.executeQuery();
                while(result.next()){
                    
                    
                    if(gtschoolR.containsKey(result.getString("matric"))){
                        
                        int add =gtschoolR.get(result.getString("matric"));
                        gtschoolR.put(result.getString("matric"), (Integer.parseInt(result.getString("score"))+add) );
                        
                    }
                    else{
                       gtschoolR.put(result.getString("matric"), Integer.parseInt(result.getString("score")));
                        
                     }
                    
                }
            }
            catch(SQLException e){
                e.printStackTrace();
                
            }
        }
         return StudentResourceSorterMethod.sortMaps(gtschoolR, matric, type);
         
        
         
    }
    
    
    class Helper{
        private int count;
        private int value;

        public int getCount() {
            return count;
        }

        public void setCount(int count) {
            this.count = count;
        }

        public int getValue() {
            return value;
        }

        public void setValue(int value) {
            this.value = value;
        }
        
        public int getAverage(){
          return  getValue()/getCount() ;
          
        }
    }
    
    public String  LeaderBoard(String type) throws SQLException{
        
        getSubjectLead = connection.prepareStatement("SELECT courseId, matric, score from results where type=?");
        
       getSubjectLead.setString(1, type);
       ResultSet res = getSubjectLead.executeQuery();
       HashMap<String,Helper> results = new HashMap<>();
       HashMap<String,Helper> studs = new HashMap<>();
       HashMap<String,Integer> rs = new HashMap<>();
       HashMap<String,Integer> ss = new HashMap<>();
       
       
       while(res.next()){
           
           if(results.containsKey(res.getString("courseId"))){
             Helper help = results.get(res.getString("courseId"));
           int count =  help.getCount();
           int value = help.getValue();
           
           Helper add = new Helper();
           add.setCount(++count);
           add.setValue(value+Integer.parseInt(res.getString("score")));
         results.put(res.getString("courseId"), add);
          rs.put(res.getString("courseId"), add.getAverage());
          
           }
           else{
               Helper add = new Helper();
                add.setCount(1);
                 add.setValue(Integer.parseInt(res.getString("score")));
                   
                    results.put(res.getString("courseId"), add);
                        rs.put(res.getString("courseId"), add.getAverage());
                         
                         
         
                      
          }
           
           
           if(studs.containsKey(res.getString("matric"))){
              Helper help = studs.get(res.getString("matric"));
                int count =  help.getCount();
                int value = help.getValue();
                
               Helper add = new Helper();
               add.setCount(++count);
           add.setValue(value+Integer.parseInt(res.getString("score")));
           studs.put(res.getString("matric"), add);
                ss.put(res.getString("matric"), add.getAverage());
           }
           else{
                Helper add = new Helper();
                 add.setCount(1);
                  add.setValue(Integer.parseInt(res.getString("score")));
                    studs.put(res.getString("matric"), add);
                       ss.put(res.getString("matric"), add.getAverage());
                 }
           
       }
        
        
        
   String re=   StudentResourceSorterMethod.count(rs);
    String se=  StudentResourceSorterMethod.count(ss);
     String [] seperate = se.split(",");
     PreparedStatement getNames = connection.prepareStatement("Select lastName, firstName from candidatedata WHERE  matric = ?");
     
     
        LinkedHashMap<String,String> names = new LinkedHashMap<>();
     for(String  ssV : seperate){
         String [] matric = ssV.split("=");
         
         getNames.setString(1, matric[0]);
         ResultSet resName = getNames.executeQuery();
           while(resName.next()){
               names.put(resName.getString("lastName")+" "+resName.getString("firstName"), matric[1]);
               
           }
          
     }
        System.out.println("names are "+names);
        
        System.out.println("result is "+re);
        System.out.println("result is "+se);
         
        
        return names.toString().replaceAll("\\{", "").replaceAll("}", "")+"&"+re;
         
        
         
        
    }
    
    
    public String getTotalRanks(String matric,String type){
      
         try{
         getTotalRank = connection.prepareStatement("SELECT matric,score from results");
      ResultSet getTotalRankResult = getTotalRank.executeQuery();
         while(getTotalRankResult.next()){
            if(tRank.containsKey(getTotalRankResult.getString("matric"))){
                  int add = tRank.get(getTotalRankResult.getString("matric"));
               tRank.put(getTotalRankResult.getString("matric"), (Integer.parseInt(getTotalRankResult.getString("score"))+add) );
                 }
                else{
                    tRank.put(getTotalRankResult.getString("matric"), Integer.parseInt(getTotalRankResult.getString("score")));
                    }
                      }
                  }
         catch(SQLException e){
             e.printStackTrace();
         }
        return  StudentResourceSorterMethod.sortMaps(tRank, matric,type );
         
        
        
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
     
     
     public static TreeMap<String, Integer> SortByValue 
			(HashMap<String, Integer> map) {
		com.rest.service.ValueComparator vc =  new com.rest.service.ValueComparator(map);
		TreeMap<String,Integer> sortedMap = new TreeMap<String,Integer>(vc);
		sortedMap.putAll(map);
		return sortedMap;
	}
     
}
