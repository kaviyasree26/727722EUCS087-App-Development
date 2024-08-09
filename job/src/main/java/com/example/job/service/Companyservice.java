package com.example.job.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.job.model.Company;
import com.example.job.repository.Companyrepo;
@Service
public class Companyservice {

    @Autowired
    private Companyrepo companyrepo;

    public Company saveCompany(Company company)
    {
        return companyrepo.save(company);
    }
    public List<Company> getByEmailId(String EmailId)
    {
        return companyrepo.findByEmailId(EmailId);
    }
}
