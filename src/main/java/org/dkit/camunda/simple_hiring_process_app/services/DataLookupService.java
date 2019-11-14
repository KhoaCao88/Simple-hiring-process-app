package org.dkit.camunda.simple_hiring_process_app.services;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.dkit.camunda.simple_hiring_process_app.entity.Department;
import org.dkit.camunda.simple_hiring_process_app.entity.Education;
import org.dkit.camunda.simple_hiring_process_app.entity.Experience;
import org.dkit.camunda.simple_hiring_process_app.entity.Location;
import org.dkit.camunda.simple_hiring_process_app.entity.Skill;
import org.dkit.camunda.simple_hiring_process_app.repository.DepartmentRepository;
import org.dkit.camunda.simple_hiring_process_app.repository.EducationRepository;
import org.dkit.camunda.simple_hiring_process_app.repository.ExperienceRepository;
import org.dkit.camunda.simple_hiring_process_app.repository.LocationRepository;
import org.dkit.camunda.simple_hiring_process_app.repository.SkillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class DataLookupService{

    @Autowired 
    SkillRepository skillRepository;
    @Autowired
    EducationRepository educationRepository;
    @Autowired 
    ExperienceRepository experienceRepository;
    @Autowired
    LocationRepository locationRepository;
    @Autowired
    DepartmentRepository departmentRepository;

    public List<Skill> fetchAllSkills(){
        List<Skill> results = new ArrayList<Skill>();
        Iterator iterator = skillRepository.findAll().iterator();
        while(iterator.hasNext()){
            results.add((Skill) iterator.next());
        }
        return results;
    }

    public List<Education> fetchAllEducations(){
        List<Education> results = new ArrayList<Education>();
        Iterator iterator = educationRepository.findAll().iterator();
        while(iterator.hasNext()){
            results.add((Education) iterator.next());
        }
        return results;
    }

    public List<Experience> fetchAllExperience(){
        List<Experience> results = new ArrayList<Experience>();
        Iterator iterator = experienceRepository.findAll().iterator();
        while(iterator.hasNext()){
            results.add((Experience) iterator.next());
        }
        return results;
    }

    public List<Department> fetchAllDepartments(){
        List<Department> results = new ArrayList<Department>();
        Iterator iterator = departmentRepository.findAll().iterator();
        while(iterator.hasNext()){
            results.add((Department) iterator.next());
        }
        return results;
    }

    public List<Location> fetchAllLocations(){
        List<Location> results = new ArrayList<Location>();
        Iterator iterator = locationRepository.findAll().iterator();
        while(iterator.hasNext()){
            results.add((Location) iterator.next());
        }
        return results;
    }
}