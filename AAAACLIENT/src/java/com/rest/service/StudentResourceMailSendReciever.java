/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.service;

/**
 *
 * @author user
 */
import java.util.*;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.mail.*;
import javax.mail.internet.*;
import javax.activation.*;
public class StudentResourceMailSendReciever {
    
     
    public  static void mailsend( String password, String email,String subject ) throws MessagingException {

         

       String host = "smtp.gmail.com";
    String from = "starkstestingsolution@gmail.com";
    String pass = "Jolaade080";
    Properties props = System.getProperties();
    props.put("mail.smtp.starttls.enable", "true"); // added this line
        props.put("mail.smtp.ssl.trust", false);
    props.put("mail.smtp.host", host);
    props.put("mail.smtp.user", from);
    props.put("mail.smtp.password", pass);
    props.put("mail.smtp.port", "587");
    props.put("mail.smtp.auth", "true");


    String[] to = {email}; // added this line
System.out.println(email);
    Session session = Session.getDefaultInstance(props, null);
    MimeMessage message = new MimeMessage(session);
    message.setFrom(new InternetAddress(from));

    InternetAddress[] toAddress = new InternetAddress[to.length];

    // To get the array of addresses
 /*   for( int i=0; i < to.length; i++ ) { // changed from a while loop
        
        toAddress[i] = new InternetAddress(to[i]);
    }
    System.out.println(Message.RecipientType.TO);

    for( int i=0; i < toAddress.length; i++) { // changed from a while loop
        message.addRecipient(Message.RecipientType.TO, toAddress[i]);
    }*/
    
    toAddress[0] = new InternetAddress(email);   
    message.addRecipient(Message.RecipientType.TO, toAddress[0]);
    message.setSubject(subject);
    message.setText("Your password is "+password);
    Transport transport = session.getTransport("smtp");
    transport.connect(host, from, pass);
    transport.sendMessage(message, message.getAllRecipients());
    transport.close();
    }
     
}

 