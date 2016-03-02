/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.endpoin.service;

import Service.FileStream;
import com.google.gson.Gson;
import com.rest.service.RegisterExamStudents;
import com.rest.service.RegisteredStudents;
import com.rest.service.StartUpClassOngoingExams;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectOutputStream;
import java.nio.ByteBuffer;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Queue;
import java.util.Set;
import java.util.concurrent.ConcurrentLinkedQueue;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

/**
 *
 * @author bola odesile
 */
@ServerEndpoint("/endpoint")
public class Endpoint {
    
    
    private static final Logger logger = Logger.getLogger("end");
    static Queue <Session> queue = new ConcurrentLinkedQueue<>();
     static Map<String,Object> students = new HashMap();
final  static Map<String,Integer> submittedStudents = new HashMap<>();
     static Map<String,String> totalStudents = new HashMap<>();
     static Map<String,String> submittedCandidates = new HashMap<>();
      static Map<String,String> presentCandidates = new HashMap<>();
      static Map<String,String> errorCandidates = new HashMap<>();
      static Map<String,String> allLoggedInStudents = new HashMap<>();
      static HashMap<String, Object> contactAmount = new HashMap<>();
       
      
       
        
      
      
      

      

 //   static int submited;
    int cc = 1;
    static int getRegesteredStudents= 0;
    
    
  public void getStudentNames(){
      System.out.println("in this method");
      StringBuilder allCandidates = new StringBuilder();
      Set<String> keys = StartUpClassOngoingExams.studentsRegistered.keySet();
      keys.stream().map((ss) -> {
          System.out.println(StartUpClassOngoingExams.studentsRegistered.get(ss));
            return ss;
        }).forEach((ss) -> {
            if(!ss.equals(""))
            allCandidates.append(ss).append(',');
            else{
                allCandidates.append(ss).append(",");
            }
        });
      queue.stream().filter((ss) -> (ss.getUserProperties().containsKey("Administrator"))).filter((ss) -> (ss.isOpen())).forEach((ss) -> {
          ss.getAsyncRemote().sendText("allStudents:"+allCandidates.toString());
        });
       
  }  
  
  class Name{
      private String lastName;
      private String firstName;
      private String matric;

        public String getLastName() {
            return lastName;
        }

        public void setLastName(String lastName) {
            this.lastName = lastName;
        }

        public String getFirstName() {
            return firstName;
        }

        public void setFirstName(String firstName) {
            this.firstName = firstName;
        }

        public String getMatric() {
            return matric;
        }

        public void setMatric(String matric) {
            this.matric = matric;
        }
      
  }
  
   @OnOpen
public void openConnection(Session session) {
/* Register this connection in the queue */
       System.out.println("a new connection has been established ");
       
       if(session.getQueryString().contains("Dashboard")){
                   String [] amperstand= session.getQueryString().split("&");
                      String [] split = amperstand[0].split("=");
     
                   Name names = new Name();
                   names.setLastName(split[1]);
                    names.setFirstName(amperstand[1].split("=")[1]);
                     names.setMatric(amperstand[2].split("=")[1]);
                      
     
          contactAmount.put(amperstand[2].split("=")[1], names);
           session.getUserProperties().put("Group", names);
            
          System.err.println("in chat");
             queue.add(session);
              
           
           return;
       }
       
       
   if(session.getQueryString().contains("Administrator"))   {
    session.getUserProperties().put("Administrator", "");
        
queue.add(session);
 started();
 ended("");
 
       
     
     getStudentNames();
 
 
 
 
 
 
 
return;
   
   }
   
   if(session.getQueryString().contains("Supervisor")){
    String [] share =  session.getQueryString().split("=");
   
      
     session.getUserProperties().put("Supervisor", share[2]);
       queue.add(session);
      
       subjectUpdater(share[2],session);
       submitted(share[2],session);
       
       return;
    }
   
      
       
   queue.add(session);
    String  matric ="";
       String [] amperstand= session.getQueryString().split("&");
       String [] split = amperstand[0].split("=");
       int count = 0;
       for(String ss : split){
           if(count == 1){
              
               matric = ss;
           }
           count++;
       }
StringBuilder build = new StringBuilder();
build.append(amperstand[0]).append("&").append(amperstand[1]).append("&").append(amperstand[2]);
         students.put(matric, build);
            
         String [] subject = amperstand[3].split("=");
         
         session.getUserProperties().put(matric, subject[1]);
       
         totalStudents.put(matric, subject[1]);
          allLoggedInStudents.put(matric+"#split"+subject[1], build.toString());
            System.out.println("i am entering all logged in with "+matric+"#split"+subject[1] +" in "+subject[1]+" size is "+allLoggedInStudents.size());
        
         presentCandidates.put(matric, subject[1]);
         
         
      
           started();
          started2(subject[1]);
      
  
}
   public void adminUpdater(){
       
   }
   public void subjectUpdater(String subject,Session session){
      
       Set<String> keys = allLoggedInStudents.keySet();
       int studentCount =0;
       try{
           /*  for(String look : keys){
      String [] check=  look.split("#split");
      if(check[1].equals(subject))
         studentCount++;
       }*/
           studentCount = keys.stream().map((look) -> look.split("#split")).filter((check) -> (check[1].equals(subject))).map((_item) -> 1).reduce(studentCount, Integer::sum);
       }
       catch(ArrayIndexOutOfBoundsException e){
       }
        session.getAsyncRemote().sendText("started:"+String.valueOf(studentCount));
    
       
       
   }
   
@OnClose
public void closedConnection(Session session) {
/* Remove this connection from the queue */
  System.out.println("connection clossed properly");
  
  
  
  if(session.getUserProperties().containsKey("Group")){
    Name name  = (Name) session.getUserProperties().get("Group");
    
      contactAmount.remove(cc);
      queue.remove(session);
      return;
  }
    System.out.println(session.getUserProperties().values());
      Set<String > key = session.getUserProperties().keySet();
      
      if( key.toString().equals("Supervisor") || key.toString().equals("Administrator")){
          queue.remove(session);
          return;
      }
      
        /*
        for(String ss : key){
        System.out.println("matric  "+ss +" subject"+ totalStudents.get(ss)) ;
        presentCandidates.remove(ss);
        errorCandidates.put(ss, ss);
        }
         */
        key.stream().map((ss) -> {
            System.out.println("matric  "+ss +" subject"+ totalStudents.get(ss)) ;
            return ss;
        }).map((ss) -> {
            presentCandidates.remove(ss);
            return ss;
        }).forEach((ss) -> {
            errorCandidates.put(ss, ss);
        });
        
      
      
  
    
    
queue.remove(session);
}
@OnError
public void error(Session session, Throwable t) {
/* Remove this connection from the queue */
queue.remove(session);
t.printStackTrace();
logger.log(Level.INFO, "Connection error.");
} 
    
public static void submittedStudentsMethod(){
   
       StringBuilder builder = new StringBuilder();
       
     Set<String> studentKeys =  submittedCandidates.keySet();
     for(String keys : studentKeys){
        if(presentCandidates.containsKey(keys))
  builder.append("#").append(keys).append(",").append(submittedCandidates.get(keys)).append(",").append("active ");
         else    builder.append("#").append(keys).append(",").append(submittedCandidates.get(keys)).append(",").append("not active ");
         
     
        
         
     }
     
       System.out.println(builder.toString());
       
         for(Session ss : queue){
       if(ss.getUserProperties().containsKey("Administrator")){
           if(ss.isOpen()){
         
         
              ss.getAsyncRemote().sendText("SubmittedStudents*"+builder.toString());
          
           }
        }
       
       
   }
   
}


public static void startCandidate(){
    StartUpClassOngoingExams starts = new StartUpClassOngoingExams();
    starts.allowCandidateStart();
    
}

public static void stillInSessionSuperVisor(String exam){
       StringBuilder builder = new StringBuilder();
      
       
     Set<String> studentKeys =  presentCandidates.keySet();
     for(String keys : studentKeys){
         if(presentCandidates.get(keys).contains(exam)){
       
         builder.append("#").append(keys).append(",").append(totalStudents.get(keys)).append(",").append("active ");
        }
       
     }
     
     
     
       System.out.println(builder.toString());
       
         for(Session ss : queue){
       if(ss.getUserProperties().containsValue(exam) && ss.getUserProperties().containsKey("Supervisor")){
           if(ss.isOpen()){
           ss.getAsyncRemote().sendText("session*"+builder.toString());
          
           }
        }
       
       
       
   }
   
}

public static void sendSubmittedStudentsSupervisor(String exam){
       StringBuilder builder = new StringBuilder();
       
     Set<String> studentKeys =  submittedCandidates.keySet();
     for(String keys : studentKeys){
         if(submittedCandidates.get(keys).contains(exam)){
        if(presentCandidates.containsKey(keys))
         builder.append("#").append(keys).append(",").append(submittedCandidates.get(keys)).append(",").append("active ");
       else  builder.append("#").append(keys).append(",").append(submittedCandidates.get(keys)).append(",").append("not active ");
         }
       
     }
     
     
       System.out.println(builder.toString());
       
         for(Session ss : queue){
       if(ss.getUserProperties().containsValue(exam) && ss.getUserProperties().containsKey("Supervisor")){
           if(ss.isOpen()){
           ss.getAsyncRemote().sendText("submitCandidates*"+builder.toString());
          
           }
        }
       
       
       
   }
   
}


public static void sendActiveAndInactiveStudents(String exam){
        StringBuilder builder = new StringBuilder();
       
     Set<String> studentKeys =  submittedCandidates.keySet();
      for(String keys : studentKeys){
         if(submittedCandidates.get(keys).contains(exam)){
       
         builder.append("#").append(keys).append(",").append(submittedCandidates.get(keys)).append(",").append("not active ");
          }
         Set<String> studentPresentKeys =  presentCandidates.keySet();
         for(String present : studentPresentKeys){
             if(presentCandidates.get(present).contains(exam)){
                 builder.append("#").append(keys).append(",").append(presentCandidates.get(keys)).append(",").append("active ");
         
             }
         }
     
     }
     
     
     
        System.out.println(builder.toString());
       
          for(Session ss : queue){
        if(ss.getUserProperties().containsValue(exam) && ss.getUserProperties().containsKey("Supervisor")){
           if(ss.isOpen()){
            ss.getAsyncRemote().sendText("AllPresent*"+builder.toString());
          
           }
        }
       
       
       
   }
   

}

