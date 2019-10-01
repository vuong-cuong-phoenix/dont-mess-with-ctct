package edu.ctct.ctctelearning.model;

import java.util.Collection;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String title;
    private String description;
    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL)
    private Collection<Lecture> lectures;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Collection<Lecture> getLectures() {
        return lectures;
    }

    public void setLectures(Collection<Lecture> lectures) {
        this.lectures = lectures;
    }

}