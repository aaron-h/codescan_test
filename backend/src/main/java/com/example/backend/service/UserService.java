package com.example.backend.service;

import com.example.backend.entity.User;
import java.util.List;

public interface UserService {
    List<User> findAll();
    User findById(Integer id);
    User save(User user);
    void update(User user);
    void delete(Integer id);
}