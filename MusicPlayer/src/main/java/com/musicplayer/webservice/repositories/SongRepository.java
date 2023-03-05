package com.musicplayer.webservice.repositories;

import com.musicplayer.webservice.model.entity.Song;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface SongRepository extends CrudRepository<Song, UUID> {
    public Optional<Song> findById(UUID id);
}
