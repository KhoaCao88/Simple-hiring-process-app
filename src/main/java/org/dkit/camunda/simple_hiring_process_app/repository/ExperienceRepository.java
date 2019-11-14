package org.dkit.camunda.simple_hiring_process_app.repository;

import org.springframework.stereotype.Repository;
import org.dkit.camunda.simple_hiring_process_app.entity.Experience;
import org.springframework.data.repository.CrudRepository;

@Repository
public interface ExperienceRepository extends CrudRepository<Experience, Long>{

}