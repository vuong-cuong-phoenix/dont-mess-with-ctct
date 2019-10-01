package edu.ctct.ctctelearning.web.dto;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import edu.ctct.ctctelearning.constraint.FieldMatch;

@FieldMatch(first = "password", second = "confirmPassword", message = "The password fields must match")
public class UserRegistrationDto {

    @NotEmpty
    private String firstName;

    @NotEmpty
    private String lastName;

    @NotEmpty
    private String password;

    @NotEmpty
    private String confirmPassword;

    @NotEmpty
    @Size(min = 4, max = 64)
    private String email;
    @NotEmpty
    private String emailDomain;
    // @NotEmpty
    // private String school;
    // @NotEmpty
    // private String faculty;
    // @NotEmpty
    // private int year;
    // @NotEmpty
    // private String phoneNumber;

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getConfirmPassword() {
        return confirmPassword;
    }

    public void setConfirmPassword(String confirmPassword) {
        this.confirmPassword = confirmPassword;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    // public String getSchool() {
    // return school;
    // }

    // public void setSchool(String school) {
    // this.school = school;
    // }

    // public String getFaculty() {
    // return faculty;
    // }

    // public void setFaculty(String faculty) {
    // this.faculty = faculty;
    // }

    // public int getYear() {
    // return year;
    // }

    // public void setYear(int year) {
    // this.year = year;
    // }

    // public String getPhoneNumber() {
    // return phoneNumber;
    // }

    // public void setPhoneNumber(String phoneNumber) {
    // this.phoneNumber = phoneNumber;
    // }

    public String getEmailDomain() {
        return emailDomain;
    }

    public void setEmailDomain(String emailDomain) {
        this.emailDomain = emailDomain;
    }

}