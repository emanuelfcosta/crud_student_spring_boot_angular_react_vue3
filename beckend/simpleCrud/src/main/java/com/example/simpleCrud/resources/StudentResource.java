package com.example.simpleCrud.resources;

import com.example.simpleCrud.entities.Student;
import com.example.simpleCrud.services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping(value = "/students")
public class StudentResource {
    @Autowired
    private StudentService studentService;

    @GetMapping
    public ResponseEntity<List<Student>> findAll(){
        List<Student> list = studentService.findAll();
        return ResponseEntity.ok().body(list);
    }
    @GetMapping(value = "/{id}")
    public ResponseEntity<Student> findById(@PathVariable Long id){
        Student obj = studentService.findById(id);
        return ResponseEntity.ok().body(obj);
    }

    @PostMapping
    public ResponseEntity<Student> insert(@RequestBody Student obj){
        obj = studentService.insert(obj);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();
        return ResponseEntity.created(uri).body(obj);

    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<Student> update(@PathVariable Long id, @RequestBody Student obj){
        obj = studentService.update(id,obj);
        return ResponseEntity.ok().body(obj);
    }


    @DeleteMapping(value="/{id}")
    public ResponseEntity<Void> delete (@PathVariable Long id){
        studentService.delete(id);
        return ResponseEntity.noContent().build();

    }


}
