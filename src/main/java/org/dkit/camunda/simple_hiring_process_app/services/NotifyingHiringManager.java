package org.dkit.camunda.simple_hiring_process_app.services;

import java.util.logging.Logger;

import org.camunda.bpm.engine.delegate.DelegateExecution;
import org.camunda.bpm.engine.delegate.JavaDelegate;
import org.dkit.camunda.simple_hiring_process_app.LoggerDelegate;
import org.springframework.stereotype.Component;

@Component("notifyingHiringManager")
public class NotifyingHiringManager implements JavaDelegate {

	private final Logger LOGGER = Logger.getLogger(LoggerDelegate.class.getName());
	
	@Override
	public void execute(DelegateExecution execution) throws Exception {
		LOGGER.info("Notifying hiring manager");
	}

}
