package edu.ctct.ctctelearning.service;
import org.springframework.security.core.userdetails.UserDetailsService;

import edu.ctct.ctctelearning.model.User;
import edu.ctct.ctctelearning.web.dto.UserRegistrationDto;



public interface UserService extends UserDetailsService {

    User findByEmail(String email);

    User save(UserRegistrationDto registration);
}