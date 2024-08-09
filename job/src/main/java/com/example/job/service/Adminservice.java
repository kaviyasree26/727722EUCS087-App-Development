package com.example.job.service;

// import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.job.model.Admin;
import com.example.job.repository.Adminrepo;

@Service
public class Adminservice {

    @Autowired
    private Adminrepo adminrepo;
    
    public Admin saveAdmin(Admin admin)
    {
        return adminrepo.save(admin);
    }
  
}
