package com.musicplayer.webservice.model.entity;
import lombok.Data;
import org.hibernate.annotations.Entity;

import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import java.rmi.server.UID;
import java.util.UUID;

@Data
@MappedSuperclass
public abstract class BaseId {
    @Id
    private UUID id;

    BaseId(){
        this.id = UUID.randomUUID();
    }

}
