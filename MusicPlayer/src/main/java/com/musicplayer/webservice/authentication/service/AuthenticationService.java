package com.musicplayer.webservice.authentication.service;

import com.musicplayer.webservice.authentication.entity.AuthenticateRequest;
import com.musicplayer.webservice.authentication.entity.AuthenticationResponse;
import com.musicplayer.webservice.authentication.entity.RegisterRequest;
import com.musicplayer.webservice.enums.Role;
import com.musicplayer.webservice.model.entity.User;
import com.musicplayer.webservice.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    PasswordEncoder passwordEncoder;
    @Autowired
    JwtService jwtService;

    @Autowired
    AuthenticationManager authenticationManager;


    public AuthenticationResponse register(RegisterRequest registerRequest){
        User user = User.builder().firstname(registerRequest.getFirstName())
                .lastname(registerRequest.getLastName())
                .email(registerRequest.getEmail())
                .password( passwordEncoder.encode(registerRequest.getPassword()))
                .role(Role.USER)
                .build();

        userRepository.save(user);
        return AuthenticationResponse.builder().token(jwtService.generateToken(user)).build();
    }

    public AuthenticationResponse authenticate(AuthenticateRequest authenticateRequest){
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        authenticateRequest.getEmail(),
                        authenticateRequest.getPassword()
                )
        );
        User user = userRepository.findByEmail(authenticateRequest.getEmail()).orElseThrow();
        return AuthenticationResponse.builder().token(jwtService.generateToken(user)).build();

    }
}
