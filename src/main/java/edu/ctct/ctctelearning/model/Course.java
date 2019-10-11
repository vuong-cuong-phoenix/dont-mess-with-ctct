package edu.ctct.ctctelearning.model;

import java.util.Collection;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToMany;

@Entity
public class Course extends BaseEntity {
    private String name;
    private String title;
    private int rating; 
    private int ratingCount;
    private int viewCount;
    private String lecturer;

    private String description;
    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL)
    private Collection<Comment> comment;
    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL)
    private Collection<Lecture> lectures;

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
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

    public int getRatingCount() {
        return ratingCount;
    }

    public void setRatingCount(int ratingCount) {
        this.ratingCount = ratingCount;
    }

    public int getViewCount() {
        return viewCount;
    }

    public void setViewCount(int viewCount) {
        this.viewCount = viewCount;
    }

    public String getLecturer() {
        return lecturer;
    }

    public void setLecturer(String lecturer) {
        this.lecturer = lecturer;
    }

    public Collection<Comment> getComment() {
        return comment;
    }

    public void setComment(Collection<Comment> comment) {
        this.comment = comment;
    }

}