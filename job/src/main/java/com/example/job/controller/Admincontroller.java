package com.example.job.controller;

// import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.example.job.model.Admin;
// import com.example.job.repository.Adminrepo;
import com.example.job.service.Adminservice;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.RequestParam;



@RestController
public class Admincontroller {

    @Autowired
    private Adminservice adminservice;
  

    @PostMapping("/postadmin")
    public String postMethodName(@RequestBody Admin admin) {
      adminservice.saveAdmin(admin);
       return "Saved in DB";
    }

    
    
}
