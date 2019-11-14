package org.dkit.camunda.simple_hiring_process_app.repository;

import org.springframework.stereotype.Repository;
import org.dkit.camunda.simple_hiring_process_app.entity.Skill;
import org.springframework.data.repository.CrudRepository;

@Repository
public interface SkillRepository extends CrudRepository<Skill, Long>{
}