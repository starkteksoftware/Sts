/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.service;

/**
 *
 * @author bola odesile
 */
public class ExamScheduler {
    
    
    private String examName;
    private String examDate;
    private String examTime;
    private String durationInMinutes;
    private String amountOfQuestions;
    private String feedBack;

    public String getExamName() {
        return examName;
    }

    
    public void setExamName(String examName) {
        this.examName = examName;
    }

    public String getExamDate() {
        return examDate;
    }

    
    
    public void setExamDate(String examDate) {
        this.examDate = examDate;
    }

    public String getExamTime() {
        return examTime;
    }

    public void setExamTime(String examTime) {
        this.examTime = examTime;
    }

    public String getDurationInMinutes() {
        return durationInMinutes;
    }

    public void setDurationInMinutes(String durationInMinutes) {
        this.durationInMinutes = durationInMinutes;
    }

    public String getAmountOfQuestions() {
        return amountOfQuestions;
    }

    public void setAmountOfQuestions(String amountOfQuestions) {
        this.amountOfQuestions = amountOfQuestions;
    }

    public String getFeedBack() {
        return feedBack;
    }

    public void setFeedBack(String feedBack) {
        this.feedBack = feedBack;
    }
    
    
    
}