  public static void sendActiveStudents(String exam){
     
       StringBuilder builder = new StringBuilder();
       
       Set<String> studentKeys  =  presentCandidates.keySet();
      for(String keys : studentKeys ){
         if(presentCandidates.get(keys).contains(exam)){
        
         builder.append("#").append(keys).append(",").append(totalStudents.get(keys)).append(",").append("active ");
        // else  builder.append("#").append(keys).append(",").append(totalStudents.get(keys)).append(",").append("not active ");
         }
       
     }
     
     
     
       System.out.println(builder.toString());
       
         for(Session ss : queue){
       if(ss.getUserProperties().containsValue(exam) && ss.getUserProperties().containsKey("Supervisor")){
           if(ss.isOpen()){
           ss.getAsyncRemote().sendText("activeCandidates*"+builder.toString());
          
           }
        }
       
       
       
   }
   
   }

   public static void sendStudents(){
       StringBuilder builder = new StringBuilder();
       
     Set<String> studentKeys =  totalStudents.keySet();
     for(String keys : studentKeys){
         if(presentCandidates.containsKey(keys))
         builder.append("#").append(keys).append(",").append(totalStudents.get(keys)).append(",").append("active ");
         else  builder.append("#").append(keys).append(",").append(totalStudents.get(keys)).append(",").append("not active ");
         
         
     }
     
       System.out.println(builder.toString());
       
         for(Session ss : queue){
       if(ss.getUserProperties().containsKey("Administrator")){
           if(ss.isOpen()){
         
         
              ss.getAsyncRemote().sendText("PresentStudents*"+builder.toString());
          
           }
        }
       
       
   }
   
   } 

 public static void started() {
     
     for(Session ss : queue){
       if(ss.getUserProperties().containsKey("Administrator")){
           if(ss.isOpen()){
           int count =  students.size();
         
              ss.getAsyncRemote().sendText("presentStats:"+String.valueOf(count));
              
              
              
          
           }
        }
       
       
   }
   
 }
 
 public void started2(String subject){
  
     for(Session ss : queue){
       if(ss.getUserProperties().containsValue(subject) && ss.getUserProperties().containsKey("Supervisor")){
           if(ss.isOpen()){
          
             
              ss.getAsyncRemote().sendText("started:"+"1");
              
           }
        }
       
       
   }
    
 }
 
