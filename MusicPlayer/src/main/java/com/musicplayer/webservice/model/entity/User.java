package com.musicplayer.webservice.model.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;


// TODO : Custom Annotation to create random UUID


@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "userTable")
public class User extends BaseId{
    private String name;
    private String wishList;
}
