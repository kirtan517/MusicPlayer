package com.musicplayer.webservice.services.song;


import com.musicplayer.webservice.model.entity.Song;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface SongService {
    List<Song> getAllSongs();

    Optional<Song> findById(UUID id);
}
