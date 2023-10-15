package com.musicplayerbackend.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    @GetMapping("/")
    public String home(){
        return ("<h1>Welcome</h1>");
    }

    @GetMapping("/api/ping")
    public String getPing() {
        return "OK";
    }

}
