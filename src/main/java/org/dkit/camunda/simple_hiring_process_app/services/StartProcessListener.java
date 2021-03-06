package org.dkit.camunda.simple_hiring_process_app.services;

import java.util.Date;
import java.util.logging.Logger;

import org.camunda.bpm.engine.delegate.DelegateExecution;
import org.camunda.bpm.engine.delegate.ExecutionListener;

public class StartProcessListener implements ExecutionListener {

    private final Logger LOGGER = Logger.getLogger(StartProcessListener.class.getName());

    @Override
    public void notify(DelegateExecution execution) throws Exception {
        
        LOGGER.info("Simple_hiring_process_app - Start");
        //generating referenceNo
        String refNo = "SH" + String.valueOf(new Date().getTime());
        //Set the variable into top execution scope
        execution.setVariable("referenceNo", refNo);
    }
}