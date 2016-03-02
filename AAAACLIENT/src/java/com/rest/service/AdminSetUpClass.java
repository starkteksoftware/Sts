/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.service;

import ServerPackage.Server;
import javax.swing.JOptionPane;

/**
 *
 * @author bola odesile
 */
public class AdminSetUpClass {
    static ServerPackage.Server server = null;
    public static void startServer(){
    
        
        
        
        if(server!= null){
            server.doConnect();
            return ;
        }
        server = new Server();
          server.doConnect();
    }
    
    
    public static void stopServer(){
      
        if(server != null){
            server.close();
        }
    }
}
