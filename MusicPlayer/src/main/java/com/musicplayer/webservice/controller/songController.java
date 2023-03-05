package com.musicplayer.webservice.controller;

import com.musicplayer.webservice.model.entity.Song;
import com.musicplayer.webservice.services.song.SongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/song")
public class songController {

    @Autowired
    SongService songService;

    @GetMapping()
    public ResponseEntity<List<Song>> getAllSongs(){
        return ResponseEntity.ok(songService.getAllSongs());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Song> getSongById(@PathVariable UUID id){
        Optional<Song> song = songService.findById(id);
        if(song.isPresent()){
            return ResponseEntity.ok(song.get());
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping()
    public ResponseEntity<Song> addSong(@RequestBody @Valid Song song){
        return ResponseEntity.ok(songService.addSong(song));
    }
}
