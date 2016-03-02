/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package ServerPackage;

import Service.FileEvent;
import java.io.EOFException;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.net.ServerSocket;
import java.net.Socket;

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author bola odesile
 */
public class Server {
        private ServerSocket serverSocket = null;
         private Socket socket = null;
          private ObjectInputStream inputStream = null;
           private FileEvent fileEvent;
              private File dstFile = null;
                private FileOutputStream fileOutputStream = null;

    public Server() {
    }
                
                    public void doConnect() {
     try {
          serverSocket = new ServerSocket(4445);
          System.out.println("waiting for connection");
          
          socket = serverSocket.accept();
         
            inputStream = new ObjectInputStream(socket.getInputStream());
            System.out.println("here already");
            
            downloadFile();
            
       } catch (IOException e) {
           e.printStackTrace();
       }
     
    
     
   }
                    
                    
                        public void downloadFile() {
      try {
          

            fileEvent = (FileEvent)inputStream.readObject();

            if (fileEvent.getStatus().equalsIgnoreCase("Error")) {
              System.out.println("Error occurred ..So exiting");
           // System.exit(0);
         }

            String outputFile = fileEvent.getDestinationDirectory() + fileEvent.getFilename();

            if (!new File(fileEvent.getDestinationDirectory()).exists()) {

                new File(fileEvent.getDestinationDirectory()).mkdirs();
          }

         dstFile = new File(outputFile);
          fileOutputStream = new FileOutputStream(dstFile);

            fileOutputStream.write(fileEvent.getFileData());
        fileOutputStream.flush();
           fileOutputStream.close();
          System.out.println("Output file : " + outputFile + " is successfully saved ");
           Thread.sleep(3000);
         // System.exit(0);
	


        }
      catch(EOFException e){
          return;
      }
      catch (IOException e) {
        e.printStackTrace();

        } catch (ClassNotFoundException e) {
     e.printStackTrace();
      } catch (InterruptedException e) {
	

            e.printStackTrace();

        }
       finally{
          try{
            
         if(serverSocket != null)  {
          serverSocket.close();
          Thread.sleep(2000);
          
         }
          }
          catch(IOException e){
             e.printStackTrace();
          }
          catch(InterruptedException e){
              e.printStackTrace();
          }
         doConnect();
      }
     
      
      
      
    

    }
                        
                        
                    public void close(){
                     
                        
                        try{
                    
                            
                        if(socket!= null)
                       socket.close();
                        System.out.println("closed");
                        }
                        catch(IOException e){
                            e.printStackTrace();
                        }
                        
                    }
                        
        
}
