package com.musicplayer.webservice.model.entity;

import com.musicplayer.webservice.enums.Gender;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import java.math.BigDecimal;
import java.util.Date;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Artist extends  BaseId{
    private String firstName;
    private String lastName;
    private String stageName;
    private Date birthdate;
    private BigDecimal billBoardRating;

}
