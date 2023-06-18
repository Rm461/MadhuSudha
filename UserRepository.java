package com.fullstack.cbit.repository;

import com.fullstack.cbit.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}

