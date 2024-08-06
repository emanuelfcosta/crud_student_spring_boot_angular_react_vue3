package com.example.simpleCrud.services.exceptions;

import java.io.Serial;

public class ResourceNotFoundException extends RuntimeException {
    @Serial
    private static final long serialVersionUID = 351353253573870866L;

    public ResourceNotFoundException(Object id){
        super("Resource not found. Id" + id);
    }
}
