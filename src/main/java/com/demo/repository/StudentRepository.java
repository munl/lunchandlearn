package com.demo.repository;

import com.demo.domain.Student;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import java.util.List;

/**
 * Spring Data JPA repository for the Student entity.
 */
@SuppressWarnings("unused")
@Repository
public interface StudentRepository extends JpaRepository<Student,Long> {

    @Query("select distinct student from Student student left join fetch student.courses")
    List<Student> findAllWithEagerRelationships();

    @Query("select student from Student student left join fetch student.courses where student.id =:id")
    Student findOneWithEagerRelationships(@Param("id") Long id);

}
