package com.musicplayer.webservice.controller;


import com.musicplayer.webservice.model.entity.BaseId;
import com.musicplayer.webservice.model.entity.User;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

    @GetMapping
    public String getUser(){
        return "Hello from user";
    }

    @PostMapping
    public User setUser(@RequestBody User userController){
        return new User();
    }
}
