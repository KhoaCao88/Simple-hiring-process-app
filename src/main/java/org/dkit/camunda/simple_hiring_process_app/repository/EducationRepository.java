package org.dkit.camunda.simple_hiring_process_app.repository;

import org.springframework.stereotype.Repository;
import org.dkit.camunda.simple_hiring_process_app.entity.Education;
import org.springframework.data.repository.CrudRepository;

@Repository
public interface EducationRepository extends CrudRepository<Education, Long>{
}