  public static void ended(String subject){
   for(Session ss : queue){
       if(ss.getUserProperties().containsKey("Administrator")){
           if(ss.isOpen()){
           int count =  submittedCandidates.size();
           
              ss.getAsyncRemote().sendText("submitted:"+String.valueOf(count));
           }
       }
       
       if(ss.getUserProperties().containsValue(subject) && ss.getUserProperties().containsKey("Supervisor")){
           ss.getAsyncRemote().sendText("submitted:1"); 
         }
   }
   
   
 }
    
  


public  void increaseTime(String msg,Session session){
     
         
     if(msg.startsWith("^") && msg.contains("+")){    
 
         int index = msg.indexOf("^");
    int move = msg.indexOf(":");
    
    String sub = msg.substring((index +1),(move));
 
   String subs = msg.substring((move +1) , msg.length());
      
       int valueCount = 0;
    for(Session ss : queue){
       if( ss.getUserProperties().containsValue(sub)){
           
           if(ss.isOpen()){
               ss.getAsyncRemote().sendText("*:"+subs);
                 System.out.println("sent  control 74: "+subs +" to "+sub);
               valueCount++;
              
                
           }
           
       }
    }
    if(valueCount>0)
    if(session.isOpen()){
        String messageBuilder = "connectionStatus:Information sent succesfully.\n a total of "+valueCount+"candidates recieved this message";
        session.getAsyncRemote().sendText(messageBuilder);
    }
    if(valueCount ==0){
        String messageBuilder = "connectionStatus:error sending...candidates inactive";
         session.getAsyncRemote().sendText(messageBuilder);
    }
   return;
     }
     
     if(msg.startsWith("*") && msg.contains("+")){    
          
  //what i am sending from the client sode... ongoingexams.js has a *
    
    int index = msg.indexOf("*");
    int move = msg.indexOf(":");
    
    String sub = msg.substring((index +1),(move));
    
   String subs = msg.substring((move +1) , msg.length());
  boolean sent =false;
    for( Session ss : queue){
       if( ss.getUserProperties().containsKey(sub)){
           
           if(ss.isOpen()){
               ss.getAsyncRemote().sendText("*:"+subs);
               sent = true;
               System.out.println("sent control 75:  "+subs +" to "+sub);
                 
               
                
           }
           
       }
    }
    if(sent)
   if(session.isOpen()){
        String messageBuilder = "connectionStatus:Information sent succesfully.";
        session.getAsyncRemote().sendText(messageBuilder);
        
    }
    if(!sent)
          if(session.isOpen()){
        String messageBuilder = "connectionStatus:error sending...candidate inactive";
        session.getAsyncRemote().sendText(messageBuilder);
    }
    
    return;
     }
     
     
        if(msg.startsWith("^")){    
 //what i am sending from the client sode... ongoingexams.js has a ^
    
    int index = msg.indexOf("^");
    int move = msg.indexOf(":");
    
    String sub = msg.substring((index +1),(move));
 
   String subs = msg.substring((move +1) , msg.length());
     int valueCount = 0;

       
    for(Session ss : queue){
       if( ss.getUserProperties().containsValue(sub)){
           
           if(ss.isOpen()){
               ss.getAsyncRemote().sendText("*:"+subs);
               System.out.println("sent control 76: "+subs +" to "+sub);
                 valueCount++;
              
                
           }
           
       }
    }
     if(valueCount>0)
    if(session.isOpen()){
        String messageBuilder = "connectionStatus:Information sent succesfully.\n a total of "+valueCount+"candidates recieved this message";
        session.getAsyncRemote().sendText(messageBuilder);
    }
    if(valueCount ==0){
        String messageBuilder = "connectionStatus:error sending...candidates inactive";
         session.getAsyncRemote().sendText(messageBuilder);
    }
   return;
     }
     
     if(msg.startsWith("*")){    
       
  //what i am sending from the client sode... ongoingexams.js has a *
      
    int index = msg.indexOf("*");
    int move = msg.indexOf(":");
      boolean sent =false;
    String sub = msg.substring((index +1),(move));
   
   String subs = msg.substring((move +1) , msg.length());
  
    for( Session ss : queue){
       if( ss.getUserProperties().containsKey(sub)){
           
           if(ss.isOpen()){
               ss.getAsyncRemote().sendText("*:"+subs);
               System.out.println("sent control 77: "+subs +" to "+sub);
                sent = true;
                
           }
           
       }
    }
    if(sent)
   if(session.isOpen()){
        String messageBuilder = "connectionStatus:Information sent succesfully.";
        session.getAsyncRemote().sendText(messageBuilder);
        
    }
    if(!sent)
          if(session.isOpen()){
        String messageBuilder = "connectionStatus:error sending...candidate inactive";
        session.getAsyncRemote().sendText(messageBuilder);
    }
     }
    
    
}

public void flagQuestion(String topic){
    String [] split = topic.split("#");
    
    String subject = split[2];
    String questionNumber = split[3];
    System.out.println(subject +" "+questionNumber);
  
 for( Session ss : queue){
       if( ss.getUserProperties().containsValue(subject)){
           
           if(ss.isOpen()){
               ss.getAsyncRemote().sendText("this is Instructor:Question "+questionNumber+" has been flagged");
            
           }
           
       }
} 
}

public void sendContact(){
      for(Session ss : queue){
       if(ss.getUserProperties().containsKey("Group")){
           if(ss.isOpen()){
             ss.getAsyncRemote().sendText("*newContact*&"+contactAmount.size());  
              
           }
       }
           }
}
public void broadcast(String s){
    
    String [] getText = s.split("&broad");
    
     
      
     
       for(Session ss : queue){
       if(ss.getUserProperties().containsKey("Group")){
           if(ss.isOpen()){
               
           Name name =  (Name)  ss.getUserProperties().get("Group");
               System.err.println(name.getLastName());
               
            ss.getAsyncRemote().sendText("broad&#"+getText[0]+":"+getText[1] +":"+getText[2]+":"+getText[3]);
              
             
              
            
             
        
             
          
           }
        }
       
       
   }
}

@OnMessage
public  void messageRecieved(Session session,
String msg){
    if(msg.startsWith("<h><h><h>")){
        startCandidate();
        return;
    }
    if(msg.startsWith("Chat:")){
        String [] split = msg.split(":");
        broadcast(split[1]);
        
        return;
         
    }
    
    
    if(msg.startsWith("Active:")){
          String [] splits = msg.split(":");
          sendActiveStudents(splits[1]);
        return;
    }
    
    if(msg.startsWith("submitAll:")){
        String [] splits = msg.split(":");
         sendSubmittedStudentsSupervisor(splits[1]);
         
         return;
         
    }
    
    if(msg.startsWith("AllPresent:")){
        String [] splits = msg.split(":");
        sendActiveAndInactiveStudents(splits[1]);
        
        return;
    }
    
    if(msg.startsWith("AllSession:")){
       String [] splits = msg.split(":");  
       stillInSessionSuperVisor(splits[1]);
       return;
       
    }
    
    
    if(msg.startsWith("submittedStudents")){
       submittedStudentsMethod();
       return;
    }
    
    if(msg.startsWith("presentStudents")){
        sendStudents();
        return;
    }
    
    System.out.println(""+msg);
    if(msg.startsWith("#flag")){
        flagQuestion(msg);
        return;
    }
     if(msg.startsWith("grade")){
          
          String [] splits = msg.split(":");
          for(String look : splits){
              System.out.println(look);
              
          }
          System.out.println(splits[2]);
          if(splits[2].equals("S.R")){
              try{
              gradeSR(splits[1]);
              }
              catch(ArrayIndexOutOfBoundsException e){
                e.printStackTrace();
              }
              
              return;
          }
          if(splits[2].equals("M.R")){
              gradeMR(splits[1]);
              return;
          }
          if(splits[2].equals("E.S")){
            gradeES(splits[1]);
              return;
              
          }
          if(splits[2].equals("B.G")){
            gradeBG(splits[1]);
              return;
          }
          if(splits[2].equals("F.B")){
             gradeFB(splits[1]);
              return;
          }
          if(splits[2].equals("T.F")){
              gradeTF(splits[1]);
              return;
          }
          if(splits[2].equals("L.S")){
              gradeLS(splits[1]);
              return;
          }
          if(splits[2].equals("S.M")){
              gradeSM(splits[1]);
              return;
          }
          if(splits[2].equals("D.D")){
              gradeDD(splits[1]);
              return;
          }
          if(splits[2].equals("M.X")){
              gradeMX(splits[1]);
              return;
          }
           if(splits[2].equals("A.E")){
              gradeAE(splits[1]);
              
              return;
          }
          
       return;
      }
    if(msg.startsWith("^") || msg.startsWith("*")){
        
         increaseTime(msg,session);
        return;
    }
    
  

     String  matric ="";
       String [] amperstand= msg.split("&");
       String [] split = amperstand[0].split("=");
       int count = 0;
       for(String ss : split){
           if(count == 1){
              
               matric = ss;
           }
           count++;
       }
      
       
       
      
       StringBuilder build = new StringBuilder();
build.append(amperstand[0]).append("&").append(amperstand[1]).append("&").append(amperstand[2]);
        
         String [] subject = amperstand[3].split("=");
        String [] splitted = amperstand[1].split("=");
       
        
          
       if(splitted[1].equals("0") || splitted[1].equals("00") || splitted[1].equals("00") ){
          
          
           
           
           if(submittedCandidates.containsKey(matric)){
         String  subjectValue =  submittedCandidates.get(matric);
         subjectValue+="->"+subject[1];
         
           submittedCandidates.put(matric, subjectValue);
           
           
           presentCandidates.remove(matric);
           
           
           
           }
           else{
           submittedCandidates.put(matric, subject[1]);
           
           presentCandidates.remove(matric);
           }
           
           if( submittedStudents.containsKey(subject[1])){
               int k =  submittedStudents.get(subject[1]);
               
        
          synchronized (submittedStudents){
           int value = submittedStudents.get(subject[1]);
           
           submittedStudents.put(subject[1], ++value);
           
          }
           }
           else{
              submittedStudents.put(subject[1], 1); 
              
           }
           
           ended(subject[1]);
           
   
       }
      
     students.put(matric, build);
         allLoggedInStudents.put(matric+"#split"+subject[1], build.toString());
         results();
}


public void submitted(String subject, Session s){
    
    if( submittedStudents.get(subject)!= null){
  int value = submittedStudents.get(subject);
  
 
    s.getAsyncRemote().sendText(String.valueOf("submitted:"+value));
    }
    
    
}


@OnMessage
public void binaryMessage(Session session, ByteBuffer msg) {
System.out.println("Binary message: " + msg.toString());
}




public void results(){
    
    DatabaseReportClass c = new DatabaseReportClass();
 
    c.setStudentStatus();
     c.updateStudentDataQuery();
  
}


public void grade(String subject){
   /* 
    DatabaseReportClass mark = new DatabaseReportClass();
    
     mark.getResults();
    String scheme = mark.returnResults(subject);
   
   String [] results = scheme.split("#");
 
 
    
    ArrayList getStudents = new ArrayList();
    Set<String> sets = totalStudents.keySet();
    
    for(String keys : sets){
        if(totalStudents.get(keys).contains(subject)){
            getStudents.add(keys);
        }
    }
    
     String [] all = new String[getStudents.size()];
   
    for(int c = 0; c < getStudents.size(); c++){
        all[c] = students.get(getStudents.get(c).toString()).toString();
       
    }
    
   
  
    String table="";
   for(int e = 0; e < all.length; e++){
       
       String [] splitStudent = all[e].split("answers=");
       String matric = splitStudent[0].substring(splitStudent[0].indexOf("="),splitStudent[0].indexOf("&") );
   
       String [] comma = splitStudent[1].split(",");
         
       int marker = 0;
       for(int ii = 0; ii < comma.length; ii++){
           try{
          if( results[ii].equals(comma[ii]) ){
          
              marker+=2;
          } else{
              
                 
          }
          
           }
           catch(ArrayIndexOutOfBoundsException ex){
               ex.printStackTrace();
           }
       }
       
       table+="<tr><td>"+matric+"</td><td>"+marker+"</td> </tr>";
   }
   

    */
    
    
    
    
      DatabaseReportClass mark = new DatabaseReportClass();
    
     mark.getResults();
    String scheme = mark.returnResults(subject);
   
   String [] results = scheme.split("#");
    System.out.println(totalStudents.size());
 for(String loop : results){
     System.out.println(loop);
 }
    
    ArrayList getStudents = new ArrayList();
    Set<String> sets = totalStudents.keySet();
    
    for(String keys : sets){
        System.out.println(keys);
        if(totalStudents.get(keys).replaceAll("%20"," ").contains(subject)){
            getStudents.add(keys);
            
        }
        else{
            String val = totalStudents.get(keys);
            System.out.println("the values "+val);
        String v=    totalStudents.get(keys).replaceAll("%"," ");
            System.out.println("i do not contain"+v);
        }
    }
    
     String [] all = new String[getStudents.size()];
   
    for(int c = 0; c < getStudents.size(); c++){
        all[c] = students.get(getStudents.get(c).toString()).toString();
        System.out.println("these is the student  "+all[c]);
        System.out.println("these are the students in get students "+getStudents.get(c));
    }
    
   
    System.out.println("these is all length "+all.length);
    String table="";
   for(int e = 0; e < all.length; e++){
       
       String [] splitStudent = all[e].split("answers=");
       String matric = splitStudent[0].substring(splitStudent[0].indexOf("="),splitStudent[0].indexOf("&") );
       System.out.println("i think these is important "+splitStudent[1]);
       String [] comma = splitStudent[1].split(",");
       
       for(String loop : comma){
           System.out.println(loop);
       }
       
     
         
       int marker = 0;
          boolean value = false;
            // int number = 0;
       for(int ii = 0; ii < comma.length; ii++){
           try{
          System.out.println("the size of result and comma is  "+results[ii].length()+" "+comma[ii].length());
             
             if(results[ii].length() == comma[ii].length()){
                String [] sec = results[ii].split("\\*");
                  for(String loop : sec){
                      System.out.println(loop +" comma "+comma[ii]);
                      int ind = loop.indexOf("(");
                     
            if(comma[ii].contains(loop.substring(0, ind))){
                System.out.println("does it contain these "+loop.substring(0, ind));
                if(!value){
             marker +=mark.getWeight();   
                }
            }
            else{
               value = true; 
              marker = 0;
            }
              
          }
                
             }
             else{
                 //if result is longer and it is suppoerted
             }
           }
           catch(ArrayIndexOutOfBoundsException ex){
               ex.printStackTrace();
           }
       }
       
       table+="<tr><td>"+matric+"</td><td>"+marker+"</td> </tr>";
   }
    System.out.println("the table "+table);
    
    
    
}



public void gradeSR(String subject) throws ArrayIndexOutOfBoundsException{
    HashMap<String,String> update = new LinkedHashMap<>();
      DatabaseReportClass mark = new DatabaseReportClass();
    
     mark.getResults();
    String scheme = mark.returnResults(subject);
   
    String [] results = scheme.split("#");
 
 
    
    ArrayList getStudents = new ArrayList();
    Set<String> sets = allLoggedInStudents.keySet();
    
    for(String keys : sets){
    /* 
           if(totalStudents.get(keys).replaceAll("%20"," ").contains(subject)){
            getStudents.add(keys);
            
        }
           */
        String [] splitter = keys.split("#split");
           
        if(splitter[1].equals(subject)){
            getStudents.add(keys);
        }
    }
    
     String [] all = new String[getStudents.size()];
   
    for(int c = 0; c < getStudents.size(); c++){
        all[c] = allLoggedInStudents.get(getStudents.get(c).toString()).toString();
        System.out.println(all[c]);
        
    }
    
   
  
    String table="";
   for(int e = 0; e < all.length; e++){
       
       String [] splitStudent = all[e].split("answers=");
       String matric = splitStudent[0].substring(splitStudent[0].indexOf("=")+1,splitStudent[0].indexOf("&") );
   
       String [] comma = splitStudent[1].split(",");
         
       int marker = 0;
       for(int ii = 0; ii < comma.length; ii++){
           try{
          if( results[ii].equals(comma[ii]) ){
          
              marker+=mark.getWeight();
          } else{
              
          }
          
           }
           catch(ArrayIndexOutOfBoundsException ex){
               ex.printStackTrace();
           }
       }
       System.out.println(matric);
       update.put(matric, "");
       if(StartUpClassOngoingExams.studentsRegistered.containsKey(matric.replace("=", "")))
       table+="<tr><td>"+(e+1)+"</td><td>"+matric+"</td> <td>"+StartUpClassOngoingExams.studentsRegistered.get(matric)+"</td><td>"+marker+"</td> </tr>";
       else  table+="<tr><td>"+(e+1)+"</td><td>"+matric.replaceAll("=","")+"</td> <td>---------</td><td>"+marker+"</td> </tr>";
      
   }
   
   
   
   
    System.out.println(table);
  mark.populateResults();
    DateFormat date = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
    Date d = new Date();
 String dates =   date.format(d);
 
mark.resultQuery(subject, table, all.length, dates);

UpdateStatus status = new UpdateStatus();
status.updateStart();
status.executeQuery(update,subject);

  
    
}
public void gradeMR(String subject){
    System.out.println(" i have been asked to grade mr");
     HashMap<String,String> update = new LinkedHashMap<>();

    
    //get key set of students in the map i stored them
     ArrayList getStudents = new ArrayList();
  Set<String> sets = allLoggedInStudents.keySet();
    
    for(String keys : sets){
    
      String [] splitter = keys.split("#split");
           
        if(splitter[1].equals(subject)){
            getStudents.add(keys);
        }
        
   
    
    }
    
    //create database class
     DatabaseReportClass mark = new DatabaseReportClass();
    
    mark.getResults();
   String scheme = mark.returnResults(subject);
  //split db results with the delimeters
      String [] results = scheme.split("#");
       System.err.println("for debugging purposes");
      for(String r : results){
        System.out.println(r);
        
      }
 
      // get all students for the exam and store here
     String [] all = new String[getStudents.size()];
   
    for(int c = 0; c < getStudents.size(); c++){
       all[c] = allLoggedInStudents.get(getStudents.get(c).toString()).toString();
     //storing studenst
    }
    
   
    String table="";
   for(int e = 0; e < all.length; e++){
           StringBuilder adder = new StringBuilder();
           ArrayList studentMark = new ArrayList();
           //split at anserrs and store
       String [] splitStudent = all[e].split("answers=");
       String matric = splitStudent[0].substring(splitStudent[0].indexOf("=")+1,splitStudent[0].indexOf("&") );
   
     
       int marker = 0;
       String [] comma = splitStudent[1].split(",");
       
     
       for(int c = 0; c < comma.length; c++){
           if(!comma[c].equals("") && comma[c].length() > 0){
               adder.append(comma[c]);
           }
           //System.out.println("look into these "+comma[c]);
           
       }
       //separate values by 0 the way i passed the answers
       String [] spli  = adder.toString().split("0");
       for(String ss : spli){
           studentMark.add(ss);
           //adding student results
       }
    for(int ii = 0; ii < studentMark.size(); ii++){
      //it starts from S.M so results must contain fake values till array 2
        //bad programming practice
        if(ii >= 2){
            
 
    if(results[ii].equals(Sorting.sort(studentMark.get(ii).toString()))){
        marker+=mark.getWeight();
    }
  System.out.println("the sorted algorithm "+ Sorting.sort(studentMark.get(ii).toString()));
 
        }
       
    }
    update.put(matric, "");
      if(StartUpClassOngoingExams.studentsRegistered.containsKey(matric.replace("=", "")))
       table+="<tr><td>"+(e+1)+"</td><td>"+matric+"</td> <td>"+StartUpClassOngoingExams.studentsRegistered.get(matric)+"</td><td>"+marker+"</td> </tr>";
       else  table+="<tr><td>"+(e+1)+"</td><td>"+matric.replaceAll("=","")+"</td> <td>---------</td><td>"+marker+"</td> </tr>";
      
   }
   
    
  System.out.println("these is the final table "+table);
    mark.populateResults();
    DateFormat date = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
    Date d = new Date();
 String dates =   date.format(d);
 
  mark.resultQuery(subject, table, all.length, dates);
  
UpdateStatus status = new UpdateStatus();
status.updateStart();
status.executeQuery(update,subject);

  
}
public void gradeBG(String subject){
    
}
//use the advanced sort for this guy incase textboxes are entered from the back
public void gradeFB(String subject){
    
  HashMap<String,String> update = new LinkedHashMap<>();
     DatabaseReportClass mark = new DatabaseReportClass();
    
     mark.getResults();
    String scheme = mark.returnResults(subject);
   
   String [] results = scheme.split("#");
 
 
    
    ArrayList getStudents = new ArrayList();
    Set<String> sets = allLoggedInStudents.keySet();

    for(String keys : sets){
  
  String [] splitter = keys.split("#split");
           
        if(splitter[1].equals(subject)){
            getStudents.add(keys);
        }

    }
    
     String [] all = new String[getStudents.size()];
   
    for(int c = 0; c < getStudents.size(); c++){
      
 all[c] = allLoggedInStudents.get(getStudents.get(c).toString()).toString();
    }
    
   
  
    String table="";
   for(int e = 0; e < all.length; e++){
       
       String [] splitStudent = all[e].split("answers=");
       String matric = splitStudent[0].substring(splitStudent[0].indexOf("=")+1,splitStudent[0].indexOf("&") );
   
       String [] comma = splitStudent[1].split(",");
         
       int marker = 0;
          boolean value = false;
            // int number = 0;
       for(int ii = 0; ii < comma.length; ii++){
           try{
        
          
             if(results[ii].length() == comma[ii].length()){
        System.out.println("result is "+results[ii]+" my answer "+comma[ii]);
            
             
        
                String [] sec = results[ii].split("\\*");
                  for(String loop : sec){
            if(comma[ii].contains(loop)){
                if(!value){
                   
             marker +=mark.getWeight();   
                }
         
            }
            else{
               value = true; 
              marker = 0;
            }
              
          }
                
             }
             else{
                 System.out.println("length differs " );
                 //if result is longer and it is suppoerted
             }
           }
           catch(ArrayIndexOutOfBoundsException ex){
               ex.printStackTrace();
           }
       }
       update.put(matric, "");
        if(StartUpClassOngoingExams.studentsRegistered.containsKey(matric.replace("=", "")))
       table+="<tr><td>"+(e+1)+"</td><td>"+matric+"</td> <td>"+StartUpClassOngoingExams.studentsRegistered.get(matric)+"</td><td>"+marker+"</td> </tr>";
       else  table+="<tr><td>"+(e+1)+"</td><td>"+matric.replaceAll("=","")+"</td> <td>---------</td><td>"+marker+"</td> </tr>";
      
   }
    System.out.println("the table "+table);
 mark.populateResults();
    DateFormat date = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
    Date d = new Date();
 String dates =   date.format(d);
 
  mark.resultQuery(subject, table, all.length, dates);
  
UpdateStatus status = new UpdateStatus();
status.updateStart();
status.executeQuery(update,subject);

  
}
public void gradeMX(String subject){
    

  HashMap<String,String> update = new LinkedHashMap<>();

    DatabaseReportClass mark = new DatabaseReportClass();
    
     mark.getResults();
    String scheme = mark.returnResults(subject);
   
   String [] results = scheme.split("#");
 
 
    
    ArrayList getStudents = new ArrayList();
  Set<String> sets = allLoggedInStudents.keySet(); 
    for(String keys : sets){
   /* 
           if(totalStudents.get(keys).replaceAll("%20"," ").contains(subject)){
            getStudents.add(keys);
            
        }
           */
      
  String [] splitter = keys.split("#split");
           
        if(splitter[1].equals(subject)){
            getStudents.add(keys);
        }

    }
    
     String [] all = new String[getStudents.size()];
   
    for(int c = 0; c < getStudents.size(); c++){
       
 all[c] = allLoggedInStudents.get(getStudents.get(c).toString()).toString();
       

    }
    
   
  
    String table="";
   for(int e = 0; e < all.length; e++){
       
       String [] splitStudent = all[e].split("answers=");
       String matric = splitStudent[0].substring(splitStudent[0].indexOf("=")+1,splitStudent[0].indexOf("&") );
   
       String [] comma = splitStudent[1].split(",");
         
       int marker = 0;
          boolean value = false;
            // int number = 0;
       for(int ii = 0; ii < comma.length; ii++){
           try{
        
          
             if(results[ii].length() == comma[ii].length()){
        System.out.println("result is "+results[ii]+" my answer "+comma[ii]);
        
            if(results[ii].equals(Sorting.sortAdvanced(comma[ii]))){
                System.out.println("yes ");
              marker +=mark.getWeight();   
                System.out.println(marker);
                
                 
            }
            else{
                System.out.println(results[ii] +" jols "+Sorting.sortAdvanced(comma[ii]));
            }
         
                 
             
          }
          
              else{
                 System.out.println(comma[ii] +" "+results[ii]);
                   System.out.println(comma[ii].length() +" "+results[ii].length());
                 System.out.println("length differs " );
                 //if result is longer and it is suppoerted
             }
           }
           catch(ArrayIndexOutOfBoundsException ex){
               ex.printStackTrace();
           }
          
       
           update.put(matric, "");
        if(StartUpClassOngoingExams.studentsRegistered.containsKey(matric.replace("=", "")))
       table+="<tr><td>"+(e+1)+"</td><td>"+matric+"</td> <td>"+StartUpClassOngoingExams.studentsRegistered.get(matric)+"</td><td>"+marker+"</td> </tr>";
       else  table+="<tr><td>"+(e+1)+"</td><td>"+matric.replaceAll("=","")+"</td> <td>---------</td><td>"+marker+"</td> </tr>";
      
  
}
    
    System.out.println("the table "+table);
 mark.populateResults();
    DateFormat date = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
    Date d = new Date();
 String dates =   date.format(d);
 
  mark.resultQuery(subject, table, all.length, dates);
  UpdateStatus status = new UpdateStatus();
status.updateStart();
status.executeQuery(update,subject);

}
}
  public void gradeSM(String subject){
     
  HashMap<String,String> update = new LinkedHashMap<>();
     System.out.println("in s.m");
   DatabaseReportClass mark = new DatabaseReportClass();
    
     mark.getResults();
    String scheme = mark.returnResults(subject);
   
   String [] results = scheme.split("#");
 
 
    
    ArrayList getStudents = new ArrayList();
   Set<String> sets = allLoggedInStudents.keySet();

    for(String keys : sets){
    /* 
           if(totalStudents.get(keys).replaceAll("%20"," ").contains(subject)){
            getStudents.add(keys);
            
        }
           */
       String [] splitter = keys.split("#split");
           
        if(splitter[1].equals(subject)){
            getStudents.add(keys);
        }
    }
    String [] all = new String[getStudents.size()];
   
    for(int c = 0; c < getStudents.size(); c++){
       
 all[c] = allLoggedInStudents.get(getStudents.get(c).toString()).toString();
       
    
    }
    
   
  
    String table="";
   for(int e = 0; e < all.length; e++){
       
       String [] splitStudent = all[e].split("answers=");
       String matric = splitStudent[0].substring(splitStudent[0].indexOf("=")+1,splitStudent[0].indexOf("&") );
   
       String [] comma = splitStudent[1].split(",");
         
       int marker = 0;
       for(int ii = 0; ii < comma.length; ii++){
           try{
              
          if( results[ii].trim().equals(comma[ii].trim()) ){
          
              marker+=mark.getWeight();
          } else{
              System.out.println("i am not equal");    
          }
          
           }
           catch(ArrayIndexOutOfBoundsException ex){
               ex.printStackTrace();
           }
       }
          
                update.put(matric, "");
           if(StartUpClassOngoingExams.studentsRegistered.containsKey(matric.replace("=", "")))
       table+="<tr><td>"+(e+1)+"</td><td>"+matric+"</td> <td>"+StartUpClassOngoingExams.studentsRegistered.get(matric)+"</td><td>"+marker+"</td> </tr>";
       else  table+="<tr><td>"+(e+1)+"</td><td>"+matric.replaceAll("=","")+"</td> <td>---------</td><td>"+marker+"</td> </tr>";
      
   }
   
    System.out.println(table);
 /* mark.populateResults();
    DateFormat date = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
    Date d = new Date();
 String dates =   date.format(d);
 
  mark.resultQuery(subject, table, all.length, dates); */
  
UpdateStatus status = new UpdateStatus();
status.updateStart();
status.executeQuery(update,subject);

    
    
}
public void gradeDD(String subject){
    
}
public void gradeLS(String subject){
     DatabaseReportClass mark = new DatabaseReportClass();
     HashMap<String,String> update = new LinkedHashMap<>();

     mark.getResults();
    String scheme = mark.returnResults(subject);
   
   String [] results = scheme.split("#");
 
 
    
    ArrayList getStudents = new ArrayList();
   Set<String> sets = allLoggedInStudents.keySet();
    
    for(String keys : sets){
       /* 
           if(totalStudents.get(keys).replaceAll("%20"," ").contains(subject)){
            getStudents.add(keys);
            
        }
           */
     
  String [] splitter = keys.split("#split");
           
        if(splitter[1].equals(subject)){
            getStudents.add(keys);
        }
    }
    
     String [] all = new String[getStudents.size()];
   
    for(int c = 0; c < getStudents.size(); c++){
    
 all[c] = allLoggedInStudents.get(getStudents.get(c).toString()).toString();
       
  
    }
    
   
  
    String table="";
   for(int e = 0; e < all.length; e++){
       
       String [] splitStudent = all[e].split("answers=");
       String matric = splitStudent[0].substring(splitStudent[0].indexOf("=")+1,splitStudent[0].indexOf("&") );
   
       String [] comma = splitStudent[1].split(",");
         
       int marker = 0;
       for(int ii = 0; ii < comma.length; ii++){
           try{
          if( results[ii].equals(comma[ii]) ){
          
              marker+=mark.getWeight();
          } else{
              
          }
          
           }
           catch(ArrayIndexOutOfBoundsException ex){
               ex.printStackTrace();
           }
       }
       
       
update.put(matric, "");

           if(StartUpClassOngoingExams.studentsRegistered.containsKey(matric.replace("=", "")))
       table+="<tr><td>"+(e+1)+"</td><td>"+matric+"</td> <td>"+StartUpClassOngoingExams.studentsRegistered.get(matric)+"</td><td>"+marker+"</td> </tr>";
       else  table+="<tr><td>"+(e+1)+"</td><td>"+matric.replaceAll("=","")+"</td> <td>---------</td><td>"+marker+"</td> </tr>";
      
   }
   
    System.out.println(table);
  mark.populateResults();
    DateFormat date = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
    Date d = new Date();
 String dates =   date.format(d);
 
  mark.resultQuery(subject, table, all.length, dates);
  
      
    
UpdateStatus status = new UpdateStatus();
status.updateStart();
status.executeQuery(update,subject);

    
}
public void gradeTF(String subject){
    
  HashMap<String,String> update = new LinkedHashMap<>();


   DatabaseReportClass mark = new DatabaseReportClass();
    
     mark.getResults();
    String scheme = mark.returnResults(subject);
   
   String [] results = scheme.split("#");
 
 
    
    ArrayList getStudents = new ArrayList();
    Set<String> sets = allLoggedInStudents.keySet();
    for(String keys : sets){
       /* 
           if(totalStudents.get(keys).replaceAll("%20"," ").contains(subject)){
            getStudents.add(keys);
            
        }
           */
        String [] splitter = keys.split("#split");
           
        if(splitter[1].equals(subject)){
            getStudents.add(keys);
        }
    }
    
     String [] all = new String[getStudents.size()];
   
    for(int c = 0; c < getStudents.size(); c++){
        all[c] = allLoggedInStudents.get(getStudents.get(c).toString()).toString();
       

    }
    
   
  
    String table="";
   for(int e = 0; e < all.length; e++){
       
       String [] splitStudent = all[e].split("answers=");
       String matric = splitStudent[0].substring(splitStudent[0].indexOf("=")+1,splitStudent[0].indexOf("&") );
   
       String [] comma = splitStudent[1].split(",");
         
       int marker = 0;
       for(int ii = 0; ii < comma.length; ii++){
           try{
          if( results[ii].equals(comma[ii]) ){
          
              marker+=mark.getWeight();
          } else{
              
          }
          
           }
           catch(ArrayIndexOutOfBoundsException ex){
               ex.printStackTrace();
           }
       }
       
update.put(matric, "");
           if(StartUpClassOngoingExams.studentsRegistered.containsKey(matric.replace("=", "")))
       table+="<tr><td>"+(e+1)+"</td><td>"+matric+"</td> <td>"+StartUpClassOngoingExams.studentsRegistered.get(matric)+"</td><td>"+marker+"</td> </tr>";
       else  table+="<tr><td>"+(e+1)+"</td><td>"+matric.replaceAll("=","")+"</td> <td>---------</td><td>"+marker+"</td> </tr>";
      
   }
   
    System.out.println(table);
  mark.populateResults();
    DateFormat date = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
    Date d = new Date();
 String dates =   date.format(d);
 
  mark.resultQuery(subject, table, all.length, dates);
  
      
    
}
    
