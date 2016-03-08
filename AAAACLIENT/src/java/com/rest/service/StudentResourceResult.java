/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.service;

import com.google.gson.Gson;
import static com.rest.service.Exam.loggedIn;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Calendar;
import java.util.Comparator;
import java.util.HashMap;
import java.util.Map;
import java.util.TreeMap;
import javax.naming.NamingException;

/**
 *
 * @author user
 */
public class StudentResourceResult {
    Connection connection = null;
    PreparedStatement insertResult = null;
    PreparedStatement getRank = null;
    PreparedStatement getOverallRank = null;
    PreparedStatement removeCourse = null;
    PreparedStatement decrementCourse = null;
    
    
    public String UnregisterStudent(String matric,String exam){
          try{
         javax.naming.InitialContext ctx = new javax.naming.InitialContext();
         javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
         connection = ds.getConnection();
         removeCourse = connection.prepareStatement("DELETE from examstudenttable where matricExam=? ");
         decrementCourse = connection.prepareStatement("Update activeexam SET RegisteredCandidates = (RegisteredCandidates - 1 ) WHERE ExamName = ? ");
         connection.setAutoCommit(false);
         removeCourse.setString(1, matric+"***"+exam);
         removeCourse.executeUpdate();
         decrementCourse.setString(1, exam);
         decrementCourse.executeUpdate();
         connection.commit();
         RemoveId.removeId(matric, loggedIn,Exam.registeredCourses,exam);
         
         return new Gson().toJson("1");
         
       
        
          }
          catch(NamingException | SQLException e){
              e.printStackTrace();
          }
          finally{
              try{
                 if(connection != null)
                     connection.close();
              }
              catch(SQLException e){
                  e.printStackTrace();
                  
              }
          }
        return "";
    }
    
     public String postResult(String id,String courseId,String attempt,String time,String score,String type,boolean complete) throws ArrayIndexOutOfBoundsException{
         
            
    try{
        javax.naming.InitialContext ctx = new javax.naming.InitialContext();
        javax.sql.DataSource ds = (javax.sql.DataSource)ctx.lookup("jdbc/ConnectionPool");
        connection = ds.getConnection();
        insertResult = connection.prepareStatement("INSERT INTO results (matric,courseid,attempt,time,score,type,primaryKey,complete,yearDate,dateYear) VALUES (?,?,?,?,?,?,?,?,?,CURDATE())");
        getRank = connection.prepareStatement("SELECT * from results WHERE courseId =? AND type =?");
        getOverallRank = connection.prepareStatement("SELECT * from results WHERE courseId LIKE ? AND type=? ");
        removeCourse = connection.prepareStatement("DELETE from examstudenttable where matricExam=? ");
       
        insertResult.setString(1, id);
        insertResult.setString(2, courseId);
        insertResult.setString(3, attempt);
        insertResult.setString(4, time);
        insertResult.setString(5, score);
        insertResult.setString(6, type);
        insertResult.setString(7, id+courseId+"_"+attempt);
        insertResult.setString(9,String.valueOf(Calendar.getInstance().get(Calendar.YEAR)));
        int completeInt = 0;
        if(complete)
          completeInt = 1;
        insertResult.setInt(8, completeInt);
        insertResult.executeUpdate();
        getRank.setString(1, courseId);
        getRank.setString(2, type);
        ResultSet results = getRank.executeQuery();
        HashMap<String,Integer> getRankMap = new HashMap<>();
             while(results.next()){
                 if(getRankMap.containsKey(results.getString("matric"))){
                     int add = getRankMap.get(results.getString("matric"));
                     getRankMap.put(results.getString("matric"), (Integer.parseInt(results.getString("score"))+add) );
                 }
                 else{
               /* String [] split = results.getString("time").split(":");
                int minutes = Integer.parseInt(split[0]);
                int seconds = Integer.parseInt(split[1]);
                int mainTime = (seconds/10) + minutes; */
                      getRankMap.put(results.getString("matric"), Integer.parseInt(results.getString("score")));
               
                    }
                 }
        
       removeCourse.setString(1, id+"***"+courseId);
       removeCourse.executeUpdate();
       RemoveId.removeId(id, loggedIn,Exam.registeredCourses,courseId);
       
       
       String rankString ;
       rankString =":"+  StudentResourceSorterMethod.sortMaps(getRankMap, id, type);
       getOverallRank.setString(1, "%"+courseId+"%");
       getOverallRank.setString(2, type);
       HashMap<String,Helper> getOverallRankMap = new HashMap<>();
       HashMap<String,Integer> average = new HashMap<>();
       ResultSet result = getOverallRank.executeQuery();
            while(result.next()){
                if(getOverallRankMap.containsKey(result.getString("matric"))){
                    Helper help = getOverallRankMap.get(result.getString("matric"));
                    int count =  help.getCount();
                    int value = help.getValue();
                    Helper he = new Helper();
                    he.setCount(++count);
                    he.setValue(value+Integer.parseInt(result.getString("score")));
                    getOverallRankMap.put(result.getString("matric"), he);
                    average.put(result.getString("matric"), he.getAverage());
                }
                else{
               /* String [] split = results.getString("time").split(":");
                int minutes = Integer.parseInt(split[0]);
                int seconds = Integer.parseInt(split[1]);
                int mainTime = (seconds/10) + minutes; */
               
                 Helper help = new Helper();
                 help.setCount(1);
                 help.setValue(Integer.parseInt(result.getString("score")));
                 
             
               getOverallRankMap.put(result.getString("matric"), help);
               
                     average.put(result.getString("matric"), help.getAverage());
          
               
           
             
            
        }
        }
            
        
         
         
         String over =  StudentResourceSorterMethod.sortMaps(average, id, type);
           
           
          return rankString+":"+over;
    
           
        
    }
    catch(NamingException | SQLException e ){
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
    
         
         return "";
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
}
