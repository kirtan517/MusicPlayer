package com.musicplayer.webservice.repositories;

import com.musicplayer.webservice.model.entity.Song;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface SongRepository extends JpaRepository<Song, UUID> {
    public Optional<Song> findById(UUID id);
}
