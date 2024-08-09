package com.example.job.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.example.job.model.Jobseeker;
import com.example.job.repository.Jobseekerrepo;
import com.example.job.service.Jobseekerservice;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
public class Jobseekercontroller {

    @Autowired
    private Jobseekerservice jobseekerservice;
    @Autowired
    private Jobseekerrepo jobseekerrepo;

    @PostMapping("/post")
    public String postMethodName2(@RequestBody Jobseeker jobseeker) {
        jobseekerservice.saveJobseeker(jobseeker);
        return "Saved in DB";
    }
    @GetMapping("/listjobseeker")
    public List<Jobseeker> getList2() {
        return jobseekerrepo.findAll();
    }
    @GetMapping("/getJobseeker/{job}")
    public List<Jobseeker> getJobseekers(@PathVariable String job) {
        return jobseekerservice.getByEmailId(job);
    }
    
}

