package org.dkit.camunda.simple_hiring_process_app.repository;

import org.springframework.stereotype.Repository;
import org.dkit.camunda.simple_hiring_process_app.entity.Requisition;
import org.springframework.data.repository.CrudRepository;

@Repository
public interface RequisitionRepository extends CrudRepository<Requisition, Long>{
}