package org.dkit.camunda.simple_hiring_process_app.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.GenerationType;

@Entity
public class Department{

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "department_seq_gen")
    @SequenceGenerator(name = "department_seq_gen", sequenceName = "DEPARTMENT_SEQ")
    private Long id;

    @Column
    private String code;

    @Column
    private String name;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}