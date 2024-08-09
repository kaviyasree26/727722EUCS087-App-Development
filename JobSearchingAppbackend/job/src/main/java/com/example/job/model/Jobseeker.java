package com.example.job.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class Jobseeker {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int jobseekerId;
    private String name;
    private String emailId;
    private String password;
    private String course;
    private String city;
    private String country;

}
