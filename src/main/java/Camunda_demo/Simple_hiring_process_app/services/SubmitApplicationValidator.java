package Camunda_demo.Simple_hiring_process_app.services;

import org.camunda.bpm.engine.impl.form.validator.FormFieldValidator;
import org.camunda.bpm.engine.impl.form.validator.FormFieldValidatorContext;
import org.camunda.bpm.engine.variable.value.ObjectValue;

import Camunda_demo.Simple_hiring_process_app.models.Requisition;

import java.util.Map;
import java.util.logging.Logger;

public class SubmitApplicationValidator implements FormFieldValidator {

    private final Logger LOGGER = Logger.getLogger(SubmitApplicationValidator.class.getName());

    @Override
    public boolean validate(Object submittedValue, FormFieldValidatorContext validatorContext) {
        LOGGER.info("test validator");
        System.out.println("test validator 123");
        // get access to all form fields submitted in the form submit
        Map<String,Object> completeSubmit = validatorContext.getSubmittedValues();
        Requisition requisition = (Requisition)((ObjectValue)completeSubmit.get("requisition")).getValue();
        LOGGER.info("submitted variables: " + completeSubmit);
        LOGGER.info("requisition: " + requisition.toString());
        return false;
    }

    
} 