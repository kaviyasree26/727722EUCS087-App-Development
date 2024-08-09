package com.example.job.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.job.model.Jobseeker;
import com.example.job.repository.Jobseekerrepo;

@Service
public class Jobseekerservice {

    @Autowired
    private Jobseekerrepo jobseekerrepo;

    public Jobseeker saveJobseeker(Jobseeker jobseeker)
    {
        return jobseekerrepo.save(jobseeker);
    }
    public List<Jobseeker> getByEmailId(String EmailId)
    {
        return jobseekerrepo.findByEmailId(EmailId);
    }
    

    
}



