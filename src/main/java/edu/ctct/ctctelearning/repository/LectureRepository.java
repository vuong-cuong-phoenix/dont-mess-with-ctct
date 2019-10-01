package edu.ctct.ctctelearning.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import edu.ctct.ctctelearning.model.Lecture;



@Repository
public interface LectureRepository extends JpaRepository < Lecture, Long > {
}