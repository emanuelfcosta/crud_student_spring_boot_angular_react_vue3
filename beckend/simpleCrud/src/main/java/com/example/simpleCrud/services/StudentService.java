package com.example.simpleCrud.services;

import com.example.simpleCrud.entities.Student;
import com.example.simpleCrud.repositories.StudentRepository;
import com.example.simpleCrud.services.exceptions.DatabaseException;
import com.example.simpleCrud.services.exceptions.ResourceNotFoundException;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {
    @Autowired
    private StudentRepository studentRepository;

    public List<Student> findAll(){
        return studentRepository.findAll();
    }

    public Student findById(Long id){
        Optional<Student> obj = studentRepository.findById(id);

        return obj.orElseThrow(() -> new ResourceNotFoundException(id));
    }

    public Student insert(Student obj){
        return studentRepository.save(obj);
    }

    public void delete(Long id){
        try{
          studentRepository.deleteById(id);
        } catch (EmptyResultDataAccessException e){
            throw new ResourceNotFoundException(id);
        } catch(DataIntegrityViolationException e){
            throw new DatabaseException(e.getMessage());
        }
    }

    public Student update(Long id, Student obj){
        try{
            Student entity = studentRepository.getReferenceById(id);

            entity.setName(obj.getName());
            entity.setEmail(obj.getEmail());

            return studentRepository.save(entity);
        } catch(EntityNotFoundException e){
            throw new ResourceNotFoundException(id);
        }
    }
}