    public void gradeES(String subject){
      
      HashMap<String,String> update = new LinkedHashMap<>();

    ArrayList getStudents = new ArrayList();
    Set<String> sets = allLoggedInStudents.keySet();
    for(String keys : sets){
       /* 
           if(totalStudents.get(keys).replaceAll("%20"," ").contains(subject)){
            getStudents.add(keys);
            
        }
           */
        String [] splitter = keys.split("#split");
           
        if(splitter[1].equals(subject)){
            getStudents.add(keys);
        }
    }
    
     String [] all = new String[getStudents.size()];
   
    for(int c = 0; c < getStudents.size(); c++){
        all[c] = allLoggedInStudents.get(getStudents.get(c).toString()).toString();
       
        

    }
    
   
  
    String table="";
    StringBuilder appender = new StringBuilder();
   for(int e = 0; e < all.length; e++){
       
       String [] splitStudent = all[e].split("answers=");
       String matric = splitStudent[0].substring(splitStudent[0].indexOf("=")+1,splitStudent[0].indexOf("&") );
   appender.append("<hr/>");
       String [] comma = splitStudent[1].split("eNdanswEr,");
       
         
       int marker = 0;
       for(int ii = 0; ii < comma.length; ii++){
         
           try{
               if(ii > 0){
                   System.err.println(comma[ii]);
               appender.append("<div>").append("(").append(ii).append(")").append(comma[ii]).append("</div>").append("<div> <button id=\'").append(matric).append("\'>Pass</button> &nbsp; <button   id=\'").append(matric).append("\'  >fail </button>  ").append("</div>");
   
               }
         
               
          
               
           }
           catch(ArrayIndexOutOfBoundsException ex){
               ex.printStackTrace();
           }
       }
       
update.put(matric, "");
     


 // if(StartUpClassOngoingExams.studentsRegistered.containsKey(matric.replace("=", "")))
   //    table+="<tr><td>"+(e+1)+"</td><td>"+matric+"</td> <td>"+StartUpClassOngoingExams.studentsRegistered.get(matric)+"</td><td>"+marker+"</td> </tr>";
     //  else  table+="<tr><td>"+(e+1)+"</td><td>"+matric.replaceAll("=","")+"</td> <td>---------</td><td>"+marker+"</td> </tr>";
      
   //}
   
    System.out.println(appender);
    
      
    }
   
   String replaceResult = subject.replaceAll("_E.S", "_R.S");
       File file = new File(System.getProperty("user.home")+System.getProperty("file.separator")+"Images");
          if(file.isDirectory()){
                File filed ;
           
              
                   filed = new File(file.getAbsolutePath()+System.getProperty("file.separator")+replaceResult+".jols");  
              
         try(  ObjectOutputStream ob = new ObjectOutputStream( new FileOutputStream(filed))){
      
             FileStream fi = new  FileStream(appender.toString());
             ob.writeObject(fi);
             ob.flush();
             ob.close();
         }
         catch(IOException e){
          
         } 
          }
          else{
              file.mkdir();
              File filed = new File(file.getAbsolutePath()+System.getProperty("file.separator")+replaceResult+".jols");
         try( ObjectOutputStream ob = new ObjectOutputStream( new FileOutputStream(filed))){
      
             
             FileStream fi = new  FileStream(appender.toString());
             ob.writeObject(fi);
             ob.flush();
             ob.close();
         }
         catch(IOException e){
          
         }
          }        
   
    }
  
   
    public void gradeAE(String subject){
      
      HashMap<String,String> update = new LinkedHashMap<>();
    DatabaseReportClass mark = new DatabaseReportClass();
    
     mark.getResults();
    String scheme = mark.returnResults(subject);
   
   String [] results = scheme.split("#");
    
    ArrayList getStudents = new ArrayList();
    Set<String> sets = allLoggedInStudents.keySet();
    for(String keys : sets){
       /* 
           if(totalStudents.get(keys).replaceAll("%20"," ").contains(subject)){
            getStudents.add(keys);
            
        }
           */
        String [] splitter = keys.split("#split");
           
        if(splitter[1].equals(subject)){
            getStudents.add(keys);
        }
    }
    
     String [] all = new String[getStudents.size()];
   
    for(int c = 0; c < getStudents.size(); c++){
        all[c] = allLoggedInStudents.get(getStudents.get(c).toString()).toString();
       
        

    }
    
   
  
    String table="";
    StringBuilder appender = new StringBuilder();
   for(int e = 0; e < all.length; e++){
       
       String [] splitStudent = all[e].split("answers=");
       String matric = splitStudent[0].substring(splitStudent[0].indexOf("=")+1,splitStudent[0].indexOf("&") );
   appender.append("<hr/>");
       String [] comma = splitStudent[1].split("eNdanswEr,");
       
         
       int marker = 0;
       for(int ii = 0; ii < comma.length; ii++){
         
           try{
               if(ii > 0){
              //     System.err.println(comma[ii]);
            //   appender.append("<div>").append("(").append(ii).append(")").append(comma[ii]).append("</div>").append("<div> <button id=\'").append(matric).append("\'>Pass</button> &nbsp; <button   id=\'").append(matric).append("\'  >fail </button>  ").append("</div>");
      
                   String [] splitter = comma[ii].split("sNdsnswEr");
                   for(int ie =0; ie < splitter.length; ie+=2){
                       if(results[ii].equals(splitter[ie])){
                       appender.append("<div>").append("(").append(ii).append(")").append(splitter[ie+1]).append("</div>").append("<div> <button id=\'").append(matric).append("\'>Pass</button> &nbsp; <button   id=\'").append(matric).append("\'  >fail </button>  ").append("</div>");
           
                       }else{
                           
                       }
                       System.out.println(results[ii] +" check "+splitter[ie]);
                   }
               }
         
               
          
               
           }
           catch(ArrayIndexOutOfBoundsException ex){
               ex.printStackTrace();
           }
       }
       
update.put(matric, "");
     


 // if(StartUpClassOngoingExams.studentsRegistered.containsKey(matric.replace("=", "")))
   //    table+="<tr><td>"+(e+1)+"</td><td>"+matric+"</td> <td>"+StartUpClassOngoingExams.studentsRegistered.get(matric)+"</td><td>"+marker+"</td> </tr>";
     //  else  table+="<tr><td>"+(e+1)+"</td><td>"+matric.replaceAll("=","")+"</td> <td>---------</td><td>"+marker+"</td> </tr>";
      
   //}
   
    System.out.println(appender);
    
      
    }
   
   String replaceResult = subject.replaceAll("_A.E", "_R.S");
       File file = new File(System.getProperty("user.home")+System.getProperty("file.separator")+"Images");
          if(file.isDirectory()){
                File filed ;
           
              
                   filed = new File(file.getAbsolutePath()+System.getProperty("file.separator")+replaceResult+".jols");  
              
         try(  ObjectOutputStream ob = new ObjectOutputStream( new FileOutputStream(filed))){
      
             FileStream fi = new  FileStream(appender.toString());
             ob.writeObject(fi);
             ob.flush();
             ob.close();
         }
         catch(IOException e){
          
         } 
          }
          else{
              file.mkdir();
              File filed = new File(file.getAbsolutePath()+System.getProperty("file.separator")+replaceResult+".jols");
         try( ObjectOutputStream ob = new ObjectOutputStream( new FileOutputStream(filed))){
      
             
             FileStream fi = new  FileStream(appender.toString());
             ob.writeObject(fi);
             ob.flush();
             ob.close();
         }
         catch(IOException e){
          
         }
          }        
   
    }
  
}
    

    


