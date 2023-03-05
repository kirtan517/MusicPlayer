package com.musicplayer.webservice.services.song;

import com.musicplayer.webservice.model.entity.Song;
import com.musicplayer.webservice.repositories.SongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class DefaultSongService implements SongService {

    @Autowired
    SongRepository songRepository;

    @Override
    public List<Song> getAllSongs(){
        return (List<Song>) songRepository.findAll();
    }

    @Override
    public Optional<Song> findById(UUID id) {
        return songRepository.findById(id);
    }
}
