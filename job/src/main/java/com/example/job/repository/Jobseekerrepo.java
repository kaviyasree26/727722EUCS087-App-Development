package com.example.job.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.job.model.Jobseeker;
import java.util.List;


public interface Jobseekerrepo extends JpaRepository<Jobseeker,Integer> {
    
    public List<Jobseeker> findByJobseekerId(int jobseekerId);
    public List<Jobseeker> findByEmailId(String emailId);
    public List<Jobseeker> findByEmailIdStartsWith(String emailId);
    public List<Jobseeker>findAll();
   
   

}
