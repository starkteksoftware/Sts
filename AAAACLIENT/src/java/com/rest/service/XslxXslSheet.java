/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.service;

import com.google.gson.Gson;
import org.apache.poi.ss.usermodel.Cell;


import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.HashMap;

import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Set;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;


/**
 *
 * @author bola odesile
 */
public class XslxXslSheet {
    
    static HashMap<String,StudentsObject> studentsMap = new LinkedHashMap<>();
    static HashMap<String,ExamScheduler> examScedule;
    static String  results;
    
      public static String checkExist(String f){
          try{
          Thread.sleep(4000);
          }
          catch(InterruptedException e){
              e.printStackTrace();
          }
               File file = new File(System.getProperty("user.home")+System.getProperty("file.separator")+"Images"+System.getProperty("file.separator")+f);
          
          if(file.exists() && file.getName().endsWith("xlsx")){
              readXlsx(file);
              return new Gson().toJson("file upload Succesful");
          }
           if(file.exists() && file.getName().endsWith("xls")){
              readXls(file);
              return new Gson().toJson("file upload Succesful");
          }
          else 
           
            return new Gson().toJson("1"); 
      }
      
       
       static void readXlsx( File inputFile) 
{
try 
{
        // Get the workbook instance for XLSX file
    
    
    
         XSSFWorkbook wb = new XSSFWorkbook(new FileInputStream(inputFile));

        // Get first sheet from the workbook
         XSSFSheet sheet = wb.getSheetAt(0);

        Row row;
        Cell cell;
  StringBuilder builder = new StringBuilder();
        // Iterate through each rows from first sheet
         Iterator<Row> rowIterator = sheet.iterator();
         
 
        while (rowIterator.hasNext()) 
        {
                System.out.println();
                
                
                row = rowIterator.next();

                // For each row, iterate through each columns
                  Iterator<Cell> cellIterator = row.cellIterator();
         
                       builder.append("\n");
                while (cellIterator.hasNext()) 
                {
                cell = cellIterator.next();
                

                 switch (cell.getCellType()) 
                {

                 case Cell.CELL_TYPE_BOOLEAN:
                 //       System.out.print( "boolean "+cell.getBooleanCellValue());
                         builder.append(cell.getBooleanCellValue()).append("\t");
                         
                        break;

                 case Cell.CELL_TYPE_NUMERIC:
                   //     System.out.print("number "+cell.getNumericCellValue());
                            builder.append(String.valueOf(cell.getNumericCellValue())).append("\t");
                    
                        break;

                 case Cell.CELL_TYPE_STRING:
                    //    System.out.print("string "+cell.getStringCellValue());
                          builder.append(cell.getStringCellValue()).append("\t");
                       
                        break;

                 case Cell.CELL_TYPE_BLANK:
                     //   System.out.print("Blank ");
                      
                         
                        break;

                default:
                        System.out.println(" cell"+cell);
                    

                }
                }
              //  System.out.println(builder.toString());
                results = builder.toString();
        }
         if(!Exam.multipleSheet  )
          populateMap();
        
          if( Exam.multipleSheet ){
             multipleSheet();
        }
}
catch (Exception e) 
{
        System.err.println("Exception :" + e.getMessage());
}
}
       
       
       static void multipleSheet(){
           
           examScedule = new LinkedHashMap<>();
         String [] splitNewLine = results.split("\n");
           for(String lookUp : splitNewLine){
               String [] splitTab= lookUp.split("\t");
               int count = 0;
               
               ExamScheduler examination = new  ExamScheduler();
               for(String look : splitTab){
                  if(count ==0){
                     
                      String [] spli = look.split("\t");
                      
                      examination.setExamName(spli[0]);
                      
                  }
                  
                       if(count ==1){
                          
                      String [] spli = look.split("\t");
                            examination.setExamDate(spli[0]);
                       }
                            if(count ==2){
                            String [] spli = look.split("\t");
                                examination.setExamTime(spli[0]);
                            }
                                 if(count ==3){
                                    String [] spli = look.split("\t");
                                    examination.setDurationInMinutes(spli[0]);
                                 }
                                      if(count ==4){
                                       String [] spli = look.split("\t");
                                         examination.setAmountOfQuestions(spli[0]);
                                          
                                        
                                         
                                      }
                                      
                                      if(count==5){
                                          String [] spli = look.split("\t");
                                         examination.setFeedBack(spli[0]);
                                            
                                      }
                                           
                                             examScedule.put(examination.getExamName(), examination);
                                                count++;
                                                
               }
           }
          
      addNewExam();
               
       }
       
