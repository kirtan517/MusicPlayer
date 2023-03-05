package com.musicplayer.webservice.model.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


import javax.persistence.Entity;



// TODO : Custom Annotation to create random UUID


@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class User extends BaseId{
    private String name;
    private String wishList;
}
