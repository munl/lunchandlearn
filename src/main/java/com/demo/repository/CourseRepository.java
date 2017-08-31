package com.demo.repository;

import com.demo.domain.Course;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the Course entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CourseRepository extends JpaRepository<Course,Long> {


    @Query("select course from Course course left join fetch course.students where course.id =:id")
    Course findOneWithEagerRelationships(@Param("id") Long id);

}
