package com.musicplayer.webservice.model.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;
import org.springframework.boot.autoconfigure.domain.EntityScan;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.rmi.server.UID;
import java.util.UUID;


// TODO : Custom Annotation to create random UUID


@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class User extends BaseId{
    private String name;
    private String wishList;
}
