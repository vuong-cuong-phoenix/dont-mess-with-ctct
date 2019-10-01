package edu.ctct.ctctelearning.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import edu.ctct.ctctelearning.model.Course;



@Repository
public interface CourseRepository extends JpaRepository < Course, Long > {
}