package com.demo.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A School.
 */
@Entity
@Table(name = "school")
public class School implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "district")
    private Integer district;

    @Column(name = "address")
    private String address;

    @OneToOne
    @JoinColumn(unique = true)
    private User principal;

    @OneToMany(mappedBy = "school")
    @JsonIgnore
    private Set<Course> courses = new HashSet<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getDistrict() {
        return district;
    }

    public School district(Integer district) {
        this.district = district;
        return this;
    }

    public void setDistrict(Integer district) {
        this.district = district;
    }

    public String getAddress() {
        return address;
    }

    public School address(String address) {
        this.address = address;
        return this;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public User getPrincipal() {
        return principal;
    }

    public School principal(User user) {
        this.principal = user;
        return this;
    }

    public void setPrincipal(User user) {
        this.principal = user;
    }

    public Set<Course> getCourses() {
        return courses;
    }

    public School courses(Set<Course> courses) {
        this.courses = courses;
        return this;
    }

    public School addCourses(Course course) {
        this.courses.add(course);
        course.setSchool(this);
        return this;
    }

    public School removeCourses(Course course) {
        this.courses.remove(course);
        course.setSchool(null);
        return this;
    }

    public void setCourses(Set<Course> courses) {
        this.courses = courses;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        School school = (School) o;
        if (school.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), school.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "School{" +
            "id=" + getId() +
            ", district='" + getDistrict() + "'" +
            ", address='" + getAddress() + "'" +
            "}";
    }
}
