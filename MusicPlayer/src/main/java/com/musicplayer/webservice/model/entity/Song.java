package com.musicplayer.webservice.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.musicplayer.webservice.enums.Genre;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigInteger;
import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Song extends BaseId{
    private String name;
    private String description;
    private String lyrics;
    private BigInteger likes;
    private Date releaseDate;
    @Enumerated(EnumType.STRING)
    private Genre genre;

    @ManyToMany()
    @JsonIgnore
    @JoinColumn(name = "artist_id")
    private List<Artist> artists;
}
