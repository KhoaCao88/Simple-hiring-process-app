package org.dkit.camunda.simple_hiring_process_app;

import org.camunda.bpm.spring.boot.starter.annotation.EnableProcessApplication;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
@EnableProcessApplication("Simple-hiring-process-app")
public class CamundaApplication{
	public static void main(String... args) {
		SpringApplication.run(CamundaApplication.class, args);
	}
}