       static void populateMap(){
           String [] splitNewLine = results.split("\n");
           for(String lookUp : splitNewLine){
               String [] splitTab= lookUp.split("\t");
               int count = 0;
               StudentsObject students = new StudentsObject();
               
               for(String look : splitTab){
                  if(count ==0){
                     
                      String [] spli = look.split("\t");
                      students.setStudentNumber(spli[0]);
                      
                  }
                  
                       if(count ==1){
                          
                      String [] spli = look.split("\t");
                            students.setLastName(spli[0]);
                       }
                            if(count ==2){
                            String [] spli = look.split("\t");
                                students.setFirstName(spli[0]);
                            }
                                 if(count ==3){
                                    String [] spli = look.split("\t");
                                     students.setMiddleName(spli[0]);
                                 }
                                      if(count ==4){
                                       String [] spli = look.split("\t");
                                          students.setGender(spli[0]);
                                          
                                        
                                         
                                      }
                                           
                                             studentsMap.put(students.getStudentNumber(), students);
                                                count++;
                                                
               }
           }
          
           queryDb();
           
       }
       
       
       public static String addNewExam(){
           System.out.println("control executed:");
          // AddNewExam addUp = new AddNewExam();
           //addUp.insertExam();
           
          //return addUp.runInsertExamQuery(examScedule);
           return"";
          
       }
       
       
       public static String queryDb(){
           
           if(Exam.examSent){
            InsertStudentsDatabaseQueryXcelSheet ins = new InsertStudentsDatabaseQueryXcelSheet();
            
             
               Exam.examSent = false;
               return ins.excelSheetInsertExam(studentsMap, Exam.examCase);
               
           }
           else{
           InsertStudentsDatabaseQueryXcelSheet ins = new InsertStudentsDatabaseQueryXcelSheet();
           ins.createPreparedStatement();
           return ins.excelSheetQuery(studentsMap);
           }
        }
       
     
       
       

 static void readXls(File inputFile) 
{
try 
{
        // Get the workbook instance for XLS file
         HSSFWorkbook workbook = new HSSFWorkbook(new FileInputStream(inputFile));
        // Get first sheet from the workbook
         HSSFSheet sheet = workbook.getSheetAt(0);
        Cell cell;
        Row row;

        // Iterate through each rows from first sheet
        Iterator<Row> rowIterator = sheet.iterator();
        
        while (rowIterator.hasNext()) 
        {
                row = rowIterator.next();

                // For each row, iterate through each columns
                 Iterator<Cell> cellIterator = row.cellIterator();
                
                while (cellIterator.hasNext()) 
                {
                cell = cellIterator.next();

                 switch (cell.getCellType()) 
                {

                 case Cell.CELL_TYPE_BOOLEAN:
                         System.out.println(cell.getBooleanCellValue());
                        break;

                 case Cell.CELL_TYPE_NUMERIC:
                         System.out.println(cell.getNumericCellValue());
                        break;

                 case Cell.CELL_TYPE_STRING:
                          System.out.println(cell.getStringCellValue());
                        break;

                     
                  case Cell.CELL_TYPE_BLANK:
                        System.out.println(" ");
                        break;

                 default:
                        System.out.println(cell);
                }
                }
        }

} 

catch (FileNotFoundException e) 
{
        System.err.println("Exception" + e.getMessage());
}
catch (IOException e) 
{
        System.err.println("Exception" + e.getMessage());
}
}

}


