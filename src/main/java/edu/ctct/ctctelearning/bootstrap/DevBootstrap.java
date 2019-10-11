package edu.ctct.ctctelearning.bootstrap;

import java.util.Comparator;
import java.util.TreeSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

import edu.ctct.ctctelearning.model.Course;
import edu.ctct.ctctelearning.model.Lecture;
import edu.ctct.ctctelearning.repository.CourseRepository;
import edu.ctct.ctctelearning.service.UserService;
import edu.ctct.ctctelearning.web.dto.UserRegistrationDto;

@Component
public class DevBootstrap implements ApplicationListener<ContextRefreshedEvent> {
    @Autowired
    private CourseRepository courseRepository;
    @Autowired
    private UserService userService;
    @Override
    public void onApplicationEvent(ContextRefreshedEvent contextRefreshedEvent) {
        initData();
    }
    public void initData() {
        UserRegistrationDto admin = new UserRegistrationDto();
        admin.setFirstName("admin");
        admin.setLastName("admin");
        admin.setEmail("admin");
        admin.setEmailDomain("admin.com");
        admin.setPassword("admin");
        userService.save(admin);
        Course course1 = new Course();
        course1.setName("Math");
        course1.setDescription("some description");
        course1.setLectures(new TreeSet<Lecture>(Comparator.comparing(Lecture::getIndex)));
        courseRepository.save(course1);
    }
}