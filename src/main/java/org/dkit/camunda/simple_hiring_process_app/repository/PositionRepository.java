package org.dkit.camunda.simple_hiring_process_app.repository;

import org.springframework.stereotype.Repository;
import org.dkit.camunda.simple_hiring_process_app.entity.Position;
import org.springframework.data.repository.CrudRepository;

@Repository
public interface PositionRepository extends CrudRepository<Position, Long>{
}