package com.musicplayer.webservice.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.persistence.ManyToMany;
import java.math.BigInteger;
import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Songs extends BaseId{
    private String name;
    private String description;
    private String lyrics;
    private BigInteger likes;
    private Date releaseDate;
    private Genre genre;

    @ManyToMany
    @JsonIgnore
    @JoinColumn(name = "artist_id")
    private List<Artist> artists;
}
