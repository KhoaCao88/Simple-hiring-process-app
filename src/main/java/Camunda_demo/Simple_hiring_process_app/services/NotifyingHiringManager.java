package Camunda_demo.Simple_hiring_process_app.services;

import java.util.logging.Logger;

import org.camunda.bpm.engine.delegate.DelegateExecution;
import org.camunda.bpm.engine.delegate.JavaDelegate;
import org.springframework.stereotype.Component;

import Camunda_demo.Simple_hiring_process_app.LoggerDelegate;

@Component("notifyingHiringManager")
public class NotifyingHiringManager implements JavaDelegate {

	private final Logger LOGGER = Logger.getLogger(LoggerDelegate.class.getName());
	
	@Override
	public void execute(DelegateExecution execution) throws Exception {
		LOGGER.info("Notifying hiring manager");
	}

}
