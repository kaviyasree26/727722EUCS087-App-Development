package com.example.job.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.job.model.Company;


import java.util.List;


public interface Companyrepo extends JpaRepository<Company,Integer> {
    
    public List<Company> findByCompanyId(int companyId);
    public List<Company> findByEmailId(String emailId);
    public List<Company> findByEmailIdStartsWith(String emailId);
    public List<Company>findAll();

}
