package com.example.movies;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("docker-frontend88-ejeyh2b6evd0fdak.uaenorth-01.azurewebsites.net")
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowCredentials(true); 
    }
}
