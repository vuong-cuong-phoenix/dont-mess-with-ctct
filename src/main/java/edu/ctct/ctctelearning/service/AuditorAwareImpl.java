package edu.ctct.ctctelearning.service;

import java.util.Optional;

import org.springframework.data.domain.AuditorAware;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import edu.ctct.ctctelearning.model.User;

@Service
public class AuditorAwareImpl implements AuditorAware<User> {
    @Override
    public Optional<User> getCurrentAuditor() {
        return Optional.ofNullable(SecurityContextHolder.getContext())
			  .map(SecurityContext::getAuthentication)
			  .filter(Authentication::isAuthenticated)
			  .map(Authentication::getPrincipal)
			  .map(User.class::cast);
    }
}