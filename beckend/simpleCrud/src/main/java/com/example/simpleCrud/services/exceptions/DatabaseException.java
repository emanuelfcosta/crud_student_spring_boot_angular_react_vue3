package com.example.simpleCrud.services.exceptions;

import java.io.Serial;

public class DatabaseException extends  RuntimeException {
    @Serial
    private static final long serialVersionUID = 2359882190497158536L;

    public DatabaseException(String msg){
        super(msg);
    }
}
