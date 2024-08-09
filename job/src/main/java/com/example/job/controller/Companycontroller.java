package com.example.job.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.job.model.Company;
import com.example.job.repository.Companyrepo;
import com.example.job.service.Companyservice;

@RestController
public class Companycontroller {

    @Autowired
     private Companyservice companyservice;

    @Autowired
    private Companyrepo companyrepo;

    @PostMapping("/posting")
    public String postMethodName1(@RequestBody Company company) {
        companyservice.saveCompany(company);
        return "Saved in DB";
    }
    @GetMapping("/listcompany")
    public List<Company> getList() {
        return companyrepo.findAll();
    }
    @GetMapping("/getCompany/{job}")
    public List<Company> getCompanies(@PathVariable String job) {
        return companyservice.getByEmailId(job);
    }
    
}
