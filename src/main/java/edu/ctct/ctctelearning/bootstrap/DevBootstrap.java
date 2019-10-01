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

@Component
public class DevBootstrap implements ApplicationListener<ContextRefreshedEvent> {
    @Autowired
    CourseRepository courseRepository;
    @Override
    public void onApplicationEvent(ContextRefreshedEvent contextRefreshedEvent) {
        initData();
    }
    public void initData() {
        Course course1 = new Course();
        course1.setName("Math");
        course1.setDescription("some description");
        course1.setLectures(new TreeSet<Lecture>(Comparator.comparing(Lecture::getIndex)));
        courseRepository.save(course1);
    }
}