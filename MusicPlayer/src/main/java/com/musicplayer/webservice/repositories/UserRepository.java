package com.musicplayer.webservice.repositories;

import com.musicplayer.webservice.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface UserRepository extends JpaRepository <User, UUID>{
    public Optional<User> findByEmail(String email);
}
