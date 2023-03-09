package com.musicplayer.webservice.model.entity;

import com.musicplayer.webservice.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;


// TODO : Custom Annotation to create random UUID


@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "userTable")
@Builder
public class User extends BaseId implements UserDetails {
    private String name;


    private String firstname;
    private String lastname ;
    private String email;
    private String wishList;

    private String password;

    private boolean archived;

    private Role role;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return archived;
    }

    @Override
    public boolean isAccountNonLocked() {
        return archived;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return archived;
    }

    @Override
    public boolean isEnabled() {
        return archived;
    }
}
