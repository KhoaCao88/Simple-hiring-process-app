package Camunda_demo.Simple_hiring_process_app.services;

import java.util.Date;
import java.util.logging.Logger;

import org.camunda.bpm.engine.delegate.DelegateExecution;
import org.camunda.bpm.engine.delegate.ExecutionListener;

import Camunda_demo.Simple_hiring_process_app.models.Position;
import Camunda_demo.Simple_hiring_process_app.models.Qualification;
import Camunda_demo.Simple_hiring_process_app.models.Requisition;

public class StartProcessListener implements ExecutionListener {

    private final Logger LOGGER = Logger.getLogger(StartProcessListener.class.getName());

    @Override
    public void notify(DelegateExecution execution) throws Exception {
        
        LOGGER.info("Simple_hiring_process_app - Start");
        //generating referenceNo
        String refNo = "SH" + String.valueOf(new Date().getTime());
        Requisition requisition = new Requisition();
        Qualification qualification = new Qualification();
        Position position = new Position();

        execution.setVariable("referenceNo", refNo);
        // execution.setVariable("requisition", requisition);
        // execution.setVariable("qualification", qualification);
        // execution.setVariable("position", position);
    }
}