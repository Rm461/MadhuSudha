package com.fullstack.cbit.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class User {
    @Id
    @GeneratedValue
    private Long Id;
    private String PassengerName;
    private String email;
    private Long Phoneno;
    private String FlightName;
    private String Depature;
    private String Destination;

    public Long getId() {
        return Id;
    }

    public void setId(Long Id) {
        this.Id = Id;
    }



    public String getPassengerName() {
        return PassengerName;
    }

    public void setPassengerName(String PassengerName) {
        this.PassengerName = PassengerName;
    }
    public Long getPhoneno() { return Phoneno; }

    public void setPhoneno(Long phoneno) {
        this.Phoneno = phoneno;
    }

    public String getEmail() {
        return email;
    }


    public void setEmail(String email) {
        this.email = email;
    }

    public String getFlightName() {
        return FlightName;
    }

    public void setFlightName(String flightName) {
        this.FlightName = flightName;
    }

    public String getDepature() {

        return Depature;
    }

    public void setDepature(String depature) {
        this.Depature = depature;
    }

    public String getDestination() {
        return Destination;
    }

    public void setDestination(String destination) {
        this.Destination = destination;
    }
}
